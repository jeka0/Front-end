import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import { useAuth } from '../auth/useAuth.js';

function Home() {
  const { logout } = useAuth();  
      return (
        <div>
            <h1>OK</h1>
            <Link to ="/sign-In">
            <Button >Sign in</Button>
          </Link>
          <Link to = "/sign-Up">
            <Button >Sign up</Button>
          </Link>
          <Button onClick = { logout }>logout</Button>
        </div>
      );
    }
    
    export default Home;