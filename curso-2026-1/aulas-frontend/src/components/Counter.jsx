import React, { useState } from 'react';

const Counter = () => {
  const [click, setClick] = useState(0);

  return (
    <>
      <div className="border border-2 m-2 p-2">
        <h1 className="font-bold text-2xl text-center">
          Clique no Botão abaixo
        </h1>
        <div className="">
          <button
            className="border border-2 rounded-xl p-2"
            onClick={() => setClick(click + 1)}
          >
            Quantidade de Cliques: {click}
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
