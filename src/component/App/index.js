import React, { useState } from "react";
import Card from "../Card";
import InputRange from "../InputRange";
import "./App.css";
function App() {
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <div className="app">
      <h1 className="app-header">EMI CALCULATOR </h1>
      <div className="app-main-area">
        <div className="app-left">
          <div className="app-info">
            <h5>Principal Amount</h5>
            <InputRange
              title={amount}
              amount={amount}
              setAmount={setAmount}
              min={0}
              max={1000000}
            />
            <h5>Interest Rate(%) P.A.</h5>
            <InputRange
              title={interest}
              amount={interest}
              setAmount={setInterest}
              min={0}
              max={100}
            />
            <h5>
              Time Period in <span className="app-span-month">Months</span>
            </h5>{" "}
            <InputRange
              title={time}
              amount={time}
              setAmount={setTime}
              min={0}
              max={1000}
            />
          </div>
        </div>
        <div className="app-right">
          <Card amount={amount} interest={interest} time={time} />
        </div>
      </div>
    </div>
  );
}

export default App;
