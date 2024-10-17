import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dfe71aa6c18663df6bca1d802ada547f&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie.title) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <h1>{movie.title}</h1>
      <p><strong>Sinopse:</strong> {movie.overview}</p>
      <p><strong>Data de lançamento:</strong> {new Date(movie.release_date).toLocaleDateString("pt-BR")}</p>
      <p><strong>Duração:</strong> {movie.runtime} minutos</p>
      <p><strong>Gêneros:</strong> {movie.genres?.map((genre) => genre.name).join(", ")}</p>
      <p><strong>Nota média:</strong> {movie.vote_average}</p>
      <p><strong>Contagem de votos:</strong> {movie.vote_count}</p>
      <p><strong>Tagline:</strong> {movie.tagline}</p>

      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      )}

      {movie.homepage && (
        <p>
          <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
            Visite o site oficial
          </a>
        </p>
      )}
    </>
  );
}