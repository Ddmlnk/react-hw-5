import Movie from "../Movie/Movie";
import { NavLink, useLocation } from "react-router-dom";
export default function MoviesList({ moviesData }) {
    const location = useLocation()

  return (
    <ul>
      {moviesData.map((item) => (
        <li key={item.id}>
            <NavLink to={`/movies/${item.id}`} state={{from: location}} >
                <Movie item={item}></Movie>
            </NavLink>
        </li>
      ))}
    </ul>
  );
}