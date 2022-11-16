import React from 'react';
import '../styles/Block.css'

function Block(props) {
    return (
      <div className="Block">
        <h2>{props.name}</h2>
        {props.children}
      </div>
    );
  }
  
  export default Block;