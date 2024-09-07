import React from 'react'
import { LOGO_URL, USER_AVATAR } from '../utils/constants'

const Header = () => {
  return (
    <div className='h-16 z-20 sticky top-0 w-screen bg-gradient-to-b from-black  flex justify-between'>  
      <img className='w-32 p-4 mx-10' alt= "netflixlogo" src= {LOGO_URL}/>
      <img className='p-4 mx-10 object-cover' alt= "userlogo" src= {USER_AVATAR} />
    </div>
  )
}

export default Header