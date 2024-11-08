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
        <div className="flex flex-col">
          <div className="flex justify-center align-middle m-6">
            <h1 className="text-2xl">Você deseja pesquisar filmes do genero </h1>
            <select name="generos" id="generos" className="text-black w-[300px] ml-4" onChange={handleSelect}>
              <option  className="text-black" defaultValue>Escolha o genero</option>
            {
              generos.map(genero=><option className="text-black" value={genero.id} key={genero.name}>{genero.name}</option>)           
            } 
            </select>
          </div>
          <section className=" ml-10 flex gap-10">
          {
            filmes.filter(filme => filme.genre_ids.includes(parseInt(generoSelecionado)))
            .map(filme => <MovieCard key = {filme.id} {...filme}/>)
          }
          </section>
        </div>
        
      </>
        
    )
}