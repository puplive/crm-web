import request from "@/utils/request";
// import type { UserType } from './types'

const prefix = "/web/v1";

export const getList = (): Promise<any> => {
  return request({
    url: prefix + "/sales/customField/getList",
    method: "get",
  });
}

export const getChild = (params:any): Promise<any> => {
  return request({
    url: prefix + "/sales/customFieldData/getList",
    method: "get",
    params,
  });
}

export const add = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/customField/add",
    method: "post",
    data,
  });
}

export const edit = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/customField/edit",
    method: "post",
    data,
  });
}

export const addChild = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/customFieldData/add",
    method: "post",
    data,
  });
}

export const editChild = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/customFieldData/edit",
    method: "post",
    data,
  });
}

export const del = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/customFieldData/delete",
    method: "post",
    data,
  });
}

export const setEnable = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/customField/setEnable",
    method: "post",
    data,
  });
}

export const setRequired = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/customField/setRequired",
    method: "post",
    data,
  });
}

export const types = [
  {label:'单行文本',value:1},
  {label:'多行文本',value:2},
  {label:'下拉',value:3},
  {label:'单选',value:4},
  {label:'多选',value:5},
  {label:'多级单选',value:6},
  {label:'多级多选',value:7}
]


export default {
  getList,
  getChild,
  add,
  edit,
  del,
  addChild,
  editChild,
  setEnable,
  setRequired,
  types
};