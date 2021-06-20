import { useContext } from "react";
import { NavContext } from "../contexts/navContext";
import FacilityData from "./facilityData";

const FacilitiesDropdown = () => {
  const { status, data } = useContext(NavContext);
  return (
    <div
      className={`${
        status.facility.facModalOpen ? "" : "hidden"
      } w-full h-screen absolute`}
    >
      <div className={`w-full  bg-white pb-12 shadow-2xl`}>
        <FacilityData data={data} />
      </div>
    </div>
  );
};

export default FacilitiesDropdown;
