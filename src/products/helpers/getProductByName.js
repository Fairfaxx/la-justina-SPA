import { products } from '../data/products';

export const getProductByName = (name = '') => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  return products.filter((product) =>
    product.superhero.toLocaleLowerCase().includes(name)
  );
};
