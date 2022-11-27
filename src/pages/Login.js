import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { TextField, Box, Button, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useAuth } from '../auth/useAuth.js';
import { validateEmail, validatePassword } from "../halpers/validation";
import Container from '../components/container/container.js';
import Background from '../components/background/background.js';
import '../styles/Area.css';

function Login() {
  const [form, setForm] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [errorForm, setError] = useState({
    emailError:{
      isValid: false,
      message: ""
    },
    passwordError:{
      isValid: false,
      message: ""
    }
  });

  const { login }= useAuth();
  const navigate = useNavigate();
  const valid = {
    isValid: true,
    message: ""
  };
  
  const togglePasswordVisibility =()=>{
    setShowPassword(!showPassword);
  }

  const onSubmit = (event)=>{
    event.preventDefault();
    login(form)
    .then(()=>navigate("/home"))
    .catch((err)=>{
      const error = {
        isValid: false,
        message: "Wrong email or password"
      };
      setError({ passwordError: error, emailError: error });
    });
  }

  useEffect(()=>{
    if(errorForm.emailError.message === "Wrong email or password") setError({...errorForm, emailError: valid});
    if(errorForm.passwordError.message === "Wrong email or password") setError({...errorForm, passwordError: valid});
  },[form])

  const updateForm = async (event)=>{
    if(event.target.name==="email") setError({...errorForm, emailError: validateEmail(event.target.value)});
    if(event.target.name==="password") setError({...errorForm, passwordError: validatePassword(event.target.value)});
    setForm({...form, [event.target.name] : event.target.value})
  }

  return (
    <Background>
      <Container>
        <h1><strong>Sign in</strong></h1>
        <Box className = "margin">
          <TextField 
            className = "mat-Input"
            type = "email" 
            name = "email" 
            label = "Email"
            placeholder = "Enter email" 
            variant = "standard" 
            error={!errorForm.emailError.isValid && errorForm.emailError.message !== ''} 
            helperText={errorForm.emailError.message} 
            required 
            onChange = {updateForm}
          />
        </Box>
        <Box className = "margin">
          <TextField 
            className = "mat-Input" 
            type = {showPassword ? "text" : "password"}  
            name = "password" 
            label = "Password" 
            placeholder = "Enter password" 
            variant = "standard" 
            error={!errorForm.passwordError.isValid && errorForm.passwordError.message !== ''} 
            helperText={errorForm.passwordError.message} 
            required 
            onChange = {updateForm}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    className='icon'
                    size='small'
                    onClick={togglePasswordVisibility}>
                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
        <Box className = "margin">
          <Button 
            className = "mat-Button custom" 
            name = "submit" 
            disabled = {!errorForm.emailError.isValid || !errorForm.passwordError.isValid} 
            variant = "contained" 
            onClick={onSubmit}
            >
            Send
          </Button>
        </Box>
        <Box className = "margin">
          <Link to="/sign-Up"> 
            <Button 
              className = "mat-Button" 
              name = "link" 
              variant = "text"
              >
              Sign up
            </Button>
          </Link> 
        </Box>
      </Container>
    </Background>
  );
}
  
export default Login;