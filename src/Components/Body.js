import React, { useEffect } from 'react'
import Authentication from './Authentication'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const dispatch= useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Authentication/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ])

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL: photoURL}= user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
      } else {
        dispatch(removeUser());
      }
    });
   },
   [])


  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body