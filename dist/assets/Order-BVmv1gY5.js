import{d as F,a0 as T,t as l,z,y as O,b as w,X as c,$ as t,i as r,J as k,o as d,Y as n,Z as u,h as E,ak as D,a7 as x}from"./index-DEM1Q7ah.js";import{E as V}from"./pagination-CxeK4p13.js";/* empty css              */import"./tag-BOE4AccX.js";import"./select-DycYLwTT.js";import"./scrollbar-CyicQk5x.js";import"./popper-6cDUjaRW.js";import{E as L,a as U}from"./table-column-wBiq0U5n.js";import"./checkbox-URtfrshM.js";/* empty css                */import{E as X}from"./button-BhsazfUD.js";import{E as q}from"./link-BNrb30ws.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-DP3pQG-h.js";/* empty css                                              */import{_ as M}from"./ApplyInvoice.vue_vue_type_script_setup_true_lang-B5oCFohr.js";import{E as J}from"./ExhibitionChange-L0dImouF.js";import{a as C}from"./index-BF3y7m96.js";import{b as Y}from"./index-Offk-8XA.js";/* empty css                *//* empty css                    *//* empty css                */import{E as Z}from"./index-B9pqzlZv.js";import"./isEqual-Dnbp5P_R.js";import"./_initCloneObject-B0so-X2S.js";import"./use-form-item-FEc-havy.js";import"./index-rUWjPUE6.js";import"./event-BB_Ol6Sd.js";import"./scroll-CzTDrJbU.js";import"./castArray-DHLwE7Nc.js";import"./focus-trap-OSNMQz79.js";import"./form-item-BqEwLgzp.js";import"./_baseClone-CM4Uj5KP.js";/* empty css                      */import"./index-AZNK1TTm.js";import"./refs-D-YtBsDp.js";import"./dialog-OvK7FIEd.js";import"./index-apjzc23w.js";import"./vnode-Bod1Q6cQ.js";import"./progress-DrfPNYOl.js";import"./cloneDeep-D6tY96VI.js";/* empty css                    */import"./radio-cDeAVAMw.js";import"./index-B2VnipfP.js";import"./rules-F8IXRWD9.js";import"./index-DvSBF-rc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./aria-KgdLjl5h.js";import"./validator-Cf7VM-w_.js";const j={class:"s-flex-col",style:{height:"100%"}},A={style:{"margin-bottom":"10px"}},G={class:"s-flex-auto",style:{"min-height":"0"}},K={class:"s-table-pagination"},Zt=F({__name:"Order",setup(Q){const f=T(),_=l(f.EXHIBITION_INFO);z(()=>f.EXHIBITION_INFO,(a,i)=>{a.id!==i.id&&(_.value=a,s())},{deep:!0});const p=O({page:1,perPage:20}),h=l(0),b=l({}),g=l([]),S=l(null),y=l([]),I=l(null),B=a=>{b.value=a,p.page=1,s()},s=async()=>{C.order.getList({...b.value,...p,exhibitionId:_.value.id}).then(a=>{a.code===0&&(g.value=a.data.data,h.value=a.data.total)})},N=a=>{Z.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Y.revoke({id:a}).then(i=>{i.code===0?(x.success("撤销成功"),s()):x.error(i.msg)})}).catch(()=>{})};return C.order.getSearchField().then(a=>{a.code===0&&(y.value=a.data)}),s(),(a,i)=>{const o=U,P=q,m=X,R=L,$=V;return d(),w(k,null,[c("div",j,[c("div",A,[t(J)]),t(H,{data:y.value,onSearch:B},null,8,["data"]),c("div",G,[t(R,{ref_key:"tableRef",ref:S,data:g.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:r(()=>[t(o,{prop:"orderCode",label:"订单编号",width:"200"}),t(o,{prop:"companyName",label:"企业名称","min-width":"120"}),t(o,{prop:"exhibitionName",label:"展会名称","min-width":"120"}),t(o,{prop:"positionCode",label:"展位号"}),t(o,{prop:"brand",label:"参展品牌","min-width":"120"}),t(o,{prop:"area",label:"面积"}),t(o,{prop:"num",label:"展位数"}),t(o,{prop:"orderPrice",label:"订单金额","min-width":"120"}),t(o,{prop:"contractStatus",label:"合同状态","min-width":"120"},{default:r(e=>[n(u(["未签订","已签订","已回执(电子)","已回执(纸质)"][e.row.contractStatus]),1)]),_:1}),t(o,{prop:"contractReceipt",label:"合同附件","min-width":"120"},{default:r(e=>[e.row.contractReceipt?(d(),E(P,{key:0,href:e.row.contractReceipt,type:"primary"},{default:r(()=>[n("下载")]),_:2},1032,["href"])):D("",!0)]),_:1}),t(o,{prop:"deposit",label:"定金"}),t(o,{prop:"receivedPrice",label:"已收"}),t(o,{prop:"unknownPrice",label:"未收款"}),t(o,{prop:"payStatus",label:"付款状态"},{default:r(e=>[n(u(["未付款","部分付款","已付款"][e.row.payStatus]),1)]),_:1}),t(o,{prop:"invoiceStatus",label:"发票"},{default:r(e=>[n(u(["未申请","待开票","部分开票","已开票"][e.row.invoiceStatus]),1)]),_:1}),t(o,{prop:"clueUser",label:"持有人"}),t(o,{fixed:"right",label:"操作",width:"250"},{default:r(e=>[t(m,{link:"",type:"primary",onClick:v=>a.$router.push({name:"FinancesOrderDetail",query:{id:e.row.id}})},{default:r(()=>[n("详情")]),_:2},1032,["onClick"]),e.row.orderStatus===1?(d(),w(k,{key:0},[t(m,{disabled:e.row.contractStatus===0,link:"",type:e.row.contractStatus===0?"":"primary",onClick:v=>a.$router.push({name:"FinancesRecording",query:{id:e.row.id}})},{default:r(()=>[n("录入到款")]),_:2},1032,["disabled","type","onClick"]),t(m,{link:"",type:"danger",onClick:v=>N(e.row.id)},{default:r(()=>[n("撤销")]),_:2},1032,["onClick"])],64)):(d(),E(m,{key:1,link:"",disabled:""},{default:r(()=>[n("已撤销")]),_:1}))]),_:1})]),_:1},8,["data"])]),c("div",K,[t($,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50,100],total:h.value,"current-page":p.page,"onUpdate:currentPage":i[0]||(i[0]=e=>p.page=e),"page-size":p.perPage,"onUpdate:pageSize":i[1]||(i[1]=e=>p.perPage=e),onChange:s},null,8,["total","current-page","page-size"])])]),t(M,{ref_key:"applyInvoiceRef",ref:I,onCallback:s},null,512)],64)}}});export{Zt as default};