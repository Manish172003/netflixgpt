import React, { useRef, useState } from "react";
import Header from "./Header";
import { updateProfile } from "firebase/auth";
import { checkisValid } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const handleSubmit = () => {
    if (!signIn) {
      const msg = checkisValid(
        email.current.value,
        password.current.value,
        username.current.value
      );
      setError(msg);
      if (msg) {
        return;
      }

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value,
            photoURL: USER_AVATAR
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              }));
           
            })
            .catch((error) => {
              setError(error.message);
            });
          console.log(user);
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorMessage);
          if (errorCode === "auth/email-already-in-use")
            setError("Email is Already Registered");
          console.log(errorCode);
     
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setError(errorCode);
          if (errorCode === "auth/invalid-login-credentials")
            setError("Invalid Credentials. Please try again..");
        });
    }
  };
  return (
    <div className="relative">
      <Header />

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" bg-black w-4/12 h-[88%] absolute left-[34%] top-[12%] text-white p-16 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl my-4">
          {" "}
          {signIn ? "Sign In" : "Sign up"}
        </h1>

        {!signIn && (
          <input
            ref={username}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-[#454545] rounded-sm"
          ></input>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-[#454545] rounded-sm"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-[#454545] rounded-sm"
        ></input>

        <p className=" font-semibold text-center p-3 my-4 text-[#e87c06]">
          {error}
        </p>

        <p className=" my-4 text-[#737373] cursor-pointer">
          {!signIn ? "Already a Customer ? " : "New to Netflix ? "}
          <button
            className="text-white"
            onClick={(e) => {
              e.preventDefault();
              setSignIn(!signIn);
            }}
          >
            {signIn ? "Sign Up" : "Sign In"}
          </button>
        </p>

        <button
          className="p-3 my-4 bg-[#e50914] w-full rounded-sm"
          onClick={handleSubmit}
        >
          {signIn ? "Sign In" : "Sign Up"}
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
