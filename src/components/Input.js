import React from 'react';
import '../styles/Input.css';

function Input(props) {
    return (
      <input className = {props.className} type = {props.type} name = {props.name} placeholder = {props.placeholder}
       onChange = {props.onChange} required = {props.required} />
    );
  }
  
export default Input;