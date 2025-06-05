import React, { useEffect } from "react";
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Correct imports


function Body() {

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

 

  return (
    <div>
      <RouterProvider router={appRouter} /> {/* Correct component name */}
    </div>
  );
}
export default Body;
