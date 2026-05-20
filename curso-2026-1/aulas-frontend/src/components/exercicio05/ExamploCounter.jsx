import React from "react";
import useCounter from "./useCounter";

const ExamploCounter = () => {

    const count = useCounter(state => state.count);
    const increment = useCounter(state => state.increment);
    const decrement = useCounter(state => state.decrement);

    return (
      <>
        <div className="text-center text-xl">
          <h1>Contador de Cliques: {count}</h1>
          <button
            className="p-2 m-2 border-2 rounded hover:bg-blue-400"
            onClick={() => increment()}
          >
            Incrementar
          </button>
          <button
            className="p-2 m-2 border-2 rounded hover:bg-blue-400"
            onClick={() => decrement()}
          >
            Decrementar
          </button>
        </div>
      </>
    );
}

export default ExamploCounter;