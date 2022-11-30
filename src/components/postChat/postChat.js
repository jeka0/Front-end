import React from 'react';
import './postChat.css';

function Chat(props) {

    return (
        <div className={'chat ' + props.className} onClick = {props.onClick}>
            <p>id : {props.data.id}</p>
      </div>
    );
  }
  
  export default Chat;