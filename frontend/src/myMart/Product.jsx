import axios from 'axios';
import { useEffect, useState } from 'react';
import './Home.css';

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.length === 0 && <p>No products available.</p>}
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} width="150" />
            <h3>{product.name}</h3>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Stock:</strong> {product.countInStock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
