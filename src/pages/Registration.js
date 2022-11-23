import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Block from "../components/Block/Block.js";
import Input from '../components/Input/Input.js';
import Button from '../components/Button/Button.js';
import { useAuth } from '../auth/useAuth.js';
import '../styles/Area.css';

function Registration() {
  const [form, setForm] = useState({})
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (event)=>{
    event.preventDefault();
    login(form);
    navigate("/home")
    console.log( JSON.stringify(form) );
  }

  let updateForm = (event)=>setForm({...form, [event.target.name] : event.target.value})
    return (
      <form onSubmit = {onSubmit} className ='Area'>
        <Block className = 'Block' name= "Sign up">
          <Input className = "AuthInput" type = "email" name = "email" placeholder = "Enter email" required onChange = {updateForm}/>
          <Input className = "AuthInput" type = "text"  name = "firstName" placeholder = "Enter first name" onChange = {updateForm}/>
          <Input className = "AuthInput" type = "text" name = "lastName" placeholder = "Enter last name" onChange = {updateForm}/>
          <Input className = "AuthInput" type = "password"  name = "password" placeholder = "Enter password" required onChange = {updateForm}/>
          <Button className = "AuthButt" name = "submit">Send</Button>
          <Link to ="/sign-In">
            <Button className = "AuthButt" name = "link">Sign in</Button>
          </Link>
        </Block>
      </form>
    );
  }
  
  export default Registration;