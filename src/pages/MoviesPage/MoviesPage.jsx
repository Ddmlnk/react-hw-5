import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getFullMovie, findMovies} from '../../tmdb-api'
import FullMovieData from '../../components/FullMovieData/FullMovieData';
import MovieSubNavigation from '../../components/MovieSubNavigation/MovieSubNavigation';
import SearchMovies from '../../components/SearchMovies/SearchMovies';
import MoviesList from '../../components/MoviesList/MoviesList';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

export default function MoviesPage(){

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null) // full movie
    const [foundMovies, setFoundMovies] = useState("") // search data
    const [list, setList] = useState(null);


    useEffect(()=>{
        if (!movieId) return;
        const fetchMovie = async ()=>{
            try{
                const movieData = await getFullMovie(movieId)
                setMovie(movieData)
                setFoundMovies(null)
                console.log(movieData)
            }catch (error){
                console.log("You have error ", error)
            }
        }
        fetchMovie()
    },[movieId])

    const onSubmit = (movieName)=>{
        setFoundMovies(movieName)
    }

    useEffect (()=>{
        const fetchFindMovies = async()=>{
            try{
                const listFoundMovies = await findMovies(foundMovies)
                setList(listFoundMovies)
            } catch (error){
                console.log("You have an error", error)
            }
            

        }
        fetchFindMovies()
    }, [foundMovies])
    return (
        <>
        {movie === null && <SearchMovies onSubmit={onSubmit}></SearchMovies>}
        {list && <MoviesList moviesData={list.results}></MoviesList>}
        {movie && <MovieDetails movieData={movie}></MovieDetails>}
        </>
    )
}