import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  let inputvalue = 1;
  let maxvalue = 1000;

  const [counter, setCounter] = useState(inputvalue);

  const handleCounter = (val) => {
    if (val === "inc") {
      if (counter < maxvalue) {
        setCounter(counter + 1);
      }
    } else if (val === "dec") {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="btn_maindiv">
      <div className="btn_div">
        <button onClick={() => handleCounter("dec")} className="btn1">
          -
        </button>
        <button className="counter_btn">{counter}</button>
        <button onClick={() => handleCounter("inc")} className="btn2">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
