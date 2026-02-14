import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../../tmdb-api'; 

export default function MoviesCast() {
  const { movieId } = useParams(); 
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getMovieCast(movieId); 
        setCast(data);
      } catch (error) {
        console.log("Error in MoviesCast component:", error);
      }
    };
    fetchCast();
  }, [movieId]); 
  if (!cast) return <p>Loading cast information...</p>;
  if (cast.length === 0) return <p>We don't have any info about the cast.</p>;

  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', listStyle: 'none' }}>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id} style={{ width: '150px' }}>
          <img 
            src={profile_path 
              ? `https://image.tmdb.org/t/p/w200${profile_path}` 
              : 'https://via.placeholder.com/150x225?text=No+Photo'} 
            alt={name} 
            width="150" 
          />
          <p><strong>{name}</strong></p>
          <p style={{ fontSize: '14px' }}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}