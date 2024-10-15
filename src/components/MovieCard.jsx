import { Link } from "react-router-dom";

export default function MovieCard({id, title, poster_path, titulo,imagem_destaque}){

    return(
        <>
        <div key={id} className="flex flex-col text-center justify-center items-center">
            <h2 className="font-semibold">{title || titulo}</h2>
              <img src={poster_path ? `https://image.tmdb.org/t/p/w154${poster_path}` : `/${imagem_destaque}`} alt={title || titulo} className="w-28 h-36 mt-3"/>
              <Link className="py-2 px-3 transition ease-in-out duration-300 bg-purple-800 hover:bg-white hover:text-purple-800 m-4 text-white rounded-3xl" to={`/movies/${id}`}>Ver detalhes</Link>
        </div>
        </>
    )

}