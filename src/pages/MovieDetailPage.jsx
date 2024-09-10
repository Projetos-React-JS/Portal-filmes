import { useParams } from "react-router-dom"
import data from '../data/movies.json'

export default function MovieDetailPage(){
    
    const { id } = useParams()

    const movie = data.find((movie) => movie.id == id)
    return(
        <>
        {
            movie ?
                <div key={movie.id}>
                    <h2>{movie.titulo}</h2>
                    <img src={movie.imagem_destaque} alt={movie.titulo} />
                    <p>{movie.sinopse}</p>
                    <p>{movie.diretor}</p>
                </div>
            : <p>Filme não encontrado</p>
        }
        </>
    )
}