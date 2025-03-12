import React, { useState } from 'react';
import './index.css'; // Import the CSS file

function PaletteGenerator() {
  const [palette, setPalette] = useState([]);

  const generatePalette = () => {
    const newPalette = [];
    for (let i = 0; i < 5; i++) {
      newPalette.push(getRandomColor());
    }
    setPalette(newPalette);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="palette-container">
      <h2>Color Palette</h2>
      <button onClick={generatePalette} className="generate-button">
        Generate Palette
      </button>
      <div className="palette-colors">
        {palette.map((color, index) => (
          <div key={index} className="palette-color" style={{ backgroundColor: color }}></div>
        ))}
      </div>
    </div>
  );
}

export default PaletteGenerator;