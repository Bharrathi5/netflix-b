import React, { useRef, useState } from 'react'
import Header from './Header'
import { validData } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';


const Authentication = () => {
  
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  }
  const handleAuthentication = () => {
    const message = validData(email.current.value, password.current.value);
    setErrMessage(message);
    if(message) return;
  }

  if (!isSignIn){

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => { 
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErrMessage(errorMessage);
                });

  }else{
    // signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    // .then((userCredential) => {
    //   const user = userCredential.user;
    // })
    // .catch((error) => {
    //   const errorMessage = error.message;
    //   setErrMessage(errorMessage);
    // });
  }


  return (
    <div>
      <Header/>
          <div className ='w-4/12 mx-auto '>
            <form onSubmit = {(e) => e.preventDefault()} className ='flex flex-col justify-center items-baseline text-white bg-black/75 h-auto m-10 p-10'>
              <h1 className='text-white font-bold text-3xl text-center m-5 pb-5'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
              {!isSignIn && (<input ref={userName} type='text' placeholder='Full Name' className='w-4/5 p-3 m-3 bg-transparent border-2'/>)}
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