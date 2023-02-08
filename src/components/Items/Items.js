import './Items.css';
import '../List/List.css';
import Item from '../Item/Item';

function Items() {
  const items = [
    {
      "name": "",
      "amount": 2000,
      "paid": "1",
      "participants": {
        "1": 500,
        "2": 1500,
      },
      "id": 1,
    },
    {
      "name": "",
      "amount": 2000,
      "paid": "1",
      "participants": {
        "1": 500,
        "2": 1500,
      },
      "id": 2,
    },
  ];

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
