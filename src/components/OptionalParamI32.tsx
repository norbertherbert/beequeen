import { useState, useRef, useEffect } from 'react';
import { Label, TextInput, Tooltip, Checkbox } from 'flowbite-react';
import { ParamCodes } from './ParamCodes.tsx';
import { 
  Optionally_saved_param_i32, 
  Optionally_saved_param_str, 
  parse_txt_as_i32, 
  validate_i32_param 
} from '../abw/params_at3';
import { DefaultIndicator } from "./DefaultIndicator.tsx";


export function OptionalParamI32({param_const, params_ref, dummy_state}: {
  param_const: Optionally_saved_param_i32,
  params_ref: React.RefObject<Record<string, string|null>>,
  dummy_state: number
}) {

  // console.log(defpar_ref !== undefined)

  const param_str = useRef('');
  const u32_str = useRef('');
  const err_str = useRef('');

  function calculate_initial_state(): Optionally_saved_param_str {

    const par = params_ref.current[param_const.name];
    if ((par === undefined) || (par === null)) { 
      
      // return param_const.default_val; 

      const parsed_param = parse_txt_as_i32(param_const.default_val.val.toString());
      param_str.current = parsed_param.i32_num.toString();
      u32_str.current = parsed_param.u32_hex;
      err_str.current = '';

      return {
        save_it_to_config_file: param_const.default_val.save_it_to_config_file,
        str: param_const.default_val.val.toString(),
      }

    }
    
    try {
      
      const parsed_param = parse_txt_as_i32(par);
      validate_i32_param(parsed_param.i32_num, param_const.min_val, param_const.max_val);

      param_str.current = parsed_param.i32_num.toString();
      u32_str.current = parsed_param.u32_hex;
      err_str.current = '';
    
    } catch (err) {
      param_str.current = par;
      u32_str.current = '';
      err_str.current = (err as Error).message;
    }

    return {
      save_it_to_config_file: true,
      str: par,
    };
  
  }

  const [state, set_state] = useState<Optionally_saved_param_str|undefined>()

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

    const is_checked = e.target.checked;
    
    if (is_checked) {
      params_ref.current[param_const.name] = param_str.current;
    } else {
      delete params_ref.current[param_const.name];
    }

    const new_state = {
      save_it_to_config_file: is_checked,
      str: state.str,
    }
    set_state(new_state);

  }


 
  function handle_change(e: React.ChangeEvent<HTMLInputElement>) {

    if (state === undefined) { return; }

    const par = e.target.value;

    try {
      const parsed_param = parse_txt_as_i32(par);
      validate_i32_param(parsed_param.i32_num, param_const.min_val, param_const.max_val);
      param_str.current = parsed_param.i32_num.toString();
      u32_str.current = parsed_param.u32_hex;
      err_str.current = '';
    } catch (err) {
      param_str.current = par;
      u32_str.current = '';
      err_str.current = (err as Error).message;
    }

    params_ref.current[param_const.name] = param_str.current;

    const new_state = {
      save_it_to_config_file: state.save_it_to_config_file,
      str: par,
    }

    set_state(new_state);

  }


  const param_ids = `0x${param_const.id.toString(16).padStart(4, '0')} \u2013 ${param_const.name}`;
  const encoded_param_values = `${param_str.current} ${ (err_str.current === '') ? `\u00a0(${u32_str.current})` : ''}`;
  const downlink_payload = `${1000}${param_const.id.toString(16).padStart(4, '0')}${((4<<3)|1).toString(16).padStart(2, '0')}${u32_str.current.slice(2)}`;




  // let defpar = '';
  // if (defpar_ref.current !== undefined) {
  //   const x = defpar_ref.current[param_const.name];
  //   if (x !== null) {
  //     defpar = x
  //   }
  // }
  // const is_default = param_str.current.toLowerCase() === defpar.toLowerCase();




  return (

    <div className="inline-block">

      <div className="flex justify-start items-center">

        <Checkbox 
          id="param_is_used_checkbox"
          checked={state.save_it_to_config_file}
          onChange={handle_checkbox_change}
          className="mr-1" 
        />

        <Label htmlFor={param_const.name} value={param_const.title} />

        <Tooltip content={ `${param_const.desc} (unit: ${param_const.unit}, default: ${param_const.default_val})` }>
          <DefaultIndicator is_default={!state.save_it_to_config_file} />
        </Tooltip>

      </div>
      
      <ParamCodes
        param_ids = {param_ids}
        encoded_param_values = {encoded_param_values}
        downlink_payload = {downlink_payload}
        is_error = {err_str.current !== ''}
      />

      <TextInput
        id={param_const.name}
        placeholder=''
        color = { (err_str.current !== '') ? 'failure' : 'gray' }
        helperText = { err_str.current }
        value = { state.str }
        disabled = { !state.save_it_to_config_file }
        onChange={handle_change}
      />

    </div>

  )

}