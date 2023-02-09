import './Form.css';
import addButton from '../../images/button-add.png';
function Form() {

  return (
    <form className="form grid">

      <label className="form__label form__label_initial">
        <input type="text" className="form__input form__input_initial"></input>
      </label>
      <label className="form__label form__label_initial">
        <input type="text" className="form__input form__input_initial"></input>
      </label>
      <label className="form__label form__label_initial">
        <select className="form__input form__input_initial">
          <option>Вадим</option>
          <option>Участник 2</option>
        </select>
      </label>

      <div className="form__checkbox" style={{ gridColumn: "5" }}>
        <input type="checkbox" id="check-1" name="check-1" className="form__input form__input_participant"></input>
        <label htmlFor="check-1" className="form__label form__label_participant"></label>
      </div>
      <div className="form__checkbox" style={{ gridColumn: "6" }}>
        <input type="checkbox" id="check-2" name="check-2" className="form__input form__input_participant"></input>
        <label htmlFor="check-2" className="form__label form__label_participant"></label>
      </div>
      <button type="button" className="form__button form__button_add">
        <img
          className="form__button-image"
          src={addButton}
          alt="добавить"
        />
      </button>
    </form>
  );
}

export default Form;
