import CardContainer from "../components/CardContainer";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard"
export default function Home(){
    
    
    return(
        <>
            <CardContainer titulo="Filmes Antigos">
                {
                    movies
                    .filter(movie => (movie.genero =="Ficção Científica" ))
                    .map(movie=> 
                    <MovieCard key={movie.id} {...movie}/>
                )}
                           
            </CardContainer>
        </>
    )
}