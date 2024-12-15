import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fireworks } from './components/Fireworks';
import { FloatingElements } from './components/FloatingElements';
import { Home } from './pages/Home';
import { ViewWish } from './pages/ViewWish';
import { CreateWish } from './pages/CreateWish';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <Fireworks />
        <FloatingElements />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateWish />} />
          <Route path="/wish" element={<ViewWish />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;