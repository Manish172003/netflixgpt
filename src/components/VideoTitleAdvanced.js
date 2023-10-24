import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../utils/GptSlice";

const VideoTitleAdvanced = () => {
  const [icon, setIcon] = useState(false);
  const dispatch = useDispatch();

  const toggleGptSearch = () =>{
      dispatch(toggleGptSearchView());
  }

  return (
    <div
      className="w-2/6  md:w-1/12 md:hover:w-3/12 z-20 h-full bg-gradient-to-r from black bg-opacity-40 hover:bg-gradient-to-r from-black  absolute pt-[16%] pl-[4%] md:pt-44 md:pl-[3%] overflow-x-hidden"
      onMouseOver={() => {
        setIcon(true);
      }}
      onMouseOut={() => setIcon(false)}
    >
      <ul className="text-white font-bold">
        <li className="py-6 hover:text-lg md:hover:text-2xl">
          {" "}
          {!icon ? "🌎" : "🌎My Space"}
        </li>
        <button onClick={toggleGptSearch}>
          <li className="py-6 hover:text-lg md:hover:text-2xl">
            {!icon ? "🔍" : "🔍Search"}{" "}
          </li>
        </button>
        <li className="py-6 hover:text-lg md:hover:text-2xl">
          {!icon ? "🏠" : "🏠Home"}
        </li>
      </ul>
    </div>
  );
};

export default VideoTitleAdvanced;
