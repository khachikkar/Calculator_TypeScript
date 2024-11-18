import React from 'react';
import './App.css';
import CalculatorContainer from "./components/CalculatorContainer";

const numbers = [0,1,2,3,4,5,6,7,8,9]
const operations = ["+", "-", "*", "/", "="]


function App() {
return (
<div className="App">
<CalculatorContainer numbers={numbers} operations={operations} />
</div>
);
}

export default App;
