import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopular } from "../utils/movieSlice";
import { useEffect } from "react";

 
const usePopular = () =>
{ 
  const dispatch = useDispatch();

  const getPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopular(json.results));
    }

  useEffect
  ( () => {
    getPopular()
    },
 []);
    
}

  export default usePopular;