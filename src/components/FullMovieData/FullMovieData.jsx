import { Link, useLocation } from "react-router-dom"
import { useMemo } from "react";
import css from './FullMovieData.module.css'
import { IoArrowBackOutline } from "react-icons/io5";


export default function FullMovieData({movieData}){
    const location = useLocation()
    
    const backLinkHref = useMemo(() => location.state?.from ?? "/movies", [location]);
    const userScore = movieData.vote_average ? 
        Math.round(movieData.vote_average * 10) : 0;    
        return (
        <div>
            <div>
                <Link to={backLinkHref} className={css.backBtn}> <IoArrowBackOutline /> Go back </Link>
            </div>
                <div className={css.movieWrapper}>
                    <img src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`} 
                        alt={movieData.title} />
                    <div>
                         <h1>{movieData.original_title}</h1>
                        <p>User score: {userScore} %</p>
                        <h2>Overview</h2>
                        <p>{movieData.overview}</p>
                        <h2>Genres</h2>
                        <p>{movieData.genres.map(g => g.name).join(', ')}</p>
                    </div>
                </div>
        </div>
    )
}