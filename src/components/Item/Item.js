import './Item.css';
import '../ItemButtons/ItemButtons';
import ItemButtons from '../ItemButtons/ItemButtons';
import { useState } from 'react';

function Item({
  item,
  // showButtons,
  // hideButtons,
}) {
  const [isButtons, setIsButtons] = useState(false);
  const showButtons = () => {
    setIsButtons(true);
  }

  const hideButtons = () => {
    setIsButtons(false);
  }

  return (
    <li className="item list" onMouseEnter={showButtons} onMouseLeave={hideButtons}>
      <p className="item__column item__column_initial item__column_name">Продукты</p>
      <p className="item__column item__column_initial item__column_amount">2000</p>
      <p className="item__column item__column_initial item__column_paid">Vadim</p>
      <p className="item__column item__column_participant">500</p>
      <p className="item__column item__column_participant">1500</p>
      {/* <p className="item__column item__column_participant">1500</p>
      <p className="item__column item__column_participant">1500</p> */}
      <ItemButtons isButtons={isButtons} />
    </li>
  );
}

export default Item;
