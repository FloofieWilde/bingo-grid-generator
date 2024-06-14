import React from 'react';
import './GenerateButton.css';
import PropTypes from 'prop-types';

const GenerateButton = ({generate}) => {
  return (
    <div
      className='gen-button'
      onClick={() => {
        generate();
      }}>Générer</div>
  );
};

GenerateButton.propTypes = {
  generate: PropTypes.func.isRequired,
};

export default GenerateButton;
