import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Block from "../components/Block.js";
import Input from '../components/Input.js';
import Button from '../components/Button.js';
import '../styles/Area.css';

function Login() {
  const [form,setForm] = useState({})

  let handelClick = ()=>{
    console.log( JSON.stringify(form) );
  }

  let updateForm = (event)=>setForm({...form, [event.target.name] : event.target.value})

    return (
        <div className="Area">
            <Block className='Block' name="Sign in">
                <Input type = {"email"} name = {"email"} placeholder ={"Enter email"} required onChange = {updateForm}/>
                <Input type = {"password"}  name = {"password"} placeholder ={"Enter password"} required onChange = {updateForm}/>
                <Button name={"send"} onClick ={handelClick}>Send</Button>
                <Link to="/signUp">
                  <Button name={"link"}>Sign up</Button>
                </Link>
            </Block>
      </div>
    );
  }
  
  export default Login;