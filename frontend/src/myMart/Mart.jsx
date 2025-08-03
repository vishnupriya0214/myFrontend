import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProduct from './Home';
import ProductPage from './Product';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/add-product">Add Product</Link> |{' '}
        <Link to="/products">Product List</Link>
      </nav>
      <Routes>
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
