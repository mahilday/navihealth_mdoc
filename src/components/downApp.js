import mobile2 from "../assets/mobile2.png";
import GreyBg from "../assets/grey-bg.png";
import PFWriteUp from "./provFacWriteUp";
const DownloadComponent = () => {
  return (
    <div
      style={{
        background: `url(${GreyBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "bottom",
        backgroundSize: "cover",
      }}
      className="w-full"
    >
      <section className="w-11/12 mx-auto sm:flex-col md:flex-col flex items-center justify-center xl:space-x-24 lg:space-x-24 ">
        <div className=" flex justify-center content-center relative sm:w-full md:w-8/12 w-5/12">
          <img src={mobile2} alt="mobile" />
        </div>
        <div className="w-4/12 mb-20 sm:w-11/12 md:w-9/12 mx-auto items-center">
          <PFWriteUp
            title="Download the NaviHealth app"
            des="We are building a geo-coded database of healthcare services and democratizing healthcare information for the African user. "
            gplay="true"
          />
        </div>
      </section>
    </div>
  );
};

export default DownloadComponent;
