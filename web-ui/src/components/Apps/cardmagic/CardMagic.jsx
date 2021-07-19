import React, { useState } from "react";
import "./CardMagic.css";

export default function CardMagic() {
  const [fifthCard, setFifthCard] = useState("");

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [thirdNumber, setThirdNumber] = useState("");
  const [forthNumber, setForthNumber] = useState("");

  const [firstType, setFirstType] = useState("");
  const [secondType, setSecondType] = useState("");
  const [thirdType, setThirdType] = useState("");
  const [forthType, setForthType] = useState("");

  const compute = () => {
    const type = firstType
    setFifthCard('Q'+type)
  };

  return (
    <div className="container">
      <CardInput
        setNumber={setFirstNumber}
        setType={setFirstType}
        title="Enter First Card"
      />
      <CardInput
        setNumber={setSecondNumber}
        setType={setSecondType}
        title="Enter Second Card"
      />
      <CardInput
        setNumber={setThirdNumber}
        setType={setThirdType}
        title="Enter Third Card"
      />
      <CardInput
        setNumber={setForthNumber}
        setType={setForthType}
        title="Enter Forth Card"
      />
      <button onClick={compute}>Find the fifth card</button>
      {fifthCard && <p className="fifth-card">{fifthCard}</p>}
    </div>
  );
}

function CardInput(props) {
  const numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const types = ["♠", "♥", "♦", "♣"];
  return (
    <div className="cardinput">
      <div className="info">{props.title}</div>
      <select onChange={(e) => props.setNumber(e.target.value)}>
        {numbers.map((n) => (
          <option value={n}>{n}</option>
        ))}
      </select>
      <select onChange={(e) => props.setType(e.target.value)}>
        {types.map((n) => (
          <option value={n}>{n}</option>
        ))}
      </select>
    </div>
  );
}
