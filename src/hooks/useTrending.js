import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrending } from "../utils/movieSlice";
import { useEffect } from "react";

 
const useTrending = () =>
{ 
  const dispatch = useDispatch();

  const getTrending = async () => {
    const data = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', API_OPTIONS);
    const json = await data.json();
    dispatch(addTrending(json.results));
    }

  useEffect
  ( () => {
    getTrending()
    },
 []);
    
}

  export default useTrending;