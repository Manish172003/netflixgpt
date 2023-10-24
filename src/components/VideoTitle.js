import React, { useState } from "react";

import playbtn from "../utils/images/playbtn.png";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="hidden md:block w-full aspect-video  pt-64 pl-16    bg-gradient-to-tr  from-black absolute overflow-x-hidden">
      <h1 className="font-bold my-2 text-white text-4xl">{title}</h1>
      <p className="text-[#f7fff4] w-2/4 my-4 from-neutral-400 text-lg">
        {overview}
      </p>
      <div className="flex">
        <button className="flex bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-40 items-center">
          <img className="w-4 h-4  mx-2" src={playbtn}></img> Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-3 px-10 text-xl bg-opacity-50 rounded-lg">
          &#9432; More Info
        </button>
        <button className="text-3xl px-2 hover:text-4xl">🔇</button>
      </div>
    </div>
  );
};

export default VideoTitle;
