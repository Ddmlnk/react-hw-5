import { useEffect, useState } from "react"
import { UNSAFE_getHydrationData } from "react-router-dom"
import {getListMovies} from '../../tmdb-api.js'
import MoviesList from "../../components/MoviesList/MoviesList.jsx";
export default function HomePage(){
    const [list, setList] = useState(null);
    useEffect(()=>{
        const fetchMovies = async ()=>{
            try{
                const moviesData = await getListMovies()
                setList(moviesData)
                console.log("in Home",moviesData.results)
            } catch (error){
                console.error("Помилка:", error);
            }
        }
        fetchMovies()
    }, [])

    return(
        <>
        <h1>Trending today</h1>
        {list && <MoviesList moviesData={list.results}></MoviesList>}
        </>
    )
}