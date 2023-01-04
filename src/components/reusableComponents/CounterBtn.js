import React from "react";

const CounterBtn = ({ children, className }) => {
  return <button className={className}> {children} </button>;
};

export default CounterBtn;
