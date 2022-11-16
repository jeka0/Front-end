import React from 'react';
import {Link} from "react-router-dom";
import Block from "../components/Block.js";
import Button from '../components/Button.js';
import '../styles/Area.css';

function Home() {

    return (
        <div className="Area">
            <Block className='Block' name="Home">
                <Link to="/signIn">
                    <Button className={"linkBut"}>Sign in</Button>
                </Link>
                <Link to="/signUp">
                  <Button className={"linkBut"}>Sign up</Button>
                </Link>
            </Block>
      </div>
    );
  }
  
  export default Home;