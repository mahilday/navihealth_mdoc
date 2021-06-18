import { useContext } from "react";
import { NavContext } from "../contexts/navContext";
import navihealth from "../assets/navilogo.png";
import { SignIn } from "./Auth";
import FacilitiesDropdown from "./facilitiesDD";
const Nav = () => {
  const {status, functions} = useContext(NavContext);
  return (
    <div className="w-full relative">
    <div className="flex w-11/12 mx-auto h-24 justify-between items-center">
      <div className="w-2/4 flex items-center justify-around">
        <img className="w-3/6 h-12" src={navihealth} alt="navihealth logo" />
        <nav className="flex items-center space-x-12">
          <p onClick={()=>(
            functions.closeModal(status.facility.setFacModalOpen)
          )} className="cursor-pointer text-lg text-gray-free hover:text-green-free">
            Find a Provider
          </p>
          <p onClick={()=>(
            functions.openModal(status.facility.setFacModalOpen)
          )} className="cursor-pointer text-lg text-gray-free hover:text-green-free">
            Find a Facility
          </p>
        </nav>
      </div>

      <div className="space-x-8 items-center">
        <button className="btnOrange text-lg focus:outline-none font-light">Emergency No.</button>
        <button className="btnTransparent focus:outline-none text-lg" onClick={()=>{
          functions.openModal(status.login.setLoginModalOpen)
        }}>Log In / Sign Up</button>
      </div>
    </div>
    <SignIn/>
    <FacilitiesDropdown />
    </div>
  );
};

export default Nav;
