import './InitialData.css';

function InitialData() {

  return (
    <div className="initial-data">
      <div className="column">
        <h2 className="column__title column__title_name">
          Позиция
        </h2>
      </div>
      <div className="column">
        <h2 className="column__title column__title_amount">
          Сумма
        </h2>
      </div>
      <div className="column">
        <h2 className="column__title column__title_paid">
          Оплата
        </h2>
      </div>
    </div>
  );
}

export default InitialData;
