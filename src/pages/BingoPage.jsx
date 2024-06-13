import React from 'react';
import './BingoPage.css';
import BingoGrid from '../components/BingoGrid/BingoGrid';
import SelectorContainer from '../components/Selectors/SelectorContainer';

const BingoPage = () => {
  const data = [
    ['A1', 'B1', 'C1', 'D1', 'E1'],
    ['A2', 'B2', 'C2', 'D2', 'E2'],
    ['A3', 'B3', 'Free Space', 'D3', 'E3'],
    ['A4', 'B4', 'C4', 'D4', 'E4'],
    ['A5', 'B5', 'C5', 'D5', 'E5'],
  ];

  return (
    <div className='main-container'>
      <div className='bingo-container'>
        <div className='bingo-panel'>
          <BingoGrid data={data}/>
        </div>
        <div className='bingo-panel'>
          <SelectorContainer/>
        </div>
      </div>
    </div>
  );
};

export default BingoPage;
