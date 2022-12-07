import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../container/container.js';
import Content from '../postContent/postContent.js';
import Header from '../postHeader/postHeader.js';
import Action from '../postAction/postAction.js';
import Chat from '../postChat/postChat.js';
import './post.css';

function Post(props) {

    return (
      <Container className="post-container">
        <Link to={`/user/${props.data.user.id}`}>
          <Header data={props.data}/>
        </Link>
        <Link to={`/post/${props.data.id}`}>
          <Content className="post-content" data={props.data}/>
        </Link>
        <Action />
        <Link to={`/post/${props.data.id}`}>
          <Chat data={props.data}/>
        </Link>
      </Container>
    );
  }
  
  export default Post;