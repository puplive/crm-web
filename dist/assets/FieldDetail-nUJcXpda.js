import{d as q,l as s,b as M,O as u,Q as P,e as S,R as a,i as l,F as U,W as z,a5 as A,o as E,P as d,h as O,a3 as Q}from"./index-DxDLsVQl.js";import{E as W}from"./el-dialog-BO5BkPba.js";/* empty css                   */import{a as j,E as G}from"./el-form-item-C_aGvXEz.js";/* empty css                 */import{E as H,a as J}from"./el-table-column-CIQNaga-.js";import"./el-checkbox-CGTq2bgt.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-BOD4jC64.js";import"./el-scrollbar-mi-wsowL.js";import"./el-tag-BOs9rQra.js";import{E as K}from"./el-button-DpDBUIvU.js";import{a as c}from"./index-BuI2qLIW.js";/* empty css                   *//* empty css                       */import{c as m}from"./request-DkBJXzax.js";import{E as L}from"./index-CANRM6W8.js";import{E as X}from"./index-DmtnYd9Z.js";import"./index-BAE8diGd.js";import"./use-form-item-DcmYeZdv.js";import"./scroll-BucS4Uda.js";import"./vnode-GuuDE3-s.js";import"./refs-Cg79f-kg.js";import"./event-BB_Ol6Sd.js";import"./castArray-Br_PG5z_.js";import"./_baseClone-JaZyprwF.js";import"./_initCloneObject-DPTJWJAD.js";import"./isEqual-D-JR0jWU.js";import"./rules-F8IXRWD9.js";import"./aria-KgdLjl5h.js";import"./validator-BZIlV_DB.js";const Y={class:""},Z={class:"s-top_bar",style:{"margin-bottom":"10px"}},ee={style:{"margin-right":"20px"}},te={class:"s-table-operations"},oe={class:"dialog-footer"},qe=q({__name:"FieldDetail",setup(ae){z();const f=A(),C=f.query.title,v=f.query.id,y=s(f.query.type),w=e=>e===0?!0:y.value==6||y.value==7,g=s([]),x=s(null),i=s(!1),V=s("输入名称"),_=s(!1),t=s({id:"",name:"",fieldId:v,pid:""}),h=e=>{_.value=!1,i.value=!0,t.value.id=e.id,t.value.name="",t.value.pid=e.id},B=e=>{_.value=!0,i.value=!0,t.value.id=e.id,t.value.name=e.name},F=()=>{_.value?c.editChild({name:t.value.name,id:t.value.id}).then(e=>{e.code===0?(m.success("编辑成功"),i.value=!1,p()):m.error(e.msg)}):c.addChild({fieldId:t.value.fieldId,name:t.value.name,pid:t.value.id}).then(e=>{e.code===0?(m.success("添加成功"),i.value=!1,p()):m.error(e.msg)})},T=e=>{L.confirm("此操作将永久删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{c.del({id:e.id}).then(o=>{o.code===0?(m.success("删除成功"),p()):m.error(o.msg)})}).catch(()=>{})},p=async()=>{c.getChild({fieldId:v}).then(e=>{e.code===0&&(g.value=e.data)})};return p(),(e,o)=>{const n=K,k=J,$=H,D=X,I=j,R=G,N=W;return E(),M(U,null,[u("div",Y,[u("div",Z,[u("span",ee,P(S(C)),1),a(n,{type:"",onClick:o[0]||(o[0]=r=>e.$router.go(-1))},{default:l(()=>[d("返回")]),_:1})]),u("div",te,[a(n,{size:"small",icon:"Plus",onClick:o[1]||(o[1]=r=>h({}))},{default:l(()=>[d("新增")]),_:1})]),a($,{data:g.value,"row-key":"id",border:"","tree-props":{children:"child"},"default-expand-all":"","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[a(k,{prop:"name",label:"名称"}),a(k,{label:"操作",width:"180px"},{default:l(r=>[w(r.row.pid)?(E(),O(n,{key:0,link:"",type:"primary",onClick:b=>h(r.row)},{default:l(()=>[d("新增")]),_:2},1032,["onClick"])):Q("",!0),a(n,{link:"",type:"primary",onClick:b=>B(r.row)},{default:l(()=>[d("编辑")]),_:2},1032,["onClick"]),a(n,{link:"",type:"danger",onClick:b=>T(r.row)},{default:l(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),a(N,{title:V.value,modelValue:i.value,"onUpdate:modelValue":o[4]||(o[4]=r=>i.value=r),style:{width:"400px"},draggable:""},{footer:l(()=>[u("div",oe,[a(n,{onClick:o[3]||(o[3]=r=>i.value=!1)},{default:l(()=>[d("取 消")]),_:1}),a(n,{type:"primary",onClick:F},{default:l(()=>[d("确 定")]),_:1})])]),default:l(()=>[a(R,{ref_key:"addformRef",ref:x,model:t.value,"label-width":"atuo"},{default:l(()=>[a(I,{label:"",prop:"name"},{default:l(()=>[a(D,{modelValue:t.value.name,"onUpdate:modelValue":o[2]||(o[2]=r=>t.value.name=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])],64)}}});export{qe as default};
