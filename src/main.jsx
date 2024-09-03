import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

{/* Deve ter as rotas:
  home
  lista de filmes(ela será o conteúdo da home)
  gêneros
  filmes por gênero
  detalhes do filme
  */}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
