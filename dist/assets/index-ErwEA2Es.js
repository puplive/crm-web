import{r as e}from"./request-LfwzVzzV.js";const i="/web/v1",n=t=>e({url:i+"/exhibition/info/getData",method:"get",params:t}),s=t=>e({url:i+"/exhibition/info/add",method:"post",data:t}),r=t=>e({url:i+"/exhibition/info/edit",method:"post",data:t}),h=t=>e({url:i+"/exhibition/info/delete",method:"post",data:t}),a=t=>e({url:i+"/exhibition/info/setStatus",method:"post",data:t}),u=()=>e({url:i+"/exhibition/info/getList",method:"get"}),l=t=>e({url:i+"/exhibition/hall/getData",method:"get",params:t}),d=()=>e({url:i+"/exhibition/city/getList",method:"get"}),b=t=>e({url:i+"/exhibition/hall/getImg",method:"get",params:t});export{h as a,n as b,r as c,s as d,u as e,b as f,d as g,l as h,a as s};