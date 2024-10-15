import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function MovieDetailPage(){
    
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(data => {setMovie(data)})
        .catch(err => console.error(err));
    }, []);
    return(
        <>
        {
            movie ?
                <div key={movie.id}>
                    <h2>{movie.titulo || movie.title}</h2>
                    <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w154${movie.poster_path}` : `/${movie.imagem_destaque}`} alt={movie.title || movie.titulo} />
                    <p>{movie.overview}</p>
                    <p>{movie.vote_average}</p>
                </div>
            : <p>Filme não encontrado</p>
        }
        </>
    )
}