import request from "@/utils/request";
// import type { UserType } from './types'

const prefix = "/api/web/v1";

export const exhibitionData = (params:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/info/getData",
    method: "get",
    params,
  });
}
export const exhibitionAdd = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/info/add",
    method: "post",
    data,
  });
}

export const exhibitionEdit = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/info/edit",
    method: "post",
    data,
  });
}

export const exhibitionDelete = (data:any): Promise<any> => {
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
export const hallData = (params:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/hall/getData",
    method: "get",
    params,
  });
}
export const getCityList = (): Promise<any> => {
  return request({
    url: prefix + "/exhibition/city/getList",
    method: "get"
  });
}

export const getHallImg = (params:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/hall/getImg",
    method: "get",
    params,
  });
}