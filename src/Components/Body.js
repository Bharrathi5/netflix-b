import React from 'react'
import Authentication from './Authentication'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BACKGROUND_IMG } from '../utils/constants'

const Body = () => {

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
  return (
    <div className='relative overflow-hidden bg-cover bg-no-repeat h-screen' style={{backgroundImage: `url(${BACKGROUND_IMG})`}}>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body