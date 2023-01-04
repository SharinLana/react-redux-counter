import React from "react";
import "./Counter.css";
import CounterBtn from "./reusableComponents/CounterBtn";

const Counter = () => {
  return (
    <div className="counter-container">
      <CounterBtn className="counter-btn"> + </CounterBtn>
      <p className="counter"> 1 </p>
      <CounterBtn className="counter-btn"> - </CounterBtn>
    </div>
  );
};

export default Counter;
