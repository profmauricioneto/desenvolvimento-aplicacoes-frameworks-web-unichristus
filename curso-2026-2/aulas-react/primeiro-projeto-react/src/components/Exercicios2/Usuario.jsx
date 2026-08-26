const Usuario = ({ nome, idade, profissao }) => {
    return(
        <>
            <h2>Olá {nome.toUpperCase()}</h2>
            <h3>Idade: {idade}</h3>
            <h3>Profissão: {profissao}</h3>
            <hr />
        </>
    )
}

export default Usuario;