import React from "react";
import "./InputRange.css";
function InputRange({ amount, setAmount, min, max }) {
  const handleAmount = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  };
  const rangeFix = (e) => {
    if (amount < 1) {
      setAmount(1);
    }
    setAmount(e.target.value);
  };
  return (
    <>
      <input
        type="number"
        value={amount}
        onChange={rangeFix}
        className="input-number"
        min={min}
        max={max}
      />
      <input
        className="input-range"
        type="range"
        value={amount}
        onChange={handleAmount}
        max={max}
        min={min}
      />{" "}
      <br />
    </>
  );
}

export default InputRange;
