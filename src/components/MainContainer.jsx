import React from "react";
import { useSelector } from "react-redux";
import VedioTitle from "./VedioTitle";
import VedioBackground from "./VedioBackground";


const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="">
      <VedioTitle original_title={original_title} overview={overview} />
      <VedioBackground id={id} />
    </div>
  );
};
export default MainContainer;
