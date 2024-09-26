import { useState } from "react";
import movies from "../data/movies.json";
import MovieCard from "../components/MovieCard";

export default function MovieListPage() {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    };

    const filmesFiltrados = movies.filter((filme) =>
        filme.titulo.toLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
        <div className="min-h-scree flex flex-col items-center p-5">
            <h1 className="text-3xl font-bold mb-4">Veja o catálogo completo de filmes</h1>
            <input
                className="w-full  text-black max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                type="text"
                name="search"
                id="search"
                value={search}
                onChange={handleSearch}
                placeholder="Buscar filmes..."
            />
            <section className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {filmesFiltrados.length > 0 ?
                    filmesFiltrados.map((filme) => (
                    <MovieCard key={filme.id} {...filme} />
                )):
                <p>Não existem filmes na busca</p>}
            </section>
        </div>
    );
}
