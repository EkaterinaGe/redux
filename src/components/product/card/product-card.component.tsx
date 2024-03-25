import React, { memo, FC } from 'react';
import ProductModel from '../../../data/product.model';
import "./product-card.css";

type ProductCardProps = ProductModel;

const ProductCard: FC<ProductCardProps> = ({ title, price, description, image }) => {
    return (
        <div className="product-card">
            <div className='image'>
                <img src={image} alt={title} />
            </div>
            <div className="product__about">
                <div className="product__description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <p className="price">Price: ${price}</p>
            </div>
        </div>
    );
};

export default memo(ProductCard);