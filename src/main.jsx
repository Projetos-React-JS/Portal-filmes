import ReactDOM from 'react-dom/client'
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



import App from './App.jsx'
import './index.css'



import GenreListPage from './pages/GenreListPage.jsx'
import Home from './pages/Home.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <App/>,
      children:[
        {index:true, element:<Home/>},
        {
          path: '/Generos',
          element:<GenreListPage/>
        },
        {
          path: '/Filmes/:id',
          element:<MovieDetailPage/>
        },
        {
          path: '/Filmes',
          element:<MovieListPage/>
        },
        {
          path: '/Filmes/:id',
          element:<MoviesByGenrePage/>
        }
      ]
    }
  ]
    

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
