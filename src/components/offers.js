const Offers = ({ img, title, des, footNote }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-5">
      <div className="flex">
        <img className="w-20 h-20 lg:w-32 lg:h-32 xl:w-32 xl:h-32 mr-2" src={img} alt="title" />
        <div className="space-y-3">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-gray-400 lg:text-base text-sm">{des}</p>
        </div>
      </div>
      <p className="w-full flex font-semibold text-orange-free justify-end mt-2">{footNote}</p>
    </div>
  );
};

export default Offers;
