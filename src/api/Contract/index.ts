import request from "@/utils/request";
// import type { UserType } from './types'
// import _rules from "@/utils/rules";

const prefix = "/web/v1";


export const getList = (): Promise<any> => {
  return request({
    url: prefix + "/contract/template/getList",
    method: "get",
  });
}

// export const add = (data:any): Promise<any> => {
//   return request({
//     url: prefix + "/sales/customField/add",
//     method: "post",
//     data,
//   });
// }



export default {
  getList,
};
