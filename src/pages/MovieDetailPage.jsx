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

  useEffect(() => {
    // Define a imagem de fundo do body
    if (movie.backdrop_path) {
      document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
    }

    // Remove a imagem de fundo quando o componente desmontar
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [movie.backdrop_path]);

  if (!movie.title) {
    return <p className="text-center text-gray-500 mt-10">Carregando...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg text-white relative">
      <div className="bg-blue-900 bg-opacity-80 rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {movie.poster_path && (
            <img
              className="w-full md:w-1/3 rounded-lg shadow-md"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          )}

          <div className="flex-1 space-y-4">
            {movie.overview && (
              <p><strong>Sinopse:</strong> {movie.overview}</p>
            )}
            {movie.release_date && (
              <p><strong>Data de lançamento:</strong> {new Date(movie.release_date).toLocaleDateString("pt-BR")}</p>
            )}
            {movie.runtime && (
              <p><strong>Duração:</strong> {movie.runtime} minutos</p>
            )}
            {movie.genres && movie.genres.length > 0 && (
              <p><strong>Gêneros:</strong> {movie.genres.map((genre) => genre.name).join(", ")}</p>
            )}
            {movie.vote_average && (
              <p><strong>Nota média:</strong> {movie.vote_average}</p>
            )}
            {movie.vote_count && (
              <p><strong>Contagem de votos:</strong> {movie.vote_count}</p>
            )}
            {movie.tagline && (
              <p><strong>Tagline:</strong> {movie.tagline}</p>
            )}
            {movie.homepage && (
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 font-semibold mt-4 inline-block"
              >
                Visite o site oficial
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
