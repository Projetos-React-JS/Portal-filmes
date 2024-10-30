import { useContext } from 'react';
import MovieCard from '../components/MovieCard';
import { FavoritesContext } from '../context/FavoritesContext';

export default function Favorites() {
  const { favorites, handleFavorite, isFavorite } = useContext(FavoritesContext);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Seus Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Você ainda não possui favoritos 😞</p>
      ) : (
        <div className="flex space-x-4 gap-10 overflow-x-auto">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              handleFavorite={handleFavorite}
              isFavorite={isFavorite(movie)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
