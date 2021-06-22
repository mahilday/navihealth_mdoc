import {
  AnnotationIcon,
  ThumbUpIcon,
  BadgeCheckIcon,
  ArrowsExpandIcon,
} from "@heroicons/react/outline";
import {
  UserCircleIcon,
  LocationMarkerIcon,
  DocumentTextIcon,
  ClipboardListIcon,
  DocumentSearchIcon,
  AcademicCapIcon,
  SparklesIcon,
  TranslateIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ListItem from "../components/listItem";
import ProvTitle from "../components/providerTitle";
import RatingRange from "../components/ratingRange/ratingRange";
import Star from "../components/star";
import { providerContext } from "../contexts/providerContext";
const Provider = () => {
    const {id} = useParams()
  const { data } = useContext(providerContext);
  let i = id-1;

  return (
    <div className="w-screen py-32 space-y-20 bg-gray-50">
      <div className="w-9/12 sm:w-11/12 space-y-10 shadow-2xl rounded py-20 bg-white mx-auto flex flex-col justify-center">
        <header className="flex   sm:flex-col md:flex-col w-11/12 py-20 mx-auto space-y-10 xl:space-x-20 lg:space-x-20">
          <img
            className="w-72 h-72 mx-auto"
            src={data.providers[i].img}
            alt="provider"
          />
          <div className="w-10/12 mx-auto space-y-4">
            <h2 className="text-4xl font-semibold">{data.providers[i].name}</h2>
            <p className="capitalize">{data.providers[i].role}</p>
            <Star
              className="my-2"
              num={5}
              color="gray-400"
              activeColor="green-free"
              level={4 - 1}
            />
            <div className="flex space-x-3">
              <ThumbUpIcon className="h-6 w-6 text-gray-400" />
              <span>{data.providers[i].votes}</span>
            </div>
            <div className="flex space-x-3">
              <AnnotationIcon className="h-6 w-6 text-gray-400" />
              <span>{data.providers[i].feedback}</span>
            </div>
            <div className="flex space-x-3">
              <BadgeCheckIcon className="h-6 w-6 text-gray-400" />
              <span>
                Medical Registration
                <span
                  className={`${
                    data.providers[i].registered === "verified"
                      ? "text-green-free"
                      : "text-red-500"
                  } capitalize`}
                >
                  {data.providers[i].registered}
                </span>
              </span>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Address</h3>
              <p className="space-x-3 text-gray-400">
                {data.providers[i].personalDetails.address} -
                <span className="text-green-free">Get Direction</span>
              </p>
            </div>
            <section className="flex sm:flex-col sm:space-y-10 md:space-y-10 md:flex-col lg:space-x-16 xl:space-x-16">
              <div className="space-y-3">
                <h3 className="font-semibold">Phone</h3>
                <p className=" text-gray-400">
                  {data.providers[i].personalDetails.phone}{" "}
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Website</h3>
                <p className=" text-gray-400">
                  {data.providers[i].personalDetails.website}{" "}
                </p>
              </div>
            </section>
          </div>
          <div className="flex content-center justify-center items-center text-center bg-gray-100 rounded-lg w-32  h-12">
            <p className="space-x-2 text-orange-free opacity-70 font-semibold">
              <span>{data.providers[i].views}</span>
              <span>Views</span>
            </p>
          </div>
        </header>
        <hr className="w-11/12 mx-auto" />
        <main className="w-11/12 space-y-20 mx-auto">
          {/* professional statement */}
          <div className="flex sm:flex-col w-full lg:space-x-10 xl:space-x-10">
            <div className="flex content-start place-content-start">
              <UserCircleIcon className="font-thin h-32 w-32 text-green-free " />
            </div>
            <div className="space-y-10">
              <div className="space-y-10">
                <ProvTitle
                  title="Professional statement"
                  des="Mussum ipsum cacilds, vidis litro abertis."
                />
                <div className="w-11/12">
                  <p className="text-gray-400 text-lg">
                    {data.providers[i].professionalStatement.quote}
                  </p>
                </div>
              </div>
              <div className="space-y-10">
                <ProvTitle title="Professional statement" />
                <div className="w-full">
                  <ul className="flex justify-evenly flex-col h-60 sm:h-auto md:h-auto text-left sm:w-11/12 flex-wrap text-gray-400 text-lg">
                    {data.providers[i].professionalStatement.quoteList.map(
                      (quote, index) => (
                        <li key={quote + index} className="w-80 mb-3">{quote}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="space-y-10">
                <ProvTitle className="text-center" title="Care Philosophy" />
                <div className="w-11/12">
                  <p className="text-gray-400 text-lg">
                    {data.providers[i].professionalStatement.philosophy}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex sm:flex-col md:flex-col lg:space-x-10 xl:space-x-10 space-x-10">
            <div className="flex content-start place-content-start">
              <LocationMarkerIcon className="font-thin  h-32 w-32 text-green-free " />
            </div>
            <div className="space-y-10">
              <ProvTitle
                title="Practice Areas"
                des="Mussum ipsum cacilds, vidis litro abertis."
              />
              <div className="w-11/12">
                <ul className="text-gray-400 text-lg">
                  {data.providers[i].practiceAreas.map((item, index) => (
                    <ListItem key={item + index} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex sm:flex-col md:flex-col lg:space-x-10 xl:space-x-10">
            <div className="flex content-start place-content-start">
              <DocumentTextIcon className=" h-32 w-32 text-green-free " />
            </div>
            <div className="space-y-10">
              <ProvTitle
                title="Conditions Treated"
                des="Mussum ipsum cacilds, vidis litro abertis."
              />
              <div className="w-11/12">
                <ul className="text-gray-400  w-full h-60 sm:h-auto md:h-auto flex flex-col flex-wrap text-lg">
                  {data.providers[i].conditionsTreated.map((item, index) => (
                    <ListItem key={item + index} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="w-full" />

          <div className="flex sm:flex-col md:flex-col lg:space-x-10 xl:space-x-10">
            <div className="flex content-start place-content-start">
              <ClipboardListIcon className=" h-32 w-32 text-green-free " />
            </div>
            <div className="space-y-10">
              <ProvTitle
                title="Procedures"
                des="Mussum ipsum cacilds, vidis litro abertis."
              />
              <div className="w-11/12">
                <ul className="text-gray-400  w-full h-60 sm:h-auto md:h-auto flex flex-col flex-wrap text-lg">
                  {data.providers[i].procedures.map((item, index) => (
                    <ListItem key={item + index} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex sm:flex-col md:flex-col lg:space-x-10 xl:space-x-10">
            <div className="flex content-start place-content-start">
              <DocumentSearchIcon className=" h-32 w-32 text-green-free " />
            </div>
            <div className="space-y-10">
              <ProvTitle
                title="Background Check"
                des="Mussum ipsum cacilds, vidis litro abertis."
              />
              <div className="">
                <ul className="w-full space-y-10 flex flex-col text-lg">
                  {data.providers[i].background.map((item) => (
                    <li>
                      <div className="font-semibold text-xl">{item.claim}</div>
                      <div className="text-gray-400 text-lg">
                        {item.question}
                      </div>
                      {item.history.length === 0 ? (
                        <p className="mt-5">No history found for New York.</p>
                      ) : (
                        item.history.map((list) => (
                          <p className="mt-3 text-gray-400 my-2">{list}</p>
                        ))
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex sm:flex-col md:flex-col lg:space-x-10 xl:space-x-10">
            <div className="flex  content-start place-content-start">
              <AcademicCapIcon className=" h-32 w-32 text-green-free " />
            </div>
            <div className="space-y-10">
              <ProvTitle
                title="Education"
                des="Mussum ipsum cacilds, vidis litro abertis."
              />
              <div className="w-full">
                <ul className="text-gray-400 space-y-8 w-full flex flex-col flex-wrap text-lg">
                  {data.providers[i].education.map((item, index) => (
                    <ListItem
                      key={item + index}
                      item={item.city}
                      other={item.school}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex sm:flex-col md:flex-col lg:space-x-10 xl:space-x-10">
            <div className="flex content-start place-content-start">
              <SparklesIcon className=" h-32 w-32 text-green-free " />
            </div>
            <div className="space-y-10">
              <ProvTitle
                title="Awards & Recognition"
                des="Mussum ipsum cacilds, vidis litro abertis."
              />
              <div className="w-11/12">
                <ul className="text-gray-400 w-full space-y-8 w-full flex flex-col flex-wrap text-lg">
                  {data.providers[i].awards.map((item, index) => (
                    <li key={item + index} className="font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex sm:flex-col md:flex-col lg:space-x-10 xl:space-x-10">
            <div className="flex content-start place-content-start">
              <TranslateIcon className=" h-32 w-32 text-green-free " />
            </div>
            <div className="space-y-10">
              <ProvTitle title="Languages Spoken" />
              <div className="w-11/12">
                <ul className="text-gray-400 w-80 flex flex-wrap text-lg">
                  {data.providers[i].languages.map((item, index) => (
                    <ListItem key={item + index} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex sm:flex-col md:flex-col lg:space-x-10 xl:space-x-10">
            <div className="flex content-start place-content-start">
              <ArrowsExpandIcon className=" h-32 w-32 text-green-free " />
            </div>
            <div className="space-y-10">
              <ProvTitle
                title="Memberships & Professional Affiliations"
                des="Mussum ipsum cacilds, vidis litro abertis."
              />
              <div className="w-11/12">
                <p className="text-lg text-gray-400">
                  {data.providers[0].membership}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="rating space-y-10 w-9/12 shadow-2xl rounded px-20 py-20 bg-white mx-auto flex flex-col justify-center">
        <div className="flex space-x-10 items-center">
          <StarIcon className="text-green-free w-20 h-20" />
          <h2 className="text-5xl text-semibold">
            {data.providers[i].name} Reviews
          </h2>
        </div>
        <div className="flex justify-between ">
          <RatingRange i={i} max={data.providers[i].rating.total} />

          <div>
            <div className="flex space-x-5 items-center">
              <span className="text-5xl font-bold">4.3</span>
              <StarIcon className="text-yellow-500 w-20 h-20" />
            </div>
            <p>{`${data.providers[0].rating.total} Rating and ${data.providers[0].reviews} Reviews`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provider;
