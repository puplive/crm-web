import{d as F,l as _,s as R,o as D,h as B,i as t,O as h,R as e,P as V}from"./index-CtnNdf6I.js";import{E as q}from"./el-dialog-DEJ9dVvg.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                 */import{i as H,p as J}from"./index-D_n6cQhx.js";/* empty css                   */import{a as y}from"./request-DHQWaQl0.js";import{E as M}from"./index-CjOWhDaN.js";import{E as Y,a as $}from"./index-qc8ItvZn.js";import{E as z}from"./index-PIZdvO1Z.js";import{E as K}from"./el-row-CSw3K5cu.js";import{E as Q}from"./el-col-BpxPCBCU.js";import{E as W}from"./el-progress-D_X_92wx.js";import{E as X}from"./el-image-viewer-DJbOienN.js";/* empty css                       */import"./el-scrollbar-Dw8Ar6kz.js";import"./el-popper-SAL9BUsy.js";import"./el-tag-KEahQFCf.js";import{a as Z,E as j}from"./el-select-DnOT36de.js";import{u as ee}from"./index-BtD7h2aH.js";import{E as oe}from"./index-CYJzgcAt.js";const le={class:"dialog-footer"},Te=F({__name:"EditInvoice",emits:["callback"],setup(N,{expose:C,emit:I}){_(!1),_(null);const a=R({show:!1,form:{id:"",title:"",socialCode:"",contact:"",phone:"",email:""}}),v=()=>{H.edit(a.form).then(i=>{i.code===0?(y.success("修改成功"),a.show=!1,o("callback")):y.error(i.msg)})},b=i=>{a.show=!0,a.form.id=i.id,a.form.title=i.invoiceTitle,a.form.socialCode=i.socialCode,a.form.contact=i.contact,a.form.phone=i.phone,a.form.email=i.email},o=I;return C({setEdit:b}),(i,n)=>{const d=M,p=Y,E=$,g=z,U=q;return D(),B(U,{modelValue:a.show,"onUpdate:modelValue":n[6]||(n[6]=l=>a.show=l),title:"编辑发票",width:"500",draggable:""},{footer:t(()=>[h("div",le,[e(g,{onClick:n[5]||(n[5]=l=>a.show=!1)},{default:t(()=>[V("取消")]),_:1}),e(g,{type:"primary",onClick:v},{default:t(()=>[V("确定")]),_:1})])]),default:t(()=>[e(E,{ref:"willFormRef",model:a.form,"label-width":"auto"},{default:t(()=>[e(p,{label:"发票抬头"},{default:t(()=>[e(d,{modelValue:a.form.title,"onUpdate:modelValue":n[0]||(n[0]=l=>a.form.title=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(p,{label:"社会信用代码"},{default:t(()=>[e(d,{modelValue:a.form.socialCode,"onUpdate:modelValue":n[1]||(n[1]=l=>a.form.socialCode=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(p,{label:"联系人"},{default:t(()=>[e(d,{modelValue:a.form.contact,"onUpdate:modelValue":n[2]||(n[2]=l=>a.form.contact=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(p,{label:"手机号"},{default:t(()=>[e(d,{modelValue:a.form.phone,"onUpdate:modelValue":n[3]||(n[3]=l=>a.form.phone=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(p,{label:"邮箱"},{default:t(()=>[e(d,{modelValue:a.form.email,"onUpdate:modelValue":n[4]||(n[4]=l=>a.form.email=l),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}}),te={style:{"text-align":"center"}},ae={style:{"text-align":"center"}},me={class:"dialog-footer"},Pe=F({__name:"EditPayment",emits:["callback"],setup(N,{expose:C,emit:I}){const a=_(!1),v=_(null),b=_(null),o=R({show:!1,form:{id:0,payCompany:"",payType:0,payPrice:"",payTime:"",account:"",payImg:"",receiveImg:"",remark:""}}),i=()=>{a.value=!0,J.edit(o.form).then(l=>{l.code===0?(y.success("修改成功"),o.show=!1,U("callback")):y.error(l.msg),a.value=!1}).catch(l=>{a.value=!1})},n=l=>{o.show=!0,o.form.id=l.id,o.form.payCompany=l.payCompany,o.form.payType=l.payType,o.form.payPrice=l.payPrice,o.form.payTime=l.payTime,o.form.account=l.account,o.form.payImg=l.payImg,o.form.receiveImg=l.receiveImg,o.form.remark=l.remark},d=l=>l.size/1024/1024>3?(y.error("文件大小不能超过 3MB!"),!1):!0,p=_(!1),E=_(!1),g=(l,r)=>{let f,s;r===1?(f=p,s=v):(f=E,s=b),f.value=!0;let u=new FormData;return u.append("upload",l.file),new Promise((x,k)=>{ee(u).then(c=>{c.code===0?x(c.data):(k(c),y.error("上传失败"),s.value.clearFiles()),f.value=!1}).catch(c=>{k(c),y.error("上传失败"),s.value.clearFiles(),f.value=!1})})},U=I;return C({setEdit:n}),(l,r)=>{const f=M,s=Y,u=Z,x=j,k=oe,c=X,w=z,T=W,P=Q,S=K,L=$,O=q;return D(),B(O,{modelValue:o.show,"onUpdate:modelValue":r[7]||(r[7]=m=>o.show=m),title:"编辑付款信息",width:"500",draggable:""},{footer:t(()=>[h("div",me,[e(w,{onClick:r[6]||(r[6]=m=>o.show=!1)},{default:t(()=>[V("取消")]),_:1}),e(w,{type:"primary",onClick:i},{default:t(()=>[V("确定")]),_:1})])]),default:t(()=>[e(L,{ref:"willFormRef",model:o.form,"label-width":"auto"},{default:t(()=>[e(s,{label:"付款公司"},{default:t(()=>[e(f,{modelValue:o.form.payCompany,"onUpdate:modelValue":r[0]||(r[0]=m=>o.form.payCompany=m)},null,8,["modelValue"])]),_:1}),e(s,{label:"到款类型"},{default:t(()=>[e(x,{modelValue:o.form.payType,"onUpdate:modelValue":r[1]||(r[1]=m=>o.form.payType=m)},{default:t(()=>[e(u,{label:"预定金",value:1}),e(u,{label:"首款",value:2}),e(u,{label:"二次款",value:3}),e(u,{label:"尾款",value:4}),e(u,{label:"转款",value:5})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"到款金额"},{default:t(()=>[e(f,{modelValue:o.form.payPrice,"onUpdate:modelValue":r[2]||(r[2]=m=>o.form.payPrice=m)},null,8,["modelValue"])]),_:1}),e(s,{label:"到款时间"},{default:t(()=>[e(k,{modelValue:o.form.payTime,"onUpdate:modelValue":r[3]||(r[3]=m=>o.form.payTime=m),type:"date","value-format":"YYYY-MM-DD",placeholder:"",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(s,{label:"收款账户"},{default:t(()=>[e(f,{modelValue:o.form.account,"onUpdate:modelValue":r[4]||(r[4]=m=>o.form.account=m)},null,8,["modelValue"])]),_:1}),e(S,{gutter:20},{default:t(()=>[e(P,{span:12},{default:t(()=>[e(s,{label:"付款凭证"},{default:t(()=>[h("div",te,[e(c,{src:o.form.payImg,"preview-src-list":[o.form.payImg],fit:"contain",style:{width:"100px",height:"100px"}},null,8,["src","preview-src-list"]),e(T,{ref_key:"uploadRef1",ref:v,"show-file-list":!1,"on-success":(m,A,G)=>{o.form.payImg=m.url},"before-upload":d,"http-request":m=>g(m,1)},{default:t(()=>[e(w,{type:"primary",size:"small",loading:p.value},{default:t(()=>[V("上传文件")]),_:1},8,["loading"])]),_:1},8,["on-success","http-request"])])]),_:1})]),_:1}),e(P,{span:12},{default:t(()=>[e(s,{label:"到款凭证"},{default:t(()=>[h("div",ae,[e(c,{src:o.form.receiveImg,"preview-src-list":[o.form.receiveImg],fit:"contain",style:{width:"100px",height:"100px"}},null,8,["src","preview-src-list"]),e(T,{ref_key:"uploadRef2",ref:b,"show-file-list":!1,"on-success":(m,A,G)=>{o.form.receiveImg=m.url},"before-upload":d,"http-request":m=>g(m,2)},{default:t(()=>[e(w,{type:"primary",size:"small",loading:E.value},{default:t(()=>[V("上传文件")]),_:1},8,["loading"])]),_:1},8,["on-success","http-request"])])]),_:1})]),_:1})]),_:1}),e(s,{label:"备注"},{default:t(()=>[e(f,{type:"textarea",modelValue:o.form.remark,"onUpdate:modelValue":r[5]||(r[5]=m=>o.form.remark=m)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}});export{Te as _,Pe as a};
