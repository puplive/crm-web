import{d as P,s as z,l as n,b as B,O as c,R as e,i as o,F as R,o as y,P as r,Q as s,h as N,a3 as $}from"./index-Dz1Y8LWb.js";import{E as D}from"./el-pagination-iwKI8VB7.js";/* empty css                 */import"./el-tag-CTgZ5iEN.js";import"./el-select-DNk8878i.js";import"./el-scrollbar-DfbbODeW.js";import"./el-popper-C9-796k1.js";import{E as F,a as V}from"./el-table-column-g1ii7CMN.js";import"./el-checkbox-BDy7Qsnj.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                  */import{E as U}from"./el-image-viewer-Dc1HyBqH.js";import{T as L}from"./index-BTKyx4YN.js";import{_ as M,a as A,b as O}from"./Invoicing.vue_vue_type_script_setup_true_lang-DIntQESG.js";import{a as g}from"./index-CvPXkFLb.js";/* empty css                   *//* empty css                       *//* empty css                   */import{E as Q}from"./index-CNguBD4w.js";import{c as x}from"./request-D7y66Ed_.js";import{E as j}from"./index-DV7yTXEw.js";import"./isEqual-bSM8JOEW.js";import"./_initCloneObject-CCoVJgua.js";import"./use-form-item-DptQ09ON.js";import"./index-HaHskoCV.js";import"./event-BB_Ol6Sd.js";import"./scroll-B9QXGJQj.js";import"./castArray-CNAh-MPJ.js";import"./el-form-item-ba9kzpCm.js";import"./_baseClone-CsMyym3Q.js";import"./tool-BQQRKqby.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./el-progress-CorVyrL8.js";import"./cloneDeep-ArAth11S.js";import"./index-BI5m8NdN.js";import"./el-dialog-Blg6ezlA.js";import"./index-DNVrDi-y.js";import"./vnode-C-GuxPjy.js";import"./refs-DqzTb2-3.js";/* empty css                       */import"./el-radio-DvDeQHJ7.js";import"./aria-KgdLjl5h.js";import"./validator-Dzofbpp1.js";const q={class:"s-flex-col",style:{height:"100%"}},G=c("div",null,null,-1),H={class:"s-flex-auto",style:{"min-height":"0"}},J={class:"s-table-pagination"},Le=P({__name:"Invoices",setup(K){const m=z({page:1,perPage:10}),h=n(0),f=n({}),w=n([]),k=n(null),_=n([]),C=a=>{f.value=a,m.page=1,l()},l=async()=>{g.invoice.getList({...f.value,...m}).then(a=>{a.code===0&&(w.value=a.data.data,h.value=a.data.total)})},T=a=>{Q.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{g.invoice.del({id:a}).then(p=>{p.code===0?(x.success("删除成功"),l()):x.error(p.msg)})}).catch(()=>{})};g.invoice.getSearchField().then(a=>{a.code===0&&(_.value=a.data)});const v=n(null),b=n(null);return l(),(a,p)=>{const i=V,d=U,u=j,E=F,I=D;return y(),B(R,null,[c("div",q,[G,e(L,{data:_.value,onSearch:C,type:"invoice"},null,8,["data"]),c("div",H,[e(E,{ref_key:"tableRef",ref:k,data:w.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:o(()=>[e(i,{prop:"orderCode",label:"订单编号",width:"180"}),e(i,{prop:"companyName",label:"企业名称","min-width":"120"}),e(i,{prop:"hallCode",label:"展馆号"}),e(i,{prop:"positionCode",label:"展位号"}),e(i,{prop:"positionType",label:"展位类型","min-width":"120"},{default:o(t=>[r(s({1:"标准",2:"特装"}[t.row.positionType]),1)]),_:1}),e(i,{prop:"positionArea",label:"面积"}),e(i,{prop:"positionUnitPrice",label:"展位单价","min-width":"120"}),e(i,{prop:"orderPrice",label:"订单金额","min-width":"120"}),e(i,{prop:"payType",label:"付款方式","min-width":"120"},{default:o(t=>[r(s({1:"全款",2:"分期"}[t.row.payType]),1)]),_:1}),e(i,{prop:"payStatus",label:"付款状态","min-width":"120"},{default:o(t=>[r(s({0:"未付款",1:"部分付款",2:"已付款"}[t.row.payStatus]),1)]),_:1}),e(i,{prop:"orderStatus",label:"订单状态","min-width":"120"},{default:o(t=>[r(s({0:"已撤销",1:"已完成"}[t.row.orderStatus]),1)]),_:1}),e(i,{prop:"orderType",label:"订单类型","min-width":"120"},{default:o(t=>[r(s({1:"代下单",2:"展商下单"}[t.row.orderType]),1)]),_:1}),e(i,{prop:"payCode",label:"录款编号","min-width":"120"}),e(i,{prop:"invoiceType",label:"发票类型","min-width":"120"},{default:o(t=>[r(s({1:"电子专票",2:"电子普票"}[t.row.invoiceType]),1)]),_:1}),e(i,{prop:"invoiceTitle",label:"发票抬头","min-width":"120"}),e(i,{prop:"socialCode",label:"社会信用代码","min-width":"120"}),e(i,{prop:"contact",label:"联系人"}),e(i,{prop:"phone",label:"手机号"}),e(i,{prop:"email",label:"邮箱"}),e(i,{prop:"invoicePrice",label:"开票金额","min-width":"120"}),e(i,{prop:"invoiceStatus",label:"开票状态","min-width":"120"},{default:o(t=>[r(s({0:"待开票",1:"已开票"}[t.row.invoiceStatus]),1)]),_:1}),e(i,{prop:"payImg",label:"付款凭证","min-width":"120"},{default:o(t=>[e(d,{style:{width:"30px",height:"30px","margin-right":"5px"},src:t.row.payImg,fit:"contain","preview-src-list":[t.row.payImg],"preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])]),_:1}),e(i,{prop:"receiveImg",label:"到款凭证","min-width":"120"},{default:o(t=>[e(d,{style:{width:"30px",height:"30px","margin-right":"5px"},src:t.row.receiveImg,fit:"contain","preview-src-list":[t.row.receiveImg],"preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])]),_:1}),e(i,{prop:"invoiceImg",label:"发票附件","min-width":"120"},{default:o(t=>[e(d,{style:{width:"30px",height:"30px","margin-right":"5px"},src:t.row.invoiceImg,fit:"contain","preview-src-list":[t.row.invoiceImg],"preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])]),_:1}),e(i,{fixed:"right",label:"操作",width:"250"},{default:o(t=>[t.row.invoiceStatus===0?(y(),N(u,{key:0,link:"",type:"primary",onClick:()=>v.value.openInvoiceSet(t.row),style:{"margin-right":"5px"}},{default:o(()=>[r("开票")]),_:2},1032,["onClick"])):$("",!0),e(M,{id:t.row.id,onCallback:l},null,8,["id"]),e(u,{link:"",type:"primary",onClick:S=>b.value.setEdit(t.row)},{default:o(()=>[r("编辑")]),_:2},1032,["onClick"]),e(u,{link:"",type:"danger",onClick:S=>T([t.row.id])},{default:o(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),c("div",J,[e(I,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:h.value,"current-page":m.page,"onUpdate:currentPage":p[0]||(p[0]=t=>m.page=t),"page-size":m.perPage,"onUpdate:pageSize":p[1]||(p[1]=t=>m.perPage=t),onChange:l},null,8,["total","current-page","page-size"])])]),e(A,{ref_key:"editInvoiceRef",ref:b,onCallback:l},null,512),e(O,{ref_key:"invoicingRef",ref:v,onCallback:l},null,512)],64)}}});export{Le as default};
