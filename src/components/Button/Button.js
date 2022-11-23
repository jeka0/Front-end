import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <button className = {props.className} name = {props.name} onClick = {props.onClick}>
            {props.children}
        </button>
    );
  }
  
export default Button;