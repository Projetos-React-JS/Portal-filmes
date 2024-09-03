import MovieCard from '../components/MovieCard';
import data from '../data/movies.json';

export default function MovieListPage(){
    return(
        <>
        {
        data.map((movie) => (
           <MovieCard key={movie.id} {...movie} />
          )
        )
      }
        {/* Exibe a lista de todos os filmes disponíveis categorizados por gênero.
        Cada filme na lista é mostrado com uma imagem, 
        título e um link para a página de detalhes do filme.*/}
        </>
    )
}