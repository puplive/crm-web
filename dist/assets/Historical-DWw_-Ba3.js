import{d as j,s as A,l as r,o as u,f as b,P as c,S as o,w as a,Q as n,R as G,F as w,W as x,Z as J,a7 as K,c as E,X as Y}from"./index-DCymUriE.js";import{E as ee}from"./el-dialog-buPJM2de.js";/* empty css                   */import{E as te,a as oe}from"./el-form-item-BO1QLts8.js";/* empty css                 */import"./el-tag-DGC2aVaR.js";import{E as le,a as ae}from"./el-select-HJ0349bq.js";import"./el-scrollbar-ClrM89cs.js";import"./el-popper-DHDkudva.js";import{E as re}from"./el-pagination-B8PouJoM.js";import{E as ie,a as ne}from"./el-table-column-Di21ZrSU.js";import"./el-checkbox-DnNS-a_c.js";import"./el-tooltip-l0sNRNKZ.js";import{E as se}from"./el-link-CVC-wzqc.js";import"./el-button-CGe7P6HV.js";import{T as ue}from"./index-CNWTdEvo.js";import{a as f}from"./index-w5wNAvWG.js";import{e as de}from"./index-DFcTc0Dv.js";import{g as me}from"./index-Di_1XL6a.js";/* empty css                   *//* empty css                       */import{a as d}from"./request-DQ5XCXvm.js";import{E as pe}from"./index-BMPUIIAk.js";import"./index-CD1uVtb3.js";import"./index-K09NX3RV.js";import"./scroll-DC0HVVqi.js";import"./vnode-fWQkEeHF.js";import"./refs-BCMz6JMb.js";import"./event-BB_Ol6Sd.js";import"./castArray-B2aWF81D.js";import"./_baseClone-D6GWRTx2.js";import"./_initCloneObject-m1lQx9l7.js";import"./isEqual-DTsO2ngT.js";import"./index-tMURie_q.js";import"./isArrayLikeObject-IEHWKhwp.js";import"./el-date-picker-CxB1hIT5.js";import"./arrays-6TrVLtTe.js";import"./index-BRIPB4uN.js";import"./el-radio-EOaM3hYs.js";/* empty css                          */import"./_plugin-vue_export-helper-DlAUqK2U.js";const ce={class:"s-flex-col",style:{height:"100%"}},fe={class:"s-table-operations"},ve={class:"s-flex-auto",style:{"min-height":"0"}},_e={class:"s-table-pagination"},ge={class:"dialog-footer"},he={class:"dialog-footer"},ut=j({__name:"Historical",setup(be){J(),K();const m=A({page:1,perPage:10}),C=r(0),S=r({}),F=r([]),y=r(null),V=r([]),U=r([]),L=t=>{S.value=t,m.page=1,p()},p=async()=>{f.getList({status:1,...m,...S.value}).then(t=>{t.code===0&&(F.value=t.data.data,C.value=t.data.total)})},v=r({}),_=r(!1),R=r(null),M=t=>{v.value.id=t.id,_.value=!0},$=()=>{R.value.validate(t=>{t&&f.changeIntention(v.value).then(l=>{l.code===0?(d.success("转为意向成功"),p(),_.value=!1):d.error(l.msg)})})},g=r({}),h=r(!1),I=r(null),z=r([]),q=()=>{let t=y.value.getSelectionRows().map(l=>l.id);if(t.length===0){d.warning("请选择需要转移的线索");return}g.value.id=t,h.value=!0},H=()=>{I.value.validate(t=>{t&&f.changeUser(g.value).then(l=>{l.code===0?(d.success("转移成功"),h.value=!1,p()):d.error(l.msg)})})},O=()=>{let t=y.value.getSelectionRows().map(l=>l.id);if(t.length===0){d.warning("请选择需要移至公海的线索");return}f.changePublic({id:t}).then(l=>{l.code===0?(d.success("移至公海成功"),p()):d.error(l.msg)})},Q=()=>{console.log("export")};f.getSearchField().then(t=>{t.code===0&&(V.value=t.data)}),de().then(t=>{t.code===0&&(U.value=t.data)}),me().then(t=>{t.code===0&&(z.value=t.data)});const N=r([]);return(()=>{f.getCustomField().then(t=>{t.code===0&&(N.value=t.data)})})(),p(),(t,l)=>{const s=pe,i=ie,W=se,X=ne,Z=re,P=ae,T=le,k=te,B=oe,D=ee;return u(),b(w,null,[c("div",ce,[o(ue,{data:V.value,onSearch:L},null,8,["data"]),c("div",fe,[o(s,{size:"small",onClick:Q},{default:a(()=>[n("导出")]),_:1}),o(s,{size:"small",onClick:q},{default:a(()=>[n("转移给他人")]),_:1}),o(s,{size:"small",onClick:O},{default:a(()=>[n("移至公海")]),_:1})]),c("div",ve,[o(X,{ref_key:"tableRef",ref:y,data:F.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:a(()=>[o(i,{type:"selection",width:"42"}),o(i,{prop:"companyName",label:"公司名称",width:"180"},{default:a(e=>[o(W,{href:"/market/clues/info?type=1&id="+e.row.id+"&exhibitionId="+e.row.exhibitionId+"&authUser="+e.row.authUser,type:"primary"},{default:a(()=>[n(G(e.row.companyName),1)]),_:2},1032,["href"])]),_:1}),o(i,{prop:"exhibitionContact",label:"联系方式",width:"180"}),o(i,{prop:"duties",label:"职务"}),o(i,{prop:"phone",label:"电话"}),o(i,{prop:"recordTime",label:"记录时间",width:"180"}),o(i,{prop:"recordText",label:"记录内容"}),o(i,{prop:"authUser",label:"授权人"}),(u(!0),b(w,null,x(N.value,e=>(u(),E(i,{key:e.key,prop:e.key,label:e.name},null,8,["prop","label"]))),128)),o(i,{fixed:"right",label:"操作",width:"120"},{default:a(e=>[o(s,{link:"",type:"primary",size:"small",onClick:ye=>M(e.row)},{default:a(()=>[n(" 转为意向客户 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),c("div",_e,[o(Z,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:C.value,"current-page":m.page,"onUpdate:currentPage":l[0]||(l[0]=e=>m.page=e),"page-size":m.perPage,"onUpdate:pageSize":l[1]||(l[1]=e=>m.perPage=e),onChange:p},null,8,["total","current-page","page-size"])])]),o(D,{modelValue:_.value,"onUpdate:modelValue":l[4]||(l[4]=e=>_.value=e),title:"转为意向客户",width:"500",draggable:""},{footer:a(()=>[c("div",ge,[o(s,{onClick:l[3]||(l[3]=e=>_.value=!1)},{default:a(()=>[n("取消")]),_:1}),o(s,{type:"primary",onClick:$},{default:a(()=>[n("确定")]),_:1})])]),default:a(()=>[o(B,{ref_key:"willFormRef",ref:R,model:v.value,"label-width":"auto"},{default:a(()=>[o(k,{label:"项目",prop:"exhibitionId",rules:[{required:!0,message:"请选择项目"}]},{default:a(()=>[o(T,{modelValue:v.value.exhibitionId,"onUpdate:modelValue":l[2]||(l[2]=e=>v.value.exhibitionId=e),placeholder:""},{default:a(()=>[(u(!0),b(w,null,x(U.value,e=>(u(),b(w,{key:e.id},[e.status===1?(u(),E(P,{key:0,label:e.exhibitionName,value:e.id},null,8,["label","value"])):Y("",!0)],64))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),o(D,{modelValue:h.value,"onUpdate:modelValue":l[7]||(l[7]=e=>h.value=e),title:"转移销售线索",width:"500",draggable:""},{footer:a(()=>[c("div",he,[o(s,{onClick:l[6]||(l[6]=e=>h.value=!1)},{default:a(()=>[n("取消")]),_:1}),o(s,{type:"primary",onClick:H},{default:a(()=>[n("确定")]),_:1})])]),default:a(()=>[o(B,{ref_key:"moveFormRef",ref:I,model:g.value,"label-width":"auto"},{default:a(()=>[o(k,{label:""},{default:a(()=>[n("是否将选中的销售线索转移？")]),_:1}),o(k,{label:"销售线索所有人",prop:"userId",rules:[{required:!0,message:"请选择销售线索所有人"}]},{default:a(()=>[o(T,{modelValue:g.value.userId,"onUpdate:modelValue":l[5]||(l[5]=e=>g.value.userId=e),placeholder:""},{default:a(()=>[(u(!0),b(w,null,x(z.value,e=>(u(),E(P,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});export{ut as default};
