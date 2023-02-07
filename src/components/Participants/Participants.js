import Participant from '../Participant/Participant';
import './Participants.css';

function Participants({
  participants,
  addParticipant,
  deleteParticipant,
}) {
  const handleAddClick = (e) => {
    e.preventDefault();
    const ids = participants.map((el) => {
      return el.id
    })
    const newParticipantId = Math.max.apply(0, ids) + 1;
    addParticipant({
      name: `Участник ${newParticipantId}`,
      id: newParticipantId,
    })
  }

  return (
    <div className="participants">
      <h2 className="participants__title">Участники</h2>
      <div className="participants__header">
        <form className="participants__form">
          {participants.map((element) => (
            <Participant
              key={element.id}
              element={element}
              deleteParticipant={deleteParticipant}
            />
          ))}
        </form>
        <button type="button" className="participants__add-button" onClick={handleAddClick}>
        </button>
      </div>
    </div >
  );
}

export default Participants;
