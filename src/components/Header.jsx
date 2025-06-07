import React, {useEffect} from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSingOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browser");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
        // ...
      }
    });
    return ()=> unSubscribe();
  }, []);

  return (
    <div className="absolute w-full px-3 md:px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img
        src={NETFLIX_LOGO}
        alt="Logo"
        className="w-14 md:w-40 lg:w-44"
      />
      {user && (
        <div className="flex gap-1">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className=" rounded-full h-8 w-8 md:h-10 md:w-10 mt-2"
          />
          <button
            onClick={handleSingOut}
            className="bg-red-600 text-white font-bold rounded text-xs md:text-base h-8 md:h-10 p-1 md:p-2 mt-2 text"
          >
            Sing Out
          </button>
        </div>
      )}
    </div>
  );
}
export default Header;
