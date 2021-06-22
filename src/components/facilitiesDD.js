import { useContext, useEffect } from "react";
import { NavContext } from "../contexts/navContext";
import FacilityData from "./facilityData";

const FacilitiesDropdown = () => {
  const { status, data, refs, functions } = useContext(NavContext);
  useEffect(() => {
    // If the item is active (ie open) then listen for clicks
    if (status.facility.facModalOpen) {
      window.addEventListener("click",
        functions.handleFacClick
      );
    }

    return () => {
      window.removeEventListener("click",
        functions.handleFacClick
      );
    };
  });
  return (
    <div
      ref={refs.containFacClose}
      className={`${
        status.facility.facModalOpen ? "" : "hidden"
      } w-full h-auto absolute`}
    >
      <div className={`w-full  bg-white pb-12 shadow-2xl`}>
        <FacilityData data={data} />
      </div>
    </div>
  );
};

export default FacilitiesDropdown;
