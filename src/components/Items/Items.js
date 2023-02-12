import './Items.css';
import '../List/List.css';
import Item from '../Item/Item';
import { useContext } from 'react';
import { ParticipantsContext } from "../../context/ParticipantsContext";

function Items() {
  const { items } = useContext(ParticipantsContext);

  return (
    <ul className="items">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
}

export default Items;
