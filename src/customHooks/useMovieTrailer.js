import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movie_Id) => {
	const dispatch = useDispatch();
//   console.log("string S")
    const getMoviesVideos = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/"+movie_Id+"/videos?language=en-US",
			API_OPTIONS
		);
		const json = await data.json();
		// console.log("Adil", json);

		const filterData = json.results?.filter((video) => video.type === "Trailer");
		const trailer = filterData.length ? filterData[0] : json.results[0];
		// console.log("Adil", trailer);
		// console.log("jhsjgasjdgdagdagd",trailer)
		dispatch(addTrailerVideo(trailer));

	};

    useEffect(()=>{
        getMoviesVideos();
    },[movie_Id])
};

export default useMovieTrailer;
