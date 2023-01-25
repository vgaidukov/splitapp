import { useState } from 'react';
import './Participant.css';

function Participant({
  element,
  deleteParticipant
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [toDelete, setToDelete] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true);
  }
  const handleMouseOut = () => {
    setIsVisible(false);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    setToDelete(true);
    const name = e.target.name;
    deleteParticipant(name.slice(9));
  }

  return (
    <div
      className={`participant ${toDelete && "participant_to-delete"}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <input
        className={`participant__name ${(element.id > 2) && "participant__name_new"}`}
        placeholder={element.name}
      />
      <div
        className={`participant__delete ${isVisible && "participant__delete_visible"}`}
      >
        <button
          className="participant__delete-button"
          type="button"
          name={`deleteId_${element.id}`}
          onClick={handleDelete}
        >
        </button>
      </div>
    </div>
  );
}

export default Participant;
