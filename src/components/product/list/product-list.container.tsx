import React from 'react';
import ProductList from './product-list.component';
import { useProducts } from '../../../products.hook';

const ProductListContainer: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return <ProductList products={products} />;
};

export default ProductListContainer;