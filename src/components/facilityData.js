
const FacilityData = ({data}) => {
  
  return (
    <div className={`flex items-center w-11/12 mx-auto justify-around`}>
      {data.facilityDetail.map((facdata) => (
        <div key={facdata.title} className="flex facdet hover:bg-gray-100 py-12 px-14 rounded-2xl">
          <div className="mr-5">
            <img
              className="w-16 shadow-xl rounded-xl h-14"
              src={facdata.img}
              alt="picimg"
            />
          </div>
          <div className="space-y-4 pt-4">
              <h2 className="font-bold pb-2 text-gray-free text-xl">{facdata.title}</h2>
              <ul className="space-y-4">
                  {facdata.list.map(litem =>(
                      <li key={litem}>{litem}</li>
                  ))}
              </ul>
              <h2 className="text-green-free endnote pt-4 font-semibold text-lg">{facdata.endNote}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacilityData;
