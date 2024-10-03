import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import GenreListPage from './pages/GenreListPage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import MovieByGenrePage from './pages/MoviesByGenrePage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import "./index.css"
import Contato from './pages/Contato.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <Home/>},
      {path: "/movies", element: <MovieListPage/>},
      {path: "/movies/:id", element: <MovieDetailPage/>},
      {path: "/genero", element: <GenreListPage/>},
      {path: "/genero/:id", element: <MovieByGenrePage/>},
      {path: "/configuracoes", element: <h1>Configurações</h1>},
      {path: "/contato", element: <Contato/>},
      {path: "*", element: <PageNotFound/>},
    ]
  },
  {
    path: ''
  }   
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

{/* Deve ter as rotas:
  home
  filmes
  Detalhes do Filme
  Lista de gêneros
  Filmes por gênero
  Page Not Found
  */}