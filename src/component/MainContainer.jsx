import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'

const MainContainer = () => {

    // data come from store
    const movies = useSelector(store =>store?.movies?.nowPlayingMovies)
    // console.log(movies)
    // if movies are not present then return
    if(movies===null) return;
    // this movies variable has 20 movie , but i need only 1 movie
    const mainMovie = movies[0];
    const{original_title,overview,id}=mainMovie;
    // console.log("dil",id)
    // console.log(mainMovie)
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackGround movie_Id={id}/>
    </div>
  )
}

export default MainContainer