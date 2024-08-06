import request from "@/utils/request";
// import type { UserType } from './types'
// import _rules from "@/utils/rules";

const prefix = "/web/v1";


export const getList = (params: any): Promise<any> => {
  return request({
    url: prefix + "/contract/template/getList",
    method: "get",
    params,
  });
}

// export const add = (data:any): Promise<any> => {
//   return request({
//     url: prefix + "/sales/customField/add",
//     method: "post",
//     data,
//   });
// }

export const getContractData = (params: any): Promise<any> => {
  return request({
    url: prefix + "/order/position/getContractData",
    method: "get",
    params,
  });
}

export const create = (data: any): Promise<any> => {
  return request({
    url: prefix + "/contract/orderPosition/create",
    method: "post",
    data,
  });
}

export const orderContractData = (params: any): Promise<any> => {
  return request({
    url: prefix + "/order/position/getContractData",
    method: "get",
    params,
  });
}

export const edit = (data: any): Promise<any> => {
  return request({
    url: prefix + "/contract/orderPosition/edit",
    method: "post",
    data,
  });
}

export const receipt = (data: any): Promise<any> => {
  return request({
    url: prefix + "/contract/orderPosition/receipt",
    method: "post",
    data,
  });
}

export const revoke = (data: any): Promise<any> => {
  return request({
    url: prefix + "/contract/orderPosition/revoke",
    method: "post",
    data,
  });
}

export const download = (data: any): Promise<any> => {
  return request({
    url: prefix + "/contract/orderPosition/download",
    method: "post",
    data,
  });
}


export default {
  getList,
  getContractData,
  create,
  edit,
  receipt,
  revoke,
  download,
};
