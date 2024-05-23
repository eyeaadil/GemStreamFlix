import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath, title }) => {
	// console.log("MovieCard",posterPath)
  const handleClick = ()=>{

  }
	if (!posterPath) return null;
	return (
		// <div className='w-48 pr-4 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:scale-smooth'>
		//   <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
		// </div>

		<div className=' w-60 p-3 transform transition-transform duration-300 ease-in-out hover:scale-90 hover:scale-smooth ' onClick={handleClick}>
			<img
				className="h-70 w-full stroke animate rounded-lg"
				src={IMG_CDN_URL + posterPath}
				alt="Loading.."
			></img>
			<span className="text-gray-300 hidden md:block lg:text-base md:text-sm ">
				{title?.length > 18 ? `${title.slice(0, 18)}...` : title}{" "}
			</span>
			<span className="text-gray-300  md:hidden sm:text-sm text-xs">
				{title?.length > 12 ? `${title.slice(0, 12)}...` : title}{" "}
			</span>
		</div>
	);
};

export default MovieCard;
