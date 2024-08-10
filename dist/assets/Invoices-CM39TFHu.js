import{d as D,a0 as O,t as p,z as V,y as L,b as _,X as u,$ as t,i as o,J as T,o as d,Y as r,Z as s,h as f,ak as h,a7 as S}from"./index-DEM1Q7ah.js";import{E as U}from"./pagination-CxeK4p13.js";/* empty css              */import"./tag-BOE4AccX.js";import"./select-DycYLwTT.js";import"./scrollbar-CyicQk5x.js";import"./popper-6cDUjaRW.js";import{E as X,a as H}from"./table-column-wBiq0U5n.js";import"./checkbox-URtfrshM.js";/* empty css                */import{E as M}from"./button-BhsazfUD.js";import{E as A}from"./link-BNrb30ws.js";import{E as J}from"./image-viewer-1i1B0ni1.js";import{_ as Y}from"./index.vue_vue_type_script_setup_true_lang-DP3pQG-h.js";/* empty css                                              */import{_ as Z,a as j,b as q}from"./Invoicing.vue_vue_type_script_setup_true_lang-93CEDGkY.js";import{a as w}from"./index-BF3y7m96.js";import{E as G}from"./ExhibitionChange-L0dImouF.js";/* empty css                *//* empty css                    *//* empty css                */import{E as K}from"./index-B9pqzlZv.js";import"./isEqual-Dnbp5P_R.js";import"./_initCloneObject-B0so-X2S.js";import"./use-form-item-FEc-havy.js";import"./index-rUWjPUE6.js";import"./event-BB_Ol6Sd.js";import"./scroll-CzTDrJbU.js";import"./castArray-DHLwE7Nc.js";import"./focus-trap-OSNMQz79.js";import"./form-item-BqEwLgzp.js";import"./_baseClone-CM4Uj5KP.js";/* empty css                      */import"./index-AZNK1TTm.js";import"./refs-D-YtBsDp.js";import"./progress-DrfPNYOl.js";import"./cloneDeep-D6tY96VI.js";import"./index-B2VnipfP.js";import"./dialog-OvK7FIEd.js";import"./index-apjzc23w.js";import"./vnode-Bod1Q6cQ.js";/* empty css                    */import"./radio-cDeAVAMw.js";import"./index-DvSBF-rc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./aria-KgdLjl5h.js";import"./validator-Cf7VM-w_.js";const Q={class:"s-flex-col",style:{height:"100%"}},W={class:"",style:{"margin-bottom":"10px"}},ee={class:"s-flex-auto",style:{"min-height":"0"}},te={key:0},ie={class:"s-table-pagination"},Ke=D({__name:"Invoices",setup(oe){const g=O(),b=p(g.EXHIBITION_INFO);V(()=>g.EXHIBITION_INFO,(a,l)=>{a.id!==l.id&&(b.value=a,n())},{deep:!0});const m=L({page:1,perPage:20}),y=p(0),v=p({}),k=p([]),B=p(null),I=p([]),N=a=>{v.value=a,m.page=1,n()},n=async()=>{w.invoice.getList({exhibitionId:b.value.id,...v.value,...m}).then(a=>{a.code===0&&(k.value=a.data.data,y.value=a.data.total)})},z=a=>{K.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{w.invoice.del({id:a}).then(l=>{l.code===0?(S.success("删除成功"),n()):S.error(l.msg)})}).catch(()=>{})};w.invoice.getSearchField().then(a=>{a.code===0&&(I.value=a.data)});const x=p(null),C=p(null);return n(),(a,l)=>{const i=H,E=J,P=A,c=M,$=X,R=U;return d(),_(T,null,[u("div",Q,[u("div",W,[t(G)]),t(Y,{data:I.value,onSearch:N,type:"invoice"},null,8,["data"]),u("div",ee,[t($,{ref_key:"tableRef",ref:B,data:k.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:o(()=>[t(i,{prop:"orderCode",label:"订单编号",width:"180"}),t(i,{prop:"companyName",label:"企业名称","min-width":"120"}),t(i,{prop:"exhibitionName",label:"展会名称","min-width":"120"}),t(i,{prop:"hallCode",label:"展馆号"}),t(i,{prop:"positionCode",label:"展位号"}),t(i,{prop:"positionType",label:"展位类型","min-width":"120"},{default:o(e=>[r(s({1:"标准",2:"特装"}[e.row.positionType]),1)]),_:1}),t(i,{prop:"positionArea",label:"面积"}),t(i,{prop:"positionUnitPrice",label:"展位单价","min-width":"120"}),t(i,{prop:"orderPrice",label:"订单金额","min-width":"120"}),t(i,{prop:"payType",label:"付款方式","min-width":"120"},{default:o(e=>[r(s({1:"全款",2:"分期"}[e.row.payType]),1)]),_:1}),t(i,{prop:"payStatus",label:"付款状态","min-width":"120"},{default:o(e=>[r(s({0:"未付款",1:"部分付款",2:"已付款"}[e.row.payStatus]),1)]),_:1}),t(i,{prop:"orderStatus",label:"订单状态","min-width":"120"},{default:o(e=>[r(s({0:"已撤销",1:"已完成"}[e.row.orderStatus]),1)]),_:1}),t(i,{prop:"orderType",label:"订单类型","min-width":"120"},{default:o(e=>[r(s({1:"代下单",2:"展商下单"}[e.row.orderType]),1)]),_:1}),t(i,{prop:"payCode",label:"录款编号","min-width":"120"}),t(i,{prop:"invoiceType",label:"发票类型","min-width":"120"},{default:o(e=>[r(s({1:"电子专票",2:"电子普票"}[e.row.invoiceType]),1)]),_:1}),t(i,{prop:"invoiceTitle",label:"发票抬头","min-width":"120"}),t(i,{prop:"socialCode",label:"社会信用代码","min-width":"120"}),t(i,{prop:"contact",label:"联系人"}),t(i,{prop:"phone",label:"手机号"}),t(i,{prop:"email",label:"邮箱"}),t(i,{prop:"invoicePrice",label:"开票金额","min-width":"120"}),t(i,{prop:"invoiceStatus",label:"开票状态","min-width":"120"},{default:o(e=>[r(s({1:"待开票",2:"已开票"}[e.row.invoiceStatus]),1)]),_:1}),t(i,{prop:"payImg",label:"付款凭证","min-width":"120"},{default:o(e=>[t(E,{style:{width:"30px",height:"30px","margin-right":"5px"},src:e.row.payImg,fit:"contain","preview-src-list":[e.row.payImg],"preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])]),_:1}),t(i,{prop:"receiveImg",label:"到款凭证","min-width":"120"},{default:o(e=>[t(E,{style:{width:"30px",height:"30px","margin-right":"5px"},src:e.row.receiveImg,fit:"contain","preview-src-list":[e.row.receiveImg],"preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])]),_:1}),t(i,{prop:"invoiceImg",label:"发票附件","min-width":"120"},{default:o(e=>[e.row.invoiceImg?(d(),f(P,{key:0,href:e.row.invoiceImg,type:"primary"},{default:o(()=>[r("下载")]),_:2},1032,["href"])):h("",!0)]),_:1}),t(i,{fixed:"right",label:"操作",width:"250"},{default:o(e=>[e.row.orderStatus!==0?(d(),_(T,{key:0},[e.row.invoiceStatus===1?(d(),f(c,{key:0,disabled:e.row.status===0,link:"",type:e.row.status===0?"":"primary",onClick:()=>x.value.openInvoiceSet(e.row)},{default:o(()=>[r("开票")]),_:2},1032,["disabled","type","onClick"])):h("",!0),t(c,{disabled:e.row.status===0,link:"",type:e.row.status===0?"":"primary"},{default:o(()=>[e.row.status===0?(d(),_("span",te,"上传发票")):(d(),f(Z,{key:1,id:e.row.id,onCallback:n},null,8,["id"]))]),_:2},1032,["disabled","type"]),t(c,{disabled:e.row.status===0,link:"",type:e.row.status===0?"":"primary",onClick:F=>C.value.setEdit(e.row)},{default:o(()=>[r("编辑")]),_:2},1032,["disabled","type","onClick"])],64)):h("",!0),t(c,{link:"",type:"danger",onClick:F=>z([e.row.id])},{default:o(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),u("div",ie,[t(R,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50,100],total:y.value,"current-page":m.page,"onUpdate:currentPage":l[0]||(l[0]=e=>m.page=e),"page-size":m.perPage,"onUpdate:pageSize":l[1]||(l[1]=e=>m.perPage=e),onChange:n},null,8,["total","current-page","page-size"])])]),t(j,{ref_key:"editInvoiceRef",ref:C,onCallback:n},null,512),t(q,{ref_key:"invoicingRef",ref:x,onCallback:n},null,512)],64)}}});export{Ke as default};