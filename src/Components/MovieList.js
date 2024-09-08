import React from 'react'
import MovieCards from './MovieCards';

const MovieList = ({title, movie}) => {
  console.log(movie);
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <div>
           {movie?.map((data) => (<MovieCards key={data.id} posterPath={data.poster_path}/>))}
        </div>
      </div>
    </div>
  )
}

export default MovieList;