import React from 'react';
import {Link} from "react-router-dom";
import Block from "../components/Block.js";
import Button from '../components/Button.js';
import '../styles/Area.css';
import '../styles/Base.css';

function Base() {

    return (
      <div className= "Area">
        <Block className= 'Block' name= "Home">
            <Link to= "/sign-In">
                <Button className= "linkBut">Sign in</Button>
            </Link>
            <Link to= "/sign-Up">
              <Button className= "linkBut">Sign up</Button>
            </Link>
        </Block>
      </div>
    );
  }
  
  export default Base;