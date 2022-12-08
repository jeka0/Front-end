import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../components/background/background.js';
import Container from '../components/container/container.js';
import Content from '../components/postContent/postContent.js';
import { IconButton } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import image from '../img/no-image.jpg'
import { createPost } from '../services/postService.js';
import { Button, TextField } from '@material-ui/core';

import '../styles/createPost.css'

function CreatePost() {
    const [nowImage, setImage] = useState();
    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState();
    const navigate = useNavigate();
    const fileReader = new FileReader();

    fileReader.onloadend = ()=>{
        setImageUrl(fileReader.result);
    }

    const changeImage = (e)=>{
        
        const file =  e.target.files[0];
        setImage(file);
        fileReader.readAsDataURL(file);
    }

    const goBack = ()=>{
        navigate(-1);
      }

    const send = ()=>{
        if(nowImage){
            const formdata = new FormData();
            formdata.append('image', nowImage);
            formdata.append('message', message);
            createPost(formdata)
            .then(goBack);
        }
    }

    const changeMessage = (e)=>{
        setMessage(e.target.value !== "" ? e.target.value:null);
    }

      return (
        <Background className="create-post-background">
            <div className='Close'>
              <IconButton
                size='large'
                onClick={goBack}>
                <Clear/>
              </IconButton>
            </div>
            <Container className="create-post-container">
                <Content className="create-post-content" image={imageUrl || image}/>
                <div className="create-subcontainer">
                    <h3>Choose an image</h3>
                    <div className='create-image'>
                        <label htmlFor='fileBut' className='load-file'><b>Load</b></label>
                        <input id="fileBut" type="file" accept="image/*,image/jpeg" hidden onChange={changeImage}/>
                    </div>
                    <div className='create-Input'>
                        <TextField 
                            type = "text" 
                            label = "Message"
                            placeholder = "Enter message" 
                            variant = "standard"
                            onChange={changeMessage} 
                        />
                    </div>
                    <div className='create-send'>
                        <Button onClick={send}>Send</Button>
                    </div>
                </div>
            </Container>
        </Background>
      );
    }
    
export default CreatePost;