import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTv } from "../utils/movieSlice";
import { useEffect } from "react";

 
const usePopularTv = () =>
{ 
  const dispatch = useDispatch();

  const getPopularTv = async () => {
    const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularTv(json.results));
    }

  useEffect
  ( () => {
    getPopularTv()
    },
 []);
    
}

  export default usePopularTv;