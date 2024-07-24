import{j as T,aa as G,d as N,u as M,v as U,x as Y,o as d,f as C,r as z,n as r,a as e,E as O,l as $,k as Z,y as ee,z as te,e as m,s as se,X as V,P as o,g as L,c as P,w as n,ab as le,S as a,aj as oe,a6 as ae,R,Q as f,h as ne,i as ie,O as re,_ as pe,$ as ce}from"./index-DwAgI1Tl.js";import{E as ue}from"./el-row-Bl2T5eoa.js";import{E as de}from"./el-progress-BjEL_lzh.js";/* empty css                 */import"./el-button-GUz3KSyk.js";import{E as _e}from"./el-col-DKrTHvI9.js";import{C as X}from"./event-BB_Ol6Sd.js";import{_ as A,i as me,E as W}from"./index-D16Dp-E5.js";import{u as ve}from"./index-hKUcKImx.js";import{E as fe}from"./index-lrMaDoJ7.js";import{E as he,a as ye}from"./index-C9PHBgDn.js";import{_ as Se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./typescript-CxgQ9MvV.js";import"./cloneDeep-C7sOpfqA.js";import"./_baseClone-sCyLxnY1.js";import"./_initCloneObject-l7c9p7aB.js";import"./isEqual-zCtjQBmP.js";import"./vnode-D3ksiN5I.js";const Ee=T({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),ge={[X]:(_,y)=>[_,y].every(G)},Ce=N({name:"ElSteps"}),we=N({...Ce,props:Ee,emits:ge,setup(_,{emit:y}){const s=_,p=M("steps"),{children:S,addChild:u,removeChild:l}=ve(O(),"ElStep");return U(S,()=>{S.value.forEach((c,i)=>{c.setIndex(i)})}),Y("ElSteps",{props:s,steps:S,addStep:u,removeStep:l}),U(()=>s.active,(c,i)=>{y(X,c,i)}),(c,i)=>(d(),C("div",{class:r([e(p).b(),e(p).m(c.simple?"simple":c.direction)])},[z(c.$slots,"default")],2))}});var $e=A(we,[["__file","steps.vue"]]);const be=T({title:{type:String,default:""},icon:{type:me},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),Ie=N({name:"ElStep"}),ke=N({...Ie,props:be,setup(_){const y=_,s=M("step"),p=$(-1),S=$({}),u=$(""),l=Z("ElSteps"),c=O();ee(()=>{U([()=>l.props.active,()=>l.props.processStatus,()=>l.props.finishStatus],([t])=>{J(t)},{immediate:!0})}),te(()=>{l.removeStep(j.uid)});const i=m(()=>y.status||u.value),b=m(()=>{const t=l.steps.value[p.value-1];return t?t.currentStatus:"wait"}),E=m(()=>l.props.alignCenter),x=m(()=>l.props.direction==="vertical"),v=m(()=>l.props.simple),I=m(()=>l.steps.value.length),B=m(()=>{var t;return((t=l.steps.value[I.value-1])==null?void 0:t.uid)===(c==null?void 0:c.uid)}),g=m(()=>v.value?"":l.props.space),k=m(()=>[s.b(),s.is(v.value?"simple":l.props.direction),s.is("flex",B.value&&!g.value&&!E.value),s.is("center",E.value&&!x.value&&!v.value)]),K=m(()=>{const t={flexBasis:G(g.value)?`${g.value}px`:g.value?g.value:`${100/(I.value-(E.value?0:1))}%`};return x.value||B.value&&(t.maxWidth=`${100/I.value}%`),t}),Q=t=>{p.value=t},q=t=>{const w=t==="wait",D={transitionDelay:`${w?"-":""}${150*p.value}ms`},F=t===l.props.processStatus||w?0:100;D.borderWidth=F&&!v.value?"1px":0,D[l.props.direction==="vertical"?"height":"width"]=`${F}%`,S.value=D},J=t=>{t>p.value?u.value=l.props.finishStatus:t===p.value&&b.value!=="error"?u.value=l.props.processStatus:u.value="wait";const w=l.steps.value[p.value-1];w&&w.calcProgress(u.value)},j=se({uid:c.uid,currentStatus:i,setIndex:Q,calcProgress:q});return l.addStep(j),(t,w)=>(d(),C("div",{style:L(e(K)),class:r(e(k))},[V(" icon & line "),o("div",{class:r([e(s).e("head"),e(s).is(e(i))])},[e(v)?V("v-if",!0):(d(),C("div",{key:0,class:r(e(s).e("line"))},[o("i",{class:r(e(s).e("line-inner")),style:L(S.value)},null,6)],2)),o("div",{class:r([e(s).e("icon"),e(s).is(t.icon||t.$slots.icon?"icon":"text")])},[z(t.$slots,"icon",{},()=>[t.icon?(d(),P(e(W),{key:0,class:r(e(s).e("icon-inner"))},{default:n(()=>[(d(),P(le(t.icon)))]),_:1},8,["class"])):e(i)==="success"?(d(),P(e(W),{key:1,class:r([e(s).e("icon-inner"),e(s).is("status")])},{default:n(()=>[a(e(oe))]),_:1},8,["class"])):e(i)==="error"?(d(),P(e(W),{key:2,class:r([e(s).e("icon-inner"),e(s).is("status")])},{default:n(()=>[a(e(ae))]),_:1},8,["class"])):e(v)?V("v-if",!0):(d(),C("div",{key:3,class:r(e(s).e("icon-inner"))},R(p.value+1),3))])],2)],2),V(" title & description "),o("div",{class:r(e(s).e("main"))},[o("div",{class:r([e(s).e("title"),e(s).is(e(i))])},[z(t.$slots,"title",{},()=>[f(R(t.title),1)])],2),e(v)?(d(),C("div",{key:0,class:r(e(s).e("arrow"))},null,2)):(d(),C("div",{key:1,class:r([e(s).e("description"),e(s).is(e(i))])},[z(t.$slots,"description",{},()=>[f(R(t.description),1)])],2))],2)],6))}});var H=A(ke,[["__file","item.vue"]]);const Ne=ne($e,{Step:H}),xe=ie(H),h=_=>(pe("data-v-052812c3"),_=_(),ce(),_),Be=h(()=>o("div",null,null,-1)),Ve=h(()=>o("dt",null,"一、请按最新的数据模版格式导入最新的数据",-1)),Pe=h(()=>o("dt",null,"二、请选择数据重复时的处理方式",-1)),ze=h(()=>o("dt",null,"三、上传需要导入的Xls 文件",-1)),We=h(()=>o("p",null,"1.模板中的表头名称不可更改，表头不能删除。",-1)),De=h(()=>o("p",null,"2.数据必填字段必须录入",-1)),Re=h(()=>o("p",null,"3.相应数据必须填写所有人",-1)),Ue=h(()=>o("p",null,"4.每次导入最大条数100000，导入文件大小最大20Mb",-1)),je=h(()=>o("p",null,"5.客户查重规则：【客户姓名】重复 客户：客户名称 or 客户：邮箱 or 客户：手 机",-1)),Fe={style:{"text-align":"center"}},Le=N({__name:"CluesImport",setup(_){$(0);const y=$([]),s=S=>{},p=$("忽略");return(S,u)=>{const l=xe,c=Ne,i=_e,b=fe,E=he,x=ye,v=de,I=re("WarningFilled"),B=W,g=ue;return d(),C("div",null,[Be,o("div",null,[a(i,{md:{span:12,offset:6},style:{"margin-bottom":"20px"}},{default:n(()=>[a(c,{style:{width:"100%"},active:2,"align-center":""},{default:n(()=>[a(l,{title:"上传文件"}),a(l,{title:"导入数据"}),a(l,{title:"导入结果"})]),_:1})]),_:1}),a(g,null,{default:n(()=>[a(i,{span:12,class:"l"},{default:n(()=>[o("dl",null,[Ve,o("dd",null,[a(b,{type:"primary"},{default:n(()=>[f("下载数据模板")]),_:1})])]),o("dl",null,[Pe,o("dd",null,[a(x,{modelValue:p.value,"onUpdate:modelValue":u[0]||(u[0]=k=>p.value=k)},{default:n(()=>[a(E,{label:"忽略",style:{width:"100%"}},{default:n(()=>[f("导入新数据，跳过重复数据")]),_:1}),a(E,{label:"覆盖",style:{width:"100%"}},{default:n(()=>[f("去重")]),_:1}),a(E,{label:"新增",style:{width:"100%"}},{default:n(()=>[f("覆盖数据库已存在的数据")]),_:1})]),_:1},8,["modelValue"])])]),o("dl",null,[ze,o("dd",null,[a(v,{name:"file","before-upload":s,"file-list":y.value,"onUpdate:fileList":u[1]||(u[1]=k=>y.value=k),type:"drag",accept:".xls,.xlsx"},{default:n(()=>[a(b,{size:"small",type:"primary"},{default:n(()=>[f("上传文件")]),_:1})]),_:1},8,["file-list"])])])]),_:1}),a(i,{span:12,class:"r"},{default:n(()=>[o("p",null,[a(B,null,{default:n(()=>[a(I)]),_:1}),f("注意事项")]),We,De,Re,Ue,je]),_:1})]),_:1}),o("div",Fe,[a(b,{type:"primary"},{default:n(()=>[f("保存")]),_:1})])])])}}}),at=Se(Le,[["__scopeId","data-v-052812c3"]]);export{at as default};
