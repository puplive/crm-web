import request from "@/utils/request";
// import type { UserType } from './types'

const prefix = "/api/web/v1";
export const loginApi = (data: any): Promise<any> => {
  return request({
    url: prefix + "/tencent/cos/upload",
    method: "post",
    data,
  });
}