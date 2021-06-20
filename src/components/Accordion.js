import { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
const Accordion = ({ title, list, endNote }) => {
  const [setActive, setActiveState] = useState("");
  const [setDisplay, setDisplayState] = useState("hidden");
  const [setRotate, setRotateState] = useState("90");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setDisplayState(setActive === "active" ? "block" : `hidden`);
    setRotateState(setActive === "active" ? "0" : "90");
  }
  return (
    <div className="border-b py-3">
      <div onClick={toggleAccordion}>
        <h2 className="font-medium flex">
          <span className="w-44">{title}</span>
          <ChevronDownIcon
            className={`w-6 text-green-free transform -rotate-${setRotate} h-6 ml-3`}
          />
        </h2>
      </div>
      <div ref={content} className={`w-42 space-y-2  ml-1 my-2 ${setDisplay}`}>
        {list.map((faclist) => (
          <div className="font-normal" key={faclist}>
            {faclist}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
