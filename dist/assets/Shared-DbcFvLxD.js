import{d as T,s as N,l as n,b as x,R as t,O as h,i as l,o as g,P as m,Q as k,F as P,U,h as R}from"./index-BgyAZvUt.js";import{E as D}from"./el-pagination-yaz31Ocb.js";/* empty css                 */import"./el-tag-DEVuN4Hv.js";import"./el-select-oKGMiqGO.js";import"./el-scrollbar-HjInS6QP.js";import"./el-popper-BpTaYU20.js";import{E as L,a as V}from"./el-table-column-DuJ8cpfO.js";import"./el-checkbox-B_5_CmJi.js";import"./el-tooltip-l0sNRNKZ.js";import{E as G}from"./el-link-D4cGR2Af.js";/* empty css                  */import{T as I}from"./index-B7fo2GEf.js";import{a as c}from"./index-jmhcWF7T.js";/* empty css                   *//* empty css                       *//* empty css                   */import{c as s}from"./request-D6fvGTDh.js";import{E as M}from"./index-DtGwBMso.js";import{E as O}from"./index-Z1v5JTS_.js";import"./isEqual-Bds9XCaA.js";import"./_initCloneObject-D27w6Cg6.js";import"./use-form-item-Dm97kLAn.js";import"./index-CunGH_dN.js";import"./event-BB_Ol6Sd.js";import"./scroll-ByT-L5SG.js";import"./castArray-DOsbaNJB.js";import"./el-form-item-w7WYBo5V.js";import"./_baseClone-DBDXGBzA.js";/* empty css                                                              */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-B52ECxk7.js";import"./vnode-ptL780bU.js";import"./aria-KgdLjl5h.js";import"./validator-BkA75A30.js";const Q={class:"s-flex-col",style:{height:"100%"}},$={class:"s-table-operations"},j={class:"s-flex-auto",style:{"min-height":"0"}},q={class:"s-table-pagination"},Te=T({__name:"Shared",setup(A){const r=N({page:1,perPage:10}),f=n(0),_=n({}),b=n([]),d=n(null),w=n([]),C=e=>{_.value=e,r.page=1,p()},p=async()=>{c.getList({status:3,...r,..._.value}).then(e=>{e.code===0&&(b.value=e.data.data,f.value=e.data.total)})},v=e=>{c.getClues({id:e}).then(o=>{o.code===0?(s.success("领取成功"),p()):s.error(o.msg)})},E=()=>{let e=d.value.getSelectionRows().map(o=>o.id);if(e.length===0){s.warning("请选择需要领取的线索");return}v(e)},S=()=>{let e=d.value.getSelectionRows().map(o=>o.id);if(e.length===0){s.warning("请选择需要删除的线索");return}M.confirm("确定删除所选线索？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{c.del({id:e}).then(o=>{o.code===0?(s.success("删除成功"),p()):s.error(o.msg)})}).catch(()=>{})};c.getSearchField().then(e=>{e.code===0&&(w.value=e.data)});const y=n([]);return(()=>{c.getCustomField().then(e=>{e.code===0&&(y.value=e.data)})})(),p(),(e,o)=>{const u=O,i=V,B=G,F=L,z=D;return g(),x("div",Q,[t(I,{data:w.value,onSearch:C},null,8,["data"]),h("div",$,[t(u,{size:"small",onClick:E},{default:l(()=>[m("领取")]),_:1}),t(u,{size:"small",onClick:S},{default:l(()=>[m("删除")]),_:1})]),h("div",j,[t(F,{ref_key:"tableRef",ref:d,data:b.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[t(i,{type:"selection",width:"42"}),t(i,{type:"index",label:"序号",width:"60"}),t(i,{prop:"companyName",label:"企业名称",width:"180"},{default:l(a=>[t(B,{href:"/market/clues/info?type=1&id="+a.row.id+"&exhibitionId="+a.row.exhibitionId+"&authUser="+a.row.authUser,type:"primary"},{default:l(()=>[m(k(a.row.companyName),1)]),_:2},1032,["href"])]),_:1}),t(i,{prop:"exhibitionName",label:"展会名称",width:"180"}),t(i,{prop:"exhibitionContact",label:"展会联系人","min-width":"120"}),t(i,{prop:"duties",label:"职位"}),t(i,{prop:"phone",label:"手机号","min-width":"120"}),t(i,{prop:"recordStatus",label:"跟进状态","min-width":"120"},{default:l(a=>[m(k({0:"无",1:"电话邀约",2:"客户拜访",3:"初步方案",4:"停滞"}[a.row.recordStatus]),1)]),_:1}),t(i,{prop:"authUser",label:"持有人"}),(g(!0),x(P,null,U(y.value,a=>(g(),R(i,{key:a.key,prop:a.key,label:a.name,"min-width":"120"},null,8,["prop","label"]))),128)),t(i,{fixed:"right",label:"操作",width:"120"},{default:l(a=>[t(u,{link:"",type:"primary",onClick:J=>v([a.row.id])},{default:l(()=>[m(" 领取 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),h("div",q,[t(z,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:f.value,"current-page":r.page,"onUpdate:currentPage":o[0]||(o[0]=a=>r.page=a),"page-size":r.perPage,"onUpdate:pageSize":o[1]||(o[1]=a=>r.perPage=a),onChange:p},null,8,["total","current-page","page-size"])])])}}});export{Te as default};
