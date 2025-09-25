import React, { useEffect } from 'react'
import { API_OPTIONS } from '../constants';
import { useDispatch } from 'react-redux';
import { addMovieTrailer } from '../reduxSlices/moviesSlice';
const useGetMovieTrainer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();
    const filteredTrailer = json.results.filter(video => video.type == "Trailer");
    const trailer = filteredTrailer ? filteredTrailer : json.results[0];
    console.log(trailer)
    dispatch(addMovieTrailer(trailer));
  }
  useEffect( () => {
    getMovieTrailer();
  }, []);
}

export default useGetMovieTrainer;