import { useState } from 'react';

export default function Login() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(prevState => !prevState);
  };

  return (
    <>
      <div className="flex gap-4 items-center">
        {/* Se isLogged for verdadeiro, exibe o texto */}  
        {isLogged && <p className="text-white">Olá, usuário</p>}  
        {/* Botão que muda de cor e texto conforme o estado */}
        <button
          className={`bg-${isLogged ? "black" : "white"} text-${isLogged ? "white" : "black"} px-4 py-1 rounded-md`} 
          onClick={handleLogin} 
        >
          {isLogged ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
}
