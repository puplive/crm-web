import{d as A,l as c,o as f,f as E,S as l,w as a,P as w,Q as i,c as x,R as g,F as V,a as R,V as O}from"./index-DVHkByco.js";import{E as Q}from"./el-dialog-bp7p8zQB.js";import"./el-overlay-C63ZvL_K.js";import{a as j,E as G,b as H}from"./el-input-Dfe8Uzhl.js";import"./el-tag-BHjyucA7.js";import{E as J,a as K}from"./el-select-DgBIHiZD.js";import"./el-scrollbar-CG_JaPfx.js";import{E as W,a as X}from"./el-tab-pane-gqPy9CbY.js";import{E as Y,a as Z}from"./el-table-89c60yQ4.js";import{E as ee}from"./el-checkbox-Cqc95xet.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                        */import{E as le}from"./el-button-9__Ng1jP.js";import{a as m}from"./index-u8KZ3t33.js";/* empty css                   */import{E as te}from"./el-message-box-BcM5ZuTJ.js";import{E as d}from"./request-kZhpW0Wr.js";import"./index-C-4RkVC5.js";import"./scroll-KUqymI_7.js";import"./vnode-tcDvg3gh.js";import"./typescript-_aKlIHPK.js";import"./_initCloneObject-CSxpNamp.js";import"./isEqual-QQ34r9eu.js";import"./isArrayLikeObject-C7wPhYU0.js";import"./rules-BWEfMqzk.js";import"./aria-KgdLjl5h.js";import"./validator-BJiU7xXV.js";const ae={class:"s-table-operations"},oe={class:"dialog-footer"},Ue=A({__name:"Custom",setup(ne){const k=m.customFieldTypes,_=c([]),T=c(null),u=c(!1),q=c("销售线索"),n=c({id:"",name:"",type:"",tips:""}),$=()=>{u.value=!0,n.value={id:"",name:"",type:"",tips:""}},B=t=>{u.value=!0,n.value.id=t.id,n.value.name=t.name,n.value.type=t.type,n.value.tips=t.tips},F=()=>{if(n.value.id)m.edit(n.value).then(t=>{t.code===0?(d.success("编辑成功"),u.value=!1,b()):d.error(t.msg)});else{let{id:t,...o}=n.value;m.add(o).then(s=>{s.code===0?(d.success("添加成功"),u.value=!1,b()):d.error(s.msg)})}},U=t=>{te.confirm("此操作将永久删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{console.log(t),m.customFieldDel({id:t.id}).then(o=>{o.code===0?(d.success("删除成功"),b()):d.error(o.msg)})}).catch(()=>{})},b=async()=>{m.getList().then(t=>{t.code===0&&(_.value=t.data)})},D=(t,o)=>{m.setRequired({id:t.id,status:t.isRequired}).then(s=>{s.code===0?d.success("修改成功"):(d.error(s.msg),_.value[o].isRequired=t.isRequired===0?1:0)})},S=(t,o)=>{m.setEnable({id:t.id,status:t.isEnable}).then(s=>{s.code===0?d.success("修改成功"):(d.error(s.msg),_.value[o].isEnable=t.isEnable===0?1:0)})};return b(),(t,o)=>{const s=le,p=Y,C=ee,N=Z,v=W,P=X,I=K,L=J,y=j,h=G,M=H,z=Q;return f(),E(V,null,[l(P,{type:"border-card"},{default:a(()=>[l(v,{label:"销售客户"},{default:a(()=>[w("div",ae,[l(s,{size:"small",icon:"Plus",onClick:$},{default:a(()=>[i("线索字段")]),_:1})]),l(N,{data:_.value,"row-key":"id",border:"","default-expand-all":""},{default:a(()=>[l(p,{prop:"name",label:"名称"},{default:a(e=>[e.row.type!=1&&e.row.type!=2?(f(),x(s,{key:0,type:"primary",link:"",onClick:r=>t.$router.push({path:"/settings/custom/field",query:{id:e.row.id,title:e.row.name}})},{default:a(()=>[i(g(e.row.name),1)]),_:2},1032,["onClick"])):(f(),E(V,{key:1},[i(g(e.row.name),1)],64))]),_:1}),l(p,{prop:"type",label:"类型"},{default:a(e=>[i(g((()=>{let r=R(k)[e.row.type];return r?r.label:""})()),1)]),_:1}),l(p,{prop:"isRequired",label:"必填"},{default:a(e=>[l(C,{modelValue:e.row.isRequired,"onUpdate:modelValue":r=>e.row.isRequired=r,"true-value":1,"false-value":0,onChange:r=>D(e.row,e.$index)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),l(p,{prop:"isEnable",label:"启用"},{default:a(e=>[l(C,{modelValue:e.row.isEnable,"onUpdate:modelValue":r=>e.row.isEnable=r,"true-value":1,"false-value":0,onChange:r=>S(e.row,e.$index)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),l(p,{label:"操作"},{default:a(e=>[l(s,{link:"",type:"primary",onClick:r=>B(e.row)},{default:a(()=>[i("编辑")]),_:2},1032,["onClick"]),l(s,{link:"",type:"danger",onClick:r=>U(e.row)},{default:a(()=>[i("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),l(v,{label:"联系人"}),l(v,{label:"会员"})]),_:1}),l(z,{title:q.value,modelValue:u.value,"onUpdate:modelValue":o[4]||(o[4]=e=>u.value=e),style:{width:"400px"}},{footer:a(()=>[w("div",oe,[l(s,{onClick:o[3]||(o[3]=e=>u.value=!1)},{default:a(()=>[i("取 消")]),_:1}),l(s,{type:"primary",onClick:F},{default:a(()=>[i("确 定")]),_:1})])]),default:a(()=>[l(M,{ref_key:"addformRef",ref:T,model:n.value,"label-width":"100px"},{default:a(()=>[l(y,{label:"类型",prop:"type"},{default:a(()=>[l(L,{modelValue:n.value.type,"onUpdate:modelValue":o[0]||(o[0]=e=>n.value.type=e)},{default:a(()=>[(f(!0),E(V,null,O(R(k),e=>(f(),x(I,{key:e.type,label:e.label,value:e.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(y,{label:"名称",prop:"name"},{default:a(()=>[l(h,{modelValue:n.value.name,"onUpdate:modelValue":o[1]||(o[1]=e=>n.value.name=e)},null,8,["modelValue"])]),_:1}),l(y,{label:"提示",prop:"tips"},{default:a(()=>[l(h,{modelValue:n.value.tips,"onUpdate:modelValue":o[2]||(o[2]=e=>n.value.tips=e),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])],64)}}});export{Ue as default};