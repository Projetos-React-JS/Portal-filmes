import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json"
// Importando JSON de Arquivos Externos (qualquer nome e from com o local)

export default function Home(){
    console.log(movies)
    // Verificando o array de filmes no Console
    return(
        <>
        {/* Titulo foi passado como props no CardContainer */}
        <CardContainer titulo={"Filmes Antigos"}> 
        {/* Mapeando o JSON para percorrer e retirar os filmes */}
        {   
            // movies.map(filme => (
            //     <h1>{filme.titulo}</h1>
            // ))
            // Arrow Function com Parâmetro

            movies
            // Filtro de Filmes Antigos antes do Map
            .filter(filme => filme.ano_lancamento < 2000)
            .map(filme => (
                <MovieCard key = {filme.id}{...filme}/>
                // Spread
                // Toma os dados de cada filme pra você
            ))
        }
        </CardContainer>
        <CardContainer titulo={"Melhor Avaliados"}>
        {
            movies
            .filter( filme => filme.avaliacao < 9)
            .map( filme => (
                <MovieCard key={filme.id} {...filme}/>
                )
            )
        }
        </CardContainer>
        </>
    )
}