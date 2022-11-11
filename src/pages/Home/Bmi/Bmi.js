import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Bmi.css";
const Bmi = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <div className="bmi">
      <h1>CALCULATE YOUR BMI</h1>
      <br />
      <input
        type="text"
        onChange={(e) => setHeight(e.target.value)}
        placeholder="height in cm"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight in kg"
      />
      <br />
      <br />
      <Button variant="light" className="fw-bold" onClick={handleBmi}>
        Calculate
      </Button>
      <br />
      <br />
      <br />
      <div className="bg-info w-25 mx-auto p-2 rounded">
        <h1>Your BMI is = {bmi}</h1>
        <h2>You are {info}</h2>
      </div>
    </div>
  );
};

export default Bmi;
