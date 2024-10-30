import { useEffect, useState } from "react"
export default function GenreListPage(){
  const  [generos, setGeneros] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br")
        .then(response => response.json())
        .then(data => {console.log(data)
          setGeneros(data.genres)
        })
        .catch(error => console.error(error))
        .finally(()=>console.log('fetch finalizado'))
    }, []);  
  return(
        <>
        <h1>Genre Page</h1>
        <select name="" id="">
        {
          generos.map(genero=><option>{genero.name}</option>)
        } 
        </select>
        
        </>
    )
}