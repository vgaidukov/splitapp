import './App.css';
import { React, useState } from 'react';
import Image from './components/Image/Image';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Calculator from './components/Calculator/Calculator';
import Main from './components/Main/Main';

function App() {
  const [widthIndex, setWidthIndex] = useState(2)
  const [isMouseOn, setIsMouseOn] = useState(false);
  const [participants, setParticipants] = useState([
    {
      name: "Участник 1",
      id: 1
    },
    {
      name: "Участник 2",
      id: 2
    }
  ]);

  const trackMouse = () => {
    setIsMouseOn(!isMouseOn);
  }

  const addParticipant = (participant) => {
    setWidthIndex(widthIndex + 1);
    setTimeout(() => {
      setParticipants([...participants, participant]);
    }, 200);
  }

  const deleteParticipant = (deletedId) => {
    if (participants.length > 2) {
      const newParticipants = participants.filter((el) => {
        return el.id.toString() !== deletedId;
      });
      setTimeout(() => {
        setParticipants(newParticipants);
        setWidthIndex(widthIndex - 1);
      }, 500);
    }
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
              <Calculator
                trackMouse={trackMouse}
                participants={participants}
                addParticipant={addParticipant}
                deleteParticipant={deleteParticipant}
                widthIndex={widthIndex}
              />
            </Main>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
