import React from 'react';

const Card = ({ children }) => {
  return (
    <>
      <div style={{ color: 'blue', border: '4px solid #ccc', padding: '16px' }}>
        {children}
      </div>
    </>
  );
};

export default Card;
