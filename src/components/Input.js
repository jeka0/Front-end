import React from 'react';
import '../styles/Input.css';

function Input(props) {
    return (
      <input type = {props.type} name = {props.name} placeholder ={props.placeholder} onChange={props.onChange} />
    );
  }
  
export default Input;