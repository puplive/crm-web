import{d as N,S as P,l as r,t as S,s as F,b as $,O as s,R as e,i as p,F as z,o as w,P as m,Q as k,h as D,a3 as O}from"./index-BgyAZvUt.js";import{E as R}from"./el-pagination-yaz31Ocb.js";/* empty css                 */import"./el-tag-DEVuN4Hv.js";import"./el-select-oKGMiqGO.js";import"./el-scrollbar-HjInS6QP.js";import"./el-popper-BpTaYU20.js";import{E as V,a as U}from"./el-table-column-DuJ8cpfO.js";import"./el-checkbox-B_5_CmJi.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                  */import{T as A}from"./index-B7fo2GEf.js";import{_ as H}from"./ApplyInvoice.vue_vue_type_script_setup_true_lang-CJdliXWt.js";import{a as d}from"./index-CDdOJmBv.js";import{_ as L}from"./ExhibitionChange.vue_vue_type_script_setup_true_lang-DKKrFs_4.js";/* empty css                   *//* empty css                       *//* empty css                   */import{E as M}from"./index-DtGwBMso.js";import{c as x}from"./request-D6fvGTDh.js";import{E as X}from"./index-Z1v5JTS_.js";import"./isEqual-Bds9XCaA.js";import"./_initCloneObject-D27w6Cg6.js";import"./use-form-item-Dm97kLAn.js";import"./index-CunGH_dN.js";import"./event-BB_Ol6Sd.js";import"./scroll-ByT-L5SG.js";import"./castArray-DOsbaNJB.js";import"./el-form-item-w7WYBo5V.js";import"./_baseClone-DBDXGBzA.js";/* empty css                                                              */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./el-dialog-CrHQF44X.js";import"./index-B52ECxk7.js";import"./vnode-ptL780bU.js";import"./refs-CuZ_QrPr.js";import"./el-progress-Cf38t9K3.js";import"./cloneDeep-_hS19oGl.js";/* empty css                       */import"./el-radio-BUbTR3Ls.js";import"./index-B9-25RlL.js";import"./rules-F8IXRWD9.js";/* empty css                        */import"./el-dropdown-item-9G17iIa_.js";import"./index-BA48cLjW.js";import"./aria-KgdLjl5h.js";import"./validator-BkA75A30.js";const q={class:"s-flex-col",style:{height:"100%"}},Q={class:"",style:{"margin-bottom":"10px"}},j={class:"s-flex-auto",style:{"min-height":"0"}},G={class:"s-table-pagination"},Me=N({__name:"Payment",setup(J){const u=P(),f=r(u.EXHIBITION_INFO);S(()=>u.EXHIBITION_INFO,(t,i)=>{t.id!==i.id&&(f.value=t,l())},{deep:!0});const n=F({page:1,perPage:10}),_=r(0),h=r({}),y=r([]),C=r(null),g=r([]),b=r(null),E=t=>{h.value=t,n.page=1,l()},l=async()=>{d.payment.getList({exhibitionId:f.value.id,...h.value,...n}).then(t=>{t.code===0&&(y.value=t.data.data,_.value=t.data.total)})},I=t=>{M.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{d.payment.del({id:t}).then(i=>{i.code===0?(x.success("删除成功"),l()):x.error(i.msg)})}).catch(()=>{})};return d.payment.getSearchField().then(t=>{t.code===0&&(g.value=t.data)}),l(),(t,i)=>{const o=U,c=X,T=V,B=R;return w(),$(z,null,[s("div",q,[s("div",Q,[e(L)]),e(A,{data:g.value,onSearch:E,type:"payment"},null,8,["data"]),s("div",j,[e(T,{ref_key:"tableRef",ref:C,data:y.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:p(()=>[e(o,{type:"selection",width:"42"}),e(o,{prop:"code",label:"编号",width:"180"}),e(o,{prop:"companyName",label:"企业名称","min-width":"120"}),e(o,{prop:"exhibitionName",label:"展会名称","min-width":"120"}),e(o,{prop:"positionCode",label:"展位号"}),e(o,{prop:"payCompany",label:"付款公司","min-width":"120"}),e(o,{prop:"payPrice",label:"付款金额","min-width":"120"}),e(o,{prop:"orderPrice",label:"订单金额","min-width":"120"}),e(o,{prop:"payType",label:"付款类型","min-width":"120"},{default:p(a=>[m(k({1:"预定金",2:"首款",3:"二次款",4:"尾款",5:"转款"}[a.row.payType]),1)]),_:1}),e(o,{prop:"receiveAccount",label:"收款账户","min-width":"120"}),e(o,{prop:"payTime",label:"到款时间","min-width":"120"}),e(o,{prop:"invoiceStatus",label:"发票"},{default:p(a=>[m(k({0:"未申请",1:"待开票",2:"已开票"}[a.row.invoiceStatus]),1)]),_:1}),e(o,{prop:"clueUser",label:"持有人"}),e(o,{fixed:"right",label:"操作",width:"220"},{default:p(a=>[e(c,{link:"",type:"primary",onClick:v=>t.$router.push({name:"FinancesPaymentDetail",query:{id:a.row.id}})},{default:p(()=>[m("详情")]),_:2},1032,["onClick"]),a.row.invoiceStatus===0?(w(),D(c,{key:0,link:"",type:"primary",onClick:v=>b.value.setApply(a.row)},{default:p(()=>[m("申请发票")]),_:2},1032,["onClick"])):O("",!0),e(c,{link:"",type:"danger",onClick:v=>I(a.row.id)},{default:p(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),s("div",G,[e(B,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:_.value,"current-page":n.page,"onUpdate:currentPage":i[0]||(i[0]=a=>n.page=a),"page-size":n.perPage,"onUpdate:pageSize":i[1]||(i[1]=a=>n.perPage=a),onChange:l},null,8,["total","current-page","page-size"])])]),e(H,{ref_key:"applyInvoiceRef",ref:b,onCallback:l},null,512)],64)}}});export{Me as default};
