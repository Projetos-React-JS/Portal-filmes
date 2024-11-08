import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"


import Carregando from "../components/Carregando"

export default function MovieListPage() {

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        setisLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
        .then(response => response.json())
        .then(data => setFilmes(data.results))
        .catch(error => console.error(error))
        .finally(() => setisLoading(false));
      }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const filmesFiltrados = filmes.filter(filme => filme.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="ml-12">
            <h2 className="font-bold text-3xl my-3">Veja o catálogo completo de filmes</h2>
            <input
                className="relative  bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                type="text"
                id="search"
                value={search}
                onChange={handleSearch}            
            />
            <section className="flex flex-wrap between gap-4 mt-6">

                {

                    isLoading ? 
                    <Carregando/>
                    :
                    filmesFiltrados.length > 0 ?

                        filmesFiltrados
                            .map(filme => (
                                <MovieCard key={filme.id} {...filme} />
                            ))
                        :
                        <p> Filme não encontrado</p>
                }
            </section>
        </div>     
        
    )
}

