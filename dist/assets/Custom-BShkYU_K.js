import{d as A,l as c,o as f,f as E,S as l,w as a,P as w,Q as d,c as x,R as g,F as V,a as R,V as O}from"./index-Q273XHf8.js";import{E as Q}from"./el-dialog-C8sC26KZ.js";/* empty css                   *//* empty css                     */import"./el-input-Dg3qt5Bb.js";import"./el-tag-DqRVPKx1.js";/* empty css                  */import"./el-scrollbar-0l_cZ0S_.js";import{E as j,a as G}from"./el-tab-pane-CNPYTEPW.js";import{E as H,a as J}from"./el-table-column-DSWDUPh9.js";import{E as K}from"./el-checkbox-CUmpTspT.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-button-DXeH7ULc.js";import{a as m}from"./index-BseM5vZU.js";/* empty css                   *//* empty css                       */import{E as s}from"./request-CQ37sLB9.js";import{E as W}from"./index-BTJsYqsj.js";import{E as X}from"./index-nVic9h1r.js";import{E as Y,a as Z}from"./index-Bkne1dct.js";import{E as ee,a as le}from"./index-Bvt8dlHX.js";import{E as te}from"./index-j8eE0ruH.js";import"./index-CUKUieZ5.js";import"./index-CRFYaBQA.js";import"./constants-D7u2-Egf.js";import"./scroll-BIoQ-qBU.js";import"./vnode-CembcOEi.js";import"./isEqual-DPHZFWxr.js";import"./typescript-CjU46sqC.js";import"./isArrayLikeObject-BKJ0Asn3.js";import"./rules-BWEfMqzk.js";import"./aria-KgdLjl5h.js";import"./validator-Dg3P4JN7.js";import"./index-r5W6hzzQ.js";const ae={class:"s-table-operations"},oe={class:"dialog-footer"},Me=A({__name:"Custom",setup(ne){const k=m.customFieldTypes,_=c([]),T=c(null),u=c(!1),q=c("销售线索"),n=c({id:"",name:"",type:"",tips:""}),$=()=>{u.value=!0,n.value={id:"",name:"",type:"",tips:""}},B=t=>{u.value=!0,n.value.id=t.id,n.value.name=t.name,n.value.type=t.type,n.value.tips=t.tips},F=()=>{if(n.value.id)m.edit(n.value).then(t=>{t.code===0?(s.success("编辑成功"),u.value=!1,v()):s.error(t.msg)});else{let{id:t,...o}=n.value;m.add(o).then(r=>{r.code===0?(s.success("添加成功"),u.value=!1,v()):s.error(r.msg)})}},U=t=>{W.confirm("此操作将永久删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{console.log(t),m.customFieldDel({id:t.id}).then(o=>{o.code===0?(s.success("删除成功"),v()):s.error(o.msg)})}).catch(()=>{})},v=async()=>{m.getList().then(t=>{t.code===0&&(_.value=t.data)})},D=(t,o)=>{m.setRequired({id:t.id,status:t.isRequired}).then(r=>{r.code===0?s.success("修改成功"):(s.error(r.msg),_.value[o].isRequired=t.isRequired===0?1:0)})},S=(t,o)=>{m.setEnable({id:t.id,status:t.isEnable}).then(r=>{r.code===0?s.success("修改成功"):(s.error(r.msg),_.value[o].isEnable=t.isEnable===0?1:0)})};return v(),(t,o)=>{const r=X,p=H,C=K,N=J,b=j,P=G,I=Z,L=Y,y=ee,h=te,M=le,z=Q;return f(),E(V,null,[l(P,{type:"border-card"},{default:a(()=>[l(b,{label:"销售客户"},{default:a(()=>[w("div",ae,[l(r,{size:"small",icon:"Plus",onClick:$},{default:a(()=>[d("线索字段")]),_:1})]),l(N,{data:_.value,"row-key":"id",border:"","default-expand-all":""},{default:a(()=>[l(p,{prop:"name",label:"名称"},{default:a(e=>[e.row.type!=1&&e.row.type!=2?(f(),x(r,{key:0,type:"primary",link:"",onClick:i=>t.$router.push({path:"/settings/custom/field",query:{id:e.row.id,title:e.row.name}})},{default:a(()=>[d(g(e.row.name),1)]),_:2},1032,["onClick"])):(f(),E(V,{key:1},[d(g(e.row.name),1)],64))]),_:1}),l(p,{prop:"type",label:"类型"},{default:a(e=>[d(g((()=>{let i=R(k)[e.row.type];return i?i.label:""})()),1)]),_:1}),l(p,{prop:"isRequired",label:"必填"},{default:a(e=>[l(C,{modelValue:e.row.isRequired,"onUpdate:modelValue":i=>e.row.isRequired=i,"true-value":1,"false-value":0,onChange:i=>D(e.row,e.$index)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),l(p,{prop:"isEnable",label:"启用"},{default:a(e=>[l(C,{modelValue:e.row.isEnable,"onUpdate:modelValue":i=>e.row.isEnable=i,"true-value":1,"false-value":0,onChange:i=>S(e.row,e.$index)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),l(p,{label:"操作"},{default:a(e=>[l(r,{link:"",type:"primary",onClick:i=>B(e.row)},{default:a(()=>[d("编辑")]),_:2},1032,["onClick"]),l(r,{link:"",type:"danger",onClick:i=>U(e.row)},{default:a(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),l(b,{label:"联系人"}),l(b,{label:"会员"})]),_:1}),l(z,{title:q.value,modelValue:u.value,"onUpdate:modelValue":o[4]||(o[4]=e=>u.value=e),style:{width:"400px"}},{footer:a(()=>[w("div",oe,[l(r,{onClick:o[3]||(o[3]=e=>u.value=!1)},{default:a(()=>[d("取 消")]),_:1}),l(r,{type:"primary",onClick:F},{default:a(()=>[d("确 定")]),_:1})])]),default:a(()=>[l(M,{ref_key:"addformRef",ref:T,model:n.value,"label-width":"100px"},{default:a(()=>[l(y,{label:"类型",prop:"type"},{default:a(()=>[l(L,{modelValue:n.value.type,"onUpdate:modelValue":o[0]||(o[0]=e=>n.value.type=e)},{default:a(()=>[(f(!0),E(V,null,O(R(k),e=>(f(),x(I,{key:e.type,label:e.label,value:e.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(y,{label:"名称",prop:"name"},{default:a(()=>[l(h,{modelValue:n.value.name,"onUpdate:modelValue":o[1]||(o[1]=e=>n.value.name=e)},null,8,["modelValue"])]),_:1}),l(y,{label:"提示",prop:"tips"},{default:a(()=>[l(h,{modelValue:n.value.tips,"onUpdate:modelValue":o[2]||(o[2]=e=>n.value.tips=e),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])],64)}}});export{Me as default};
