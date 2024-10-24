import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

export default function MovieListPage() {

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(response => response.json())
            .then(data => setFilmes(data.results))
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false));
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const filmesFiltrados = filmes.filter(filme => filme.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <h2>Veja o catálogo completo de filmes</h2>
            <input
                className="text-black"
                type="text"
                id="search"
                value={search}
                onChange={handleSearch}
            />
            <section className="flex flex-wrap justify-between gap-4">
                {
                    isLoading ? <p>Carregando...</p> :

                        filmesFiltrados.length > 0 ?

                            filmesFiltrados
                                .map(filme => (
                                    <MovieCard key={filme.id} {...filme} />
                                ))
                            :
                            <p> Filme não encontrado</p>
                }
            </section>
        </>
    )
}

