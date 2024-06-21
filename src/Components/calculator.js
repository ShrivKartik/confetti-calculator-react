import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [memory, setMemory] = useState(0);
  const [confetti, setConfetti] = useState(false);
  const [isRad, setIsRad] = useState(true);
  const [isSecond, setIsSecond] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(display.replace(/π/g, 'Math.PI').replace(/e/g, 'Math.E')); // Safely evaluate the expression
        setDisplay(evalResult.toString());

        if (display.includes('5') && display.includes('6')) {
          setConfetti(true);
          setTimeout(() => setConfetti(false), 3000);
        }
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'AC') {
      setDisplay('');
    } else if (value === 'MC') {
      setMemory(0);
    } else if (value === 'MR') {
      setDisplay(memory.toString());
    } else if (value === 'M+') {
      setMemory(memory + parseFloat(display));
    } else if (value === 'M-') {
      setMemory(memory - parseFloat(display));
    } else if (value === 'sin') {
      setDisplay((isRad ? Math.sin(parseFloat(display)) : Math.sin(parseFloat(display) * Math.PI / 180)).toString());
    } else if (value === 'cos') {
      setDisplay((isRad ? Math.cos(parseFloat(display)) : Math.cos(parseFloat(display) * Math.PI / 180)).toString());
    } else if (value === 'tan') {
      setDisplay((isRad ? Math.tan(parseFloat(display)) : Math.tan(parseFloat(display) * Math.PI / 180)).toString());
    } else if (value === 'sinh') {
      setDisplay(Math.sinh(parseFloat(display)).toString());
    } else if (value === 'cosh') {
      setDisplay(Math.cosh(parseFloat(display)).toString());
    } else if (value === 'tanh') {
      setDisplay(Math.tanh(parseFloat(display)).toString());
    } else if (value === 'log') {
      setDisplay(Math.log10(parseFloat(display)).toString());
    } else if (value === 'ln') {
      setDisplay(Math.log(parseFloat(display)).toString());
    } else if (value === 'x²') {
      setDisplay(Math.pow(parseFloat(display), 2).toString());
    } else if (value === 'x³') {
      setDisplay(Math.pow(parseFloat(display), 3).toString());
    } else if (value === '10ˣ') {
      setDisplay(Math.pow(10, parseFloat(display)).toString());
    } else if (value === 'eˣ') {
      setDisplay(Math.pow(Math.E, parseFloat(display)).toString());
    } else if (value === 'xʸ') {
      setDisplay(display + '**');
    } else if (value === 'ʸ√x') {
      setDisplay(display + '**(1/');
    } else if (value === '1/x') {
      setDisplay((1 / parseFloat(display)).toString());
    } else if (value === '²√x') {
      setDisplay(Math.sqrt(parseFloat(display)).toString());
    } else if (value === '³√x') {
      setDisplay(Math.cbrt(parseFloat(display)).toString());
    } else if (value === 'x!') {
      const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
      setDisplay(factorial(parseFloat(display)).toString());
    } else if (value === 'Rand') {
      setDisplay(Math.random().toString());
    } else if (value === 'π') {
      setDisplay(display + 'π');
    } else if (value === 'e') {
      setDisplay(display + 'e');
    } else if (value === 'Rad') {
      setIsRad(!isRad);
    } else if (value === '2nd') {
      setIsSecond(!isSecond);
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    'MC', 'MR', 'M+', 'M-', 'AC', '(', ')', '/',
    '7', '8', '9', '*', '4', '5', '6', '-',
    '1', '2', '3', '+', '0', '.', '=', '±',
    '2nd', 'sin', 'cos', 'tan', 'log', 'ln', isSecond ? 'eˣ' : 'x²', isSecond ? '10ˣ' : 'x³',
    isSecond ? 'ʸ√x' : 'xʸ', 'e', 'π', 'Rand',
    '1/x', '²√x', '³√x', 'x!', 'Rad', 'sinh', 'cosh', 'tanh'
  ];

  return (
    <div className="calculator">
      <div className="display">
        {display}
      </div>
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button key={index} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
      {confetti && <ConfettiExplosion />}
    </div>
  );
};

export default Calculator;
