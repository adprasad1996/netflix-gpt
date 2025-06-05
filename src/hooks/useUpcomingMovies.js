import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { UPCOMING_MOVIES_API } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const res = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    const data = await res.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useUpcomingMovies;
