import{d as u,l as h,b,O as o,R as e,i as a,W as f,a5 as v,o as x,P as r,Q as c,X as E,Y as g}from"./index-D9aGDKH9.js";import{E as y,a as N}from"./el-table-column-B-cAvBtk.js";import"./el-checkbox-BLw9zMEc.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-fKr_vhya.js";import"./el-scrollbar-BzxL5BJ9.js";import"./el-tag-DJIYcRLJ.js";import{E as I,a as D}from"./el-form-item-IYFHFWRx.js";import{b as R}from"./index-Bv7EaNVu.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-form-item-Bp2Swgcc.js";import"./_initCloneObject-BfOVfg95.js";import"./request-BeP7SFZb.js";import"./event-BB_Ol6Sd.js";import"./isEqual-BBv5k310.js";import"./castArray-4LGG5uia.js";import"./_baseClone-Ckn9bnMq.js";const _=s=>(E("data-v-92993692"),s=s(),g(),s),T={class:"org-main"},w={class:"l"},B=_(()=>o("div",{class:"title"},"账户信息",-1)),C={class:"r"},V=_(()=>o("div",{class:"title"},"参展历史",-1)),k={class:"s-flex-auto",style:{"min-height":"0"}},F=u({__name:"ExhibitorsDetail",setup(s){f();const n=v(),t=h({exhibition:[]});return(async()=>{R({id:n.query.id}).then(m=>{m.code===0&&(t.value=m.data)})})(),(m,q)=>{const l=D,p=I,i=N,d=y;return x(),b("div",T,[o("div",w,[e(p,null,{default:a(()=>[B,e(l,{label:"用户名"},{default:a(()=>[r(c(t.value.account),1)]),_:1}),e(l,{label:"注册人"},{default:a(()=>[r(c(t.value.userName),1)]),_:1}),e(l,{label:"手机号"},{default:a(()=>[r(c(t.value.phone),1)]),_:1}),e(l,{label:"注册邮箱"},{default:a(()=>[r(c(t.value.email),1)]),_:1})]),_:1})]),o("div",C,[V,o("div",k,[e(d,{ref:"tableRef",data:t.value.exhibition,border:"","table-layout":"fixed",height:"100%","header-row-class-name":"s-table-header"},{default:a(()=>[e(i,{prop:"exhibitionName",label:"展会名称"}),e(i,{prop:"city",label:"城市"}),e(i,{prop:"hallName",label:"展馆"}),e(i,{prop:"startTime",label:"开展时间"})]),_:1},8,["data"])])])])}}}),ee=S(F,[["__scopeId","data-v-92993692"]]);export{ee as default};