import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import GenrePage from './pages/GenrePage.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <MovieListPage />},
      {path: '/movie/:id', element: <MovieDetailPage />},
      {path: '/genre', element: <MoviesByGenrePage />},
      {path: '/genre/:id', element: <GenrePage />}
    ]
    
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
