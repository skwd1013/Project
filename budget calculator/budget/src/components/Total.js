// Total.js

import React from "react";
import "./Total.css";
const Total = ({ expenses }) => {
  const totalAmount = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="total-container">
      <p className="total-amount">
        총지출: <span>{totalAmount}원</span>
      </p>
    </div>
  );
};

export default Total;
