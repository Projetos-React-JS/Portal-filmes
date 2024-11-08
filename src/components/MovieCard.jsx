import { Link } from "react-router-dom";


export default function MovieCard({ id, title, poster_path }) {
    return (
        <>
            <div className="flex flex-col justify-center  flex-shrink-0 bg-purple-800 w-[200px] pl-6 rounded-lg py-3">
                <h2 className="text-wrap font-semibold">{title}</h2>
                <img  className='w-[130px] h-[200px] mt-3'src={`https://image.tmdb.org/t/p/w154${poster_path}`} />

                <Link className='mt-3 w-[120px] rounded-3xl bg-purple-300 bg-opacity-35' to={`/movies/${id}`}><h3 className="text-center">Saber mais</h3></Link>
    
            </div>
        </>
    )

}