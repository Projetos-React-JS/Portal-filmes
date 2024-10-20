import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { FaStar, FaCoins } from "react-icons/fa";

export default function MovieDetailPage(){
    
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    const [revenueInBRL, setRevenueInBRL] = useState(null);

    const exchangeRate = 5;

    useEffect(() => {
        if (movie.revenue) {
            const convertedRevenue = movie.revenue * exchangeRate;
            setRevenueInBRL(convertedRevenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        }
    }, [movie.revenue]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(data => {setMovie(data)})
        .catch(err => console.error(err));
    }, []);
    return(
        <>
        {
            movie ?
                <div 
                    key={movie.id} 
                    className='-mt-10 h-screen bg-cover bg-center text-white p-10 relative'
                    style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                }}>
                    <div className="bg-black bg-opacity-50 p-10 w-full h-full absolute top-0 left-0 flex justify-center items-center flex-col gap-3">
                    <h1 className="text-6xl font-bold ">{movie.title}</h1>
                    <p className="font-semibold text-lg">{movie.overview}</p>
                    <div className="flex items-center gap-1 font-semibold text-lg">
                        <FaStar className="text-yellow-600" />  <span> {movie.vote_average}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-lg">
                        <FaCoins className="text-yellow-600" />  <span> {revenueInBRL}</span>
                    </div>
                    </div>
                </div>
            : <p>Filme não encontrado</p>
        }
        </>
    )
}