import React from 'react';
import { useAuth } from '../../auth/useAuth';
import image from '../../img/avatar.jpg'
import './userInfo.css';

function UserInfo(props) {
  const { user } = useAuth();  
  const url ='http://localhost:3000/api/image/';
  const imageUrl = user.image? url + user.image : image;
    return (
      <div className='userInfo'>
        <img src={imageUrl} alt="test" />
        <h3>
            {user.email}
        </h3>
      </div>
    );
  }
  
  export default UserInfo;