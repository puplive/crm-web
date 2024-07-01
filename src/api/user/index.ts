import request from "@/utils/request";
import type { UserType } from './types'

const prefix = "/api/web/v1";
export const loginApi = (data: UserType): Promise<any> => {
  return request({
    url: prefix + "/auth/account/login",
    method: "post",
    data,
  });
}

export const loginOutApi = (): Promise<any> => {
  return request({
    url: prefix + "/user/list",
    method: "get",
  });
}

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
export const getUser = (): Promise<UserType[]> =>{
  return request({
    url: "/user/list",
    method: "get",
  });
}
