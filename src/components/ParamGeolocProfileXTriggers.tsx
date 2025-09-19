import { useState, useRef, useEffect } from "react";
import { Label, Tooltip, Checkbox } from "flowbite-react";
import { ParamCodes } from "./ParamCodes.tsx";
import {
  Param_geoloc_profileX_triggers,
  GEOLOC_PROFILE_TRIGGERS,
  decode_geoloc_profile_triggers,
  encode_geoloc_profile_triggers,
  i32_to_u32,
  parse_txt_as_i32,
  Geoloc_profile_triggers_gui_val,
} from "../abw/params_at3";
import { DefaultIndicator } from "./DefaultIndicator.tsx";

export function ParamGeolocProfileXTriggers({
  param_const,
  params_ref,
  defpar_ref,
  dummy_state,
}: {
  param_const: Param_geoloc_profileX_triggers;
  params_ref: React.RefObject<Record<string, string | null>>;
  defpar_ref: React.RefObject<Record<string, string | null> | undefined>;
  dummy_state: number;
}) {
  const param_str = useRef("");
  const u32_str = useRef("");
  const err_str = useRef("");

  function calculate_initial_state(): Geoloc_profile_triggers_gui_val {
    const par = params_ref.current[param_const.name];
    if (par === undefined || par === null) {
      return param_const.default_val;
    } else {
      try {
        err_str.current = "";
        param_str.current = par;
        const parsed_param = parse_txt_as_i32(param_str.current);
        u32_str.current = parsed_param.u32_hex;
        const decoded_parsed_param = decode_geoloc_profile_triggers(
          parsed_param.i32_num,
        );
        return decoded_parsed_param;
      } catch (err) {
        err_str.current = (err as Error).message;
        param_str.current = par;
        u32_str.current = "";
        return {
          pod: false,
          sos: false,
          motion_start: false,
          motion_stop: false,
          in_motion: false,
          in_static: false,
          shock: false,
          temp_high_threshold: false,
          temp_low_threshold: false,
          geozoning: false,
        };
      }
    }
  }

  const [state, set_state] = useState<
    Geoloc_profile_triggers_gui_val | undefined
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

  function handle_checkbox_change(e: React.ChangeEvent<HTMLInputElement>) {
    if (state === undefined) {
      return;
    }

    try {
      const new_state = {
        ...state,
        [e.target.name]: e.target.checked,
      };

      const param_i32 = encode_geoloc_profile_triggers(new_state);
      const param_u32 = i32_to_u32(param_i32);

      param_str.current = param_i32.toString();
      u32_str.current = `0x${param_u32.toString(16).padStart(8, "0")}`;
      err_str.current = "";

      params_ref.current[param_const.name] = param_str.current;

      set_state(new_state);
    } catch (err) {
      const new_state = {
        ...state,
        [e.target.name]: false,
      };

      param_str.current = "";
      u32_str.current = "";
      err_str.current = (err as Error).message;

      params_ref.current[param_const.name] = param_str.current;

      set_state(new_state);
    }
  }

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

      <div className="flex max-w-md flex-col gap-0" id="checkbox">
        {Object.entries(GEOLOC_PROFILE_TRIGGERS).map(
          ([key, option]: [string, { desc: string; val: number }]) => {
            return (
              <div className="flex items-center gap-1" key={key}>
                <Checkbox
                  id={param_const.name + "_" + key}
                  name={key}
                  checked={(state as unknown as Record<string, boolean>)[key]}
                  onChange={handle_checkbox_change}
                />
                <Label htmlFor={param_const.name + "_" + key} className="flex">
                  {option.desc}
                </Label>
              </div>
            );
          },
        )}
      </div>
      {err_str.current !== "" ? (
        <div className="text-sm text-red-500">{err_str.current}</div>
      ) : (
        <></>
      )}
    </div>
  );
}
