import request from "@/utils/request";
// import type { UserType } from './types'

const prefix = "/web/v1";

export const getHallInfo = (params: any): Promise<any> => {
  return request({
    url: prefix + "/order/position/getHallInfo",
    method: "get",
    params,
  });
}
export const getExhibitionInfo = (params: any): Promise<any> => {
  return request({
    url: prefix + "/order/position/getExhibitionInfo",
    method: "get",
    params,
  });
}

export const booth = {
  getList: (params: any): Promise<any> => {
    return request({
      url: prefix + "/order/position/getList",
      method: "get",
      params,
    });
  },
  getDetail: (params: any): Promise<any> => {
    return request({
      url: prefix + "/order/position/getDetail",
      method: "get",
      params,
    });
  },
  get: (params: any): Promise<any> => {
    return request({
      url: prefix + "/order/position/get",
      method: "get",
      params,
    });
  },
  create: (data: any): Promise<any> => {
    return request({
      url: prefix + "/order/position/create",
      method: "post",
      data,
    });
  },

  del: (data: any): Promise<any> => {
    return request({
      url: prefix + "/order/position/delete",
      method: "post",
      data,
    });
  },
  revoke: (data: any): Promise<any> => {
    return request({
      url: prefix + "/order/position/revoke",
      method: "post",
      data,
    });
  },
  getSearchField: (): Promise<any> => {
    return request({
      url: prefix + "/order/position/getSearchField",
      method: "get",
    });
  },
  receipt: (data: any): Promise<any> => {
    return request({
      url: prefix + "/contract/orderPosition/receipt",
      method: "post",
      data,
    });
  },
  export: (data: any): Promise<any> => {
    return request({
      url: prefix + "/order/position/export",
      method: "post",
      data,
    });
  },


}

export const goods = {
  getList: (params: any): Promise<any> => {
    return request({
      url: prefix + "/order/material/getList",
      method: "get",
      params,
    });
  },
  getMaterial: (params: any): Promise<any> => {
    return request({
      url: prefix + "/order/material/getMaterial",
      method: "get",
      params,
    });
  },
  addCart: (data: any): Promise<any> => {
    return request({
      url: prefix + "/order/material/addCart",
      method: "post",
      data,
    });
  },
  editCart: (data: any): Promise<any> => {
    return request({
      url: prefix + "/order/material/editCart",
      method: "post",
      data,
    });
  },
  delCart: (data: any): Promise<any> => {
    return request({
      url: prefix + "/order/material/delCart",
      method: "post",
      data,
    });
  },
  getCart: (params: any): Promise<any> => {
    return request({
      url: prefix + "/order/material/getCart",
      method: "get",
      params,
    });
  },
  create: (data: any): Promise<any> => {
    return request({
      url: prefix + "/order/material/create",
      method: "post",
      data,
    });
  },
  del: (data: any): Promise<any> => {
    return request({
      url: prefix + "/order/material/delete",
      method: "post",
      data,
    });
  },
  revoke: (data: any): Promise<any> => {
    return request({
      url: prefix + "/order/material/revoke",
      method: "post",
      data,
    });
  },
  getSearchField: (): Promise<any> => {
    return request({
      url: prefix + "/order/material/getSearchField",
      method: "get",
    });
  },
  getDetail: (params: any): Promise<any> => {
    return request({
      url: prefix + "/order/material/getDetail",
      method: "get",
      params
    });
  },
}
