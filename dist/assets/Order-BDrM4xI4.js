import{d as X,a0 as j,t as c,z as q,y as H,b as h,X as m,$ as s,i as n,J as g,o as t,a1 as M,Y as u,Z as k,h as a,ak as r,a7 as N}from"./index-CsSJFrlK.js";import{E as G,a as J,_ as Y}from"./sx-D4AGY9zj.js";/* empty css              */import"./tag-DY-B5aln.js";import"./select-3kccdXdW.js";import"./scrollbar-CZuRCcqh.js";import"./popper-B2Vb2gTZ.js";import{E as Z,a as A}from"./table-column-Kv_Pind5.js";import{E as K,a as Q}from"./checkbox-DcxHBF5s.js";/* empty css                */import{E as W}from"./link-B5CuQQyv.js";/* empty css                       */import{E as ee}from"./button-BUZlkGEX.js";import{_ as te}from"./index.vue_vue_type_script_setup_true_lang-3HnklNKi.js";/* empty css                                              */import{_ as oe}from"./ApplyInvoice.vue_vue_type_script_setup_true_lang-C_WDd5TS.js";import{E as ae}from"./ExhibitionChange-BE6hyRMd.js";import{a as P}from"./index-C6oKubHO.js";import{b as re}from"./index-CMA0sFEQ.js";/* empty css                *//* empty css                    *//* empty css                */import{E as le}from"./index-DzoSwmyB.js";import"./isEqual-CvxtaMY2.js";import"./_initCloneObject-CsDQaSOx.js";import"./use-form-item-DnM4c4f2.js";import"./index-DpwNVV4c.js";import"./event-BB_Ol6Sd.js";import"./dropdown-DfGOvcWD.js";import"./scroll-0bU1GjN2.js";import"./castArray-P7DQA2s2.js";import"./focus-trap-eCW7AxRS.js";import"./form-item-BYlSGAvh.js";import"./_baseClone-BroCRn3i.js";/* empty css                      */import"./index-CC5nfDqg.js";import"./refs-BDtf1moo.js";import"./dialog-C9HnpYCV.js";import"./index-CphHqUT0.js";import"./vnode-BI2wCGRQ.js";import"./progress-CCX5thEY.js";import"./cloneDeep-DWDabbLA.js";/* empty css                    */import"./radio-CHHmYjEW.js";import"./index-C8AcPPwL.js";import"./rules-F8IXRWD9.js";import"./index-71tKxlTF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./aria-KgdLjl5h.js";import"./validator-qxK2KuRl.js";const ie={class:"s-flex-col",style:{height:"100%"}},ne={style:{"margin-bottom":"10px"}},pe={class:"s-table-operations"},se=m("img",{style:{width:"17px"},src:Y,alt:""},null,-1),ce={class:"s-flex-auto",style:{"min-height":"0"}},ue={class:"s-table-pagination"},st=X({__name:"Order",setup(me){const v=j(),w=c(v.EXHIBITION_INFO);q(()=>v.EXHIBITION_INFO,(o,p)=>{o.id!==p.id&&(w.value=o,_())},{deep:!0});const d=H({page:1,perPage:20}),E=c(0),x=c({}),C=c([]),S=c(null),I=c([]),R=c(null),T=o=>{x.value=o,d.page=1,_()},_=async()=>{P.order.getList({...x.value,...d,exhibitionId:w.value.id}).then(o=>{o.code===0&&(C.value=o.data.data,E.value=o.data.total)})},$=o=>{le.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{re.revoke({id:o}).then(p=>{p.code===0?(N.success("撤销成功"),_()):N.error(p.msg)})}).catch(()=>{})};P.order.getSearchField().then(o=>{o.code===0&&(I.value=o.data)}),_();const f=c([]),y=c([]),z=()=>{setTimeout(()=>{let o=[];S.value.columns.forEach(p=>{p.label&&o.push(p.label)}),y.value=o.join(",").split(","),f.value=o.join(",").split(",")},0)},l=o=>f.value.length===0&&y.value.length===0?!0:f.value.includes(o);return z(),(o,p)=>{const b=ee,F=K,V=Q,O=G,i=A,D=W,L=Z,U=J;return t(),h(g,null,[m("div",ie,[m("div",ne,[s(ae)]),s(te,{data:I.value,onSearch:T},null,8,["data"]),m("div",pe,[s(O,{placement:"bottom-end",trigger:"click"},{reference:n(()=>[s(b,{size:"",link:""},{default:n(()=>[se]),_:1})]),default:n(()=>[s(V,{modelValue:f.value,"onUpdate:modelValue":p[0]||(p[0]=e=>f.value=e)},{default:n(()=>[m("ul",null,[(t(!0),h(g,null,M(y.value,e=>(t(),h("li",{class:"s-checkbox_item",key:e},[s(F,{label:e,value:e},{default:n(()=>[u(k(e),1)]),_:2},1032,["label","value"])]))),128))])]),_:1},8,["modelValue"])]),_:1})]),m("div",ce,[s(L,{ref_key:"tableRef",ref:S,data:C.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:n(()=>[l("订单编号")?(t(),a(i,{key:0,prop:"orderCode",label:"订单编号",width:"200"})):r("",!0),l("企业名称")?(t(),a(i,{key:1,prop:"companyName",label:"企业名称","min-width":"120"})):r("",!0),l("展会名称")?(t(),a(i,{key:2,prop:"exhibitionName",label:"展会名称","min-width":"120"})):r("",!0),l("展位号")?(t(),a(i,{key:3,prop:"positionCode",label:"展位号"})):r("",!0),l("参展品牌")?(t(),a(i,{key:4,prop:"brand",label:"参展品牌","min-width":"120"})):r("",!0),l("面积")?(t(),a(i,{key:5,prop:"area",label:"面积"})):r("",!0),l("展位数")?(t(),a(i,{key:6,prop:"num",label:"展位数"})):r("",!0),l("订单金额")?(t(),a(i,{key:7,prop:"orderPrice",label:"订单金额","min-width":"120"})):r("",!0),l("合同状态")?(t(),a(i,{key:8,prop:"contractStatus",label:"合同状态","min-width":"120"},{default:n(e=>[u(k(["未签订","已签订","已回执(电子)","已回执(纸质)"][e.row.contractStatus]),1)]),_:1})):r("",!0),l("合同附件")?(t(),a(i,{key:9,prop:"contractReceipt",label:"合同附件","min-width":"120"},{default:n(e=>[e.row.contractReceipt?(t(),a(D,{key:0,href:e.row.contractReceipt,type:"primary"},{default:n(()=>[u("下载")]),_:2},1032,["href"])):r("",!0)]),_:1})):r("",!0),l("定金")?(t(),a(i,{key:10,prop:"deposit",label:"定金"})):r("",!0),l("已收")?(t(),a(i,{key:11,prop:"receivedPrice",label:"已收"})):r("",!0),l("未收款")?(t(),a(i,{key:12,prop:"unknownPrice",label:"未收款"})):r("",!0),l("付款状态")?(t(),a(i,{key:13,prop:"payStatus",label:"付款状态"},{default:n(e=>[u(k(["未付款","部分付款","已付款"][e.row.payStatus]),1)]),_:1})):r("",!0),l("发票")?(t(),a(i,{key:14,prop:"invoiceStatus",label:"发票"},{default:n(e=>[u(k(["未申请","待开票","部分开票","已开票"][e.row.invoiceStatus]),1)]),_:1})):r("",!0),l("持有人")?(t(),a(i,{key:15,prop:"clueUser",label:"持有人"})):r("",!0),l("操作")?(t(),a(i,{key:16,fixed:"right",label:"操作",width:"250"},{default:n(e=>[s(b,{link:"",type:"primary",onClick:B=>o.$router.push({name:"FinancesOrderDetail",query:{id:e.row.id}})},{default:n(()=>[u("详情")]),_:2},1032,["onClick"]),e.row.orderStatus===1?(t(),h(g,{key:0},[s(b,{disabled:e.row.contractStatus===0,link:"",type:e.row.contractStatus===0?"":"primary",onClick:B=>o.$router.push({name:"FinancesRecording",query:{id:e.row.id}})},{default:n(()=>[u("录入到款")]),_:2},1032,["disabled","type","onClick"]),s(b,{link:"",type:"danger",onClick:B=>$(e.row.id)},{default:n(()=>[u("撤销")]),_:2},1032,["onClick"])],64)):(t(),a(b,{key:1,link:"",disabled:""},{default:n(()=>[u("已撤销")]),_:1}))]),_:1})):r("",!0)]),_:1},8,["data"])]),m("div",ue,[s(U,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50,100],total:E.value,"current-page":d.page,"onUpdate:currentPage":p[1]||(p[1]=e=>d.page=e),"page-size":d.perPage,"onUpdate:pageSize":p[2]||(p[2]=e=>d.perPage=e),onChange:_},null,8,["total","current-page","page-size"])])]),s(oe,{ref_key:"applyInvoiceRef",ref:R,onCallback:_},null,512)],64)}}});export{st as default};