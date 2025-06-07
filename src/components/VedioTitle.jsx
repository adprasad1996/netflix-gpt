import React from "react";

const VedioTitle = ({ original_title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black text-white pt-40 md:pt-60 px-5 md:px-12 absolute">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        {original_title}
      </h1>
      <p className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 py-4 hidden md:block">
        {overview}
      </p>
      <div className="flex py-4">
        <button className="bg-gray-700 text-white rounded py-2 px-4 sm:py-3 sm:px-5 lg:py-4 lg:px-6 text-sm sm:text-base lg:text-lg w-auto sm:w-24 lg:w-28 mr-3 hover:bg-opacity-50">
          Play
        </button>
        <button className="bg-gray-500 text-white rounded py-2 px-4 sm:py-3 sm:px-5 lg:py-4 lg:px-6 text-sm sm:text-base lg:text-lg w-auto sm:w-28 lg:w-32 hover:bg-opacity-50">
          More info
        </button>
      </div>
    </div>
  );
};
export default VedioTitle;
