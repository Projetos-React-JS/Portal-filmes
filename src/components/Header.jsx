export default function Header(){
    return(
        <>
            <header className="flex w-full bg-black justify-between text-white items-center h-16 p-4">
                <div>
                    <h1 className="text-3xl">Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><a href="/">Home</a></li>
                        <li><a href="/movies">Filmes</a></li>
                        <li><a href="/genre">Gêneros</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}