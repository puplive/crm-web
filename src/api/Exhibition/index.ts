import request from "@/utils/request";
// import type { UserType } from './types'

const prefix = "/api/web/v1";
export const add = (): Promise<any> => {
  return request({
    url: prefix + "/exhibition/info/add",
    method: "post",
  });
}

export const edit = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/info/edit",
    method: "post",
    data,
  });
}

export const _delete = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/info/delete",
    method: "post",
    data,
  });
}

export const setStatus = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/info/setStatus",
    method: "post",
    data,
  });
}

export const exhibitionList = (): Promise<any> => {
  return request({
    url: prefix + "/exhibition/info/getList",
    method: "get",
  });
}
export const hallData = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/hall/getData",
    method: "get",
    data,
  });
}
export const cityList = (): Promise<any> => {
  return request({
    url: prefix + "/exhibition/city/list",
    method: "get"
  });
}