import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjM3NDUwM2EwYjhkZGJiY2IzNDAwMjZkYmM2NzNhNSIsIm5iZiI6MTc3MTAwNDk4Mi45NzcsInN1YiI6IjY5OGY2NDM2MzExMTZiNWQyYzgzZWRkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KEFzdQeBWK3UfZDyAAAiAkX6MLB7ha3bWfplrpWk5g"

export const getListMovies = async ()=>{
    const responce = await axios.get("/trending/movie/day", {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: 'application/json',
      }
    });
    return responce.data
}

export const getFullMovie = async (movieId)=>{
    const responce = await axios.get(`/movie/${movieId}`, {
        headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: 'application/json',
      }
    })
    return responce.data
}

export const findMovies = async (movieName) =>{

    const responce = await axios.get ("/search/movie",{
        params:{
            query: movieName, 
            include_adult: false,
            language: 'en-US',
            page: 1,
        },
        headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: 'application/json',
      }
    })
    return responce.data
}

export const getMovieCast = async (movieId) => {
  const responce = await axios.get(`/movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    }
  });
  return responce.data.cast; 
};

export const getReviews = async (movieId)=>{
    const responce = await axios.get(`/movie/${movieId}/reviews`,   
        {
            headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: 'application/json',
            }
    });
    return responce.data.results

}