import{d as D,a0 as O,t as p,z as V,y as L,b as h,X as u,$ as t,i as o,J as T,o as d,Y as r,Z as s,h as f,ak as _,a7 as S}from"./index-D6lb1vAv.js";import{E as U}from"./pagination-Dv5jXxzL.js";/* empty css              */import"./tag-DyRGJO6y.js";import"./select-C-KkSNyU.js";import"./scrollbar-DU4G5b5p.js";import"./popper-PtN5-UwR.js";import{E as X,a as H}from"./table-column-Bdwx0tKL.js";import"./checkbox-DdrTfKwk.js";/* empty css                */import{E as M}from"./button-CnviZ8cJ.js";import{E as A}from"./link-BHgMAoRO.js";import{E as J}from"./image-viewer-CxaTYho1.js";import{T as Y}from"./index-BE1XV_oV.js";import{_ as Z,a as j,b as q}from"./Invoicing.vue_vue_type_script_setup_true_lang-BUZ1HWrV.js";import{a as w}from"./index-Dp2qlpNu.js";import{E as G}from"./ExhibitionChange-YbvqVwJW.js";/* empty css                *//* empty css                    *//* empty css                */import{E as K}from"./index-DNji5aOk.js";import"./isEqual-DtkQ-0cD.js";import"./_initCloneObject-DxFeGeIP.js";import"./use-form-item-D2gyIkin.js";import"./index-DtV3tWyM.js";import"./event-BB_Ol6Sd.js";import"./scroll-Cee1eboZ.js";import"./castArray-CqaCZPGK.js";import"./focus-trap-BL2pMCUV.js";import"./form-item-CSzeSa22.js";import"./_baseClone-B5IZTI-u.js";/* empty css                      */import"./index-DQNmj_SX.js";import"./refs-BbH7IMmI.js";/* empty css                                                              */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./progress-BDHTSMi0.js";import"./cloneDeep-CQWJaEaZ.js";import"./index-DqmM9QAu.js";import"./dialog-CEutNOMs.js";import"./index-Dw_FUmZc.js";import"./vnode-CWLT-RKK.js";/* empty css                    */import"./radio-DpKKZ63o.js";import"./index-CNcb9o6C.js";import"./aria-KgdLjl5h.js";import"./validator-BJ7NuE-R.js";const Q={class:"s-flex-col",style:{height:"100%"}},W={class:"",style:{"margin-bottom":"10px"}},ee={class:"s-flex-auto",style:{"min-height":"0"}},te={key:0},ie={class:"s-table-pagination"},Ke=D({__name:"Invoices",setup(oe){const g=O(),b=p(g.EXHIBITION_INFO);V(()=>g.EXHIBITION_INFO,(a,l)=>{a.id!==l.id&&(b.value=a,n())},{deep:!0});const m=L({page:1,perPage:10}),y=p(0),v=p({}),k=p([]),B=p(null),I=p([]),N=a=>{v.value=a,m.page=1,n()},n=async()=>{w.invoice.getList({exhibitionId:b.value.id,...v.value,...m}).then(a=>{a.code===0&&(k.value=a.data.data,y.value=a.data.total)})},z=a=>{K.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{w.invoice.del({id:a}).then(l=>{l.code===0?(S.success("删除成功"),n()):S.error(l.msg)})}).catch(()=>{})};w.invoice.getSearchField().then(a=>{a.code===0&&(I.value=a.data)});const x=p(null),C=p(null);return n(),(a,l)=>{const i=H,E=J,P=A,c=M,R=X,$=U;return d(),h(T,null,[u("div",Q,[u("div",W,[t(G)]),t(Y,{data:I.value,onSearch:N,type:"invoice"},null,8,["data"]),u("div",ee,[t(R,{ref_key:"tableRef",ref:B,data:k.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:o(()=>[t(i,{prop:"orderCode",label:"订单编号",width:"180"}),t(i,{prop:"companyName",label:"企业名称","min-width":"120"}),t(i,{prop:"exhibitionName",label:"展会名称","min-width":"120"}),t(i,{prop:"hallCode",label:"展馆号"}),t(i,{prop:"positionCode",label:"展位号"}),t(i,{prop:"positionType",label:"展位类型","min-width":"120"},{default:o(e=>[r(s({1:"标准",2:"特装"}[e.row.positionType]),1)]),_:1}),t(i,{prop:"positionArea",label:"面积"}),t(i,{prop:"positionUnitPrice",label:"展位单价","min-width":"120"}),t(i,{prop:"orderPrice",label:"订单金额","min-width":"120"}),t(i,{prop:"payType",label:"付款方式","min-width":"120"},{default:o(e=>[r(s({1:"全款",2:"分期"}[e.row.payType]),1)]),_:1}),t(i,{prop:"payStatus",label:"付款状态","min-width":"120"},{default:o(e=>[r(s({0:"未付款",1:"部分付款",2:"已付款"}[e.row.payStatus]),1)]),_:1}),t(i,{prop:"orderStatus",label:"订单状态","min-width":"120"},{default:o(e=>[r(s({0:"已撤销",1:"已完成"}[e.row.orderStatus]),1)]),_:1}),t(i,{prop:"orderType",label:"订单类型","min-width":"120"},{default:o(e=>[r(s({1:"代下单",2:"展商下单"}[e.row.orderType]),1)]),_:1}),t(i,{prop:"payCode",label:"录款编号","min-width":"120"}),t(i,{prop:"invoiceType",label:"发票类型","min-width":"120"},{default:o(e=>[r(s({1:"电子专票",2:"电子普票"}[e.row.invoiceType]),1)]),_:1}),t(i,{prop:"invoiceTitle",label:"发票抬头","min-width":"120"}),t(i,{prop:"socialCode",label:"社会信用代码","min-width":"120"}),t(i,{prop:"contact",label:"联系人"}),t(i,{prop:"phone",label:"手机号"}),t(i,{prop:"email",label:"邮箱"}),t(i,{prop:"invoicePrice",label:"开票金额","min-width":"120"}),t(i,{prop:"invoiceStatus",label:"开票状态","min-width":"120"},{default:o(e=>[r(s({1:"待开票",2:"已开票"}[e.row.invoiceStatus]),1)]),_:1}),t(i,{prop:"payImg",label:"付款凭证","min-width":"120"},{default:o(e=>[t(E,{style:{width:"30px",height:"30px","margin-right":"5px"},src:e.row.payImg,fit:"contain","preview-src-list":[e.row.payImg],"preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])]),_:1}),t(i,{prop:"receiveImg",label:"到款凭证","min-width":"120"},{default:o(e=>[t(E,{style:{width:"30px",height:"30px","margin-right":"5px"},src:e.row.receiveImg,fit:"contain","preview-src-list":[e.row.receiveImg],"preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])]),_:1}),t(i,{prop:"invoiceImg",label:"发票附件","min-width":"120"},{default:o(e=>[e.row.invoiceImg?(d(),f(P,{key:0,href:e.row.invoiceImg,type:"primary"},{default:o(()=>[r("下载")]),_:2},1032,["href"])):_("",!0)]),_:1}),t(i,{fixed:"right",label:"操作",width:"250"},{default:o(e=>[e.row.orderStatus!==0?(d(),h(T,{key:0},[e.row.invoiceStatus===1?(d(),f(c,{key:0,disabled:e.row.status===0,link:"",type:e.row.status===0?"":"primary",onClick:()=>x.value.openInvoiceSet(e.row)},{default:o(()=>[r("开票")]),_:2},1032,["disabled","type","onClick"])):_("",!0),t(c,{disabled:e.row.status===0,link:"",type:e.row.status===0?"":"primary"},{default:o(()=>[e.row.status===0?(d(),h("span",te,"上传发票")):(d(),f(Z,{key:1,id:e.row.id,onCallback:n},null,8,["id"]))]),_:2},1032,["disabled","type"]),t(c,{disabled:e.row.status===0,link:"",type:e.row.status===0?"":"primary",onClick:F=>C.value.setEdit(e.row)},{default:o(()=>[r("编辑")]),_:2},1032,["disabled","type","onClick"])],64)):_("",!0),t(c,{link:"",type:"danger",onClick:F=>z([e.row.id])},{default:o(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),u("div",ie,[t($,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:y.value,"current-page":m.page,"onUpdate:currentPage":l[0]||(l[0]=e=>m.page=e),"page-size":m.perPage,"onUpdate:pageSize":l[1]||(l[1]=e=>m.perPage=e),onChange:n},null,8,["total","current-page","page-size"])])]),t(j,{ref_key:"editInvoiceRef",ref:C,onCallback:n},null,512),t(q,{ref_key:"invoicingRef",ref:x,onCallback:n},null,512)],64)}}});export{Ke as default};