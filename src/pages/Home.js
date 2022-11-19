import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/Button.js';

function Home() {
    
      return (
        <div>
            <h1>OK</h1>
            <Link to ="/sign-In">
            <Button >Sign in</Button>
          </Link>
          <Link to = "/sign-Up">
            <Button >Sign up</Button>
          </Link>
        </div>
      );
    }
    
    export default Home;