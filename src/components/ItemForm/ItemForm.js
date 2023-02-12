import './ItemForm.css';
import addButton from '../../images/button-add.png';
function ItemForm() {

  return (
    <form className="form grid">

      <label className="form__label form__label_initial" htmlFor="position">
        <input id="position" name="position" type="text" className="form__input form__input_initial" />
      </label>
      <label className="form__label form__label_initial">
        <input type="text" className="form__input form__input_initial" />
      </label>
      <label className="form__label form__label_initial" htmlFor="amount">
        <select id="amount" name="amount" className="form__input form__input_select form__input_initial">
          <option>Вадим</option>
          <option>Участник 2</option>
        </select>
      </label>
      <div className="form__set-amount">
        <input type="checkbox" id="setAmount" name="setAmount" className="set-amount-input" />
        <label htmlFor="setAmount" className="set-amount-label">Указать сумму</label>
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

export default ItemForm;
