import React , { useEffect } from 'react'
import { LOGO_URL} from '../utils/constants'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useSelector } from 'react-redux';
import { toggleSearch } from '../utils/searchSlice';

const Header = () => {

  const dispatch= useDispatch();
  const navigate= useNavigate();
  const user= useSelector((store) => store.user);
  const search= useSelector((store) => store.search.showSearch);
 
  const handleSearch = () => {
      dispatch(toggleSearch());
  }
  
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
        const {uid, email, displayName, photoURL}= user;
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
    <header className=' h-auto z-20 fixed top-0 w-screen bg-gradient-to-b from-black  flex justify-between'>  
      {user ? <img className='w-24 md:w-40 p-4 md:mx-10' alt= "netflixlogo" src= {LOGO_URL}/> : <img className='w-52 p-4 mx-14 mt-8' alt= "netflixlogo" src= {LOGO_URL}/>}
      {user && <div className='flex items-center mr-4 md:mr-10'>
                 <button type="button" onClick={handleSearch}  className= " text-white  bg-transparent border-2 hover:bg-neutral-600  rounded-lg w-16 md:w-24 h-8 md:h-10">{search? "Home":"Ask GPT"}</button>
                 <img className='w-16 p-4 md:mx-10' alt= "userlogo" src= {user?.photoURL}/>
                 <button type="button" onClick={handleSignout}  className= " text-white  bg-red-700 hover:bg-red-800  rounded-lg  w-16 md:w-24 h-8 md:h-10">Signout</button>
               </div>}
    </header>
  )
}

export default Header