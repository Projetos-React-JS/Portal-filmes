import { Link } from "react-router-dom";

// Desestruturação do Card com os nomes do Objeto JSON
export default function MovieCard({id, titulo, imagem_destaque}) {
    return(
        <>
            <div className="flex flex-col justify-center items-center">
                <h2>{`${titulo}`}</h2>
                <img src={imagem_destaque} alt={titulo} className="w-28 h-36"/>
                <Link to = {`/movies/${id}`}>Saiba mais</Link>
                {/* // Craseado ^^^
                // Linkamos a rota feita com o id do filme */}
            </div>
        </>
    )

}