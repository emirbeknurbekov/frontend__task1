import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);
  return (
    <div className="container">
      <h2 className="header">Hello World</h2>

      <h2 className="counter">{count}</h2>
      <div className="counter__btns">
        <button onClick={increment} className="counter__btns__increment">
          +
        </button>
        <button onClick={decrement} className="counter__btns__decrement">
          -
        </button>
      </div>
    </div>
  );
};

export default App;
