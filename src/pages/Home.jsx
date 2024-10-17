import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // IDs dos filmes para os quais queremos buscar detalhes
  const movieIds = [680, 299534, 597, 155, 278, 274, 807, 550, 1225683]; // IDs de exemplo

  // Função para buscar detalhes de cada filme usando o endpoint `/movie/{id}`
  const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=dfe71aa6c18663df6bca1d802ada547f&language=pt-BR`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Erro ao buscar detalhes do filme ${id}:`, error);
      return null;
    }
  };

  // Função para buscar detalhes de todos os filmes
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieDetails = await Promise.all(
          movieIds.map((id) => fetchMovieDetails(id))
        );
        setMovies(movieDetails.filter((movie) => movie !== null)); // Filtra filmes válidos
        setLoading(false);
      } catch (err) {
        console.error("Erro ao buscar filmes:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Verificando se os dados ainda estão sendo carregados ou houve erro
  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar filmes: {error.message}</p>;
  }

  return (
    <>
      {/* Card para filmes antigos */}
      <CardContainer titulo={"Filmes Antigos"}>
        {movies
          .filter((filme) => new Date(filme.release_date).getFullYear() < 2000) // Filtro de filmes antigos
          .map((filme) => (
            <MovieCard
              key={filme.id}
              id={filme.id} // ID do filme para o link
              title={filme.title} // Título do filme
              poster_path={filme.poster_path} // Caminho da imagem
            />
          ))}
      </CardContainer>

      {/* Card para filmes melhor avaliados */}
      <CardContainer titulo={"Melhor Avaliados"}>
        {movies
          .filter((filme) => filme.vote_average >= 7) // Filtro para filmes com avaliação maior ou igual a 9
          .map((filme) => (
            <MovieCard
              key={filme.id}
              id={filme.id} // ID do filme para o link
              title={filme.title} // Título do filme
              poster_path={filme.poster_path} // Caminho da imagem
            />
          ))}
      </CardContainer>
    </>
  );
}