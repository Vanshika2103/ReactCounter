import React from "react";
import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [val, setValue] = useState(1);

  const IncNum = () => {
    setValue(val + 1);
  };

  const DecNum = () => {
    setValue(val - 1);

    if (val <= 0) {
      setValue(0);
    }
  };
  return (
    <>
      <div className="counter-container">
        <div className="counter-app">
          <h1>React Counter </h1>
          <h1>{val}</h1>
          <button className="btn" onClick={IncNum}>
            Add Quantity +
          </button>
          <button className="btn" onClick={DecNum}>
            Remove Quantity
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
