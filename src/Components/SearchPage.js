import React from 'react'
import GptResult from './GptResult'
import { BACKGROUND_IMG } from '../utils/constants'
import SearchBar from './SearchBar'

const SearchPage = () => {
  return (
    <div className='overflow-hidden bg-cover bg-no-repeat h-screen flex flex-col ' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${BACKGROUND_IMG})`}}>
        <SearchBar/>
        <GptResult/>
    </div>
  )
}

export default SearchPage