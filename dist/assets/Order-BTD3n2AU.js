import{d as T,s as $,l as n,b as g,O as d,R as e,i as a,F as y,o as c,P as i,Q as u,h as k,a3 as z}from"./index-GzKYw06v.js";import{E as N}from"./el-pagination-C9IHNUoe.js";/* empty css                 */import"./el-tag-CYBBRmG5.js";import"./el-select-CrXMsS4U.js";import"./el-scrollbar-B6p0AQac.js";import"./el-popper-dtLFmMiv.js";import{E as D,a as F}from"./el-table-column-DfoQ0tN1.js";import"./el-checkbox-5_jQ_TNM.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                  */import{E as V}from"./el-link-BxLmYgjX.js";import{T as L}from"./index-DGZW6jmt.js";import{_ as O}from"./ApplyInvoice.vue_vue_type_script_setup_true_lang-DVsSVZ4x.js";import{a as U}from"./index-DfARIF23.js";import{b as q}from"./index-aScPwDea.js";/* empty css                   *//* empty css                       *//* empty css                   */import{E as I}from"./index-B14pF1Q7.js";import{c as v}from"./request-1r7GI7TK.js";import{E as M}from"./index-yqswaiyO.js";import"./isEqual-C8RWkfl2.js";import"./_initCloneObject-DnnAbBnu.js";import"./use-form-item-dLwc-85H.js";import"./index-DH4PgEXA.js";import"./event-BB_Ol6Sd.js";import"./scroll-Cva1Xxw_.js";import"./castArray-DWhxlwIe.js";import"./isArrayLikeObject-lff0bkA0.js";import"./el-form-item-B_psqfsH.js";import"./_baseClone-BGpYo5U3.js";import"./el-date-picker-uCdlbfKU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./arrays-6TrVLtTe.js";import"./index-C2nJgpga.js";/* empty css                       */import"./el-radio-CA78ceSb.js";/* empty css                          */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./el-dialog-Bami4dsl.js";import"./index-AiPgDIg_.js";import"./vnode-Dbiw0x3T.js";import"./refs-DGFha29R.js";import"./el-progress-Dzofssc9.js";import"./cloneDeep-BfoqeSR_.js";import"./index-CTvzyB0X.js";import"./aria-KgdLjl5h.js";import"./validator-BLRkeKbv.js";const Q={class:"s-flex-col",style:{height:"100%"}},j=d("div",null,null,-1),A={class:"s-flex-auto",style:{"min-height":"0"}},G={class:"s-table-pagination"},Qe=T({__name:"Order",setup(H){const p=$({page:1,perPage:10}),f=n(0),_=n({}),h=n([]),w=n(null),C=n([]),E=n(null),S=r=>{_.value=r,p.page=1,s()},s=async()=>{U.order.getList({..._.value,...p}).then(r=>{r.code===0&&(h.value=r.data.data,f.value=r.data.total)})},x=r=>{I.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{q.revoke({id:r}).then(l=>{l.code===0?(v.success("撤销成功"),s()):v.error(l.msg)})}).catch(()=>{})};return s(),(r,l)=>{const t=F,B=V,m=M,P=D,R=N;return c(),g(y,null,[d("div",Q,[j,e(L,{data:C.value,onSearch:S},null,8,["data"]),d("div",A,[e(P,{ref_key:"tableRef",ref:w,data:h.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:a(()=>[e(t,{type:"selection",width:"42"}),e(t,{prop:"orderCode",label:"订单编号",width:"200"}),e(t,{prop:"companyName",label:"企业名称","min-width":"120"}),e(t,{prop:"hallCode",label:"展位号"}),e(t,{prop:"brand",label:"参展品牌","min-width":"120"}),e(t,{prop:"area",label:"面积"}),e(t,{prop:"num",label:"展位数"}),e(t,{prop:"orderPrice",label:"订单金额","min-width":"120"}),e(t,{prop:"contractStatus",label:"合同状态","min-width":"120"},{default:a(o=>[i(u(["未签订","已签订","已回执"][o.row.contractStatus]),1)]),_:1}),e(t,{prop:"contractReceipt",label:"合同附件","min-width":"120"},{default:a(o=>[o.row.contractReceipt?(c(),k(B,{key:0,href:o.row.contractReceipt,type:"primary"},{default:a(()=>[i("下载")]),_:2},1032,["href"])):z("",!0)]),_:1}),e(t,{prop:"deposit",label:"定金"}),e(t,{prop:"receivedPrice",label:"已收"}),e(t,{prop:"unknownPrice",label:"未收款"}),e(t,{prop:"payStatus",label:"付款状态"},{default:a(o=>[i(u(["未付款","部分付款","已付款"][o.row.payStatus]),1)]),_:1}),e(t,{prop:"invoiceStatus",label:"发票"},{default:a(o=>[i(u(["未申请","待开票","部分开票","已开票"][o.row.invoiceStatus]),1)]),_:1}),e(t,{prop:"clueUser",label:"持有人"}),e(t,{fixed:"right",label:"操作",width:"250"},{default:a(o=>[e(m,{link:"",type:"primary",onClick:b=>r.$router.push({name:"OrderBoothDetail",query:{id:o.row.id}})},{default:a(()=>[i("详情")]),_:2},1032,["onClick"]),o.row.orderStatus===1?(c(),g(y,{key:0},[e(m,{link:"",type:"primary",onClick:b=>r.$router.push({name:"FinancesRecording",query:{id:o.row.id}})},{default:a(()=>[i("录入到款")]),_:2},1032,["onClick"]),e(m,{link:"",type:"danger",onClick:b=>x(o.row.id)},{default:a(()=>[i("撤销")]),_:2},1032,["onClick"])],64)):(c(),k(m,{key:1,link:"",disabled:""},{default:a(()=>[i("已撤销")]),_:1}))]),_:1})]),_:1},8,["data"])]),d("div",G,[e(R,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:f.value,"current-page":p.page,"onUpdate:currentPage":l[0]||(l[0]=o=>p.page=o),"page-size":p.perPage,"onUpdate:pageSize":l[1]||(l[1]=o=>p.perPage=o),onChange:s},null,8,["total","current-page","page-size"])])]),e(O,{ref_key:"applyInvoiceRef",ref:E,onCallback:s},null,512)],64)}}});export{Qe as default};
