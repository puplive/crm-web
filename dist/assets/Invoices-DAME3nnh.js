import{d as $,S as D,l as p,t as V,s as L,b as C,O as c,R as e,i,F as E,o as d,P as r,Q as s,h as T,a3 as h}from"./index-rdy0OYRO.js";import{E as U}from"./pagination-De1-6RmW.js";/* empty css              */import"./tag-BRxh4fB-.js";import"./select-CExuIoDN.js";import"./scrollbar-CSo9-bN8.js";import"./popper-C1dJVMHe.js";import{E as H,a as M}from"./table-column-_ZPGVE9m.js";import"./checkbox-BmtYc19h.js";/* empty css                */import{E as X}from"./button-BoEhTCqL.js";import{E as A}from"./link-B3wmVwde.js";import{E as Q}from"./image-viewer-DXxSlsaA.js";import{T as j}from"./index-CY1WwUQk.js";import{_ as q,a as G,b as J}from"./Invoicing.vue_vue_type_script_setup_true_lang-CXFYhIQv.js";import{a as f}from"./index-BK20zsd7.js";import{E as K}from"./ExhibitionChange-DpCnAt3i.js";/* empty css                *//* empty css                    *//* empty css                */import{E as W}from"./index-WcCAwplB.js";import{c as S}from"./request-Lvc6RqUG.js";import"./isEqual-BVzc1rHc.js";import"./_initCloneObject-sB_DMj1P.js";import"./use-form-item-N45HEDO7.js";import"./index-C2sd-v8d.js";import"./event-BB_Ol6Sd.js";import"./scroll-_wDhAng0.js";import"./castArray-CeqcRjz9.js";import"./focus-trap-C2II57zL.js";import"./form-item-BokEJ3cU.js";import"./_baseClone-CCxL846H.js";/* empty css                      */import"./index-C_oY1CAo.js";import"./index-ClviQmnJ.js";import"./refs-L3Q9uv7g.js";/* empty css                                                              */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./progress-BURMJO_J.js";import"./cloneDeep-DSy1MFqv.js";import"./index-C6_JTAB7.js";import"./dialog-bIlRY0hW.js";import"./index-BFXEkJER.js";import"./vnode-CYLJveRl.js";/* empty css                    */import"./radio-DMEbYfAp.js";import"./index-C0ANg5tD.js";import"./aria-KgdLjl5h.js";import"./validator-Dz2EEjun.js";const Y={class:"s-flex-col",style:{height:"100%"}},Z={class:"",style:{"margin-bottom":"10px"}},ee={class:"s-flex-auto",style:{"min-height":"0"}},te={class:"s-table-pagination"},Ye=$({__name:"Invoices",setup(oe){const _=D(),g=p(_.EXHIBITION_INFO);V(()=>_.EXHIBITION_INFO,(a,l)=>{a.id!==l.id&&(g.value=a,n())},{deep:!0});const m=L({page:1,perPage:10}),w=p(0),b=p({}),v=p([]),B=p(null),y=p([]),N=a=>{b.value=a,m.page=1,n()},n=async()=>{f.invoice.getList({exhibitionId:g.value.id,...b.value,...m}).then(a=>{a.code===0&&(v.value=a.data.data,w.value=a.data.total)})},P=a=>{W.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{f.invoice.del({id:a}).then(l=>{l.code===0?(S.success("删除成功"),n()):S.error(l.msg)})}).catch(()=>{})};f.invoice.getSearchField().then(a=>{a.code===0&&(y.value=a.data)});const x=p(null),I=p(null);return n(),(a,l)=>{const o=M,k=Q,z=A,u=X,R=H,F=U;return d(),C(E,null,[c("div",Y,[c("div",Z,[e(K)]),e(j,{data:y.value,onSearch:N,type:"invoice"},null,8,["data"]),c("div",ee,[e(R,{ref_key:"tableRef",ref:B,data:v.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:i(()=>[e(o,{prop:"orderCode",label:"订单编号",width:"180"}),e(o,{prop:"companyName",label:"企业名称","min-width":"120"}),e(o,{prop:"exhibitionName",label:"展会名称","min-width":"120"}),e(o,{prop:"hallCode",label:"展馆号"}),e(o,{prop:"positionCode",label:"展位号"}),e(o,{prop:"positionType",label:"展位类型","min-width":"120"},{default:i(t=>[r(s({1:"标准",2:"特装"}[t.row.positionType]),1)]),_:1}),e(o,{prop:"positionArea",label:"面积"}),e(o,{prop:"positionUnitPrice",label:"展位单价","min-width":"120"}),e(o,{prop:"orderPrice",label:"订单金额","min-width":"120"}),e(o,{prop:"payType",label:"付款方式","min-width":"120"},{default:i(t=>[r(s({1:"全款",2:"分期"}[t.row.payType]),1)]),_:1}),e(o,{prop:"payStatus",label:"付款状态","min-width":"120"},{default:i(t=>[r(s({0:"未付款",1:"部分付款",2:"已付款"}[t.row.payStatus]),1)]),_:1}),e(o,{prop:"orderStatus",label:"订单状态","min-width":"120"},{default:i(t=>[r(s({0:"已撤销",1:"已完成"}[t.row.orderStatus]),1)]),_:1}),e(o,{prop:"orderType",label:"订单类型","min-width":"120"},{default:i(t=>[r(s({1:"代下单",2:"展商下单"}[t.row.orderType]),1)]),_:1}),e(o,{prop:"payCode",label:"录款编号","min-width":"120"}),e(o,{prop:"invoiceType",label:"发票类型","min-width":"120"},{default:i(t=>[r(s({1:"电子专票",2:"电子普票"}[t.row.invoiceType]),1)]),_:1}),e(o,{prop:"invoiceTitle",label:"发票抬头","min-width":"120"}),e(o,{prop:"socialCode",label:"社会信用代码","min-width":"120"}),e(o,{prop:"contact",label:"联系人"}),e(o,{prop:"phone",label:"手机号"}),e(o,{prop:"email",label:"邮箱"}),e(o,{prop:"invoicePrice",label:"开票金额","min-width":"120"}),e(o,{prop:"invoiceStatus",label:"开票状态","min-width":"120"},{default:i(t=>[r(s({1:"待开票",2:"已开票"}[t.row.invoiceStatus]),1)]),_:1}),e(o,{prop:"payImg",label:"付款凭证","min-width":"120"},{default:i(t=>[e(k,{style:{width:"30px",height:"30px","margin-right":"5px"},src:t.row.payImg,fit:"contain","preview-src-list":[t.row.payImg],"preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])]),_:1}),e(o,{prop:"receiveImg",label:"到款凭证","min-width":"120"},{default:i(t=>[e(k,{style:{width:"30px",height:"30px","margin-right":"5px"},src:t.row.receiveImg,fit:"contain","preview-src-list":[t.row.receiveImg],"preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])]),_:1}),e(o,{prop:"invoiceImg",label:"发票附件","min-width":"120"},{default:i(t=>[t.row.invoiceImg?(d(),T(z,{key:0,href:t.row.invoiceImg,type:"primary"},{default:i(()=>[r("下载")]),_:2},1032,["href"])):h("",!0)]),_:1}),e(o,{fixed:"right",label:"操作",width:"250"},{default:i(t=>[t.row.orderStatus!==0?(d(),C(E,{key:0},[t.row.invoiceStatus===1?(d(),T(u,{key:0,link:"",type:"primary",onClick:()=>x.value.openInvoiceSet(t.row),style:{"margin-right":"5px"}},{default:i(()=>[r("开票")]),_:2},1032,["onClick"])):h("",!0),e(q,{id:t.row.id,onCallback:n},null,8,["id"]),e(u,{link:"",type:"primary",onClick:O=>I.value.setEdit(t.row)},{default:i(()=>[r("编辑")]),_:2},1032,["onClick"])],64)):h("",!0),e(u,{link:"",type:"danger",onClick:O=>P([t.row.id])},{default:i(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),c("div",te,[e(F,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:w.value,"current-page":m.page,"onUpdate:currentPage":l[0]||(l[0]=t=>m.page=t),"page-size":m.perPage,"onUpdate:pageSize":l[1]||(l[1]=t=>m.perPage=t),onChange:n},null,8,["total","current-page","page-size"])])]),e(G,{ref_key:"editInvoiceRef",ref:I,onCallback:n},null,512),e(J,{ref_key:"invoicingRef",ref:x,onCallback:n},null,512)],64)}}});export{Ye as default};