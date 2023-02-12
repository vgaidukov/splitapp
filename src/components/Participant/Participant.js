// import { useState, useContext } from 'react';
import './Participant.css';
// import { ParticipantsContext } from "../../context/ParticipantsContext";
import NameForm from '../NameForm/NameForm';
import CheckBoxForm from '../CheckBoxForm/CheckBoxForm';
import AmountForm from '../AmountForm/AmountForm';
import { useState, useContext } from 'react';
import { ParticipantsContext } from "../../context/ParticipantsContext";

function Participant({
  element,
  deleteParticipant
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [toDelete, setToDelete] = useState(false);
  const { participants } = useContext(ParticipantsContext);
  const handleDelete = (e) => {
    e.preventDefault();
    if (participants.length > 2) {
      setToDelete(true);
      const name = e.target.name;
      deleteParticipant(name.slice(9));
    } else {
      setIsVisible(false);
    }
  }

  const handleMouseOver = () => {
    setIsVisible(true);
  }
  const handleMouseOut = () => {
    setIsVisible(false);
  }

  return (
    <div className={`participant ${toDelete && "participant_to-delete"} ${((element.id > 2) && !toDelete) && "participant_new"}`}>
      <NameForm
        element={element}
        handleDelete={handleDelete}
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        isVisible={isVisible}
      />
      {/* <div className="participant__items">
        <p className="participant__item">500</p>
        <p className="participant__item">500</p>
        <p className="participant__item">500</p>
      </div> */}
      <CheckBoxForm element={element} />
      {/* <AmountForm /> */}
      <p className="participant__total">{element.total}</p>
      <p className="participant__result participant__result_total">{element.total}</p>
      <p className="participant__result participant__result_balance">{element.total}</p>
      <div className="participant__debt">
        <p className="participant__debt-value">
          {element.total}
        </p>
        <p className="participant__debt-value">
          {element.total}
        </p>
      </div>
    </div>

  );
}

export default Participant;
