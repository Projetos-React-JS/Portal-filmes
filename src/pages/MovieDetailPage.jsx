import { useParams } from "react-router-dom"
import data from '../data/movies.json'
import { useEffect, useState } from "react"

export default function MovieDetailPage(){
    
    const [movie, setMovie] = useState({})
    const { id } = useParams()
    console.log('Data', data)

    useEffect(() => {
    const findMovie = data.find((movie) => movie.id === id)
    setMovie(findMovie)
    }, [])

    return(
        <>
        {

         
            movie ?
                <div key={movie.id}>
                    <h2>{movie.titulo}</h2>
                    <img src={movie.imagem_destaque} alt={movie.titulo} />
                    <p>{movie.sinopse}</p>
                </div>
            : <p>Filme não encontrado</p>
        }
        </>
    )
}