import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlaying } from "../utils/movieSlice";
import { useEffect } from "react";

 
const useNowPlaying = () =>
{ 
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlaying(json.results));
    }

  useEffect
  ( () => {
    getNowPlaying()
    },
 []);
    
}

  export default useNowPlaying;