import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTv } from "../utils/movieSlice";
import { useEffect } from "react";

 
const useTopRatedTv = () =>
{ 
  const dispatch = useDispatch();

  const getTopRatedTv = async () => {
    const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedTv(json.results));
    }

  useEffect
  ( () => {
    getTopRatedTv()
    },
 []);
    
}

  export default useTopRatedTv;