import React from "react";
import { IMG_CON_URL } from "../utils/constants";
const MovieCard = (posterPath) => {
  
  return (
    <div className="w-28 md:w-48  md:pr-4 ">     
      {posterPath &&<img className="rounded w-24 md:w-40" src={IMG_CON_URL + posterPath.posterPath} alt={"imgUrl"} />}
    </div>
  );
};

export default MovieCard;
