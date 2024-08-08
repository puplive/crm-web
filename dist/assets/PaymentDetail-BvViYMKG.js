import{d as A,l as f,b as k,O as l,R as e,i,Q as s,F as b,Y as q,a5 as z,o as d,P as a,h as y,a3 as w,V as F,W as M}from"./index-rdy0OYRO.js";import{E as O,a as Q}from"./table-column-_ZPGVE9m.js";import"./checkbox-BmtYc19h.js";/* empty css                */import"./popper-C1dJVMHe.js";import"./scrollbar-CSo9-bN8.js";import{E as W}from"./image-viewer-DXxSlsaA.js";import"./tag-BRxh4fB-.js";import{E as Y}from"./button-BoEhTCqL.js";import{a as h}from"./index-BK20zsd7.js";import{_ as j,a as G,b as H}from"./Invoicing.vue_vue_type_script_setup_true_lang-CXFYhIQv.js";import{_ as J}from"./EditPayment.vue_vue_type_script_setup_true_lang-BEyxaKlv.js";import{_ as K}from"./ApplyInvoice.vue_vue_type_script_setup_true_lang-DL4gAYkE.js";/* empty css                    *//* empty css              *//* empty css                *//* empty css                */import{E as g}from"./index-WcCAwplB.js";import{c as _}from"./request-Lvc6RqUG.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-form-item-N45HEDO7.js";import"./_initCloneObject-sB_DMj1P.js";import"./event-BB_Ol6Sd.js";import"./isEqual-BVzc1rHc.js";import"./focus-trap-C2II57zL.js";import"./index-C2sd-v8d.js";import"./scroll-_wDhAng0.js";import"./progress-BURMJO_J.js";import"./cloneDeep-DSy1MFqv.js";import"./_baseClone-CCxL846H.js";import"./index-C6_JTAB7.js";import"./dialog-bIlRY0hW.js";import"./index-BFXEkJER.js";import"./vnode-CYLJveRl.js";import"./refs-L3Q9uv7g.js";import"./form-item-BokEJ3cU.js";import"./castArray-CeqcRjz9.js";/* empty css                    */import"./radio-DMEbYfAp.js";import"./row-vmoVE2q7.js";import"./col-Dg5P27t5.js";import"./date-picker-M2LK1Zlc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./arrays-6TrVLtTe.js";import"./index-BgP6lWe4.js";import"./select-CExuIoDN.js";import"./rules-F8IXRWD9.js";import"./aria-KgdLjl5h.js";import"./validator-Dz2EEjun.js";const C=v=>(F("data-v-c9a8be7f"),v=v(),M(),v),U={class:"recording"},X={class:"top"},Z=C(()=>l("span",{style:{"margin-right":"20px"}},"订单到款记录",-1)),ee={class:"p2"},te=C(()=>l("div",{class:"title"},"收款记录",-1)),oe={class:"table"},ie=C(()=>l("div",{class:"title"},"发票详情",-1)),ae={class:"table"},le=A({__name:"PaymentDetail",setup(v){const R=q(),S=z(),P=f(Number(S.query.id)),p=f({invoice:[]}),m=()=>{h.payment.getDetail({id:P.value}).then(r=>{r.code===0&&(p.value=r.data)})},D=r=>{g.confirm("确定撤销？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{h.payment.revoke({id:r}).then(n=>{n.code===0?(_.success("撤销成功"),m()):_.error(n.msg)})}).catch(()=>{})},N=r=>{g.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{h.payment.del({id:r}).then(n=>{n.code===0?(_.success("删除成功"),R.back()):_.error(n.msg)})}).catch(()=>{})},V=r=>{g.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{h.invoice.del({id:r}).then(n=>{n.code===0?(_.success("删除成功"),m()):_.error(n.msg)})}).catch(()=>{})},x=f(null),I=f(null),T=f(null),E=f(null);return m(),(r,n)=>{const c=Y,o=Q,$=W,B=O;return d(),k(b,null,[l("div",U,[l("div",X,[Z,e(c,{onClick:r.$router.back},{default:i(()=>[a("返回")]),_:1},8,["onClick"])]),l("div",ee,[e(c,{link:"",type:"primary",onClick:n[0]||(n[0]=t=>r.$router.push({name:"ContractDetail",query:{orderId:p.value.orderId}}))},{default:i(()=>[a("查看合同")]),_:1}),l("span",null,"订单编号："+s(p.value.orderCode),1),l("span",null,"展位号："+s(p.value.positionCode),1),l("span",null,"面积："+s(p.value.positionArea)+"平方米",1),l("span",null,"展位数："+s(p.value.positionNum)+"个",1),l("span",null,"订单金额："+s(p.value.orderPrice)+"元",1)]),l("div",null,[te,l("div",oe,[e(B,{data:[p.value],border:"","table-layout":"fixed","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:i(()=>[e(o,{prop:"code",label:"录款编号","min-width":"120"}),e(o,{prop:"payCompany",label:"付款公司","min-width":"120"}),e(o,{prop:"payType",label:"到款类型","min-width":"120"},{default:i(t=>[a(s({1:"预定金",2:"首款",3:"二次款",4:"尾款",5:"转款"}[t.row.payType]),1)]),_:1}),e(o,{prop:"payPrice",label:"到款金额","min-width":"120"}),e(o,{prop:"payTime",label:"到款时间","min-width":"120"}),e(o,{prop:"receiveAccount",label:"收款账户","min-width":"120"}),e(o,{prop:"payImg",label:"付款凭证","min-width":"120"},{default:i(t=>[t.row.payImg?(d(),y($,{key:0,style:{width:"30px",height:"30px"},src:t.row.payImg,"preview-src-list":[t.row.payImg],fit:"contain","preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])):w("",!0)]),_:1}),e(o,{prop:"receiveImg",label:"到款凭证","min-width":"120"},{default:i(t=>[t.row.receiveImg?(d(),y($,{key:0,style:{width:"30px",height:"30px"},src:t.row.receiveImg,"preview-src-list":[t.row.receiveImg],fit:"contain","preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])):w("",!0)]),_:1}),e(o,{prop:"invoiceStatus",label:"发票状态","min-width":"120"},{default:i(t=>[a(s({0:"未申请",1:"待开票",2:"已开票"}[t.row.invoiceStatus]),1)]),_:1}),e(o,{prop:"remark",label:"备注"}),e(o,{fixed:"right",label:"操作",width:"200"},{default:i(t=>[t.row.status===0?(d(),k(b,{key:0},[e(c,{link:"",type:"",disabled:""},{default:i(()=>[a("已撤销")]),_:1}),e(c,{link:"",type:"danger",onClick:u=>N(t.row.id)},{default:i(()=>[a("删除")]),_:2},1032,["onClick"])],64)):(d(),k(b,{key:1},[e(c,{link:"",type:"primary",onClick:()=>{let u={...t.row,account:t.row.receiveAccount};I.value.setEdit(u)}},{default:i(()=>[a("编辑")]),_:2},1032,["onClick"]),t.row.invoiceStatus===0?(d(),y(c,{key:0,link:"",type:"primary",onClick:u=>E.value.setApply(t.row)},{default:i(()=>[a("申请发票")]),_:2},1032,["onClick"])):w("",!0),e(c,{link:"",type:"danger",onClick:u=>D(t.row.id)},{default:i(()=>[a("撤销")]),_:2},1032,["onClick"])],64))]),_:1})]),_:1},8,["data"])]),ie,l("div",ae,[e(B,{data:p.value.invoice?[p.value.invoice]:[],border:"","table-layout":"fixed","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:i(()=>[e(o,{prop:"code",label:"编号"}),e(o,{prop:"invoiceTitle",label:"发票抬头","min-width":"120"}),e(o,{prop:"socialCode",label:"社会信用代码","min-width":"120"}),e(o,{prop:"invoicePrice",label:"开票金额","min-width":"120"}),e(o,{prop:"invoiceType",label:"发票类型","min-width":"120"},{default:i(t=>[a(s({1:"电子专票",2:"电子普票"}[t.row.invoiceType]),1)]),_:1}),e(o,{prop:"contact",label:"联系人"}),e(o,{prop:"email",label:"发送邮箱","min-width":"120"}),e(o,{prop:"invoiceStatus",label:"开票状态","min-width":"120"},{default:i(t=>[a(s({1:"待开票",2:"已开票"}[t.row.invoiceStatus]),1)]),_:1}),e(o,{prop:"invoiceCode",label:"发票号"}),e(o,{prop:"remark",label:"备注"}),e(o,{fixed:"right",label:"操作",width:"200"},{default:i(t=>[t.row.invoiceStatus===1?(d(),y(c,{key:0,link:"",type:"primary",onClick:()=>T.value.openInvoiceSet(t.row),style:{"margin-right":"5px"}},{default:i(()=>[a("开票")]),_:2},1032,["onClick"])):w("",!0),e(j,{id:t.row.id,onCallback:m},null,8,["id"]),e(c,{link:"",type:"primary",onClick:u=>x.value.setEdit(t.row)},{default:i(()=>[a("编辑")]),_:2},1032,["onClick"]),e(c,{link:"",type:"danger",onClick:u=>V(t.row.id)},{default:i(()=>[a("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])])]),e(G,{ref_key:"editInvoiceRef",ref:x,onCallback:m},null,512),e(J,{ref_key:"editPaymentRef",ref:I,onCallback:m},null,512),e(H,{ref_key:"invoicingRef",ref:T,onCallback:m},null,512),e(K,{ref_key:"applyInvoiceRef",ref:E,onCallback:m},null,512)],64)}}}),tt=L(le,[["__scopeId","data-v-c9a8be7f"]]);export{tt as default};
