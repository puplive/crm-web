import{d as A,l as c,o as f,f as y,S as t,w as o,P as w,Q as d,c as C,R as E,F as g,a as x,W as O}from"./index-CqGmAY_u.js";import{E as Q}from"./el-dialog-v8QaKeiT.js";/* empty css                   *//* empty css                     *//* empty css                 */import"./el-tag-uPOr0Gox.js";/* empty css                  */import"./el-scrollbar-DStktWal.js";import{E as W,a as j}from"./el-tab-pane-rhvq7wYB.js";import{E as G,a as H}from"./el-table-column-BN3t8Niw.js";import{E as J}from"./el-checkbox-BEIE1FTh.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-button-DpzYuNCC.js";import{a as u}from"./index-B9SnKlc_.js";/* empty css                   *//* empty css                       */import{a as s}from"./request-BWe5mLiC.js";import{E as K}from"./index-D5J-_Dfe.js";import{E as X}from"./index-Bd1qaB5O.js";import{E as Y,a as Z}from"./index-CFhDgrYB.js";import{E as ee,a as le}from"./index-M5aUYcP_.js";import{E as te}from"./index-CN0jcStv.js";import"./index-ChNZniro.js";import"./index-BJocUqJs.js";import"./scroll-Covgc6bg.js";import"./vnode-8cI36gNR.js";import"./refs-DIIzzgZO.js";import"./event-BB_Ol6Sd.js";import"./_initCloneObject-BTvP7gDY.js";import"./isEqual-BCKW0y_w.js";import"./typescript-B9iuFu41.js";import"./index-mfK_xoYs.js";import"./isArrayLikeObject-bNXIFdAR.js";import"./rules-BWEfMqzk.js";import"./aria-KgdLjl5h.js";import"./validator-0OFKhMQ4.js";import"./castArray-Ds8PJccp.js";import"./_baseClone-CIKtdTEW.js";const oe={class:"s-table-operations"},ae={class:"dialog-footer"},Qe=A({__name:"Custom",setup(ne){const V=u.customFieldTypes,_=c([]),R=c(null),m=c(!1),T=c("销售线索"),n=c({id:"",name:"",type:"",tips:""}),q=()=>{m.value=!0,n.value={id:"",name:"",type:"",tips:""}},$=l=>{m.value=!0,n.value.id=l.id,n.value.name=l.name,n.value.type=l.type,n.value.tips=l.tips},B=()=>{if(n.value.id)u.edit(n.value).then(l=>{l.code===0?(s.success("编辑成功"),m.value=!1,v()):s.error(l.msg)});else{let{id:l,...a}=n.value;u.add(a).then(r=>{r.code===0?(s.success("添加成功"),m.value=!1,v()):s.error(r.msg)})}},F=l=>{K.confirm("此操作将永久删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{console.log(l),u.customFieldDel({id:l.id}).then(a=>{a.code===0?(s.success("删除成功"),v()):s.error(a.msg)})}).catch(()=>{})},v=async()=>{u.getList().then(l=>{l.code===0&&(_.value=l.data)})},U=(l,a)=>{u.setRequired({id:l.id,status:l.isRequired}).then(r=>{r.code===0?s.success("修改成功"):(s.error(r.msg),_.value[a].isRequired=l.isRequired===0?1:0)})},D=(l,a)=>{u.setEnable({id:l.id,status:l.isEnable}).then(r=>{r.code===0?s.success("修改成功"):(s.error(r.msg),_.value[a].isEnable=l.isEnable===0?1:0)})};return v(),(l,a)=>{const r=X,p=G,k=J,S=H,N=W,P=j,I=Z,L=Y,b=ee,h=te,M=le,z=Q;return f(),y(g,null,[t(P,{type:"border-card"},{default:o(()=>[t(N,{label:"销售客户"},{default:o(()=>[w("div",oe,[t(r,{size:"small",icon:"Plus",onClick:q},{default:o(()=>[d("线索字段")]),_:1})]),t(S,{data:_.value,"row-key":"id",border:"","default-expand-all":"","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:o(()=>[t(p,{prop:"name",label:"名称"},{default:o(e=>[e.row.type!=1&&e.row.type!=2?(f(),C(r,{key:0,type:"primary",link:"",onClick:i=>l.$router.push({path:"/settings/custom/field",query:{id:e.row.id,title:e.row.name}})},{default:o(()=>[d(E(e.row.name),1)]),_:2},1032,["onClick"])):(f(),y(g,{key:1},[d(E(e.row.name),1)],64))]),_:1}),t(p,{prop:"type",label:"类型"},{default:o(e=>[d(E((()=>{let i=x(V)[e.row.type];return i?i.label:""})()),1)]),_:1}),t(p,{prop:"isRequired",label:"必填"},{default:o(e=>[t(k,{modelValue:e.row.isRequired,"onUpdate:modelValue":i=>e.row.isRequired=i,"true-value":1,"false-value":0,onChange:i=>U(e.row,e.$index)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(p,{prop:"isEnable",label:"启用"},{default:o(e=>[t(k,{modelValue:e.row.isEnable,"onUpdate:modelValue":i=>e.row.isEnable=i,"true-value":1,"false-value":0,onChange:i=>D(e.row,e.$index)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(p,{label:"操作"},{default:o(e=>[t(r,{link:"",type:"primary",onClick:i=>$(e.row)},{default:o(()=>[d("编辑")]),_:2},1032,["onClick"]),t(r,{link:"",type:"danger",onClick:i=>F(e.row)},{default:o(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1}),t(z,{title:T.value,modelValue:m.value,"onUpdate:modelValue":a[4]||(a[4]=e=>m.value=e),style:{width:"400px"}},{footer:o(()=>[w("div",ae,[t(r,{onClick:a[3]||(a[3]=e=>m.value=!1)},{default:o(()=>[d("取 消")]),_:1}),t(r,{type:"primary",onClick:B},{default:o(()=>[d("确 定")]),_:1})])]),default:o(()=>[t(M,{ref_key:"addformRef",ref:R,model:n.value,"label-width":"100px"},{default:o(()=>[t(b,{label:"类型",prop:"type"},{default:o(()=>[t(L,{modelValue:n.value.type,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value.type=e)},{default:o(()=>[(f(!0),y(g,null,O(x(V),e=>(f(),C(I,{key:e.type,label:e.label,value:e.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(b,{label:"名称",prop:"name"},{default:o(()=>[t(h,{modelValue:n.value.name,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value.name=e)},null,8,["modelValue"])]),_:1}),t(b,{label:"提示",prop:"tips"},{default:o(()=>[t(h,{modelValue:n.value.tips,"onUpdate:modelValue":a[2]||(a[2]=e=>n.value.tips=e),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])],64)}}});export{Qe as default};
