import { useState, useEffect } from 'react';
import { fetchProductsApi } from './services/product-api.service';
import ProductModel from './models/product.model';

export function useProducts() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await fetchProductsApi();
        setProducts(response.data);
      } catch (e) {
        setError(`Something went wrong! Error: ${e}`);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}
