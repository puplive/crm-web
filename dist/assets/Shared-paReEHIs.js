import{d as N,y as P,t as n,b as x,$ as t,X as h,i as l,a7 as s,o as g,Y as m,Z as k,J as T,a1 as U,h as D}from"./index-C87_S0X0.js";import{E as L}from"./pagination-Cgg3hM1t.js";/* empty css              */import"./tag-RoZFEDP4.js";import"./select-Csdkq7UQ.js";import"./scrollbar-DxPQPqXU.js";import"./popper-hyMQDtKC.js";import{E as R,a as V}from"./table-column-DNXh3J4_.js";import"./checkbox-TDN_dgO5.js";/* empty css                */import{E as $}from"./link-DCHjQzRN.js";import{E as G}from"./button-DJYD494Z.js";import{_ as I}from"./index.vue_vue_type_script_setup_true_lang-BgvGgw9z.js";/* empty css                                              */import{a as c}from"./index-DTWcfEy5.js";/* empty css                *//* empty css                    *//* empty css                */import{E as M}from"./index-Duzaiaui.js";import"./isEqual-BloZaXag.js";import"./_initCloneObject-C2tvf27W.js";import"./use-form-item-DauE0nXd.js";import"./index-D-aBMJJ-.js";import"./event-BB_Ol6Sd.js";import"./scroll-CcnxnV5P.js";import"./castArray-Dzl9ne7F.js";import"./focus-trap-Bil46Nh8.js";import"./form-item-CE14zIFt.js";import"./_baseClone-nQwVmJuc.js";/* empty css                      */import"./index-CXsE-owC.js";import"./refs-BmPDrur7.js";import"./index-BUlN0EUa.js";import"./vnode-DCEb7G0M.js";import"./aria-KgdLjl5h.js";import"./validator-Bo5yda6H.js";const J={class:"s-flex-col",style:{height:"100%"}},X={class:"s-table-operations"},Y={class:"s-flex-auto",style:{"min-height":"0"}},Z={class:"s-table-pagination"},Pe=N({__name:"Shared",setup(j){const r=P({page:1,perPage:20}),f=n(0),_=n({}),b=n([]),d=n(null),w=n([]),C=e=>{_.value=e,r.page=1,p()},p=async()=>{c.getList({status:3,...r,..._.value}).then(e=>{e.code===0&&(b.value=e.data.data,f.value=e.data.total)})},y=e=>{c.getClues({id:e}).then(o=>{o.code===0?(s.success("领取成功"),p()):s.error(o.msg)})},E=()=>{let e=d.value.getSelectionRows().map(o=>o.id);if(e.length===0){s.warning("请选择需要领取的线索");return}y(e)},S=()=>{let e=d.value.getSelectionRows().map(o=>o.id);if(e.length===0){s.warning("请选择需要删除的线索");return}M.confirm("确定删除所选线索？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{c.del({id:e}).then(o=>{o.code===0?(s.success("删除成功"),p()):s.error(o.msg)})}).catch(()=>{})};c.getSearchField().then(e=>{e.code===0&&(w.value=e.data)});const v=n([]);return(()=>{c.getCustomField().then(e=>{e.code===0&&(v.value=e.data)})})(),p(),(e,o)=>{const u=G,i=V,B=$,z=R,F=L;return g(),x("div",J,[t(I,{data:w.value,onSearch:C},null,8,["data"]),h("div",X,[t(u,{size:"small",onClick:E},{default:l(()=>[m("领取")]),_:1}),t(u,{size:"small",onClick:S},{default:l(()=>[m("删除")]),_:1})]),h("div",Y,[t(z,{ref_key:"tableRef",ref:d,data:b.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[t(i,{type:"selection",width:"42"}),t(i,{type:"index",label:"序号",width:"60"}),t(i,{prop:"companyName",label:"企业名称",width:"180"},{default:l(a=>[t(B,{href:"/market/clues/info?type=1&id="+a.row.id+"&exhibitionId="+a.row.exhibitionId+"&authUser="+a.row.authUser,type:"primary"},{default:l(()=>[m(k(a.row.companyName),1)]),_:2},1032,["href"])]),_:1}),t(i,{prop:"exhibitionName",label:"展会名称",width:"180"}),t(i,{prop:"exhibitionContact",label:"展会联系人","min-width":"120"}),t(i,{prop:"duties",label:"职位"}),t(i,{prop:"phone",label:"手机号","min-width":"120"}),t(i,{prop:"recordStatus",label:"跟进状态","min-width":"120"},{default:l(a=>[m(k({0:"无",1:"电话邀约",2:"客户拜访",3:"初步方案",4:"停滞"}[a.row.recordStatus]),1)]),_:1}),t(i,{prop:"authUser",label:"持有人"}),(g(!0),x(T,null,U(v.value,a=>(g(),D(i,{key:a.key,prop:a.key,label:a.name,"min-width":"120"},null,8,["prop","label"]))),128)),t(i,{fixed:"right",label:"操作",width:"120"},{default:l(a=>[t(u,{link:"",type:"primary",onClick:A=>y([a.row.id])},{default:l(()=>[m(" 领取 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),h("div",Z,[t(F,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50,100],total:f.value,"current-page":r.page,"onUpdate:currentPage":o[0]||(o[0]=a=>r.page=a),"page-size":r.perPage,"onUpdate:pageSize":o[1]||(o[1]=a=>r.perPage=a),onChange:p},null,8,["total","current-page","page-size"])])])}}});export{Pe as default};
