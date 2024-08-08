import{d as M,l as n,s as Y,o as z,h as N,i as a,O as g,R as l,P as c}from"./index-QgCPknRV.js";import{E as L}from"./dialog-sXgMEFre.js";/* empty css                */import{a as O,E as S}from"./form-item-PCY24Bz9.js";import{E as $}from"./row-bu4qxgxb.js";import{E as A}from"./col-D7BLacbL.js";import{E as G}from"./progress-DHPYBA5h.js";import{E as H}from"./button-BkUY8nVK.js";import{E as J}from"./image-viewer-DQbdlWSy.js";import{E as K}from"./date-picker-D1JiB1gJ.js";/* empty css              */import"./scrollbar-2JWi6wHl.js";import"./popper-FvkgnJ0o.js";import"./tag-DYJzjqVa.js";import{E as Q,a as W}from"./select-D2x7JMsJ.js";import{p as X}from"./index-D3-tfyPO.js";import{u as Z}from"./index-B0GW5j1n.js";/* empty css                */import{c as f}from"./request-D3ROOKJz.js";import{E as j}from"./index-Ku1Bi_gm.js";const ee={style:{"text-align":"center"}},le={style:{"text-align":"center"}},oe={class:"dialog-footer"},ke=M({__name:"EditPayment",emits:["callback"],setup(ae,{expose:x,emit:T}){const _=n(!1),v=n(null),E=n(null),e=Y({show:!1,form:{id:0,payCompany:"",payType:0,payPrice:"",payTime:"",account:"",payImg:"",receiveImg:"",remark:""}}),C=()=>{_.value=!0,X.edit(e.form).then(t=>{t.code===0?(f.success("修改成功"),e.show=!1,U("callback")):f.error(t.msg),_.value=!1}).catch(t=>{_.value=!1})},P=t=>{e.show=!0,e.form.id=t.id,e.form.payCompany=t.payCompany,e.form.payType=t.payType,e.form.payPrice=t.payPrice,e.form.payTime=t.payTime,e.form.account=t.account,e.form.payImg=t.payImg,e.form.receiveImg=t.receiveImg,e.form.remark=t.remark},V=t=>t.size/1024/1024>3?(f.error("文件大小不能超过 3MB!"),!1):!0,b=n(!1),h=n(!1),I=(t,r)=>{let s,m;r===1?(s=b,m=v):(s=h,m=E),s.value=!0;let i=new FormData;return i.append("upload",t.file),new Promise((y,u)=>{Z(i).then(p=>{p.code===0?y(p.data):(u(p),f.error("上传失败"),m.value.clearFiles()),s.value=!1}).catch(p=>{u(p),f.error("上传失败"),m.value.clearFiles(),s.value=!1})})},U=T;return x({setEdit:P}),(t,r)=>{const s=j,m=O,i=Q,y=W,u=K,p=J,d=H,k=G,w=A,F=$,R=S,D=L;return z(),N(D,{modelValue:e.show,"onUpdate:modelValue":r[7]||(r[7]=o=>e.show=o),title:"编辑付款信息",width:"500",draggable:""},{footer:a(()=>[g("div",oe,[l(d,{onClick:r[6]||(r[6]=o=>e.show=!1)},{default:a(()=>[c("取消")]),_:1}),l(d,{type:"primary",onClick:C},{default:a(()=>[c("确定")]),_:1})])]),default:a(()=>[l(R,{ref:"willFormRef",model:e.form,"label-width":"auto","label-position":"left"},{default:a(()=>[l(m,{label:"付款公司"},{default:a(()=>[l(s,{modelValue:e.form.payCompany,"onUpdate:modelValue":r[0]||(r[0]=o=>e.form.payCompany=o)},null,8,["modelValue"])]),_:1}),l(m,{label:"到款类型"},{default:a(()=>[l(y,{modelValue:e.form.payType,"onUpdate:modelValue":r[1]||(r[1]=o=>e.form.payType=o)},{default:a(()=>[l(i,{label:"预定金",value:1}),l(i,{label:"首款",value:2}),l(i,{label:"二次款",value:3}),l(i,{label:"尾款",value:4}),l(i,{label:"转款",value:5})]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"到款金额"},{default:a(()=>[l(s,{modelValue:e.form.payPrice,"onUpdate:modelValue":r[2]||(r[2]=o=>e.form.payPrice=o)},null,8,["modelValue"])]),_:1}),l(m,{label:"到款时间"},{default:a(()=>[l(u,{modelValue:e.form.payTime,"onUpdate:modelValue":r[3]||(r[3]=o=>e.form.payTime=o),type:"date","value-format":"YYYY-MM-DD",placeholder:"",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),l(m,{label:"收款账户"},{default:a(()=>[l(s,{modelValue:e.form.account,"onUpdate:modelValue":r[4]||(r[4]=o=>e.form.account=o)},null,8,["modelValue"])]),_:1}),l(F,{gutter:20},{default:a(()=>[l(w,{span:12},{default:a(()=>[l(m,{label:"付款凭证"},{default:a(()=>[g("div",ee,[l(p,{src:e.form.payImg,"preview-src-list":[e.form.payImg],fit:"contain",style:{width:"100px",height:"100px"}},null,8,["src","preview-src-list"]),l(k,{ref_key:"uploadRef1",ref:v,"show-file-list":!1,"on-success":(o,B,q)=>{e.form.payImg=o.url},"before-upload":V,"http-request":o=>I(o,1),accept:"image/*"},{default:a(()=>[l(d,{type:"primary",size:"small",loading:b.value},{default:a(()=>[c("上传文件")]),_:1},8,["loading"])]),_:1},8,["on-success","http-request"])])]),_:1})]),_:1}),l(w,{span:12},{default:a(()=>[l(m,{label:"到款凭证"},{default:a(()=>[g("div",le,[l(p,{src:e.form.receiveImg,"preview-src-list":[e.form.receiveImg],fit:"contain",style:{width:"100px",height:"100px"}},null,8,["src","preview-src-list"]),l(k,{ref_key:"uploadRef2",ref:E,"show-file-list":!1,"on-success":(o,B,q)=>{e.form.receiveImg=o.url},"before-upload":V,"http-request":o=>I(o,2),accept:"image/*"},{default:a(()=>[l(d,{type:"primary",size:"small",loading:h.value},{default:a(()=>[c("上传文件")]),_:1},8,["loading"])]),_:1},8,["on-success","http-request"])])]),_:1})]),_:1})]),_:1}),l(m,{label:"备注"},{default:a(()=>[l(s,{type:"textarea",modelValue:e.form.remark,"onUpdate:modelValue":r[5]||(r[5]=o=>e.form.remark=o)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}});export{ke as _};
