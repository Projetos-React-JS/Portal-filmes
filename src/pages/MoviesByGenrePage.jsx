import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

export default function MoviesByGenrePage(){
    
    const {genero} = useParams();
    const [filmes, setFilmes] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(data => {setGeneros(data.genres)})
        .catch(err => console.error(err));
        
    }, []);	

    useEffect(() => {
        if (generos.length > 0) {
            const generoBuscado = generos.find((generoItem) => generoItem.name === genero);

            if (generoBuscado) {
                fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR&with_genres=${generoBuscado.id}`)
                    .then(response => response.json())
                    .then(data => setFilmes(data.results))
                    .catch(err => console.error(err));
            }
        }
    }, [generos]);


    return(
        <>
        <h2 className='col-span-4 text-2xl font-bold text-center mb-5'> Os filmes encontrados de {genero} são: </h2>
        <main className="flex flex-wrap gap-10 justify-center">
        {
            filmes.map((filme) => (
                <MovieCard key={filme.id} {...filme}/>
            ))
        }
        </main>
        </>
    )
}