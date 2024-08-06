import request from "@/utils/request";
// import type { UserType } from './types'

const prefix = "/web/v1";

export const boothList = (params: any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/position/getList",
    method: "get",
    params,
  });
}
export const boothAdd = (data: any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/position/add",
    method: "post",
    data,
  });
}

export const boothEdit = (data: any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/position/edit",
    method: "post",
    data,
  });
}

export const boothDelete = (data: any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/position/delete",
    method: "post",
    data,
  });
}

export const boothImport = (data: any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/position/import",
    method: "post",
    // headers: {
    //   "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundarynl6gT1BKdPWIejNq",
    // },
    data,
  });
}
export const getImportTemplate = (params: any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/position/getImportTemplate",
    method: "get",
    params,
  });
}

export const boothExport = (data: any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/position/export",
    method: "post",
    data,
  });
}

export const getPosition = (params: any): Promise<any> => {
  return request({
    url: prefix + "/exhibition/position/getPosition",
    method: "get",
    params,
  });
}

