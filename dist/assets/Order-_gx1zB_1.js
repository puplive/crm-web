import{d as S,s as P,l as n,o as R,b as z,O as c,R as t,i as r,P as l,Q as m,F as B}from"./index-CoktlfKN.js";import{E as T}from"./el-pagination-0LqC6NrO.js";/* empty css                 */import"./el-tag-6X7OaLzA.js";import"./el-select-B3OnxCx1.js";import"./el-scrollbar-g4nKRSUD.js";import"./el-popper-L93M-ikX.js";import{E as $,a as D}from"./el-table-column-B3tbDtuc.js";import"./el-checkbox-BJHQZPh0.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                  */import{E as F}from"./el-link-DD3D1dG5.js";import{T as N}from"./index-BQekRhaH.js";import{_ as L}from"./ApplyInvoice.vue_vue_type_script_setup_true_lang-Cy9225uN.js";import{a as O}from"./index-Cri7qHKI.js";import{b as U}from"./index-n1oDgfxB.js";/* empty css                   *//* empty css                       *//* empty css                   */import{E as V}from"./index-BIy3mFcj.js";import{c as b}from"./request-DAESqlcg.js";import{E as q}from"./index-BPJO_kH-.js";import"./isEqual-DF4feqD3.js";import"./_initCloneObject-CnCR6HZ9.js";import"./use-form-item-DzIy8ETn.js";import"./index-BSg1NFlD.js";import"./event-BB_Ol6Sd.js";import"./scroll-BsrZAv2y.js";import"./castArray-C5ewEd_X.js";import"./isArrayLikeObject-BZLgJZ82.js";import"./el-form-item-CcULLD48.js";import"./_baseClone-DEct6B3T.js";import"./el-date-picker-DzApA1q9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./arrays-6TrVLtTe.js";import"./index-Dv9kwzgS.js";/* empty css                       */import"./el-radio-DvnLKCLF.js";/* empty css                          */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./el-dialog-BqfvoZh6.js";import"./index-B2Vm4QEc.js";import"./vnode-BZY6ZFgb.js";import"./refs-Ec48si0j.js";import"./el-progress-DCdY8ePl.js";import"./cloneDeep-CR3l0pVK.js";import"./index-D7B-4EVK.js";import"./aria-KgdLjl5h.js";import"./validator-CYKMWB9D.js";const I={class:"s-flex-col",style:{height:"100%"}},M=c("div",null,null,-1),Q={class:"s-flex-auto",style:{"min-height":"0"}},j={class:"s-table-pagination"},It=S({__name:"Order",setup(A){const p=P({page:1,perPage:10}),u=n(0),f=n({}),_=n([]),g=n(null),v=n([]),y=n(null),w=a=>{f.value=a,p.page=1,s()},s=async()=>{O.order.getList({...f.value,...p}).then(a=>{a.code===0&&(_.value=a.data.data,u.value=a.data.total)})},k=a=>{V.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{U.revoke({id:a}).then(i=>{i.code===0?(b.success("撤销成功"),s()):b.error(i.msg)})}).catch(()=>{})};return s(),(a,i)=>{const e=$,C=F,d=q,E=D,x=T;return R(),z(B,null,[c("div",I,[M,t(N,{data:v.value,onSearch:w},null,8,["data"]),c("div",Q,[t(E,{ref_key:"tableRef",ref:g,data:_.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:r(()=>[t(e,{type:"selection",width:"42"}),t(e,{prop:"orderCode",label:"订单编号",width:"200"}),t(e,{prop:"companyName",label:"企业名称","min-width":"120"}),t(e,{prop:"hallCode",label:"展位号"}),t(e,{prop:"brand",label:"参展品牌","min-width":"120"}),t(e,{prop:"area",label:"面积"}),t(e,{prop:"num",label:"展位数"}),t(e,{prop:"orderPrice",label:"订单金额","min-width":"120"}),t(e,{prop:"contractStatus",label:"合同状态","min-width":"120"},{default:r(o=>[l(m(["未签订","已签订","已回执"][o.row.contractStatus]),1)]),_:1}),t(e,{prop:"contractReceipt",label:"合同附件","min-width":"120"},{default:r(o=>[t(C,{href:o.row.contractReceipt,target:"_blank"},{default:r(()=>[l(m(o.row.contractReceipt),1)]),_:2},1032,["href"])]),_:1}),t(e,{prop:"deposit",label:"定金"}),t(e,{prop:"receivedPrice",label:"已收"}),t(e,{prop:"unknownPrice",label:"未收款"}),t(e,{prop:"payStatus",label:"付款状态"},{default:r(o=>[l(m(["未付款","部分付款","已付款"][o.row.payStatus]),1)]),_:1}),t(e,{prop:"invoiceStatus",label:"发票"},{default:r(o=>[l(m(["未申请","待开票","部分开票","已开票"][o.row.invoiceStatus]),1)]),_:1}),t(e,{prop:"clueUser",label:"持有人"}),t(e,{fixed:"right",label:"操作",width:"250"},{default:r(o=>[t(d,{link:"",type:"primary",size:"small",onClick:h=>a.$router.push({name:"OrderBoothDetail",query:{id:o.row.id}})},{default:r(()=>[l("详情")]),_:2},1032,["onClick"]),t(d,{link:"",type:"primary",size:"small",onClick:h=>a.$router.push({name:"FinancesRecording",query:{id:o.row.id}})},{default:r(()=>[l("录入到款")]),_:2},1032,["onClick"]),t(d,{link:"",type:"primary",size:"small",onClick:h=>k(o.row.id)},{default:r(()=>[l("撤销")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),c("div",j,[t(x,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:u.value,"current-page":p.page,"onUpdate:currentPage":i[0]||(i[0]=o=>p.page=o),"page-size":p.perPage,"onUpdate:pageSize":i[1]||(i[1]=o=>p.perPage=o),onChange:s},null,8,["total","current-page","page-size"])])]),t(L,{ref_key:"applyInvoiceRef",ref:y,onCallback:s},null,512)],64)}}});export{It as default};
