import React from 'react'
import useVideo from '../hooks/useVideo';
import { useSelector } from 'react-redux';

const TrendingVideo = ( {movie_id} ) => {
  
  const videoKey = useSelector((store) => store.movies?.video)

  useVideo(movie_id);


  return (
    <div className="w-full h-full hidden xl:block -mt-28 ">
      <iframe className="w-full object-cover aspect-video"
        src={`https://www.youtube.com/embed/${videoKey?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&loop=1`}
        title="YouTube video player"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default TrendingVideo;


