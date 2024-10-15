import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MoviesByGenrePage from './pages/MoviesByGenre.jsx'
import MovieListPage from './pages/MovieList.jsx'
import MovieDetailPage from './pages/MovieDetail.jsx'
import Home from './pages/Home.jsx'
import GenreList from './pages/GenreList.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: '/movies', element: <MovieListPage />},
      {path: '/movies/:id', element: <MovieDetailPage />},
      {path: '/genre', element: <GenreList />},
      {path: '/genre/:id', element: <MoviesByGenrePage />},
      {path: '*', element: <PageNotFound/>}
    ]
    
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

//https://github.com/Projetos-React-JS/Portal-filmes/tree/Site-construido/src
//https://mockapi.io/
//promisse.All