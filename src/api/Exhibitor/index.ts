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

// export const boothAdd = (data:any): Promise<any> => {
//   return request({
//     url: prefix + "/exhibition/position/add",
//     method: "post",
//     data,
//   });
// }

// export const boothEdit = (data:any): Promise<any> => {
//   return request({
//     url: prefix + "/exhibition/position/edit",
//     method: "post",
//     data,
//   });
// }

// export const boothDelete = (data:any): Promise<any> => {
//   return request({
//     url: prefix + "/exhibition/position/delete",
//     method: "post",
//     data,
//   });
// }

// export const boothImport = (data:any): Promise<any> => {
//   return request({
//     url: prefix + "/exhibition/position/import",
//     method: "post",
//     data,
//   });
// }

// export const boothExport = (data:any): Promise<any> => {
//   return request({
//     url: prefix + "/exhibition/position/export",
//     method: "post",
//     data,
//   });
// }

