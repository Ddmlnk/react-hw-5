import { NavLink } from "react-router-dom"
export default function MovieSubNavigation(){
    return (
        <>
        <p>Additional information</p>
        <ul>
            <li> <NavLink to="cast">Cast</NavLink></li>
            <li> <NavLink to="reviews">Reviews</NavLink></li>
        </ul>
        </>
    )
}