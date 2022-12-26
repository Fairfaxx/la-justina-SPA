import { Link } from 'react-router-dom';

export const ProductCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
  type,
  price,
}) => {
  const productImageUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className="card me-3" style={{ width: '18rem' }}>
      <img src={productImageUrl} className="card-img-top" alt={superhero} />
      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{alter_ego}</p>
        <p>Valor: {price}</p>
        <Link to={`/product/${id}`} className="btn btn-primary">
          Más Información
        </Link>
      </div>
    </div>
  );
};
