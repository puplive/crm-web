import{d as O,t as c,b as y,$ as t,i as o,J as E,o as f,X as w,Y as d,h as C,Z as g,e as x,a1 as X,a7 as s}from"./index-DEM1Q7ah.js";import{E as Y}from"./dialog-OvK7FIEd.js";/* empty css                */import{a as Z,E as j}from"./form-item-BqEwLgzp.js";/* empty css              */import"./tag-BOE4AccX.js";import{E as z,a as G}from"./select-DycYLwTT.js";import"./scrollbar-CyicQk5x.js";import"./popper-6cDUjaRW.js";import{E as H,a as K}from"./tab-pane-DVM2kO0r.js";import{a as Q,E as W}from"./table-column-wBiq0U5n.js";import{E as ee}from"./checkbox-URtfrshM.js";/* empty css                */import{E as le}from"./link-BNrb30ws.js";import{E as te}from"./button-BhsazfUD.js";import{a as u}from"./index-BVCYPUgt.js";/* empty css                *//* empty css                    */import{E as oe}from"./index-B9pqzlZv.js";import{E as ae}from"./index-rUWjPUE6.js";import"./index-apjzc23w.js";import"./use-form-item-FEc-havy.js";import"./scroll-CzTDrJbU.js";import"./vnode-Bod1Q6cQ.js";import"./focus-trap-OSNMQz79.js";import"./refs-D-YtBsDp.js";import"./event-BB_Ol6Sd.js";import"./castArray-DHLwE7Nc.js";import"./_baseClone-CM4Uj5KP.js";import"./_initCloneObject-B0so-X2S.js";import"./isEqual-Dnbp5P_R.js";import"./index-qG6p4PhG.js";import"./rules-F8IXRWD9.js";import"./aria-KgdLjl5h.js";import"./validator-Cf7VM-w_.js";const ne={class:"s-table-operations"},re={class:"dialog-footer"},Oe=O({__name:"Custom",setup(ie){const k=u.customFieldTypes,_=c([]),R=c(null),m=c(!1),T=c("销售线索"),n=c({id:"",name:"",type:"",tips:""}),$=()=>{m.value=!0,n.value={id:"",name:"",type:"",tips:""}},q=l=>{m.value=!0,n.value.id=l.id,n.value.name=l.name,n.value.type=l.type,n.value.tips=l.tips},B=()=>{if(n.value.id)u.edit(n.value).then(l=>{l.code===0?(s.success("编辑成功"),m.value=!1,v()):s.error(l.msg)});else{let{id:l,...a}=n.value;u.add(a).then(r=>{r.code===0?(s.success("添加成功"),m.value=!1,v()):s.error(r.msg)})}},F=l=>{oe.confirm("此操作将永久删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{console.log(l),u.customFieldDel({id:l.id}).then(a=>{a.code===0?(s.success("删除成功"),v()):s.error(a.msg)})}).catch(()=>{})},v=async()=>{u.getList().then(l=>{l.code===0&&(_.value=l.data)})},U=(l,a)=>{u.setRequired({id:l.id,status:l.isRequired}).then(r=>{r.code===0?s.success("修改成功"):(s.error(r.msg),_.value[a].isRequired=l.isRequired===0?1:0)})},D=(l,a)=>{u.setEnable({id:l.id,status:l.isEnable}).then(r=>{r.code===0?s.success("修改成功"):(s.error(r.msg),_.value[a].isEnable=l.isEnable===0?1:0)})};return v(),(l,a)=>{const r=te,L=le,p=Q,V=ee,N=W,S=K,I=H,M=z,P=G,b=Z,h=ae,A=j,J=Y;return f(),y(E,null,[t(I,{type:"border-card"},{default:o(()=>[t(S,{label:"销售线索"},{default:o(()=>[w("div",ne,[t(r,{icon:"Plus",onClick:$},{default:o(()=>[d("线索字段")]),_:1})]),t(N,{data:_.value,"row-key":"id",border:"","default-expand-all":"","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:o(()=>[t(p,{prop:"name",label:"名称"},{default:o(e=>[e.row.type!=1&&e.row.type!=2?(f(),C(L,{key:0,type:"",onClick:i=>l.$router.push({name:"CustomField",query:{id:e.row.id,title:e.row.name,type:e.row.type}})},{default:o(()=>[d(g(e.row.name),1)]),_:2},1032,["onClick"])):(f(),y(E,{key:1},[d(g(e.row.name),1)],64))]),_:1}),t(p,{prop:"type",label:"类型"},{default:o(e=>[d(g((()=>{let i=x(k)[e.row.type];return i?i.label:""})()),1)]),_:1}),t(p,{prop:"isRequired",label:"必填"},{default:o(e=>[t(V,{modelValue:e.row.isRequired,"onUpdate:modelValue":i=>e.row.isRequired=i,"true-value":1,"false-value":0,onChange:i=>U(e.row,e.$index)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(p,{prop:"isEnable",label:"启用"},{default:o(e=>[t(V,{modelValue:e.row.isEnable,"onUpdate:modelValue":i=>e.row.isEnable=i,"true-value":1,"false-value":0,onChange:i=>D(e.row,e.$index)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(p,{label:"操作"},{default:o(e=>[t(r,{link:"",type:"primary",onClick:i=>q(e.row)},{default:o(()=>[d("编辑")]),_:2},1032,["onClick"]),t(r,{link:"",type:"danger",onClick:i=>F(e.row)},{default:o(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1}),t(J,{title:T.value,modelValue:m.value,"onUpdate:modelValue":a[4]||(a[4]=e=>m.value=e),style:{width:"400px"},draggable:""},{footer:o(()=>[w("div",re,[t(r,{onClick:a[3]||(a[3]=e=>m.value=!1)},{default:o(()=>[d("取 消")]),_:1}),t(r,{type:"primary",onClick:B},{default:o(()=>[d("确 定")]),_:1})])]),default:o(()=>[t(A,{ref_key:"addformRef",ref:R,model:n.value,"label-width":"100px"},{default:o(()=>[t(b,{label:"类型",prop:"type"},{default:o(()=>[t(P,{modelValue:n.value.type,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value.type=e)},{default:o(()=>[(f(!0),y(E,null,X(x(k),e=>(f(),C(M,{key:e.type,label:e.label,value:e.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(b,{label:"名称",prop:"name"},{default:o(()=>[t(h,{modelValue:n.value.name,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value.name=e)},null,8,["modelValue"])]),_:1}),t(b,{label:"提示",prop:"tips"},{default:o(()=>[t(h,{modelValue:n.value.tips,"onUpdate:modelValue":a[2]||(a[2]=e=>n.value.tips=e),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])],64)}}});export{Oe as default};
