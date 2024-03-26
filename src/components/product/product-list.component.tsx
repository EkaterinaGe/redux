import { FC } from 'react';
import ProductModel from '../../models/product.model';
import './product-list.component.css';
import Description from '../description/description';

interface ProductListProps {
  products: ProductModel[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-card">
            <div className='image'>
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product__about">
                <div className="product__description">
                    <h3>{product.title}</h3>
                    <Description text={product.description} />
                </div>
                <p className="price">Price: ${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;