import{d as M,a0 as A,t as u,z as G,y as J,b,X as _,$ as s,i as l,J as v,o as t,a1 as Y,Y as m,Z as d,h as o,ak as a,a7 as P}from"./index-CsSJFrlK.js";import{E as Z,a as q,_ as K}from"./sx-D4AGY9zj.js";/* empty css              */import"./tag-DY-B5aln.js";import"./select-3kccdXdW.js";import{E as Q}from"./scrollbar-CZuRCcqh.js";import"./popper-B2Vb2gTZ.js";import{E as W,a as ee}from"./table-column-Kv_Pind5.js";import{E as te,a as oe}from"./checkbox-DcxHBF5s.js";/* empty css                */import{E as ae}from"./link-B5CuQQyv.js";import{E as ie}from"./image-viewer-CvjPvmmc.js";/* empty css                       */import{E as re}from"./button-BUZlkGEX.js";import{_ as le}from"./index.vue_vue_type_script_setup_true_lang-3HnklNKi.js";/* empty css                                              */import{_ as ne,a as pe,b as se}from"./Invoicing.vue_vue_type_script_setup_true_lang-Lerl7jlt.js";import{a as k}from"./index-C6oKubHO.js";import{E as me}from"./ExhibitionChange-BE6hyRMd.js";/* empty css                *//* empty css                    *//* empty css                */import{E as ue}from"./index-DzoSwmyB.js";import"./isEqual-CvxtaMY2.js";import"./_initCloneObject-CsDQaSOx.js";import"./use-form-item-DnM4c4f2.js";import"./index-DpwNVV4c.js";import"./event-BB_Ol6Sd.js";import"./dropdown-DfGOvcWD.js";import"./scroll-0bU1GjN2.js";import"./castArray-P7DQA2s2.js";import"./focus-trap-eCW7AxRS.js";import"./form-item-BYlSGAvh.js";import"./_baseClone-BroCRn3i.js";/* empty css                      */import"./index-CC5nfDqg.js";import"./refs-BDtf1moo.js";import"./progress-CCX5thEY.js";import"./cloneDeep-DWDabbLA.js";import"./index-C8AcPPwL.js";import"./dialog-C9HnpYCV.js";import"./index-CphHqUT0.js";import"./vnode-BI2wCGRQ.js";/* empty css                    */import"./radio-CHHmYjEW.js";import"./index-71tKxlTF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./aria-KgdLjl5h.js";import"./validator-qxK2KuRl.js";const ce={class:"s-flex-col",style:{height:"100%"}},de={class:"",style:{"margin-bottom":"10px"}},_e={class:"s-table-operations"},ye=_("img",{style:{width:"17px"},src:K,alt:""},null,-1),fe={class:"s-flex-auto",style:{"min-height":"0"}},he={key:0},be={class:"s-table-pagination"},yt=M({__name:"Invoices",setup(ge){const w=A(),x=u(w.EXHIBITION_INFO);G(()=>w.EXHIBITION_INFO,(n,p)=>{n.id!==p.id&&(x.value=n,c())},{deep:!0});const y=J({page:1,perPage:20}),E=u(0),I=u({}),C=u([]),T=u(null),S=u([]),V=n=>{I.value=n,y.page=1,c()},c=async()=>{k.invoice.getList({exhibitionId:x.value.id,...I.value,...y}).then(n=>{n.code===0&&(C.value=n.data.data,E.value=n.data.total)})},$=n=>{ue.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{k.invoice.del({id:n}).then(p=>{p.code===0?(P.success("删除成功"),c()):P.error(p.msg)})}).catch(()=>{})};k.invoice.getSearchField().then(n=>{n.code===0&&(S.value=n.data)});const B=u(null),N=u(null);c();const f=u([]),g=u([]),R=()=>{setTimeout(()=>{let n=[];T.value.columns.forEach(p=>{p.label&&n.push(p.label)}),g.value=n.join(",").split(","),f.value=n.join(",").split(",")},0)},i=n=>f.value.length===0&&g.value.length===0?!0:f.value.includes(n);return R(),(n,p)=>{const h=re,F=te,D=oe,L=Q,O=Z,r=ee,z=ie,U=ae,X=W,j=q;return t(),b(v,null,[_("div",ce,[_("div",de,[s(me)]),s(le,{data:S.value,onSearch:V,type:"invoice"},null,8,["data"]),_("div",_e,[s(O,{placement:"bottom-end",trigger:"click"},{reference:l(()=>[s(h,{size:"",link:""},{default:l(()=>[ye]),_:1})]),default:l(()=>[s(L,{height:"500px"},{default:l(()=>[s(D,{modelValue:f.value,"onUpdate:modelValue":p[0]||(p[0]=e=>f.value=e)},{default:l(()=>[_("ul",null,[(t(!0),b(v,null,Y(g.value,e=>(t(),b("li",{class:"s-checkbox_item",key:e},[s(F,{label:e,value:e},{default:l(()=>[m(d(e),1)]),_:2},1032,["label","value"])]))),128))])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_("div",fe,[s(X,{ref_key:"tableRef",ref:T,data:C.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[i("订单编号")?(t(),o(r,{key:0,prop:"orderCode",label:"订单编号",width:"180"})):a("",!0),i("企业名称")?(t(),o(r,{key:1,prop:"companyName",label:"企业名称","min-width":"120"})):a("",!0),i("展会名称")?(t(),o(r,{key:2,prop:"exhibitionName",label:"展会名称","min-width":"120"})):a("",!0),i("展馆号")?(t(),o(r,{key:3,prop:"hallCode",label:"展馆号"})):a("",!0),i("展位号")?(t(),o(r,{key:4,prop:"positionCode",label:"展位号"})):a("",!0),i("展位类型")?(t(),o(r,{key:5,prop:"positionType",label:"展位类型","min-width":"120"},{default:l(e=>[m(d({1:"标准",2:"特装"}[e.row.positionType]),1)]),_:1})):a("",!0),i("面积")?(t(),o(r,{key:6,prop:"positionArea",label:"面积"})):a("",!0),i("展位单价")?(t(),o(r,{key:7,prop:"positionUnitPrice",label:"展位单价","min-width":"120"})):a("",!0),i("订单金额")?(t(),o(r,{key:8,prop:"orderPrice",label:"订单金额","min-width":"120"})):a("",!0),i("付款方式")?(t(),o(r,{key:9,prop:"payType",label:"付款方式","min-width":"120"},{default:l(e=>[m(d({1:"全款",2:"分期"}[e.row.payType]),1)]),_:1})):a("",!0),i("付款状态")?(t(),o(r,{key:10,prop:"payStatus",label:"付款状态","min-width":"120"},{default:l(e=>[m(d({0:"未付款",1:"部分付款",2:"已付款"}[e.row.payStatus]),1)]),_:1})):a("",!0),i("订单状态")?(t(),o(r,{key:11,prop:"orderStatus",label:"订单状态","min-width":"120"},{default:l(e=>[m(d({0:"已撤销",1:"已完成"}[e.row.orderStatus]),1)]),_:1})):a("",!0),i("订单类型")?(t(),o(r,{key:12,prop:"orderType",label:"订单类型","min-width":"120"},{default:l(e=>[m(d({1:"代下单",2:"展商下单"}[e.row.orderType]),1)]),_:1})):a("",!0),i("录款编号")?(t(),o(r,{key:13,prop:"payCode",label:"录款编号","min-width":"120"})):a("",!0),i("发票类型")?(t(),o(r,{key:14,prop:"invoiceType",label:"发票类型","min-width":"120"},{default:l(e=>[m(d({1:"电子专票",2:"电子普票"}[e.row.invoiceType]),1)]),_:1})):a("",!0),i("发票抬头")?(t(),o(r,{key:15,prop:"invoiceTitle",label:"发票抬头","min-width":"120"})):a("",!0),i("社会信用代码")?(t(),o(r,{key:16,prop:"socialCode",label:"社会信用代码","min-width":"120"})):a("",!0),i("联系人")?(t(),o(r,{key:17,prop:"contact",label:"联系人"})):a("",!0),i("手机号")?(t(),o(r,{key:18,prop:"phone",label:"手机号"})):a("",!0),i("邮箱")?(t(),o(r,{key:19,prop:"email",label:"邮箱"})):a("",!0),i("开票金额")?(t(),o(r,{key:20,prop:"invoicePrice",label:"开票金额","min-width":"120"})):a("",!0),i("开票状态")?(t(),o(r,{key:21,prop:"invoiceStatus",label:"开票状态","min-width":"120"},{default:l(e=>[m(d({1:"待开票",2:"已开票"}[e.row.invoiceStatus]),1)]),_:1})):a("",!0),i("付款凭证")?(t(),o(r,{key:22,prop:"payImg",label:"付款凭证","min-width":"120"},{default:l(e=>[e.row.payImg?(t(),o(z,{key:0,style:{width:"30px",height:"30px","margin-right":"5px"},src:e.row.payImg,fit:"contain","preview-src-list":[e.row.payImg],"preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])):a("",!0)]),_:1})):a("",!0),i("到款凭证")?(t(),o(r,{key:23,prop:"receiveImg",label:"到款凭证","min-width":"120"},{default:l(e=>[e.row.receiveImg?(t(),o(z,{key:0,style:{width:"30px",height:"30px","margin-right":"5px"},src:e.row.receiveImg,fit:"contain","preview-src-list":[e.row.receiveImg],"preview-teleported":!0,loading:"lazy"},null,8,["src","preview-src-list"])):a("",!0)]),_:1})):a("",!0),i("发票附件")?(t(),o(r,{key:24,prop:"invoiceImg",label:"发票附件","min-width":"120"},{default:l(e=>[e.row.invoiceImg?(t(),o(U,{key:0,href:e.row.invoiceImg,type:"primary"},{default:l(()=>[m("下载")]),_:2},1032,["href"])):a("",!0)]),_:1})):a("",!0),i("操作")?(t(),o(r,{key:25,fixed:"right",label:"操作",width:"250"},{default:l(e=>[e.row.orderStatus!==0?(t(),b(v,{key:0},[e.row.invoiceStatus===1?(t(),o(h,{key:0,disabled:e.row.status===0,link:"",type:e.row.status===0?"":"primary",onClick:()=>B.value.openInvoiceSet(e.row)},{default:l(()=>[m("开票")]),_:2},1032,["disabled","type","onClick"])):a("",!0),s(h,{disabled:e.row.status===0,link:"",type:e.row.status===0?"":"primary"},{default:l(()=>[e.row.status===0?(t(),b("span",he,"上传发票")):(t(),o(ne,{key:1,id:e.row.id,onCallback:c},null,8,["id"]))]),_:2},1032,["disabled","type"]),s(h,{disabled:e.row.status===0,link:"",type:e.row.status===0?"":"primary",onClick:H=>N.value.setEdit(e.row)},{default:l(()=>[m("编辑")]),_:2},1032,["disabled","type","onClick"])],64)):a("",!0),s(h,{link:"",type:"danger",onClick:H=>$(e.row.id)},{default:l(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})):a("",!0)]),_:1},8,["data"])]),_("div",be,[s(j,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50,100],total:E.value,"current-page":y.page,"onUpdate:currentPage":p[1]||(p[1]=e=>y.page=e),"page-size":y.perPage,"onUpdate:pageSize":p[2]||(p[2]=e=>y.perPage=e),onChange:c},null,8,["total","current-page","page-size"])])]),s(pe,{ref_key:"editInvoiceRef",ref:N,onCallback:c},null,512),s(se,{ref_key:"invoicingRef",ref:B,onCallback:c},null,512)],64)}}});export{yt as default};