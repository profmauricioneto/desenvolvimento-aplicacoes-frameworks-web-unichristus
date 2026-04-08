import React from 'react';
import Product from './Product';

const ProductList = props => {
  return (
    <>
      <div>
        {props.productList.map((p, index) => (
          <Product key={index} name={p.name} price={p.price} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
