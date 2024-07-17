import request from "@/utils/request";
// import type { UserType } from './types'

const prefix = "/web/v1";

export const getHallInfo = (params:any): Promise<any> => {
  return request({
    url: prefix + "/web/v1/order/position/getHallInfo",
    method: "get",
    params,
  });
}
export const getExhibitionInfo = (params:any): Promise<any> => {
  return request({
    url: prefix + "/web/v1/order/position/getExhibitionInfo",
    method: "get",
    params,
  });
}

export const booth = {
  getList: (params:any): Promise<any> => {
    return request({
      url: prefix + "/web/v1/order/position/getList",
      method: "get",
      params,
    });
  },
  getDetail: (params:any): Promise<any> => {
    return request({
      url: prefix + "/web/v1/order/position/getDetail",
      method: "get",
      params,
    });
  },
  get: (params:any): Promise<any> => {
    return request({
      url: prefix + "/web/v1/order/position/get",
      method: "get",
      params,
    });
  },
  create: (data:any): Promise<any> => {
    return request({
      url: prefix + "/web/v1/order/position/create",
      method: "post", 
      data,
    });
  },
  // update: (data:any): Promise<any> => {
  //   return request({
  //     url: prefix + "/web/v1/order/position/update",
  //     method: "post",
  //     data,
  //   });
  // },
  del: (data:any): Promise<any> => {
    return request({
      url: prefix + "/web/v1/order/position/delete",
      method: "post",
      data,
    });
  },
  revoke: (data:any): Promise<any> => {
    return request({
      url: prefix + "/web/v1/order/position/revoke",
      method: "post",
      data,
    });
  }

}

export const goods = {
  get: (params:any): Promise<any> => {
    return request({
      url: prefix + "/web/v1/order/material/getMaterial",
      method: "get",
      params,
    });
  },
  addCart: (data:any): Promise<any> => {
    return request({
      url: prefix + "/web/v1/order/material/addCart",
      method: "post", 
      data,
    });
  },
  getCart: (data:any): Promise<any> => {
    return request({
      url: prefix + "/web/v1/order/material/getCart",
      method: "post",
      data,
    });
  },
  create: (data:any): Promise<any> => {
    return request({
      url: prefix + "/web/v1/order/material/create",
      method: "post", 
      data,
    });
  },
  del: (data:any): Promise<any> => {
    return request({
      url: prefix + "/web/v1/order/material/delete",
      method: "post",
      data,
    });
  },
  revoke: (data:any): Promise<any> => {
    return request({
      url: prefix + "/web/v1/order/material/revoke",
      method: "post",
      data,
    });
  }
}
