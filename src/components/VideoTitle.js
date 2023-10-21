import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-tr from-black pt-64 px-24 absolute">
      <h1 className="text-3xl font-bold my-2 text-white">{title}</h1>
      <p className="text-[#f7fff4] w-2/4 my-4">{overview}</p>
      <div className="flex">
        <button className="w-[120px] h-[50px] bg-white hover:bg-opacity-30 my-4 mr-2 rounded-lg text-black">
          {" "}
          ▶ Play
        </button>
        <button className="w-[120px] h-[50px] bg-white hover:bg-opacity-30 my-4  rounded-lg text-black ">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
