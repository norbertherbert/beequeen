import { useState, useRef, useEffect} from 'react';
import { Label, Tooltip, Checkbox } from 'flowbite-react';
import { ParamCodes } from './ParamCodes.tsx';
import { 
  Param_lorawan_s1_tx_strategy,
  Lorawan_s1_tx_strategy_gui_val,
  LORAWAN_TX_STRATEGY_BITS,
  encode_tx_strategy,
  decode_tx_strategy,

   i32_to_u32,
  parse_txt_as_i32,

} from '../abw/params_at3';
import { DefaultIndicator } from "./DefaultIndicator.tsx";


export function PramLorawanS1TxStrategy({param_const, params_ref, defpar_ref, dummy_state}: {
  param_const: Param_lorawan_s1_tx_strategy,
  params_ref: React.RefObject<Record<string, string|null>>,
  defpar_ref: React.RefObject<Record<string, string|null>|undefined>,
  dummy_state: number
}) {

  const param_str = useRef('');
  const u32_str = useRef('');
  const err_str = useRef('');

  function calculate_initial_state(): Lorawan_s1_tx_strategy_gui_val {

    const par = params_ref.current[param_const.name];
    if ((par === undefined) || (par === null)) {
        return param_const.default_val;
    } else {
      try {
        err_str.current = '';
        param_str.current = par;
        const parsed_param = parse_txt_as_i32(param_str.current);
        u32_str.current = parsed_param.u32_hex;
        const decoded_parsed_param = decode_tx_strategy(parsed_param.i32_num);
        return decoded_parsed_param;
      } catch (err) {
        err_str.current = (err as Error).message;
        param_str.current = par;
        u32_str.current = '';
        return {
          adr_enabled: false,
          dual_tr_static: false,
          dual_tr_motion: false,
          auto_inc_dr_if_oversized: false,
          // rfu4: false,
          // rfu5: false,
          // rfu6: false,
          // rfu7: false,

          _1st_tr_dr0: false,
          _1st_tr_dr1: false,
          _1st_tr_dr2: false,
          _1st_tr_dr3: true,
          _1st_tr_dr4: true,
          _1st_tr_dr5: true,
          _1st_tr_dr6: false,
          _1st_tr_dr7: false,

          _2nd_tr_dr0: true,
          _2nd_tr_dr1: true,
          _2nd_tr_dr2: true,
          _2nd_tr_dr3: false,
          _2nd_tr_dr4: false,
          _2nd_tr_dr5: false,
          _2nd_tr_dr6: false,
          _2nd_tr_dr7: false,
        };
      }
    }
  
  }

  const [state, set_state] = useState<Lorawan_s1_tx_strategy_gui_val|undefined>()

  useEffect(
    () => { 
      set_state(calculate_initial_state);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dummy_state]
  );

  if (state === undefined) { return (<></>); }

 
  function handle_checkbox_change(e: React.ChangeEvent<HTMLInputElement>) {

    if (state === undefined) { return; }

    try {

      const new_state = {
        ...state,
        [e.target.name]: e.target.checked,
      };

      const param_i32 = encode_tx_strategy(new_state);
      const param_u32 = i32_to_u32(param_i32);

      param_str.current = param_i32.toString();
      u32_str.current = `0x${param_u32.toString(16).padStart(8, '0')}`;
      err_str.current =  '';

      params_ref.current[param_const.name] = param_str.current;

      set_state(new_state);

    } catch (err) {

      const new_state = {
        ...state,
        [e.target.name]: false,
      };

      param_str.current = '';
      u32_str.current = '';
      err_str.current = (err as Error).message;

      params_ref.current[param_const.name] = param_str.current;

      set_state(new_state);

    }

  }


  const param_ids = `0x${param_const.id.toString(16).padStart(4, '0')} \u2013 ${param_const.name}`;
  const encoded_param_values = `${param_str.current} ${ (err_str.current === '') ? `\u00a0(${u32_str.current})` : ''}`;
  const downlink_payload = `${1000}${param_const.id.toString(16).padStart(4, '0')}${((4<<3)|1).toString(16).padStart(2, '0')}${u32_str.current.slice(2)}`;

  let defpar = '';
  if (defpar_ref.current !== undefined) {
    const x = defpar_ref.current[param_const.name];
    if (x !== null) {
      defpar = x
    }
  }
  const is_default = param_str.current.toLowerCase() === defpar.toLowerCase();

  return (

    <div className="inline-block">

      <div className="flex justify-start items-center">

        <Label htmlFor={param_const.name} value={param_const.title} />

        <Tooltip content={ `${param_const.desc}` }>
          <DefaultIndicator is_default={is_default} />
        </Tooltip>

      </div>

      <ParamCodes
        param_ids = {param_ids}
        encoded_param_values = {encoded_param_values}
        downlink_payload = {downlink_payload}
        is_error = {err_str.current !== ''}
      />

      <div className="flex max-w-md flex-col gap-0 pt-2" id="checkbox0">
        {
          Object.entries(LORAWAN_TX_STRATEGY_BITS)
          .filter(([, option]) => option.bit < 8 )
          .map( ([key, option]: [string, {desc: string, bit: number}])  => {
            return (

              <div className="flex items-center gap-1" key={key}>
                <Checkbox 
                  id={param_const.name + '_' + key}
                  name={key}
                  checked={(state as unknown as Record<string, boolean>)[key]}
                  onChange={handle_checkbox_change} 
                />
                <Label htmlFor={param_const.name + '_' + key} className="flex">
                  {option.desc}
                </Label>
              </div>

            )
          })
        }
      </div>

      <Label htmlFor="first_tr" value="Enabled data rates for the first transmission" />

      <div className="flex justify-start items-center mb-1" id="first_tr">
        {
          Object.entries(LORAWAN_TX_STRATEGY_BITS)
          .filter(([, option]) => 8 <= option.bit && option.bit < 16 )
          .map( ([key, option]: [string, {desc: string, bit: number}])  => {
            return (

              <div className="flex items-center gap-1 pr-2" key={key}>
                <Checkbox 
                  id={param_const.name + '_' + key}
                  name={key}
                  checked={(state as unknown as Record<string, boolean>)[key]}
                  onChange={handle_checkbox_change} 
                />
                <Label htmlFor={param_const.name + '_' + key} className="flex">
                  {option.desc}
                </Label>
              </div>

            )
          })
        }
      </div>

      <Label htmlFor="second_tr" value="Enabled data rates for the second transmission" />

      <div className="flex justify-start items-center mb-1" id="second_tr">
        {
          Object.entries(LORAWAN_TX_STRATEGY_BITS)
          .filter(([, option]) => 16 <= option.bit )
          .map( ([key, option]: [string, {desc: string, bit: number}])  => {
            return (

              <div className="flex items-center gap-1 pr-2" key={key}>
                <Checkbox 
                  id={param_const.name + '_' + key}
                  name={key}
                  checked={(state as unknown as Record<string, boolean>)[key]}
                  onChange={handle_checkbox_change} 
                />
                <Label htmlFor={param_const.name + '_' + key} className="flex">
                  {option.desc}
                </Label>
              </div>

            )
          })
        }
      </div>



      { (err_str.current !== '') ? (<div className="text-red-500 text-sm" >{err_str.current}</div>) : (<></>) }

    </div>

  )

}