import React, { useState } from 'react';
import ProductModel from '../../../models/product.model';
import './ProductCreationForm.css';

interface ProductCreationFormProps {
  onSubmit: (product: Partial<ProductModel>) => void;
}

const ProductCreationForm: React.FC<ProductCreationFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [cost, setCost] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title cannot be empty');
      return;
    }
    if (!cost.trim) {
        setError('Price cannot be empty');
        return;
    }
    if (!image.trim()) {
        setError('Link cannot be empty');
        return;
    }

    let price = parseFloat(cost);
    const id = Date.now();
    onSubmit({ title, description, price, image, id });
    setTitle('');
    setDescription('');
    setCost('');
    setImage('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='div'>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='div'>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='div'>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
      <div className='div'>
        <label htmlFor="link">Link to picture:</label>
        <input
          type="text"
          id="link"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit" className='create'>Create</button>
    </form>
  );
};

export default ProductCreationForm;