import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { ProductCard } from '../components/ProductCard';
import { useForm } from '../hooks/useForm';
import { getProductByName } from '../helpers/getProductByName';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const products = getProductByName(q);

  console.log(products);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Buscar Producto</h1>

      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar Producto"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-3">Buscar</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          <div className="alert alert-primary">Buscar producto</div>
          <div className="alert alert-danger">
            No encontramos ningun <b>{q}</b>
          </div>

          {products?.map((product) => (
            <div key={product.id} className="mb-3">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
