import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCadastroStore from '../../stores/useCadastroStore';

const Cadastro = () => {

    const navigate = useNavigate();

    // extração dos dados usando o zustand
    const { nome, email, senha, erro, setNome, setEmail, setSenha, setErro, submitCadastro } = useCadastroStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErro('');
        submitCadastro();
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'nomeCompleto') setNome(value);
        if (name === 'email') setEmail(value);
        if (name === 'senha') setSenha(value);        
    }

    return (
        <div className='mx-auto my-8 w-[min(92vw,460px)] rounded-2xl border border-slate-200 bg-linear-to-b from-white to-slate-50 p-6 shadow-lg shadow-slate-900/10'>
            <h2 className='mb-4 text-center text-2xl font-bold text-slate-900'>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit} className='grid gap-3'>
                <input 
                    type="text"
                    placeholder='Nome Completo'
                    name='nomeCompleto'
                    value={nome}
                    onChange={handleChange}
                    className='w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-[0.98rem] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-3 focus:ring-blue-500/20'
                />

                <input 
                    type="email" 
                    placeholder='usuario@email.com'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    className='w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-[0.98rem] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-3 focus:ring-blue-500/20'
                />

                <input 
                    type="password"
                    placeholder='senha forte'
                    name='senha'
                    value={senha}
                    onChange={handleChange}
                    className='w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-[0.98rem] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-3 focus:ring-blue-500/20'
                />
                {erro && <p className='rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700'>{erro}</p>}

                <button type='submit' className='mt-1 w-full cursor-pointer rounded-lg border-none bg-linear-to-r from-blue-600 to-blue-700 px-4 py-3 text-base font-semibold text-white transition hover:brightness-110 active:scale-[0.99]'>Enviar</button>
            
            </form>

            <div className='text-center'>
                <button onClick={() => navigate('/login')} className='p-2 hover:text-blue-600 '>Já possui cadastro? Faça o login</button>
            </div>
                        
        </div>
    )
}

export default Cadastro;