import React from 'react'

const TrendingMovieTitle = ( {title, overview}) => {
  
  return (
    <div className='flex flex-col absolute gap-5 mx-14 top-48 md:bottom-48 left-0'>
       <h1 className='text-3xl md:text-5xl font-bold text-white'> {title} </h1>
       <p className='text-[17px] w-2/6 font-semibold text-white hidden md:block'> {overview} </p>
       <div className='flex gap-3 mt-3'>
        <button type="button" className= " text-black font-bold text-lg bg-neutral-100 hover:bg-neutral-400 rounded-md w-28 h-10 hidden md:block">Play</button>
        <button ype="button" className= " text-white font-bold text-lg bg-slate-500/50 hover:bg-slate-500 rounded-md w-36 h-10 hidden md:block">More Info</button>
       </div>
    </div>
  )
}

export default TrendingMovieTitle;