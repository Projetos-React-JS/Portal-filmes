import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {

  return (
    <>
     <Header/>
     <Outlet/>
     {/* Exibe o header e a lista de filmes disponível divididos por
     Antigos(antes dos anos 2000)
     Bem-avaliados(nota maior que 9)
     Para você(sorteie 5 filmes aleatórios da lista*/}
    </>
  )
}

export default App
