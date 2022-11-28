import React from 'react';
import { Button } from '@material-ui/core';
import { useAuth } from '../auth/useAuth.js';
import Background from '../components/background/background.js';
import Container from '../components/container/container.js';
import List from '../components/postList/postList.js';
import '../styles/Home.css'

function Home() {
  const { logout } = useAuth();  
  const posts = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]
      return (
        <Background className="home-background">
          <Container className="home-container">
            <h1>OK</h1>
            <Button onClick = { logout }>logout</Button>
          </Container>
          <div className='home-content'>
            <List list={posts} className='home-list'>

            </List>
          </div>
        </Background>
      );
    }
    
    export default Home;