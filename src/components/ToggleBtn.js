import React from "react";
import { useDispatch } from "react-redux";
import "./ToggleBtn.css";

const ToggleBtn = () => {
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <button className="toggleBtn" onClick={toggleCounterHandler}>
      Toggle
    </button>
  );
};

export default ToggleBtn;
