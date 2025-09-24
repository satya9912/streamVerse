import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../reduxSlices/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constants";

const useGetNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getFavouriteMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  }
  useEffect( () => {
    getFavouriteMovies();
  }, [])
}

export default useGetNowPlayingMovies;