import React, { useState } from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ posterurl }) => {
  const [showcard, setShowCard] = useState(true);
  return (
    <div className="w-48 hover:w-52 pr-1 pt-2 rounded-lg">
      <div>
        <img className="rounded-lg" src={IMG_CDN + posterurl} />
      </div>
    </div>
  );
};

export default MovieCard;
