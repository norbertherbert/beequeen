import { useState, useRef, useEffect } from "react";
import { Label, Tooltip, Checkbox } from "flowbite-react";
import { ParamCodes } from "./ParamCodes.tsx";
import {
  Param_core_notif_XXX,
  NOTIFICATIONS,
  Notif_bitmap_gui_val,
  c_string_to_bytes,
  bytes_to_c_string,
  encode_notif_bitmap,
  decode_notif_bitmap,
} from "../abw/params_at3";
import { DefaultIndicator } from "./DefaultIndicator.tsx";

export function ParamCoreNotifXxx({
  param_const,
  params_ref,
  defpar_ref,
  dummy_state,
}: {
  param_const: Param_core_notif_XXX;
  params_ref: React.RefObject<Record<string, string | null>>;
  defpar_ref: React.RefObject<Record<string, string | null> | undefined>;
  dummy_state: number;
}) {
  const param_str = useRef("");
  const err_str = useRef("");

  function calculate_initial_state(): Notif_bitmap_gui_val {
    const par = params_ref.current[param_const.name];
    if (par === undefined || par === null) {
      return param_const.default_val;
    } else {
      try {
        err_str.current = "";
        param_str.current = par;
        return decode_notif_bitmap(c_string_to_bytes(par, param_const.len));
      } catch (err) {
        err_str.current = (err as Error).message;
        param_str.current = par;
        return {
          sys_status: false,
          sys_low_battery: false,
          sys_ble: false,
          sys_tamper: false,
          sys_heartbeat: false,

          sos_on: false,
          sos_off: false,

          temp_high: false,
          temp_low: false,
          temp_normal: false,

          acc_motion_start: false,
          acc_motion_end: false,
          acc_shock: false,

          nwk_main_up: false,
          nwk_backup_up: false,

          geozone_entry: false,
          geozone_exit: false,
          geozone_in_hazard: false,
          geozone_out_hazard: false,
          geozone_meeting_point: false,
        };
      }
    }
  }

  const [state, set_state] = useState<Notif_bitmap_gui_val | undefined>();

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

      const param_bytes = encode_notif_bitmap(new_state);

      param_str.current = bytes_to_c_string(param_bytes, param_const.len);
      err_str.current = "";

      params_ref.current[param_const.name] = param_str.current;

      set_state(new_state);
    } catch (err) {
      const new_state = {
        ...state,
        [e.target.name]: false,
      };

      param_str.current = "";
      err_str.current = (err as Error).message;

      params_ref.current[param_const.name] = param_str.current;

      set_state(new_state);
    }
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

      <div className="grid grid-cols-2 gap-3">
        <div>
          {Object.entries(NOTIFICATIONS)
            .filter(([, option]) => option.id < 0x0301)
            .map(([key, option]: [string, { desc: string; id: number }]) => {
              return (
                <div className="flex items-center gap-1" key={key}>
                  <Checkbox
                    id={param_const.name + "_" + key}
                    name={key}
                    checked={(state as unknown as Record<string, boolean>)[key]}
                    onChange={handle_checkbox_change}
                  />
                  <Label
                    htmlFor={param_const.name + "_" + key}
                    className="flex"
                  >
                    {option.desc}
                  </Label>
                </div>
              );
            })}
        </div>

        <div>
          {Object.entries(NOTIFICATIONS)
            .filter(([, option]) => option.id >= 0x0301)
            .map(([key, option]: [string, { desc: string; id: number }]) => {
              return (
                <div className="flex items-center gap-1" key={key}>
                  <Checkbox
                    id={param_const.name + "_" + key}
                    name={key}
                    checked={(state as unknown as Record<string, boolean>)[key]}
                    onChange={handle_checkbox_change}
                  />
                  <Label
                    htmlFor={param_const.name + "_" + key}
                    className="flex"
                  >
                    {option.desc}
                  </Label>
                </div>
              );
            })}
        </div>
      </div>

      {err_str.current !== "" ? (
        <div className="text-sm text-red-500">{err_str.current}</div>
      ) : (
        <></>
      )}
    </div>
  );
}
