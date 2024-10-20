import { Link } from "react-router-dom";

export default function GenreCard({name}) {
    return(
        <Link className="w-auto" to={`/genre/${name}`}>
            <div className='bg-purple-800 w-64 h-28 shadow-md rounded-md p-4 relative'>
                <h3 className='text-lg text-white font-bold absolute bottom-4 right-4'>{name}</h3>
            </div>
        </Link>
    )
}