import React from 'react';
import image from '../../img/test.jpg'
import './postContent.css';

function Content(props) {

    return (
        <div className={'content ' + props.className} onClick = {props.onClick}>
            <img src={image} alt="test" />
      </div>
    );
  }
  
  export default Content;