import request from "@/utils/request";
// import type { UserType } from './types'

const prefix = "/api/web/v1";
export const uploadFile = (data: any): Promise<any> => {
  return request({
    url: prefix + "/tencent/cos/upload",
    method: "post",
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    data,
  });
}