import React from 'react';
import './postContent.css';

function Content(props) {
  const url ='http://localhost:3000/api/image/';
  
    return (
        <div className={'content ' + props.className} onClick = {props.onClick}>
            <img src={url + props.data.image} alt="test" />
      </div>
    );
  }
  
  export default Content;