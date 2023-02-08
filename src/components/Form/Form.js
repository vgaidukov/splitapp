import './Form.css';
import addButton from '../../images/button-add.png';
function Form() {

  return (
    <form className="form">

      <label className="form__label form__label_initial">
        <input type="text" className="form__input form__input_initial"></input>
      </label>
      <label className="form__label form__label_initial">
        <input type="text" className="form__input form__input_initial"></input>
      </label>
      <label className="form__label form__label_initial">
        <input type="text" className="form__input form__input_initial"></input>
      </label>

      <input type="checkbox" id="check-1" name="check-1" className="form__input form__input_participant"></input>
      <label for="check-1" className="form__label form__label_participant">
      </label>
      <input type="checkbox" id="check-2" name="check-2" className="form__input form__input_participant"></input>
      <label for="check-2" className="form__label form__label_participant">
      </label>

      <div className="form__button-container">
        <button type="button" className="form__button form__button_add">
          <img
            className="form__button-image"
            src={addButton}
            alt="добавить"
          />
        </button>
      </div>
    </form>
  );
}

export default Form;
