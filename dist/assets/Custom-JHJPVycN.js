import{d as z,l as c,b as y,R as t,i as a,F as E,o as f,O as w,P as d,h as C,Q as g,e as x,U as A}from"./index-QgCPknRV.js";import{E as Q}from"./dialog-sXgMEFre.js";/* empty css                */import{a as j,E as G}from"./form-item-PCY24Bz9.js";/* empty css              */import"./tag-DYJzjqVa.js";import{E as H,a as J}from"./select-D2x7JMsJ.js";import"./scrollbar-2JWi6wHl.js";import"./popper-FvkgnJ0o.js";import{E as K,a as W}from"./tab-pane-Bl4Tm4fR.js";import{a as X,E as Y}from"./table-column-Bt9ktRkS.js";import{E as Z}from"./checkbox-GQAT0fGF.js";/* empty css                */import{E as ee}from"./button-BkUY8nVK.js";import{a as u}from"./index-N8E41ePA.js";/* empty css                *//* empty css                    */import{c as s}from"./request-D3ROOKJz.js";import{E as le}from"./index-D6PYRXf8.js";import{E as te}from"./index-Ku1Bi_gm.js";import"./index-Dj4886hi.js";import"./use-form-item-Do-jLYkW.js";import"./scroll-DylINAFt.js";import"./vnode-BA49LMa9.js";import"./refs-C4B67JwL.js";import"./event-BB_Ol6Sd.js";import"./castArray-CXoRlNM7.js";import"./_baseClone-CkCg4Dv3.js";import"./_initCloneObject-DzxW9sW-.js";import"./isEqual-Dq4V8Bky.js";import"./index-Dgp6sb1P.js";import"./rules-F8IXRWD9.js";import"./aria-KgdLjl5h.js";import"./validator-Okt9-3p9.js";const ae={class:"s-table-operations"},oe={class:"dialog-footer"},Me=z({__name:"Custom",setup(ne){const V=u.customFieldTypes,_=c([]),R=c(null),m=c(!1),T=c("销售线索"),n=c({id:"",name:"",type:"",tips:""}),q=()=>{m.value=!0,n.value={id:"",name:"",type:"",tips:""}},F=l=>{m.value=!0,n.value.id=l.id,n.value.name=l.name,n.value.type=l.type,n.value.tips=l.tips},U=()=>{if(n.value.id)u.edit(n.value).then(l=>{l.code===0?(s.success("编辑成功"),m.value=!1,v()):s.error(l.msg)});else{let{id:l,...o}=n.value;u.add(o).then(r=>{r.code===0?(s.success("添加成功"),m.value=!1,v()):s.error(r.msg)})}},$=l=>{le.confirm("此操作将永久删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{console.log(l),u.customFieldDel({id:l.id}).then(o=>{o.code===0?(s.success("删除成功"),v()):s.error(o.msg)})}).catch(()=>{})},v=async()=>{u.getList().then(l=>{l.code===0&&(_.value=l.data)})},B=(l,o)=>{u.setRequired({id:l.id,status:l.isRequired}).then(r=>{r.code===0?s.success("修改成功"):(s.error(r.msg),_.value[o].isRequired=l.isRequired===0?1:0)})},D=(l,o)=>{u.setEnable({id:l.id,status:l.isEnable}).then(r=>{r.code===0?s.success("修改成功"):(s.error(r.msg),_.value[o].isEnable=l.isEnable===0?1:0)})};return v(),(l,o)=>{const r=ee,p=X,k=Z,N=Y,P=W,S=K,I=H,L=J,b=j,h=te,M=G,O=Q;return f(),y(E,null,[t(S,{type:"border-card"},{default:a(()=>[t(P,{label:"销售客户"},{default:a(()=>[w("div",ae,[t(r,{size:"small",icon:"Plus",onClick:q},{default:a(()=>[d("线索字段")]),_:1})]),t(N,{data:_.value,"row-key":"id",border:"","default-expand-all":"","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:a(()=>[t(p,{prop:"name",label:"名称"},{default:a(e=>[e.row.type!=1&&e.row.type!=2?(f(),C(r,{key:0,type:"primary",link:"",onClick:i=>l.$router.push({name:"CustomField",query:{id:e.row.id,title:e.row.name,type:e.row.type}})},{default:a(()=>[d(g(e.row.name),1)]),_:2},1032,["onClick"])):(f(),y(E,{key:1},[d(g(e.row.name),1)],64))]),_:1}),t(p,{prop:"type",label:"类型"},{default:a(e=>[d(g((()=>{let i=x(V)[e.row.type];return i?i.label:""})()),1)]),_:1}),t(p,{prop:"isRequired",label:"必填"},{default:a(e=>[t(k,{modelValue:e.row.isRequired,"onUpdate:modelValue":i=>e.row.isRequired=i,"true-value":1,"false-value":0,onChange:i=>B(e.row,e.$index)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(p,{prop:"isEnable",label:"启用"},{default:a(e=>[t(k,{modelValue:e.row.isEnable,"onUpdate:modelValue":i=>e.row.isEnable=i,"true-value":1,"false-value":0,onChange:i=>D(e.row,e.$index)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(p,{label:"操作"},{default:a(e=>[t(r,{link:"",type:"primary",onClick:i=>F(e.row)},{default:a(()=>[d("编辑")]),_:2},1032,["onClick"]),t(r,{link:"",type:"danger",onClick:i=>$(e.row)},{default:a(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1}),t(O,{title:T.value,modelValue:m.value,"onUpdate:modelValue":o[4]||(o[4]=e=>m.value=e),style:{width:"400px"},draggable:""},{footer:a(()=>[w("div",oe,[t(r,{onClick:o[3]||(o[3]=e=>m.value=!1)},{default:a(()=>[d("取 消")]),_:1}),t(r,{type:"primary",onClick:U},{default:a(()=>[d("确 定")]),_:1})])]),default:a(()=>[t(M,{ref_key:"addformRef",ref:R,model:n.value,"label-width":"100px"},{default:a(()=>[t(b,{label:"类型",prop:"type"},{default:a(()=>[t(L,{modelValue:n.value.type,"onUpdate:modelValue":o[0]||(o[0]=e=>n.value.type=e)},{default:a(()=>[(f(!0),y(E,null,A(x(V),e=>(f(),C(I,{key:e.type,label:e.label,value:e.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(b,{label:"名称",prop:"name"},{default:a(()=>[t(h,{modelValue:n.value.name,"onUpdate:modelValue":o[1]||(o[1]=e=>n.value.name=e)},null,8,["modelValue"])]),_:1}),t(b,{label:"提示",prop:"tips"},{default:a(()=>[t(h,{modelValue:n.value.tips,"onUpdate:modelValue":o[2]||(o[2]=e=>n.value.tips=e),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])],64)}}});export{Me as default};
