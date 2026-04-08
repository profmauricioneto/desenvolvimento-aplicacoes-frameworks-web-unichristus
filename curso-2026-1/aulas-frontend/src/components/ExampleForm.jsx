import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!username) {
      setError('Campo obrigatório vazio!')
    } else {
      console.log(`Enviando dados: ${username}`);
      setUsername('');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="insira seu username"
            value={username}
            onChange={e => {
              setUsername(e.target.value);
              console.log(`Estado atual de: ${username}`);
            }}
          />
        </div>

        <button>Enviar</button>

        {error && <div className='text-red-800 font-bold'>{error}</div>}
      </form>
    </>
  );
};

export default Form;
