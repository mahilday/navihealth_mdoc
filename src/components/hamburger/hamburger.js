import { useContext } from "react";
import { NavContext } from "../../contexts/navContext";
import "./hamburger.css";
const Hamburger = () => {
  const { status, functions } = useContext(NavContext);
  const hami = () => {
    var para = document.querySelector("#nav-icon1");
    para.classList.toggle("open");
  };
  return (
    <div
      id="nav-icon1"
      onClick={() => {
        hami();
        functions.toggleModal(
          status.mobileNav.setNavOpen,
          status.mobileNav.navOpen
        );
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
