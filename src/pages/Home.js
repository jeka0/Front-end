import React, { useEffect, useState } from 'react';
import Background from '../components/background/background.js';
import Navigation from '../components/navigation/navigation.js';
import List from '../components/postList/postList.js';
import { getPosts } from '../services/postService.js';
import '../styles/Home.css'

function Home() {
  const [posts, setPosts] = useState();

  useEffect(()=> {
    init();
  }, [])

  const init = async ()=>{
    setPosts(await getPosts());
  }

  if(!posts) return (<div>Loading</div>)

      return (
        <Background className="home-background">
          <Navigation />
          <div className='home-content'>
            <List list={posts} className='home-list'/>
          </div>
        </Background>
      );
    }
    
    export default Home;