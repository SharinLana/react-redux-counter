import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ToggleBtn.css";
import { counterActions } from "../store/index";

const ToggleBtn = () => {
  const counterIsShown = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <button className="toggleBtn" onClick={toggleCounterHandler}>
      {counterIsShown ? "Close" : "Open"}
    </button>
  );
};

export default ToggleBtn;
