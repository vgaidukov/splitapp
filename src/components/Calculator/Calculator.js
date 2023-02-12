import './Calculator.css';
import Items from '../Items/Items';
import Participants from '../Participants/Participants';
import InitialData from '../InitialData/InitialData';
import ItemForm from '../ItemForm/ItemForm';
import Total from '../Total/Total';
import Result from '../Result/Result';


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
      {/* <Items /> */}
      <ItemForm />
      <Total />
      <Result />
    </div>
  );
}

export default Calculator;
