import React, {useState} from 'react';
import './BingoPage.css';
import BingoGrid from '../components/BingoGrid/BingoGrid';
import SelectorContainer from '../components/Selectors/SelectorContainer';

const BingoPage = () => {
  const [Data] = useState([
    ['A1', 'B1', 'C1', 'D1', 'E1'],
    ['A2', 'B2', 'C2', 'D2', 'E2'],
    ['A3', 'B3', 'Free Space', 'D3', 'E3'],
    ['A4', 'B4', 'C4', 'D4', 'E4'],
    ['A5', 'B5', 'C5', 'D5', 'E5'],
  ]);

  const [refresh, setRefresh] = useState(0);

  const generateGrid = (sentences, players) => {
    // const newGrid = Data;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (Data[i][j] !== 'Free Space') {
          Data[i][j] =
            sentences[Math.floor(Math.random() * sentences.length)];
        } else {
          Data[i][j] = 'Free Space';
        }
      }
    }
    // setData(newGrid);
    console.log(Data);
    setRefresh(refresh + 1);
  };

  return (
    <div className='main-container'>
      <div className='bingo-container'>
        <div className='bingo-panel'>
          <BingoGrid key={refresh} data={Data}/>
        </div>
        <div className='bingo-panel'>
          <SelectorContainer generateGrid={(sentence, players) => {
            generateGrid(sentence, players);
          }}/>
        </div>
      </div>
    </div>
  );
};

export default BingoPage;
