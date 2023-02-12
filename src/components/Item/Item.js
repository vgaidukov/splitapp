import './Item.css';
import '../Grid/Grid.css';
import '../ItemButtons/ItemButtons';
import ItemButtons from '../ItemButtons/ItemButtons';
import { useState } from 'react';

function Item({
  item,
}) {
  const [isButtons, setIsButtons] = useState(false);
  const showButtons = () => {
    setIsButtons(true);
  }

  const hideButtons = () => {
    setIsButtons(false);
  }

  return (
    <li className="item grid" onMouseEnter={showButtons} onMouseLeave={hideButtons}>
      <p className="item__column item__column_initial item__column_name">{item.name}</p>
      <p className="item__column item__column_initial item__column_amount">{item.amount}</p>
      <p className="item__column item__column_initial item__column_paid">{item.paid}</p>
      <ItemButtons isButtons={isButtons} />
    </li>
  );
}

export default Item;
