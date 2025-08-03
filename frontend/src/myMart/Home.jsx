import axios from 'axios';
import { useState } from 'react';
import './Home.css'

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    brand: '',
    category: '',
    countInStock: '',
    image: ''
  });

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', product);
      alert('Product added!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="price" onChange={handleChange} placeholder="Price" type="number" />
      <input name="description" onChange={handleChange} placeholder="Description" />
      <input name="brand" onChange={handleChange} placeholder="Brand" />
      <input name="category" onChange={handleChange} placeholder="Category" />
      <input name="countInStock" onChange={handleChange} placeholder="Stock" type="number" />
      <input name="image" onChange={handleChange} placeholder="Image URL" />
      <button type="submit">Add Product</button>
    </form>
  );
}
export default AddProduct;