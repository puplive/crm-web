import request from "@/utils/request";
// import type { UserType } from './types'

const prefix = "/web/v1";

export const getGoodsList = (params:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/material/getList",
    method: "get",
    params,
  });
}
export const addGoods = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/material/add",
    method: "post",
    data,
  });
}

export const editGoods = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/material/edit",
    method: "post",
    data,
  });
}

export const delGoods = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/material/delete",
    method: "post",
    data,
  });
}

export const getSetting = (params:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/material/getSetting",
    method: "get",
    params,
  });
}

export const getGoodsListSetting = (params:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/materialSetting/getList",
    method: "get",
    params,
  });
}

export const addGoodsSetting = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/materialSetting/add",
    method: "post",
    data,
  });
}
export const editGoodsSetting = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/materialSetting/edit",
    method: "post",
    data,
  });
}
export const delGoodsSetting = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/materialSetting/delete",
    method: "post",
    data,
  });
}
export const setStatusGoodsSetting = (data:any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/materialSetting/setStatus",
    method: "post",
    data,
  });
}

// export const goodsListApi = (params:any): Promise<any> => {
//   return request({
//     url: prefix + "/exhibition/materialSetting/getList",
//     method: "get",
//     params,
//   });
// }


