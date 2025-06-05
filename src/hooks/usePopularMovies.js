import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { POPULAR_MOVIE_API } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const res = await fetch(POPULAR_MOVIE_API, API_OPTIONS);
    const data = await res.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default usePopularMovies;
