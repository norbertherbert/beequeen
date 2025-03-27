import {
  TextInput,
  // Tooltip,
  Popover,
  ClipboardWithIcon,
} from "flowbite-react";
import {
  // ArrowDownToBracket,
  ChevronDoubleDown,
} from "flowbite-react-icons/outline";

export function ParamCodes(props: {
  param_ids: string;
  encoded_param_values: string;
  downlink_payload: string;
  is_error: boolean;
}) {
  return (
    <div className="m-0 block p-1 text-left text-xs break-all dark:text-gray-200">
      {props.param_ids}
      <div className="flex items-center justify-start">
        <span className={props.is_error ? "text-red-500" : ""}>
          {props.encoded_param_values}
        </span>
        &nbsp;&nbsp;
        {!props.is_error && (
          // <Tooltip content="Click to get downlink payload!">

          <Popover
            aria-labelledby="default-popover"
            content={
              <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                  <h3
                    id="default-popover"
                    className="font-semibold text-gray-900 dark:text-white"
                  >
                    Downlink Payload:
                  </h3>
                </div>

                <div className="flex items-center justify-start py-2 pl-3">
                  <div className="grid w-full max-w-64">
                    <div className="relative">
                      <label htmlFor="npm-install" className="sr-only">
                        Label
                      </label>
                      <TextInput
                        value={props.downlink_payload}
                        className="mr-1 pr-10"
                        sizing="sm"
                        readOnly
                      />
                      <ClipboardWithIcon valueToCopy={props.downlink_payload} />
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <ChevronDoubleDown size={15} />
          </Popover>

          // </Tooltip>
        )}
      </div>
    </div>
  );
}
