import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { getAuth, updateProfile } from "firebase/auth";

import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constant";
const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	// const navigate = useNavigate();
	const dispatch = useDispatch();
	const email = useRef(null);
	const password = useRef(null);
	const name = useRef(null);

	const handleButtonClick = () => {
		// validate the from data
		const message = checkValidateData(
			email.current.value,
			password.current.value
		);
		// console.log(email.current.value);
		// console.log(password.current.value);
		// console.log(message)
		setErrorMessage(message);

		if (message) return;

		if (!isSignInForm) {
			// signUp logic
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value,
				name.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;

					// const auth = getAuth();
					updateProfile(user, {
						displayName: name.current.value,
						photoURL: "https://example.com/jane-q-user/profile.jpg",
					})
						.then(() => {
							const { uid, email, displayName, photoURL } = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
							// navigate("/browse");
						})
						.catch((error) => {
							setErrorMessage(error.message);
						});

					// console.log("Signed In", user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
					// ..
				});
		} else {
			// signIn

			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					// navigate("/browse");
					console.log(user);
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
				});
		}

		// signIn // and signUp
	};

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src={BG_URL}
					alt=""
				/>
			</div>

			<form
				onSubmit={(e) => e.preventDefault()}
				className="w-3/12 text-white absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg"
			>
				<h1 className="font-bold text-3xl py-4">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>

				{!isSignInForm && (
					<input
						ref={name}
						type="text"
						placeholder="Name"
						className="p-4 my-4 w-full rounded-lg bg-zinc-600"
					/>
				)}
				<input
					type="text"
					ref={email}
					placeholder="Email Address"
					className="p-4 my-4 w-full rounded-lg bg-zinc-600"
				/>
				<input
					type="password"
					ref={password}
					placeholder="Password"
					className="p-4 my-4 w-full rounded-lg bg-zinc-600"
				/>
				<p className="text-red-700">{errorMessage}</p>
				<button
					className="p-4  my-6 rounded-lg bg-red-700 w-full"
					onClick={handleButtonClick}
				>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
					{isSignInForm
						? "New to Netflix? Sign Up Now"
						: "Already on Netflix? Sign In Now"}
				</p>
			</form>
		</div>
	);
};

export default Login;
