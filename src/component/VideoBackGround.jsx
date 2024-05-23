import React from "react";
// import { API_OPTIONS } from "../utils/constant";
import {  useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";
// import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackGround = ({ movie_Id }) => {

 
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
	useMovieTrailer(movie_Id);


	return (
		<div className="w-screen">
			<iframe
            className="w-screen aspect-video"
				src={"https://www.youtube.com/embed/" +trailerVideo?.key +"?&autoplay=1&mute=1"}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</div>
	);
};

export default VideoBackGround;
