import axios from 'axios';
import { PRODUCTS_URL } from '../constants/constants';
import ProductModel from '../models/product.model';
import { useDispatch } from 'react-redux';
import { setProductsAction } from '../store/product/product.slice';
import { useEffect, useState } from 'react';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { selectProducts } from '../store/product/product.selectors';

export const useProducts = () => {
    const dispatch: ThunkDispatch<RootState, void, any> = useDispatch();
    const products = useSelector(selectProducts);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get<ProductModel[]>(PRODUCTS_URL);
                dispatch(setProductsAction(response.data));
            } catch (error) {
                setError(`Something went wrong! Error: ${error}`);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [dispatch]);
    
    return { products, loading, error };
};

export async function createProductApi(product: Partial<ProductModel>): Promise<ProductModel> {
    try {
      const response = await axios.post<ProductModel>(PRODUCTS_URL, product);
      return response.data;
    } catch (error) {
      throw new Error('Error creating product');
    }
}