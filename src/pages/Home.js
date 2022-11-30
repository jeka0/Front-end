import React from 'react';
import { Button } from '@material-ui/core';
import { useAuth } from '../auth/useAuth.js';
import Background from '../components/background/background.js';
import Container from '../components/container/container.js';
import List from '../components/postList/postList.js';
import { getPosts } from '../services/authService.js';
import '../styles/Home.css'

function Home() {
  const { logout } = useAuth();  
  const posts = getPosts();
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