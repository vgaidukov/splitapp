import './ItemButtons.css';
import editButton from '../../images/button-edit.png';
import deleteButton from '../../images/button-delete.png';

function ItemButtons({ isButtons }) {

  return (
    <div className="item__buttons item__buttons">
      <button className="item__button">
        {/* <button className={`item__button item__button_edit item__button_${isButtons && "visible"}`}> */}
        <img
          className={`item__button-image item__button-image_edit item__button-image_${isButtons && "visible"}`}
          src={editButton}
          alt="изменить"
        />
      </button>
      {/* <button className={`item__button item__button_delete item__button_${isButtons && "visible"}`}> */}
      <button className="item__button">
        <img
          className={`item__button-image item__button-image_delete item__button-image_${isButtons && "visible"}`}
          src={deleteButton}
          alt="изменить"
        />
      </button >

    </div >
  );
}

export default ItemButtons;
