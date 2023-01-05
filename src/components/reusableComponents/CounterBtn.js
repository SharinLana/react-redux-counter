import React from "react";

const CounterBtn = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {" "}
      {children}{" "}
    </button>
  );
};

export default CounterBtn;
