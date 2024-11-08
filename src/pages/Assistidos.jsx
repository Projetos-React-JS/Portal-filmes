import { useEffect, useState } from 'react';
import MovieCard from "../components/MovieCard"
export default function Assistidos() {
    
    const [assistido, setAssistido] = useState([]);
    const [assistirDepois, setAssistirDepois] = useState([]);

    useEffect(() => {
        const fetchassistido = async () => {
            const assistido = JSON.parse(localStorage.getItem('assistido')) || [];
            const movieDetails = await Promise.all(
                assistido.map(async (movieId) => {
                    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`);
                    return response.json();
                })
            );
            setAssistido(movieDetails);
        };
        fetchassistido();
    }, []);

    useEffect(() => {
        const fetchassistirmaistarde = async () => {
            const assistirDepois = JSON.parse(localStorage.getItem('assistirDepois')) || [];
            const movieDetails = await Promise.all(
                assistirDepois.map(async (movieId) => {
                    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`);
                    return response.json();
                })
            );
            setAssistirDepois(movieDetails);
        };
        fetchassistirmaistarde();
    }, []);
    

    return (
        <div className=" text-white p-10">
            <h1 className="text-4xl font-bold mb-6">Filmes Assistidos</h1>
            <div className="flex gap-6">
                {assistido.length > 0 ? (
                    assistido.map((filme) => (
                        <MovieCard key={filme.key} {...filme}/>
                    ))
                ) : (
                    <p className="text-center text-xl">Nenhum filme foi marcado como assistido.</p>
                )}
            </div>
            <h1 className="text-4xl font-bold mb-6">Filmes Para Assistir Mais tarde</h1>
            <div className="flex gap-6">
                {assistirDepois.length > 0 ? (
                    assistirDepois.map((filme) => (
                        <MovieCard key={filme.key} {...filme}/>
                    ))
                ) : (
                    <p className="text-center text-xl">Nenhum filme foi marcado como assistido mais tarde.</p>
                )}
            </div>
        </div>
    );
}
