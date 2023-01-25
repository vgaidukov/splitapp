import './App.css';
import { React, useState } from 'react';
import Image from '../Image/Image';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Calculator from '../Calculator/Calculator';
import Main from '../Main/Main';
import { ParticipantsContext } from '../../context/ParticipantsContext';

function App() {
  const [widthIndex, setWidthIndex] = useState(2)
  const [isMouseOn, setIsMouseOn] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(false);
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
    setIsSpeaker(true);
    setTimeout(() => {
      setParticipants([...participants, participant]);
    }, 200);
    setTimeout(() => {
      setIsSpeaker(false);
    }, 500);
  }

  const deleteParticipant = (deletedId) => {
    // console.log(participants.length);
    const newParticipants = participants.filter((el) => {
      return el.id.toString() !== deletedId;
    });
    setTimeout(() => {
      setParticipants(newParticipants);
      setWidthIndex(widthIndex - 1);
    }, 500);

  }

  return (
    <ParticipantsContext.Provider value={{ participants }}>
      <div className="page">
        <div className="parallax">
          <div className="parallax-layer parallax-image">
            <Image isMouseOn={isMouseOn} isSpeaker={isSpeaker} />
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
    </ParticipantsContext.Provider>
  );
}

export default App;
