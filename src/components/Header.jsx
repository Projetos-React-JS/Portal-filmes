
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            <header className=" bg-purple-800 text-white text-2xl flex justify-around w-full h-28 items-center">
                <div className="font-bold">
                    <h1>Portal Filmes</h1>
                </div>
                <nav className="">
                    <ul className="flex gap-4">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/Filmes'>Filmes</NavLink></li>
                        <li><NavLink to='/Generos'>Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}