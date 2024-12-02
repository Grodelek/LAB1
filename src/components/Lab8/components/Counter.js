import React, { useState } from 'react';
import '../styles/Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default Counter;