import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components/NavBar';
import { Collections } from '../pages/CollectionsPage';
import { ProductPage } from '../pages/ProductPage';
import { Sales } from '../pages/SalesPage';
import { SearchPage } from '../pages/SearchPage';

export const ProductsRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/collections" />} />
          <Route path="collections" element={<Collections />} />
          <Route path="sales" element={<Sales />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="product" element={<ProductPage />} />
        </Routes>
      </div>
    </>
  );
};
