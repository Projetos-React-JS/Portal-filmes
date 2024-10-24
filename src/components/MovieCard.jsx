import { Link } from "react-router-dom";


// Desestruturação do Card com os nomes do Objeto JSON
export default function MovieCard({ id, title, poster_path }) {
    // Vamos usar bastante o get e set Item
    // Primeiro devemos verificar se ele já está favoritado, caso tenha...
    const handleFavorite = () => {
        let favoritos = JSON.parse(localStorage.getItem('favorites')) || [];
        // Pegar os itens, e verificar
        // Pra função saber qual filme estamos tratando, precisamos chamar ela dentro da função
        // No localStorage tam algum filme com esse id? Usamos o some (algum)

        const isFavorite = favoritos.some(filme => filme.id === id);
        if (isFavorite) {
            // Array pra remover/filtrar todos os filmes com id diferente dos que estão
            // Remover dos favoritos
            favoritos = favoritos.filter(filme => filme.id !== id);
        } else {
            // Adicionar o filme inteiro aos favoritos
            // Adicionando nos favoritos esse ID
            favoritos.push({ id, title, poster_path });
        }

        // TESTE
        // let filmeFavorito = JSON.stringify({
        //     'nome': 'Filme Teste',
        //     'ano': 2024,
        // })
        // // Se fosse sessionStorage, usuarimos session
        // localStorage.setItem("Nome do Filme", filmeFavorito)

        localStorage.setItem('favorites', JSON.stringify(favoritos));
    }

    return (
        <div className="flex flex-col justify-center text-center mt-6">
            {/* <h2>{title}</h2> Exibe o título do filme */}
            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt={title} />
            {/* Pegando o ID do filme ao clicar */}
            <button onClick={handleFavorite}>Adicionar ao favorito</button>
            <Link to={`/movies/${id}`}>Saiba mais</Link> {/* Link para a página de detalhes */}
        </div>
    );
}