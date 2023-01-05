import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import CounterBtn from "./reusableComponents/CounterBtn";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch({ type: "increment" });
  };

  const decreaseHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseByNumHandler = () => {
    dispatch({ type: "increaseByNum", amount: 5 });
  };

  return (
    <div className="main-container">
      <div className="inner-container">
        <CounterBtn className="counter-btn" onClick={increaseHandler}>
          {" "}
          +{" "}
        </CounterBtn>
        <p className="counter"> {counter} </p>
        <CounterBtn className="counter-btn" onClick={decreaseHandler}>
          {" "}
          -{" "}
        </CounterBtn>
      </div>
      <CounterBtn className="plus5-btn" onClick={increaseByNumHandler}>
        +5
      </CounterBtn>
    </div>
  );
};

export default Counter;
