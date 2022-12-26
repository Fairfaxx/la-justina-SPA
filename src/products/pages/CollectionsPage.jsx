import React from 'react';
import { ProductList } from '../components/ProductList';

export const Collections = () => {
  return (
    <>
      <h1>Collections (DC)</h1>
      <hr />

      <ProductList type="Collection" />
    </>
  );
};
