import React , { useEffect } from 'react'
import { LOGO_URL} from '../utils/constants'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useSelector } from 'react-redux';

const Header = () => {

  const dispatch= useDispatch();
  const navigate= useNavigate();
  const user= useSelector(store => store.user)

  const handleSignout= () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL: photoURL}= user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
      return () => unsubscribe();
  },
   [])

  return (
    <div className='h-auto z-20 sticky top-0 w-screen bg-gradient-to-b from-black  flex justify-between'>  
      {user ? <img className='w-36 p-4 mx-10' alt= "netflixlogo" src= {LOGO_URL}/> : <img className='w-52 p-4 mx-14 mt-8' alt= "netflixlogo" src= {LOGO_URL}/>}
      {user && <div className='grid grid-flow-col items-center mx-10'>
        <img className='w-16 p-4 mx-10' alt= "userlogo" src= {user?.photoURL}/>
        <button type="button" onClick={handleSignout}  className= " text-white  bg-red-700 hover:bg-red-800  rounded-lg w-24 h-10">Signout</button>
     </div>}
    </div>
  )
}

export default Header