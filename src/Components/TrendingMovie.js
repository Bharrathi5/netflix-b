import React from 'react'
import TrendingMovieTitle from './TrendingMovieTitle';
import { useSelector } from 'react-redux';
import TrendingVideo from './TrendingVideo';

const TrendingMovie = () => {

const trendingMovies = useSelector((store) => store.movies?.trending );

if(!trendingMovies) return;

const trendingMovie = trendingMovies[0];
const { title, id, overview } = trendingMovie;


  return (
    <div>
        <TrendingMovieTitle title={title} overview={overview}/>
        <TrendingVideo movie_id={id} />
    </div>
  )
}

export default TrendingMovie;