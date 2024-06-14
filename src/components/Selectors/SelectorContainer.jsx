import React, {useState} from 'react';
import './SelectorContainer.css';
import ListView from './Inputs/ListView/ListView';
import TextInput from './Inputs/TextInput/TextInput';
import GenerateButton from './Inputs/GenerateButton/GenerateButton';
import Dropdown from './Inputs/Dropdown/Dropdown';

const SelectorContainer = ({generateGrid}) => {
  const [Sentences, setSentences] = useState(['test']);
  const [Players, setPlayers] = useState([]);
  return (
    <div className='container'>
      <Dropdown/>
      <div>&nbsp;</div>
      <ListView type="sentences" val={Sentences} setter={(e) => {
        setSentences(e);
      }}/>
      <TextInput type="sentences" val={Sentences} setter={(e) => {
        setSentences(e);
      }}/>
      <div>&nbsp;</div>
      <ListView type="players" val={Players} setter={(e) => {
        setPlayers(e);
      }}/>
      <TextInput type="players" val={Players} setter={(e) => {
        setPlayers(e);
      }}/>
      <div>&nbsp;</div>
      <GenerateButton generate={() => {
        generateGrid(Sentences, Players);
      }}/>
    </div>
  );
  SelectorContainer.propTypes = {
    generateGrid: PropTypes.func.isRequired,
  };
};

export default SelectorContainer;
