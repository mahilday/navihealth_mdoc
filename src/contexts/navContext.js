import { createContext, useState } from "react";
import homeLoc from "../assets/home-loc.png";

export const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [facModalOpen, setFacModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

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
  ];

  const openModal = (modal) => {
    modal(true);
  };
  const closeModal = (modal) => {
    modal(false);
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
    },
    functions: {
      openModal,
      closeModal,
    },
    data: {
      facilityDetail,
    },
  };
  return (
    <NavContext.Provider value={contextVal}>{children}</NavContext.Provider>
  );
};

export default NavProvider;
