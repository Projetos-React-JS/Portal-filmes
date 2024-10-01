import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import movies from '../data/movies.json';

export default function MovieListPage() {

  const [search, setSearch] = useState('');


  const filmesFiltrados = movies.filter(filme => (filme.titulo.toLowerCase().includes(search.toLowerCase())));



  return (
    <>
      <main className='grid grid-cols-4 justify-items-center gap-5'>
        <h2 className='col-span-4 text-2xl font-bold text-center mb-5'>Veja o catálogo completo de filmes</h2>
        <form className='col-span-4 w-2/4 flex flex-col justify-center mb-5'>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Pesquise um filme...'
            className=' text-black p-2 mb-5 border border-gray-300 rounded-md' />
        </form>
        {
          filmesFiltrados.length > 0 ?
          filmesFiltrados.map((filme) => (
            <MovieCard key={filme.id} {...filme} />
          ))
          :
          <p> Filme não encontrado</p>
        }
      </main>
    </>
  )
}