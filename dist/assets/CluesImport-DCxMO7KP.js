import{j as A,a8 as H,d as N,a as K,t as X,v as Z,o as f,b as k,r as R,n as u,e,D as L,l as b,k as ee,x as te,y as se,c as y,s as le,a3 as V,O as l,f as q,h as F,i as n,a9 as ae,R as o,ah as oe,a4 as ne,Q as O,P as E,w as re,g as ie,W as ue,N as ce,X as pe,Y as de}from"./index-Cvxdud8X.js";import{E as me}from"./el-row-CizVTsHM.js";import{g as ve,E as _e}from"./el-progress-Bk086qtd.js";/* empty css                       */import{E as fe,a as he}from"./el-radio-BApBOlyK.js";import{E as ye}from"./el-button-BduWogw9.js";import{E as Se}from"./el-col-DCM4cYhg.js";import{c as ge,g as Ee}from"./index-Ceb7u-ED.js";import{d as we}from"./fileZip-JoD1zq0-.js";/* empty css                   */import{_ as Q,i as Ce,b as D,c as P}from"./request-BPmFHmyv.js";import{C as Y}from"./event-BB_Ol6Sd.js";import{u as be}from"./index-B5qMizzY.js";import{_ as Ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-form-item-BTqf1lu5.js";import"./cloneDeep-CEpnNe6Y.js";import"./_baseClone-CJkpBpD4.js";import"./_initCloneObject-qW5ZcdA1.js";import"./isEqual-DKzOzQr_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./vnode-DZwMTVZ3.js";const ke=A({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),$e={[Y]:(h,I)=>[h,I].every(H)},xe=N({name:"ElSteps"}),Ne=N({...xe,props:ke,emits:$e,setup(h,{emit:I}){const s=h,r=K("steps"),{children:c,addChild:S,removeChild:a}=be(L(),"ElStep");return X(c,()=>{c.value.forEach((p,d)=>{p.setIndex(d)})}),Z("ElSteps",{props:s,steps:c,addStep:S,removeStep:a}),X(()=>s.active,(p,d)=>{I(Y,p,d)}),(p,d)=>(f(),k("div",{class:u([e(r).b(),e(r).m(p.simple?"simple":p.direction)])},[R(p.$slots,"default")],2))}});var Be=Q(Ne,[["__file","steps.vue"]]);const Ve=A({title:{type:String,default:""},icon:{type:Ce},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),Fe=N({name:"ElStep"}),Pe=N({...Fe,props:Ve,setup(h){const I=h,s=K("step"),r=b(-1),c=b({}),S=b(""),a=ee("ElSteps"),p=L();te(()=>{X([()=>a.props.active,()=>a.props.processStatus,()=>a.props.finishStatus],([t])=>{M(t)},{immediate:!0})}),se(()=>{a.removeStep(B.uid)});const d=y(()=>I.status||S.value),W=y(()=>{const t=a.steps.value[r.value-1];return t?t.currentStatus:"wait"}),i=y(()=>a.props.alignCenter),_=y(()=>a.props.direction==="vertical"),m=y(()=>a.props.simple),C=y(()=>a.steps.value.length),v=y(()=>{var t;return((t=a.steps.value[C.value-1])==null?void 0:t.uid)===(p==null?void 0:p.uid)}),g=y(()=>m.value?"":a.props.space),x=y(()=>[s.b(),s.is(m.value?"simple":a.props.direction),s.is("flex",v.value&&!g.value&&!i.value),s.is("center",i.value&&!_.value&&!m.value)]),z=y(()=>{const t={flexBasis:H(g.value)?`${g.value}px`:g.value?g.value:`${100/(C.value-(i.value?0:1))}%`};return _.value||v.value&&(t.maxWidth=`${100/C.value}%`),t}),T=t=>{r.value=t},U=t=>{const $=t==="wait",G={transitionDelay:`${$?"-":""}${150*r.value}ms`},j=t===a.props.processStatus||$?0:100;G.borderWidth=j&&!m.value?"1px":0,G[a.props.direction==="vertical"?"height":"width"]=`${j}%`,c.value=G},M=t=>{t>r.value?S.value=a.props.finishStatus:t===r.value&&W.value!=="error"?S.value=a.props.processStatus:S.value="wait";const $=a.steps.value[r.value-1];$&&$.calcProgress(S.value)},B=le({uid:p.uid,currentStatus:d,setIndex:T,calcProgress:U});return a.addStep(B),(t,$)=>(f(),k("div",{style:q(e(z)),class:u(e(x))},[V(" icon & line "),l("div",{class:u([e(s).e("head"),e(s).is(e(d))])},[e(m)?V("v-if",!0):(f(),k("div",{key:0,class:u(e(s).e("line"))},[l("i",{class:u(e(s).e("line-inner")),style:q(c.value)},null,6)],2)),l("div",{class:u([e(s).e("icon"),e(s).is(t.icon||t.$slots.icon?"icon":"text")])},[R(t.$slots,"icon",{},()=>[t.icon?(f(),F(e(D),{key:0,class:u(e(s).e("icon-inner"))},{default:n(()=>[(f(),F(ae(t.icon)))]),_:1},8,["class"])):e(d)==="success"?(f(),F(e(D),{key:1,class:u([e(s).e("icon-inner"),e(s).is("status")])},{default:n(()=>[o(e(oe))]),_:1},8,["class"])):e(d)==="error"?(f(),F(e(D),{key:2,class:u([e(s).e("icon-inner"),e(s).is("status")])},{default:n(()=>[o(e(ne))]),_:1},8,["class"])):e(m)?V("v-if",!0):(f(),k("div",{key:3,class:u(e(s).e("icon-inner"))},O(r.value+1),3))])],2)],2),V(" title & description "),l("div",{class:u(e(s).e("main"))},[l("div",{class:u([e(s).e("title"),e(s).is(e(d))])},[R(t.$slots,"title",{},()=>[E(O(t.title),1)])],2),e(m)?(f(),k("div",{key:0,class:u(e(s).e("arrow"))},null,2)):(f(),k("div",{key:1,class:u([e(s).e("description"),e(s).is(e(d))])},[R(t.$slots,"description",{},()=>[E(O(t.description),1)])],2))],2)],6))}});var J=Q(Pe,[["__file","item.vue"]]);const Re=re(Be,{Step:J}),De=ie(J),w=h=>(pe("data-v-f3979533"),h=h(),de(),h),We=w(()=>l("div",null,null,-1)),ze=w(()=>l("dt",null,"一、请按最新的数据模版格式导入最新的数据",-1)),Te=w(()=>l("dt",null,"二、请选择数据重复时的处理方式",-1)),Ue=w(()=>l("dt",null,"三、上传需要导入的Xls 文件",-1)),Me=w(()=>l("p",null,"1.模板中的表头名称不可更改，表头不能删除。",-1)),Ge=w(()=>l("p",null,"2.数据必填字段必须录入",-1)),Oe=w(()=>l("p",null,"3.相应数据必须填写所有人",-1)),Xe=w(()=>l("p",null,"4.每次导入最大条数100000，导入文件大小最大20Mb",-1)),je=w(()=>l("p",null,"5.客户查重规则：【客户姓名】重复 客户：客户名称 or 客户：邮箱 or 客户：手 机",-1)),qe={style:{"text-align":"center"}},Ae=N({__name:"CluesImport",setup(h){const I=ue();b(0),b([]);const s=b(1),r=b(!1),c=b(),S=i=>i.size/1024/1024>20?(P.error("文件大小不能超过 20MB!"),!1):!0,a=i=>{r.value=!0;let _=new FormData;return _.append("file",i.file),_.append("type",s.value),new Promise((m,C)=>{ge(_).then(v=>{v.code===0?(P.success("上传成功"),m(v.data),I.back()):(C(v),P.error(v.msg),c.value.clearFiles()),r.value=!1}).catch(v=>{C(v),P.error("上传失败"),c.value.clearFiles(),r.value=!1})})},p=i=>{c.value.clearFiles();const _=i[0];_.uid=ve(),c.value.handleStart(_)},d=()=>{Ee().then(i=>{i.code===0&&we(i.data.url,i.data.name)})},W=()=>{c.value.submit()};return(i,_)=>{const m=De,C=Re,v=Se,g=ye,x=fe,z=he,T=_e,U=ce("WarningFilled"),M=D,B=me;return f(),k("div",null,[We,l("div",null,[o(v,{md:{span:12,offset:6},style:{"margin-bottom":"20px"}},{default:n(()=>[o(C,{style:{width:"100%"},active:2,"align-center":""},{default:n(()=>[o(m,{title:"上传文件"}),o(m,{title:"导入数据"}),o(m,{title:"导入结果"})]),_:1})]),_:1}),o(B,null,{default:n(()=>[o(v,{span:12,class:"l"},{default:n(()=>[l("dl",null,[ze,l("dd",null,[o(g,{type:"primary",onClick:d},{default:n(()=>[E("下载数据模板")]),_:1})])]),l("dl",null,[Te,l("dd",null,[o(z,{modelValue:s.value,"onUpdate:modelValue":_[0]||(_[0]=t=>s.value=t)},{default:n(()=>[o(x,{label:"忽略",value:1,style:{width:"100%"}},{default:n(()=>[E("导入新数据，跳过重复数据")]),_:1}),o(x,{label:"覆盖",value:2,style:{width:"100%"}},{default:n(()=>[E("去重")]),_:1}),o(x,{label:"新增",value:3,style:{width:"100%"}},{default:n(()=>[E("覆盖数据库已存在的数据")]),_:1})]),_:1},8,["modelValue"])])]),l("dl",null,[Ue,l("dd",null,[o(T,{ref_key:"uploadRef",ref:c,"before-upload":S,"http-request":a,limit:1,"on-exceed":p,type:"drag",accept:".xls,.xlsx","auto-upload":!1},{default:n(()=>[o(g,{type:"primary"},{default:n(()=>[E("选择文件")]),_:1})]),_:1},512)])])]),_:1}),o(v,{span:12,class:"r"},{default:n(()=>[l("p",null,[o(M,null,{default:n(()=>[o(U)]),_:1}),E("注意事项")]),Me,Ge,Oe,Xe,je]),_:1})]),_:1}),l("div",qe,[o(g,{type:"primary",onClick:W},{default:n(()=>[E("导入")]),_:1})])])])}}}),vt=Ie(Ae,[["__scopeId","data-v-f3979533"]]);export{vt as default};