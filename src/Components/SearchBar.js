import React, { useRef } from 'react'

const SearchBar = () => {
    
const searchText = useRef(null);

  return (
    <div className='flex justify-center'>
        <form className='m-36 text-white'>
          <input ref={searchText} type='text' placeholder='Ask GPT for Movie Recommendations' className='p-3 m-3 w-96 bg-transparent border-2 rounded-lg'/>
          <button type="button"  className= "text-black font-semibold bg-slate-400 hover:bg-neutral-600  rounded-lg w-24 h-12">Search</button>
        </form>  
    </div>
  )
}

export default SearchBar;