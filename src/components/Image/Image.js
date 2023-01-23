import './Image.css';
import mansTop from '../../images/mansTop.png';
import mansBottom from '../../images/mansBottom.png';
import mansHand from '../../images/mansHand.png';
import mansFoot from '../../images/mansFoot.png';
import mansLegs from '../../images/mansLegs.png';

function Image({ isMouseOn }) {

  return (
    <div className="image-container">
      <img src={mansTop} alt="выше пояса" className="mansTop" />
      <img src={mansHand} alt="рука" className={`mansHand ${isMouseOn && "shake-hand"}`} />
      <img src={mansLegs} alt="ноги" className="mansLegs" />
      <img src={mansBottom} alt="ниже пояса" className="mansBottom" />
      <img src={mansFoot} alt="ступня" className={`mansFoot ${isMouseOn && "shake-foot"}`} />
    </div>
  );
}

export default Image;
