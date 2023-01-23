import './Calculator.css';

function Calculator({ trackMouse }) {

  return (
    <div className="calculator" onMouseOver={trackMouse} onMouseOut={trackMouse}>
      <div className="items"></div>
      <div className="participants"></div>
    </div>
  );
}

export default Calculator;
