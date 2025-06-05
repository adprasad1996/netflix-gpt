import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { NOW_PLAYING_MOVIE_API, API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const res = await fetch(NOW_PLAYING_MOVIE_API, API_OPTIONS);
    const data = await res.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useNowPlayingMovies;
