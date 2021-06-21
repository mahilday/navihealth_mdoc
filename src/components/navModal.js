import { useContext } from "react";
import { NavContext } from "../contexts/navContext";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const NavModal = () => {
  const { status, functions, data } = useContext(NavContext);
  return (
    <div className="flex flex-col space-y-5 items-center content-center justify-center">
      <ul>
        <li className="border-t py-3 font-semibold flex">
          <span className="w-44"><Link to="/provider">Find A Provider</Link></span>
          <ArrowCircleRightIcon className="w-6 text-green-free h-6 ml-3" />
        </li>
        <li className="border-t py-3 font-semibold space-y-3 flex flex-col">
          <span className="w-44 ">Find A Facility</span>
          <div className="ml-2 space-y-2 ">
            {data.facilityDetail.map((facdata) => (
              <div key={facdata.title}>
                <Accordion
                  title={facdata.title}
                  list={facdata.list}
                  endNote={facdata.endNote}
                />
              </div>
            ))}
          </div>
        </li>
      </ul>
      <div className="flex flex-col justify-center space-y-4">
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
    </div>
  );
};

export default NavModal;
