import{f as o}from"./request-IQDh0xGg.js";const r="/web/v1",e=t=>o({url:r+"/contract/template/getList",method:"get",params:t}),n=t=>o({url:r+"/order/position/getContractData",method:"get",params:t}),s=t=>o({url:r+"/contract/orderPosition/create",method:"post",data:t}),c=t=>o({url:r+"/contract/orderPosition/edit",method:"post",data:t}),a=t=>o({url:r+"/contract/orderPosition/receipt",method:"post",data:t}),i=t=>o({url:r+"/contract/orderPosition/revoke",method:"post",data:t}),d=t=>o({url:r+"/contract/orderPosition/download",method:"post",data:t}),p={getList:e,getContractData:n,create:s,edit:c,receipt:a,revoke:i,download:d};export{p as a,s as c,d,c as e,n as g};
