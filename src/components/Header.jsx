// import { useState } from "react";
import { NavLink } from "react-router-dom";
import BotaoLogin from "./BotaoLogin";
import { useState } from "react";

export default function Header(){

    const [isLogged, setIsLogged] = useState(false);

    const handleLogin = () => {
        setIsLogged(!isLogged);
    }
    
    return(
        <>
            <header className="w-full h-10 flex justify-between items-center p-10 mb-10 bg-purple-900">
                <div>
                    <h1>Portal Filmes</h1>
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
                <BotaoLogin isLogged={isLogged} handleLogin={handleLogin}/>
            </header>
        </>
    )
}