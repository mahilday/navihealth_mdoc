import { useContext } from "react";
import { NavContext } from "../contexts/navContext";
import navihealth from "../assets/navilogo.png";
import { SignIn } from "./Auth";
import FacilitiesDropdown from "./facilitiesDD";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
const Nav = () => {
  const { status, functions } = useContext(NavContext);
  return (
    <div className="w-full bg-white relative">
      <div className="flex w-11/12 mx-auto h-24 justify-between items-center">
        <div className="w-2/4 sm:w-3/4 lg:w-3/5 xl:w-3/5 flex items-center justify-around">
          <Link to='/' className="items-center lg:w-2/6 xl:w-4/12 sm:w-10/12 sm:h-8 w-5/6 h-11">
            <img
              className="cursor-pointer"
              src={navihealth}
              alt="navihealth logo"
            />
          </Link>
          <nav className=" items-center space-x-12 hidden lg:flex xl:flex">
            <p className="cursor-pointer text-lg text-gray-free active:text-green-free hover:text-green-free">
              <Link to="/providers" className="font-semibold"> Find a Provider </Link>
            </p>
            <p
              onClick={() =>
                functions.toggleModal(
                  status.facility.setFacModalOpen,
                  status.facility.facModalOpen
                )
              }
              className="cursor-pointer font-semibold active:text-green-free text-lg text-gray-free hover:text-green-free"
            >
              Find a Facility
            </p>
          </nav>
        </div>

        <div className="space-x-8 items-center hidden lg:flex xl:flex">
          <button className="btnOrange text-lg focus:outline-none font-light">
            Emergency No.
          </button>
          <button
            className="btnTransparent focus:outline-none text-lg"
            onClick={() => {
              functions.openModal(status.login.setLoginModalOpen);
            }}
          >
            Log In / Sign Up
          </button>
        </div>
        <div className="lg:hidden xl:hidden">
          <MobileNav />
        </div>
      </div>
      <SignIn />
      <FacilitiesDropdown />
    </div>
  );
};

export default Nav;
