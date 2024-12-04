import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
  <Route path="*" element={<Navigate to="/" />} />
  <Route path="/" element={<Home />} />
</Routes>

    </div>
  );
}

export default App;
