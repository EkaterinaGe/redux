import React from 'react';
import ProductList from './product-list.component';
import { useProducts } from '../../services/product-api.service';
import ProductCreationContainer from '../product-creation/ProductCreationContainer';

const ProductListContainer: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <ProductList products={products} />
      <ProductCreationContainer />
    </div>
  );
};

export default ProductListContainer;