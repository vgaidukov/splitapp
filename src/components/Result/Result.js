import './Result.css';
import '../Grid/Grid.css';

function Result() {

  return (
    <div className="result">
      <div className="result__container">
        <div className="grid result__line result__line_balance">
          <h3 className="result__title">ИТОГО</h3>
        </div>
        <div className="grid result__line result__line_balance">
          <h3 className="result__title">Баланс</h3>
        </div>
      </div>

      <div className="result__container">
        <div className="grid result__line result__line_debt">
          <h3 className="result__title">Участнику 1</h3>
        </div>
        <div className="grid result__line result__line_debt">
          <h3 className="result__title">Участнику 2</h3>
        </div>
      </div>
    </div >
  );
}

export default Result;
