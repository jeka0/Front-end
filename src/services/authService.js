import { request, getSessionFromStorage } from "./requestService";
import { useAuth } from '../auth/useAuth'; 

export const reqLogin = async (body) => {
  const { data } = await request({
    method: 'POST',
    url: '/auth/login',
    data: body,
  });
  localStorage.setItem('tokens', JSON.stringify(data));
};

export const reqRegister = async (body) => {
  await request({
    method: 'POST',
    url: '/auth/register',
    data: body,
  });
};

export const reqRefresh = async ()=>{
  const { logout } = useAuth(); 
  const { refreshToken } = getSessionFromStorage() || {};
  request({
    method: 'POST',
    url: '/auth/login',
    data: {refreshToken},
  })
  .then((data)=>localStorage.setItem('tokens', JSON.stringify(data)))
  .catch((err)=>logout());
}
