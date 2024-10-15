import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import 'ldrs/bouncy'
import { CircularPagination } from '../components/CircularPagination';

export default function MovieListPage() {

  const [search, setSearch] = useState('');
  const [filmes, setFilmes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTimeout(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br&page=${currentPage}`)
    .then(response => response.json())
    .then(data => {
      setFilmes(data.results);
      setTotalPages(data.total_pages);
    })
    .catch(error => console.error(error))
    .finally(() => console.log('fetch finalizado'));
    }, 3000);
  }, [currentPage]);

  const filmesFiltrados = filmes.filter(movie => (movie.title.toLowerCase().includes(search.toLowerCase())));


  return (
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
        </form>
        {
          filmesFiltrados.length > 0 ?
          filmesFiltrados.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))
          :
          <div className='col-span-4 mt-5'>
          <l-bouncy
            size="45"
            speed="1.75"
            color="white" 
          ></l-bouncy>
          </div>
        }
        <div className='col-span-4 flex justify-center'>
          <CircularPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}/>
        </div>
      </main>
    </>
  )
}
