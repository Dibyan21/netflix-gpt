import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&loop=1"} //we have an option of using state variables here but we use redux for state management
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
};

export default VideoBackground;
