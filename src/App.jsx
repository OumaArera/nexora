import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './layout/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* <Route path="/players" element={<Players />} /> */}
            {/* <Route path="/statistics" element={<Statistics />} /> */}
            {/* <Route path="/partners" element={<Partners />} /> */}
            {/* <Route path="/our-shop" element={<Items />} /> */}
            {/* <Route path="/leagues" element={<Leagues />} /> */}
            {/* <Route path="/game-tickets" element={<Tickets />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
