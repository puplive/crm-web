import{d as Q,l as u,s as z,b as h,O as w,R as e,i as l,F as g,W,a5 as A,o as y,P as r,Q as b,e as H,am as J}from"./index-BR0dQuMa.js";import{E as K}from"./el-dialog-yDwitJxt.js";/* empty css                   */import{E as X}from"./el-progress-pvrTq99U.js";/* empty css                       */import{E as Y,a as Z}from"./el-radio-DMmccW_6.js";import{E as ee}from"./el-pagination-CFsXl4Ce.js";/* empty css                 */import"./el-tag-iGvJc2U-.js";import"./el-select-J2WkTCml.js";import"./el-scrollbar-mewTK9HZ.js";import"./el-popper-D7HLwyqd.js";import{E as te,a as oe}from"./el-table-column-Dw27oG5l.js";import"./el-checkbox-BPCs37d8.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                  */import{T as ae}from"./index-B7m66kvd.js";import{b as v}from"./index-DJ9wZAWM.js";import{u as le}from"./index-Bol_GZ27.js";/* empty css                       *//* empty css                   */import{E as re}from"./index-CHMUsZus.js";import{E as R}from"./index-BF0AruIr.js";import{c as p}from"./request-DZlFkSes.js";import"./index-B9LVif-P.js";import"./use-form-item-D6-dGYcx.js";import"./scroll-swAKUUji.js";import"./vnode-C8szkXO7.js";import"./refs-BH27ErlO.js";import"./event-BB_Ol6Sd.js";import"./cloneDeep-uNg0-Sc7.js";import"./_baseClone-CB7lTg9o.js";import"./_initCloneObject-Bbec7_Re.js";import"./isEqual-B3ktnJlK.js";import"./index-Ce7990KL.js";import"./castArray-B8_wb5g3.js";import"./el-form-item-BTluuiwg.js";import"./tool-BQQRKqby.js";/* empty css                                                              */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./aria-KgdLjl5h.js";import"./validator-BHukcWEz.js";const ie={class:"s-flex-col",style:{height:"100%"}},ne={class:"s-table-operations"},se={class:"s-flex-auto",style:{"min-height":"0"}},pe={class:"s-table-pagination"},Ze=Q({__name:"Booth",setup(de){W();const $=A(),m=u(!1),c=z({page:1,perPage:10}),C=u(0),E=u({});$.query.id;const k=u([]),U=u(null),x=u([]),s=z({show:!1,file:"",type:1,orderId:""}),V=a=>{E.value=a,c.page=1,f()},f=()=>{v.getList({...c,...E.value}).then(a=>{a.code===0?(k.value=a.data.data,C.value=a.data.total):k.value=[{}]})},P=a=>{R.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{v.revoke({id:a}).then(t=>{t.code===0?(p.success("撤销成功"),f()):p.error(t.msg)})}).catch(()=>{})},D=a=>{R.confirm("是否确认要删除订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{v.del({id:a}).then(t=>{t.code===0?(p.success("删除成功"),f()):p.error(t.msg)})}).catch(()=>{})},S=()=>{},F=u(null);let d=u([]);const L=a=>{let t=a[0];d.value=[{name:t.name,size:t.size,uid:t.uid,status:"ready",percentage:0,raw:t}]},q=a=>{const t=a.size/1024/1024<3;return t||p.error("文件大小不能超过 3MB!"),t},T=a=>{s.show=!0,s.type=1,s.orderId=a,s.file="",d.value=[]},I=()=>{if(d.value.length===0){p.warning("请选择合同文件");return}m.value=!0;let a=new FormData;a.append("upload",d.value[0].raw),le(a).then(t=>{t.code===0?v.receipt({orderId:s.orderId,type:s.type,url:t.data.url}).then(i=>{i.code===0?(p.success("上传成功"),s.show=!1,f()):p.error(i.msg),m.value=!1,console.log(m.value)}).catch(()=>{m.value=!1}):(p.error(t.msg),m.value=!1)}).catch(()=>{m.value=!1})};return v.getSearchField().then(a=>{a.code===0&&(x.value=a.data)}),f(),(a,t)=>{const i=re,n=oe,M=te,N=ee,B=Y,O=Z,j=X,G=K;return y(),h(g,null,[w("div",ie,[e(ae,{data:x.value,onSearch:V},null,8,["data"]),w("div",ne,[e(i,{size:"small",onClick:S},{default:l(()=>[r("批量下载合同")]),_:1}),e(i,{size:"small",onClick:S},{default:l(()=>[r("导出")]),_:1})]),w("div",se,[e(M,{ref_key:"tableRef",ref:U,data:k.value,border:"",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[e(n,{type:"selection",width:"40",fixed:"left"}),e(n,{prop:"orderCode",label:"订单编号",width:"280"}),e(n,{prop:"companyName",label:"企业名称","min-width":"120"}),e(n,{prop:"hallCode",label:"展馆号"}),e(n,{prop:"positionCode",label:"展位号"}),e(n,{prop:"area",label:"面积"}),e(n,{prop:"num",label:"展位数量","min-width":"120"}),e(n,{prop:"orderPrice",label:"订单金额","min-width":"120"}),e(n,{prop:"orderType",label:"下单方式","min-width":"120"},{default:l(o=>[r(b(o.row.orderType===1?"代下单":"展商下单"),1)]),_:1}),e(n,{prop:"payStatus",label:"付款状态","min-width":"120"},{default:l(o=>[r(b({0:"未付款",1:"部分付款",2:"已付款"}[o.row.payStatus]),1)]),_:1}),e(n,{prop:"receivedPrice",label:"到款金额","min-width":"120"}),e(n,{prop:"contractStatus",label:"合同状态","min-width":"120"},{default:l(o=>[r(b({0:"未签订",1:"已签订",2:"已回执"}[o.row.contractStatus]),1)]),_:1}),e(n,{prop:"invoiceStatus",label:"发票状态","min-width":"120"},{default:l(o=>[r(b({0:"未申请",1:"待开票",2:"部分开票",3:"已开票"}[o.row.invoiceStatus]),1)]),_:1}),e(n,{prop:"clueUser",label:"所属人"}),e(n,{prop:"authUser",label:"下单人"}),e(n,{fixed:"right",label:"操作",width:"250"},{default:l(o=>[e(i,{link:"",type:"primary",onClick:_=>a.$router.push({name:"OrderBoothDetail",query:{id:o.row.id}})},{default:l(()=>[r("详情")]),_:2},1032,["onClick"]),o.row.orderStatus!==0?(y(),h(g,{key:0},[o.row.contractStatus===0?(y(),h(g,{key:0},[e(i,{link:"",type:"primary",onClick:_=>a.$router.push({name:"ContractTemplates",query:{id:o.row.id,type:1}})},{default:l(()=>[r("签订合同")]),_:2},1032,["onClick"]),e(i,{link:"",type:"primary",onClick:_=>T(o.row.id)},{default:l(()=>[r("上传合同")]),_:2},1032,["onClick"])],64)):(y(),h(g,{key:1},[e(i,{link:"",type:"primary",onClick:_=>a.$router.push({name:"ContractTemplates",query:{id:o.row.id,type:1}})},{default:l(()=>[r("更新合同")]),_:2},1032,["onClick"]),e(i,{link:"",type:"primary",onClick:_=>T(o.row.id)},{default:l(()=>[r("上传合同")]),_:2},1032,["onClick"])],64)),e(i,{link:"",type:"primary",onClick:_=>P(o.row.id)},{default:l(()=>[r("撤销")]),_:2},1032,["onClick"])],64)):(y(),h(g,{key:1},[e(i,{link:"",type:"",disabled:""},{default:l(()=>[r("已撤销")]),_:1}),e(i,{link:"",type:"danger",onClick:_=>D(o.row.id)},{default:l(()=>[r("删除")]),_:2},1032,["onClick"])],64))]),_:1})]),_:1},8,["data"])]),w("div",pe,[e(N,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:C.value,"current-page":c.page,"onUpdate:currentPage":t[0]||(t[0]=o=>c.page=o),"page-size":c.perPage,"onUpdate:pageSize":t[1]||(t[1]=o=>c.perPage=o),onChange:f},null,8,["total","current-page","page-size"])])]),e(G,{modelValue:s.show,"onUpdate:modelValue":t[5]||(t[5]=o=>s.show=o),title:"上传合同",width:"400",draggable:""},{footer:l(()=>[e(i,{type:"primary",onClick:I,loading:m.value},{default:l(()=>[r("确定")]),_:1},8,["loading"]),e(i,{onClick:t[4]||(t[4]=o=>s.show=!1)},{default:l(()=>[r("取消")]),_:1})]),default:l(()=>[e(O,{modelValue:s.type,"onUpdate:modelValue":t[2]||(t[2]=o=>s.type=o)},{default:l(()=>[e(B,{value:1},{default:l(()=>[r("电子合同")]),_:1}),e(B,{value:2},{default:l(()=>[r("纸质合同")]),_:1})]),_:1},8,["modelValue"]),e(j,{ref_key:"uploadRef",ref:F,"auto-upload":!1,limit:1,"before-upload":q,"on-exceed":L,"file-list":H(d),"onUpdate:fileList":t[3]||(t[3]=o=>J(d)?d.value=o:d=o),style:{"margin-top":"10px"}},{default:l(()=>[e(i,{size:"small",type:"primary"},{default:l(()=>[r("点击上传")]),_:1})]),_:1},8,["file-list"])]),_:1},8,["modelValue"])],64)}}});export{Ze as default};
