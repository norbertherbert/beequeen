
import { useState, useEffect, useRef } from 'react';
import { Label, Select, Tooltip } from 'flowbite-react';
import { ParamCodes } from './ParamCodes.tsx';
import {

  Param_cell_search_bands,

  CELL_NWK_ID_OPTIONS,

  validate_search_bands,

  c_string_to_bytes,
  bytes_to_c_string,

  parse_txt_as_i32,

} from '../abw/params_at3';
import { DefaultIndicator } from "./DefaultIndicator.tsx";


export function ParamCellSearchBands({param_const, params_ref, defpar_ref, dummy_state}: {
  param_const: Param_cell_search_bands,
  params_ref: React.RefObject<Record<string, string|null>>,
  defpar_ref: React.RefObject<Record<string, string|null>|undefined>,
  dummy_state: number
}) {

  const param_str = useRef('');
  const err_str = useRef('');

  const calculate_initial_state: () => number[] = () => {
    const par = params_ref.current[param_const.name];
    if ((par === undefined) || (par === null)) {
        return param_const.default_val;
    } else {
      try {
        err_str.current = '';
        param_str.current = par;
        const initial_state =  validate_search_bands(c_string_to_bytes(par, param_const.len), param_const.len);
        return initial_state;
      } catch (err) {
        
        err_str.current = (err as Error).message;
        param_str.current = par;
        return [
          0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
          0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00
        ];

      }
    }
  }

  const [state, set_state] = useState<number[]|undefined>()

  useEffect(
    () => { 
      set_state(calculate_initial_state);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dummy_state]
  );

  if (state === undefined) { return (<></>); }

  
  function handle_change(e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) {

    if (state === undefined) { return; }

    const input_str = e.target.value.toString();

    const nwk_field_id = parseInt(e.target.id);

    try {

      const parsed_input = parse_txt_as_i32(input_str);
  
      const new_state = [...state];
      new_state[nwk_field_id] = parsed_input.i32_num;

      validate_search_bands(new_state, param_const.len);

      set_state(new_state);

      param_str.current = bytes_to_c_string(new_state, param_const.len);

      err_str.current = '';
      
      params_ref.current[param_const.name] = param_str.current;

    } catch (err) {

      const new_state = [...state];
      new_state[nwk_field_id] = 0;
     
      set_state(new_state);

      param_str.current = '';

      err_str.current = (err as Error).message;

      params_ref.current[param_const.name] = param_str.current;

    }

  }


  const param_ids = `0x${param_const.id.toString(16).padStart(4, '0')} \u2013 ${param_const.name}`;
  const encoded_param_values = param_str.current;
  const downlink_payload = `${1000}${param_const.id.toString(16).padStart(4, '0')}${((param_const.len<<3)|4).toString(16).padStart(2, '0')}${param_str.current.replace(/,|{|}|/g, '')}`;

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
    {/* <div className="col-span-2 row-span-2 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white"> */}

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


      <div className="grid grid-cols-6 gap-1">

      { (() => { 

        const elements = [];
        
        for (let nwk_field_id=0; nwk_field_id<param_const.len; nwk_field_id++) { elements.push(

          <Select
            key={nwk_field_id}
            id={nwk_field_id.toString()}
            color = { (err_str.current !== '') ? 'failure' : 'gray' }
            // helperText = { state.err_str }
            value = { state[nwk_field_id] }
            onChange={handle_change}
            sizing="sm"
          >
            {
              Object.entries(CELL_NWK_ID_OPTIONS).map( ([option_key, option]: [string, {desc: string, val: number}])  => {
                return (
                  <option key={option_key} value={option.val}>{option.desc}</option>
                )
              })
            }
          </Select>

        )}

        return elements

      })() }

      </div>

      { (err_str.current !== '') ? (<div className="text-red-500 text-sm" >{err_str.current}</div>) : (<></>) }

    {/* </div> */}
    </div>

  )

}