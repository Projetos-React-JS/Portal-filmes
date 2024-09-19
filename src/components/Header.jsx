import { NavLink } from 'react-router-dom';

export default function Header(){
    return(
        <>
            <header className='w-full h-10 flex justify-between items-center p-10 mb-10 bg-gradient-to-r from-slate-800 to-blue-900 text-white'>
                <div>
                    <h1 className='font-bold'>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className='flex gap-5'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genero">Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}