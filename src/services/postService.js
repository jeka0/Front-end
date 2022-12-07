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

export const getUserPosts = async (id) => {
  const { data } = await request({
      method: 'GET',
      url: `/post/user/${id}`
  });
  
  return data;
}

export const createPost = async (body) => {
  await request({
    method: 'POST',
    url: '/post',
    data: body,
  });
};
