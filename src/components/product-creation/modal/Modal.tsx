import './modal.css';
import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import ProductCreationForm from '../form/ProductCreationForm';
import ProductModel from '../../../models/product.model';
import { createProductApi } from '../../../services/product-api.service';
import { setProducts } from '../../../store/product/product.slice';

interface ModalProps {
  visible: boolean;
  title: string;
  onClose: () => void;
  children?: ReactNode;
}
  
const Modal: React.FC<ModalProps> = ({ visible, title, onClose, children }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (product: Partial<ProductModel>) => {
    console.log(product);
    try {
      const response = await createProductApi(product);
      dispatch(setProducts([response])); 
    } catch (error) {
      console.error('Error creating product:', error);
    }
    onClose();
  };

  if (!visible) return null;
  
  return (
    <div className='backdrop' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <h3>{title}</h3>
          <button onClick={onClose} className='cross'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.9394 10.0001L2.46973 3.53039L3.53039 2.46973L10.0001 8.9394L16.4697 2.46973L17.5304 3.53039L11.0607 10.0001L17.5304 16.4697L16.4697 17.5304L10.0001 11.0607L3.53039 17.5304L2.46973 16.4697L8.9394 10.0001Z" fill="black" />
            </svg>
          </button>
        </div>
        <ProductCreationForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};
  
export default Modal;