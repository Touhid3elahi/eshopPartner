import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductGrid from './pages/ProductList/ProductGrid';
import Login from './pages/Login';
import Cart from './pages/Cart/Cart';
import Registration from './pages/Registration';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/product-grid" element={<ProductGrid />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
