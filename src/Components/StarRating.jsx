import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const StarRating = ({productRating}) => {

   const ratingStar = Array.from({length:5}, (_,index) => {
        let number = index + 0.5;

        return ( <span key={index}>
            
               { productRating >= index + 1 
                ? ( <FaStar className="icon"/> 
               ): productRating >= number
                ? (<FaStarHalfAlt  className="icon"/>
                  )  : ( <AiOutlineStar className="icon"/>

                  )}
            
        </span>
            )
    });

    return (
        <div className="flex items-center justify-center ">
            <div className="icon-style flex space-x-1 justify-center text-yellow-500">
                {ratingStar} 
            </div>
            <span className="ml-2 text-gray-500">{productRating}</span>
            </div>
        
    )

    
}

export default StarRating