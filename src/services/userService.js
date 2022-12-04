import { request } from "./requestService";

export const reqGetUser = async ()=>{
    const { data } = await request({
      method: 'GET',
      url: '/user/'
    });
  
    return data;
  }