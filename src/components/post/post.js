import React from 'react';
import Container from '../container/container.js';
import Content from '../postContent/postContent.js';
import Header from '../postHeader/postHeader.js';
import Action from '../postAction/postAction.js';
import './post.css';

function Post(props) {

    return (
      <Container className="post-container">
        <Header></Header>
        <Content data={props.data}></Content>
        <Action></Action>
      </Container>
    );
  }
  
  export default Post;