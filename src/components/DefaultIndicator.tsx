
import { Badge } from 'flowbite-react';
import { InfoCircle } from "flowbite-react-icons/outline";
import { MdPublishedWithChanges } from "react-icons/md";

export function DefaultIndicator({is_default}: {
  is_default: boolean
}) {
  if (is_default) {
    return  (
      <Badge color='gray' size="sm" className="p-0 ml-1">
        <InfoCircle size={17} className="m-0 p-0"/>
      </Badge>
    )
  }
  return (       
    <Badge color='warning' size="sm" className="p-0 ml-1">
      <MdPublishedWithChanges size={17} className="m-0 p-0"/>
    </Badge>
  )
}