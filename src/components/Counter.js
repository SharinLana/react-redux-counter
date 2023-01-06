import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index";
import "./Counter.css";
import CounterBtn from "./reusableComponents/CounterBtn";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const addNumberHandler = () => {
    dispatch(counterActions.increment());
  };

  const deductNumberHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseByNumHandler = () => {
    dispatch(counterActions.increaseByNum(10));
  };

  return (
    <div className="main-container">
      <div className="inner-container">
        <CounterBtn className="counter-btn" onClick={addNumberHandler}>
          {" "}
          +{" "}
        </CounterBtn>
        <p className="counter"> {counter} </p>
        <CounterBtn className="counter-btn" onClick={deductNumberHandler}>
          {" "}
          -{" "}
        </CounterBtn>
      </div>
      <CounterBtn className="add10-btn" onClick={increaseByNumHandler}>
        Add 10
      </CounterBtn>
    </div>
  );
};

export default Counter;
