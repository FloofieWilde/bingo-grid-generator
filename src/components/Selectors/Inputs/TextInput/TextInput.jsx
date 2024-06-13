import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

const TextInput = ({val, setter}) => {
  const [Text, setText] = useState('');

  const addText = () => {
    setter([...val, Text]);
    setText('');
  };

  return (
    <div className='text-container'>
      <input className='text-input'
        type="text"
        value={Text}
        onKeyDown={
          (e) => {
            if (e.keyCode === 13) {
              addText();
            }
          }}
        onChange={(e) => {
          setText(e.target.value);
        }}/>
      <div className='add-button' onClick={() => {
        addText();
      }}>Ajouter</div>
    </div>
  );
};

TextInput.propTypes = {
  val: PropTypes.arrayOf(PropTypes.string).isRequired,
  setter: PropTypes.func.isRequired,
};

export default TextInput;
