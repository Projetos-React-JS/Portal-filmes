import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaStar, FaCoins } from 'react-icons/fa';

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [revenueInBRL, setRevenueInBRL] = useState(null);
  const [trailer, setTrailer] = useState(null);

  const exchangeRate = 5;

  useEffect(() => {
    if (movie.revenue) {
      const convertedRevenue = movie.revenue * exchangeRate;
      setRevenueInBRL(
        convertedRevenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      );
    }
  }, [movie.revenue]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          const trailerURL = data.results[0].key;
          setTrailer(`https://www.youtube.com/watch?v=${trailerURL}`);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      {movie ? (
        <div
          key={movie.id}
          className="-mt-10 h-[800px] bg-cover bg-center text-white relative"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
        >
          <div className="bg-black bg-opacity-70 p-10 w-full h-full absolute top-0 left-0 flex gap-x-10 ">
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt={movie.title}
              className=""
            />
            <div className="flex flex-col gap-y-3 justify-start items-center">
              <h1 className="text-5xl font-bold text-center">{movie.title}</h1>
              <p className="font-semibold text-lg text-center">
                {movie.overview ? movie.overview : 'Descrição não disponível'}
              </p>
              <div className="flex gap-10">
                <div className="flex items-center gap-1 font-semibold text-md">
                  <FaStar className="text-yellow-600" /> <span> {movie.vote_average}</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-lg">
                  <FaCoins className="text-yellow-600" />{' '}
                  <span> {revenueInBRL ? revenueInBRL : 'Valor não divulgado'}</span>
                </div>
              </div>
              <div>
                {trailer ? (
                  <iframe
                    width="560"
                    height="315"
                    src={trailer.replace('watch?v=', 'embed/')}
                    title={`${movie.title} Trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <p>Trailer não disponível</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Filme não encontrado</p>
      )}
    </>
  );
}
