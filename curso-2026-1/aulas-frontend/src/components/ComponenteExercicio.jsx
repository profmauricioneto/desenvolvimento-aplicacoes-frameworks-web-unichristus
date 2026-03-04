import React from 'react';

export const Saudacao = props => {
  return <h1>Olá Sr(a). {props.name}</h1>;
};

export const CalculadoraIdade = props => {
  let anoNascimento = new Date().getFullYear() - props.age;
  return (
    <>
      <h3>Idade passada como argumento: {props.age}</h3>
      <h3>Seu ano de nascimento é: {anoNascimento}</h3>
    </>
  );
};
