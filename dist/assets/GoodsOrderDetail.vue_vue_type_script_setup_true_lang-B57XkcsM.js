import{d as u,s as f,o as h,c as w,w as l,P as s,S as e,Q as m,R as i}from"./index-z1lnycFL.js";import{E as g}from"./el-dialog-DLgRERcb.js";/* empty css                   */import{E as D,a as E}from"./el-table-column-C-rYy-n-.js";import"./el-checkbox-B2gCYMrl.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-B7J-cV2H.js";import"./el-scrollbar-D-pOLxMj.js";import"./el-tag-YLIfQqcE.js";import{E as x,a as V}from"./el-form-item-CEpn_uB5.js";import{c as y}from"./index-D8Lrg4BL.js";const N={class:"s-table-pagination",style:{"justify-content":"space-between"}},v=s("span",null,"订单金额",-1),B={style:{color:"red"}},Q=u({__name:"GoodsOrderDetail",setup(k,{expose:p}){const t=f({show:!1,data:{materialData:[]}});return p({getDetail:r=>{y.getDetail({id:r}).then(a=>{a.code===0&&(t.data=a.data,t.show=!0)})}}),(r,a)=>{const n=x,d=V,o=D,c=E,_=g;return h(),w(_,{title:"订单详情",modelValue:t.show,"onUpdate:modelValue":a[0]||(a[0]=b=>t.show=b),width:"700"},{default:l(()=>[s("div",null,[e(d,null,{default:l(()=>[e(n,{label:"展会名称",style:{"margin-bottom":"0"}},{default:l(()=>[m(i(t.data.exhibitionName),1)]),_:1}),e(n,{label:"企业名称"},{default:l(()=>[m(i(t.data.exhibitorName),1)]),_:1})]),_:1}),e(c,{data:t.data.materialData,border:"","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[e(o,{prop:"project",label:"服务项目","min-width":"120"}),e(o,{prop:"position",label:"位置/版面","min-width":"120"}),e(o,{prop:"size",label:"尺寸规格","min-width":"120"}),e(o,{prop:"num",label:"数量"}),e(o,{prop:"price",label:"单价(RMB)","min-width":"120"}),e(o,{prop:"remark",label:"备注"})]),_:1},8,["data"]),s("div",N,[v,s("span",B,i(t.data.price),1)])])]),_:1},8,["modelValue"])}}});export{Q as _};