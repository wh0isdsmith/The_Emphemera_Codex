// src/components/EthicalConsiderations/EthicalConsiderationsMatrix.js
import React from 'react';

const EthicalConsiderationsMatrix = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Ethical Considerations Matrix
      </h1>
      <table className="table-auto w-full text-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2">Theme</th>
            <th className="px-4 py-2">Dilemma</th>
            <th className="px-4 py-2">Relevant Narrative Excerpts</th>
            <th className="px-4 py-2">Technical Details</th>
            <th className="px-4 py-2">External Resources</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Consciousness</td>
            <td className="border px-4 py-2">
              Is it ethical to create artificial consciousness?
            </td>
            <td className="border px-4 py-2">
              <a href="#!" className="text-blue-500 hover:text-blue-700">
                Chapter 3, Section 4
              </a>
            </td>
            <td className="border px-4 py-2">
              <a href="#!" className="text-blue-500 hover:text-blue-700">
                QuantumMind Module
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                href="https://en.wikipedia.org/wiki/Consciousness"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Wikipedia: Consciousness
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Memory Manipulation</td>
            <td className="border px-4 py-2">
              Should we artificially remove or alter memories?
            </td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onNavigate('chapter1')}
                className="text-blue-500 hover:text-blue-700"
              >
                Related Scene in Chapter 1
              </button>
            </td>
            <td className="border px-4 py-2">GregOS Memory Module</td>
            <td className="border px-4 py-2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                External Research
              </a>
            </td>
          </tr>
          {/* Add more rows for other ethical dilemmas */}
        </tbody>
      </table>
    </div>
  );
};

export default EthicalConsiderationsMatrix;