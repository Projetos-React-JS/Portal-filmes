import { Link } from "react-router-dom"

export default function MovieCard({id, title, poster_path, backdrop_path, titulo, imagem_destaque}) {
    return(
        <>
            <div className="flex flex-col justify-center items-center">
                <h2>{title || titulo}</h2>
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : imagem_destaque} alt={title} className="w-30 h-36"/>
                <Link to={`movies/${id}`}>Saiba Mais</Link>
            </div>
        </>
    )

}