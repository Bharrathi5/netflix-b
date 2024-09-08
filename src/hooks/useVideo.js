import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addVideo } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useVideo = (movie_id) => {

  const dispatch = useDispatch();

  const getVideo = async () => {
   
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/videos?language=en-US", API_OPTIONS);
    const json = await data.json();
    const videoData = json.results.filter((category) => category.name === "Official Trailer")
    const videoKeyData = videoData[0]

    dispatch(addVideo(videoKeyData));

   }

  useEffect
  ( () => {
    getVideo()
    },
 []);
    
  return (
    <div></div>
  )
}

export default useVideo;