import React from 'react'
import Authentication from './Authentication'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


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
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;