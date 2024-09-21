import { Link } from "react-router-dom";

export default function MovieCard({ id, titulo, imagem_destaque }) {
    return (
        <div>
            <h2>{titulo}</h2>
            <img src={imagem_destaque} />
            <Link to={`/movies/${id}`}>Saber mais</Link>
        </div>
    )

}