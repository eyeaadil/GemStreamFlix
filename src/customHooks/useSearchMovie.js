import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {addSearchMovies} from "../utils/moviesSlice";
import { useEffect } from "react";

const useSearchMovie = ()=>{
    const dispatch = useDispatch();
	// console.log("Mohabbat")
	const getSearchMovies = async () => {
	    // const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ moviename+"&include_adult=false&language=en-US&page=1",API_OPTIONS);

		// const JsonData = await data.json();
		// console.log("PopularMovies",JsonData);
		// dispatch(addSearchMovies(JsonData?.results));
	};

	useEffect(() => {
		getSearchMovies();
	}, []);
}

export default useSearchMovie;