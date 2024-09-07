import React from 'react'
import { LOGO_URL} from '../utils/constants'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate= useNavigate();
  const user= useSelector(store => store.user)

  const handleSignout= () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className='h-auto z-20 sticky top-0 w-screen bg-gradient-to-b from-black  flex justify-between'>  
      <img className='w-32 p-4 mx-10' alt= "netflixlogo" src= {LOGO_URL}/>
      {user && <div className='grid grid-flow-col items-center mx-10'>
        <img className='w-16 p-4 mx-10' alt= "userlogo" src= {user?.photoURL}/>
        <button type="button" onClick={handleSignout}  className= " text-white  bg-red-700 hover:bg-red-800  rounded-lg w-24 h-10">Signout</button>
     </div>}
    </div>
  )
}

export default Header