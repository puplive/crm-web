import{d as le,y as oe,t as n,az as ae,b as f,X as _,$ as a,i as o,J as v,a5 as re,am as ne,a7 as s,o as r,Y as i,a1 as V,Z as q,h as u,ak as m}from"./index-9GELev4n.js";import{E as se}from"./dialog-lJDMfgAr.js";/* empty css                */import{a as ie,E as ue}from"./form-item-C6u5xSkS.js";/* empty css              */import"./tag-BDKE_mDG.js";import{E as de,a as me}from"./select-BG1H5LKe.js";import"./scrollbar-CV18y64-.js";import"./popper-BssiT5zj.js";import{E as pe,a as ce,_ as fe}from"./sx-ifLMIbVy.js";import{E as _e,a as ve}from"./table-column-DOCZRfRc.js";import{E as ge,a as he}from"./checkbox-C95K4cGw.js";/* empty css                */import{E as be}from"./link-DHW3yf7U.js";/* empty css                       */import{E as ke}from"./button-DGNGbMUM.js";import{_ as ye}from"./index.vue_vue_type_script_setup_true_lang-DZqrZszS.js";/* empty css                                              */import{a as g}from"./index-DuRp3qUG.js";import{e as we}from"./index-BDTP5sjn.js";/* empty css                *//* empty css                    */import"./index-B8JoeeIc.js";import"./use-form-item-DFzt-daS.js";import"./scroll-CfbtlTPP.js";import"./vnode-BA2voiJd.js";import"./focus-trap-DL3jigOq.js";import"./refs-qaiJHSTU.js";import"./event-BB_Ol6Sd.js";import"./castArray-39s2E-r6.js";import"./_baseClone-CqMYNXc3.js";import"./_initCloneObject-Bn3eSnmQ.js";import"./isEqual-B59HjOBA.js";import"./index-CYJ5HjxU.js";import"./dropdown-DNpdIpJW.js";/* empty css                      */import"./index-DCYIqfOs.js";const xe={class:"s-flex-col",style:{height:"100%"}},Ee={class:"s-table-operations"},Ce=_("img",{style:{width:"17px"},src:fe,alt:""},null,-1),Ve={class:"s-flex-auto",style:{"min-height":"0"}},Fe={class:"s-table-pagination"},Se={class:"dialog-footer"},Ue={class:"dialog-footer"},_t=le({__name:"Historical",setup(Ie){re(),ne();const h=oe({page:1,perPage:20}),U=n(0),I=n({}),R=n([]),x=n(null),z=n([]),N=n([]),G=t=>{I.value=t,h.page=1,b()},b=async()=>{g.getList({status:4,...h,...I.value}).then(t=>{t.code===0&&(R.value=t.data.data,U.value=t.data.total)})},E=n({}),C=n(!1),P=n(null),H=()=>{P.value.validate(t=>{t&&g.changeIntention(E.value).then(l=>{l.code===0?(s.success("转为意向成功"),b(),C.value=!1):s.error(l.msg)})})},k=n({}),y=n(!1),T=n(null),B=n([]),J=()=>{let t=x.value.getSelectionRows().map(l=>l.id);if(t.length===0){s.error("请选择需要转移的线索");return}k.value.id=t,y.value=!0},O=()=>{T.value.validate(t=>{t&&g.changeUser(k.value).then(l=>{l.code===0?(s.success("转移成功"),y.value=!1,b()):s.error(l.msg)})})},X=()=>{let t=x.value.getSelectionRows().map(l=>l.id);if(t.length===0){s.error("请选择需要移至公海的线索");return}g.changePublic({id:t}).then(l=>{l.code===0?(s.success("移至公海成功"),b()):s.error(l.msg)})},Y=()=>{g.clueExport({status:4}).then(t=>{t.code===0?(s.success("导出成功"),window.open(t.data.url,"_self")):s.error(t.msg)})};g.getSearchField().then(t=>{t.code===0&&(z.value=t.data)}),we().then(t=>{t.code===0&&(N.value=t.data)}),ae().then(t=>{t.code===0&&(B.value=t.data)});const D=n([]);(()=>{g.getCustomField().then(t=>{t.code===0&&(D.value=t.data,Z())})})(),b();const w=n([]),F=n([]),Z=()=>{setTimeout(()=>{let t=[];x.value.columns.forEach(l=>{l.label&&t.push(l.label)}),F.value=t.join(",").split(","),w.value=t.join(",").split(",")},0)},p=t=>w.value.length===0&&F.value.length===0?!0:w.value.includes(t);return(t,l)=>{const c=ke,A=ge,K=he,Q=pe,d=ve,W=be,ee=_e,te=ce,L=de,M=me,S=ie,$=ue,j=se;return r(),f(v,null,[_("div",xe,[a(ye,{data:z.value,onSearch:G},null,8,["data"]),_("div",Ee,[a(c,{onClick:Y},{default:o(()=>[i("导出")]),_:1}),a(c,{onClick:J},{default:o(()=>[i("转移给他人")]),_:1}),a(c,{onClick:X},{default:o(()=>[i("移至公海")]),_:1}),a(Q,{placement:"bottom-end",trigger:"click"},{reference:o(()=>[a(c,{size:"",link:""},{default:o(()=>[Ce]),_:1})]),default:o(()=>[a(K,{modelValue:w.value,"onUpdate:modelValue":l[0]||(l[0]=e=>w.value=e)},{default:o(()=>[_("ul",null,[(r(!0),f(v,null,V(F.value,e=>(r(),f("li",{class:"s-checkbox_item",key:e},[a(A,{label:e,value:e},{default:o(()=>[i(q(e),1)]),_:2},1032,["label","value"])]))),128))])]),_:1},8,["modelValue"])]),_:1})]),_("div",Ve,[a(ee,{ref_key:"tableRef",ref:x,data:R.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:o(()=>[a(d,{type:"selection",width:"42"}),p("公司名称")?(r(),u(d,{key:0,prop:"companyName",label:"公司名称",width:"180"},{default:o(e=>[a(W,{href:"/market/clues/info?type=1&id="+e.row.id+"&exhibitionId="+e.row.exhibitionId+"&authUser="+e.row.authUser,type:"primary"},{default:o(()=>[i(q(e.row.companyName),1)]),_:2},1032,["href"])]),_:1})):m("",!0),p("联系方式")?(r(),u(d,{key:1,prop:"exhibitionContact",label:"联系方式",width:"180"})):m("",!0),p("职务")?(r(),u(d,{key:2,prop:"duties",label:"职务"})):m("",!0),p("电话")?(r(),u(d,{key:3,prop:"phone",label:"电话"})):m("",!0),p("记录时间")?(r(),u(d,{key:4,prop:"recordTime",label:"记录时间",width:"180"})):m("",!0),p("记录内容")?(r(),u(d,{key:5,prop:"recordText",label:"记录内容","min-width":"120"})):m("",!0),p("授权人")?(r(),u(d,{key:6,prop:"authUser",label:"授权人"})):m("",!0),(r(!0),f(v,null,V(D.value,e=>(r(),f(v,{key:e.key},[p(e.name)?(r(),u(d,{key:0,prop:e.key,label:e.name,"min-width":"120"},null,8,["prop","label"])):m("",!0)],64))),128))]),_:1},8,["data"])]),_("div",Fe,[a(te,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50,100],total:U.value,"current-page":h.page,"onUpdate:currentPage":l[1]||(l[1]=e=>h.page=e),"page-size":h.perPage,"onUpdate:pageSize":l[2]||(l[2]=e=>h.perPage=e),onChange:b},null,8,["total","current-page","page-size"])])]),a(j,{modelValue:C.value,"onUpdate:modelValue":l[5]||(l[5]=e=>C.value=e),title:"转为意向客户",width:"500",draggable:""},{footer:o(()=>[_("div",Se,[a(c,{onClick:l[4]||(l[4]=e=>C.value=!1)},{default:o(()=>[i("取消")]),_:1}),a(c,{type:"primary",onClick:H},{default:o(()=>[i("确定")]),_:1})])]),default:o(()=>[a($,{ref_key:"willFormRef",ref:P,model:E.value,"label-width":"auto","label-position":"left"},{default:o(()=>[a(S,{label:"项目",prop:"exhibitionId",rules:[{required:!0,message:"请选择项目"}]},{default:o(()=>[a(M,{modelValue:E.value.exhibitionId,"onUpdate:modelValue":l[3]||(l[3]=e=>E.value.exhibitionId=e),placeholder:""},{default:o(()=>[(r(!0),f(v,null,V(N.value,e=>(r(),f(v,{key:e.id},[e.status===1?(r(),u(L,{key:0,label:e.exhibitionName,value:e.id},null,8,["label","value"])):m("",!0)],64))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),a(j,{modelValue:y.value,"onUpdate:modelValue":l[8]||(l[8]=e=>y.value=e),title:"转移销售线索",width:"500",draggable:""},{footer:o(()=>[_("div",Ue,[a(c,{onClick:l[7]||(l[7]=e=>y.value=!1)},{default:o(()=>[i("取消")]),_:1}),a(c,{type:"primary",onClick:O},{default:o(()=>[i("确定")]),_:1})])]),default:o(()=>[a($,{ref_key:"moveFormRef",ref:T,model:k.value,"label-width":"auto","label-position":"left"},{default:o(()=>[a(S,{label:""},{default:o(()=>[i("是否将选中的销售线索转移？")]),_:1}),a(S,{label:"销售线索所有人",prop:"userId",rules:[{required:!0,message:"请选择销售线索所有人"}]},{default:o(()=>[a(M,{modelValue:k.value.userId,"onUpdate:modelValue":l[6]||(l[6]=e=>k.value.userId=e),placeholder:""},{default:o(()=>[(r(!0),f(v,null,V(B.value,e=>(r(),u(L,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});export{_t as default};
