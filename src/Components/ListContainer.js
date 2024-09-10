import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const ListContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black flex flex-col gap-12 -mt-44'>
        <MovieList title={"Now Playing"} movie={movies.nowPlaying}/>
        <MovieList title={"Trending"} movie={movies.trending}/>
        <MovieList title={"Popular Movies"} movie={movies.popular} />
        <MovieList title={"Popular TV Shows"} movie={movies.popularTv}/>
        <MovieList title={"Top Rated Movies"} movie={movies.topRated}/>
        <MovieList title={"Top Rated Tv Shows"} movie={movies.topRatedTv}/>
    </div>
  )
}

export default ListContainer;