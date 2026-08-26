import Usuario from "./Usuario";

const ListaUsuarios = () => {
    const usuarios = [
        { id: 1, nome: 'mauricio', idade: 36, profissao: 'professor' },
        { id: 2, nome: 'joao', idade: 37, profissao: 'mecanico' },
        { id: 3, nome: 'pedro', idade: 38, profissao: 'corretor' },
        { id: 4, nome: 'rafael', idade: 39, profissao: 'engenheiro' },
        { id: 5, nome: 'miguel', idade: 50, profissao: 'atleta' },
        { id: 6, nome: 'samuel', idade: 67, profissao: 'desenvolvedor' },
    ];

    return(
        <>
            {usuarios.map(u => (
                <Usuario key={u.id} nome={u.nome} idade={u.idade} profissao={u.profissao} />
            ))}
        </>
    );
}

export default ListaUsuarios;


