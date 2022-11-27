import { request } from "./requestService";

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