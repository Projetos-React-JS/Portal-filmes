export default function Login({isLogged, handleLogin}) {
    return (
        <>
        <div className="">
            {isLogged && 'Olá, usuário'}
            <button
                onClick={handleLogin}
                className="bg-white text-black px-4 py-1 rounded"> 
                {isLogged ? "Logut" : "Login"} 
            </button>
        </div>
        </>
    )
}