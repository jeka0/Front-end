import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Block from "../components/Block.js";
import Input from '../components/Input.js';
import Button from '../components/Button.js';
import '../styles/Area.css';

function Registration() {
  const [form,setForm] = useState({})

  let handelClick = ()=>{
    console.log( JSON.stringify(form) );
  }

  let updateForm = (event)=>setForm({...form, [event.target.name] : event.target.value})
    return (
      <div className='Area'>
        <Block className='Block' name="Sign up">
            <Input type = {"email"} name = {"email"} placeholder ={"Enter email"} required onChange = {updateForm}/>
            <Input type = {"text"}  name = {"firstName"} placeholder ={"Enter first name"} onChange = {updateForm}/>
            <Input type = {"text"} name = {"lastName"} placeholder ={"Enter last name"} onChange = {updateForm}/>
            <Input type = {"password"}  name = {"password"} placeholder ={"Enter password"} required onChange = {updateForm}/>
            <Button name={"send"} size={"small"} onClick ={handelClick}>Send</Button>
            <Link to="/signIn">
              <Button name={"link"} size={"small"}>Sign in</Button>
            </Link>
        </Block>
      </div>
    );
  }
  
  export default Registration;