import React from 'react'
import MovieCards from './MovieCards';

const MovieList = ({title, movie}) => {

  return (
    <div className='flex flex-col gap-6 mx-14'>
      <h1 className=' font-bold text-2xl text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
          <div className='flex gap-3'>
            {movie?.map((data) => (<MovieCards key={data.id} posterPath={data.poster_path}/>))}
          </div>
        </div>
    </div>
  )
}

export default MovieList;