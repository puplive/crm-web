import{d as F,S as O,l as n,t as $,s as z,b as w,O as c,R as e,i as r,F as k,o as d,P as l,Q as u,h as E,a3 as D}from"./index-8RIbcPwj.js";import{E as V}from"./el-pagination-Bq7ysU5f.js";/* empty css                 */import"./el-tag-BnfsIy-m.js";import"./el-select-DS6PyccV.js";import"./el-scrollbar-Dotiy-f2.js";import"./el-popper-CcDJl_dz.js";import{E as L,a as U}from"./el-table-column-CoLMJ_Vo.js";import"./el-checkbox-B1VW_N_E.js";import"./el-tooltip-l0sNRNKZ.js";import{E as q}from"./el-button-CtwyzR8L.js";import{E as H}from"./el-link-Dqx_JBiQ.js";import{T as M}from"./index-D5QGk9Jw.js";import{_ as X}from"./ApplyInvoice.vue_vue_type_script_setup_true_lang-B_ShJ218.js";import{E as Q}from"./ExhibitionChange-CHaBk-rd.js";import{a as x}from"./index-DWRPRzSi.js";import{b as j}from"./index-Cpc13URy.js";/* empty css                   *//* empty css                       *//* empty css                   */import{E as A}from"./index-BK-IWkYK.js";import{c as C}from"./request-6ujDGyA6.js";import"./isEqual-CPRwES1V.js";import"./_initCloneObject-B_TAiMJ2.js";import"./use-form-item-CdwVESc0.js";import"./index-Bv_Jv9_X.js";import"./event-BB_Ol6Sd.js";import"./scroll-7oIQrVbl.js";import"./castArray-C5IZWNLT.js";import"./el-form-item-B_YedhVQ.js";import"./_baseClone-D0TZ8fSL.js";/* empty css                         */import"./index-DPvPYHG7.js";import"./refs-CIsA-Pjz.js";/* empty css                                                              */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./el-dialog-raJVZ8hr.js";import"./index-o_hxKMnE.js";import"./vnode-COvkdklb.js";import"./el-progress-U9jwZ0z5.js";import"./cloneDeep-MH4rbCOS.js";/* empty css                       */import"./el-radio-CZM1LUlc.js";import"./index-DOGI2EW1.js";import"./rules-F8IXRWD9.js";import"./index-CFfTLuqW.js";import"./aria-KgdLjl5h.js";import"./validator-C0ay1fbn.js";const G={class:"s-flex-col",style:{height:"100%"}},J={style:{"margin-bottom":"10px"}},K={class:"s-flex-auto",style:{"min-height":"0"}},W={class:"s-table-pagination"},Ae=F({__name:"Order",setup(Y){const f=O(),h=n(f.EXHIBITION_INFO);$(()=>f.EXHIBITION_INFO,(a,i)=>{a.id!==i.id&&(h.value=a,s())},{deep:!0});const p=z({page:1,perPage:10}),_=n(0),b=n({}),g=n([]),S=n(null),y=n([]),I=n(null),B=a=>{b.value=a,p.page=1,s()},s=async()=>{x.order.getList({...b.value,...p,exhibitionId:h.value.id}).then(a=>{a.code===0&&(g.value=a.data.data,_.value=a.data.total)})},N=a=>{A.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{j.revoke({id:a}).then(i=>{i.code===0?(C.success("撤销成功"),s()):C.error(i.msg)})}).catch(()=>{})};return x.order.getSearchField().then(a=>{a.code===0&&(y.value=a.data)}),s(),(a,i)=>{const t=U,P=H,m=q,R=L,T=V;return d(),w(k,null,[c("div",G,[c("div",J,[e(Q)]),e(M,{data:y.value,onSearch:B},null,8,["data"]),c("div",K,[e(R,{ref_key:"tableRef",ref:S,data:g.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:r(()=>[e(t,{type:"selection",width:"42"}),e(t,{prop:"orderCode",label:"订单编号",width:"200"}),e(t,{prop:"companyName",label:"企业名称","min-width":"120"}),e(t,{prop:"exhibitionName",label:"展会名称","min-width":"120"}),e(t,{prop:"positionCode",label:"展位号"}),e(t,{prop:"brand",label:"参展品牌","min-width":"120"}),e(t,{prop:"area",label:"面积"}),e(t,{prop:"num",label:"展位数"}),e(t,{prop:"orderPrice",label:"订单金额","min-width":"120"}),e(t,{prop:"contractStatus",label:"合同状态","min-width":"120"},{default:r(o=>[l(u(["未签订","已签订","已回执(电子)","已回执(纸质)"][o.row.contractStatus]),1)]),_:1}),e(t,{prop:"contractReceipt",label:"合同附件","min-width":"120"},{default:r(o=>[o.row.contractReceipt?(d(),E(P,{key:0,href:o.row.contractReceipt,type:"primary"},{default:r(()=>[l("下载")]),_:2},1032,["href"])):D("",!0)]),_:1}),e(t,{prop:"deposit",label:"定金"}),e(t,{prop:"receivedPrice",label:"已收"}),e(t,{prop:"unknownPrice",label:"未收款"}),e(t,{prop:"payStatus",label:"付款状态"},{default:r(o=>[l(u(["未付款","部分付款","已付款"][o.row.payStatus]),1)]),_:1}),e(t,{prop:"invoiceStatus",label:"发票"},{default:r(o=>[l(u(["未申请","待开票","部分开票","已开票"][o.row.invoiceStatus]),1)]),_:1}),e(t,{prop:"clueUser",label:"持有人"}),e(t,{fixed:"right",label:"操作",width:"250"},{default:r(o=>[e(m,{link:"",type:"primary",onClick:v=>a.$router.push({name:"FinancesOrderDetail",query:{id:o.row.id}})},{default:r(()=>[l("详情")]),_:2},1032,["onClick"]),o.row.orderStatus===1?(d(),w(k,{key:0},[e(m,{disabled:o.row.contractStatus===0,link:"",type:"primary",onClick:v=>a.$router.push({name:"FinancesRecording",query:{id:o.row.id}})},{default:r(()=>[l("录入到款")]),_:2},1032,["disabled","onClick"]),e(m,{link:"",type:"danger",onClick:v=>N(o.row.id)},{default:r(()=>[l("撤销")]),_:2},1032,["onClick"])],64)):(d(),E(m,{key:1,link:"",disabled:""},{default:r(()=>[l("已撤销")]),_:1}))]),_:1})]),_:1},8,["data"])]),c("div",W,[e(T,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:_.value,"current-page":p.page,"onUpdate:currentPage":i[0]||(i[0]=o=>p.page=o),"page-size":p.perPage,"onUpdate:pageSize":i[1]||(i[1]=o=>p.perPage=o),onChange:s},null,8,["total","current-page","page-size"])])]),e(X,{ref_key:"applyInvoiceRef",ref:I,onCallback:s},null,512)],64)}}});export{Ae as default};