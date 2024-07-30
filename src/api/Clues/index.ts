import request from "@/utils/request";
// import type { UserType } from './types'

const prefix = "/web/v1";

export const getList = (params: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/getList",
    method: "get",
    params,
  });
}

export const getData = (params: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/getData",
    method: "get",
    params,
  });
}

export const add = (data: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/add",
    method: "post",
    data,
  });
}

export const edit = (data: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/edit",
    method: "post",
    data,
  });
}

export const del = (data: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/delete",
    method: "post",
    data,
  });
}

export const changeUser = (data: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/changeUser",
    method: "post",
    data,
  });
}

export const changeIntention = (data: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/changeIntention",
    method: "post",
    data,
  });
}

export const changePublic = (data: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/changePublic",
    method: "post",
    data,
  });
}

export const getCountry = (): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/getCountry",
    method: "get",
  });
}

export const getProvince = (params: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/getProvince",
    method: "get",
    params,
  });
}

export const getCity = (params: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/getCity",
    method: "get",
    params,
  });
}

export const getCustomField = (): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/getCustomField",
    method: "get",
  });
}

export const getSearchField = (): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/getSearchField",
    method: "get",
  });
}

export const getClues = (data: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/receive",
    method: "post",
    data
  });
}

export const merge = (data: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/merge",
    method: "post",
    data
  });
}

export const editNew = (data: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/editNew",
    method: "post",
    data
  });
}

export const exitExhibition = (data: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/exitExhibition",
    method: "post",
    data
  });
}

export const clueExport = (data: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/export",
    method: "post",
    data
  });
}

export const clueImport = (data: any): Promise<any> => {
  return request({
    url: prefix + "/sales/clue/import",
    method: "post",
    data
  });
}

export const contact = {
  getList: (params: any): Promise<any> => {
    return request({
      url: prefix + "/sales/clueContact/getList",
      method: "get",
      params,
    });
  },
  add: (data: any): Promise<any> => {
    return request({
      url: prefix + "/sales/clueContact/add",
      method: "post",
      data
    });
  },
  edit: (data: any): Promise<any> => {
    return request({
      url: prefix + "/sales/clueContact/edit",
      method: "post",
      data
    });
  },
  del: (data: any): Promise<any> => {
    return request({
      url: prefix + "/sales/clueContact/delete",
      method: "post",
      data
    });
  }

}

export const clueRecord = {
  getList: (params: any): Promise<any> => {
    return request({
      url: prefix + "/sales/clueRecord/getList",
      method: "get",
      params,
    });
  },
  add: (data: any): Promise<any> => {
    return request({
      url: prefix + "/sales/clueRecord/add",
      method: "post",
      data
    });
  },

}
export default {
  getList,
  getData,
  add,
  edit,
  del,
  changeUser,
  changeIntention,
  changePublic,
  getCountry,
  getProvince,
  getCity,
  getCustomField,
  getSearchField,
  getClues,
  merge,
  editNew,
  exitExhibition,
  clueExport,
  clueImport,
  contact,
  clueRecord
};