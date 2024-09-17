import { Link } from "react-router-dom"

export default function MovieCard({titulo, id, imagem_destaque}) {
    return(
        <>
            <div className="flex flex-col justify-center items-center">
                <h2>{titulo}</h2>
                <img src={`/${imagem_destaque}`} alt={titulo} className="w-30 h-36"/>
                <Link to={`movies/${id}`}>Saiba Mais</Link>
            </div>
        </>
    )

}