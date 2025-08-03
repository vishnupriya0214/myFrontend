import axios from 'axios';
import { useEffect, useState } from 'react';
import './Home.css';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔥 IMPORTANT: Use environment variable instead of hardcoded localhost
  const API_URL = import.meta.env.VITE_API_URL || 'https://myprojects-16nt.onrender.com/';

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        
        // Debug: Log the API URL being used
        console.log('🔗 Fetching from API:', `${API_URL}/api/products`);
        
        const { data } = await axios.get(`${API_URL}/api/products`);
        
        console.log('✅ Products received:', data);
        setProducts(data);
      } catch (err) {
        console.error('❌ Error fetching products:', err);
        console.error('📍 API URL was:', `${API_URL}/api/products`);
        
        // Set user-friendly error message
        if (err.code === 'ERR_NETWORK') {
          setError('Network error - Cannot connect to server');
        } else if (err.response?.status === 404) {
          setError('API endpoint not found');
        } else if (err.response?.status >= 500) {
          setError('Server error - Please try again later');
        } else {
          setError(err.message || 'Failed to fetch products');
        }
      } finally {
        setLoading(false);
      }
    }
    
    fetchProducts();
  }, [API_URL]);

  // Loading state
  if (loading) {
    return (
      <div>
        <h2>Product List</h2>
        <p>Loading products...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div>
        <h2>Product List</h2>
        <div style={{ color: 'red', padding: '10px', border: '1px solid red', borderRadius: '5px' }}>
          <p><strong>Error:</strong> {error}</p>
          <p><small>API URL: {API_URL}</small></p>
          <p><small>Check browser console for more details</small></p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map(product => (
            <div key={product._id} className="product-card">
              <img 
                src={product.image} 
                alt={product.name} 
                width="150"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150?text=No+Image';
                }}
              />
              <h3>{product.name}</h3>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Stock:</strong> {product.countInStock}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductPage;