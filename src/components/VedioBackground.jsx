import React from "react";
import useMovieTrailar from "../hooks/useMovieTrailar";
import { useSelector } from "react-redux";

const VedioBackground = ({ id }) => {
    useMovieTrailar(id);
     
  const movieTrailar = useSelector((store) => store.movies?.trailarVedio);   
 
  

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + movieTrailar?.key + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VedioBackground;
