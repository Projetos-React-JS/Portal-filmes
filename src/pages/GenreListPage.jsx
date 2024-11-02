import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

export default function GenreListPage(){
  
  const  [generos, setGeneros] = useState([])
  const [filmes, setFilmes] = useState([])
  const [generoSelecionado, setGeneroSelecionado] = useState(null)

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br")
        .then(response => response.json())
        .then(data => {console.log(data)
          setGeneros(data.genres)
          console.log(data.genres)
        })
        .catch(error => console.error(error))
        .finally(()=>console.log('fetch finalizado'))
    }, []);  


    useEffect(() => {
      
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
      .then(response => response.json())
      .then(data => {
        setFilmes(data.results)
        console.log(data.results)
      })
      .catch(error => console.error(error))
      .finally(() => console.log("finish filmes"));
    }, []);

    const handleSelect =()=>{
      let select = document.querySelector('#generos').value
      
      
      setGeneroSelecionado(select)
      console.log(generoSelecionado)
    }
  
    
  return(
        <>
        <h1>Genre Page</h1>
        <select name="generos" id="generos" className="text-black" onChange={handleSelect}>
          <option  className="text-black" defaultValue>Escolha o genero</option>
        {
          generos.map(genero=><option className="text-black" value={genero.id} key={genero.name}>{genero.name}</option>)           
        } 
        </select>
        <section className="flex">
        {
          filmes.filter(filme => filme.genre_ids.includes(parseInt(generoSelecionado)))
          .map(filme => <MovieCard key = {filme.id} {...filme}/>)
        }
        </section>
        
        </>
    )
}