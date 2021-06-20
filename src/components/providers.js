import { useContext } from "react";
import { HomeContext } from "../contexts/HomeContext";
import ProviderCard from "./providerCard";
import mobile1 from "../assets/mobile1.png";
import PFWriteUp from "./provFacWriteUp";
import GreyBg from "../assets/grey-bg.png";

const Providers = () => {
  const { data } = useContext(HomeContext);
  return (
    <div
      style={{
        background: `url(${GreyBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "bottom",
      }}
      className="w-full"
    >
      <section className="w-11/12 mx-auto sm:flex-col md:flex-col flex items-center justify-center xl:space-x-24 lg:space-x-24 ">
        <div className=" flex justify-center content-center relative sm:w-full md:w-8/12 w-5/12">
          <img src={mobile1} alt="mobile" />
          <div className="absolute sm:top-12 md:top-32 sm:right-0 md:right-12 top-40 right-12 space-y-10">
            <ProviderCard
              className="absolute right-0"
              imgUrl={data.providers[0].img}
              name={data.providers[0].name}
              role={data.providers[0].role}
              hospital={data.providers[0].hospital}
              distance={data.providers[0].distance}
            />
          </div>
          <div className="absolute sm:bottom-12 md:bottom-32 bottom-40 sm:left-0 md:left-12 left-12  space-y-10">
            <ProviderCard
              imgUrl={data.providers[1].img}
              name={data.providers[1].name}
              role={data.providers[1].role}
              hospital={data.providers[1].hospital}
              distance={data.providers[1].distance}
            />
          </div>
        </div>
        <div className="w-4/12 mb-20 sm:w-11/12 md:w-9/12 mx-auto items-center">
          <PFWriteUp
            title="Find A Provider Around You"
            des="Looking for a doctor, nutritionist or other provider? Need to find a primary health facility near you? You’re in the right place. Let us help you find what you need."
            button="true"
          />
        </div>
      </section>
    </div>
  );
};

export default Providers;
