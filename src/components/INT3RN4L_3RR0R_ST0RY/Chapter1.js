// src/components/INT3RN4L_3RR0R_STORY/Chapter1.js
import React, { useState } from 'react';

const Chapter1 = () => {
  const [glitchEffect, setGlitchEffect] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Chapter 1: INT3RN4L_3RR0R</h1>
      <p className={`text-gray-400 ${glitchEffect ? 'glitch' : ''}`}>
        {/* Narrative content goes here. Start with the first paragraph or section. */}
        The cold, sterile air of the lab bit at Greg's exposed skin. He hadn't
        slept properly in days, fueled by a potent cocktail of caffeine and
        obsessive drive. His eyes, bloodshot and wide, darted across the
        glowing monitors, each displaying lines of code that seemed to writhe
        and shift like living entities.
      </p>
      <p className={`text-gray-400 mt-4 ${glitchEffect ? 'glitch' : ''}`}>
        "Almost there," he muttered, his voice hoarse. "Just a few more
        tweaks."
      </p>
      <p className={`text-gray-400 mt-4 ${glitchEffect ? 'glitch' : ''}`}>
        He typed furiously, the clatter of the keyboard echoing in the
        otherwise silent room. Each keystroke felt like a step further into
        the abyss, a descent into a realm where the lines between man and
        machine blurred. He was chasing something, a ghost in the code, a
        solution to an equation that had consumed him for years.
      </p>
      <p className={`text-gray-400 mt-4 ${glitchEffect ? 'glitch' : ''}`}>
        In the flickering glow of the monitors, Greg reflected on the fine line 
        between meaningful innovation and reckless obsession. Each line of code 
        felt like a confession, a testament to the lengths he would go...
      </p>
      {/* Add more paragraphs, sections, and interactive elements here. */}
      <button
        className="text-blue-500 hover:text-blue-700 mt-4"
        onClick={() => onNavigate('chapter2')}
      >
        Next Chapter
      </button>
    </div>
  );
};

export default Chapter1;