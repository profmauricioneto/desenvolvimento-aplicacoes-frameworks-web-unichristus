import { useState } from "react";

const ExemploInput = () => {
    
    const [nome, setNome] = useState('');
    
    return(
        <>
            <p>Nome: </p>
            <input
                className="bg-white text-black"
                type="text"
                value={nome}
                onChange={(e) => {
                    setNome(e.target.value)
                    console.log(nome);
                }}
            >
            </input>

            <p className="text-white">{nome}</p>
        </>
    )
}

export default ExemploInput;