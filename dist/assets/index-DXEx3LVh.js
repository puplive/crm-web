import{r as t}from"./request-LfwzVzzV.js";const s="/web/v1",r=e=>t({url:s+"/sales/clue/getList",method:"get",params:e}),l=e=>t({url:s+"/sales/clue/getData",method:"get",params:e}),u=e=>t({url:s+"/sales/clue/add",method:"post",data:e}),o=e=>t({url:s+"/sales/clue/edit",method:"post",data:e}),n=e=>t({url:s+"/sales/clue/delete",method:"post",data:e}),c=e=>t({url:s+"/sales/clue/changeUser",method:"post",data:e}),a=e=>t({url:s+"/sales/clue/changeIntention",method:"post",data:e}),g=e=>t({url:s+"/sales/clue/changePublic",method:"post",data:e}),d=()=>t({url:s+"/sales/clue/getCountry",method:"get"}),h=e=>t({url:s+"/sales/clue/getProvince",method:"get",params:e}),i=e=>t({url:s+"/sales/clue/getCity",method:"get",params:e}),m=()=>t({url:s+"/sales/clue/getCustomField",method:"get"}),p=()=>t({url:s+"/sales/clue/getSearchField",method:"get"}),C=()=>t({url:s+"",method:"post"}),F={getList:r,getData:l,add:u,edit:o,del:n,changeUser:c,changeIntention:a,changePublic:g,getCountry:d,getProvince:h,getCity:i,getCustomField:m,getSearchField:p,getClues:C};export{F as a};