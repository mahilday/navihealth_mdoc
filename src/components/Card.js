import { useContext } from "react";
import { providerContext } from "../contexts/providerContext";
import ReactStars from "react-rating-stars-component";
import {
  AnnotationIcon,
  LocationMarkerIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import { BadgeCheckIcon, ArrowCircleRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Card = ({ id }) => {
  const { data } = useContext(providerContext);
  let i = id;
  return (
    <div className=" bg-white divide-y-2 py-5 px-10 rounded-xl shadow-xl">
      <div className="flex md:mb-10 sm:flex-col md:flex-col md:divide-none sm:divide-none divide-x-2 py-6 h-72 sm:h-auto md:h-auto lg:grid xl:grid grid-cols-3  md:space-x-10 lg:space-x-10 xl:space-x-10">
        <div className="flex sm:flex-col md:grid md:mb-5 md:grid-cols-2 md:mx-auto items-center space-x-10">
          <img className="h-32 w-32" alt="provider" src={data.providers[i].img} />
          <div className="space-y-2">
            <h3 className="text-3xl md:text-2xl font-semibold text-orange-free">
              {data.providers[i].name}
            </h3>
            <p className="text-gray-free capitalize text-2xl font-medium">
              {data.providers[i].role}
            </p>
            <div className="flex space-x-3 items-center">
              <ReactStars
                count={5}
                edit={false}
                size={30}
                value={4}
                activeColor="#02b176"
              />
              <span className="text-gray-400">(145)</span>
            </div>
            <p className="text-green-free text-xl font-medium">
              Leave A Review
            </p>
          </div>
        </div>
        <div className="space-x-5 py-2 flex md:justify-start justify-center">
          <LocationMarkerIcon className="h-12 text-orange-free w-8" />
          <p className="space-x-3  md:w-72 w-60 text-gray-free text-xl">
            {data.providers[i].personalDetails.address}
          </p>
        </div>
        <div className="space-y-3 px-10 py-2">
          <div className="flex space-x-3">
            <ThumbUpIcon className="h-6 w-6 text-gray-400" />
            <span>{data.providers[i].votes}</span>
          </div>
          <div className="flex space-x-3">
            <AnnotationIcon className="h-6 w-6 text-gray-400" />
            <span>{data.providers[i].feedback}</span>
          </div>
          <div className="flex space-x-3">
            <BadgeCheckIcon className="text-green-free h-6 w-6  text-gray-400" />
            <span className=" space-x-1">
              <span className="text-green-free ">Medical Registration</span>
              <span
                className={`capitalize ${
                  data.providers[i].registered === "verified"
                    ? "text-green-free"
                    : "text-red-500"
                }`}
              >
                {data.providers[i].registered}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex md:space-x-5 md:justify-center lg:space-x-5 xl:space-x-5 sm:space-y-5 py-3 sm:flex-col justify-end">
        <button className="btnGreen  w-56">Cancel</button>
        <Link to={`/providers/${id+1}`}>
          <button className="btnGray text-center items-center w-56 flex space-x-3">
            <span>View Profile</span>
            <ArrowCircleRightIcon className="w-6 h-6 ml-3" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
