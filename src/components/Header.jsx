import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

export default function Header(){

    const [isLogged, setIsLogged] = useState(false);

    const handleLogin = () => {
        setIsLogged(!isLogged);
    }
    
    return(
        <>
            <header className="flex w-full bg-black justify-between text-white items-center h-16 p-4">
                <div>
                    <h1 className="text-3xl">Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genre">Gêneros</NavLink></li>
                        <li><NavLink to="/contato">Contato</NavLink></li>
                        {isLogged && <li><NavLink to="/settings">Configurações</NavLink></li>}
                    </ul>
                </nav>
                <Login isLogged={isLogged} handleLogin={handleLogin} />
            </header>
        </>
    )
}
