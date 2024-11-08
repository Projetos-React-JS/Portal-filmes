import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdGrade, MdAttachMoney, MdWatchLater, MdOutlineRemoveCircle  } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

export default function MovieDetailPage() {
    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [trailer, setTrailer] = useState(null);
    const [cast, setCast] = useState([]);

    //dados do filme
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(response => response.json())
            .then(data => {
                setFilme(data);
                console.log(data);
            })
            .catch(error => console.error(error))
            .finally(() => console.log('fetch finalizado'));
    }, []);

    //url trailer
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
            .then(response => response.json())
            .then(data => {
                if (data.results.length > 0) {
                    const trailerURL = data.results[0].key;
                    setTrailer(`https://www.youtube.com/watch?v=${trailerURL}`);
                }
            })
            .catch(error => console.error(error))
            .finally(() => console.log('fetch finalizado'));
    }, [id]);

    //dados elenco 
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(response => response.json())
            .then(data => {
                setCast(data.cast);
            })
            .catch(error => console.error(error))
            .finally(() => console.log('fetch finalizado'));
    }, []);

    const retornoFinaceiro = (filme) => {
        const real = 5.76;
        const retorno = filme.revenue * real;
        return retorno.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    // Funções para adicionar e remover do Local Storage
    const adicionarAssistirDepois = () => {
        const assistirDepois = JSON.parse(localStorage.getItem('assistirDepois')) || [];
        if (!assistirDepois.includes(id)) {
            assistirDepois.push(id);
            localStorage.setItem('assistirDepois', JSON.stringify(assistirDepois));
            alert('Filme adicionado para assistir mais tarde!');
        } else {
            alert('O filme já está na lista de assistir mais tarde!');
        }
    };

    const adicionarAssistido = () => {
        const assistido = JSON.parse(localStorage.getItem('assistido')) || [];
        if (!assistido.includes(id)) {
            assistido.push(id);
            localStorage.setItem('assistido', JSON.stringify(assistido));
            alert('Filme marcado como já assistido!');
        } else {
            alert('O filme já está na lista de assistidos!');
        }
    };

    const removeFromassistirDepois = () => {
        const assistirDepois = JSON.parse(localStorage.getItem('assistirDepois')) || [];
        const updatedList = assistirDepois.filter(movieId => movieId !== id);
        localStorage.setItem('assistirDepois', JSON.stringify(updatedList));
        alert('Filme removido de assistir mais tarde!');
    };

    const removeFromAssistido = () => {
        const assistido = JSON.parse(localStorage.getItem('assistido')) || [];
        const updatedList = assistido.filter(movieId => movieId !== id);
        localStorage.setItem('assistido', JSON.stringify(updatedList));
        alert('Filme removido de assistidos!');
    };

    return (
        <>
            <div className='h-[800px] bg-cover bg-center text-white relative' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${filme.backdrop_path})` }}>
                <div className='bg-black bg-opacity-70 p-10 w-full h-full absolute top-0 left-0 flex gap-x-10'>
                    
                    <img src={`https://image.tmdb.org/t/p/w780${filme.poster_path}`} alt={`${filme.title} Poster`} />

                    <div className='flex flex-col justify-center align-middle ml-[300px] '>
                        <h1 className='text-4xl font-bold'>{filme.title}</h1>
                        <p className='text-xl text-justify'>{filme.overview}</p>
                        <div className='flex justify-center'>
                            <MdGrade className='text-yellow-600 size-10'/>
                            <h2 className='text-center'>{filme.vote_average}</h2>
                            <MdAttachMoney className='text-yellow-600 size-10'/>
                            <h2>{retornoFinaceiro(filme)}</h2>
                            <CiCalendarDate className='text-yellow-600 size-10'/>
                            <h2>{filme.release_date}</h2>
                        </div>
                        <div>
                            <ul>
                                {cast.slice(0, 5).map((actor, index) => (
                                    <li key={index}>-{actor.name}</li>
                                ))}
                            </ul>
                        </div>
                        {trailer ? (
                            <iframe
                                width="560"
                                height="315"
                                src={trailer.replace('watch?v=', 'embed/')}
                                title={`${filme.title} Trailer`}
                                allow="accelerometer; encrypted-media; gyroscope;"
                                allowFullScreen
                            />
                        ) : (
                            <h1>Trailer Indisponível</h1>
                        )}
                        {/* Botões para adicionar/remover do Local Storage */}
                        <div className='mt-4 flex gap-4'>
                            <div className='flex flex-col gap-3'>
                                <button onClick={adicionarAssistirDepois} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex ">                                
                                    <MdWatchLater className='size-12'/>
                                    <p className='pt-3'>Assistir depois</p>
                                </button>
                                <button onClick={removeFromassistirDepois} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex">

                                    <MdOutlineRemoveCircle className='size-12'/>
                                    <p className='pt-3'>Remover de Assistir Mais Tarde</p>
                                </button>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <button onClick={adicionarAssistido} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex">
                                    <FaCheck className='size-12'/>
                                    <p className='pt-3'>Marcar como Já Assistido</p>
                                </button>
                                <button onClick={removeFromAssistido} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded flex">
                                    <MdOutlineRemoveCircle className='size-12'/>
                                    <p className='pt-3'>Remover de Já Assistido</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
