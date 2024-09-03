import { Link } from "react-router-dom";

export default function MovieCard(movie) {

    return(
        <>
        <div key={movie.id}>
            <h2>{movie.titulo}</h2>
              <img src={movie.imagem_destaque} alt={movie.titulo} />
              <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
        </div>
        </>
    )

}