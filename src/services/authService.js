import { request } from "./requestService";
const posts = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11}];

export const reqLogin = async (body) => {
  const { data } = await request({
    method: 'POST',
    url: '/auth/login',
    data: body,
  })
  localStorage.setItem('tokens', JSON.stringify(data));
};

export const reqRegister = async (body) => {
  const { data } = await request({
    method: 'POST',
    url: '/auth/register',
    data: body,
  })
  console.log(data);
};

export const getPosts = () => {
  return posts;
}

export const getPostById = (id) => {
  return posts.find((post)=>post.id===Number(id));
}
