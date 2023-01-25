import './Image.css';
import mansTop from '../../images/mansTop.png';
import mansBottom from '../../images/mansBottom.png';
import mansHand from '../../images/mansHand.png';
import mansFoot from '../../images/mansFoot.png';
import mansLegs from '../../images/mansLegs.png';
import speaker from '../../images/speaker.png';

function Image({ isMouseOn, isSpeaker }) {

  return (
    <div className="image">
      <img src={mansTop} alt="выше пояса" className="image__mansTop" />
      <img src={speaker} alt="динамик" className={`image__speaker image__speaker_left ${isSpeaker && "image__speaker_shake"}`} />
      <img src={speaker} alt="динамик" className={`image__speaker image__speaker_right ${isSpeaker && "image__speaker_shake"}`} />
      <img src={mansHand} alt="рука" className={`image__mansHand ${isMouseOn && "image__mansHand_shake"}`} />
      <img src={mansLegs} alt="ноги" className="image__mansLegs" />
      <img src={mansBottom} alt="ниже пояса" className="image__mansBottom" />
      <img src={mansFoot} alt="ступня" className={`image__mansFoot ${isMouseOn && "image__mansFoot_shake"}`} />
    </div>
  );
}

export default Image;
