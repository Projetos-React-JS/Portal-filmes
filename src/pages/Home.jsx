import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard"

import movies from "../data/movies.json";

export default function Home() {
    const [filmes, setFilmes] = useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
        .then(response => response.json())
        .then(data => {setFilmes(data.results)
            console.log(data.results)
        })
        .catch(error=> console.error(error))
        .finally(console.log("fim do fetch"))        
    },[])

    const filmePorAno =(filme)=>{
        let dataLancamento = filme.release_date
        dataLancamento.split("-")
        const anoLancamento = dataLancamento[0]
        if(anoLancamento<2000){
            return filme
        }else{
            return null
        }
    }
    return (
        <>
            <CardContainer titulo="Filmes antigos">
                {
                    filmes
                        .filter(filme => filmePorAno(filme))
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme} />
                        ))
                }
            </CardContainer>


        </>
    )
}