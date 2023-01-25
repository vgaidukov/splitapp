import './InitialData.css';

function InitialData() {

  return (
    <div className="initial-data">
      <div className="column">
        <h2 className="column__title">
          Наименование
        </h2>
      </div>
      <div className="column">
        <h2 className="column__title">
          Сумма
        </h2>
      </div>
      <div className="column">
        <h2 className="column__title">
          Оплата
        </h2>
      </div>
    </div>
  );
}

export default InitialData;
