import React, { useState } from 'react';
import '../styles/ChangeStyle.css';

function ChangeStyle() {
  const [style, setStyle] = useState({ backgroundColor: 'lightgray' });

  const changeStyle = () => setStyle({ backgroundColor: 'lightblue', color: 'white' });

  return (
    <div className="change-style-container" style={style} onClick={changeStyle}>
      Click me to change style!
    </div>
  );
}

export default ChangeStyle;