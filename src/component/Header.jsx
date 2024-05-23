import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLang } from "../utils/configSlice";
import MoviesHeadings from "./MoviesHeadings";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// import {GiHamburgerMenu} from "react-icons"
const Header = () => {
	const dispatch = useDispatch();

	const user = useSelector((store) => store.user);
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
	const navigate = useNavigate();
	const [isDropdownClicked, setIsDropdownClicked] = useState(false);
	const handleSignOut = () => {
		// const auth = getAuth();
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				// navigate("/");
			})
			.catch((error) => {
				navigate("/error");
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate("/login");
			}
		});

		//unsubscribe when component unmounts
		return () => unsubscribe();
	}, []);

	const handleGptSearchClick = () => {
		// toggle GPT search
		dispatch(toggleGptSearchView());
	};
	const handleLanguageChange = (e) => {
		// console.log(e.target.value)
		dispatch(changeLang(e.target.value));
	};

	const handleDropDown = () => {
		setIsDropdownClicked(!isDropdownClicked);
	  };
	
	return (
		<div className="absolute  w-screen  px-8 py-2   z-10 flex flex-col md:flex-row justify-between ">
			<div className= "flex h-16">

				
				<img
					className="h-14"
					src="./assets/final_logo.jpg"
					alt="logo"
				/>

				{user && (
					// <div className="bg-white m-auto ">
						<MoviesHeadings />
					// </div>
				)}
	
			
			</div>

			{user && (
				<div className=" flex p-[5px]">
					{showGptSearch && (
						<select
							className="bg-red-500 p-2 m-2 text-white rounded-lg"
							onChange={handleLanguageChange}
						>
							{SUPPORTED_LANGUAGES.map((lang) => (
								<option
									key={lang.identifier}
									value={lang.identifier}
									className="bg-white text-black"
								>
									{lang.name}
								</option>
							))}
						</select>
					)}

					<button
						className="px-4 bg-purple-800 my-2 mx-4 rounded-lg"
						onClick={handleGptSearchClick}
					>
						{showGptSearch ? "HomePage" : "GPT Search"}
					</button>
					{/* <img
						src={user?.PhotoURL}
						alt="UserProfile"
						className="w-12 h-12 bg-red-600"
					/> */}

					{/* <button onClick={handleSignOut} className="font-bold text-white">
						(Sign Out)
					</button> */}

<div className="flex flex-col w-fit md:w-36 z-40 pr-3 m-auto relative">
            <div className="flex ">
              <img
                src="./assets/signout.png"
                alt="userImg"
                className="w-11 h-[47px]  cursor-pointer rounded-md "
              />
              <span
                className="text-red-600 cursor-pointer px-5 text-4xl"
                onClick={handleDropDown}
              >
                <GiHamburgerMenu className="h-10" />
              </span>
            </div>
            {isDropdownClicked && (
              <div className="bg-rose-700 m-auto bg-opacity-90 rounded-b-xl px-2 py-2 absolute top-14 right-0">
                {/* <h1 className=" text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl hover:text-red-600">
                  {user.displayName}
                </h1> */}

                <button
                  className="font-semibold p-2 mx-4 text-md text-start w-full m-auto text-white hover:text-gray-300"
                  onClick={handleGptSearchClick}
                >
                  {/* if showGptSearch is true than than show homepage otherwise show GptSearch  */}
                  {showGptSearch ? "Home" : "GPT Search"}
                </button>

                <ul className="flex flex-col font-semibold p-2 gap-4 mx-4 text-start w-full m-auto text-white">
                  <Link to="/nowplayingmovies" className="hover:text-gray-300">
                    <li>Now Playing </li>
                  </Link>

                  <Link to="/popularmovies" className="hover:text-gray-300">
                    <li>Popular</li>
                  </Link>

                  <Link to="/topratedmovies" className="hover:text-gray-300">
                    <li>Top Rated</li>
                  </Link>

                  <Link to="/trendingmovies" className="hover:text-gray-300">
                    <li>Trending</li>
                  </Link>

                  <Link to="upcomingmovies" className="hover:text-gray-300">
                    <li>Upcoming</li>
                  </Link>
                </ul>

				<Link to={"/login"}>
				<button
                  className="flex items-center px-2 mx-4 text-start text-white font-semibold text-md py-2 hover:text-gray-300"
                  onClick={handleSignOut}
                >
                  <span>Sign Out</span>
                </button>
				</Link>
               
              </div>
            )}
          </div>
				</div>
			)}
		</div>
	);
};

export default Header;
