import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
// import movies from "../data/movies.json";
// import MovieCard from "../components/MovieCard";

// Abandonaremos o JSON, consumindo dados da API do The Movie Database (TMDb)

export default function MovieListPage() {
    const [search, setSearch] = useState("");
    // LIB DE LOADERS
    // https://www.uiball.com/ldrs/
    // Estado para armazenar os filmes de forma dinâmica
    // Ele começa vazio, mas será preenchido com os dados da API
    const [filmes, setFilmes] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=dfe71aa6c18663df6bca1d802ada547f&language=pt-BR")
        .then(res => res.json())
        .then(data => setFilmes(data.results))
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false))
    }, 5000)
    }, []);

    // Peguei a resposta e transformei em JSON
    // Poderia ser qualquer texto, só coloquei res e data para ficar mais claro
    // Data = JSON
    // Acessando SOMENTE os resultados dos filmes
    //.then(data => console.log(data.results))
    // Setando os filmes no estado
    // Try/Catch é uma forma de tratar erros, comum em várias linguagens
    // Importante!!! Controlar o estado de carregamento, para não ficar fazendo requisições infinitas

    // useEffect é um hook que executa uma função toda vez que o componente é renderizado
    // É muito útil para fazer requisições, pois ele executa a função após a renderização

    // Array de dependências vazio, executa uma única vez
    // Se não tiver o array de dependências, ele executa toda vez que o componente é renderizado

    // FETCH/PUXAR DADOS (Padrão do JavaScript)
    // Olhar na aba "Filmes" o objeto Promise (de forma assíncrona)
    // Exemplo do GIF do WhatsApp, você pode enviar uma mensagem e continuar a digitar mesmo fazendo download de uma GIF de vó pesado, sem travar o zap
    // Isso é o conceito de assincronismo
    // Joga em uma fila paralela e espera carregar, para assim jogar de volta na produção
    // Existe duas formas de lidar com promessas: async/await e .then
    // await espera o retorno, podendo alocar ela em uma variável
    // .then é uma função que recebe um callback, que é executado quando a promessa é resolvida

    // console.log(filmes);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    };

    // Mudando movies pra filmes e titulo para title
    const filmesFiltrados = filmes.filter((filme) =>
        filme.title.toLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
        <div className="min-h-scree flex flex-col items-center p-5">
            <h1 className="text-3xl font-bold mb-4">Veja o catálogo completo de filmes</h1>
            <input
                className="w-full  text-black max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                type="text"
                name="search"
                id="search"
                value={search}
                onChange={handleSearch}
                placeholder="Buscar filmes..."
            />
            <section className="flex">
                {
                    isLoading ? <p>Carregando...</p>
                    :
                    filmesFiltrados.length > 0 ? 
                        filmesFiltrados
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme}/>
                        ))
                    :
                    <p>Filme não encontrado</p>
                }
            </section>
        </div>
    );
}
