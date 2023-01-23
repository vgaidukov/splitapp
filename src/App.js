import './App.css';
import { React, useState } from 'react';
import Image from './components/Image/Image';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Calculator from './components/Calculator/Calculator';
import Main from './components/Main/Main';

function App() {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const trackMouse = () => {
    setIsMouseOn(!isMouseOn);
  }

  return (
    <div className="page">
      <div className="parallax">
        <div className="parallax-layer parallax-image">
          <Image isMouseOn={isMouseOn} />
        </div>
        <div className="parallax-layer parallax-calculator">
          <div className="container">
            <Header />
            <Main>
              <Calculator trackMouse={trackMouse} />
            </Main>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
