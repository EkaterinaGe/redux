import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import ProductModel from '../../models/product.model';
import { ProductStateModel } from '../../models/state/product-state.model';

const initialState: ProductStateModel = {
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductModel[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export const setProductsAction = (products: ProductModel[]) => (dispatch: any) => {
    dispatch(setProducts(products));
};

export const selectProducts = (state: RootState) => state.product.products;

export default productSlice.reducer;