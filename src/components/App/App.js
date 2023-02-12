import './App.css';
import { React, useState } from 'react';
import Image from '../Image/Image';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Calculator from '../Calculator/Calculator';
import Main from '../Main/Main';
import { ParticipantsContext } from '../../context/ParticipantsContext';

function App() {
  const [isMouseOnCalc, setIsMouseOnCalc] = useState(false);
  const [isMouseOnTitle, setIsMouseOnTitle] = useState(false);
  const [participants, setParticipants] = useState([
    {
      name: "Участник 1",
      id: 1,
      total: "101",
    },
    {
      name: "Участник 2",
      id: 2,
      total: "102",
    }
  ]);

  const [items, setItems] = useState([
    {
      "name": "Пиво",
      "amount": 2000,
      "paid": "1",
      "participants": {
        "1": 500,
        "2": 1500,
      },
      "id": 1,
    },
    {
      "name": "Вино",
      "amount": 2000,
      "paid": "1",
      "participants": {
        "1": 500,
        "2": 1500,
      },
      "id": 2,
    },
    {
      "name": "Водка",
      "amount": 2000,
      "paid": "1",
      "participants": {
        "1": 500,
        "2": 1500,
      },
      "id": 3,
    },
  ]);

  const trackMouseOnCalc = () => {
    setIsMouseOnCalc(!isMouseOnCalc);
  }

  const trackMouseOnTitle = () => {
    setIsMouseOnTitle(!isMouseOnTitle);
  }

  const addParticipant = (participant) => {
    setParticipants([...participants, participant]);
  }

  const deleteParticipant = (deletedId) => {
    const newParticipants = participants.filter((el) => {
      return el.id.toString() !== deletedId;
    });

    setTimeout(() => {
      setParticipants(newParticipants);
    }, 600);

  }

  return (
    <ParticipantsContext.Provider value={{ participants, items }}>
      <div className="page">
        <div className="parallax">
          <div className="parallax-layer parallax-image">
            <Image
              isMouseOnTitle={isMouseOnTitle}
              isMouseOnCalc={isMouseOnCalc}
            />
          </div>
          <div className="parallax-layer parallax-calculator">
            <div className="container">
              <Header trackMouseOnTitle={trackMouseOnTitle} />
              <Main>
                <Calculator
                  trackMouseOnCalc={trackMouseOnCalc}
                  participants={participants}
                  addParticipant={addParticipant}
                  deleteParticipant={deleteParticipant}
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
