import { useState, useRef, useEffect } from "react";
import { Label, Select, HelperText, Tooltip } from "flowbite-react";
import { ParamCodes } from "./ParamCodes.tsx";
import {
  Param_options,
  parse_txt_as_i32,
  validate_options_param,
} from "../abw/params_at3";
import { DefaultIndicator } from "./DefaultIndicator.tsx";

export function ParamOptions({
  param_const,
  params_ref,
  defpar_ref,
  dummy_state,
}: {
  param_const: Param_options;
  params_ref: React.RefObject<Record<string, string | null>>;
  defpar_ref: React.RefObject<Record<string, string | null> | undefined>;
  dummy_state: number;
}) {
  const param_str = useRef("");
  const u32_str = useRef("");
  const err_str = useRef("");

  function calculate_initial_state(): string {
    const par = params_ref.current[param_const.name];
    if (par === undefined || par === null) {
      return param_const.default_val.toString();
    }

    try {
      const parsed_param = parse_txt_as_i32(par);
      validate_options_param(parsed_param.i32_num, param_const.options);
      param_str.current = parsed_param.i32_num.toString();
      u32_str.current = parsed_param.u32_hex;
      err_str.current = "";
    } catch (err) {
      param_str.current = par;
      u32_str.current = "";
      err_str.current = (err as Error).message;
    }

    return par;
  }

  const [state, set_state] = useState<string | undefined>();

  useEffect(
    () => {
      set_state(calculate_initial_state);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dummy_state],
  );

  if (state === undefined) {
    return <></>;
  }

  function handle_change(e: React.ChangeEvent<HTMLSelectElement>) {
    const par = e.target.value;

    try {
      const parsed_param = parse_txt_as_i32(par);
      validate_options_param(parsed_param.i32_num, param_const.options);
      param_str.current = parsed_param.i32_num.toString();
      u32_str.current = parsed_param.u32_hex;
      err_str.current = "";
    } catch (err) {
      param_str.current = par;
      u32_str.current = "";
      err_str.current = (err as Error).message;
    }

    params_ref.current[param_const.name] = param_str.current;
    set_state(par);
  }

  const default_desc_key = Object.keys(param_const.options).find(
    (key: string) => param_const.options[key].val == param_const.default_val,
  );
  const default_desc = default_desc_key
    ? param_const.options[default_desc_key].desc
    : "";

  const param_ids = `0x${param_const.id.toString(16).padStart(4, "0")} \u2013 ${param_const.name}`;
  const encoded_param_values = `${param_str.current} ${err_str.current === "" ? `\u00a0(${u32_str.current})` : ""}`;
  const downlink_payload = `1000${param_const.id.toString(16).padStart(4, "0")}${((4 << 3) | 1).toString(16).padStart(2, "0")}${u32_str.current.slice(2)}`;

  let defpar = "";
  if (defpar_ref.current !== undefined) {
    const x = defpar_ref.current[param_const.name];
    if (x !== null) {
      defpar = x;
    }
  }
  const is_default = param_str.current.toLowerCase() === defpar.toLowerCase();

  return (
    <div className="inline-block">
      <div className="flex items-center justify-start">
        <Label htmlFor={param_const.name}>{param_const.title}</Label>

        <Tooltip content={`${param_const.desc} (default: "${default_desc}")`}>
          <DefaultIndicator is_default={is_default} />
        </Tooltip>
      </div>

      <ParamCodes
        param_ids={param_ids}
        encoded_param_values={encoded_param_values}
        downlink_payload={downlink_payload}
        is_error={err_str.current !== ""}
      />

      <Select
        id={param_const.name}
        color={err_str.current !== "" ? "failure" : "gray"}
        value={state}
        onChange={handle_change}
      >
        {err_str.current !== "" ? (
          <option key={state} value={state}>
            {state}
          </option>
        ) : (
          ""
        )}

        {Object.entries(param_const.options).map(
          ([, option]: [string, { desc: string; val: number }]) => {
            return (
              <option key={option.val} value={option.val}>
                {option.desc}
              </option>
            );
          },
        )}
      </Select>
      <HelperText color="failure">{err_str.current}</HelperText>
    </div>
  );
}
