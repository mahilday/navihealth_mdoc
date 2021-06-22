import { ChevronDownIcon } from "@heroicons/react/solid";

const Dropdown = ({title}) => {
    return ( 
        <div className="w-full">
            <h2 className="flex w-full items-center justify-around"><span className="text-2xl w-8/12 font-semibold">{title}</span><ChevronDownIcon className="flex flex-end h-12 w-12"/><span></span></h2>
        </div>
     );
}
 
export default Dropdown;