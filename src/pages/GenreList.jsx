import GenreCard from '../components/GenreCard';
import data from '../data/genres.json';

export default function GenreList(){
    return(
        <>
         <h2 className='col-span-4 text-2xl font-bold text-center mb-5'>Veja os filmes por gênero</h2>
         <main className='flex flex-wrap gap-10 justify-center'>
        {
            data.map((genre) => (
                    <GenreCard key={genre.id} {...genre}/>
                )
            )
        }
        </main>
        </>
    )
}