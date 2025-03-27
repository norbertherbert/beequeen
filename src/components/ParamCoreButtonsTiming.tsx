import { useState, useRef, useEffect } from "react";
import { Label, Tooltip, TextInput } from "flowbite-react";
import { ParamCodes } from "./ParamCodes.tsx";
import {
  // Button_timing_gui_val,
  Button_timing_gui_str,
  BUTTON_TIMING_BIT_OFFSETS,
  button_timing_val_to_str,
  button_timing_str_to_val,
  encode_button_timing,
  decode_button_timing,
  Param_core_buttons_timing,
  i32_to_u32,
  parse_txt_as_i32,
} from "../abw/params_at3";
import { DefaultIndicator } from "./DefaultIndicator.tsx";

export function ParamCoreButtonsTiming({
  param_const,
  params_ref,
  defpar_ref,
  dummy_state,
}: {
  param_const: Param_core_buttons_timing;
  params_ref: React.RefObject<Record<string, string | null>>;
  defpar_ref: React.RefObject<Record<string, string | null> | undefined>;
  dummy_state: number;
}) {
  const param_str = useRef("");
  const u32_str = useRef("");
  const err_str = useRef("");

  function calculate_initial_state(): Button_timing_gui_str {
    const par = params_ref.current[param_const.name];
    if (par === undefined || par === null) {
      return button_timing_val_to_str(param_const.default_val);
    } else {
      try {
        err_str.current = "";
        param_str.current = par;
        const parsed_param = parse_txt_as_i32(param_str.current);
        u32_str.current = parsed_param.u32_hex;
        const decoded_parsed_param = decode_button_timing(parsed_param.i32_num);
        return button_timing_val_to_str(decoded_parsed_param);
      } catch (err) {
        err_str.current = (err as Error).message;
        param_str.current = par;
        u32_str.current = "";
        return {
          duration_of_press: "",
          duration_diff_of_long_press: "",
          button1_debounce_time: "",
          button2_debounce_time: "",
        };
      }
    }
  }

  const [state, set_state] = useState<Button_timing_gui_str | undefined>();

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

  function handle_change(e: React.ChangeEvent<HTMLInputElement>) {
    if (state === undefined) {
      return;
    }

    const input_key = e.target.name;
    const input_str = e.target.value;

    try {
      const new_state = {
        ...state,
        [input_key]: input_str,
      };

      const param_i32 = encode_button_timing(
        button_timing_str_to_val(new_state),
      );
      const param_u32 = i32_to_u32(param_i32);

      param_str.current = param_i32.toString();
      u32_str.current = `0x${param_u32.toString(16).padStart(8, "0")}`;
      err_str.current = "";

      params_ref.current[param_const.name] = param_str.current;

      set_state(new_state);
    } catch (err) {
      const new_state = {
        ...state,
        [input_key]: input_str,
      };

      param_str.current = "";
      u32_str.current = "Cannot calculate parameter value!";
      err_str.current = (err as Error).message;

      params_ref.current[param_const.name] = param_str.current;

      set_state(new_state);
    }
  }

  const duration_of_press_val = parseInt(state.duration_of_press);
  const duration_diff_of_long_press_val = parseInt(
    state.duration_diff_of_long_press,
  );
  isNaN(duration_of_press_val);
  const calculated_duration_of_press = isNaN(duration_of_press_val)
    ? "Duration: -"
    : `Total duration: ${duration_of_press_val}*0.5s = ${duration_of_press_val * 0.5}s`;
  const calculated_duration_of_long_press = isNaN(duration_of_press_val)
    ? "Total duration: -"
    : `Total duration: ${duration_of_press_val * 0.5}s+${duration_diff_of_long_press_val}*0.5s = ${(duration_of_press_val + duration_diff_of_long_press_val) * 0.5}s`;

  const param_ids = `0x${param_const.id.toString(16).padStart(4, "0")} \u2013 ${param_const.name}`;
  const encoded_param_values = `${param_str.current} ${err_str.current === "" ? `\u00a0(${u32_str.current})` : ""}`;
  const downlink_payload = `${1000}${param_const.id.toString(16).padStart(4, "0")}${((4 << 3) | 1).toString(16).padStart(2, "0")}${u32_str.current.slice(2)}`;

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

      <div
        className="flex max-w-md flex-col gap-0 pt-2"
        id="button_form_fields"
      >
        {Object.entries(BUTTON_TIMING_BIT_OFFSETS).map(
          ([key, option]: [string, { desc: string }]) => {
            return (
              <div className="pb-1" key={key}>
                <Label htmlFor={`${param_const.name}_${key}`}>
                  {option.desc}
                </Label>

                <TextInput
                  id={`${param_const.name}_${key}`}
                  placeholder=""
                  name={key.toString()}
                  color={err_str.current !== "" ? "failure" : "gray"}
                  // helperText = { state.err_str }
                  value={(state as unknown as Record<string, string>)[key]}
                  onChange={handle_change}
                  sizing="sm"
                />
                <span className="text-xs">
                  {key == "duration_of_press" && calculated_duration_of_press}
                  {key == "duration_diff_of_long_press" &&
                    calculated_duration_of_long_press}
                </span>
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
