import React, { useState } from 'react';

const Cadastro = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    // const [campos, setCampos] = useState({
    //     nome: '',
    //     email: '',
    //     senha: '',
    // });

    const handleSubmit = (e) => {
        e.preventDefault();
        setErro('');
        if (!nome || !email || !senha) {
            setErro('Campo(s) obrigatório vazio!');
        } else {
            console.log(`Enviando dados para servidor: ${{nome, email, senha}}`);
            setNome('');
            setEmail('');
            setSenha('');
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'nomeCompleto') setNome(value);
        if (name === 'email') setEmail(value);
        if (name === 'senha') setSenha(value);        
    }

    return (
        <div className='m-4 p-2 border-1 rounded-2xl border-gray-500 text-center'>
            <h2 className='text-2xl font-bold'>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div className='p-3'>
                    <input 
                        type="text"
                        placeholder='Nome Completo'
                        name='nomeCompleto'
                        value={nome}
                        onChange={handleChange}
                        className='border-1 rounded-md border-gray-400 w-full p-2 focus:ring-2 ring-blue-500'
                    />             
                </div>

                <div>
                    <input 
                        type="email" 
                        placeholder='usuario@email.com'
                        name='email'
                        value={email}
                        onChange={handleChange}    
                    />
                </div>

                <div>
                    <input 
                        type="password"
                        placeholder='senha forte'
                        name='senha'
                        value={senha}
                        onChange={handleChange}
                    />
                </div>
                {erro && <div>{erro}</div>}

                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Cadastro;