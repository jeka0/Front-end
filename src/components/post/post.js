import React from 'react';
import Container from '../container/container.js';
import Content from '../postContent/postContent.js';
import Header from '../postHeader/postHeader.js';
import Action from '../postAction/postAction.js';
import Chat from '../postChat/postChat.js';
import { useNavigate } from "react-router-dom";
import './post.css';

function Post(props) {
  const navigate = useNavigate();
  const nav = ()=>{
    navigate(`/post/${props.data.id}`);
  }

    return (
      <Container className="post-container">
        <Header />
        <Content data={props.data} onClick={nav} />
        <Action />
        <Chat data={props.data} onClick={nav} />
      </Container>
    );
  }
  
  export default Post;