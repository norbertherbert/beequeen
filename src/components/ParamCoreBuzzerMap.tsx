import { useState, useEffect, useRef } from "react";
import { Label, Select, TextInput, Tooltip } from "flowbite-react";
import { ParamCodes } from "./ParamCodes.tsx";
import {
  Param_core_buzzer_map,
  Buzzer_map_gui_str_item,
  EVENTS,
  BUZZER_MELODIES,
  buzzer_map_val_to_str,
  buzzer_map_str_to_val,
  encode_buzzer_map,
  decode_buzzer_map,
  c_string_to_bytes,
  bytes_to_c_string,
} from "../abw/params_at3";
import { DefaultIndicator } from "./DefaultIndicator.tsx";

export function ParamCoreBuzzerMap({
  param_const,
  params_ref,
  defpar_ref,
  dummy_state,
}: {
  param_const: Param_core_buzzer_map;
  params_ref: React.RefObject<Record<string, string | null>>;
  defpar_ref: React.RefObject<Record<string, string | null> | undefined>;
  dummy_state: number;
}) {
  const param_str = useRef("");
  const err_str = useRef("");

  const calculate_initial_state: () => Buzzer_map_gui_str_item[] = () => {
    const par = params_ref.current[param_const.name];
    if (par === undefined || par === null) {
      return buzzer_map_val_to_str(param_const.default_val);
    } else {
      try {
        err_str.current = "";
        param_str.current = par;
        const initial_state = buzzer_map_val_to_str(
          decode_buzzer_map(c_string_to_bytes(par, param_const.len)),
        );
        return initial_state;
      } catch (err) {
        err_str.current = (err as Error).message;
        param_str.current = par;
        return [
          { melody: 0, count: "", event: 0 },
          { melody: 0, count: "", event: 0 },
          { melody: 0, count: "", event: 0 },
          { melody: 0, count: "", event: 0 },
          { melody: 0, count: "", event: 0 },
          { melody: 0, count: "", event: 0 },
          { melody: 0, count: "", event: 0 },
          { melody: 0, count: "", event: 0 },
          { melody: 0, count: "", event: 0 },
          { melody: 0, count: "", event: 0 },
        ];
      }
    }
  };

  const [state, set_state] = useState<Buzzer_map_gui_str_item[] | undefined>();

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

    const input_str = e.target.value.toString();

    const line_id = parseInt(e.target.id);
    const name = e.target.name;

    try {
      // const parsed_input = parse_txt_as_i32(input_str);

      // validate_options_param(parsed_input.i32_num, LED_PATTERNS);

      const new_state = [...state];
      new_state[line_id] = { ...state[line_id] };
      // new_state[i].pattern = parsed_input.i32_num;
      (new_state[line_id] as unknown as Record<string, string>)[name] =
        input_str;

      set_state(new_state);

      param_str.current = bytes_to_c_string(
        encode_buzzer_map(buzzer_map_str_to_val(new_state)),
        param_const.len,
      );

      err_str.current = "";

      params_ref.current[param_const.name] = param_str.current;
    } catch (err) {
      const new_state = [...state];
      new_state[line_id] = { ...state[line_id] };

      // new_state[i].pattern = 0;

      (new_state[line_id] as unknown as Record<string, string>)[name] =
        input_str;

      set_state(new_state);

      param_str.current = "";

      err_str.current = (err as Error).message;

      params_ref.current[param_const.name] = param_str.current;
    }
  }

  const param_ids = `0x${param_const.id.toString(16).padStart(4, "0")} \u2013 ${param_const.name}`;
  const encoded_param_values = param_str.current;
  const downlink_payload = `1000${param_const.id.toString(16).padStart(4, "0")}${((param_const.len << 3) | 4).toString(16).padStart(2, "0")}${param_str.current.replace(/,|{|}|/g, "")}`;

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
      {/* <div className="col-span-2 row-span-2 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white"> */}

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

      <table className="table-fixed border-separate border-spacing-1">
        <thead className="text-sm">
          <tr>
            <th>Melody</th>
            <th>Count</th>
            <th>Triggering event</th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((line_id) => {
            return (
              // <div className="flex justify-start items-center mb-1" key={line_id}>
              <tr key={line_id}>
                <td>
                  <Select
                    id={line_id.toString()}
                    name={"melody"}
                    color={err_str.current !== "" ? "failure" : "gray"}
                    // helperText = { state.err_str }
                    value={state[line_id].melody}
                    onChange={handle_change}
                    sizing="sm"
                  >
                    {Object.entries(BUZZER_MELODIES).map(
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
                </td>

                <td>
                  <TextInput
                    id={line_id.toString()}
                    name={"count"}
                    placeholder=""
                    color={err_str.current !== "" ? "failure" : "gray"}
                    // helperText = { state.err_str }
                    value={state[line_id].count}
                    onChange={handle_change}
                    sizing="sm"
                    className="max-w-16"
                  />
                </td>

                <td>
                  <Select
                    id={line_id.toString()}
                    name={"event"}
                    color={err_str.current !== "" ? "failure" : "gray"}
                    // helperText = { state.err_str }
                    value={state[line_id].event}
                    onChange={handle_change}
                    sizing="sm"
                    className="max-w-42"
                  >
                    {Object.entries(EVENTS).map(
                      ([option_key, option]: [
                        string,
                        { desc: string; id: number },
                      ]) => {
                        return (
                          <option key={option_key} value={option.id}>
                            {option.desc}
                          </option>
                        );
                      },
                    )}
                  </Select>
                </td>

                {/* </div> */}
              </tr>
            );
          })}
        </tbody>
      </table>

      {err_str.current !== "" ? (
        <div className="text-sm text-red-500">{err_str.current}</div>
      ) : (
        <></>
      )}

      {/* </div> */}
    </div>
  );
}
