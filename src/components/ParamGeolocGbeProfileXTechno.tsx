import { useState, useEffect, useRef } from "react";
import { Label, Select, Checkbox, Tooltip } from "flowbite-react";
import { ParamCodes } from "./ParamCodes.tsx";
import {
  Param_geoloc_gbe_profileX_techno,
  GEOLOC_TECHNOLOGIES,
  Geoloc_technologies_gui_val_item,
  parse_txt_as_i32,
  validate_options_param,
  encode_geoloc_technologies,
  decode_geoloc_technologies,
  c_string_to_bytes,
  bytes_to_c_string,
} from "../abw/params_at3";
import { DefaultIndicator } from "./DefaultIndicator.tsx";

export function ParamGeolocGbeProfileXTechno({
  param_const,
  params_ref,
  defpar_ref,
  dummy_state,
}: {
  param_const: Param_geoloc_gbe_profileX_techno;
  params_ref: React.RefObject<Record<string, string | null>>;
  defpar_ref: React.RefObject<Record<string, string | null> | undefined>;
  dummy_state: number;
}) {
  const param_str = useRef("");
  const err_str = useRef("");

  const calculate_initial_state: () => Geoloc_technologies_gui_val_item[] =
    () => {
      const par = params_ref.current[param_const.name];
      if (par === undefined || par === null) {
        return param_const.default_val;
      } else {
        try {
          err_str.current = "";
          param_str.current = par;
          const initial_state = decode_geoloc_technologies(
            c_string_to_bytes(par, param_const.len),
          );
          // console.log(initial_state);
          return initial_state;
        } catch (err) {
          err_str.current = (err as Error).message;
          param_str.current = par;
          return [
            {
              techno: 0,
              always_triggered: false,
            },
            {
              techno: 0,
              always_triggered: false,
            },
            {
              techno: 0,
              always_triggered: false,
            },
            {
              techno: 0,
              always_triggered: false,
            },
            {
              techno: 0,
              always_triggered: false,
            },
            {
              techno: 0,
              always_triggered: false,
            },
          ];
        }
      }
    };

  const [state, set_state] = useState<
    Geoloc_technologies_gui_val_item[] | undefined
  >();

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

  function handle_change(e: React.ChangeEvent<HTMLSelectElement>, i: number) {
    if (state === undefined) {
      return;
    }

    const input_str = e.target.value.toString();
    try {
      const parsed_input = parse_txt_as_i32(input_str);
      validate_options_param(parsed_input.i32_num, GEOLOC_TECHNOLOGIES);
      const new_state = [...state];
      new_state[i] = { ...state[i] };
      new_state[i].techno = parsed_input.i32_num;
      set_state(new_state);

      param_str.current = bytes_to_c_string(
        encode_geoloc_technologies(new_state),
        param_const.len,
      );

      err_str.current = "";

      params_ref.current[param_const.name] = param_str.current;
    } catch (err) {
      const new_state = [...state];
      new_state[i] = { ...state[i] };
      new_state[i].techno = 0;
      set_state(new_state);

      param_str.current = "";

      err_str.current = (err as Error).message;

      params_ref.current[param_const.name] = param_str.current;
    }
  }

  function handle_checkbox_change(e: React.ChangeEvent<HTMLInputElement>) {
    if (state === undefined) {
      return;
    }

    const id = parseInt(e.target.name);

    const new_state = [...state];
    new_state[id] = { ...state[id] };
    new_state[id].always_triggered = e.target.checked;

    set_state(new_state);

    param_str.current = bytes_to_c_string(
      encode_geoloc_technologies(new_state),
      param_const.len,
    );

    err_str.current = "";

    params_ref.current[param_const.name] = param_str.current;
  }

  const param_ids = `0x${param_const.id.toString(16).padStart(4, "0")} \u2013 ${param_const.name}`;
  const encoded_param_values = param_str.current;
  const downlink_payload = `${1000}${param_const.id.toString(16).padStart(4, "0")}${((param_const.len << 3) | 4).toString(16).padStart(2, "0")}${param_str.current.replace(/,|{|}|/g, "")}`;

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

        <Tooltip content={`${param_const.desc}`}>
          <DefaultIndicator is_default={is_default} />
        </Tooltip>
      </div>

      <ParamCodes
        param_ids={param_ids}
        encoded_param_values={encoded_param_values}
        downlink_payload={downlink_payload}
        is_error={err_str.current !== ""}
      />

      {[0, 1, 2, 3, 4, 5].map((key) => {
        return (
          <div className="mb-1 flex items-center justify-start" key={key}>
            <Select
              id={`${param_const.name}_${key}`}
              name={key.toString()}
              color={err_str.current !== "" ? "failure" : "gray"}
              // helperText = { state.err_str }
              value={state[key].techno}
              onChange={(e) => handle_change(e, key)}
              sizing="sm"
            >
              {Object.entries(GEOLOC_TECHNOLOGIES).map(
                ([option_key, option]: [
                  string,
                  { desc: string; val: number },
                ]) => {
                  return (
                    <option key={option_key} value={option.val}>
                      {option.desc}
                    </option>
                  );
                },
              )}
            </Select>

            {key !== 0 ? (
              <>
                <Checkbox
                  className="ml-3"
                  id={param_const.name + "_" + key}
                  name={key.toString()}
                  checked={state[key].always_triggered}
                  onChange={handle_checkbox_change}
                />
                <Tooltip
                  content={
                    "When checked, this technology will be used even if a higher-priority technology has already succeeded. If unchecked, it will be skipped if any preceding technology has succeeded."
                  }
                  trigger="click"
                >
                  <svg
                    className="mb-1 ml-1 h-4 w-4 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </Tooltip>
              </>
            ) : (
              <></>
            )}
          </div>
        );
      })}
      {err_str.current !== "" ? (
        <div className="text-sm text-red-500">{err_str.current}</div>
      ) : (
        <></>
      )}
    </div>
  );
}
