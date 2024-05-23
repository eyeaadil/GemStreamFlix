import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
	// console.log("Mohabbat")
	const getTopRatedMovies = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/movie/top_rated?page=1',
			API_OPTIONS
		);
		const JsonData = await data.json();
		// console.log("topRatedMovies",JsonData);
		dispatch(addTopRatedMovies(JsonData?.results));
	};

	useEffect(() => {
		getTopRatedMovies();
	}, []);
}

export default useTopRatedMovies;