import React, { useState } from 'react';

function Counter({count, setCount}) {

  const increment = () => {
    if(count < 9) {
        setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={decrement} className = "counter-buttons">-</button>
      <span>{count}</span>
      <button onClick={increment} className = "counter-buttons">+</button>
    </div>
  );
}

export default Counter;
