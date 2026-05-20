import { create } from 'zustand';

const useCadastroStore = create((set) => ({
  nome: '',
  email: '',
  senha: '',
  erro: '',

  setNome: (nome) => set({ nome }),
  setEmail: (email) => set({ email }),
  setSenha: (senha) => set({ senha }),
  setErro: (erro) => set({ erro }),

  updateCampo: (campo, valor) => set({ [campo]: valor }),

  limparFormulario: () => set({ 
    nome: '', 
    email: '', 
    senha: '', 
    erro: '' 
  }),

  // Action para validação e envio de dados
  submitCadastro: () => {
    const state = useCadastroStore.getState();
    
    if (!state.nome || !state.email || !state.senha) {
      set({ erro: 'Campo(s) obrigatório vazio!' });
      return false;
    }
    
    console.log(`Enviando dados para servidor: ${state.nome}, ${state.email}, ${state.senha}`);
    set({ nome: '', email: '', senha: '', erro: '' });
    return true;
  }
}));

export default useCadastroStore;
