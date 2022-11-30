import React from 'react';
import './postList.css'
import Post from '../post/post';

function List(props) {
    const postList = props.list;

    const listElements = postList.map((post)=>
      <Post className='post' key={post.id} data={post} ></Post>
    )
    return (
      <div className={'list ' + props.className}>
        {listElements}
      </div>
    );
  }
  
  export default List;