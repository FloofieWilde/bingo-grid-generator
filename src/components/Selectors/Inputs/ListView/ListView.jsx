import React from 'react';
import PropTypes from 'prop-types';
import './ListView.css';
import {MdDelete} from 'react-icons/md';

const ListView = ({type, val, setter}) => {
  const deleteEntry = (txt) => {
    const id = val.indexOf(txt);
    console.log(txt, id);
    setter(val.filter((_, index) => index !== id));
    console.log(val);
  };

  return (
    <div className='text-box'>
      {val.map((txt, index) => {
        return <div className='text-line' key={index}>
          <span>{txt}</span>
          <MdDelete className='delete-button' onClick={() => {
            deleteEntry(txt);
          }}/>
        </div>;
      })}
    </div>
  );
};

ListView.propTypes = {
  type: PropTypes.string.isRequired,
  val: PropTypes.arrayOf(
      PropTypes.string,
  ).isRequired,
  setter: PropTypes.func.isRequired,
};


export default ListView;
