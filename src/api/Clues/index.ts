import request from "@/utils/request";
// import type { UserType } from './types'

const prefix = "/web/v1";

const getList = (params:any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/getList",
    method: "get",
    params,
  });
}

const getData = (params:any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/getData",
    method: "get",
    params,
  });
}

const add = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/add",
    method: "post",
    data,
  });
}

const edit = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/edit",
    method: "post",
    data,
  });
}

const del = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/delete",
    method: "post",
    data,
  });
}

const changeUser = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/changeUser",
    method: "post",
    data,
  });
}

const changeIntention = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/changeIntention",
    method: "post",
    data,
  });
}

const changePublic = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/changePublic",
    method: "post",
    data,
  });
}

const getCountry = (): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/getCountry",
    method: "get",
  });
}

const getProvince = (params:any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/getProvince",
    method: "get",
    params,
  });
}

const getCity = (params:any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/getCity",
    method: "get",
    params,
  });
}

const getCustomField = (): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/getCustomField",
    method: "get",
  });
}

export default {
  getList,
  getData,
  add,
  edit,
  del,
  changeUser,
  changeIntention,
  changePublic,
  getCountry,
  getProvince,
  getCity,
  getCustomField,
};