const ProvTitle = ({ title, des }) => {
  return (
    <div className="space-y-2">
      <h2 className="font-bold sm:text-xl md:text-2xl text-3xl">{title}</h2>
      {des && <p className=" sm:text-sm md:text-base text-gray-400">{des}</p>}
    </div>
  );
};

export default ProvTitle;
