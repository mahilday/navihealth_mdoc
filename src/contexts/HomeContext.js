import { createContext } from "react";
import Flo from '../assets/flo.png'
import Emeka from '../assets/emeka.png'

export const HomeContext = createContext()
const HomeProvider = ({children}) => {
    const providers=[
        {
            img:Flo,
            name: "Dr. Florence Olamide",
            role: "Oncologist",
            hospital: "Professional Private Clinic",
            distance: "2 kilometers away ",
        },
        {
            img:Emeka,
            name: "Emeka Okoye",
            role: "Physiotherapist",
            hospital: "Professional Private Clinic",
            distance: "3 kilometers away ",
        },
    ]
    const contextVal={
        data:{
            providers,
        }
    }
    return ( 
        <HomeContext.Provider value={contextVal}>{children}</HomeContext.Provider>
     );
}
 
export default HomeProvider;