import { useState } from "react"
import MovieCard from "../components/MovieCard"
import movies from "../data/movies.json"

export default function MovieListPage() {

    const [search, setSearch] = useState("")

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const filmesFiltrados = movies.filter( filme => filme.titulo.toLowerCase().includes(search.toLowerCase()))

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
            <section className="flex">
                {
                    
                    filmesFiltrados
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme} />
                        ))
                }
            </section>
        </>
    )
}

