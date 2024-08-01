import{d as z,l as L,s as M,b as y,O as n,R as e,i as l,W as O,a5 as G,N as W,o as v,P as d,F as P,U as X,al as C,h as j,X as A,Y as H}from"./index-DeSX2eSr.js";import{E as J,a as K}from"./el-form-item-CRv0drmm.js";import{E as Q}from"./el-row-BFlqfcyz.js";import{E as Z}from"./el-col-Cif2sTCC.js";import{E as ee}from"./el-progress-CweXfkkr.js";import{E as le}from"./el-image-viewer-Dvsm3OTV.js";import{E as oe}from"./el-date-picker-t0xtrGi1.js";/* empty css                 */import"./el-scrollbar-C4h8kzU_.js";import"./el-popper-CT0v3eTF.js";/* empty css                  */import"./el-tag-BQyrV36T.js";import{E as ae,a as te}from"./el-select-BMVNPZYZ.js";/* empty css                       */import{E as de,a as ne}from"./el-radio-CuKIBoRC.js";import{p as se}from"./index-D3uLjGS3.js";import{u as ue}from"./index-14u3e8jx.js";/* empty css                   */import{E as ie}from"./index-BrXk96ji.js";import{c as x,b as re}from"./request-Cns7CokS.js";import{E as pe}from"./index-BW2YqXyq.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-form-item-D_DCfmfc.js";import"./castArray-hZIkKxd3.js";import"./_baseClone--tkZ36p-.js";import"./_initCloneObject-CHbams4w.js";import"./cloneDeep-BsC4GeIN.js";import"./isEqual-BMa_i8p1.js";import"./scroll-iU-J_Tou.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./arrays-6TrVLtTe.js";import"./index-Cz-ImYxH.js";import"./event-BB_Ol6Sd.js";import"./tool-BQQRKqby.js";const S=V=>(A("data-v-8b137b76"),V=V(),H(),V),me={class:"recording"},_e={class:"top"},fe=S(()=>n("span",{style:{"margin-right":"20px"}},"录入到款信息",-1)),ve=S(()=>n("div",{class:"s-flex-auto"},null,-1)),Ve={style:{"margin-bottom":"10px"}},ye={style:{"text-align":"center"}},be={class:"image-slot"},ge={style:{"text-align":"center"}},he={class:"image-slot"},Ue={style:{"text-align":"center"}},Ee={class:"image-slot"},ke={style:{"text-align":"center","margin-top":"30px"}},Ie=z({__name:"Recording",setup(V){O();const T=G(),b=L(Number(T.query.id)),m=M([{orderId:b,payImg:"",receiveImg:"",invoice:{img:""}}]),B=()=>{m.push({orderId:b,invoice:{}})},g=i=>i.size/1024/1024>3?(x.error("文件大小不能超过 3MB!"),!1):!0,h=i=>{let r=new FormData;return r.append("upload",i.file),new Promise((s,p)=>{ue(r).then(c=>{c.code===0?s(c.data):p(c)})})},q=i=>{se.add(m[i]).then(r=>{r.code===0?(x.success("保存成功"),m[i].isSub=!0):x.error(r.msg)})};return(i,r)=>{const s=ie,p=de,c=ne,t=K,u=pe,f=ae,N=te,Y=oe,U=W("Picture"),E=re,k=le,I=ee,_=Z,D=Q,$=J;return v(),y("div",me,[n("div",_e,[fe,e(s,{onClick:i.$router.back},{default:l(()=>[d("返回")]),_:1},8,["onClick"]),ve,e(s,{type:"primary",onClick:B},{default:l(()=>[d("添加明细")]),_:1})]),n("div",Ve,[e(s,{link:"",type:"primary",onClick:r[0]||(r[0]=o=>i.$router.push({name:"ContractDetail",query:{orderId:b.value}}))},{default:l(()=>[d("查看合同")]),_:1})]),n("div",null,[e($,{data:m,"label-width":"auto","label-position":"left"},{default:l(()=>[(v(!0),y(P,null,X(m,(o,w)=>(v(),y("div",{key:w,class:"item"},[e(D,{gutter:20},{default:l(()=>[e(_,{md:12},{default:l(()=>[e(t,{label:"订单类型"},{default:l(()=>[e(c,{modelValue:o.orderType,"onUpdate:modelValue":a=>o.orderType=a},{default:l(()=>[e(p,{value:1},{default:l(()=>[d("展位")]),_:1}),e(p,{value:2},{default:l(()=>[d("物料")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"付款公司"},{default:l(()=>[e(u,{modelValue:o.payCompany,"onUpdate:modelValue":a=>o.payCompany=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"到款类型"},{default:l(()=>[e(N,{modelValue:o.payType,"onUpdate:modelValue":a=>o.payType=a},{default:l(()=>[e(f,{label:"预定金",value:1}),e(f,{label:"首款",value:2}),e(f,{label:"二次款",value:3}),e(f,{label:"尾款",value:4}),e(f,{label:"转款",value:5})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"到款金额"},{default:l(()=>[e(u,{modelValue:o.payPrice,"onUpdate:modelValue":a=>o.payPrice=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"到款时间"},{default:l(()=>[e(Y,{modelValue:o.payTime,"onUpdate:modelValue":a=>o.payTime=a,type:"date","value-format":"YYYY-MM-DD",placeholder:"",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"收款账户"},{default:l(()=>[e(u,{modelValue:o.account,"onUpdate:modelValue":a=>o.account=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(D,null,{default:l(()=>[e(_,{span:12},{default:l(()=>[e(t,{label:"付款凭证"},{default:l(()=>[n("div",ye,[e(k,{src:o.payImg,"preview-src-list":[o.payImg],fit:"contain",style:{width:"100px",height:"100px"}},C({_:2},[o.payImg===""?{name:"error",fn:l(()=>[n("div",be,[e(E,null,{default:l(()=>[e(U)]),_:1})])]),key:"0"}:void 0]),1032,["src","preview-src-list"]),e(I,{class:"","show-file-list":!1,"on-success":(a,R,F)=>{o.payImg=a.url},"before-upload":g,"http-request":h,accept:"image/*"},{default:l(()=>[e(s,{type:"primary",size:"small"},{default:l(()=>[d("上传文件")]),_:1})]),_:2},1032,["on-success"])])]),_:2},1024)]),_:2},1024),e(_,{span:12},{default:l(()=>[e(t,{label:"到款凭证"},{default:l(()=>[n("div",ge,[e(k,{src:o.receiveImg,"preview-src-list":[o.receiveImg],fit:"contain",style:{width:"100px",height:"100px"}},C({_:2},[o.receiveImg===""?{name:"error",fn:l(()=>[n("div",he,[e(E,null,{default:l(()=>[e(U)]),_:1})])]),key:"0"}:void 0]),1032,["src","preview-src-list"]),e(I,{class:"","show-file-list":!1,"on-success":(a,R,F)=>{o.receiveImg=a.url},"before-upload":g,"http-request":h,accept:"image/*"},{default:l(()=>[e(s,{type:"primary",size:"small"},{default:l(()=>[d("上传文件")]),_:1})]),_:2},1032,["on-success"])])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(_,{md:12},{default:l(()=>[e(t,{label:"发票抬头"},{default:l(()=>[e(u,{modelValue:o.invoice.title,"onUpdate:modelValue":a=>o.invoice.title=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"社会信用代码"},{default:l(()=>[e(u,{modelValue:o.invoice.socialCode,"onUpdate:modelValue":a=>o.invoice.socialCode=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"联系人"},{default:l(()=>[e(u,{modelValue:o.invoice.contact,"onUpdate:modelValue":a=>o.invoice.contact=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"手机号"},{default:l(()=>[e(u,{modelValue:o.invoice.phone,"onUpdate:modelValue":a=>o.invoice.phone=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"发送邮箱"},{default:l(()=>[e(u,{modelValue:o.invoice.email,"onUpdate:modelValue":a=>o.invoice.email=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"发票类型"},{default:l(()=>[e(c,{modelValue:o.invoice.type,"onUpdate:modelValue":a=>o.invoice.type=a},{default:l(()=>[e(p,{value:1},{default:l(()=>[d("电子专票")]),_:1}),e(p,{value:2},{default:l(()=>[d("电子普票")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"开票状态"},{default:l(()=>[e(c,{modelValue:o.invoice.status,"onUpdate:modelValue":a=>o.invoice.status=a},{default:l(()=>[e(p,{value:1},{default:l(()=>[d("待开票")]),_:1}),e(p,{value:2},{default:l(()=>[d("已开票")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"发票号"},{default:l(()=>[e(u,{modelValue:o.invoice.invoiceCode,"onUpdate:modelValue":a=>o.invoice.invoiceCode=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"发票附件"},{default:l(()=>[n("div",Ue,[e(k,{src:o.invoice.img,"preview-src-list":[o.invoice.img],fit:"contain",style:{width:"100px",height:"100px"}},C({_:2},[o.invoice.img===""?{name:"error",fn:l(()=>[n("div",Ee,[e(E,null,{default:l(()=>[e(U)]),_:1})])]),key:"0"}:void 0]),1032,["src","preview-src-list"]),e(I,{class:"","show-file-list":!1,"on-success":(a,R,F)=>{o.invoice.img=a.url},"before-upload":g,"http-request":h},{default:l(()=>[e(s,{type:"primary",size:"small"},{default:l(()=>[d("上传文件")]),_:1})]),_:2},1032,["on-success"])])]),_:2},1024)]),_:2},1024),e(_,{span:24},{default:l(()=>[e(t,{label:"备注"},{default:l(()=>[e(u,{type:"textarea",modelValue:o.remark,"onUpdate:modelValue":a=>o.remark=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(_,{span:24},{default:l(()=>[n("div",ke,[o.isSub?(v(),j(s,{key:0,type:"primary",disabled:""},{default:l(()=>[d("已提交")]),_:1})):(v(),y(P,{key:1},[e(s,{type:"primary",onClick:a=>q(w)},{default:l(()=>[d("保存")]),_:2},1032,["onClick"]),e(s,{onClick:a=>m.splice(w,1)},{default:l(()=>[d("取消")]),_:2},1032,["onClick"])],64))])]),_:2},1024)]),_:2},1024)]))),128))]),_:1},8,["data"])])])}}}),nl=ce(Ie,[["__scopeId","data-v-8b137b76"]]);export{nl as default};