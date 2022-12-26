import { getProductByType } from '../helpers/getProductsByType';
import { ProductCard } from './ProductCard';

export const ProductList = ({ type }) => {
  const products = getProductByType(type);
  return (
    <div className="row rows-cols-1 rows-cols-md-3 g-3">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
