import{d as J,t as c,b as y,$ as t,i as a,J as E,o as f,X as w,Y as d,h as C,Z as g,e as x,a1 as O,a7 as i}from"./index-D6lb1vAv.js";import{E as X}from"./dialog-CEutNOMs.js";/* empty css                */import{a as Y,E as Z}from"./form-item-CSzeSa22.js";/* empty css              */import"./tag-DyRGJO6y.js";import{E as j,a as G}from"./select-C-KkSNyU.js";import"./scrollbar-DU4G5b5p.js";import"./popper-PtN5-UwR.js";import{E as H,a as K}from"./tab-pane-BIAjk3hZ.js";import{a as Q,E as W}from"./table-column-Bdwx0tKL.js";import{E as ee}from"./checkbox-DdrTfKwk.js";/* empty css                */import{E as le}from"./link-BHgMAoRO.js";import{E as te}from"./button-CnviZ8cJ.js";import{a as u}from"./index-DqOR8YBk.js";/* empty css                *//* empty css                    */import{E as ae}from"./index-DNji5aOk.js";import{E as oe}from"./index-DtV3tWyM.js";import"./index-Dw_FUmZc.js";import"./use-form-item-D2gyIkin.js";import"./scroll-Cee1eboZ.js";import"./vnode-CWLT-RKK.js";import"./focus-trap-BL2pMCUV.js";import"./refs-BbH7IMmI.js";import"./event-BB_Ol6Sd.js";import"./castArray-CqaCZPGK.js";import"./_baseClone-B5IZTI-u.js";import"./_initCloneObject-DxFeGeIP.js";import"./isEqual-DtkQ-0cD.js";import"./index-CcWHpy07.js";import"./rules-F8IXRWD9.js";import"./aria-KgdLjl5h.js";import"./validator-BJ7NuE-R.js";const ne={class:"s-table-operations"},re={class:"dialog-footer"},Je=J({__name:"Custom",setup(se){const k=u.customFieldTypes,_=c([]),R=c(null),m=c(!1),T=c("销售线索"),n=c({id:"",name:"",type:"",tips:""}),$=()=>{m.value=!0,n.value={id:"",name:"",type:"",tips:""}},q=l=>{m.value=!0,n.value.id=l.id,n.value.name=l.name,n.value.type=l.type,n.value.tips=l.tips},B=()=>{if(n.value.id)u.edit(n.value).then(l=>{l.code===0?(i.success("编辑成功"),m.value=!1,v()):i.error(l.msg)});else{let{id:l,...o}=n.value;u.add(o).then(r=>{r.code===0?(i.success("添加成功"),m.value=!1,v()):i.error(r.msg)})}},F=l=>{ae.confirm("此操作将永久删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{console.log(l),u.customFieldDel({id:l.id}).then(o=>{o.code===0?(i.success("删除成功"),v()):i.error(o.msg)})}).catch(()=>{})},v=async()=>{u.getList().then(l=>{l.code===0&&(_.value=l.data)})},U=(l,o)=>{u.setRequired({id:l.id,status:l.isRequired}).then(r=>{r.code===0?i.success("修改成功"):(i.error(r.msg),_.value[o].isRequired=l.isRequired===0?1:0)})},D=(l,o)=>{u.setEnable({id:l.id,status:l.isEnable}).then(r=>{r.code===0?i.success("修改成功"):(i.error(r.msg),_.value[o].isEnable=l.isEnable===0?1:0)})};return v(),(l,o)=>{const r=te,L=le,p=Q,V=ee,N=W,S=K,I=H,M=j,P=G,b=Y,h=oe,z=Z,A=X;return f(),y(E,null,[t(I,{type:"border-card"},{default:a(()=>[t(S,{label:"销售线索"},{default:a(()=>[w("div",ne,[t(r,{size:"small",icon:"Plus",onClick:$},{default:a(()=>[d("线索字段")]),_:1})]),t(N,{data:_.value,"row-key":"id",border:"","default-expand-all":"","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:a(()=>[t(p,{prop:"name",label:"名称"},{default:a(e=>[e.row.type!=1&&e.row.type!=2?(f(),C(L,{key:0,type:"",onClick:s=>l.$router.push({name:"CustomField",query:{id:e.row.id,title:e.row.name,type:e.row.type}})},{default:a(()=>[d(g(e.row.name),1)]),_:2},1032,["onClick"])):(f(),y(E,{key:1},[d(g(e.row.name),1)],64))]),_:1}),t(p,{prop:"type",label:"类型"},{default:a(e=>[d(g((()=>{let s=x(k)[e.row.type];return s?s.label:""})()),1)]),_:1}),t(p,{prop:"isRequired",label:"必填"},{default:a(e=>[t(V,{modelValue:e.row.isRequired,"onUpdate:modelValue":s=>e.row.isRequired=s,"true-value":1,"false-value":0,onChange:s=>U(e.row,e.$index)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(p,{prop:"isEnable",label:"启用"},{default:a(e=>[t(V,{modelValue:e.row.isEnable,"onUpdate:modelValue":s=>e.row.isEnable=s,"true-value":1,"false-value":0,onChange:s=>D(e.row,e.$index)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(p,{label:"操作"},{default:a(e=>[t(r,{link:"",type:"primary",onClick:s=>q(e.row)},{default:a(()=>[d("编辑")]),_:2},1032,["onClick"]),t(r,{link:"",type:"danger",onClick:s=>F(e.row)},{default:a(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1}),t(A,{title:T.value,modelValue:m.value,"onUpdate:modelValue":o[4]||(o[4]=e=>m.value=e),style:{width:"400px"},draggable:""},{footer:a(()=>[w("div",re,[t(r,{onClick:o[3]||(o[3]=e=>m.value=!1)},{default:a(()=>[d("取 消")]),_:1}),t(r,{type:"primary",onClick:B},{default:a(()=>[d("确 定")]),_:1})])]),default:a(()=>[t(z,{ref_key:"addformRef",ref:R,model:n.value,"label-width":"100px"},{default:a(()=>[t(b,{label:"类型",prop:"type"},{default:a(()=>[t(P,{modelValue:n.value.type,"onUpdate:modelValue":o[0]||(o[0]=e=>n.value.type=e)},{default:a(()=>[(f(!0),y(E,null,O(x(k),e=>(f(),C(M,{key:e.type,label:e.label,value:e.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(b,{label:"名称",prop:"name"},{default:a(()=>[t(h,{modelValue:n.value.name,"onUpdate:modelValue":o[1]||(o[1]=e=>n.value.name=e)},null,8,["modelValue"])]),_:1}),t(b,{label:"提示",prop:"tips"},{default:a(()=>[t(h,{modelValue:n.value.tips,"onUpdate:modelValue":o[2]||(o[2]=e=>n.value.tips=e),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])],64)}}});export{Je as default};