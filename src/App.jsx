import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './layout/Home';
import Mission from './components/about/Mission';
import CommunityValues from './components/about/CommunityValues';
import LeadershipTeam from './components/about/LeadershipTeam';
import SuccessStories from './components/about/SuccessStories';

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/mission" element={<Mission />} />
            <Route path="/about/values" element={<CommunityValues />} />
            <Route path="/about/team" element={<LeadershipTeam />} />
            <Route path="/about/stories" element={<SuccessStories />} />
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
