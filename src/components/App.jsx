import { NavLink, Routes, Route } from "react-router-dom"
import HomePage from '../pages/HomePage/HomePage'
import MoviesPage from '../pages/MoviesPage/MoviesPage'
import MoviesCast from "./MoviesCast/MoviesCast"
import MoviesReviews from "./MoviesReviews/MoviesReviews"
import MovieDetails from "./MovieDetails/MovieDetails"

export default function App (){

  return (
    <>
    <nav> 
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      
    </nav>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/movies" element={<MoviesPage/>}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<MoviesCast/>}></Route>
          <Route path="reviews" element={<MoviesReviews/>}></Route>
        </Route>
      </Routes>
    </>
    

  )
}