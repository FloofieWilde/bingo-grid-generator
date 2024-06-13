import React from 'react';
import PropTypes from 'prop-types';
import './BingoGrid.css';

const BingoGrid = ({data}) => {
  return (
    <div className="bingo-grid">
      {data.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} className="bingo-cell">
            {cell}
          </div>
        ))
      ))}
    </div>
  );
};

BingoGrid.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
          ]),
      ),
  ).isRequired,
};

export default BingoGrid;
