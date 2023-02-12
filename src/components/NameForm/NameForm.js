import './NameForm.css';
import { useContext } from 'react';
import { ParticipantsContext } from "../../context/ParticipantsContext";


function NameForm({
  element,
  handleMouseOver,
  handleMouseOut,
  isVisible,
  handleDelete,
}) {
  const { participants } = useContext(ParticipantsContext);

  return (
    <form className="participant__name-form">
      <div
        className="participant__name-container"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <input
          className="participant__name"
          placeholder={element.name}
        />
        <div
          className={`participant__delete ${isVisible && (participants.length > 2) && "participant__delete_visible"}`}
        >
          <button
            className="participant__delete-button"
            type="button"
            name={`deleteId_${element.id}`}
            onClick={handleDelete}
          >
          </button>
        </div>
      </div >
    </form>
  );
}

export default NameForm;
