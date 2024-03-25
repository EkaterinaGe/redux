import './App.css';
import React from 'react';
import ProductCard from './product/card/product-card.component';
import productListData from '../data/product.data';

const App = () => {
    return (
        <div className="app">
            <h1>Product List</h1>
            {productListData.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default App;