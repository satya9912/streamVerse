import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/reduxSlices/userSlice";

const Body = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },  
    { path: "/browse", element: <Browse /> }
  ]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {displayName, email, photoURL, uid} = user
        dispatch(addUser({displayName: displayName, email: email, photoURL: photoURL, uid: uid}))
      } else {
        console.log("User signed out");
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
