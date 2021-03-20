import React from "react";
import "./Card.css";

function Card({ amount, interest, time }) {
  let EMI = 0;
  let intr = 0;

  const emi = () => {
    console.log("emi", EMI);
    let p = amount;
    //rate is converted to months rate
    let r = interest / 12 / 100;
    //time is also in months
    let t = time;
    if (p == 0 || r == 0 || t == 0) {
      return 0.0;
    }
    let em = p * r * (Math.pow(1 + r, t) / (Math.pow(1 + r, t) - 1));
    EMI = em;
    return em.toFixed(3);
  };

  const totalInterestPayable = () => {
    console.log("pay", EMI);
    let intSum = 0;
    let p = amount;
    let r = interest / 12 / 100;
    if (EMI == 0) {
      return 0.0;
    }
    while (p > 0) {
      let int = p * r;
      p = p - (EMI - int);
      intSum += int;
    }
    intr = intSum;
    return intSum.toFixed(3);
  };

  return (
    <div className="card">
      <h5 className="card-emi">EMI</h5>
      <strong className="card-emi-value">{emi()}</strong>
      <h5 className="card-emi">Total Intrest Payable</h5>
      <strong className="card-emi-value">{totalInterestPayable()}</strong>
      <h5 className="card-emi">Total Amount to be Paid</h5>
      <strong className="card-emi-value">
        {(Number(amount) + Number(intr)).toFixed(3)}
      </strong>
    </div>
  );
}

export default Card;
