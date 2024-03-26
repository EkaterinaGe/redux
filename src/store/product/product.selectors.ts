import { RootState } from '../store';
import { ProductStateModel } from '../../models/state/product-state.model';

export const selectProductState: (state: RootState) => ProductStateModel = (state: RootState) => state.product;

export const selectProducts = (state: RootState) => selectProductState(state).products;
