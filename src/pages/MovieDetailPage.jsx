
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

export default function MovieDetailPage(){

    const {id} = useParams()
    const [filme, setFilme] = useState([])

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
        .then(response => response.json())
        .then(data =>{
            setFilme(data)
            console.log(data)
        })
        .catch(error => console.error(error))
        .finally(() => console.log('fetch finalizado'))
    },[])
    return(
        <>
        <div className='h-screen bg-no-repeat flex justify-center items-center' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280${filme.backdrop_path})`}}>
            <img src={`https://image.tmdb.org/t/p/w154${filme.poster_path}`}></img>
            <h1 className='text-center'>{filme.title}</h1>

        </div>
        </>
    )
}