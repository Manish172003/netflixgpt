import React from "react";
import GptSearch from "./GptSearch";
import { NETFLIX_BANNER } from "../utils/constant";

const ChatGptSearchPage = () => {
  return (
    <div className="absolute bg-black w-full h-full overflow-x-hidden overflow-y-hidden">
      <img
        className=" hidden md:block bg-opacity-50 object-cover"
        src={NETFLIX_BANNER}
      ></img>
      <GptSearch />
    </div>
  );
};

export default ChatGptSearchPage;
