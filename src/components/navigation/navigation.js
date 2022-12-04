import React from 'react';
import { Button } from '@material-ui/core';
import { useAuth } from '../../auth/useAuth';
import Container from '../container/container.js';
import UserInfo from '../userInfo/userInfo';
import './navigation.css';

function Navigation(props) {
  const { logout } = useAuth();  
    return (
      <Container className="navigation">
        <UserInfo/>
        <Button onClick = { logout }>logout</Button>
      </Container>
    );
  }
  
  export default Navigation;