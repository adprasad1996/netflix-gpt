import React, {useState} from 'react';
import Header from './Header';

function Login() {
  const [isSingInForm, setIsSignInForm] = useState(true);

  const toggleSginForm = () => {
    setIsSignInForm(!isSingInForm);
  }

  return (
    <div >
      <Header />
      <div className = "absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_small.jpg"
          alt="Netflix Logo"
          className="" // Adjusted for better visibility
        />
      </div>
      <form className = "w-3/12 my-36 absolute pg-12 mx-auto right-0 left-0 text-white p-4 rounded-lg bg-opacity-40 bg-black bg-opacity-50">
        <h1 className="font-bold text-3xl py-4">{isSingInForm ? "Sign In": "Sing Up"}</h1>
        {!isSingInForm && (
          <input type="text" placeholder="Enter Full Name" className=" p-4 my-4 bg-gray bg-gray-500 rounded w-full " />

        )}
        <input type="email" placeholder="Email" className=" p-4 my-4 bg-gray bg-gray-500 rounded w-full " />
        <input type="password" placeholder="Password" className="p-4 my-4 bg-gray-500 w-full rounded" />
        <button type="submit" className="p-4 my-6 bg-red-600 text-white font-bold rounded w-full">
          {isSingInForm? "Sing In": "Sing Up"}     
       </button>
       <p className= "py-4 cursor-pointer" onClick = {toggleSginForm}>{isSingInForm? "New netflix ?sing up Now":"Aleary Rigistred? Click here to Sing In"}</p>
      </form>
      
    </div>
  );
}
export default Login;