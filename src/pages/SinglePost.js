import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Background from '../components/background/background.js';
import Container from '../components/container/container.js';
import Chat from '../components/postChat/postChat.js';
import Content from '../components/postContent/postContent.js';
import Header from '../components/postHeader/postHeader.js';
import Action from '../components/postAction/postAction.js';
import { getPostById } from '../services/postService.js';
import '../styles/SinglePost.css'

function SinglePost() {
    const { id } = useParams();
    const [postData, setPostData] = useState();

    useEffect(()=> {
      init();
    }, [])
  
    const init = async ()=>{
      setPostData(await getPostById(id));
    }

    if(!postData) return (<div>Loading</div>)

      return (
        <Background className="single-post-background">
            <Container className="single-post-container">
                <Content className="single-post-content" data={postData} />
                <div className="subcontainer">
                    <Header className="single-post-header" data={postData}/>
                    <Chat className="single-post-chat" data={postData} />
                    <Action className="single-post-action" />
                </div>
            </Container>
        </Background>
      );
    }
    
export default SinglePost;