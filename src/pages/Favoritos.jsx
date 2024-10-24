import { useEffect, useState } from "react";

export default function Favoritos() {
    const [favoritos, setFavoritos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const favoritos = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavoritos(favoritos);
        setLoading(false);
    }, []);

    if (loading) {
        return <p>Carregando seus favoritos...</p>;
    }

    return (
        <div>
            {favoritos.length > 0 ? (
                <div className="flex flex-wrap gap-8 mx-4">
                    {favoritos.map(filme => (
                        <div key={filme.id} className="flex flex-col justify-center text-center w-40">
                            {/* <h1 className="text-lg font-bold mb-2">{filme.title}</h1> */}
                            <img 
                                src={`https://image.tmdb.org/t/p/w154${filme.poster_path}`} 
                                alt={filme.title}
                                className="w-full h-auto" // Aqui definimos a largura da imagem
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p>Você não tem nenhum filme favoritado ainda.</p>
            )}
        </div>
    );
}
