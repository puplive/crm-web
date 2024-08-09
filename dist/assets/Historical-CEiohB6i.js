import{d as Z,y as j,t as i,az as A,b as g,X as f,$ as l,i as a,J as h,a5 as G,am as K,a7 as r,o as u,Y as n,Z as Q,a1 as E,h as x,ak as W}from"./index-D6lb1vAv.js";import{E as ee}from"./dialog-CEutNOMs.js";/* empty css                */import{a as te,E as oe}from"./form-item-CSzeSa22.js";/* empty css              */import"./tag-DyRGJO6y.js";import{E as le,a as ae}from"./select-C-KkSNyU.js";import"./scrollbar-DU4G5b5p.js";import"./popper-PtN5-UwR.js";import{E as ie}from"./pagination-Dv5jXxzL.js";import{E as re,a as se}from"./table-column-Bdwx0tKL.js";import"./checkbox-DdrTfKwk.js";/* empty css                */import{E as ne}from"./link-BHgMAoRO.js";import{E as ue}from"./button-CnviZ8cJ.js";import{T as de}from"./index-BE1XV_oV.js";import{a as m}from"./index-DrvLlFAU.js";import{e as me}from"./index-CNcb9o6C.js";/* empty css                *//* empty css                    */import"./index-Dw_FUmZc.js";import"./use-form-item-D2gyIkin.js";import"./scroll-Cee1eboZ.js";import"./vnode-CWLT-RKK.js";import"./focus-trap-BL2pMCUV.js";import"./refs-BbH7IMmI.js";import"./event-BB_Ol6Sd.js";import"./castArray-CqaCZPGK.js";import"./_baseClone-B5IZTI-u.js";import"./_initCloneObject-DxFeGeIP.js";import"./isEqual-DtkQ-0cD.js";import"./index-DtV3tWyM.js";/* empty css                      */import"./index-DQNmj_SX.js";/* empty css                                                              */import"./_plugin-vue_export-helper-DlAUqK2U.js";const pe={class:"s-flex-col",style:{height:"100%"}},ce={class:"s-table-operations"},fe={class:"s-flex-auto",style:{"min-height":"0"}},ve={class:"s-table-pagination"},_e={class:"dialog-footer"},ge={class:"dialog-footer"},ot=Z({__name:"Historical",setup(he){G(),K();const p=j({page:1,perPage:10}),C=i(0),V=i({}),F=i([]),y=i(null),S=i([]),U=i([]),L=e=>{V.value=e,p.page=1,c()},c=async()=>{m.getList({status:4,...p,...V.value}).then(e=>{e.code===0&&(F.value=e.data.data,C.value=e.data.total)})},b=i({}),w=i(!1),I=i(null),M=()=>{I.value.validate(e=>{e&&m.changeIntention(b.value).then(o=>{o.code===0?(r.success("转为意向成功"),c(),w.value=!1):r.error(o.msg)})})},v=i({}),_=i(!1),R=i(null),z=i([]),$=()=>{let e=y.value.getSelectionRows().map(o=>o.id);if(e.length===0){r.warning("请选择需要转移的线索");return}v.value.id=e,_.value=!0},q=()=>{R.value.validate(e=>{e&&m.changeUser(v.value).then(o=>{o.code===0?(r.success("转移成功"),_.value=!1,c()):r.error(o.msg)})})},H=()=>{let e=y.value.getSelectionRows().map(o=>o.id);if(e.length===0){r.warning("请选择需要移至公海的线索");return}m.changePublic({id:e}).then(o=>{o.code===0?(r.success("移至公海成功"),c()):r.error(o.msg)})},J=()=>{m.clueExport({status:4}).then(e=>{e.code===0?(r.success("导出成功"),window.open(e.data.url,"_self")):r.error(e.msg)})};m.getSearchField().then(e=>{e.code===0&&(S.value=e.data)}),me().then(e=>{e.code===0&&(U.value=e.data)}),A().then(e=>{e.code===0&&(z.value=e.data)});const N=i([]);return(()=>{m.getCustomField().then(e=>{e.code===0&&(N.value=e.data)})})(),c(),(e,o)=>{const d=ue,s=se,O=ne,X=re,Y=ie,T=le,P=ae,k=te,B=oe,D=ee;return u(),g(h,null,[f("div",pe,[l(de,{data:S.value,onSearch:L},null,8,["data"]),f("div",ce,[l(d,{size:"small",onClick:J},{default:a(()=>[n("导出")]),_:1}),l(d,{size:"small",onClick:$},{default:a(()=>[n("转移给他人")]),_:1}),l(d,{size:"small",onClick:H},{default:a(()=>[n("移至公海")]),_:1})]),f("div",fe,[l(X,{ref_key:"tableRef",ref:y,data:F.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:a(()=>[l(s,{type:"selection",width:"42"}),l(s,{prop:"companyName",label:"公司名称",width:"180"},{default:a(t=>[l(O,{href:"/market/clues/info?type=1&id="+t.row.id+"&exhibitionId="+t.row.exhibitionId+"&authUser="+t.row.authUser,type:"primary"},{default:a(()=>[n(Q(t.row.companyName),1)]),_:2},1032,["href"])]),_:1}),l(s,{prop:"exhibitionContact",label:"联系方式",width:"180"}),l(s,{prop:"duties",label:"职务"}),l(s,{prop:"phone",label:"电话"}),l(s,{prop:"recordTime",label:"记录时间",width:"180"}),l(s,{prop:"recordText",label:"记录内容","min-width":"120"}),l(s,{prop:"authUser",label:"授权人"}),(u(!0),g(h,null,E(N.value,t=>(u(),x(s,{key:t.key,prop:t.key,label:t.name,"min-width":"120"},null,8,["prop","label"]))),128))]),_:1},8,["data"])]),f("div",ve,[l(Y,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:C.value,"current-page":p.page,"onUpdate:currentPage":o[0]||(o[0]=t=>p.page=t),"page-size":p.perPage,"onUpdate:pageSize":o[1]||(o[1]=t=>p.perPage=t),onChange:c},null,8,["total","current-page","page-size"])])]),l(D,{modelValue:w.value,"onUpdate:modelValue":o[4]||(o[4]=t=>w.value=t),title:"转为意向客户",width:"500",draggable:""},{footer:a(()=>[f("div",_e,[l(d,{onClick:o[3]||(o[3]=t=>w.value=!1)},{default:a(()=>[n("取消")]),_:1}),l(d,{type:"primary",onClick:M},{default:a(()=>[n("确定")]),_:1})])]),default:a(()=>[l(B,{ref_key:"willFormRef",ref:I,model:b.value,"label-width":"auto","label-position":"left"},{default:a(()=>[l(k,{label:"项目",prop:"exhibitionId",rules:[{required:!0,message:"请选择项目"}]},{default:a(()=>[l(P,{modelValue:b.value.exhibitionId,"onUpdate:modelValue":o[2]||(o[2]=t=>b.value.exhibitionId=t),placeholder:""},{default:a(()=>[(u(!0),g(h,null,E(U.value,t=>(u(),g(h,{key:t.id},[t.status===1?(u(),x(T,{key:0,label:t.exhibitionName,value:t.id},null,8,["label","value"])):W("",!0)],64))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(D,{modelValue:_.value,"onUpdate:modelValue":o[7]||(o[7]=t=>_.value=t),title:"转移销售线索",width:"500",draggable:""},{footer:a(()=>[f("div",ge,[l(d,{onClick:o[6]||(o[6]=t=>_.value=!1)},{default:a(()=>[n("取消")]),_:1}),l(d,{type:"primary",onClick:q},{default:a(()=>[n("确定")]),_:1})])]),default:a(()=>[l(B,{ref_key:"moveFormRef",ref:R,model:v.value,"label-width":"auto","label-position":"left"},{default:a(()=>[l(k,{label:""},{default:a(()=>[n("是否将选中的销售线索转移？")]),_:1}),l(k,{label:"销售线索所有人",prop:"userId",rules:[{required:!0,message:"请选择销售线索所有人"}]},{default:a(()=>[l(P,{modelValue:v.value.userId,"onUpdate:modelValue":o[5]||(o[5]=t=>v.value.userId=t),placeholder:""},{default:a(()=>[(u(!0),g(h,null,E(z.value,t=>(u(),x(T,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});export{ot as default};