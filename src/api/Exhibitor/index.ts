import request from "@/utils/request";
// import type { UserType } from './types'

const prefix = "/web/v1";

export const exhibitorList = (): Promise<any> => {
  return request({
    url: prefix + "/exhibitor/info/getList",
    method: "get",
  });
}
export const getExhibitor = (): Promise<any> => {
  return request({
    url: prefix + "/exhibitor/account/getExhibitor",
    method: "get",
  });
}

export const getList = (params: any): Promise<any> => {
  return request({
    url: prefix + "/exhibitor/account/getList",
    method: "get",
    params,
  });
}

export const getSearchField = (): Promise<any> => {
  return request({
    url: prefix + "/exhibitor/account/getSearchField",
    method: "get",
  });
}

export const add = (data: any): Promise<any> => {
  return request({
    url: prefix + "/exhibitor/account/add",
    method: "post",
    data,
  });
}

export const edit = (data: any): Promise<any> => {
  return request({
    url: prefix + "/exhibitor/account/edit",
    method: "post",
    data,
  });
}

export const del = (data: any): Promise<any> => {
  return request({
    url: prefix + "/exhibitor/account/delete",
    method: "post",
    data,
  });
}

export const verify = (data: any): Promise<any> => {
  return request({
    url: prefix + "/exhibitor/account/verify",
    method: "post",
    data,
  });
}

export const getDetail = (params: any): Promise<any> => {
  return request({
    url: prefix + "/exhibitor/account/getDetail",
    method: "get",
    params,
  });
}

export default {
  exhibitorList,
  getExhibitor,
  getList,
  getSearchField,
  add,
  edit,
  del,
  verify,
  getDetail,
}

