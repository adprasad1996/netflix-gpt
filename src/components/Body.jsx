import React, { useEffect } from "react";
import Login from "./Login";
import Browser from "./Browser";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Correct imports
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";

function Body() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName , photoURL: photoURL}));
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        // ...
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} /> {/* Correct component name */}
    </div>
  );
}
export default Body;
