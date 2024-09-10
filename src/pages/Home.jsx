import ContainerMovies from "../components/ContainerMovies";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json";

export default function Home(){
    
    return (
        <>
        <ContainerMovies titulo="Filmes Antigos">
        {
            movies
            .filter( movie => movie.ano_lancamento < 2000)
            .map( movie => (
                <MovieCard key={movie.id} {...movie}/>
                )
            )
        }
        </ContainerMovies>
        <ContainerMovies titulo="Melhor Avaliados">
        {
            movies
            .filter( movie => movie.avaliacao < 9)
            .map( movie => (
                <MovieCard key={movie.id} {...movie}/>
                )
            )
        }
        </ContainerMovies>
        </>
    )
}