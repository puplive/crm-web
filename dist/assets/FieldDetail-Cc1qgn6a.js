import{d as I,l as d,o as R,f as N,P as u,R as S,a as q,S as t,w as a,Q as s,F as M,Z as P,a7 as U}from"./index-Q273XHf8.js";import{E as z}from"./el-dialog-C8sC26KZ.js";/* empty css                   *//* empty css                     */import"./el-input-Dg3qt5Bb.js";import{E as A,a as Q}from"./el-table-column-DSWDUPh9.js";import"./el-checkbox-CUmpTspT.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-scrollbar-0l_cZ0S_.js";import"./el-tag-DqRVPKx1.js";import"./el-button-DXeH7ULc.js";import{a as f}from"./index-BseM5vZU.js";/* empty css                   *//* empty css                       */import{E as m}from"./request-CQ37sLB9.js";import{E as Z}from"./index-BTJsYqsj.js";import{E as j}from"./index-nVic9h1r.js";import{E as G}from"./index-j8eE0ruH.js";import{E as H,a as J}from"./index-Bvt8dlHX.js";import"./index-CUKUieZ5.js";import"./index-CRFYaBQA.js";import"./constants-D7u2-Egf.js";import"./scroll-BIoQ-qBU.js";import"./vnode-CembcOEi.js";import"./isArrayLikeObject-BKJ0Asn3.js";import"./typescript-CjU46sqC.js";import"./isEqual-DPHZFWxr.js";import"./rules-BWEfMqzk.js";import"./aria-KgdLjl5h.js";import"./validator-Dg3P4JN7.js";import"./index-r5W6hzzQ.js";const K={class:""},L={class:"s-top_bar",style:{"margin-bottom":"10px"}},O={style:{"margin-right":"20px"}},W={class:"s-table-operations"},X={class:"dialog-footer"},De=I({__name:"FieldDetail",setup(Y){P();const _=U(),C=_.query.title,v=_.query.id,E=d([]),b=d(null),n=d(!1),h=d("输入名称"),c=d(!1),o=d({id:"",name:"",fieldId:v,pid:""}),g=e=>{c.value=!1,n.value=!0,o.value.id=e.id,o.value.name="",o.value.pid=e.id},w=e=>{c.value=!0,n.value=!0,o.value.id=e.id,o.value.name=e.name},x=()=>{c.value?f.editChild({name:o.value.name,id:o.value.id}).then(e=>{e.code===0?(m.success("编辑成功"),n.value=!1,p()):m.error(e.msg)}):f.addChild({fieldId:o.value.fieldId,name:o.value.name,pid:o.value.id}).then(e=>{e.code===0?(m.success("添加成功"),n.value=!1,p()):m.error(e.msg)})},V=e=>{Z.confirm("此操作将永久删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{f.del({id:e.id}).then(l=>{l.code===0?(m.success("删除成功"),p()):m.error(l.msg)})}).catch(()=>{})},p=async()=>{f.getChild({fieldId:v}).then(e=>{e.code===0&&(E.value=e.data)})};return p(),(e,l)=>{const r=j,y=A,B=Q,F=G,T=H,$=J,D=z;return R(),N(M,null,[u("div",K,[u("div",L,[u("span",O,S(q(C)),1),t(r,{type:"",onClick:l[0]||(l[0]=i=>e.$router.go(-1))},{default:a(()=>[s("返回")]),_:1})]),u("div",W,[t(r,{size:"small",icon:"Plus",onClick:l[1]||(l[1]=i=>g({}))},{default:a(()=>[s("新增")]),_:1})]),t(B,{data:E.value,"row-key":"id",border:"","tree-props":{children:"child"},"default-expand-all":""},{default:a(()=>[t(y,{prop:"name",label:"名称"}),t(y,{label:"操作",width:"180px"},{default:a(i=>[t(r,{link:"",type:"primary",onClick:k=>g(i.row)},{default:a(()=>[s("新增")]),_:2},1032,["onClick"]),t(r,{link:"",type:"primary",onClick:k=>w(i.row)},{default:a(()=>[s("编辑")]),_:2},1032,["onClick"]),t(r,{link:"",type:"danger",onClick:k=>V(i.row)},{default:a(()=>[s("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),t(D,{title:h.value,modelValue:n.value,"onUpdate:modelValue":l[4]||(l[4]=i=>n.value=i),style:{width:"400px"}},{footer:a(()=>[u("div",X,[t(r,{onClick:l[3]||(l[3]=i=>n.value=!1)},{default:a(()=>[s("取 消")]),_:1}),t(r,{type:"primary",onClick:x},{default:a(()=>[s("确 定")]),_:1})])]),default:a(()=>[t($,{ref_key:"addformRef",ref:b,model:o.value,"label-width":"atuo"},{default:a(()=>[t(T,{label:"",prop:"name"},{default:a(()=>[t(F,{modelValue:o.value.name,"onUpdate:modelValue":l[2]||(l[2]=i=>o.value.name=i)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])],64)}}});export{De as default};
