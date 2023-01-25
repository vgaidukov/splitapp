import './Image.css';
import mansTop from '../../images/mansTop.png';
import mansBottom from '../../images/mansBottom.png';
import mansHand from '../../images/mansHand.png';
import mansFoot from '../../images/mansFoot.png';
import mansLegs from '../../images/mansLegs.png';
import speaker from '../../images/speaker.png';

function Image({ isMouseOnCalc, isMouseOnTitle }) {

  return (
    <div className="image">
      <img src={mansTop} alt="выше пояса" className="image__mansTop" />
      <img src={speaker} alt="динамик" className={`image__speaker image__speaker_left ${isMouseOnTitle && "image__speaker_shake"}`} />
      <img src={speaker} alt="динамик" className={`image__speaker image__speaker_right ${isMouseOnTitle && "image__speaker_shake"}`} />
      <img src={mansHand} alt="рука" className={`image__mansHand ${isMouseOnCalc && "image__mansHand_shake"}`} />
      <img src={mansLegs} alt="ноги" className="image__mansLegs" />
      <img src={mansBottom} alt="ниже пояса" className="image__mansBottom" />
      <img src={mansFoot} alt="ступня" className={`image__mansFoot ${isMouseOnCalc && "image__mansFoot_shake"}`} />
    </div>
  );
}

export default Image;
