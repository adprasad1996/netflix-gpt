import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

function Browser() {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div >
      <Header />

      {/* 
      MainContainer
       - VedioBackground
       - VedioTitle
       SeconderyContainer
        - MoviesList * n 
        - CardList * n
      
       */}
      <MainContainer />
      <SeconderyContainer />
    </div>
  );
}
export default Browser;
