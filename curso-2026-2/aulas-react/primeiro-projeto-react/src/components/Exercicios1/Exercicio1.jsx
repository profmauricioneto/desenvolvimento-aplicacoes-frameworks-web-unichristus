
export const Saudacao = ({ name = "unknow" }) => {
    return(
        <>
            <h2>Hello {name}</h2>
            <h3>This is my First Component with Parameters</h3>
        </>
    )
};

export const CalcularDataNascimento = ({ age }) => {
    let anoNascimento = new Date().getFullYear() - age;
    return(
        <>
            <h2>Seu ano de Nascimento é: {anoNascimento}</h2>
            <h3>Fim de programa</h3>
        </>
    )
}