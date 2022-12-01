import React from 'react';
import { useNavigate} from "react-router-dom";
import { Button } from '@material-ui/core';
import { useAuth } from '../auth/useAuth.js';
import Background from '../components/background/background.js';
import Container from '../components/container/container.js';
import List from '../components/postList/postList.js';
import { getPosts } from '../services/authService.js';
import '../styles/Home.css'

function Home() {
  const navigate = useNavigate();
  const { logout } = useAuth();  
  const posts = getPosts();
  const onClick = ()=>{
     logout()
     .then(()=>navigate("/sign-In"))
  }
      return (
        <Background className="home-background">
          <Container className="home-container">
            <h1>OK</h1>
            <Button onClick = { onClick }>logout</Button>
          </Container>
          <div className='home-content'>
            <List list={posts} className='home-list'>

            </List>
          </div>
        </Background>
      );
    }
    
    export default Home;