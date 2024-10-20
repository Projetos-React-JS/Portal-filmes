import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export default function MovieCard({id, title, poster_path, handleFavorite, isFavorite}){

    return(
        <>
        <div key={id} className="flex flex-col text-center justify-center items-center flex-shrink-0 relative">
            {/* <h2 className="font-semibold">{title || titulo}</h2> */}
              <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title} className="w-[130px] h-[200px] mt-3"/>
              <button 
                    className="absolute top-2 right-0 p-2 bg-white rounded-full transition ease-in-out duration-300 transform hover:scale-125"
                    onClick={() => handleFavorite({id, title, poster_path})}
                >
                {isFavorite ? 
                      <MdFavorite className="text-red-500 transition-transform duration-300 ease-in-out transform scale-125" /> : 
                      <MdFavoriteBorder className="text-black transition-transform duration-300 ease-in-out transform scale-100" />}
                </button>
              <Link className="py-2 px-3 transition ease-in-out duration-300 bg-purple-800 hover:bg-white hover:text-purple-800 m-4 text-white rounded-3xl" to={`/movies/${id}`}>Ver detalhes</Link>
        </div>
        </>
    )

}