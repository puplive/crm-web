import{d as I,l as o,t as R,o as n,b as i,O as c,F as b,U as g,R as d,i as u,n as B,Q as V,h as D}from"./index-CoktlfKN.js";/* empty css                          */import{E as L,a as F}from"./el-table-column-B3tbDtuc.js";import{E as M,a as N}from"./el-checkbox-BJHQZPh0.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-L93M-ikX.js";import"./el-scrollbar-g4nKRSUD.js";import"./el-tag-6X7OaLzA.js";import{e as T,c as p}from"./index-Cih3JrZp.js";/* empty css                   */import{c as k}from"./request-DAESqlcg.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-form-item-DzIy8ETn.js";import"./_initCloneObject-CnCR6HZ9.js";import"./isArrayLikeObject-BZLgJZ82.js";import"./event-BB_Ol6Sd.js";import"./isEqual-DF4feqD3.js";const A={class:"role-main",style:{height:"100%"}},G={class:"l"},O=["onClick"],Q={class:"r"},S=I({__name:"Role",setup($){const _=o([]),f=o([]),w=o(null),t=o(""),s=o([]),x=async()=>{p.getList().then(e=>{e.code===0&&(_.value=e.data,t.value=e.data[0].id)})},m=async()=>{p.getData({roleId:t.value}).then(e=>{e.code===0&&(s.value=e.data)})};T().then(e=>{e.code===0&&(f.value=e.data)});const C=()=>{p.add({roleId:t.value,menuId:s.value}).then(e=>{e.code===0?k.success("成功"):(k.error(e.msg),m())}).catch(()=>{m()})};return R(t,()=>{m()}),x(),(e,r)=>{const v=M,h=L,E=F,y=N;return n(),i("div",A,[c("div",G,[(n(!0),i(b,null,g(_.value,a=>(n(),i("div",{class:B(["item",{active:a.id==t.value}]),onClick:l=>t.value=a.id},[c("div",null,V(a.name),1),c("p",null,V(a.desc),1)],10,O))),256))]),c("div",Q,[d(y,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=a=>s.value=a),onChange:r[1]||(r[1]=()=>{C()})},{default:u(()=>[d(E,{ref_key:"tableRef",ref:w,data:f.value,border:"","table-layout":"fixed",height:"100%","header-row-class-name":"s-table-header"},{default:u(()=>[d(h,{prop:"",label:"一级模块","min-width":"150"},{default:u(a=>[d(v,{label:a.row.meta.title,value:a.row.id,modelValue:a.row.id,"onUpdate:modelValue":l=>a.row.id=l},null,8,["label","value","modelValue","onUpdate:modelValue"])]),_:1}),d(h,{label:"二级模块","min-width":"400"},{default:u(a=>[(n(!0),i(b,null,g(a.row.child,l=>(n(),D(v,{key:l.id,label:l.meta.title,value:l.id,modelValue:l.id,"onUpdate:modelValue":U=>l.id=U},null,8,["label","value","modelValue","onUpdate:modelValue"]))),128))]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue"])])])}}}),se=z(S,[["__scopeId","data-v-f75bee45"]]);export{se as default};
