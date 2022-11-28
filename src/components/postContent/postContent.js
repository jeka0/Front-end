import React from 'react';
import image from '../../img/test.jpg'
import './postContent.css';

function Content(props) {

    return (
        <div className='content'>
            <img src={image} alt="test" />
            <p>id : {props.data.id}</p>
      </div>
    );
  }
  
  export default Content;