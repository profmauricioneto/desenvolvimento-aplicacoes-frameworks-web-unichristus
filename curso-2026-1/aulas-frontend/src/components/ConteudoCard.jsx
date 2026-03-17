import React from 'react';
import Card from './Card';

const ConteudoCard = () => {
  return (
    <>
      <Card>
        <h2>Hello World from Card</h2>
        <p>Testando o card</p>
      </Card>

      <Card>
        <button>Hello!</button>
      </Card>
    </>
  );
};

export default ConteudoCard;
