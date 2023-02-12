import './CheckBoxForm.css';

function CheckBoxForm({ element }) {
  const checkBoxName = "check-" + element.id;

  return (
    <div className="form__checkbox">
      <input type="checkbox" id={checkBoxName} name={checkBoxName} className="form__input form__input_participant"></input>
      <label htmlFor={checkBoxName} className="form__label form__label_participant"></label>
    </div>
  );
}

export default CheckBoxForm;
