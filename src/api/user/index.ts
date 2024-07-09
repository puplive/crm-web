import request from "@/utils/request";
import type { UserLoginType } from './types'

const prefix = "/web/v1";
export const loginApi = (data: UserLoginType): Promise<any> => {
  return request({
    url: prefix + "/auth/login", // "/auth/account/login",
    method: "post",
    data,
  });
}

// export const loginOutApi = (): Promise<any> => {
//   return request({
//     url: prefix + "/user/list",
//     method: "get",
//   });
// }

export const registerApi = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibitor/info/register",
    method: "post",
    data,
  });
}

export const sendSmsApi = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibitor/info/sendSms",
    method: "post",
    data,
  });
}

// 定义一个函数，用于获取用户列表
export const getUser = (): Promise<any> =>{
  return request({
    url: "/user/list",
    method: "get",
  });
}

// menu
export const getMenu = (): Promise<any> =>{
  return request({
    url: "/auth/menu/getList",
    method: "get",
  });
}