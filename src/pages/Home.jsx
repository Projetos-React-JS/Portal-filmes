import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard"




export default function Home() {
    const [filmesPopulares, setFilmesPupulares] = useState([])
    const [filmesAvaliados, setFilmesAvaliados] = useState([])
    const [filmesPorVir, setFilmesPorVir] = useState([])

    //Filmes Populares
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
        .then(response => response.json())
        .then(data => {setFilmesPupulares(data.results)
            console.log(data.results)
        })
        .catch(error=> console.error(error))
        .finally(console.log("fim do fetch"))        
    },[])

    //filmes bem avaliados
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
        .then(response => response.json())
        .then(data => {setFilmesAvaliados(data.results)
            console.log(data.results)
        })
        .catch(error=> console.error(error))
        .finally(console.log("fim do fetch"))        
    },[])

    //filmes por vir
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
        .then(response => response.json())
        .then(data => {setFilmesPorVir(data.results)
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
        <>

            <CardContainer titulo="Filmes Populares">
                {
                    filmesPopulares.map(filme=>(<MovieCard key={filme.id} {...filme}/>))
                }
            </CardContainer>
            <CardContainer titulo="Filmes mais bem Avaliados" >          
                    {
                        filmesAvaliados.map(filme=>(<MovieCard key={filme.id} {...filme}/>))                                                  
                    }                                        
            </CardContainer>
            <CardContainer titulo="Filmes por vir">
                    {
                        filmesPorVir.map(filme =>(<MovieCard key={filme.id} {...filme}/>))
                    }
            </CardContainer>
            <CardContainer titulo="Recomendados para você">
                    {
                        assistido.map(filme => (<MovieCard key={filme.id} {...filme}/>))                        
                    }
                    {
                        assistirDepois.map(filme => <MovieCard key={filme.id} {...filme}/>)
                    }
            </CardContainer>
        </>
    )
}