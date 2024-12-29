import React from 'react';

function Navigation({ onNavigate }) {
  return (
    <nav className="bg-gray-800 text-white py-2 px-4 flex space-x-4">
      <button onClick={() => onNavigate('dashboard')}>Dashboard</button>
      <button onClick={() => onNavigate('chapter1')}>Narrative Logs</button>
      <button onClick={() => onNavigate('ethical-considerations')}>
        Ethical Considerations
      </button>
      <button onClick={() => onNavigate('quantum-mind')}>
        Project Amoratus Schematics
      </button>
      <button onClick={() => onNavigate('chapter2')}>Chapter 2</button>
      {/* Add more navigation buttons for other pages */}
    </nav>
  );
}

export default Navigation;