import { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import FullMovieData from "../FullMovieData/FullMovieData"
import MovieSubNavigation from "../MovieSubNavigation/MovieSubNavigation"
import { getFullMovie } from "../../tmdb-api";

export default function MovieDetails (){
    const { movieId } = useParams(); 
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    if (!movieId) return;
    getFullMovie(movieId).then(data => setMovie(data));
  }, [movieId]);

    return (
        <div>
     
      {movie ? <FullMovieData movieData={movie} /> : <p>Loading...</p>}
      <MovieSubNavigation />
      <Outlet />
    </div>
    )
}