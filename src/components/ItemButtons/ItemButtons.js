import './ItemButtons.css';

function ItemButtons({ isButtons }) {
  console.log(isButtons);

  return (
    <div className="item__buttons item__buttons">
      {/* <button className="item__button item__button_edit"></button> */}
      <button className={`item__button item__button_${isButtons && "visible"}`}></button>
      <button className={`item__button item__button_${isButtons && "visible"}`}></button>

    </div>
  );
}

export default ItemButtons;
