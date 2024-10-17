import { Link } from "react-router-dom";

// Desestruturação do Card com os nomes do Objeto JSON
export default function MovieCard({id, title, poster_path}) {
    return(
        <>
            <div className="flex flex-col justify-center items-center">
                <h2>{title}</h2> {/* Exibe o título do filme */}
                <img 
                  src={`https://image.tmdb.org/t/p/w154${poster_path}`} 
                  alt={title} 
                  className="w-28 h-36" 
                />
                <Link to={`/movies/${id}`}>Saiba mais</Link> {/* Link para a página de detalhes */}
            </div>
        </>
    )
}