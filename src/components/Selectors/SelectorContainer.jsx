import React, {useState} from 'react';
import './SelectorContainer.css';
import ListView from './Inputs/ListView/ListView';
import TextInput from './Inputs/TextInput/TextInput';

const SelectorContainer = () => {
  const [Sentences, setSentences] = useState(['test']);
  const [Players, setPlayers] = useState([]);
  return (
    <div className='container'>
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
    </div>
  );
};

export default SelectorContainer;
