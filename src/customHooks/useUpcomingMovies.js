import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
	// console.log("Mohabbat")
	const getTrendingMovies = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/movie/upcoming',
			API_OPTIONS
		);
		const JsonData = await data.json();
		// console.log("topRatedMovies",JsonData);
		dispatch(addUpcomingMovies(JsonData?.results));
	};

	useEffect(() => {
		getTrendingMovies();
	}, []);
}

export default useUpcomingMovies;