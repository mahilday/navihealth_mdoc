import { StarIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { providerContext } from "../../contexts/providerContext";
import "./ratingRange.css";

const RatingRange = ({ i, max }) => {
  const { data } = useContext(providerContext);
  return (
    <div>
      {data.providers[i].rating.allRating.map((item) => (
        <div key={item.num} className="flex w-full space-x-5 items-center">
          <h4 className="font-medium text-2xl w-5">{item.rate}</h4>
          <StarIcon className="w-12 h-12" />
          <input
            className="slider w-11/12 h-3"
            type="range"
            min="0"
            max={max}
            value={item.num}
            id="myRange"
            readOnly
          />
          <p className="font-medium w-12 text-lg">{item.num}</p>
        </div>
      ))}
    </div>
  );
};

export default RatingRange;
