import request from "@/utils/request";
// import type { UserType } from './types'

const prefix = "/web/v1";

export const order = {
  getList: (params: any): Promise<any> => {
    return request({
      url: prefix + "/finance/order/getList",
      method: "get",
      params,
    });
  },
  getDetail: (params: any): Promise<any> => {
    return request({
      url: prefix + "/finance/order/getDetail",
      method: "get",
      params,
    });
  },
}
export const payment = {
  getList: (params: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPayment/getList",
      method: "get",
      params,
    });
  },
  getSearchField: (params: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPayment/getSearchField",
      method: "get",
      params,
    });
  },
  add: (data: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPayment/add",
      method: "post",
      data,
    });
  },
  getDetail: (params: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPayment/getDetail",
      method: "get",
      params,
    });
  },
}

export const invoice = {
  apply: (data: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPaymentInvoice/apply",
      method: "post",
      data,
    });
  },
  getList: (params: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPaymentInvoice/getList",
      method: "get",
      params,
    });
  },
  getSearchField: (params: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPaymentInvoice/getSearchField",
      method: "get",
      params,
    });
  },
  add: (data: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPaymentInvoice/edit",
      method: "post",
      data,
    });
  },
  applyInvoice: (data: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPaymentInvoice/openInvoice",
      method: "post",
      data,
    });
  },
  uploadInvoice: (data: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPaymentInvoice/uploadInvoice",
      method: "post",
      data,
    });
  },
}

export default {
  order,
  payment,
  invoice,
};
