import React from 'react';
import BitToDecimalConverter from './BitToDecimalConverter';

const footerStyle = {
  position: "absolute",
  left: "0",
  top: "0",
  padding: "10px",
  fontSize: "14px",
};

function App() {
  return (
    <div className="App">
      <BitToDecimalConverter />
      <footer style={footerStyle}>
        Made by Koc Alican 2024
      </footer>
    </div>
  );
}
export default App;