import { products } from '../data/products';

export const getProductByType = (type) => {
  const isValidProduct = ['Collection', 'Sales'];

  if (!isValidProduct.includes(type)) {
    throw new Error(`${product} is not a valid product`);
  }

  return products.filter((product) => product.type === type);
};
