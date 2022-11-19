import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Block from "../components/Block.js";
import Input from '../components/Input.js';
import Button from '../components/Button.js';
import '../styles/Area.css';

function Login() {
  const [form,setForm] = useState({})

  const onSubmit = (event)=>{
    event.preventDefault();
    console.log( JSON.stringify(form) );
  }

  let updateForm = (event)=>setForm({...form, [event.target.name] : event.target.value})

    return (
        <form onSubmit = {onSubmit} className = "Area">
            <Block className = 'Block' name = "Sign in">
                <Input className = "AuthInput" type = "email" name = "email" placeholder = "Enter email" required onChange = {updateForm}/>
                <Input className = "AuthInput" type = "password"  name = "password" placeholder = "Enter password" required onChange = {updateForm}/>
                <Button className = "AuthButt" name = "submit">Send</Button>
                <Link to = "/sign-Up">
                  <Button className = "AuthButt" name = "link">Sign up</Button>
                </Link>
            </Block>
      </form>
    );
  }
  
  export default Login;