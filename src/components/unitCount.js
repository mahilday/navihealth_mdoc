const UnitCount = ({ img, num, des }) => {
  return (
    <div className="flex sm:flex-col sm:space-y-4 items-center space-x-5">
      <img className="w-32 h-32 sm:w-20 sm:h-20" src={img} alt={des} />
      <div>
        <h2 className="text-gray-300 text-center sm:text-2xl font-medium text-4xl">
          {num}+
        </h2>
        <p className="text-center font-medium text-xl">{des}</p>
      </div>
    </div>
  );
};

export default UnitCount;
