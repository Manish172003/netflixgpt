import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  // const user = useSelector(userSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });


    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute z-10 px-8 bg-gradient-to-b from-black  w-screen flex justify-between items-center">
      <img
        className="w-48"
        src={LOGO}
      ></img>

      { user && 
      <div>
        <img src={user.photoURL} className="w-[40px] h-[40px] mt-2 ml-2"></img>
        <button onClick={handleSignOut} className="font-bold">Log out</button>
      </div>

     }
    </div>
  );
};

export default Header;
