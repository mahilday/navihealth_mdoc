import callBg from "../assets/callhome.jpg";
import InputSearch from "../components/InputSearch";
import UnitCount from "../components/unitCount";
import facility from "../assets/hospital-fac.png";
import providerpic from "../assets/provider.png";
import Providers from "../components/providers";
import ProviderCard from "../components/providerCard";
import PFWriteUp from "../components/provFacWriteUp";
import PC from "../assets/PC.png";
import { useContext } from "react";
import { HomeContext } from "../contexts/HomeContext";
import DownloadComponent from "../components/downApp";
import Offers from "../components/offers";
const Home = () => {
  const { data } = useContext(HomeContext);
  return (
    <div className="w-full relative space-y-32 h-screen">
      {/* top landing image with search bar */}
      <section id="topLanding" className="w-full relative h-screen">
        <img className="w-full object-cover h-5/6" src={callBg} alt="homepic" />
        <div className="w-full  flex content-center items-center absolute top-0 bg-opacity-30 h-5/6 bg-black">
          <InputSearch title="A health directory. For you and your family." />
        </div>
      </section>
      {/*  */}
      {/* Facility and providers count section */}
      <section className="facAndProvCount z-0 w-11/12 mx-auto space-y-24">
        <div className="text-center items-center space-y-4">
          <h2 className="text-4xl z-0 sm:text-3xl font-semibold">
            We put the patient at the center
          </h2>
          <p className="text-gray-500 text-sm ">
            ...and provide you with the knowledge to navigate care around you
          </p>
        </div>
        <div className="flex space-x-24 justify-center">
          <UnitCount img={facility} num="2000" des="Facilities" />
          <UnitCount img={providerpic} num="5000" des="Providers" />
        </div>
      </section>
      {/*  */}
      {/* Providers section */}
      <section>
        <Providers />
      </section>
      {/* Facilities section */}
      <section className="w-full  sm:space-y-20 md:space-y-20 space-x-20">
        <div className="w-10/12 mx-auto flex sm:flex-col md:flex-col justify-center items-center">
          <div className="w-5/12 sm:w-11/12 md:w-9/12 ">
            <PFWriteUp
              title="Find A Facility Around You"
              des="Looking for a diabetes care centre? Need to find a primary health, family planning or a cancer screening centre? We are here for you."
              button="true"
            />
          </div>
          <div className="relative w-5/12 sm:w-11/12 md:w-9/12">
            <img src={PC} alt="pc" />
            <div className="absolute sm:top-12 md:top-32 sm:w-full md:right-12 top-48 -left-10 space-y-10">
              <ProviderCard
                imgUrl={data.providers[0].img}
                name="Summit Maternity Hospital"
                role="Reproductive & Maternity Facility"
                hospital={data.providers[0].hospital}
                distance="4 kilometers away"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Download app section */}
      <section className="mt-20">
        <DownloadComponent />
      </section>
      {/* Offers section */}
      <section className="w-full space-y-32">
        <h2 className="sm:text-3xl text-5xl text-center">What mDoc Navihealth Offers</h2>
        <div className="flex sm:flex-col md:w-7/12 w-10/12 lg:w-10/12 lg:space-x-10 xl:space-x-10 xl:w-8/12 sm:space-y-5 md:space-y-5 mx-auto md:flex-col">
          <Offers
            img={facility}
            title="For Providers"
            des="We help patients find the right healthcare professionals."
            footNote="Claim your profile"
          />
          <Offers
            img={facility}
            title="For Facilities"
            des="Do you own or manage a healthcare facility, lab, diagnostic centre or pharmacy?"
            footNote="List your facility for free"
          />
          <Offers
            img={facility}
            title="For Patients"
            des="Is there a facility or service near you that is not listed? Let us know and we will verify it."
            footNote="Upload your local facility"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
