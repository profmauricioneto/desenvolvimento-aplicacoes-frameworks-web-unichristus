const Usuario = ({ nome, idade, profissao }) => {
    return (
      <>
        <div class="m-2 p-2 border-2 border-blue-400 rounded-md hover:bg-blue-400 text-white">
          <h2 class="uppercase p-2">Olá {nome.toUpperCase()}</h2>
          <h3>Idade: {idade}</h3>
          <h3>Profissão: {profissao}</h3>
        </div>
      </>
    );
}

export default Usuario;