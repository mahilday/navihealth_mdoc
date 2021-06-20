const InputSearch = ({ title }) => {
  return (
    <div className="w-full sm:space-y-12 space-y-20">
      <div className="w-full text-center">
        <h1 className="text-6xl sm:px-3 sm:text-3xl md:text-5xl font-bold text-white">
          {title}
        </h1>
      </div>
      <div className=" sm:flex-col sm:items-center sm:space-y-4 sm:space-x-0 space-x-4 flex justify-center">
        <div className=" sm:w-5/6 w-2/6 h-20 rounded shadow-xl p-3 bg-white flex items-center">
          <h2 className="font-semibold w-20 lg:w-24 xl:w-32 text-gray-600 sm:text-xl text-3xl text mr-8">
            Search
          </h2>
          <input
            className="focus:outline-none p-3 w-3/4 sm:text-xl text-2xl border-none"
            type="text"
            placeholder="Facilities, Providers, Services"
          />
        </div>
        <div className="w-1/6 md:w-2/6 sm:w-5/6 h-20 rounded shadow-xl p-3 bg-white flex items-center">
          <h2 className="font-semibold lg:w-20 xl:w-20 w-14 sm:text-xl text-gray-600 text-3xl text mr-8">
            Near
          </h2>
          <input
            className=" focus:outline-none sm:text-xl p-3 w-3/4 text-2xl border-none"
            type="text"
            placeholder="City, State"
          />
        </div>
        <div className="sm:w-5/6">
          <button className="btnOrange sm:w-full font-semibold text-2xl h-20  ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputSearch;
