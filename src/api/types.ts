export const types: any = {
  positionType: {
    label: '展位类型',
    type: 3,
    options: [
      { value: 1, label: '标准' },
      { value: 2, label: '特装' },
    ]
  },
  orderType: {
    label: '下单方式',
    type: 3,
    options: [
      { value: 1, label: '代下单' },
      { value: 2, label: '展商下单' },
    ]
  },
  orderStatus: {
    label: '订单状态',
    type: 3,
    options: [
      { value: 0, label: '已撤销' },
      { value: 1, label: '已完成' }
    ]
  },
  payType: {
    label: '付款类型',
    type: 3,
    options: [
      { value: 1, label: '预定金' },
      { value: 2, label: '首款' },
      { value: 3, label: '二次款' },
      { value: 4, label: '尾款' },
      { value: 5, label: '转款' },
    ]
  },

  payStatus: {
    label: '付款状态',
    type: 3,
    options: [
      { value: 0, label: '未付款' },
      { value: 1, label: '部分付款' },
      { value: 2, label: '已付款' },
    ]
  },
  contractStatus: {
    label: '合同状态',
    type: 3,
    options: [
      { value: 0, label: '未签订' },
      { value: 1, label: '已签订' },
      { value: 2, label: '已回执(电子)' },
      { value: 3, label: '已回执(纸质)' }
    ]
  },
  invoiceType: {
    label: '发票类型',
    type: 3,
    options: [
      { value: 1, label: '电子专票' },
      { value: 2, label: '电子普票' },
    ]
  },
  invoiceStatus: {
    label: '发票状态',
    type: 3,
    options: [
      { value: 0, label: '未申请' },
      { value: 1, label: '待开票' },
      { value: 2, label: '部分开票' },
      { value: 3, label: '已开票' },
    ]
  },


}

export const paymentTypes = {
  invoiceStatus: {
    label: '发票状态',
    type: 3,
    options: [
      { value: 0, label: '未申请' },
      { value: 1, label: '待开票' },
      { value: 2, label: '已开票' },
    ]
  },
}
export const invoiceTypes = {
  payType: {
    label: '付款方式',
    type: 3,
    options: [
      { value: 1, label: '全款' },
      { value: 2, label: '分期' },
    ]
  },
  invoiceStatus: {
    label: '发票状态',
    type: 3,
    options: [
      { value: 1, label: '待开票' },
      { value: 2, label: '已开票' },
    ]
  },
}

export default types