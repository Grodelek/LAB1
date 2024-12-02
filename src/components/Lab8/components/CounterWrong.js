import React from 'react';
import '../styles/CounterWrong.css';

function CounterWrong() {
  let count = 0;

  const increment = () => {
    count += 1;
    console.log(`Counter: ${count}`);
  };

  return (
    <div className="counter-wrong-container">
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default CounterWrong;