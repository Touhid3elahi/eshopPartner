import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductGrid from './pages/ProductList/ProductGrid';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-grid" element={<ProductGrid />} />

      </Routes>

    </div>
  );
}

export default App;
