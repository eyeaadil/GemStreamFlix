import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MovieCard from "../component/MovieCard";
import { BG_URL } from "../utils/constant";
const PopularMovies = ({title,movies}) => {
	// const moviesData = useSelector((store) => store.movies);
	// console.log("nowPlaying",moviesData)
	// const movies = moviesData.popularMovies;
	// console.log("nowplaying movies", movies);
	return (
		<div
			className="h-fit object-cover"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${BG_URL})`,
			}}
		>
			<div className="flex justify-between px-4 py-4 items-center">
				<img
					src="./assets/Netflix_Logo.png"
					alt="netflix logo"
					className="w-48"
				/>
				<div>
					<Link to={"/browse"}>
						<button className="bg-red-600 text-white px-4 py-2 text-lg rounded-md">
							Home
						</button>
					</Link>
				</div>
			</div>

			<div className="px-8">
				<h1 className="text-lg md:text-2xl text-white py-3 border-b-4 border-red-600 w-fit mb-4">
					{title}
				</h1>

				<div className="flex">
					<div className="grid grid-cols-2 md:grid-cols-5 bg-black bg-opacity-10 pl-16  py-10 m-auto gap-4 justify-around md:gap-10  w-[90%]">
						{movies &&
							movies?.map((movie) => (
								<Link key={movie.id} to={"/watch?v=" + movie.id}>
									<MovieCard key={movie?.id} posterPath={movie?.poster_path} />
								</Link>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopularMovies;
