import { useContext } from "react";
import { NavContext } from "../contexts/navContext";
import Hamburger from "./hamburger/hamburger";
import NavModal from "./navModal";

const MobileNav = () => {
    const {status} = useContext(NavContext)
    return ( 
        <div className="relative">
            <Hamburger />
            <div className={`w-72 md:w-96 ${status.mobileNav.navOpen?"":"hidden"}  py-8 rounded-md bg-white bg-scroll absolute top-10 -right-4`}>
                <NavModal />
            </div>
        </div>
     );
}
 
export default MobileNav;