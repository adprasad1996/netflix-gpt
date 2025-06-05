import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AVATAR_URL, NETFLIX_BG_LOGO } from "../utils/constants";

function Login() {
  const dispatch = useDispatch();
  const [isSingInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSingInForm = (e) => {
    e.preventDefault();

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    if (!isSingInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATAR_URL,
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

              // ...
            })
            .catch((error) => {
              setErrorMsg(error);
              
            });

          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
        });
    }
  };

  const toggleSginForm = () => {
    setIsSignInForm(!isSingInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={NETFLIX_BG_LOGO}
          alt="Netflix Logo"
          className="" // Adjusted for better visibility
        />
      </div>
      <form
        onSubmit={handleSingInForm}
        className="w-3/12 my-36 absolute pg-12 mx-auto right-0 left-0 text-white p-4 rounded-lg bg-opacity-80 bg-black"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSingInForm ? "Sign In" : "Sing Up"}
        </h1>
        {!isSingInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Enter Full Name"
            className=" p-4 my-4 bg-gray bg-gray-500 rounded w-full "
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email"
          className=" p-4 my-4 bg-gray bg-gray-500 rounded w-full "
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 bg-gray-500 w-full rounded"
        />
        <p className="text-1xl text-red-500 font-semibold py-2">{errorMsg}</p>
        <button
          type="submit"
          className="p-4 my-6 bg-red-600 text-white font-bold rounded w-full"
        >
          {isSingInForm ? "Sing In" : "Sing Up"}
        </button>
        <p className="py-2 cursor-pointer hover:bg-gray-800 rounded ">
          {isSingInForm ? (
            <>
              New Netflix?{" "}
              <span
                className="text-blue-500 hover:text-blue-700 font-bold cursor-pointer"
                onClick={toggleSginForm}
              >
                Sign up Now
              </span>
            </>
          ) : (
            <>
              Already Registered?{" "}
              <span
                className="text-blue-500 hover:text-blue-700 font-bold cursor-pointer"
                onClick={toggleSginForm}
              >
                Click
              </span>{" "}
              to Sign In
            </>
          )}
        </p>
      </form>
    </div>
  );
}
export default Login;
