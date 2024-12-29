// src/App.js
import React, { useState } from 'react';
import GregOSBootScreen from './components/GregOSBootScreen';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Chapter1 from './components/INT3RN4L_3RR0R_ST0RY/Chapter1';
import EthicalConsiderationsMatrix from './components/EthicalConsiderations/EthicalConsiderationsMatrix';
import QuantumMind from './components/ProjectAmoratus/QuantumMind';

function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleBootComplete = () => {
    setBootComplete(true);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {!bootComplete && (
        <GregOSBootScreen onBootComplete={handleBootComplete} />
      )}
      {bootComplete && (
        <>
          <Navigation onNavigate={handleNavigation} />
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'chapter1' && <Chapter1 />}
          {currentPage === 'ethical-considerations' && (
            <EthicalConsiderationsMatrix />
          )}
          {currentPage === 'quantum-mind' && <QuantumMind />}
          {/* Add more conditional renderings for other pages */}
        </>
      )}
    </div>
  );
}

export default App;