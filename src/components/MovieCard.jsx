import React from "react";
import { IMG_CON_URL } from "../utils/constants";
const MovieCard = (posterPath) => {
  
  return (
    <div className="w-48 pr-4 ">     
      {posterPath &&<img className="rounded" src={IMG_CON_URL + posterPath.posterPath} alt={"imgUrl"} />}
    </div>
  );
};

export default MovieCard;
