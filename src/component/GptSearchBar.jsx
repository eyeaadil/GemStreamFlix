import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/langConstants';
import genAI from '../utils/gemini';
import { addGeminiMovieResult } from '../utils/gptSlice';
import { API_OPTIONS } from '../utils/constant';
// import { Form } from 'react-router-dom'

const GptSearchBar = () => {
  const langkey = useSelector(store=>store.config.lang) ;

  const searchText = useRef(null)
  const dispatch = useDispatch()

  const searchMovieTMDB = async(moviename)=>{

    // console.log("nbbjbhbvhb")
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ moviename+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    // console.log("fetch data")
    const json = await data.json()

    return json.results
  }



  const handleGeminiSearchClick = async()=>{
    const searchtext = searchText.current.value
    // console.log(searchtext)
    // make an API  call to GPT API and get Movie Results

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for thw query"+searchText.current.value+".only give me names of 5 movies,comma seperated like the example result given ahead.Example Result: Taare Zamee par, 3-Idiots ,Golmaal,Tiger Zinda Hai,Jawaan";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content:gptQuery}],
    //   model: 'gpt-3.5-turbo',
    // });

    const geminiQuery = async () => {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro"})
    
      const prompt = gptQuery;
    
     
      try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        
        // Split the comma-separated movie titles into an array
        const geminiMovies = text?.split(",")?.map(movie => movie?.trim());

        // console.log("gemini movie",geminiMovies);
        // search for each movie
        const promiseArray=geminiMovies.map((movie)=>searchMovieTMDB(movie))
        // here we get array of promise because searchMovieTMDB is async function
        // for each movie there will be 5 promise will return 
        // [promise1,promise2,promise3,promise4,promise5]

        const tmdbResults = await Promise.all(promiseArray)  // this promise.all take the array of promise
        // console.log("Promise array",tmdbResults);
        dispatch(addGeminiMovieResult({movieNames:geminiMovies,movieResults:tmdbResults}))
      } catch (error) {
        console.error("Error fetching movie recommendations:", error);
      }
    }
    
    geminiQuery();

    // console.log(gptResults.choices)
  }
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='p-2 m-6 bg-black w-1/2 grid grid-cols-12 opacity-80' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" className='p-3 m-4 col-span-10' placeholder={lang[langkey].gptSearchPlaceholder} />
            <button className='m-4 col-span-2 py-2 px-4 bg-red-700 text-white rounded-lg'onClick={handleGeminiSearchClick}>{lang[langkey].search}</button>
        </form>
        
    </div>
  )
}

export default GptSearchBar