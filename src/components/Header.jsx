
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            <header className="flex justify-around w-full h-28">
                <div className="">
                    <h1>Portal Filmes</h1>
                </div>
                <nav className="">
                    <ul className="flex gap-10">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/Filmes'>Filmes</NavLink></li>
                        <li><NavLink to='/Generos'>Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}