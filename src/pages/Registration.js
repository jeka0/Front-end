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
        <Block className='Block' name="registration">
            <Input type = {"text"} name = {"login"} placeholder ={"login"} onChange = {updateForm}/>
            <Input type = {"text"}  name = {"firstName"} placeholder ={"firstName"} onChange = {updateForm}/>
            <Input type = {"text"} name = {"lastName"} placeholder ={"lastName"} onChange = {updateForm}/>
            <Input type = {"password"}  name = {"password"} placeholder ={"password"} onChange = {updateForm}/>
            <Button onClick ={handelClick}>Send</Button>
            <Link to="/">login</Link>
        </Block>
      </div>
    );
  }
  
  export default Registration;