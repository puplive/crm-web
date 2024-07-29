import request from "@/utils/request";
import type { UserLoginType } from './types'

const prefix = "/web/v1";
export const loginApi = (data: UserLoginType): Promise<any> => {
  return request({
    url: prefix + "/auth/login", // "/auth/account/login",
    method: "post",
    data,
  });
}

// export const loginOutApi = (): Promise<any> => {
//   return request({
//     url: prefix + "/user/list",
//     method: "get",
//   });
// }

export const registerApi = (data: any): Promise<any> => {
  return request({
    url: prefix + "/exhibitor/info/register",
    method: "post",
    data,
  });
}

export const sendSmsApi = (data: any): Promise<any> => {
  return request({
    url: prefix + "/exhibitor/info/sendSms",
    method: "post",
    data,
  });
}

// 定义一个函数，用于获取用户列表
export const getUser = (): Promise<any> => {
  return request({
    url: prefix + "/user/list",
    method: "get",
  });
}

// menu
export const getMenu = (): Promise<any> => {
  return request({
    url: prefix + "/auth/menu/getList",
    method: "get",
  });
}
export const getMenuAll = (): Promise<any> => {
  return request({
    url: prefix + "/auth/menu/getAll",
    method: "get",
  });
}


export const getSponsorUser = (): Promise<any> => {
  return request({
    url: prefix + "/auth/user/getSponsorUser",
    method: "get",
  });
}

export const sponsor = (): Promise<any> => {
  return request({
    url: prefix + "/auth/sponsor/getList",
    method: "get",
  });
}

export const role = {
  getList: (): Promise<any> => {
    return request({
      url: prefix + "/auth/role/getList",
      method: "get",
    });
  },

  add: (data: any): Promise<any> => {
    return request({
      url: prefix + "/auth/roleMenu/add",
      method: "post",
      data,
    });
  },

  getData: (params: any): Promise<any> => {
    return request({
      url: prefix + "/auth/roleMenu/getData",
      method: "get",
      params,
    });
  }
}

export const org = {
  getList: (): Promise<any> => {
    return request({
      url: prefix + "/auth/sponsorDepartment/getList",
      method: "get",
    });
  },

  add: (data: any): Promise<any> => {
    return request({
      url: prefix + "/auth/sponsorDepartment/add",
      method: "post",
      data,
    });
  },

  edit: (data: any): Promise<any> => {
    return request({
      url: prefix + "/auth/sponsorDepartment/edit",
      method: "post",
      data,
    });
  },

  del: (data: any): Promise<any> => {
    return request({
      url: prefix + "/auth/sponsorDepartment/delete",
      method: "post",
      data,
    });
  }
}

export const sponsorAccount = {
  getList: (params: any): Promise<any> => {
    return request({
      url: prefix + "/auth/sponsorAccount/getList",
      method: "get",
      params,
    });
  },

  add: (data: any): Promise<any> => {
    return request({
      url: prefix + "/auth/sponsorAccount/add",
      method: "post",
      data,
    });
  },

  edit: (data: any): Promise<any> => {
    return request({
      url: prefix + "/auth/sponsorAccount/edit",
      method: "post",
      data,
    });
  },

  del: (data: any): Promise<any> => {
    return request({
      url: prefix + "/auth/sponsorAccount/delete",
      method: "post",
      data,
    });
  },

  setStatus: (data: any): Promise<any> => {
    return request({
      url: prefix + "/auth/sponsorAccount/setStatus",
      method: "post",
      data,
    });
  }
}