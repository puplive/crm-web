import{f as t}from"./request-DAESqlcg.js";const s="/web/v1",r=e=>t({url:s+"/sales/clue/getList",method:"get",params:e}),l=e=>t({url:s+"/sales/clue/getData",method:"get",params:e}),o=e=>t({url:s+"/sales/clue/add",method:"post",data:e}),u=e=>t({url:s+"/sales/clue/edit",method:"post",data:e}),c=e=>t({url:s+"/sales/clue/delete",method:"post",data:e}),n=e=>t({url:s+"/sales/clue/changeUser",method:"post",data:e}),a=e=>t({url:s+"/sales/clue/changeIntention",method:"post",data:e}),d=e=>t({url:s+"/sales/clue/changePublic",method:"post",data:e}),i=()=>t({url:s+"/sales/clue/getCountry",method:"get"}),g=e=>t({url:s+"/sales/clue/getProvince",method:"get",params:e}),h=e=>t({url:s+"/sales/clue/getCity",method:"get",params:e}),m=()=>t({url:s+"/sales/clue/getCustomField",method:"get"}),p=()=>t({url:s+"/sales/clue/getSearchField",method:"get"}),C=e=>t({url:s+"/sales/clue/receive",method:"post",data:e}),x=e=>t({url:s+"/sales/clue/merge",method:"post",data:e}),b=e=>t({url:s+"/sales/clue/editNew",method:"post",data:e}),L=e=>t({url:s+"/sales/clue/exitExhibition",method:"post",data:e}),f=e=>t({url:s+"/sales/clue/export",method:"post",data:e}),v=e=>t({url:s+"/sales/clue/import",method:"post",data:e}),y={getList:e=>t({url:s+"/sales/clueContact/getList",method:"get",params:e}),add:e=>t({url:s+"/sales/clueContact/add",method:"post",data:e}),edit:e=>t({url:s+"/sales/clueContact/edit",method:"post",data:e}),del:e=>t({url:s+"/sales/clueContact/delete",method:"post",data:e})},F={getList:e=>t({url:s+"/sales/clueRecord/getList",method:"get",params:e}),add:e=>t({url:s+"/sales/clueRecord/add",method:"post",data:e})},w={getList:r,getData:l,add:o,edit:u,del:c,changeUser:n,changeIntention:a,changePublic:d,getCountry:i,getProvince:g,getCity:h,getCustomField:m,getSearchField:p,getClues:C,merge:x,editNew:b,exitExhibition:L,clueExport:f,clueImport:v,contact:y,clueRecord:F};export{w as a,F as b,v as c,y as d,l as e,c as f,m as g,b as h,L as i,n as j};
