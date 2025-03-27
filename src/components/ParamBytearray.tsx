import { useState, useEffect, useRef } from "react";
import { Label, TextInput, HelperText, Tooltip } from "flowbite-react";
import { ParamCodes } from "./ParamCodes.tsx";
import {
  Param_bytearray,
  c_string_to_bytes,
  bytes_to_hex,
  hex_to_bytes,
  bytes_to_c_string,
} from "../abw/params_at3";
import { DefaultIndicator } from "./DefaultIndicator.tsx";

export function ParamBytearray({
  param_const,
  params_ref,
  defpar_ref,
  dummy_state,
}: {
  param_const: Param_bytearray;
  params_ref: React.RefObject<Record<string, string | null>>;
  defpar_ref: React.RefObject<Record<string, string | null> | undefined>;
  dummy_state: number;
}) {
  const param_str = useRef("");
  const err_str = useRef("");

  const calculate_initial_state: () => string = () => {
    const par = params_ref.current[param_const.name];
    if (par === undefined || par === null) {
      return param_const.default_val;
    } else {
      try {
        err_str.current = "";
        param_str.current = par;
        const initial_state = bytes_to_hex(
          c_string_to_bytes(param_str.current, param_const.len),
          param_const.len,
        );
        return initial_state;
      } catch (err) {
        err_str.current = (err as Error).message;
        param_str.current = par;
        return "00000000000000000000";
      }
    }
  };

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

  async function handle_key_down(e: React.KeyboardEvent<HTMLInputElement>) {
    const inputElement = e.target as HTMLInputElement;
    const gui_val = inputElement.value.toString();

    if (
      inputElement.selectionStart !== null &&
      inputElement.selectionEnd !== null
    ) {
      let selection_start = inputElement.selectionStart;
      let selection_end = inputElement.selectionEnd;

      if (e.ctrlKey || e.metaKey) {
        if (e.key == "v") {
          let text = await navigator.clipboard.readText();
          if (
            selection_end - selection_start > 0 &&
            text.length > selection_end - selection_start
          ) {
            text = text.slice(0, selection_end - selection_start);
          }
          if (text) {
            let new_text =
              gui_val.slice(0, selection_start) +
              text +
              gui_val.slice(selection_start + text.length);
            new_text = new_text.slice(0, 2 * param_const.len);

            param_str.current = bytes_to_c_string(
              hex_to_bytes(new_text, param_const.len),
              param_const.len,
            );
            err_str.current = "";
            set_state(new_text);

            selection_start += text.length;
            if (selection_start > 2 * param_const.len)
              selection_start = 2 * param_const.len;
            selection_end = selection_start;
          }
        } else if (e.key == "c") {
          await navigator.clipboard.writeText(
            gui_val.slice(selection_start, selection_end),
          );
        } else {
          return;
        }
      } else if (e.shiftKey) {
        switch (e.key) {
          case "ArrowRight":
            selection_end++;
            break;
          case "ArrowLeft":
            if (selection_end > selection_start) selection_end--;
            break;
          default:
            if (
              e.key.length === 1 &&
              /^[A-Fa-f0-9]$/.test(e.key) &&
              selection_start < 2 * param_const.len
            ) {
              const new_text =
                gui_val.slice(0, selection_start) +
                e.key +
                gui_val.slice(selection_start + 1);

              param_str.current = bytes_to_c_string(
                hex_to_bytes(new_text, param_const.len),
                param_const.len,
              );
              err_str.current = "";
              set_state(new_text);

              params_ref.current[param_const.name] = param_str.current;

              e.preventDefault();

              selection_start++;
              selection_end = selection_start;
            }
        }
      } else {
        switch (e.key) {
          case "ArrowLeft":
            if (selection_start > 0) {
              selection_start--;
              selection_end = selection_start;
            }
            break;
          case "ArrowRight":
            if (selection_start < 2 * param_const.len) {
              selection_start++;
              selection_end = selection_start;
            }
            break;
          case "Backspace":
            {
              if (selection_start === selection_end && selection_start > 0) {
                selection_start--;
              }
              let new_text =
                gui_val.slice(0, selection_start) +
                "".padStart(selection_end - selection_start, "0") +
                gui_val.slice(selection_end);
              new_text = new_text.slice(0, 2 * param_const.len);

              param_str.current = bytes_to_c_string(
                hex_to_bytes(new_text, param_const.len),
                param_const.len,
              );
              err_str.current = "";
              set_state(new_text);

              selection_end = selection_start;
            }
            break;
          case "Delete":
            if (selection_start < 2 * param_const.len) {
              if (selection_start === selection_end) {
                selection_end++;
              }
              let new_text =
                gui_val.slice(0, selection_start) +
                "".padStart(selection_end - selection_start, "0") +
                gui_val.slice(selection_end);
              new_text = new_text.slice(0, 2 * param_const.len);

              param_str.current = bytes_to_c_string(
                hex_to_bytes(new_text, param_const.len),
                param_const.len,
              );
              err_str.current = "";
              set_state(new_text);

              selection_start = selection_end;
            }
            break;

          default:
            if (
              e.key.length === 1 &&
              /^[A-Fa-f0-9]$/.test(e.key) &&
              selection_start < 2 * param_const.len
            ) {
              const new_text =
                gui_val.slice(0, selection_start) +
                e.key +
                gui_val.slice(selection_start + 1);

              param_str.current = bytes_to_c_string(
                hex_to_bytes(new_text, param_const.len),
                param_const.len,
              );
              err_str.current = "";
              set_state(new_text);

              params_ref.current[param_const.name] = param_str.current;

              e.preventDefault();

              selection_start++;
              selection_end = selection_start;
            }
        }
      }

      setTimeout(() => {
        inputElement.setSelectionRange(selection_start, selection_end);
      }, 1);
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

        <Tooltip
          content={`${param_const.desc} (default: "${param_const.default_val}")`}
        >
          <DefaultIndicator is_default={is_default} />
        </Tooltip>
      </div>

      <ParamCodes
        param_ids={param_ids}
        encoded_param_values={encoded_param_values}
        downlink_payload={downlink_payload}
        is_error={err_str.current !== ""}
      />

      <TextInput
        id={param_const.name}
        placeholder=""
        color={err_str.current !== "" ? "failure" : "gray"}
        value={state}
        onChange={() => {}}
        onKeyDown={handle_key_down}
        className="font-mono"
      />
      <HelperText color="failure">{err_str.current}</HelperText>
    </div>
  );
}
