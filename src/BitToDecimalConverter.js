import React, { useState } from 'react';

function BitToDecimalConverter() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState(0);
  const [decimalInput, setDecimalInput] = useState(0);
  const [binaryOutput, setBinaryOutput] = useState("");
  const [hexInput, setHexInput] = useState("");
  const [binaryFromHex, setBinaryFromHex] = useState("");
  const [octalInput, setOctalInput] = useState("");
  const [binaryFromOctal, setBinaryFromOctal] = useState("");

  const handleBinaryChange = (event) => {
    setBinary(event.target.value);
    setDecimal(parseInt(event.target.value, 2));
  };

  const handleDecimalChange = (event) => {
    setDecimalInput(event.target.value);
    setBinaryOutput(parseInt(event.target.value, 10).toString(2));
  };

  const handleHexChange = (event) => {
    setHexInput(event.target.value);
    setBinaryFromHex(parseInt(event.target.value, 16).toString(2));
  };

  const handleOctalChange = (event) => {
    setOctalInput(event.target.value);
    setBinaryFromOctal(parseInt(event.target.value, 8).toString(2));
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '50px',
  };

  const inputStyle = {
    margin: '20px 0',
    padding: '10px',
    fontSize: '16px',
  };

  const outputStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <label>
        Binary Input: <br></br> 
        <input type="text" style={inputStyle} value={binary} onChange={handleBinaryChange} />
      </label>
      <p style={outputStyle}>Decimal Output: {decimal}</p>
      <label>
        Decimal Input: <br></br> 
        <input type="text" style={inputStyle} value={decimalInput} onChange={handleDecimalChange} />
      </label>
      <p style={outputStyle}>Binary Output: {binaryOutput}</p>
      <label>
        Hexadecimal Input: <br></br> 
        <input type="text" style={inputStyle} value={hexInput} onChange={handleHexChange} />
      </label>
      <p style={outputStyle}>Binary Output: {binaryFromHex}</p>
      <label>
        Octal Input: <br></br> 
        <input type="text" style={inputStyle} value={octalInput} onChange={handleOctalChange} />
      </label>
      <p style={outputStyle}>Binary Output: {binaryFromOctal}</p>
    </div>
  );
}

export default BitToDecimalConverter;