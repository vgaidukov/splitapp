import './Result.css';

function Result() {

  return (
    <div className="result">
      <div className="result__container">
        <div className="result__line result__line_balance">
          <h3 className="result__title">ИТОГО</h3>
          <p className="result__element" style={{ gridColumn: "5" }}>1000</p>
          <p className="result__element" style={{ gridColumn: "6" }}>3000</p>
        </div>
        <div className="result__line result__line_balance">
          <h3 className="result__title">Баланс</h3>
          <p className="result__element" style={{ gridColumn: "5" }}>1000</p>
          <p className="result__element" style={{ gridColumn: "6" }}>3000</p>
        </div>
      </div>

      <div className="result__container">
        <div className="result__line result__line_debt">
          <h3 className="result__title">Участнику 1</h3>
          <p className="result__element" style={{ gridColumn: "5" }}>1000</p>
          <p className="result__element" style={{ gridColumn: "6" }}>3000</p>
        </div>
        <div className="result__line result__line_debt">
          <h3 className="result__title">Участнику 2</h3>
          <p className="result__element" style={{ gridColumn: "5" }}>1000</p>
          <p className="result__element" style={{ gridColumn: "6" }}>3000</p>
        </div>
      </div>
    </div >
  );
}

export default Result;
