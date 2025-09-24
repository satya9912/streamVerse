import React, { useState } from 'react'
import Header from './Header'
import { NETFLIX_BG_IMG, USER_AVATAR } from '../utils/constants'
import { useRef } from 'react'
import validate from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/reduxSlices/userSlice'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const error = validate(email, password);
    console.log(email + " " + password);
    setErrorMessage(error);
    // if(error) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
        displayName: nameRef.current.value, photoURL: USER_AVATAR 
          }).then(() => {
            // Profile updated!
            const {displayName, email, photoURL, uid} = auth.currentUser;
            dispatch(addUser({displayName: displayName, email: email, photoURL: photoURL, uid: uid}));
            // ...
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
            // ...
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
        // ..
      });
    } else{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });

    }
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={NETFLIX_BG_IMG} alt='bg-img' className='-z-10'/>
      </div>  
      <div>
        <form className='absolute w-3/12 my-36 bg-black/80 mx-auto right-0 left-0 p-12 rounded-lg flex flex-col gap-6 text-white' onSubmit={handleSubmit}>
            <h3 className='text-2xl font-bold'>{isSignInForm ? "Signin" : "Signup"}</h3>
            {!isSignInForm && 
            <input 
              type='text' 
              placeholder='Name' 
              className='w-full p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600' 
              ref={nameRef}
            />
            }
            <input 
              type='email' 
              placeholder='Email' 
              ref={emailRef}
              className='w-full p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600' 
            />
            <input 
              type='password' 
              placeholder='Password' 
              ref={passwordRef}
              className='w-full p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600' 
            />
            <p className='text-md font-medium text-red-600'>{errorMessage}</p>
            <button 
              type='submit' 
              className='w-full bg-red-600 hover:bg-red-700 p-2 rounded font-semibold cursor-pointer'
            >
              Submit
            </button>

            <p className='cursor-pointer' onClick={toggleSignIn}> {isSignInForm ? "New to netflix..? signup now" : "Already have account..! Signin now"}</p>
          </form>

      </div>
    </div>
  )
}

export default Login