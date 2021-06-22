import { FilterIcon } from "@heroicons/react/solid";
import Checkbox from "../components/Checkbox";
import Dropdown from "../components/dropdown";
import InputSearch from "../components/InputSearch";
import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { providerContext } from "../contexts/providerContext";
import { SearchIcon } from "@heroicons/react/outline";
import Card from "../components/Card";

const FindAProvider = () => {
  const { data } = useContext(providerContext);
  let i = 0;
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="w-full  bg-gray-100">
      <section>
        <InputSearch
          color="gray-800"
          title="248 Results for blood test near New York, NY"
        />
      </section>
      {/* filter */}
      <section className="w-11/12 sm:space-y-10 md:space-y-10 md:w-11/12 mx-auto flex sm:flex-col md:flex-col">
        <div className="items-center space-y-12 shadow-xl rounded-2xl sm:w-full md:w-11/12 w-3/12 bg-white">
          <div className="flex py-10 px-5 space-x-12 items-center">
            <FilterIcon className="w-20 h-20" />
            <h3 className="text-3xl font-semibold">Search Filter</h3>
          </div>
          <div className="w-full sm:w-11/12 md:w-11/12 space-y-10 px-12 py-5 mx-auto">
            <div className="w-full space-y-7">
              <Dropdown title="Insurance" />
              <div className="px-3 w-full">
                <div className="flex w-full px-5 items-center border-gray-400 border bg-white">
                  <SearchIcon className="h-8 text-gray-400 w-8" />
                  <input
                    className="h-14 w-11/12 font-medium text-xl border-none focus:ring-transparent"
                    type="text"
                    placeholder="Insurance"
                  />
                </div>
              </div>

              <hr className="w-full" />
            </div>
            <div className="w-full space-y-7">
              <Dropdown title="Distance" />
              <div className="px-3 w-full">
                <select className="h-14 w-full px-5 text-gray-free border-gray-400 border bg-white font-medium text-xl focus:ring-transparent">
                  <option>25 Miles</option>
                  <option>75 Miles</option>
                  <option>5 Miles</option>
                  <option>45 Miles</option>
                </select>
              </div>
              <hr className="w-full" />
            </div>
            <div className="w-full">
              <Dropdown title="Patient Satisfaction" />
              <div className="px-4">
                <div className="flex space-x-3 items-center">
                  <Checkbox clasme="h-6 w-6" />
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    edit={false}
                    size={60}
                    value={5}
                    activeColor="#02b176"
                  />
                </div>
                <div className="flex space-x-3 items-center">
                  <Checkbox clasme="h-6 w-6" />
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={60}
                    edit={false}
                    value={4}
                    activeColor="#02b176"
                  />
                </div>
                <div className="flex space-x-3 items-center">
                  <Checkbox clasme="h-6 w-6" />
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={60}
                    value={3}
                    edit={false}
                    activeColor="#02b176"
                  />
                </div>
                <div className="flex space-x-3 items-center">
                  <Checkbox clasme="h-6 w-6" />
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={60}
                    value={2}
                    edit={false}
                    activeColor="#02b176"
                  />
                </div>
                <div className="flex space-x-3 items-center">
                  <Checkbox clasme="h-6 w-6" />
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={60}
                    edit={false}
                    value={1}
                    activeColor="#02b176"
                  />
                </div>
              </div>
              <hr className="w-full" />
            </div>
            <div className="w-full space-y-5">
              <Dropdown title="Gender" />
              <div className="space-y-5 px-5">
                <div className="flex items-center space-x-3">
                  <Checkbox clasme="h-6 w-6 text-gray-free" />
                  <p className="text-2xl text-gray-free">Female (600)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox clasme="h-6 w-6 text-gray-free" />
                  <p className="text-2xl text-gray-free">Male (1111)</p>
                </div>
              </div>
              <hr className="w-full" />
            </div>
            <div className="w-full space-y-5">
              <Dropdown title="Specialty" />
              <div className="space-y-5 px-5">
                {data.providers[i].conditionsTreated.map((item, index) => (
                  <div
                    key={item + index}
                    className="flex items-center space-x-3"
                  >
                    <Checkbox clasme="h-6 w-6" />
                    <p className="text-2xl text-gray-free">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* list of providers */}
        <div className="space-y-5 lg:-mt-20 xl:-mt-20 w-full">
          <div className="flex justify-end w-10/12 mx-auto">
            <div className="flex flex-col space-y-3 place-content-end">
              <h3 className="text-gray-free w-40 font-medium">Sort By</h3>
              <select className="w-40">
                <option>Best Match</option>
                <option>Most Recent</option>
                <option>Old</option>
                <option>Wave</option>
              </select>
            </div>
          </div>
          <div className="w-10/12 md:w-11/12 mx-auto space-y-20">
            {data.providers.map((provider, index) => (
              <Card key={provider.name + index} id={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindAProvider;
