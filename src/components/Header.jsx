import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
            <header>
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">Gêneros</Link></li>
                        <li><Link to="">Filmes por Gênero</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}