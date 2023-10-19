import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  return (
    <div className="relative">
      <Header />

      <form className="bg-gradient-to-br  from-black w-4/12 h-[88%] absolute left-[34%] top-[12%] text-white p-16 bg-opacity-90">
        <h1 className="font-bold text-3xl my-4">
          {" "}
          {signIn ? "Sign In" : "Sign up"}
        </h1>

        {!signIn && (
          <input
            type="text"
            placeholder="User Name"
            className="p-3 my-4 w-full bg-[#454545] rounded-sm"
          ></input>
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-[#454545] rounded-sm"
        ></input>

        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-[#454545] rounded-sm"
        ></input>

        <p className=" my-4 text-[#737373] cursor-pointer">
          {signIn ? "Already a Customer ? " : "New to Netflix ? "}
          <button
            className="text-white"
            onClick={(e) => {
              e.preventDefault();
              setSignIn(!signIn);
            }}
          >
            Sign In
          </button>
        </p>

        <button className="p-3 my-4 bg-[#e50914] w-full rounded-sm">
          {signIn ? "Sign In" : "Sign up"}
        </button>
      </form>

      <img
        className="bg-opacity-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      ></img>
    </div>
  );
};

export default Login;
