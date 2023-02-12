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
    });
    const newParticipantId = Math.max.apply(0, ids) + 1;
    addParticipant({
      name: `Участник ${newParticipantId}`,
      id: newParticipantId,
      total: newParticipantId + 100,
    });
  }

  return (
    <div className="participants">
      <h2 className="participants__title">Участники</h2>
      <div
        className="participants__container"
        style={{ gridTemplateColumns: `repeat(${participants.length}, max-content) 70px` }}>
        {participants.map((element) => (
          <Participant
            key={element.id}
            element={element}
            deleteParticipant={deleteParticipant}
          />
        ))}
        <button type="button" className="participants__add-button" onClick={handleAddClick}>
        </button>
      </div>
    </div >
  );
}

export default Participants;
