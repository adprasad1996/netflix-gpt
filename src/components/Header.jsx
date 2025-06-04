import React from "react";
import { FaUser } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.       
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
        className="w-36"
      />
      {user && (
        <div className="flex gap-1">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className=" rounded-full h-10 w-10 mt-2"
          />
          <button
            onClick={handleSingOut}
            className="bg-red-600 text-white font-bold rounded h-10 p-2 mt-2"
          >
            Sing Out
          </button>
        </div>
      )}
    </div>
  );
}
export default Header;
