import { Navigate, useParams } from 'react-router-dom';
import { getProductById } from '../helpers/getProductById';

export const ProductPage = () => {
  const { id } = useParams();

  const product = getProductById(id);
  if (!product) {
    return <Navigate to="/collections" />;
  }
  return <h1>ProductPage</h1>;
};
