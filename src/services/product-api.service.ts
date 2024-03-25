import axios, { AxiosResponse } from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';
import ProductModel from '../models/product.model';

export async function fetchProductsApi(): Promise<AxiosResponse<ProductModel[]>> {
  return axios.get(PRODUCTS_URL);
}