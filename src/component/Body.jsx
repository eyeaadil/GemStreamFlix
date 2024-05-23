import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NowPlayingMovies from "../pages/NowPlayingMovies";
import PopularMovies from "../pages/PopularMovies";
import TopRatedMovies from "../pages/TopRatedMovies";
// import Upcoming from "../pages/UpcomingMovies";
import UpcomingMovies from "../pages/UpcomingMovies";
import WatchPage from "./WatchPage";
import MainContainer from "./MainContainer";
import MoviesBtnWatchPage from "../pages/MoviesBtnWatchPage";
import StartedPage from "./StartedPage";
import { useSelector } from "react-redux";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
	// const dispatch = useDispatch();
	// const navigate = useNavigate();
	const movies = useSelector((store) => store.movies);

	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <StartedPage/>,
		},

		{
			path: "/login",
			element: <Login />,
		},


		{
			path: "/browse",
			element: <Browse />,
			children: [
				{ path: "/browse", element: <MainContainer /> },
				{ path: "watch", element: <WatchPage /> },
			],
		},
		// {   path: "/watch", 
		//     element: <WatchPage />
	    // },
		{ path: "/watch", element: <MoviesBtnWatchPage />},
		{
			path: "/nowplayingmovies",
			element: <NowPlayingMovies title={"Now Playing"} movies={movies.nowPlayingMovies} />,
		},
		{
			path: "/popularmovies",
			element: <PopularMovies title={"Popular Movies"} movies={movies.popularMovies} />,
		},
		{
			path: "/topratedmovies",
			element: <TopRatedMovies title={"Top Rated Movies"} movies={movies.topRatedMovies} />,
		},
		{
			path: "/upcomingmovies",
			element: <UpcomingMovies title={"Upcoming Movies"} movies={movies.upcomingMovies} />,
		},
	]);

	return (
		<div>
			<RouterProvider router={appRouter}>
				{/* <Login />
				<Browse /> */}
			</RouterProvider>
		</div>
	);
};

export default Body;
