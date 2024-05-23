import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
     <img
       src={BG_URL}
       alt="background url"
       className=''
     />
   </div>

   <div className=''>
     <GptSearchBar/>
     <GptMovieSuggestion/>
   </div>


 </>
  )
}

export default GptSearch