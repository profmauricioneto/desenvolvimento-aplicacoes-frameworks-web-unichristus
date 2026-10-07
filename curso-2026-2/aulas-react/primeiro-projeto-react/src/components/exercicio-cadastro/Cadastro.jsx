import { useState } from "react";

const Cadastro = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState(false);

    const handleData = (e) => {
        const {name, value} = e.target;
        if (name === 'nome') setNome(value);
        if (name === 'email') setEmail(value);
        if (name === 'username') setUserName(value);
        if (name === 'senha') setSenha(value);
    }

    const submitData = (e) => {
        e.preventDefault();
        if (!nome || !email || !username || !senha) {
            setErro(true);
        }

    }

    // const [dados, setDados] = useState({
    //     nome: '',
    //     email: '',
    //     //...
    // });

    return (
      <>
        <div className="mx-auto my-8 w-[min(92vw,460px)] rounded-2xl border border-black-200 bg-linear-to-b from-white to-slate-50 p-6 shadow-lg shadow-black-900/10">
          <form className="grid gap-3">
            <h2 className="mb-4 text-center text-2xl font-bold text-slate-900">
              Cadastro
            </h2>

            <input
              type="text"
              name="nome"
              placeholder="Nome Completo"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-[0.98rem] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-3 focus:ring-blue-500/20"
              value={nome}
              onChange={handleData}
            />

            <input
              type="text"
              name="email"
              placeholder="E-mail"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-[0.98rem] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-3 focus:ring-blue-500/20"
              value={email}
              onChange={handleData}
            />

            <input
              type="text"
              name="username"
              placeholder="Apelido"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-[0.98rem] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-3 focus:ring-blue-500/20"
              value={username}
              onChange={handleData}
            />

            <input
              type="password"
              name="senha"
              placeholder="Senha"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-[0.98rem] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-3 focus:ring-blue-500/20"
              value={senha}
              onChange={handleData}
            />

            <button
              type="submit"
              className="mt-1 w-full cursor-pointer rounded-lg border-none bg-linear-to-r from-blue-600 to-blue-700 px-4 py-3 text-base font-semibold text-white transition hover:brightness-110 active:scale-[0.99]"
              b
            >
              Enviar
            </button>

            {erro && <p className="text-red-800 text-bold">Campos Obrigatórios Vazios</p>}
          </form>
        </div>
      </>
    );
}

export default Cadastro;