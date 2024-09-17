import { Link } from "react-router-dom";

export default function MovieCard({id, titulo, imagem_destaque}){

    return(
        <>
        <div key={id} className="flex flex-col justify-center items-center">
            <h2>{titulo}</h2>
              <img src={`/${imagem_destaque}`} alt={titulo} className="w-28 h-36"/>
              <Link to={`/movies/${id}`}>Ver detalhes</Link>
        </div>
        </>
    )

}