import{d as L,s as b,l as w,o as M,b as A,O as _,R as e,i as t,P as n,Q as u,F as G}from"./index-C4ZHMdsf.js";/* empty css                       */import{E as O,a as Q}from"./el-radio-DND-9TzI.js";import{E as j}from"./el-dialog-DT0Vm4yd.js";/* empty css                   */import{E as q,a as H}from"./el-form-item-7bO4EAtk.js";/* empty css                 */import{E as J}from"./el-pagination-Px-iAm1m.js";import"./el-tag-CHBC5oVH.js";import"./el-select-BAI-bRYo.js";import"./el-scrollbar-DK_tWI4B.js";import"./el-popper-B443bNNp.js";import{E as K,a as W}from"./el-table-column-CZpklB2W.js";import"./el-checkbox-CDkq_TX-.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                  */import{E as X}from"./el-image-viewer-D5I6eAaG.js";import{T as Y}from"./index-nZkTn-gm.js";import{_ as Z}from"./UpInvoice.vue_vue_type_script_setup_true_lang-D8DLPUhf.js";import{a as h}from"./index-ByzsWCjn.js";/* empty css                   *//* empty css                       */import{E as ee}from"./index-p2j87hdZ.js";import{a as g}from"./request-dKwP9640.js";import{E as oe}from"./index-Lvg0anao.js";import{E as te}from"./index-CYs0fHQD.js";import"./event-BB_Ol6Sd.js";import"./use-form-item-D6oge9Wn.js";import"./index-CZ7niqPb.js";import"./index-BRWKrWXD.js";import"./scroll-DR2mTp8M.js";import"./vnode-URQtSuPv.js";import"./refs-Cyz4nhRV.js";import"./castArray-Q0VEGTvx.js";import"./_baseClone-BkNg7ClW.js";import"./_initCloneObject-D0-Iyl8Y.js";import"./isEqual-CXVvUB-S.js";import"./isArrayLikeObject-DD89v4wE.js";import"./el-date-picker-CjX-6urB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./arrays-6TrVLtTe.js";import"./index-D21LTkpT.js";/* empty css                          */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./el-progress-CDxw8agF.js";import"./cloneDeep-BWHYeVvH.js";import"./index-D7M7nhN1.js";import"./aria-KgdLjl5h.js";import"./validator-CSHokMzt.js";const le={class:"s-flex-col",style:{height:"100%"}},ae=_("div",null,null,-1),ie={class:"s-flex-auto",style:{"min-height":"0"}},re={class:"s-table-pagination"},ne={class:"dialog-footer"},pe={class:"dialog-footer"},io=L({__name:"Invoices",setup(me){const f=b({page:1,perPage:10}),y=w(0),V=w({}),C=w([]),S=w(null),E=w([]),U=a=>{V.value=a,f.page=1,m()},m=async()=>{h.invoice.getList({...V.value,...f}).then(a=>{a.code===0&&(C.value=a.data.data,y.value=a.data.total)})},z=a=>{ee.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{h.invoice.del({id:a}).then(l=>{l.code===0?(g.success("删除成功"),m()):g.error(l.msg)})}).catch(()=>{})},i=b({show:!1,form:{id:"",title:"",socialCode:"",contact:"",phone:"",email:""}}),P=()=>{h.invoice.edit(i.form).then(a=>{a.code===0?(g.success("修改成功"),i.show=!1,m()):g.error(a.msg)})},F=a=>{i.show=!0,i.form.id=a.id,i.form.title=a.invoiceTitle,i.form.socialCode=a.socialCode,i.form.contact=a.contact,i.form.phone=a.phone,i.form.email=a.email},p=b({show:!1,form:{id:"",cose:"",type:1}}),B=()=>{h.invoice.openInvoice(p.form).then(a=>{a.code===0?(g.success("成功"),p.show=!1,m()):g.error(a.msg)})},R=a=>{p.show=!0,p.form.id=a.id,p.form.code="",p.form.type=1};return h.invoice.getSearchField().then(a=>{a.code===0&&(E.value=a.data)}),m(),(a,l)=>{const r=K,v=X,d=oe,$=W,D=J,c=te,s=q,x=H,k=j,I=O,N=Q;return M(),A(G,null,[_("div",le,[ae,e(Y,{data:E.value,onSearch:U},null,8,["data"]),_("div",ie,[e($,{ref_key:"tableRef",ref:S,data:C.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:t(()=>[e(r,{prop:"orderCode",label:"订单编号",width:"180"}),e(r,{prop:"companyName",label:"企业名称","min-width":"120"}),e(r,{prop:"hallCode",label:"展馆号"}),e(r,{prop:"positionCode",label:"展位号"}),e(r,{prop:"positionType",label:"展位类型","min-width":"120"},{default:t(o=>[n(u({1:"标准",2:"特装"}[o.row.positionType]),1)]),_:1}),e(r,{prop:"positionArea",label:"面积"}),e(r,{prop:"positionUnitPrice",label:"展位单价","min-width":"120"}),e(r,{prop:"orderPrice",label:"订单金额","min-width":"120"}),e(r,{prop:"payType",label:"付款方式","min-width":"120"},{default:t(o=>[n(u("银行转账"))]),_:1}),e(r,{prop:"payStatus",label:"付款状态","min-width":"120"},{default:t(o=>[n(u({0:"未付款",1:"部分付款",2:"已付款"}[o.row.payStatus]),1)]),_:1}),e(r,{prop:"orderStatus",label:"订单状态","min-width":"120"},{default:t(o=>[n(u({0:"已撤销",1:"已完成"}[o.row.orderStatus]),1)]),_:1}),e(r,{prop:"orderType",label:"订单类型","min-width":"120"},{default:t(o=>[n(u({1:"代下单",2:"展商下单"}[o.row.orderType]),1)]),_:1}),e(r,{prop:"payCode",label:"录款编号","min-width":"120"}),e(r,{prop:"invoiceType",label:"发票类型","min-width":"120"},{default:t(o=>[n(u({1:"电子专票",2:"电子普票"}[o.row.invoiceType]),1)]),_:1}),e(r,{prop:"invoiceTitle",label:"发票抬头","min-width":"120"}),e(r,{prop:"socialCode",label:"社会信用代码","min-width":"120"}),e(r,{prop:"contact",label:"联系人"}),e(r,{prop:"phone",label:"手机号"}),e(r,{prop:"email",label:"邮箱"}),e(r,{prop:"invoicePrice",label:"开票金额","min-width":"120"}),e(r,{prop:"invoiceStatus",label:"开票状态","min-width":"120"},{default:t(o=>[n(u({0:"未申请",1:"待开票",2:"已开票"}[o.row.invoiceStatus]),1)]),_:1}),e(r,{prop:"payImg",label:"付款凭证","min-width":"120"},{default:t(o=>[e(v,{style:{width:"30px",height:"30px","margin-right":"5px"},src:o.row.payImg,fit:"contain","preview-src-list":[o.row.payImg],"preview-teleported":"true",loading:"lazy"},null,8,["src","preview-src-list"])]),_:1}),e(r,{prop:"receiveImg",label:"到款凭证","min-width":"120"},{default:t(o=>[e(v,{style:{width:"30px",height:"30px","margin-right":"5px"},src:o.row.receiveImg,fit:"contain","preview-src-list":[o.row.receiveImg],"preview-teleported":"true",loading:"lazy"},null,8,["src","preview-src-list"])]),_:1}),e(r,{prop:"invoiceImg",label:"发票附件","min-width":"120"},{default:t(o=>[e(v,{style:{width:"30px",height:"30px","margin-right":"5px"},src:o.row.invoiceImg,fit:"contain","preview-src-list":[o.row.invoiceImg],"preview-teleported":"true",loading:"lazy"},null,8,["src","preview-src-list"])]),_:1}),e(r,{fixed:"right",label:"操作",width:"200"},{default:t(o=>[e(d,{link:"",type:"primary",size:"small",onClick:T=>R(o.row),style:{"margin-right":"5px"}},{default:t(()=>[n("开票")]),_:2},1032,["onClick"]),e(Z,{id:o.row.id,onCallback:m},null,8,["id"]),e(d,{link:"",type:"primary",size:"small",onClick:T=>F(o.row)},{default:t(()=>[n("编辑")]),_:2},1032,["onClick"]),e(d,{link:"",type:"primary",size:"small",onClick:T=>z([o.row.id])},{default:t(()=>[n("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_("div",re,[e(D,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:y.value,"current-page":f.page,"onUpdate:currentPage":l[0]||(l[0]=o=>f.page=o),"page-size":f.perPage,"onUpdate:pageSize":l[1]||(l[1]=o=>f.perPage=o),onChange:m},null,8,["total","current-page","page-size"])])]),e(k,{modelValue:i.show,"onUpdate:modelValue":l[8]||(l[8]=o=>i.show=o),title:"编辑发票",width:"500",draggable:""},{footer:t(()=>[_("div",ne,[e(d,{onClick:l[7]||(l[7]=o=>i.show=!1)},{default:t(()=>[n("取消")]),_:1}),e(d,{type:"primary",onClick:P},{default:t(()=>[n("确定")]),_:1})])]),default:t(()=>[e(x,{ref:"willFormRef",model:i.form,"label-width":"auto"},{default:t(()=>[e(s,{label:"发票抬头"},{default:t(()=>[e(c,{modelValue:i.form.title,"onUpdate:modelValue":l[2]||(l[2]=o=>i.form.title=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(s,{label:"社会信用代码"},{default:t(()=>[e(c,{modelValue:i.form.socialCode,"onUpdate:modelValue":l[3]||(l[3]=o=>i.form.socialCode=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(s,{label:"联系人"},{default:t(()=>[e(c,{modelValue:i.form.contact,"onUpdate:modelValue":l[4]||(l[4]=o=>i.form.contact=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(s,{label:"手机号"},{default:t(()=>[e(c,{modelValue:i.form.phone,"onUpdate:modelValue":l[5]||(l[5]=o=>i.form.phone=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(s,{label:"邮箱"},{default:t(()=>[e(c,{modelValue:i.form.email,"onUpdate:modelValue":l[6]||(l[6]=o=>i.form.email=o),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(k,{modelValue:p.show,"onUpdate:modelValue":l[12]||(l[12]=o=>p.show=o),title:"开票",width:"500",draggable:""},{footer:t(()=>[_("div",pe,[e(d,{onClick:l[11]||(l[11]=o=>i.show=!1)},{default:t(()=>[n("取消")]),_:1}),e(d,{type:"primary",onClick:B},{default:t(()=>[n("确定")]),_:1})])]),default:t(()=>[e(x,{ref:"willFormRef",model:i.form,"label-width":"auto"},{default:t(()=>[e(s,{label:"发票类型"},{default:t(()=>[e(N,{modelValue:p.form.type,"onUpdate:modelValue":l[9]||(l[9]=o=>p.form.type=o)},{default:t(()=>[e(I,{value:1},{default:t(()=>[n("电子专票")]),_:1}),e(I,{value:2},{default:t(()=>[n("电子普票")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"发票号"},{default:t(()=>[e(c,{modelValue:p.form.code,"onUpdate:modelValue":l[10]||(l[10]=o=>p.form.code=o),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});export{io as default};
