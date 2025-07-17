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
import BrowseProfessionals from './components/professionals/BrowseProfessionals';
import ProfessionalTraining from './components/professionals/ProfessionalTraining';
import WelfareSupport from './components/community/WelfareSupport';
import NetworkingEvents from './components/community/NetworkingEvents';
import JobOpportunities from './components/community/JobOpportunities';
import CSRInitiatives from './components/community/CSRInitiatives';

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
            <Route path="/professionals/browse" element={<BrowseProfessionals />} />
            <Route path="/professionals/training" element={<ProfessionalTraining />} />
            <Route path="/community/welfare" element={<WelfareSupport />} />
            <Route path="/community/jobs" element={<JobOpportunities />} />
            <Route path="/community/events" element={<NetworkingEvents />} />
            <Route path="/community/csr" element={<CSRInitiatives />} />
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
