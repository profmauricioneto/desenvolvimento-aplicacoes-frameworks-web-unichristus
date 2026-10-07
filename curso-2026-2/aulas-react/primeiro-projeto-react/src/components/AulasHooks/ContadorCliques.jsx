import { useState } from "react";

const ContadorCliques = () => {

    const [contador, setContador] = useState(0);

    return (
        <>
            <h2>Quantidade de Cliques {contador}</h2>
            <button className="p-2 border-black hover:bg-blue-400" onClick={() => setContador(contador + 1)}>Clique!</button>
        </>
    )
}

export default ContadorCliques