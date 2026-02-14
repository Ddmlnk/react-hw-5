import { NavLink, Routes, Route } from "react-router-dom"
import HomePage from '../pages/HomePage/HomePage'
import MoviesPage from '../pages/MoviesPage/MoviesPage'
import MoviesCast from "./MoviesCast/MoviesCast"
import MoviesReviews from "./MoviesReviews/MoviesReviews"
import MovieDetails from "./MovieDetails/MovieDetails"
import clsx from "clsx"
import css from "./App.module.css"

export default function App (){

  const linkStyles = ({isActive})=>{
    return clsx(css.link, isActive && css.active)
  }

  return (
    <>
    <nav> 
      <NavLink to="/" className={linkStyles }>Home </NavLink>
      <NavLink to="/movies" className={linkStyles}>Movies</NavLink>
      
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