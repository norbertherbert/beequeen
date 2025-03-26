import { 
  TextInput, 
  // Tooltip, 
  Popover, Clipboard,
} from 'flowbite-react';
import { 
  // ArrowDownToBracket,
  ChevronDoubleDown,
} from "flowbite-react-icons/outline";

export function ParamCodes( props: {
  param_ids: string,
  encoded_param_values: string,
  downlink_payload: string,
  is_error: boolean,
}) {

  return (

      <div className = "m-0 p-1 block text-xs text-left dark:text-gray-200 break-all">
        {props.param_ids}
        <div className="flex justify-start items-center">
          <span className={props.is_error ? "text-red-500" : ""}>
            {props.encoded_param_values}
          </span>
          &nbsp;&nbsp;
          { (!props.is_error) && (
            // <Tooltip content="Click to get downlink payload!">

              <Popover
                aria-labelledby="default-popover"
                content={
                  <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                    <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                      <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">Downlink Payload:</h3>
                    </div>

                    <div className="pl-3 py-2 flex justify-start items-center">

                      <div className="grid w-full max-w-64">
                        <div className="relative">
                          <label htmlFor="npm-install" className="sr-only">
                            Label
                          </label>
                          <TextInput
                            value = {props.downlink_payload}
                            className="pr-10 mr-1"
                            sizing="sm"
                            readOnly
                          />
                          <Clipboard.WithIcon valueToCopy={props.downlink_payload} />
                        </div>
                      </div>

                    </div>
                    
                  </div>
                }
              >

                <ChevronDoubleDown size={15}/>

              </Popover>

            // </Tooltip>
          ) }

        </div>
      </div>

  )

}
