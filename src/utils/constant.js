export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWM0MDQ1OTNlODA5NWE0NjM2MGZkMjU0YTY2ZWQwOSIsInN1YiI6IjY2NDc1ODZkZWQ0MWNlZTU1NDI1YmE0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bI9XGaEFjWIREJ4yTbRgO-TColtZViu4p3b96uYDtdw"
  }
};

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

  export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"

  export const SUPPORTED_LANGUAGES = [{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}]

  export const GEMINI_API_KEY =process.env.REACT_APP_GEMINI_API_KEY