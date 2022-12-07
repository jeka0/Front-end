import React from 'react';
import './postChat.css';

function Chat(props) {

    return (
        <div className={'chat ' + props.className} onClick = {props.onClick}>
            <p>{props.data.message}</p>
      </div>
    );
  }
  
  export default Chat;