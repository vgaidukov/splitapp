// import Items from '../Items/Items';
import Participants from '../Participants/Participants';
import './Calculator.css';
import InitialData from './InitialData/InitialData';


function Calculator({
  trackMouse,
  participants,
  addParticipant,
  deleteParticipant,
  widthIndex,
}) {

  return (
    <div className="calculator" onMouseEnter={trackMouse} onMouseLeave={trackMouse}>
      <InitialData />
      <Participants
        participants={participants}
        addParticipant={addParticipant}
        deleteParticipant={deleteParticipant}
        widthIndex={widthIndex}
      />
      {/* <Items /> */}
    </div>
  );
}

export default Calculator;
