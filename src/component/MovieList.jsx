import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
// import { addTrailerVideo } from '../utils/moviesSlice'
// import useMovieTrailer from '../customHooks/useMovieTrailer'
// import { useDispatch } from 'react-redux'
const MovieList = ({title,movies}) => {
  // const dispatch = useDispatch();
  console.log("MovieList",movies)
  // const posterPath = movies && movies[0]?.poster_path;
    // console.log("Adil",posterPath)

    
  return (
    <div className='px-6 '>
      <h1 className='text-3xl py-2 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            
            <div className='flex'>
            {
              movies?.map((movie)=>(
                <Link key={movie.id} to={"/watch?v=" + movie?.id} >
                <MovieCard  key={movie.id} posterPath={movie.poster_path} title={movie.title}/>
                </Link>
                
              ))
            }
            </div>
        </div>
      
    </div>
  )
}

export default MovieList