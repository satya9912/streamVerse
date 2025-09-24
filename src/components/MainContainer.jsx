import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import useGetNowPlayingMovies from '../utils/hooks/useGetNowPlayingMovies'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    useGetNowPlayingMovies();
    const movies = useSelector(store => store.movies.nowPlayingMovies);
    if(movies == null) return;
    const movie = movies[1];
    console.log(movie);
  return (
    <div className='pt-32'>
        <VideoTitle movie={movie}/>
        <VideoBackground />
    </div>
  )
}

export default MainContainer