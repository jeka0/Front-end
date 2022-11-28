import React from 'react';
import image from '../../img/me_test.jpg'
import './postHeader.css';

function Header(props) {

    return (
        <div className='header'>
            <img src={image} alt="test" />
            <p>Some user</p>
        </div>
    );
  }
  
  export default Header;