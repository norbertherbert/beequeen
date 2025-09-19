import { useState, useRef, useEffect } from "react";
import { Label, Tooltip, TextInput, Select } from "flowbite-react";
import { ParamCodes } from "./ParamCodes.tsx";
import {
  Param_cell_psm_time_XXX,
  // Cell_psm_time_gui_val,
  Cell_psm_time_gui_str,
  // CELL_PSM_TAU_PERIOD_TIME_UNITS,
  // CELL_PSM_ACTIVE_TIME_UNITS,
  cell_psm_time_val_to_str,
  cell_psm_time_str_to_val,
  encode_cell_psm_time,
  decode_cell_psm_time,
  i32_to_u32,
  parse_txt_as_i32,
} from "../abw/params_at3";
import { DefaultIndicator } from "./DefaultIndicator.tsx";

export function ParamCellPsmTimeXXX({
  param_const,
  params_ref,
  defpar_ref,
  dummy_state,
}: {
  param_const: Param_cell_psm_time_XXX;
  params_ref: React.RefObject<Record<string, string | null>>;
  defpar_ref: React.RefObject<Record<string, string | null> | undefined>;
  dummy_state: number;
}) {
  const param_str = useRef("");
  const u32_str = useRef("");
  const err_str = useRef("");

  function calculate_initial_state(): Cell_psm_time_gui_str {
    const par = params_ref.current[param_const.name];
    if (par === undefined || par === null) {
      return cell_psm_time_val_to_str(param_const.default_val);
    } else {
      try {
        err_str.current = "";
        param_str.current = par;
        const parsed_param = parse_txt_as_i32(param_str.current);
        u32_str.current = parsed_param.u32_hex;
        const decoded_parsed_param = decode_cell_psm_time(
          parsed_param.i32_num,
          param_const.time_units,
        );
        return cell_psm_time_val_to_str(decoded_parsed_param);
      } catch (err) {
        err_str.current = (err as Error).message;
        param_str.current = par;
        u32_str.current = "";
        return {
          number_of_time_units: "",
          time_unit: 0,
        };
      }
    }
  }

  const [state, set_state] = useState<Cell_psm_time_gui_str | undefined>();

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

  function handle_change(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    if (state === undefined) {
      return;
    }

    const new_state = {
      ...state,
      [e.target.name]: e.target.value,
    };

    try {
      const param_i32 = encode_cell_psm_time(
        cell_psm_time_str_to_val(new_state),
      );
      const param_u32 = i32_to_u32(param_i32);

      param_str.current = param_i32.toString();
      u32_str.current = `0x${param_u32.toString(16).padStart(8, "0")}`;
      err_str.current = "";

      params_ref.current[param_const.name] = param_str.current;

      set_state(new_state);
    } catch (err) {
      param_str.current = "";
      u32_str.current = "Cannot calculate parameter value!";
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

      <div className="flex items-center justify-start">
        <TextInput
          id="num_of_time_units"
          name="number_of_time_units"
          placeholder=""
          color={err_str.current !== "" ? "failure" : "gray"}
          // helperText = { state.err_str }
          value={state.number_of_time_units}
          onChange={handle_change}
          className={state.time_unit == 7 ? "hidden" : ""}
        />

        <span className={state.time_unit == 7 ? "hidden" : "pr-1 pl-1"}>*</span>

        <Select
          id="time_unit"
          name="time_unit"
          color={err_str.current !== "" ? "failure" : "gray"}
          // helperText = { state.err_str }
          value={state.time_unit}
          onChange={handle_change}
          className="min-w-32"
        >
          {Object.entries(param_const.time_units).map(
            ([, option]: [string, { desc: string; val: number }]) => {
              return (
                <option key={option.val} value={option.val}>
                  {option.desc}
                </option>
              );
            },
          )}
        </Select>
      </div>
      {err_str.current !== "" ? (
        <div className="text-sm text-red-500">{err_str.current}</div>
      ) : (
        <></>
      )}
    </div>
  );
}
