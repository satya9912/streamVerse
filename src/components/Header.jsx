import React from "react";
import { NETFLIX_LOGO, PROFILE_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="bg-black bg-opacity-80 px-8 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Logo */}
      <img
        className="w-32 md:w-44 cursor-pointer"
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
        onClick={() => navigate("/browse")}
      />
      {user && 
      (<div className="flex items-center space-x-4">
        <img
          src={user?.photoURL}
          alt="Profile"
          className="w-10 h-10 rounded-full bg-white p-1 hover:scale-105 transition-transform duration-200"
        />

        <button
          onClick={handleSignOut}
          className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition-colors duration-200 cursor-pointer"
        >
          Sign Out
        </button>
      </div>)}
    </div>
  );
};

export default Header;
