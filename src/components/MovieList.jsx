import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white font-bold">{title}</h1>
      <div
        className="flex overflow-x-scroll scroll-smooth"
        style={{
          scrollbarWidth: "none" /* For Firefox */,
          msOverflowStyle: "none" /* For Internet Explorer */,
        }}
      >
        {movies && (
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie?.poster_path} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
