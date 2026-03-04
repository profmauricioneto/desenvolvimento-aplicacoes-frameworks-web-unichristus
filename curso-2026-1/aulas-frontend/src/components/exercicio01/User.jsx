import React from 'react';

const User = props => {
  return (
    <>
      <h3 className="p-2 m-1 text-center">Nome do Usuário: {props.name}</h3>
      <h4 className="p-2 m-1 text-center">Idade do Usuário: {props.age}</h4>
    </>
  );
};

export default User;
