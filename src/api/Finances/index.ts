import request from "@/utils/request";
import type { del } from "../Exhibitor";
// import type { UserType } from './types'
import { delNullProperty } from '@/utils/tool'
// import qs from "qs";


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
  getSearchField: (): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPayment/getSearchField",
      method: "get",
    });
  },
  add: (data: any): Promise<any> => {
    let _d = JSON.parse(JSON.stringify(data))
    delNullProperty(_d)
    return request({
      url: prefix + "/finance/orderPayment/add",
      method: "post",
      data: _d,
    });
  },
  getDetail: (params: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPayment/getDetail",
      method: "get",
      params,
    });
  },
  del: (data: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPayment/delete",
      method: "post",
      data,
    });
  },
  edit: (data: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPayment/edit",
      method: "post",
      data,
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
  getSearchField: (): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPaymentInvoice/getSearchField",
      method: "get",
    });
  },
  edit: (data: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPaymentInvoice/edit",
      method: "post",
      data,
    });
  },
  openInvoice: (data: any): Promise<any> => {
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
  del: (data: any): Promise<any> => {
    return request({
      url: prefix + "/finance/orderPaymentInvoice/delete",
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
