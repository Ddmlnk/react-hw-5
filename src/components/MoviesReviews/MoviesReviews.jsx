import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getReviews } from "../../tmdb-api";

export default function MoviesReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null); 

    useEffect(() => {
        if (!movieId) return;

        const fetchReviews = async () => {
            try {
                const data = await getReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.log("Error fetching reviews:", error);
            }
        };
        fetchReviews();
    }, [movieId]); 

    if (!reviews) return <p>Loading reviews...</p>;
    if (reviews.length === 0) return <p>We don't have any reviews for this movie.</p>;

    return (
        <ul>
            {reviews.map(({ id, author, content }) => (
                <li key={id}>
                    <p><strong>Author: {author}</strong></p>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    );
}