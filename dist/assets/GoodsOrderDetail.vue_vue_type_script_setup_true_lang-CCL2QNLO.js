import{d as u,s as f,o as h,c as w,w as l,P as s,S as e,Q as p,R as r}from"./index-DCymUriE.js";import{E as g}from"./el-dialog-buPJM2de.js";/* empty css                   */import{E as D,a as E}from"./el-table-column-Di21ZrSU.js";import"./el-checkbox-DnNS-a_c.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DHDkudva.js";import"./el-scrollbar-ClrM89cs.js";import"./el-tag-DGC2aVaR.js";import{E as x,a as V}from"./el-form-item-BO1QLts8.js";import{c as y}from"./index-DrSP4ZME.js";const N={class:"s-table-pagination",style:{"justify-content":"space-between"}},v=s("span",null,"订单金额",-1),B={style:{color:"red"}},Q=u({__name:"GoodsOrderDetail",setup(k,{expose:m}){const t=f({show:!1,data:{materialData:[]}});return m({getDetail:i=>{y.getDetail({id:i}).then(a=>{a.code===0&&(t.data=a.data,t.show=!0)})}}),(i,a)=>{const n=x,d=V,o=D,c=E,_=g;return h(),w(_,{title:"订单详情",modelValue:t.show,"onUpdate:modelValue":a[0]||(a[0]=b=>t.show=b),width:"700"},{default:l(()=>[s("div",null,[e(d,null,{default:l(()=>[e(n,{label:"展会名称",style:{"margin-bottom":"0"}},{default:l(()=>[p(r(t.data.exhibitionName),1)]),_:1}),e(n,{label:"企业名称"},{default:l(()=>[p(r(t.data.exhibitorName),1)]),_:1})]),_:1}),e(c,{data:t.data.materialData,border:"","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[e(o,{prop:"project",label:"服务项目"}),e(o,{prop:"position",label:"位置/版面"}),e(o,{prop:"size",label:"尺寸规格"}),e(o,{prop:"num",label:"数量"}),e(o,{prop:"price",label:"单价(RMB)"}),e(o,{prop:"remark",label:"备注"})]),_:1},8,["data"]),s("div",N,[v,s("span",B,r(t.data.price),1)])])]),_:1},8,["modelValue"])}}});export{Q as _};
