import Movie from "../Movie/Movie";
import { NavLink, useLocation } from "react-router-dom";
import css from './MoviesList.module.css'

export default function MoviesList({ moviesData }) {
    const location = useLocation()

  return (
    <ul className={css.movieList}>
      {moviesData.map((item) => (
        <li key={item.id} >
            <NavLink className={css.movieLink} to={`/movies/${item.id}`} state={{from: location}} >
                <Movie item={item}></Movie>
            </NavLink>
        </li>
      ))}
    </ul>
  );
}