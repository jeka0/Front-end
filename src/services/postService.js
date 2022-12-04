import { request } from "./requestService";

export const getPosts = async () => {
    const { data } = await request({
        method: 'GET',
        url: '/post/all'
    });
    
    return data;
  }
  
  export const getPostById = async (id) => {
    const { data } = await request({
        method: 'GET',
        url: `/post/${id}`
    });
    return data;
  }