import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";

const GptMovieSuggestion = () => {
	const gpt = useSelector((store) => store.gpt);
	const { movieNames, movieResults } = gpt;
//   console.log("gptNames",movieNames);
	// console.log("gpt suggesstion", movieResults);
	return (
		<div className="p-4 m-4 bg-black text-white bg-opacity-80">
			<div>
				{movieNames?.map((movieName, index) => (
          <Link key={index} to={"/watch?v=" + movieResults[index].id} >
          
          <MovieList
						key={movieName}
						title={movieName}
						movies={movieResults[index]}
					/>
          </Link>
			
				))}
			</div>
		</div>
	);
};

export default GptMovieSuggestion;
