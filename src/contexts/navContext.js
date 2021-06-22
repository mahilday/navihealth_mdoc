import { createContext, useRef, useState } from "react";
import homeLoc from "../assets/home-loc.png";

export const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [facModalOpen, setFacModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const facilityDetail = [
    {
      img: homeLoc,
      title: "Find Nearby Facilities",
      list: [
        "Family Medicine",
        "Internal Medicine",
        "Obstetrics & Gynecology",
        "Dentistry",
        "Orthopedic Surgery",
      ],
      endNote: "See All Specialties",
    },
    {
      img: homeLoc,
      title: "Find Nearby Providers",
      list: [
        "Family Medicine",
        "Internal Medicine",
        "Obstetrics & Gynecology",
        "Dentistry",
        "Orthopedic Surgery",
      ],
      endNote: "See All Specialties",
    },
    {
      img: homeLoc,
      title: "Find Nearby Services",
      list: [
        "Family Medicine",
        "Internal Medicine",
        "Obstetrics & Gynecology",
        "Dentistry",
        "Orthopedic Surgery",
      ],
      endNote: "See All Specialties",
    },
  ];
  let containerNavClose = useRef(null);
  let containFacClose = useRef(null)
  const openModal = (modal) => {
    modal(true);
  };
  const closeModal = (modal) => {
    modal(false);
  };
  const toggleModal = (modal, state) => {
    modal(!state);
  };
  const handleClickOutside = (event) => {
    if (
      containerNavClose.current &&
      !containerNavClose.current.contains(event.target)
    ) {
      setNavOpen(false);
    } 
  };
  const handleFacClick = (event) => {
    if (
      containFacClose.current &&
      !containFacClose.current.contains(event.target)
    ) {
      setFacModalOpen(false);
    } 
  };
  const contextVal = {
    status: {
      facility: {
        facModalOpen,
        setFacModalOpen,
      },
      login: {
        loginModalOpen,
        setLoginModalOpen,
      },
      mobileNav: {
        navOpen,
        setNavOpen,
      },
    },
    functions: {
      openModal,
      closeModal,
      toggleModal,
      handleClickOutside,
      handleFacClick
    },
    data: {
      facilityDetail,
    },
    refs: {
      containerNavClose,
      containFacClose
    },
  };
  return (
    <NavContext.Provider value={contextVal}>{children}</NavContext.Provider>
  );
};

export default NavProvider;
