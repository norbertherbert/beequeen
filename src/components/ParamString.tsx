import { useState, useEffect, useRef } from 'react';
import { Label, TextInput, Tooltip } from 'flowbite-react';
import { ParamCodes } from './ParamCodes.tsx';
import { Param_string, validate_string, bytes_to_hex } from '../abw/params_at3';
import { DefaultIndicator } from "./DefaultIndicator.tsx";


export function ParamString({param_const, params_ref, defpar_ref, dummy_state}: {
  param_const: Param_string,
  params_ref: React.RefObject<Record<string, string|null>>,
  defpar_ref: React.RefObject<Record<string, string|null>|undefined>,
  dummy_state: number
}) {
 
  const param_str = useRef('');
  const err_str = useRef('');

  const calculate_initial_state: () => string = () => {
    const par = params_ref.current[param_const.name];
    if ((par === undefined) || (par === null)) {
        return param_const.default_val;
    } else {
      try {
        validate_string(par);
        err_str.current = '';
        param_str.current = par;
        return par;
      } catch (err) {
        err_str.current = (err as Error).message;
        param_str.current = par;
        return ''; 
      }
    }
  }

  const [state, set_state] = useState<string|undefined>()

  useEffect(
    () => { 
      set_state(calculate_initial_state);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dummy_state]
  );

  if (state === undefined) { return (<></>); }





  function handle_change(e: React.ChangeEvent<HTMLInputElement>) {

    const par = e.target.value;

    try {
      param_str.current = validate_string(par);
      err_str.current = '';
    } catch (err) {
      param_str.current = par;
      err_str.current = (err as Error).message;
    }

    params_ref.current[param_const.name] = param_str.current;
    set_state(par);

  }

  const utf8Encode = new TextEncoder();
  const hex_encoded_str = bytes_to_hex([...utf8Encode.encode(state)], state.length);


  const param_ids = `0x${param_const.id.toString(16).padStart(4, '0')} \u2013 ${param_const.name}`;
  const encoded_param_values = `"${param_str.current}"`;
  const downlink_payload = `1000${param_const.id.toString(16).padStart(4, '0')}${((state.length<<3)|3).toString(16).padStart(2, '0')}${hex_encoded_str}`;

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

        <Tooltip content={ `${param_const.desc} (default: "${param_const.default_val}")` }>
          <DefaultIndicator is_default={is_default} />
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
        value = { state }
        onChange={handle_change}
      />

    </div>

  )

}