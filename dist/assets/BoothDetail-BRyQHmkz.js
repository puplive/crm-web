import{d as z,l as v,b as g,O as n,Q as r,R as e,i as o,F as C,a5 as M,o as c,P as a,h,a3 as w,X as O,Y as U}from"./index-Dbruow-8.js";import{E as X}from"./el-image-viewer-d1k2mARu.js";import{E as j,a as q}from"./el-table-column-_1BtIXOe.js";import"./el-checkbox-B4iN5yvQ.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-KaCkgToV.js";import"./el-scrollbar-DQDzTEy-.js";/* empty css                  */import"./el-tag-Cwjeyy7Z.js";import{b as R}from"./index-nXGFsFT-.js";import{o as Q,i as Y,p as $}from"./index-D-g9bk2b.js";import{_ as G,a as H,b as J}from"./Invoicing.vue_vue_type_script_setup_true_lang-DOYOVBb4.js";import{_ as K}from"./ApplyInvoice.vue_vue_type_script_setup_true_lang-BnYVywe8.js";import{_ as L}from"./EditPayment.vue_vue_type_script_setup_true_lang-Dtn8HiTe.js";/* empty css                   *//* empty css                       *//* empty css                 *//* empty css                   */import{c as u}from"./request-IQDh0xGg.js";import{E as b}from"./index-DyvDh1tV.js";import{E as W}from"./index-BrXzY7YX.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CJCk9YnP.js";import"./use-form-item-DC5bVoWo.js";import"./event-BB_Ol6Sd.js";import"./scroll-CgR9N02j.js";import"./_initCloneObject-XraVKfYz.js";import"./isEqual-CRab28oZ.js";import"./el-progress-6ggq-6Uv.js";import"./cloneDeep-CBcIhglR.js";import"./_baseClone-DkM2Bk85.js";import"./index-DaQGtzPM.js";import"./el-dialog-Cn13NkgW.js";import"./index-BixeCaBD.js";import"./vnode-Cu_wQVQX.js";import"./refs-DvQ1Z-mU.js";import"./el-form-item-DY7Jg2_K.js";import"./castArray-C77bChTH.js";/* empty css                       */import"./el-radio-BtKpg6s0.js";import"./rules-F8IXRWD9.js";import"./el-row-T20TXuuw.js";import"./el-col-BQ538ZqK.js";import"./el-date-picker-Bytn2J3i.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./arrays-6TrVLtTe.js";import"./index-wCLXgJmf.js";import"./el-select-DISwFAjD.js";import"./aria-KgdLjl5h.js";import"./validator-C2QUHRhB.js";const y=_=>(O("data-v-e455d62d"),_=_(),U(),_),ee=y(()=>n("div",null,"详情",-1)),te=y(()=>n("div",{class:"title"},"展位订单",-1)),ie={class:"info"},oe={class:"table"},ae=y(()=>n("div",{class:"title"},"到款详情",-1)),le={class:"table"},re=y(()=>n("div",{class:"title"},"发票详情",-1)),ne={class:"table"},pe=z({__name:"BoothDetail",setup(_){const x=M(),S=v(x.query.id),D=v(x.name),T=v(null),I=v(null),B=v(null),E=v(null),l=v({brand:[],payment:[],invoice:[]}),s=()=>{D.value==="FinancesOrderDetail"?Q.getDetail({id:S.value}).then(p=>{p.code===0?l.value=p.data:u.error(p.msg)}):R.getDetail({id:S.value}).then(p=>{p.code===0?l.value=p.data:u.error(p.msg)})},N=p=>{b.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{R.revoke({id:p}).then(d=>{d.code===0?(u.success("撤销成功"),s()):u.error(d.msg)})}).catch(()=>{})},V=p=>{b.confirm("是否确认要删除发票?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Y.del({id:p}).then(d=>{d.code===0?(u.success("删除成功"),s()):u.error(d.msg)})}).catch(()=>{})},A=p=>{b.confirm("确定撤销？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{$.revoke({id:p}).then(d=>{d.code===0?(u.success("撤销成功"),s()):u.error(d.msg)})}).catch(()=>{})},F=p=>{b.confirm("是否确认要删除付款记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{$.del({id:p}).then(d=>{d.code===0?(u.success("删除成功"),s()):u.error(d.msg)})}).catch(()=>{})};return s(),(p,d)=>{const t=q,m=W,k=j,P=X;return c(),g(C,null,[n("div",null,[ee,n("div",null,[te,n("div",ie,[n("span",null,"订单编号："+r(l.value.orderCode),1),n("span",null,"企业名称："+r(l.value.exhibitorName),1),n("span",null,"参展品牌："+r(l.value.brand.join("，")),1),n("span",null,"订单状态："+r({0:"已撤销",1:"已完成"}[l.value.orderStatus]),1),n("span",null,"订单生成时间："+r(l.value.orderTime),1),n("span",null,"下单人："+r(l.value.authUser),1),n("span",null,"对应销售："+r(l.value.clueUser),1)]),n("div",oe,[e(k,{data:[l.value],border:"","table-layout":"fixed","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:o(()=>[e(t,{prop:"exhibitionName",label:"项目名称","min-width":"120"}),e(t,{prop:"hallCode",label:"展馆号"}),e(t,{prop:"positionCode",label:"展位号"}),e(t,{prop:"area",label:"面积"}),e(t,{prop:"length",label:"展位尺寸","min-width":"120"},{default:o(i=>[a(r(i.row.length)+" X "+r(i.row.width),1)]),_:1}),e(t,{prop:"num",label:"展位数量","min-width":"120"}),e(t,{prop:"product",label:"产品名称","min-width":"120"}),e(t,{prop:"unitPrice",label:"单价"}),e(t,{prop:"orderPrice",label:"最终金额","min-width":"120"}),e(t,{prop:"costPrice",label:"订单原价","min-width":"120"}),e(t,{prop:"discountPrice",label:"优惠(折扣)金额","min-width":"120"}),e(t,{prop:"addPrice",label:"加收金额","min-width":"120"}),e(t,{prop:"payType",label:"付款方式","min-width":"120"},{default:o(i=>[a(r({1:"全款",2:"分期"}[i.row.payType]),1)]),_:1}),e(t,{prop:"contractStatus",label:"合同状态","min-width":"120"},{default:o(i=>[a(r(["未签约","已签约","已回执(电子)","已回执(纸质)"][i.row.contractStatus]),1)]),_:1}),e(t,{prop:"payStatus",label:"付款状态","min-width":"120"},{default:o(i=>[a(r(["未付款","部分付款","已付款"][i.row.payStatus]),1)]),_:1}),e(t,{prop:"receivedPrice",label:"到款金额","min-width":"120"}),e(t,{prop:"notReceivedPrice",label:"未到款金额","min-width":"120"}),e(t,{prop:"invoiceStatus",label:"发票状态","min-width":"120"},{default:o(i=>[a(r(["未申请","待开票","部分开票","已开票"][i.row.invoiceStatus]),1)]),_:1}),e(t,{prop:"remark",label:"备注"}),e(t,{fixed:"right",label:"操作",width:"200"},{default:o(i=>[l.value.orderStatus===1?(c(),h(m,{key:0,link:"",type:"danger",onClick:d[0]||(d[0]=f=>N(l.value.id))},{default:o(()=>[a("撤销")]),_:1})):l.value.orderStatus===0?(c(),h(m,{key:1,link:"",type:"",disabled:""},{default:o(()=>[a("已撤销")]),_:1})):w("",!0)]),_:1})]),_:1},8,["data"])]),ae,n("div",le,[e(k,{data:l.value.payment,border:"","table-layout":"fixed","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:o(()=>[e(t,{prop:"code",label:"录款编号","min-width":"120"}),e(t,{prop:"payCompany",label:"付款公司","min-width":"120"}),e(t,{prop:"payType",label:"到款类型","min-width":"120"},{default:o(i=>[a(r({1:"预定金",2:"首款",3:"二次款",4:"尾款",5:"转款"}[i.row.payType]),1)]),_:1}),e(t,{prop:"payPrice",label:"到款金额","min-width":"120"}),e(t,{prop:"payTime",label:"到款时间","min-width":"120"}),e(t,{prop:"receiveAccount",label:"收款账户","min-width":"120"}),e(t,{prop:"payImg",label:"付款凭证","min-width":"120"},{default:o(i=>[i.row.payImg?(c(),h(P,{key:0,style:{width:"30px",height:"30px"},src:i.row.payImg,"preview-src-list":[i.row.payImg],fit:"contain","preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])):w("",!0)]),_:1}),e(t,{prop:"receiveImg",label:"到款凭证","min-width":"120"},{default:o(i=>[i.row.receiveImg?(c(),h(P,{key:0,style:{width:"30px",height:"30px"},src:i.row.receiveImg,"preview-src-list":[i.row.receiveImg],fit:"contain","preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])):w("",!0)]),_:1}),e(t,{prop:"invoiceStatus",label:"发票状态","min-width":"120"},{default:o(i=>[a(r({0:"未申请",1:"待开票",2:"已开票"}[i.row.invoiceStatus]),1)]),_:1}),e(t,{prop:"remark",label:"备注"}),l.value.orderStatus===1?(c(),h(t,{key:0,fixed:"right",label:"操作",width:"200"},{default:o(i=>[i.row.status===0?(c(),g(C,{key:0},[e(m,{link:"",type:"",disabled:""},{default:o(()=>[a("已撤销")]),_:1}),e(m,{link:"",type:"danger",onClick:f=>F(i.row.id)},{default:o(()=>[a("删除")]),_:2},1032,["onClick"])],64)):(c(),g(C,{key:1},[e(m,{link:"",type:"primary",onClick:()=>{let f={...i.row,account:i.row.receiveAccount};B.value.setEdit(f)}},{default:o(()=>[a("编辑")]),_:2},1032,["onClick"]),i.row.invoiceStatus===0?(c(),h(m,{key:0,link:"",type:"primary",onClick:f=>T.value.setApply(i.row)},{default:o(()=>[a("申请发票")]),_:2},1032,["onClick"])):w("",!0),e(m,{link:"",type:"danger",onClick:f=>A(i.row.id)},{default:o(()=>[a("撤销")]),_:2},1032,["onClick"])],64))]),_:1})):w("",!0)]),_:1},8,["data"])]),re,n("div",ne,[e(k,{data:l.value.invoice,border:"","table-layout":"fixed","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:o(()=>[e(t,{prop:"code",label:"编号"}),e(t,{prop:"title",label:"发票抬头","min-width":"120"}),e(t,{prop:"socialCode",label:"社会信用代码","min-width":"120"}),e(t,{prop:"price",label:"开票金额","min-width":"120"}),e(t,{prop:"invoiceType",label:"发票类型","min-width":"120"},{default:o(i=>[a(r({1:"电子专票",2:"电子普票"}[i.row.invoiceType]),1)]),_:1}),e(t,{prop:"contact",label:"联系人"}),e(t,{prop:"email",label:"发送邮箱","min-width":"120"}),e(t,{prop:"invoiceStatus",label:"开票状态","min-width":"120"},{default:o(i=>[a(r({1:"待开票",2:"已开票"}[i.row.invoiceStatus]),1)]),_:1}),e(t,{prop:"invoiceCode",label:"发票号"}),e(t,{prop:"remark",label:"备注"}),l.value.orderStatus===1?(c(),h(t,{key:0,fixed:"right",label:"操作",width:"200"},{default:o(i=>[i.row.invoiceStatus===1?(c(),h(m,{key:0,link:"",type:"primary",onClick:()=>E.value.openInvoiceSet(i.row),style:{"margin-right":"5px"}},{default:o(()=>[a("开票")]),_:2},1032,["onClick"])):w("",!0),e(G,{id:i.row.id,onCallback:s},null,8,["id"]),e(m,{link:"",type:"primary",onClick:()=>{let f={...i.row,invoiceTitle:i.row.title};I.value.setEdit(f)}},{default:o(()=>[a("编辑")]),_:2},1032,["onClick"]),e(m,{link:"",type:"danger",onClick:f=>V(i.row.id)},{default:o(()=>[a("删除")]),_:2},1032,["onClick"])]),_:1})):w("",!0)]),_:1},8,["data"])])])]),e(K,{ref_key:"applyInvoiceRef",ref:T,onCallback:s},null,512),e(H,{ref_key:"editInvoiceRef",ref:I,onCallback:s},null,512),e(L,{ref_key:"editPaymentRef",ref:B,onCallback:s},null,512),e(J,{ref_key:"invoicingRef",ref:E,onCallback:s},null,512)],64)}}}),lt=Z(pe,[["__scopeId","data-v-e455d62d"]]);export{lt as default};
