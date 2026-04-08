import React from 'react';

const Product = props => {
  return (
    <>
      <div className="border border-2 rounded-xl p-4 m-2">
        <h2 className="text-xl font-bold">
          Product: {props.name.toUpperCase()}
        </h2>
        <p className="text-md">Price: {props.price}</p>
      </div>
    </>
  );
};

export default Product;
