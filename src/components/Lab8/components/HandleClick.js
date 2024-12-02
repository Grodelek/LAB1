import React, { useState } from 'react';
import '../styles/HandleClick.css';

function HandleClick() {
  const [state, setState] = useState({ clicks: 0 });

  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      clicks: prevState.clicks + 1,
    }));
  };

  return (
    <div className="handle-click-container">
      <button onClick={handleClick}>Click me!</button>
      <p>You clicked {state.clicks} times.</p>
    </div>
  );
}

export default HandleClick;