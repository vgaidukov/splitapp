// import Items from '../Items/Items';
import Participants from '../Participants/Participants';
import './Calculator.css';
import InitialData from '../InitialData/InitialData';


function Calculator({
  trackMouseOnCalc,
  participants,
  addParticipant,
  deleteParticipant,
  widthIndex,
}) {

  return (
    <div className="calculator" onMouseEnter={trackMouseOnCalc} onMouseLeave={trackMouseOnCalc}>
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
