import { createContext } from "react";
import emeka from "../assets/emeka.png";

export const providerContext = createContext();

const ProvProvider = ({ children }) => {
  const providers = [
    {
      img: emeka,
      name: "Dr. Cornfield",
      role: "dentist",
      votes: "97% (3431 votes)",
      feedback: "1263 Feedback",
      registered: "verified",
      views: 854,
      personalDetails: {
        address: "6531 52nd Ave Maspeth, NY 11378",
        phone: "(080) 145 14567",
        website: "www.mdocexample.com",
      },
      professionalStatement: {
        quote:
          "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.",
        quoteList: [
          "Advantica",
          "Aetna",
          "American Postal Workers Union Health Plan",
          "Ameritas",
          "Assurant Health",
          "Advantica",
          "Aetna",
          "American Postal Workers Union Health Plan",
          "Ameritas",
          "Assurant Health",
          "Advantica",
          "Aetna",
          "American Postal Workers Union Health Plan",
          "Ameritas",
          "Assurant Health",
        ],
        philosophy:
          "Full service dentistry including I.V. and Oral Sedation if requested. So Don't put if off--Let us put you out! Out of Fear and Anxiety , Out of Pain and Embarrassment...all with No Memory of the treatment session!!. Our staff of friendly, caring professionals is trained in the latest techniques in virtually pain-free care. We are great at putting anxious patients at ease. In fact with over 30 years experience we can make going to the dentist seem like you never went.",
      },
      practiceAreas: [
        "Dentistry",
        "Cosmetic Dentistry",
        "Implant Dentistry",
        "Prosthodontics",
        "Reconstructive Dentistry",
      ],
      conditionsTreated: [
        "Dentistry",
        "Cosmetic Dentistry",
        "Implant Dentistry",
        "Prosthodontics",
        "Reconstructive Dentistry",
        "Dentistry",
        "Cosmetic Dentistry",
        "Implant Dentistry",
        "Prosthodontics",
        "Reconstructive Dentistry",
      ],
      procedures: [
        "Dentistry",
        "Cosmetic Dentistry",
        "Implant Dentistry",
        "Prosthodontics",
        "Reconstructive Dentistry",
        "Dentistry",
        "Cosmetic Dentistry",
        "Implant Dentistry",
        "Prosthodontics",
        "Reconstructive Dentistry",
        "Dentistry",
        "Cosmetic Dentistry",
        "Implant Dentistry",
        "Prosthodontics",
        "Reconstructive Dentistry",
        "Dentistry",
        "Cosmetic Dentistry",
        "Implant Dentistry",
        "Prosthodontics",
        "Reconstructive Dentistry",
      ],
      background: [
        {
          claim: "0 Malpractice Claims",
          question: "What is medical malpractice?",
          history: [],
        },
        {
          claim: "0 Sanctions",
          question: "What is a sanction or disciplinary action?",
          history: [],
        },
        {
          claim: "0 Board Actions",
          question: "What are board actions?",
          history: [],
        },
      ],
      education: [
        {
          city: "City College of New York",
          school: "Undergraduate School | Graduated 196",
        },
        {
          city: "City College of New York",
          school: "Undergraduate School | Graduated 196",
        },
        {
          city: "City College of New York",
          school: "Undergraduate School | Graduated 196",
        },
      ],
      awards: [
        "MBBS - Bangalore Medical College and Research Institute, Bangalore, 2000",
        "MD - Family Medicine - American Board of Family Medicine, 2007",
        "MD - Family Medicine - American Board of Family Medicine, 2007",
        "MD - Family Medicine - American Board of Family Medicine, 2007",
      ],
      languages: ["English", "Hindi"],
      membership:
        "Full service dentistry including I.V. and Oral Sedation if requested. So  'Dont put if off--Let us put you out!' Out of Fear and Anxiety , Out of Pain and Embarrassment...all with No Memory of the treatment session!!. Our staff of friendly, caring professionals is trained in the latest techniques in virtually pain-free care. We are great at putting anxious patients at ease. In fact with over 30 years experience we can make going to the dentist seem like you never went.",
    rating: {
        total: 95674,
        allRating:[
            {rate: 5, num :55000},
            {rate: 4, num :20000},
            {rate: 3, num :15000},
            {rate: 2, num :3291},
            {rate: 1, num :290},
        ]
    },
    reviews: 19678,
    },
  ];

  const contextVal = {
    data: {
      providers,
    },
  };
  return (
    <providerContext.Provider value={contextVal}>
      {children}
    </providerContext.Provider>
  );
};

export default ProvProvider;
