import { useSelector } from 'react-redux';
import useGetMovieTrainer from '../utils/hooks/useGetMovieTrailer';

const VideoBackground = ({movieId}) => {
  useGetMovieTrainer(movieId);
  const trailer = useSelector((store) => store.movies.movieTrailer);
  const key = trailer?.[0]?.key;
  // const key = trailer?.[0]?.key;
  // console.log(trailer[0].key);
  return (
  <div className="w-screen aspect-video mt-[-7%]">
  <iframe
    className="w-screen aspect-video" // optional scale to crop edges
    src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${key}&modestbranding=1&rel=0`}
    title="YouTube video player"
    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


  )
}

export default VideoBackground;