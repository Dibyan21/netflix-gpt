import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //fetch trailer video and update the store with trailer video data

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const jsonData = await data.json();
    //console.log(jsonData);
    const filterTrailers = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailers.length
      ? filterTrailers[0]
      : jsonData.results[0];
    //console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
