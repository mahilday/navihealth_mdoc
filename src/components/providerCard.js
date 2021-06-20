const ProviderCard = ({ imgUrl, name, role, hospital, distance }) => {
  return (
    <div className="w-72 md:w-96 lg:w-96 xl:w-96 space-y-4 bg-white px-5 py-3 shadow-2xl">
      <div className="flex space-x-3">
        <img className="w-20 h-20" src={imgUrl} alt="providerpic" />
        <div>
          <h3 className="sm:text-sm md:text-base">{name}</h3>
          <p className="sm:text-sm md:text-sm">{role}</p>
        </div>
      </div>
      <div>
        <p className="sm:text-sm md:text-base">{hospital}</p>
        <p className="sm:text-sm md:text-base">{distance}</p>
      </div>
      <button className="btnGreen w-full">See Location</button>
    </div>
  );
};

export default ProviderCard;
