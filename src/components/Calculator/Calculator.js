import './Calculator.css';
import Items from '../Items/Items';
import Participants from '../Participants/Participants';
import InitialData from '../InitialData/InitialData';
import Form from '../Form/Form';


function Calculator({
  trackMouseOnCalc,
  participants,
  addParticipant,
  deleteParticipant,
}) {

  return (
    <div className="calculator" onMouseEnter={trackMouseOnCalc} onMouseLeave={trackMouseOnCalc}>
      <InitialData />
      <Participants
        participants={participants}
        addParticipant={addParticipant}
        deleteParticipant={deleteParticipant}
      />
      <Items />
      {/* <Items /> */}
      {/* <Form className="form" /> */}
    </div>
  );
}

export default Calculator;
