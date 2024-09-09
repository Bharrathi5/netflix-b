import React, { useRef, useState } from 'react'
import Header from './Header'
import { BACKGROUND_IMG, USER_AVATAR } from '../utils/constants'
import { validData } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Authentication = () => {
  
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  }
  const handleAuthentication = () => {
    const message = validData(email.current.value, password.current.value);
    setErrMessage(message);
    if(message) return;

    if (!isSignIn){

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => { 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value, photoURL: USER_AVATAR
              }).then(() => {
                  const {uid, email, displayName, photoURL}= auth.currentUser;
                  dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));              
              }).catch((error) => {
                setErrMessage(error.message)
              });
            })
            .catch((error) => {
              const errorMessage = error.message;
              setErrMessage(errorMessage);
                  });
  
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrMessage(errorMessage);
      });
    }
  }

  return (
    <div className='overflow-hidden bg-cover bg-no-repeat h-screen' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${BACKGROUND_IMG})`}}>
      <Header/>
      <div className ='mt-44 h-auto w-2/6 mx-auto '>
        <form onSubmit ={(event) => event.preventDefault()} className ='flex flex-col justify-center items-center text-white bg-black/75 h-auto  p-10'>
          <h1 className='text-white font-bold text-3xl text-center m-5 pb-5'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && (<input ref={name} type='text' placeholder='Full Name' className='w-4/5 p-3 m-3 bg-transparent border-2'/>)}
          <input ref={email} type='text' placeholder='Email Address' className='w-4/5 p-3 m-3 bg-transparent border-2'/>
          <input ref={password} type='password' placeholder='Password' className=' w-4/5 p-3 m-3 bg-transparent border-2'/>
          <p className='text-gray-500 font-medium text-sm'>{errMessage}</p>
          <button type="button" onClick={handleAuthentication}  className= " text-white  bg-red-700 hover:bg-red-800  rounded-lg w-4/5 px-5 py-2.5 m-7">{isSignIn ? "Sign In" : "Sign Up"}</button>
          <p className='text-white'>{isSignIn ? "New to Netflix?" : "Already registered?"}<span className=' ml-2 text-white font-bold hover:underline' onClick={toggleSignIn}>{isSignIn ? "Sign up now." : "Sign In."}</span></p>
        </form>
      </div>
    </div>
  )
}

export default Authentication;