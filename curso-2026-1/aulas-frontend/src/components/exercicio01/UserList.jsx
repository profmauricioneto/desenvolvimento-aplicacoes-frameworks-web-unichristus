import React from 'react';
import User from './User';

const UserList = () => {
  const userlist = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'Welligton', age: 40 },
    { name: 'Ana', age: 20 },
  ];

  return (
    <>
      <h2>Lista de Usuários da Aplicação!</h2>
      <div>
        {userlist.map((u, index) => (
          <User key={index} name={u.name} age={u.age} />
        ))}
      </div>
    </>
  );
};

export default UserList;
