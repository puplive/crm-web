import{at as e}from"./index-ChdcIJrL.js";const i="/web/v1",n=t=>e({url:i+"/exhibition/info/getData",method:"get",params:t}),r=t=>e({url:i+"/exhibition/info/add",method:"post",data:t}),s=t=>e({url:i+"/exhibition/info/edit",method:"post",data:t}),h=t=>e({url:i+"/exhibition/info/delete",method:"post",data:t}),a=t=>e({url:i+"/exhibition/info/setStatus",method:"post",data:t}),u=t=>e({url:i+"/exhibition/info/getList",method:"get",params:t}),d=t=>e({url:i+"/exhibition/hall/getData",method:"get",params:t}),l=()=>e({url:i+"/exhibition/city/getList",method:"get"}),b=t=>e({url:i+"/exhibition/hall/getImg",method:"get",params:t}),g=()=>e({url:i+"/exhibition/info/getSearchField",method:"get"}),x=t=>e({url:i+"/exhibition/info/isOrder",method:"post",data:t});export{h as a,n as b,l as c,b as d,u as e,s as f,g,d as h,r as i,x as j,a as s};
