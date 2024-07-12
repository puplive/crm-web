import request from "@/utils/request";
// import type { UserType } from './types'
import _rules from "@/utils/rules";

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

export const customFieldDel = (data:any): Promise<any> => {
  return request({
    url: prefix + "/sales/customField/delete",
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

export const customFieldTypes:any = {
  1: {type: 1, label: '单行文本', value: '', rules: _rules.required},
  2: {type: 2, label: '多行文本', value: '', rules: _rules.required},
  3: {type: 3, label: '下拉', value: '', rules: _rules.required},
  4: {type: 4, label: '单选', value: '', rules: _rules.select},
  5: {type: 5, label: '多选', value: [], rules: _rules.notEmptyArray},
  6: {type: 6, label: '多级单选', value: '', rules: _rules.select},
  7: {type: 7, label: '多级多选', value: [], rules: _rules.notEmptyArray},
}

export default {
  getList,
  getChild,
  add,
  edit,
  customFieldDel,
  del,
  addChild,
  editChild,
  setEnable,
  setRequired,
  customFieldTypes
};