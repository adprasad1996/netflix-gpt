import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { checkValidData } from "./utils/validate";
import { auth } from "./utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
            photoURL:
              "https://avatars.githubusercontent.com/u/138683335?s=400&u=d4fac559baf9f0555d2ee331722985ef9e36c427&v=4",
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
              navigate("/browser");
              // ...
            })
            .catch((error) => {
              setErrorMsg(error);
              // An error occurred
              // ...
            });
          console.log(user);

          console.log("hai i am created");
          // ...
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
          console.log(user);
          navigate("/browser");
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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_small.jpg"
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
