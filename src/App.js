import './App.css';
import mansTop from './images/mansTop.png';
import mansBottom from './images/mansBottom.png';
import mansHand from './images/mansHand.png';
import mansFoot from './images/mansFoot.png';
import mansLegs from './images/mansLegs.png';
import { React, useState } from 'react';

function App() {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const shake = () => {
    setIsMouseOn(!isMouseOn);
  }

  return (
    <div className="page">
      <div className="parallax">
        <div className="parallax-layer parallax-image">
          <div className="image-container">
            <img src={mansTop} alt="выше пояса" className="mansTop" />
            <img src={mansBottom} alt="ниже пояса" className="mansBottom" />
            <img src={mansHand} alt="рука" className={`mansHand ${isMouseOn && "shake-hand"}`} />
            <img src={mansFoot} alt="ступня" className={`mansFoot ${isMouseOn && "shake-foot"}`} />
            <img src={mansLegs} alt="ноги" className="mansLegs" />
          </div>
        </div>
        <div className="parallax-layer parallax-calculator">
          <main className="main">
            <div className="calculator" onMouseOver={shake} onMouseOut={shake}>
              <div className="items"></div>
              <div className="participants"></div>
            </div>
          </main>
          <footer className="footer">
            footer
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
