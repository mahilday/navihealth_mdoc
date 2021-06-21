import { useState, useEffect } from "react";
import {StarIcon} from '@heroicons/react/solid'
const Star = ({num, onClick, color, activeColor, level}) => {
    const [rating, setRating] = useState(level)
    const starArray =[]
   
    useEffect(()=>{
        ratingLevel()
        
    })
    for(let i = 0; i<=num-1; i++){
        starArray.push("star");
    }
  
    const ratingLevel=()=>{
        let stars = document.getElementsByClassName('star')
        Array.from(stars).forEach((star,index) => {
            star.classList.add( rating >= index && `text-${activeColor}`)
             star.classList.remove( rating < index && `text-${activeColor}`)
          });
          console.log('rate')
    }


    const clickRating=(index)=>{
        let rate= index;
        setRating(rate)
        ratingLevel();
    }
    
    
        
    return ( 
        <div className="flex">
            {starArray !== [] && starArray.map((star, index)=>(
                <StarIcon key={star + index} onClick={()=>{ onClick && clickRating(index)}} className={`text-${color} cursor-not-allowed star w-6  h-6`} />
            ))}
        </div>
     );
}
 
export default Star;