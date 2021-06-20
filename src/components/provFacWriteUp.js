import gPlay from '../assets/g-play.png'
const PFWriteUp = ({title, des, gplay, button}) => {
    return ( 
        <div className="space-y-10 sm:text-center md:text-center">
            <h2 className="sm:text-2xl md:text-2xl text-4xl">{title}</h2>
            <p className="text-gray-400 sm:w-full md:w-full w-9/12">{des}</p>
            <button className={`${gplay && "hidden"} btnOrange rounded-3xl`}>Show More</button>
            <img className ={`sm:w-48 md:w-48 md:mx-auto sm:mx-auto ${button && "hidden"}`} src={gPlay} alt="google play"/>
        </div>
     );
}
 
export default PFWriteUp;