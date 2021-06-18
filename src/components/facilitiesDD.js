import { useContext } from "react";
import { NavContext } from "../contexts/navContext";
import FacilityData from "./facilityData"

const FacilitiesDropdown = () => {
    const { status, data } = useContext(NavContext);
  return (
      <div className={`${status.facility.facModalOpen?"":"hidden"} bg-opacity-20 bg-gray-600 h-screen`}>
    <div className={`w-full  bg-white py-12 shadow-xl`}>
          <FacilityData data={data} />
    </div>
    </div>
  );
};

export default FacilitiesDropdown;