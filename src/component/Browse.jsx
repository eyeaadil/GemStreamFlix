// import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useTrendingMovies from "../customHooks/useUpcomingMovies";

const Browse = () => {
 const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  // Here code is looking so ugly so make a custom hook for this
  // Fetch data from tmdb api and update the store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrendingMovies()
  

	return (
		<div>
			<Header />

      {showGptSearch?<GptSearch/>:
      <>
      <MainContainer/>
      <SecondryContainer/>
      </>}
     
      {/* 
      main container
          -video background
          -video title
      secondry Container
        MovieList * n
        Movie card * n    
      
      */}
		</div>
	);
};

export default Browse;
