import { useMemo } from 'react';
import { getProductByType } from '../helpers/getProductsByType';
import { ProductCard } from './ProductCard';

export const ProductList = ({ type }) => {
  const products = useMemo(() => getProductByType(type), [type]);
  return (
    <div className="row rows-cols-1 rows-cols-md-3 g-3 mb-5">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
