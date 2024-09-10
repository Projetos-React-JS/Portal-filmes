import { Link } from "react-router-dom";

export default function MovieCard(movie) {

    return(
        <>
        <div key={movie.id} className="flex flex-col justify-center items-center">
            <h2>{movie.titulo}</h2>
              <img src={movie.imagem_destaque} alt={movie.titulo} className="w-28 h-36"/>
              <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
        </div>
        </>
    )

}