import{d as G,s as h,l as v,o as Q,f as j,P as g,S as e,w as t,Q as p,R as d,F as H}from"./index-CqGmAY_u.js";/* empty css                 */import{E as J}from"./el-dialog-v8QaKeiT.js";/* empty css                   *//* empty css                     *//* empty css                 */import{E as K}from"./el-pagination-C94Vvszp.js";import"./el-tag-uPOr0Gox.js";/* empty css                  */import"./el-scrollbar-DStktWal.js";import{E as O,a as W}from"./el-table-column-BN3t8Niw.js";import"./el-checkbox-BEIE1FTh.js";import"./el-tooltip-l0sNRNKZ.js";import{E as X}from"./el-progress-DhJv_DBp.js";import"./el-button-DpzYuNCC.js";import{E as Y}from"./el-link--dnIedoq.js";import{T as Z}from"./index-BGjDof29.js";import{a as y}from"./index-CGXvrgRF.js";import{u as ee}from"./index-Bewy8imb.js";/* empty css                   *//* empty css                       */import{E as oe}from"./index-D5J-_Dfe.js";import{a as f}from"./request-BWe5mLiC.js";import{E as te}from"./index-Bd1qaB5O.js";import{E as le}from"./index-CN0jcStv.js";import{E as ae,a as re}from"./index-M5aUYcP_.js";import{E as ie,a as pe}from"./index-CguX-oIt.js";import"./index-ChNZniro.js";import"./index-BJocUqJs.js";import"./scroll-Covgc6bg.js";import"./vnode-8cI36gNR.js";import"./refs-DIIzzgZO.js";import"./event-BB_Ol6Sd.js";import"./index-CFhDgrYB.js";import"./isEqual-BCKW0y_w.js";import"./_initCloneObject-BTvP7gDY.js";import"./typescript-B9iuFu41.js";import"./castArray-Ds8PJccp.js";import"./isArrayLikeObject-bNXIFdAR.js";import"./cloneDeep-CKE_w5NT.js";import"./_baseClone-CIKtdTEW.js";/* empty css                                                              *//* empty css                       *//* empty css                          */import"./index-BXjaXClQ.js";import"./arrays-6TrVLtTe.js";import"./index-E146iEmP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./aria-KgdLjl5h.js";import"./validator-0OFKhMQ4.js";const ne={class:"s-flex-col",style:{height:"100%"}},me=g("div",null,null,-1),de={class:"s-flex-auto",style:{"min-height":"0"}},se={class:"s-table-pagination"},fe={class:"dialog-footer"},ue={class:"dialog-footer"},co=G({__name:"Invoices",setup(ce){const u=h({page:1,perPage:10}),V=v(0),E=v({}),C=v([]),U=v(null),k=v([]),x=a=>{E.value=a,u.page=1,c()},c=async()=>{y.invoice.getList({...E.value,...u}).then(a=>{a.code===0&&(C.value=a.data.data,V.value=a.data.total)})},z=a=>{oe.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{}).catch(()=>{})},i=h({show:!1,form:{id:"",title:"",socialCode:"",contact:"",phone:"",email:"",type:"",status:"",invoiceCode:"",img:""}}),F=()=>{y.invoice.edit(i.form).then(a=>{a.code===0?(f.success("申请成功"),i.show=!1,c()):f.error(a.msg)})},P=a=>{i.show=!0,i.form.id=a.id,i.form.title=a.title,i.form.socialCode=a.socialCode,i.form.contact=a.contact,i.form.phone=a.phone,i.form.email=a.email},B=a=>a.size/1024/1024>3?(f.error("文件大小不能超过 3MB!"),!1):!0,D=a=>{let l=new FormData;return l.append("upload",a.file),new Promise((r,b)=>{ee(l).then(m=>{m.code===0?r(m.data):b(m)})})},R=a=>{y.invoice.uploadInvoice(a).then(l=>{l.code===0?(f.success("上传成功"),c()):f.error(l.msg)})},n=h({show:!1,form:{id:"",cose:"",type:1}}),$=()=>{y.invoice.openInvoice(n.form).then(a=>{a.code===0?(f.success("成功"),n.show=!1,c()):f.error(a.msg)})},L=a=>{n.show=!0,n.form.id=a.id,n.form.code="",n.form.type=1};return y.invoice.getSearchField().then(a=>{a.code===0&&(k.value=a.data)}),c(),(a,l)=>{const r=O,b=Y,m=te,N=X,M=W,q=K,_=le,s=ae,I=re,T=J,S=ie,A=pe;return Q(),j(H,null,[g("div",ne,[me,e(Z,{data:k.value,onSearch:x},null,8,["data"]),g("div",de,[e(M,{ref_key:"tableRef",ref:U,data:C.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:t(()=>[e(r,{type:"selection",width:"42"}),e(r,{prop:"orderCode",label:"订单编号",width:"180"}),e(r,{prop:"companyName",label:"企业名称"}),e(r,{prop:"hallCode",label:"展馆号"}),e(r,{prop:"positionCode",label:"展位号"}),e(r,{prop:"positionType",label:"展位类型"},{default:t(o=>[p(d({1:"标准",2:"特装"}[o.row.positionType]),1)]),_:1}),e(r,{prop:"positionArea",label:"面积"}),e(r,{prop:"positionUnitPrice",label:"展位单价"}),e(r,{prop:"orderPrice",label:"订单金额"}),e(r,{prop:"payType",label:"付款方式"},{default:t(o=>[p(d({1:"全款",2:"分期"}[o.row.payType]),1)]),_:1}),e(r,{prop:"payStatus",label:"付款状态"},{default:t(o=>[p(d({0:"未付款",1:"部分付款",2:"已付款"}[o.row.payStatus]),1)]),_:1}),e(r,{prop:"orderStatus",label:"订单状态"},{default:t(o=>[p(d({0:"已撤销",1:"已完成"}[o.row.orderStatus]),1)]),_:1}),e(r,{prop:"orderType",label:"订单类型"},{default:t(o=>[p(d({1:"代下单",2:"展商下单"}[o.row.orderType]),1)]),_:1}),e(r,{prop:"payCode",label:"录款编号"}),e(r,{prop:"invoiceType",label:"发票类型"},{default:t(o=>[p(d({1:"电子专票",2:"电子普票"}[o.row.invoiceType]),1)]),_:1}),e(r,{prop:"invoiceTitle",label:"发票抬头"}),e(r,{prop:"socialCode",label:"社会信用代码"}),e(r,{prop:"contact",label:"联系人"}),e(r,{prop:"phone",label:"手机号"}),e(r,{prop:"email",label:"邮箱"}),e(r,{prop:"invoicePrice",label:"开票金额"}),e(r,{prop:"invoiceStatus",label:"开票状态"},{default:t(o=>[p(d({0:"待开票",1:"已开票"}[o.row.invoiceStatus]),1)]),_:1}),e(r,{prop:"payImg",label:"付款凭证"},{default:t(o=>[e(b,{href:o.row.payImg,target:"_blank"},{default:t(()=>[p(d(o.row.payImg),1)]),_:2},1032,["href"])]),_:1}),e(r,{prop:"receiveImg",label:"到款凭证"},{default:t(o=>[e(b,{href:o.row.receiveImg,target:"_blank"},{default:t(()=>[p(d(o.row.receiveImg),1)]),_:2},1032,["href"])]),_:1}),e(r,{prop:"invoiceImg",label:"发票附件"},{default:t(o=>[e(b,{href:o.row.invoiceImg,target:"_blank"},{default:t(()=>[p(d(o.row.invoiceImg),1)]),_:2},1032,["href"])]),_:1}),e(r,{fixed:"right",label:"操作",width:"200"},{default:t(o=>[e(m,{link:"",type:"primary",size:"small",onClick:w=>L(o.row)},{default:t(()=>[p("开票")]),_:2},1032,["onClick"]),e(N,{"show-file-list":!1,"on-success":(w,_e,ge)=>{R({id:o.row.id,url:w.url})},"before-upload":B,"http-request":D},{default:t(()=>[e(m,{link:"",type:"primary",size:"small"},{default:t(()=>[p("上传发票")]),_:1})]),_:2},1032,["on-success"]),e(m,{link:"",type:"primary",size:"small",onClick:w=>P(o.row)},{default:t(()=>[p("编辑")]),_:2},1032,["onClick"]),e(m,{link:"",type:"primary",size:"small",onClick:w=>z([o.row.id])},{default:t(()=>[p("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),g("div",se,[e(q,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:V.value,"current-page":u.page,"onUpdate:currentPage":l[0]||(l[0]=o=>u.page=o),"page-size":u.perPage,"onUpdate:pageSize":l[1]||(l[1]=o=>u.perPage=o),onChange:c},null,8,["total","current-page","page-size"])])]),e(T,{modelValue:i.show,"onUpdate:modelValue":l[8]||(l[8]=o=>i.show=o),title:"编辑发票",width:"500",draggable:""},{footer:t(()=>[g("div",fe,[e(m,{onClick:l[7]||(l[7]=o=>i.show=!1)},{default:t(()=>[p("取消")]),_:1}),e(m,{type:"primary",onClick:F},{default:t(()=>[p("确定")]),_:1})])]),default:t(()=>[e(I,{ref:"willFormRef",model:i.form,"label-width":"auto"},{default:t(()=>[e(s,{label:"发票抬头"},{default:t(()=>[e(_,{modelValue:i.form.title,"onUpdate:modelValue":l[2]||(l[2]=o=>i.form.title=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(s,{label:"社会信用代码"},{default:t(()=>[e(_,{modelValue:i.form.socialCode,"onUpdate:modelValue":l[3]||(l[3]=o=>i.form.socialCode=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(s,{label:"联系人"},{default:t(()=>[e(_,{modelValue:i.form.contact,"onUpdate:modelValue":l[4]||(l[4]=o=>i.form.contact=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(s,{label:"手机号"},{default:t(()=>[e(_,{modelValue:i.form.phone,"onUpdate:modelValue":l[5]||(l[5]=o=>i.form.phone=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(s,{label:"邮箱"},{default:t(()=>[e(_,{modelValue:i.form.email,"onUpdate:modelValue":l[6]||(l[6]=o=>i.form.email=o),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(T,{modelValue:n.show,"onUpdate:modelValue":l[12]||(l[12]=o=>n.show=o),title:"转为意向客户",width:"500",draggable:""},{footer:t(()=>[g("div",ue,[e(m,{onClick:l[11]||(l[11]=o=>i.show=!1)},{default:t(()=>[p("取消")]),_:1}),e(m,{type:"primary",onClick:$},{default:t(()=>[p("确定")]),_:1})])]),default:t(()=>[e(I,{ref:"willFormRef",model:i.form,"label-width":"auto"},{default:t(()=>[e(s,{label:"发票类型"},{default:t(()=>[e(A,{modelValue:n.form.type,"onUpdate:modelValue":l[9]||(l[9]=o=>n.form.type=o)},{default:t(()=>[e(S,{value:1},{default:t(()=>[p("电子专票")]),_:1}),e(S,{value:2},{default:t(()=>[p("电子普票")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"发票号"},{default:t(()=>[e(_,{modelValue:n.form.code,"onUpdate:modelValue":l[10]||(l[10]=o=>n.form.code=o),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});export{co as default};
