import React, { useState } from 'react';
import './App.css';

function ColorPicker() {
  const [color, setColor] = useState('#ff0000'); // Default color: red

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App">
      <h1>React Color Picker</h1>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        style={{ width: '50px', height: '50px' }}
      />
      <p>Selected Color: {color}</p>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
          marginTop: '20px',
        }}
      ></div>
    </div>
  );
}

export default ColorPicker;
