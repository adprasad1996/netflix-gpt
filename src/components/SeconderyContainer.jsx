import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies.nowPlayingMovies) {
    return <div className="text-white">Loading movies...</div>;
  }

  const movieCategories = [
    { title: "Now Playing", movies: movies.nowPlayingMovies },
    { title: "Popular", movies: movies.popularMovies },
    { title: "Trending", movies: movies.nowPlayingMovies },
    { title: "Upcoming Movies", movies: movies.upcomingMovies },
  ];

  return (
    <div className="bg-black pb-28 md:pb-28">
      <div className="-mt-10 md:-mt-52 pl-1 md:pl-12 relative z-20">
        {movieCategories.map((category, index) => (
          <MovieList key={index} title={category.title} movies={category.movies} />
        ))}
      </div>
    </div>
  );
};

export default SecondaryContainer;
