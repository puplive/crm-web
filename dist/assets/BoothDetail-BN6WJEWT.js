import{d as $,l as _,b as N,O as a,Q as l,R as e,i,F as D,a5 as V,o as s,P as n,h as f,a3 as w,X as A,Y as z}from"./index-CXHZvf4q.js";import{E as F}from"./el-image-viewer-Kn6aew3V.js";import{E as M,a as U}from"./el-table-column-f6oES8sW.js";import"./el-checkbox-CzfPimkh.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-kvSAsfd_.js";import"./el-scrollbar-4lg7kmpw.js";/* empty css                  */import"./el-tag-BKHQJBMw.js";import{b as I}from"./index-CmcOOHEj.js";import{i as X,p as j}from"./index-CWebsLbW.js";import{_ as q}from"./UpInvoice.vue_vue_type_script_setup_true_lang-D7YMVZeh.js";import{_ as O}from"./ApplyInvoice.vue_vue_type_script_setup_true_lang-Cw5eh0C_.js";import{_ as Q,a as Y}from"./EditPayment.vue_vue_type_script_setup_true_lang-DK4-u_J7.js";/* empty css                   *//* empty css                       *//* empty css                 *//* empty css                   */import{c as h}from"./request-D5zMqTLz.js";import{E as k}from"./index-Fj0T5jED.js";import{E as G}from"./index-Ck_64Yyt.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DvbXMlUp.js";import"./use-form-item-B8Qj3pZg.js";import"./event-BB_Ol6Sd.js";import"./scroll-C6Gh4qq8.js";import"./_initCloneObject-CSlZU8KL.js";import"./isArrayLikeObject-CFhIJ_TT.js";import"./isEqual-C7ib5S45.js";import"./el-progress-Ww0TBIQI.js";import"./cloneDeep-D5OkyV1W.js";import"./_baseClone-BFD8Zqn6.js";import"./index-D_i4WqeH.js";import"./el-dialog-Dgi6K1gn.js";import"./index-BQnLN9qq.js";import"./vnode-BO_ADvFr.js";import"./refs-Dw1jXJTj.js";import"./el-form-item-CjzOUbj7.js";import"./castArray-DgK_tM7v.js";/* empty css                       */import"./el-radio-DN0A5DbK.js";import"./el-row-Dz6D6ksF.js";import"./el-col-Du8F9Zv_.js";import"./el-date-picker-CpMIjGB1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./arrays-6TrVLtTe.js";import"./index-Dam1U20p.js";import"./el-select-ClqRiZmz.js";import"./aria-KgdLjl5h.js";import"./validator-BtsKtbIQ.js";const b=v=>(A("data-v-c8f63fbc"),v=v(),z(),v),J=b(()=>a("div",null,"详情",-1)),K=b(()=>a("div",{class:"title"},"展位订单",-1)),L={class:"info"},W={class:"table"},Z=b(()=>a("div",{class:"title"},"到款详情",-1)),ee={class:"table"},te=b(()=>a("div",{class:"title"},"发票详情",-1)),oe={class:"table"},ie=$({__name:"BoothDetail",setup(v){const T=V(),B=_(T.query.id),g=_(null),C=_(null),x=_(null),r=_({brand:[],payment:[],invoice:[]}),c=()=>{I.getDetail({id:B.value}).then(d=>{d.code===0?r.value=d.data:h.error(d.msg)})},E=d=>{k.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{I.revoke({id:d}).then(p=>{p.code===0?(h.success("撤销成功"),c()):h.error(p.msg)})}).catch(()=>{})},P=d=>{k.confirm("是否确认要删除发票?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{X.del({id:d}).then(p=>{p.code===0?(h.success("删除成功"),c()):h.error(p.msg)})}).catch(()=>{})},R=d=>{k.confirm("是否确认要删除付款记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{j.del({id:d}).then(p=>{p.code===0?(h.success("删除成功"),c()):h.error(p.msg)})}).catch(()=>{})};return c(),(d,p)=>{const t=U,m=G,y=M,S=F;return s(),N(D,null,[a("div",null,[J,a("div",null,[K,a("div",L,[a("span",null,"订单编号："+l(r.value.orderCode),1),a("span",null,"企业名称："+l(r.value.exhibitorName),1),a("span",null,"参展品牌："+l(r.value.brand.join(",")),1),a("span",null,"订单状态："+l(r.value.orderStatus),1),a("span",null,"订单生成时间："+l(r.value.orderTime),1),a("span",null,"下单人："+l(r.value.authUser),1),a("span",null,"对应销售："+l(r.value.clueUser),1)]),a("div",W,[e(y,{data:[r.value],border:"","table-layout":"fixed","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:i(()=>[e(t,{prop:"exhibitionName",label:"项目名称","min-width":"120"}),e(t,{prop:"hallCode",label:"展馆号"}),e(t,{prop:"positionCode",label:"展位号"}),e(t,{prop:"area",label:"面积"}),e(t,{prop:"length",label:"展位尺寸","min-width":"120"},{default:i(o=>[n(l(o.row.length)+" X "+l(o.row.width),1)]),_:1}),e(t,{prop:"num",label:"展位数量","min-width":"120"}),e(t,{prop:"product",label:"产品名称","min-width":"120"}),e(t,{prop:"unitPrice",label:"单价"}),e(t,{prop:"orderPrice",label:"订单原价","min-width":"120"}),e(t,{prop:"orderPrice",label:"优惠(折扣)金额","min-width":"120"}),e(t,{prop:"orderPrice",label:"加收金额","min-width":"120"}),e(t,{prop:"orderPrice",label:"最终金额","min-width":"120"}),e(t,{prop:"contractStatus",label:"合同状态","min-width":"120"},{default:i(o=>[n(l(["未签约","已签约","已回执"][o.row.contractStatus]),1)]),_:1}),e(t,{prop:"payStatus",label:"付款状态","min-width":"120"},{default:i(o=>[n(l(["未付款","部分付款","已付款"][o.row.payStatus]),1)]),_:1}),e(t,{prop:"receivedPrice",label:"到款金额","min-width":"120"}),e(t,{prop:"notReceivedPrice",label:"待支付金额","min-width":"120"}),e(t,{prop:"invoiceStatus",label:"发票状态","min-width":"120"},{default:i(o=>[n(l(["未申请","待开票","部分开票","已开票"][o.row.invoiceStatus]),1)]),_:1}),e(t,{prop:"remark",label:"备注"}),e(t,{fixed:"right",label:"操作",width:"200"},{default:i(o=>[r.value.orderStatus===1?(s(),f(m,{key:0,link:"",type:"danger",onClick:p[0]||(p[0]=u=>E(r.value.id))},{default:i(()=>[n("撤销")]),_:1})):r.value.orderStatus===0?(s(),f(m,{key:1,link:"",type:"",disabled:""},{default:i(()=>[n("已撤销")]),_:1})):w("",!0)]),_:1})]),_:1},8,["data"])]),Z,a("div",ee,[e(y,{data:r.value.payment,border:"","table-layout":"fixed","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:i(()=>[e(t,{prop:"code",label:"录款编号","min-width":"120"}),e(t,{prop:"payCompany",label:"付款公司","min-width":"120"}),e(t,{prop:"payType",label:"到款类型","min-width":"120"},{default:i(o=>[n(l({1:"预定金",2:"首款",3:"二次款",4:"尾款",5:"转款"}[o.row.payType]),1)]),_:1}),e(t,{prop:"payPrice",label:"到款金额","min-width":"120"}),e(t,{prop:"payType",label:"付款方式","min-width":"120"},{default:i(o=>[n(l({1:"全款",2:"分期"}[o.row.payType]),1)]),_:1}),e(t,{prop:"payTime",label:"到款时间","min-width":"120"}),e(t,{prop:"receiveAccount",label:"收款账户","min-width":"120"}),e(t,{prop:"payImg",label:"付款凭证","min-width":"120"},{default:i(o=>[o.row.payImg?(s(),f(S,{key:0,style:{width:"30px",height:"30px"},src:o.row.payImg,"preview-src-list":[o.row.payImg],fit:"contain","preview-teleported":"true",loading:"lazy"},null,8,["src","preview-src-list"])):w("",!0)]),_:1}),e(t,{prop:"receiveImg",label:"到款凭证","min-width":"120"},{default:i(o=>[o.row.receiveImg?(s(),f(S,{key:0,style:{width:"30px",height:"30px"},src:o.row.receiveImg,"preview-src-list":[o.row.receiveImg],fit:"contain","preview-teleported":"true",loading:"lazy"},null,8,["src","preview-src-list"])):w("",!0)]),_:1}),e(t,{prop:"invoiceStatus",label:"发票状态","min-width":"120"},{default:i(o=>[n(l({0:"未申请",1:"待开票",2:"部分开票",3:"已开票"}[o.row.invoiceStatus]),1)]),_:1}),e(t,{prop:"remark",label:"备注"}),r.value.orderStatus===1?(s(),f(t,{key:0,fixed:"right",label:"操作",width:"200"},{default:i(o=>[e(m,{link:"",type:"primary",onClick:()=>{let u={...o.row,account:o.row.receiveAccount};x.value.setEdit(u)}},{default:i(()=>[n("编辑")]),_:2},1032,["onClick"]),o.row.invoiceStatus===0?(s(),f(m,{key:0,link:"",type:"primary",onClick:u=>g.value.setApply(o.row)},{default:i(()=>[n("申请发票")]),_:2},1032,["onClick"])):w("",!0),e(m,{link:"",type:"danger",onClick:u=>R(o.row.id)},{default:i(()=>[n("删除")]),_:2},1032,["onClick"])]),_:1})):w("",!0)]),_:1},8,["data"])]),te,a("div",oe,[e(y,{data:r.value.invoice,border:"","table-layout":"fixed","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:i(()=>[e(t,{prop:"code",label:"编号"}),e(t,{prop:"title",label:"发票抬头","min-width":"120"}),e(t,{prop:"socialCode",label:"社会信用代码","min-width":"120"}),e(t,{prop:"price",label:"开票金额","min-width":"120"}),e(t,{prop:"invoiceType",label:"发票类型","min-width":"120"},{default:i(o=>[n(l({1:"电子专票",2:"电子普票"}[o.row.invoiceType]),1)]),_:1}),e(t,{prop:"contact",label:"联系人"}),e(t,{prop:"email",label:"发送邮箱","min-width":"120"}),e(t,{prop:"invoiceStatus",label:"开票状态","min-width":"120"},{default:i(o=>[n(l({0:"未申请",1:"待开票",2:"已开票"}[o.row.invoiceStatus]),1)]),_:1}),e(t,{prop:"invoiceCode",label:"发票号"}),e(t,{prop:"remark",label:"备注"}),r.value.orderStatus===1?(s(),f(t,{key:0,fixed:"right",label:"操作",width:"200"},{default:i(o=>[e(q,{id:o.row.id,onCallback:c},null,8,["id"]),e(m,{link:"",type:"primary",onClick:()=>{let u={...o.row,invoiceTitle:o.row.title};C.value.setEdit(u)}},{default:i(()=>[n("编辑")]),_:2},1032,["onClick"]),e(m,{link:"",type:"danger",onClick:u=>P(o.row.id)},{default:i(()=>[n("删除")]),_:2},1032,["onClick"])]),_:1})):w("",!0)]),_:1},8,["data"])])])]),e(O,{ref_key:"applyInvoiceRef",ref:g,onCallback:c},null,512),e(Q,{ref_key:"editInvoiceRef",ref:C,onCallback:c},null,512),e(Y,{ref_key:"editPaymentRef",ref:x,onCallback:c},null,512)],64)}}}),et=H(ie,[["__scopeId","data-v-c8f63fbc"]]);export{et as default};
