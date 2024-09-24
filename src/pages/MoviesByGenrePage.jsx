import { useParams } from "react-router-dom";
import movies from '../data/movies.json';
import MovieCard from "../components/MovieCard";

export default function MoviesByGenrePage(){
    
    const {genero} = useParams();
    const filmesFiltrados = movies.filter((filme) => filme.genero === genero)

    return(
        <>
        <h2 className='col-span-4 text-2xl font-bold text-center mb-5'> Os filmes encontrados de {genero} são: </h2>
        <main className="flex flex-wrap gap-10 justify-center">
        {
            filmesFiltrados.map((filme) => (
                <MovieCard key={filme.id} {...filme}/>
            ))
        }
        </main>
        </>
    )
}