import{f as t}from"./request-DAESqlcg.js";const r="/web/v1",d=e=>t({url:r+"/order/position/getHallInfo",method:"get",params:e}),a=e=>t({url:r+"/order/position/getExhibitionInfo",method:"get",params:e}),i={getList:e=>t({url:r+"/order/position/getList",method:"get",params:e}),getDetail:e=>t({url:r+"/order/position/getDetail",method:"get",params:e}),get:e=>t({url:r+"/order/position/get",method:"get",params:e}),create:e=>t({url:r+"/order/position/create",method:"post",data:e}),del:e=>t({url:r+"/order/position/delete",method:"post",data:e}),revoke:e=>t({url:r+"/order/position/revoke",method:"post",data:e}),getSearchField:()=>t({url:r+"/order/position/getSearchField",method:"get"}),receipt:e=>t({url:r+"/contract/orderPosition/receipt",method:"post",data:e})},l={getList:e=>t({url:r+"/order/material/getList",method:"get",params:e}),getMaterial:e=>t({url:r+"/order/material/getMaterial",method:"get",params:e}),addCart:e=>t({url:r+"/order/material/addCart",method:"post",data:e}),editCart:e=>t({url:r+"/order/material/editCart",method:"post",data:e}),delCart:e=>t({url:r+"/order/material/delCart",method:"post",data:e}),getCart:e=>t({url:r+"/order/material/getCart",method:"get",params:e}),create:e=>t({url:r+"/order/material/create",method:"post",data:e}),del:e=>t({url:r+"/order/material/delete",method:"post",data:e}),revoke:e=>t({url:r+"/order/material/revoke",method:"post",data:e}),getSearchField:()=>t({url:r+"/order/material/getSearchField",method:"get"}),getDetail:e=>t({url:r+"/order/material/getDetail",method:"get",params:e})};export{a,i as b,l as c,d as g};
