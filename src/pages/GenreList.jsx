import data from '../data/genres.json';

export default function GenreList(){
    return(
        <>
        <h1>Genre Page</h1>
        {
            data.map((genre) => {
                return(
                    <div key={genre.id}>
                        <h2>{genre.genero}</h2>
                    </div>
                )
            })
        }
         {/*Lista todos os gêneros disponíveis em um formato de card,
        cada um com uma cor de fundo diferente, com um link 
        para uma página que exibe filmes pertencentes a esse gênero. */}
        </>
    )
}