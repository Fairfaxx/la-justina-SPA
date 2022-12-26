import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../helpers/getProductById';

export const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  const product = useMemo(() => getProductById(id), [id]);
  if (!product) {
    return <Navigate to="/collections" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={product.superhero}
          className="img-thumbnail animate__animated animate__backInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{product.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Modelo:</b> {product.alter_ego}{' '}
            <span>Precio: {product.price}</span>
          </li>
          <li className="list-group-item">
            <b>Talles:</b> {product.first_appearance}
            <p className="text-primary">Stock: {product.stock}</p>
          </li>
        </ul>
        <button className="btn btn-outline-primary ms-3" onClick={onGoBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
