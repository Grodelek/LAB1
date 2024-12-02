import React, { useState } from 'react';
import '../styles/HandleMouseOver.css';

function HandleMouseOver() {
  const [style, setStyle] = useState({ color: 'black' });

  const handleMouseOver = () => setStyle({ color: 'blue' });
  const handleMouseOut = () => setStyle({ color: 'black' });

  return (
    <div className="handle-mouseover-container">
      <p style={style} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Hover over this text!
      </p>
    </div>
  );
}

export default HandleMouseOver;