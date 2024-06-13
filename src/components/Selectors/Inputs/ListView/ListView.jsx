import React from 'react';
import PropTypes from 'prop-types';
import './ListView.css';
import {MdDelete} from 'react-icons/md';

const ListView = ({type, val}) => {
  return (
    <div className='text-box'>
      {val.map((txt, index) => {
        return <div className='text-line' key={index}>
          <span>{txt}</span>
          <MdDelete className='delete-button'/>
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
};


export default ListView;
