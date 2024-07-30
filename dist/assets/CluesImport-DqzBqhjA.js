import{j,a8 as A,d as x,a as H,t as q,v as Z,o as d,b as I,r as R,n as p,e,D as K,l as E,k as ee,x as te,y as se,c as f,s as le,a3 as B,O as l,f as X,h as V,i,a9 as ae,R as n,ah as oe,a4 as ne,Q as U,P as g,w as re,g as ie,N as ue,W as pe,X as ce,Y as de}from"./index-BC0QBWlW.js";import{E as me}from"./el-row-BMNBiKZG.js";import{E as ve}from"./el-progress-C9x2qr3x.js";/* empty css                       */import{E as _e,a as fe}from"./el-radio-dmw8H5uS.js";/* empty css                  */import{E as he}from"./el-col-Cn-C_IXW.js";import{d as ye}from"./tool-BqLFY8pa.js";import{c as Se}from"./index-CqH9WmMt.js";/* empty css                   */import{_ as L,i as ge,b as z,c as P}from"./request-CWuQr0f0.js";import{C as Q}from"./event-BB_Ol6Sd.js";import{u as Ee}from"./index-DDJ9Fbq2.js";import{E as we}from"./index-DV8Th8Re.js";import{_ as Ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-form-item-B1pFl4Ye.js";import"./cloneDeep-Fd09ugLA.js";import"./_baseClone-PXZ9fpOU.js";import"./_initCloneObject-Bd-pzj5v.js";import"./isEqual-BDCys6AE.js";import"./vnode-CKy1PmL1.js";const be=j({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),ke={[Q]:(m,w)=>[m,w].every(A)},Ie=x({name:"ElSteps"}),$e=x({...Ie,props:be,emits:ke,setup(m,{emit:w}){const t=m,u=H("steps"),{children:v,addChild:y,removeChild:a}=Ee(K(),"ElStep");return q(v,()=>{v.value.forEach((r,o)=>{r.setIndex(o)})}),Z("ElSteps",{props:t,steps:v,addStep:y,removeStep:a}),q(()=>t.active,(r,o)=>{w(Q,r,o)}),(r,o)=>(d(),I("div",{class:p([e(u).b(),e(u).m(r.simple?"simple":r.direction)])},[R(r.$slots,"default")],2))}});var xe=L($e,[["__file","steps.vue"]]);const Ne=j({title:{type:String,default:""},icon:{type:ge},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),Be=x({name:"ElStep"}),Ve=x({...Be,props:Ne,setup(m){const w=m,t=H("step"),u=E(-1),v=E({}),y=E(""),a=ee("ElSteps"),r=K();te(()=>{q([()=>a.props.active,()=>a.props.processStatus,()=>a.props.finishStatus],([s])=>{J(s)},{immediate:!0})}),se(()=>{a.removeStep(G.uid)});const o=f(()=>w.status||y.value),C=f(()=>{const s=a.steps.value[u.value-1];return s?s.currentStatus:"wait"}),S=f(()=>a.props.alignCenter),c=f(()=>a.props.direction==="vertical"),_=f(()=>a.props.simple),b=f(()=>a.steps.value.length),N=f(()=>{var s;return((s=a.steps.value[b.value-1])==null?void 0:s.uid)===(r==null?void 0:r.uid)}),k=f(()=>_.value?"":a.props.space),D=f(()=>[t.b(),t.is(_.value?"simple":a.props.direction),t.is("flex",N.value&&!k.value&&!S.value),t.is("center",S.value&&!c.value&&!_.value)]),F=f(()=>{const s={flexBasis:A(k.value)?`${k.value}px`:k.value?k.value:`${100/(b.value-(S.value?0:1))}%`};return c.value||N.value&&(s.maxWidth=`${100/b.value}%`),s}),W=s=>{u.value=s},M=s=>{const $=s==="wait",T={transitionDelay:`${$?"-":""}${150*u.value}ms`},O=s===a.props.processStatus||$?0:100;T.borderWidth=O&&!_.value?"1px":0,T[a.props.direction==="vertical"?"height":"width"]=`${O}%`,v.value=T},J=s=>{s>u.value?y.value=a.props.finishStatus:s===u.value&&C.value!=="error"?y.value=a.props.processStatus:y.value="wait";const $=a.steps.value[u.value-1];$&&$.calcProgress(y.value)},G=le({uid:r.uid,currentStatus:o,setIndex:W,calcProgress:M});return a.addStep(G),(s,$)=>(d(),I("div",{style:X(e(F)),class:p(e(D))},[B(" icon & line "),l("div",{class:p([e(t).e("head"),e(t).is(e(o))])},[e(_)?B("v-if",!0):(d(),I("div",{key:0,class:p(e(t).e("line"))},[l("i",{class:p(e(t).e("line-inner")),style:X(v.value)},null,6)],2)),l("div",{class:p([e(t).e("icon"),e(t).is(s.icon||s.$slots.icon?"icon":"text")])},[R(s.$slots,"icon",{},()=>[s.icon?(d(),V(e(z),{key:0,class:p(e(t).e("icon-inner"))},{default:i(()=>[(d(),V(ae(s.icon)))]),_:1},8,["class"])):e(o)==="success"?(d(),V(e(z),{key:1,class:p([e(t).e("icon-inner"),e(t).is("status")])},{default:i(()=>[n(e(oe))]),_:1},8,["class"])):e(o)==="error"?(d(),V(e(z),{key:2,class:p([e(t).e("icon-inner"),e(t).is("status")])},{default:i(()=>[n(e(ne))]),_:1},8,["class"])):e(_)?B("v-if",!0):(d(),I("div",{key:3,class:p(e(t).e("icon-inner"))},U(u.value+1),3))])],2)],2),B(" title & description "),l("div",{class:p(e(t).e("main"))},[l("div",{class:p([e(t).e("title"),e(t).is(e(o))])},[R(s.$slots,"title",{},()=>[g(U(s.title),1)])],2),e(_)?(d(),I("div",{key:0,class:p(e(t).e("arrow"))},null,2)):(d(),I("div",{key:1,class:p([e(t).e("description"),e(t).is(e(o))])},[R(s.$slots,"description",{},()=>[g(U(s.description),1)])],2))],2)],6))}});var Y=L(Ve,[["__file","item.vue"]]);const Pe=re(xe,{Step:Y}),Re=ie(Y),h=m=>(ce("data-v-18e397a9"),m=m(),de(),m),ze=h(()=>l("div",null,null,-1)),De=h(()=>l("dt",null,"一、请按最新的数据模版格式导入最新的数据",-1)),Fe=h(()=>l("dt",null,"二、请选择数据重复时的处理方式",-1)),We=h(()=>l("dt",null,"三、上传需要导入的Xls 文件",-1)),Me=h(()=>l("p",null,"1.模板中的表头名称不可更改，表头不能删除。",-1)),Te=h(()=>l("p",null,"2.数据必填字段必须录入",-1)),Ue=h(()=>l("p",null,"3.相应数据必须填写所有人",-1)),qe=h(()=>l("p",null,"4.每次导入最大条数100000，导入文件大小最大20Mb",-1)),Ge=h(()=>l("p",null,"5.客户查重规则：【客户姓名】重复 客户：客户名称 or 客户：邮箱 or 客户：手 机",-1)),Oe=h(()=>l("div",{style:{"text-align":"center"}},null,-1)),Xe=x({__name:"CluesImport",setup(m){const w=pe();E(0),E([]);const t=E(1),u=E(!1),v=E(null),y=r=>r.size/1024/1024>20?(P.error("文件大小不能超过 20MB!"),!1):!0,a=r=>{u.value=!0;let o=new FormData;return o.append("file",r.file),o.append("type",t.value),new Promise((C,S)=>{Se(o).then(c=>{c.code===0?(P.success("上传成功"),C(c.data),w.back()):(S(c),P.error("上传失败"),v.value.clearFiles()),u.value=!1}).catch(c=>{S(c),P.error("上传失败"),v.value.clearFiles(),u.value=!1})})};return(r,o)=>{const C=Re,S=Pe,c=he,_=we,b=_e,N=fe,k=ve,D=ue("WarningFilled"),F=z,W=me;return d(),I("div",null,[ze,l("div",null,[n(c,{md:{span:12,offset:6},style:{"margin-bottom":"20px"}},{default:i(()=>[n(S,{style:{width:"100%"},active:2,"align-center":""},{default:i(()=>[n(C,{title:"上传文件"}),n(C,{title:"导入数据"}),n(C,{title:"导入结果"})]),_:1})]),_:1}),n(W,null,{default:i(()=>[n(c,{span:12,class:"l"},{default:i(()=>[l("dl",null,[De,l("dd",null,[n(_,{type:"primary",onClick:o[0]||(o[0]=()=>{e(ye)("https://crm-test-1256699835.cos.ap-shanghai.myqcloud.com/importTemplate/clue.xlsx","线索导入模板.xlsx")})},{default:i(()=>[g("下载数据模板")]),_:1})])]),l("dl",null,[Fe,l("dd",null,[n(N,{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=M=>t.value=M)},{default:i(()=>[n(b,{label:"忽略",value:1,style:{width:"100%"}},{default:i(()=>[g("导入新数据，跳过重复数据")]),_:1}),n(b,{label:"覆盖",value:2,style:{width:"100%"}},{default:i(()=>[g("去重")]),_:1}),n(b,{label:"新增",value:3,style:{width:"100%"}},{default:i(()=>[g("覆盖数据库已存在的数据")]),_:1})]),_:1},8,["modelValue"])])]),l("dl",null,[We,l("dd",null,[n(k,{ref_key:"uploadRef",ref:v,"before-upload":y,"http-request":a,type:"drag",accept:".xls,.xlsx"},{default:i(()=>[n(_,{size:"small",type:"primary"},{default:i(()=>[g("上传文件")]),_:1})]),_:1},512)])])]),_:1}),n(c,{span:12,class:"r"},{default:i(()=>[l("p",null,[n(F,null,{default:i(()=>[n(D)]),_:1}),g("注意事项")]),Me,Te,Ue,qe,Ge]),_:1})]),_:1}),Oe])])}}}),dt=Ce(Xe,[["__scopeId","data-v-18e397a9"]]);export{dt as default};
