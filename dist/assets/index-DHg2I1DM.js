import{r as t}from"./request-LfwzVzzV.js";const r="/web/v1",d=e=>t({url:r+"/order/position/getHallInfo",method:"get",params:e}),i=e=>t({url:r+"/order/position/getExhibitionInfo",method:"get",params:e}),a={getList:e=>t({url:r+"/order/position/getList",method:"get",params:e}),getDetail:e=>t({url:r+"/order/position/getDetail",method:"get",params:e}),get:e=>t({url:r+"/order/position/get",method:"get",params:e}),create:e=>t({url:r+"/order/position/create",method:"post",data:e}),del:e=>t({url:r+"/order/position/delete",method:"post",data:e}),revoke:e=>t({url:r+"/order/position/revoke",method:"post",data:e}),getSearchField:()=>t({url:r+"/order/position/getSearchField",method:"get"})},l={getList:e=>t({url:r+"/order/material/getList",method:"get",params:e}),getMaterial:e=>t({url:r+"/order/material/getMaterial",method:"get",params:e}),addCart:e=>t({url:r+"/order/material/addCart",method:"post",data:e}),getCart:e=>t({url:r+"/order/material/getCart",method:"post",data:e}),create:e=>t({url:r+"/order/material/create",method:"post",data:e}),del:e=>t({url:r+"/order/material/delete",method:"post",data:e}),revoke:e=>t({url:r+"/order/material/revoke",method:"post",data:e}),getSearchField:()=>t({url:r+"/order/material/getSearchField",method:"get"}),getDetail:()=>t({url:r+"/order/material/getDetail",method:"get"})};export{l as a,a as b,d as c,i as g};