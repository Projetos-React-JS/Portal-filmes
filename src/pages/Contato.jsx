import React, { useState } from 'react'

export default function Contato() {

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')

    // EmailJs
    // https://www.youtube.com/watch?v=Zbg1BHOVzRg

    const handleContato = (e) => {
        e.preventDefault()

        alert(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`)

        setNome('')
        setEmail('')
        setMensagem('')
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handleContato} className="flex flex-col w-2/4">
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    className="text-black"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    className="text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea
                    id="mensagem"
                    cols="30"
                    rows="10"
                    className="text-black"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                >
                </textarea>
                <button type="submit" className="bg-blue-900 mt-5 text-white p-2 rounded-md">Enviar</button>
            </form>
        </div>
    )
}