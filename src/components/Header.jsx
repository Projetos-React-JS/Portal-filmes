import { NavLink } from 'react-router-dom';
import Login from './Login';
import { useState } from 'react';

export default function Header(){
    const [isLogged, setIsLogged] = useState(false);
      
    const handleLogin = () => {
      setIsLogged(true);
    };

    return(
        <>
            <header className='w-full h-10 flex justify-between items-center p-10 mb-10 bg-gradient-to-r from-slate-800 to-blue-900 text-white'>
                <div>
                    <h1 className='font-bold'>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genero">Gêneros</NavLink></li>
                        <li><NavLink to="/contato">Contato</NavLink></li>
                        <li><NavLink to="/favoritos">Favoritos</NavLink></li>
                        {isLogged && <li><NavLink to="/configuracoes">Configurações</NavLink></li>}
                    </ul>
                </nav>
                <Login isLogged={isLogged} handleLogin={handleLogin}/>
            </header>
        </>
    )
}