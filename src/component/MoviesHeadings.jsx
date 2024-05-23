import React from 'react'
import { Link } from 'react-router-dom'
const MoviesHeadings = () => {
  return (
    <div className='px-44 py-5' >
        <ul className='text-white flex gap-20'>

          <Link to={"/browse"}>
          <li className='hover:border-b-4 hover:border-red-700'>Home</li>
          </Link>

          <Link to={"/nowplayingmovies"}>
          <li className='hover:border-b-4 hover:border-red-700'>NowPlaying</li>
          </Link>

          <Link to={"/popularmovies"}>
          <li className='hover:border-b-4 hover:border-red-700'>Popular</li>
          </Link>

          <Link to={"/topratedmovies"}>
          <li className='hover:border-b-4 hover:border-red-700'>TopRated</li>
          </Link>

          <Link to={"/upcomingmovies"}>
          <li className='hover:border-b-4 hover:border-red-700'>UpComing</li>
          </Link>

        </ul>
    </div>
  )
}

export default MoviesHeadings