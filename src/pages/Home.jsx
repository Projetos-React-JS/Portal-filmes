import { useContext, useEffect, useState } from "react";
import ContainerMovies from "../components/ContainerMovies";
import MovieCard from "../components/MovieCard";
import { FavoritesContext } from "../context/FavoritesContext";


export default function Home(){

    const [popularMovies, setPopularMovies] = useState([]);
    const [animationMovies, setAnimationMovies] = useState([]);
    const [scienceFictionMovies, setScienceFictionMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const { favorites, handleFavorite, isFavorite } = useContext(FavoritesContext);

    const API_KEY = '?api_key=7c572a9f5b3ba776080330d23bb76e1e';  
    const BASE_URL = 'https://api.themoviedb.org/3';
    
    const fetchMovies = async () => {
        try{
            //Monta a URL para buscar os filmes populares, animação e ficção científica
            const popularURL = `${BASE_URL}/movie/popular${API_KEY}&language=pt-br&page=1`;
            const animationURL = `${BASE_URL}/discover/movie${API_KEY}&language=pt-br&with_genres=16`;
            const scienceFictionURL = `${BASE_URL}/discover/movie${API_KEY}&language=pt-br&with_genres=878`;
            //Faz a busca dos filmes
            const [popularResponse, animationResponse, scienceFictionResponse] = await Promise.all([
                fetch(popularURL),
                fetch(animationURL),
                fetch(scienceFictionURL)
              ]);

            // Converte os resultados para JSON
            const popularData = await popularResponse.json();
            const upcomingData = await animationResponse.json();
            const trendingData = await scienceFictionResponse.json();

            // Atualiza o estado com os dados recebidos
            setPopularMovies(popularData.results);
            setAnimationMovies(upcomingData.results);
            setScienceFictionMovies(trendingData.results);
        }
        catch(error){
            console.error('Erro ao buscar os filmes:', error);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchMovies();
    }, []);

    return (
        <>
           {loading ? <p>Carregando...</p>:
        <>
        <ContainerMovies titulo="Filmes Populares">
        {
            popularMovies
            .map( movie => (
                <MovieCard
                    key={movie.id} {...movie} 
                    handleFavorite={handleFavorite}
                    isFavorite={isFavorite(movie)}/>
                )
            )
        }
        </ContainerMovies>
        <ContainerMovies titulo="Animações">
        {
            animationMovies
            .map( movie => (
                <MovieCard
                    key={movie.id} {...movie} 
                    handleFavorite={handleFavorite}
                    isFavorite={isFavorite}/>
                )
            )
        }
        </ContainerMovies>
        <ContainerMovies titulo="Ficção Científica">
        {
            scienceFictionMovies
            .map( movie => (
                <MovieCard
                    key={movie.id} {...movie} 
                    handleFavorite={handleFavorite}
                    isFavorite={isFavorite}/>
                )
            )
        }
        </ContainerMovies>
        </>
        }
        </>
    )
}