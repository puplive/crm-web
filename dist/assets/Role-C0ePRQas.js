import{d as I,l as o,t as R,b as i,O as c,F as b,U as g,R as d,i as u,o as n,n as B,Q as V,h as D}from"./index-rdy0OYRO.js";/* empty css                       */import{a as L,E as F}from"./table-column-_ZPGVE9m.js";import{a as M,E as N}from"./checkbox-BmtYc19h.js";/* empty css                */import"./popper-C1dJVMHe.js";import"./scrollbar-CSo9-bN8.js";import"./tag-BRxh4fB-.js";import{e as T,d as p}from"./index-C_oY1CAo.js";/* empty css                */import{c as k}from"./request-Lvc6RqUG.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-form-item-N45HEDO7.js";import"./_initCloneObject-sB_DMj1P.js";import"./event-BB_Ol6Sd.js";import"./isEqual-BVzc1rHc.js";import"./focus-trap-C2II57zL.js";const A={class:"role-main",style:{height:"100%"}},G={class:"l"},O=["onClick"],Q={class:"r"},S=I({__name:"Role",setup($){const _=o([]),f=o([]),w=o(null),t=o(""),s=o([]),x=async()=>{p.getList().then(e=>{e.code===0&&(_.value=e.data,t.value=e.data[0].id)})},m=async()=>{p.getData({roleId:t.value}).then(e=>{e.code===0&&(s.value=e.data)})};T().then(e=>{e.code===0&&(f.value=e.data)});const C=()=>{p.add({roleId:t.value,menuId:s.value}).then(e=>{e.code===0?k.success("成功"):(k.error(e.msg),m())}).catch(()=>{m()})};return R(t,()=>{m()}),x(),(e,r)=>{const v=N,h=L,E=F,y=M;return n(),i("div",A,[c("div",G,[(n(!0),i(b,null,g(_.value,a=>(n(),i("div",{class:B(["item",{active:a.id==t.value}]),onClick:l=>t.value=a.id},[c("div",null,V(a.name),1),c("p",null,V(a.desc),1)],10,O))),256))]),c("div",Q,[d(y,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=a=>s.value=a),onChange:r[1]||(r[1]=()=>{C()})},{default:u(()=>[d(E,{ref_key:"tableRef",ref:w,data:f.value,border:"","table-layout":"fixed",height:"100%","header-row-class-name":"s-table-header"},{default:u(()=>[d(h,{prop:"",label:"一级模块","min-width":"150"},{default:u(a=>[d(v,{label:a.row.meta.title,value:a.row.id,modelValue:a.row.id,"onUpdate:modelValue":l=>a.row.id=l},null,8,["label","value","modelValue","onUpdate:modelValue"])]),_:1}),d(h,{label:"二级模块","min-width":"400"},{default:u(a=>[(n(!0),i(b,null,g(a.row.child,l=>(n(),D(v,{key:l.id,label:l.meta.title,value:l.id,modelValue:l.id,"onUpdate:modelValue":U=>l.id=U},null,8,["label","value","modelValue","onUpdate:modelValue"]))),128))]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue"])])])}}}),se=z(S,[["__scopeId","data-v-f75bee45"]]);export{se as default};
