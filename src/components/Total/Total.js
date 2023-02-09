import './Total.css';

function Total() {

  return (
    <div className="total">
      <p className="total__element total__element_amount">4000</p>
      <p className="total__element total__element_participant" style={{ gridColumn: "5" }}>1000</p>
      <p className="total__element total__element_participant" style={{ gridColumn: "6" }}>3000</p>
    </div>
  );
}

export default Total;
