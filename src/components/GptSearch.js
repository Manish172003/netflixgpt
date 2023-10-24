import React from "react";

const GptSearch = () => {
  return (
    <div className="flex flex-col md:flex-row  absolute top-[30vh] left-[30vw]  md:top-[30vh] md:left-[35vw] bg-black rounded-md ">
      <input
        className="px-2 md:px-3 md:py-2 md:mx-1 h-10 w-50 md:w-96 bg-gray-500 text-slate-200 my-2 bg-opacity-70   "
        type="text"
        placeholder="What do you want to watch Today ?"
      ></input>
      <button className=" my-2 p-3 md:mx-1 md:px-3 md:py-2 bg-red-800  rounded-md">
        Search
      </button>
    </div>
  );
};

export default GptSearch;
