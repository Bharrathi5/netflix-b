import React, { useRef, useState } from 'react'
import Header from './Header'

const Authentication = () => {
  
  const [isSignIn, setIsSignIn] = useState(true);

  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPassword = useRef(null);
  
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
      <Header/>
         <div className ='w-4/12 mx-auto '>
            <form className ='flex flex-col justify-center items-baseline bg-black/75 h-auto m-10 p-10'>
              <h1 className='text-white font-bold text-3xl text-center m-5 pb-5'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
              {isSignIn && (<input ref={userName} type='text' placeholder='Full Name' className='w-4/5 p-3 m-3 bg-transparent border-2'/>)}
              <input ref={userEmail} type='text' placeholder='Email Address' className='w-4/5 p-3 m-3 bg-transparent border-2'/>
              <input ref={userPassword} type='password' placeholder='Password' className=' w-4/5 p-3 m-3 bg-transparent border-2'/>
              <button type="button"  className= " text-white  bg-red-700 hover:bg-red-800  rounded-lg w-4/5 px-5 py-2.5 m-7">{isSignIn ? "Sign In" : "Sign Up"}</button>
              <p className='text-white'>{isSignIn ? "New to Netflix?" : "Already registered?"}<span className=' ml-2 text-white font-bold hover:underline' onClick={toggleSignIn}>{isSignIn ? "Sign up now." : "Sign In."}</span></p>
            </form>
         </div>
    </div>
     
  )
}

export default Authentication