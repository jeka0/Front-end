import React from 'react';
import './postList.css'
import Post from '../post/post';

function List(props) {
    return (
      <div className={'list ' + props.className}>
        {props.list.map((post)=> <Post className='post' key={post.id} data={post} /> )}
      </div>
    );
  }
  
  export default List;