import{d as j,a0 as A,t as m,z as H,y as M,b as h,X as d,$ as s,i as l,J as g,o,a1 as q,Y as c,Z as x,h as i,ak as r,a7 as k}from"./index-mj6nX6cW.js";import{E as G,a as J,_ as Y}from"./sx-D2CSf7GX.js";/* empty css              */import"./tag-CTbgcjoR.js";import"./select-HiBRVLk4.js";import"./scrollbar-__C50hk7.js";import"./popper-B6FPKx2r.js";import{E as Z,a as K}from"./table-column-C0SMPn-F.js";import{E as Q,a as W}from"./checkbox-mY4ww0_f.js";/* empty css                *//* empty css                       */import{E as ee}from"./button-jcEyolu9.js";import{_ as te}from"./index.vue_vue_type_script_setup_true_lang-C0tv8dbu.js";/* empty css                                              */import{_ as oe}from"./ApplyInvoice.vue_vue_type_script_setup_true_lang-DrvVMPhF.js";import{a as b}from"./index-DaBHs8iz.js";import{E as ae}from"./ExhibitionChange-B1wgMzJj.js";/* empty css                *//* empty css                    *//* empty css                */import{E as $}from"./index-xcY17rZU.js";import"./isEqual-Dwqv-MoZ.js";import"./_initCloneObject-rtfkBEjx.js";import"./use-form-item-B27kjw89.js";import"./index-BbcXdUiV.js";import"./event-BB_Ol6Sd.js";import"./dropdown-BKe8mYFR.js";import"./scroll-8Dfu7w70.js";import"./castArray-B0k6tcL4.js";import"./focus-trap--BmSj3qZ.js";import"./form-item-BEwomLm8.js";import"./_baseClone-DHvQq53Q.js";/* empty css                      */import"./index-DC6y3mZW.js";import"./refs-BgHLWhVP.js";import"./dialog-BpCbY_Hc.js";import"./index-DGtgn1Uv.js";import"./vnode-BcANh4JO.js";import"./progress-DvV6uX9o.js";import"./cloneDeep-CG4m2PvF.js";/* empty css                    */import"./radio-wQQYbtO2.js";import"./index-DbC7hfxy.js";import"./rules-F8IXRWD9.js";import"./index-1OUTC0CW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./aria-KgdLjl5h.js";import"./validator-DtPP7zzP.js";const le={class:"s-flex-col",style:{height:"100%"}},ie={class:"",style:{"margin-bottom":"10px"}},re={class:"s-table-operations"},ne=d("img",{style:{width:"17px"},src:Y,alt:""},null,-1),pe={class:"s-flex-auto",style:{"min-height":"0"}},se={class:"s-table-pagination"},it=j({__name:"Payment",setup(me){const C=A(),E=m(C.EXHIBITION_INFO);H(()=>C.EXHIBITION_INFO,(e,a)=>{e.id!==a.id&&(E.value=e,u())},{deep:!0});const _=M({page:1,perPage:20}),T=m(0),B=m({}),I=m([]),N=m(null),P=m([]),S=m(null),z=e=>{B.value=e,_.page=1,u()},u=async()=>{b.payment.getList({exhibitionId:E.value.id,...B.value,..._}).then(e=>{e.code===0&&(I.value=e.data.data,T.value=e.data.total)})},V=e=>{$.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{b.payment.del({id:e}).then(a=>{a.code===0?(k.success("删除成功"),u()):k.error(a.msg)})}).catch(()=>{})},F=e=>{$.confirm("确定撤销？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{b.payment.revoke({id:e}).then(a=>{a.code===0?(k.success("撤销成功"),u()):k.error(a.msg)})}).catch(()=>{})};b.payment.getSearchField().then(e=>{e.code===0&&(P.value=e.data)}),u();const f=m([]),v=m([]),D=()=>{setTimeout(()=>{let e=[];N.value.columns.forEach(a=>{a.label&&e.push(a.label)}),v.value=e.join(",").split(","),f.value=e.join(",").split(",")},0)},n=e=>f.value.length===0&&v.value.length===0?!0:f.value.includes(e);return D(),(e,a)=>{const y=ee,O=Q,R=W,U=G,p=K,L=Z,X=J;return o(),h(g,null,[d("div",le,[d("div",ie,[s(ae)]),s(te,{data:P.value,onSearch:z,type:"payment"},null,8,["data"]),d("div",re,[s(U,{placement:"bottom-end",trigger:"click"},{reference:l(()=>[s(y,{size:"",link:""},{default:l(()=>[ne]),_:1})]),default:l(()=>[s(R,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=t=>f.value=t)},{default:l(()=>[d("ul",null,[(o(!0),h(g,null,q(v.value,t=>(o(),h("li",{class:"s-checkbox_item",key:t},[s(O,{label:t,value:t},{default:l(()=>[c(x(t),1)]),_:2},1032,["label","value"])]))),128))])]),_:1},8,["modelValue"])]),_:1})]),d("div",pe,[s(L,{ref_key:"tableRef",ref:N,data:I.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[n("编号")?(o(),i(p,{key:0,prop:"code",label:"编号",width:"180"})):r("",!0),n("企业名称")?(o(),i(p,{key:1,prop:"companyName",label:"企业名称","min-width":"120"})):r("",!0),n("展会名称")?(o(),i(p,{key:2,prop:"exhibitionName",label:"展会名称","min-width":"120"})):r("",!0),n("展位号")?(o(),i(p,{key:3,prop:"positionCode",label:"展位号"})):r("",!0),n("付款公司")?(o(),i(p,{key:4,prop:"payCompany",label:"付款公司","min-width":"120"})):r("",!0),n("付款金额")?(o(),i(p,{key:5,prop:"payPrice",label:"付款金额","min-width":"120"})):r("",!0),n("订单金额")?(o(),i(p,{key:6,prop:"orderPrice",label:"订单金额","min-width":"120"})):r("",!0),n("付款类型")?(o(),i(p,{key:7,prop:"payType",label:"付款类型","min-width":"120"},{default:l(t=>[c(x({1:"预定金",2:"首款",3:"二次款",4:"尾款",5:"转款"}[t.row.payType]),1)]),_:1})):r("",!0),n("收款账户")?(o(),i(p,{key:8,prop:"receiveAccount",label:"收款账户","min-width":"120"})):r("",!0),n("到款时间")?(o(),i(p,{key:9,prop:"payTime",label:"到款时间","min-width":"120"})):r("",!0),n("发票")?(o(),i(p,{key:10,prop:"invoiceStatus",label:"发票"},{default:l(t=>[c(x({0:"未申请",1:"待开票",2:"已开票"}[t.row.invoiceStatus]),1)]),_:1})):r("",!0),n("持有人")?(o(),i(p,{key:11,prop:"clueUser",label:"持有人"})):r("",!0),n("操作")?(o(),i(p,{key:12,fixed:"right",label:"操作",width:"220"},{default:l(t=>[s(y,{link:"",type:"primary",onClick:w=>e.$router.push({name:"FinancesPaymentDetail",query:{id:t.row.id}})},{default:l(()=>[c("详情")]),_:2},1032,["onClick"]),t.row.status===0?(o(),h(g,{key:0},[s(y,{link:"",type:"",disabled:""},{default:l(()=>[c("已撤销")]),_:1}),s(y,{link:"",type:"danger",onClick:w=>V(t.row.id)},{default:l(()=>[c("删除")]),_:2},1032,["onClick"])],64)):(o(),h(g,{key:1},[t.row.invoiceStatus===0?(o(),i(y,{key:0,link:"",type:"primary",onClick:w=>S.value.setApply(t.row)},{default:l(()=>[c("申请发票")]),_:2},1032,["onClick"])):r("",!0),s(y,{link:"",type:"danger",onClick:w=>F(t.row.id)},{default:l(()=>[c("撤销")]),_:2},1032,["onClick"])],64))]),_:1})):r("",!0)]),_:1},8,["data"])]),d("div",se,[s(X,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50,100],total:T.value,"current-page":_.page,"onUpdate:currentPage":a[1]||(a[1]=t=>_.page=t),"page-size":_.perPage,"onUpdate:pageSize":a[2]||(a[2]=t=>_.perPage=t),onChange:u},null,8,["total","current-page","page-size"])])]),s(oe,{ref_key:"applyInvoiceRef",ref:S,onCallback:u},null,512)],64)}}});export{it as default};
