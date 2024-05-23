import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { API_OPTIONS } from '../utils/constant';

const MoviesDetail = () => {
    const movies = useSelector((store)=>store.movies);
    const [searchParams] = useSearchParams();  //HW -> Read more about useSearchParams
  const movieName= searchParams.get('v')

//   console.log("mohabbat",movieName)

  const searchMovieTMDB = async(moviename)=>{

    // console.log("nbbjbhbvhb")
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movieName+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    // console.log("fetch data")
    const json = await data.json()
    // console.log("Adil",json)
    // const movies = json.results
  }

  useEffect(()=>{searchMovieTMDB()},[movieName])
  return (
    <div>
{
    movies || movies?.map((movie)=>{
        if(movie.original_title===movieName){
            return(
                <div>
                    <h1>{movie.original_title}</h1>
                    <p>{movie.overview}</p>
                </div>
            )
        }
    })
}
    </div>
  )
}

export default MoviesDetail