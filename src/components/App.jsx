import { lazy, Suspense } from "react"
import { NavLink, Routes, Route } from "react-router-dom"
import clsx from "clsx"
import css from "./App.module.css"
const HomePage =lazy (()=> import ('../pages/HomePage/HomePage'))
const MoviesPage = lazy (()=> import ('../pages/MoviesPage/MoviesPage'))
const MoviesCast = lazy (()=> import ("./MoviesCast/MoviesCast"))
const MoviesReviews = lazy (()=> import ("./MoviesReviews/MoviesReviews"))
const MovieDetails = lazy (()=> import ("./MovieDetails/MovieDetails"
))

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
    <Suspense fallback={<div>Please wait loading page...</div>}>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/movies" element={<MoviesPage/>}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<MoviesCast/>}></Route>
          <Route path="reviews" element={<MoviesReviews/>}></Route>
        </Route>
      </Routes>
      </Suspense>
    </>
    

  )
}