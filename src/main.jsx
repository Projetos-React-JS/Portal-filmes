import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import Home from './pages/Home.jsx'
import GenreList from './pages/GenreList.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: '/movies', element: <MovieListPage />},
      {path: '/movies/:id', element: <MovieDetailPage />},
      {path: '/genre', element: <GenreList />},
      {path: '/genre/:id', element: <MoviesByGenrePage />}
    ]
    
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
