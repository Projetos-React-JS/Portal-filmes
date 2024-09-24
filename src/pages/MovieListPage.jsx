import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import data from '../data/movies.json';

export default function MovieListPage(){

    const [search, setSearch] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(data);

    function handleClick(){

      const filmesFiltrados = data.filter(movie => ( movie.titulo.toLowerCase().includes(search.toLowerCase()) ));
    
      setFilteredMovies(filmesFiltrados);
    }


    return(
        <>
        <main className='grid grid-cols-4 justify-items-center gap-5'>
          <h2 className='col-span-4 text-2xl font-bold text-center mb-5'>Veja o catálogo completo de filmes</h2>
          <form className='col-span-4 w-2/4 flex flex-col justify-center gap-2 mb-5'>
            <input 
              type='text' 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Pesquise um filme...' 
              className=' text-black p-2 mb-5 border border-gray-300 rounded-md' />
            <button 
              type='submit'
              onClick={handleClick}
              className=' bg-purple-800 text-white p-2 rounded-md'>
                Pesquisar
            </button>
          </form>
          {
            filteredMovies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              )
            )
          }
        </main>
        </>
    )
}