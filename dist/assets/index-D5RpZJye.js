import{at as t,b8 as o}from"./index-DaHF5CI3.js";const r="/web/v1",a={getList:e=>t({url:r+"/finance/order/getList",method:"get",params:e}),getDetail:e=>t({url:r+"/finance/order/getDetail",method:"get",params:e}),getSearchField:()=>t({url:r+"/finance/order/getSearchField",method:"get"})},d={getList:e=>t({url:r+"/finance/orderPayment/getList",method:"get",params:e}),getSearchField:()=>t({url:r+"/finance/orderPayment/getSearchField",method:"get"}),add:e=>{let n=JSON.parse(JSON.stringify(e));return o(n),t({url:r+"/finance/orderPayment/add",method:"post",data:n})},getDetail:e=>t({url:r+"/finance/orderPayment/getDetail",method:"get",params:e}),revoke:e=>t({url:r+"/finance/orderPayment/revoke",method:"post",data:e}),del:e=>t({url:r+"/finance/orderPayment/delete",method:"post",data:e}),edit:e=>t({url:r+"/finance/orderPayment/edit",method:"post",data:e})},i={apply:e=>t({url:r+"/finance/orderPaymentInvoice/apply",method:"post",data:e}),getList:e=>t({url:r+"/finance/orderPaymentInvoice/getList",method:"get",params:e}),getSearchField:()=>t({url:r+"/finance/orderPaymentInvoice/getSearchField",method:"get"}),edit:e=>t({url:r+"/finance/orderPaymentInvoice/edit",method:"post",data:e}),openInvoice:e=>t({url:r+"/finance/orderPaymentInvoice/openInvoice",method:"post",data:e}),uploadInvoice:e=>t({url:r+"/finance/orderPaymentInvoice/uploadInvoice",method:"post",data:e}),del:e=>t({url:r+"/finance/orderPaymentInvoice/delete",method:"post",data:e})},l={order:a,payment:d,invoice:i};export{l as a,i,a as o,d as p};