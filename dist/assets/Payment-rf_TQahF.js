import{d as E,s as T,l as p,o as z,f as P,P as s,S as e,w as l,Q as n,R as b,F as S}from"./index-ejxKPGwJ.js";import{E as B}from"./el-pagination-Ag-hgTAs.js";import"./el-input-K2YKJKRm.js";import"./el-tag-dhi2ZZn1.js";/* empty css                  */import"./el-scrollbar-Qrc5ThxC.js";import{E as R,a as $}from"./el-table-column-CoHT1Mrs.js";import"./el-checkbox-BI4x9LQv.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-button-Dg3p6Aqk.js";import{T as D}from"./index-4bLBrdXF.js";import{_ as F}from"./ApplyInvoice.vue_vue_type_script_setup_true_lang-BCGyhEgc.js";import{a as h}from"./index-B54grsA_.js";/* empty css                   *//* empty css                       *//* empty css                   */import{E as N}from"./index-uM1wG9tU.js";import{E as U}from"./index-DfKfZ_zv.js";import"./index-BdsNbp0F.js";import"./index-CyXcbMl2.js";import"./index-ChIfEi4u.js";import"./typescript-6eASP1js.js";import"./event-BB_Ol6Sd.js";import"./isEqual-2rUlRSb8.js";import"./scroll-DR1cmUK4.js";import"./castArray-C5fBeFso.js";import"./isArrayLikeObject-DgnYbF4l.js";/* empty css                     *//* empty css                                                              *//* empty css                       *//* empty css                 *//* empty css                          */import"./index--OPgakvE.js";import"./index-DC72FTcR.js";import"./index-DWUrTHCC.js";import"./arrays-6TrVLtTe.js";import"./index-Jfa3Nlmx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./el-dialog-ByUkjCrZ.js";import"./index-SOUT3Bpq.js";import"./vnode-Dt7HAh5V.js";import"./refs-BY8ECGcR.js";import"./el-progress-ChOl5h9G.js";import"./cloneDeep-DkU9bsZW.js";import"./index-BAGMsYxs.js";import"./request-BBBgF-Ju.js";import"./aria-KgdLjl5h.js";import"./validator-BNyHTwWJ.js";const V={class:"s-flex-col",style:{height:"100%"}},A=s("div",null,null,-1),I={class:"s-table-operations"},L={class:"s-flex-auto",style:{"min-height":"0"}},M={class:"s-table-pagination"},Ve=E({__name:"Payment",setup(Q){const r=T({page:1,perPage:10}),d=p(0),u=p({}),f=p([]),v=p(null),_=p([]),g=p(null),k=o=>{u.value=o,r.page=1,m()},m=async()=>{h.payment.getList({...u.value,...r}).then(o=>{o.code===0&&(f.value=o.data.data,d.value=o.data.total)})},w=o=>{N.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{}).catch(()=>{})};return h.payment.getSearchField().then(o=>{o.code===0&&(_.value=o.data)}),m(),(o,i)=>{const c=U,t=R,C=$,x=B;return z(),P(S,null,[s("div",V,[A,e(D,{data:_.value,onSearch:k},null,8,["data"]),s("div",I,[e(c,{size:"small",onClick:i[0]||(i[0]=()=>{})},{default:l(()=>[n("合并开票")]),_:1})]),s("div",L,[e(C,{ref_key:"tableRef",ref:v,data:f.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[e(t,{type:"selection",width:"42"}),e(t,{prop:"code",label:"编号",width:"180"}),e(t,{prop:"companyName",label:"企业名称"}),e(t,{prop:"positionCode",label:"展位号"}),e(t,{prop:"payCompany",label:"付款公司"}),e(t,{prop:"payPrice",label:"付款金额"}),e(t,{prop:"",label:"付款方式"}),e(t,{prop:"orderPrice",label:"订单金额"}),e(t,{prop:"payType",label:"付款类型"},{default:l(a=>[n(b({1:"预定金",2:"首款",3:"二次款",4:"尾款",5:"转款"}[a.row.payType]),1)]),_:1}),e(t,{prop:"receiveAccount",label:"收款账户"}),e(t,{prop:"payTime",label:"到款时间"}),e(t,{prop:"invoiceStatus",label:"发票"},{default:l(a=>[n(b({0:"未申请",1:"待开票",2:"已开票"}[a.row.invoiceStatus]),1)]),_:1}),e(t,{prop:"clueUser",label:"持有人"}),e(t,{fixed:"right",label:"操作",width:"120"},{default:l(a=>[e(c,{link:"",type:"primary",size:"small",onClick:y=>o.$router.push("/market/clues/edit/"+a.row.id)},{default:l(()=>[n("详情")]),_:2},1032,["onClick"]),e(c,{link:"",type:"primary",size:"small",onClick:y=>g.value.setApplay(a.row)},{default:l(()=>[n("申请发票")]),_:2},1032,["onClick"]),e(c,{link:"",type:"primary",size:"small",onClick:y=>w([a.row.id])},{default:l(()=>[n("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),s("div",M,[e(x,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:d.value,"current-page":r.page,"onUpdate:currentPage":i[1]||(i[1]=a=>r.page=a),"page-size":r.perPage,"onUpdate:pageSize":i[2]||(i[2]=a=>r.perPage=a),onChange:m},null,8,["total","current-page","page-size"])])]),e(F,{ref_key:"applyInvoiceRef",ref:g,onCalback:m},null,512)],64)}}});export{Ve as default};