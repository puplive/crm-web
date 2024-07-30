import{j,a8 as A,d as x,a as H,t as q,v as Z,o as d,b as I,r as D,n as c,e,D as K,l as E,k as ee,x as te,y as se,c as f,s as le,a3 as B,O as l,f as X,h as V,i,a9 as oe,R as n,ah as ae,a4 as ne,Q as U,P as g,w as re,g as ie,N as ue,W as ce,X as pe,Y as de}from"./index-CoktlfKN.js";import{E as me}from"./el-row-DllAyoYN.js";import{E as ve}from"./el-progress-DCdY8ePl.js";/* empty css                       */import{E as _e,a as fe}from"./el-radio-DvnLKCLF.js";/* empty css                  */import{E as he}from"./el-col-CcMh9iFs.js";import{d as ye}from"./tool-BqLFY8pa.js";import{c as Se}from"./index-C3exun-z.js";/* empty css                   */import{_ as L,i as ge,b as R,c as P}from"./request-DAESqlcg.js";import{C as Q}from"./event-BB_Ol6Sd.js";import{u as Ee}from"./index-Dp_dnjAZ.js";import{E as we}from"./index-BPJO_kH-.js";import{_ as Ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-form-item-DzIy8ETn.js";import"./cloneDeep-CR3l0pVK.js";import"./_baseClone-DEct6B3T.js";import"./_initCloneObject-CnCR6HZ9.js";import"./isEqual-DF4feqD3.js";import"./vnode-BZY6ZFgb.js";const be=j({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),ke={[Q]:(m,w)=>[m,w].every(A)},Ie=x({name:"ElSteps"}),$e=x({...Ie,props:be,emits:ke,setup(m,{emit:w}){const s=m,u=H("steps"),{children:v,addChild:y,removeChild:o}=Ee(K(),"ElStep");return q(v,()=>{v.value.forEach((r,a)=>{r.setIndex(a)})}),Z("ElSteps",{props:s,steps:v,addStep:y,removeStep:o}),q(()=>s.active,(r,a)=>{w(Q,r,a)}),(r,a)=>(d(),I("div",{class:c([e(u).b(),e(u).m(r.simple?"simple":r.direction)])},[D(r.$slots,"default")],2))}});var xe=L($e,[["__file","steps.vue"]]);const Ne=j({title:{type:String,default:""},icon:{type:ge},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),Be=x({name:"ElStep"}),Ve=x({...Be,props:Ne,setup(m){const w=m,s=H("step"),u=E(-1),v=E({}),y=E(""),o=ee("ElSteps"),r=K();te(()=>{q([()=>o.props.active,()=>o.props.processStatus,()=>o.props.finishStatus],([t])=>{J(t)},{immediate:!0})}),se(()=>{o.removeStep(G.uid)});const a=f(()=>w.status||y.value),C=f(()=>{const t=o.steps.value[u.value-1];return t?t.currentStatus:"wait"}),S=f(()=>o.props.alignCenter),p=f(()=>o.props.direction==="vertical"),_=f(()=>o.props.simple),b=f(()=>o.steps.value.length),N=f(()=>{var t;return((t=o.steps.value[b.value-1])==null?void 0:t.uid)===(r==null?void 0:r.uid)}),k=f(()=>_.value?"":o.props.space),z=f(()=>[s.b(),s.is(_.value?"simple":o.props.direction),s.is("flex",N.value&&!k.value&&!S.value),s.is("center",S.value&&!p.value&&!_.value)]),F=f(()=>{const t={flexBasis:A(k.value)?`${k.value}px`:k.value?k.value:`${100/(b.value-(S.value?0:1))}%`};return p.value||N.value&&(t.maxWidth=`${100/b.value}%`),t}),W=t=>{u.value=t},M=t=>{const $=t==="wait",T={transitionDelay:`${$?"-":""}${150*u.value}ms`},O=t===o.props.processStatus||$?0:100;T.borderWidth=O&&!_.value?"1px":0,T[o.props.direction==="vertical"?"height":"width"]=`${O}%`,v.value=T},J=t=>{t>u.value?y.value=o.props.finishStatus:t===u.value&&C.value!=="error"?y.value=o.props.processStatus:y.value="wait";const $=o.steps.value[u.value-1];$&&$.calcProgress(y.value)},G=le({uid:r.uid,currentStatus:a,setIndex:W,calcProgress:M});return o.addStep(G),(t,$)=>(d(),I("div",{style:X(e(F)),class:c(e(z))},[B(" icon & line "),l("div",{class:c([e(s).e("head"),e(s).is(e(a))])},[e(_)?B("v-if",!0):(d(),I("div",{key:0,class:c(e(s).e("line"))},[l("i",{class:c(e(s).e("line-inner")),style:X(v.value)},null,6)],2)),l("div",{class:c([e(s).e("icon"),e(s).is(t.icon||t.$slots.icon?"icon":"text")])},[D(t.$slots,"icon",{},()=>[t.icon?(d(),V(e(R),{key:0,class:c(e(s).e("icon-inner"))},{default:i(()=>[(d(),V(oe(t.icon)))]),_:1},8,["class"])):e(a)==="success"?(d(),V(e(R),{key:1,class:c([e(s).e("icon-inner"),e(s).is("status")])},{default:i(()=>[n(e(ae))]),_:1},8,["class"])):e(a)==="error"?(d(),V(e(R),{key:2,class:c([e(s).e("icon-inner"),e(s).is("status")])},{default:i(()=>[n(e(ne))]),_:1},8,["class"])):e(_)?B("v-if",!0):(d(),I("div",{key:3,class:c(e(s).e("icon-inner"))},U(u.value+1),3))])],2)],2),B(" title & description "),l("div",{class:c(e(s).e("main"))},[l("div",{class:c([e(s).e("title"),e(s).is(e(a))])},[D(t.$slots,"title",{},()=>[g(U(t.title),1)])],2),e(_)?(d(),I("div",{key:0,class:c(e(s).e("arrow"))},null,2)):(d(),I("div",{key:1,class:c([e(s).e("description"),e(s).is(e(a))])},[D(t.$slots,"description",{},()=>[g(U(t.description),1)])],2))],2)],6))}});var Y=L(Ve,[["__file","item.vue"]]);const Pe=re(xe,{Step:Y}),De=ie(Y),h=m=>(pe("data-v-4d85147d"),m=m(),de(),m),Re=h(()=>l("div",null,null,-1)),ze=h(()=>l("dt",null,"一、请按最新的数据模版格式导入最新的数据",-1)),Fe=h(()=>l("dt",null,"二、请选择数据重复时的处理方式",-1)),We=h(()=>l("dt",null,"三、上传需要导入的Xls 文件",-1)),Me=h(()=>l("p",null,"1.模板中的表头名称不可更改，表头不能删除。",-1)),Te=h(()=>l("p",null,"2.数据必填字段必须录入",-1)),Ue=h(()=>l("p",null,"3.相应数据必须填写所有人",-1)),qe=h(()=>l("p",null,"4.每次导入最大条数100000，导入文件大小最大20Mb",-1)),Ge=h(()=>l("p",null,"5.客户查重规则：【客户姓名】重复 客户：客户名称 or 客户：邮箱 or 客户：手 机",-1)),Oe=h(()=>l("div",{style:{"text-align":"center"}},null,-1)),Xe=x({__name:"CluesImport",setup(m){const w=ce();E(0),E([]);const s=E("忽略"),u=E(!1),v=E(null),y=r=>r.size/1024/1024>20?(P.error("文件大小不能超过 20MB!"),!1):!0,o=r=>{u.value=!0;let a=new FormData;return a.append("file",r.file),new Promise((C,S)=>{Se(a).then(p=>{p.code===0?(P.success("上传成功"),C(p.data),w.back()):(S(p),P.error("上传失败"),v.value.clearFiles()),u.value=!1}).catch(p=>{S(p),P.error("上传失败"),v.value.clearFiles(),u.value=!1})})};return(r,a)=>{const C=De,S=Pe,p=he,_=we,b=_e,N=fe,k=ve,z=ue("WarningFilled"),F=R,W=me;return d(),I("div",null,[Re,l("div",null,[n(p,{md:{span:12,offset:6},style:{"margin-bottom":"20px"}},{default:i(()=>[n(S,{style:{width:"100%"},active:2,"align-center":""},{default:i(()=>[n(C,{title:"上传文件"}),n(C,{title:"导入数据"}),n(C,{title:"导入结果"})]),_:1})]),_:1}),n(W,null,{default:i(()=>[n(p,{span:12,class:"l"},{default:i(()=>[l("dl",null,[ze,l("dd",null,[n(_,{type:"primary",onClick:a[0]||(a[0]=()=>{e(ye)("https://crm-test-1256699835.cos.ap-shanghai.myqcloud.com/importTemplate/clue.xlsx","线索导入模板.xlsx")})},{default:i(()=>[g("下载数据模板")]),_:1})])]),l("dl",null,[Fe,l("dd",null,[n(N,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=M=>s.value=M)},{default:i(()=>[n(b,{label:"忽略",style:{width:"100%"}},{default:i(()=>[g("导入新数据，跳过重复数据")]),_:1}),n(b,{label:"覆盖",style:{width:"100%"}},{default:i(()=>[g("去重")]),_:1}),n(b,{label:"新增",style:{width:"100%"}},{default:i(()=>[g("覆盖数据库已存在的数据")]),_:1})]),_:1},8,["modelValue"])])]),l("dl",null,[We,l("dd",null,[n(k,{ref_key:"uploadRef",ref:v,"before-upload":y,"http-request":o,type:"drag",accept:".xls,.xlsx"},{default:i(()=>[n(_,{size:"small",type:"primary"},{default:i(()=>[g("上传文件")]),_:1})]),_:1},512)])])]),_:1}),n(p,{span:12,class:"r"},{default:i(()=>[l("p",null,[n(F,null,{default:i(()=>[n(z)]),_:1}),g("注意事项")]),Me,Te,Ue,qe,Ge]),_:1})]),_:1}),Oe])])}}}),dt=Ce(Xe,[["__scopeId","data-v-4d85147d"]]);export{dt as default};
