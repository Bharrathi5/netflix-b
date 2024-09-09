import React from 'react'
import useVideo from '../hooks/useVideo';
import { useSelector } from 'react-redux';

const TrendingVideo = ( {movie_id} ) => {
  
  const videoKey = useSelector((store) => store.movies?.video)

  useVideo(movie_id);


  return (
    <div className='w-screen'>
      <iframe width="1536" height="864" className="w-screen aspect-video" src= {"https://www.youtube.com/embed/" + videoKey?.key + "?&autoplay=1&mute=1&amp;controls=0&loop=1&iv_load_policy=3"}  title="YouTube video player" allowFullScreen ></iframe>
    </div>
  )
}

export default TrendingVideo;