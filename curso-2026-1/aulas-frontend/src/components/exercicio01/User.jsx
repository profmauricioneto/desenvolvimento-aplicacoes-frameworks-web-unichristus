import React from 'react';

const User = props => {
  return (
    <>
      <div className="p-2 border-2 border-black rounded-xl bg-gray-300">
        <h3 className="p-2 m-1 text-2xl">Nome do Usuário: {props.name}</h3>
        <h4 className="p-2 m-1 text-xl">Idade do Usuário: {props.age}</h4>
      </div>
    </>
  );
};

export default User;
