import{j as B,d as h,u as U,e as q,o as f,f as V,c as w,w as o,a0 as P,a as v,W as k,n as C,r as x,h as L,l as A,s as G,S as e,P as _,Q as c,Z as T,_ as j,$ as z}from"./index-DVHkByco.js";import{E as D,a as H,b as K}from"./el-input-Dfe8Uzhl.js";/* empty css                          */import{E as M,a as Q}from"./el-checkbox-Cqc95xet.js";import{E as W}from"./el-button-9__Ng1jP.js";import{E as Z,a as J}from"./el-radio-BWxioSU6.js";import{E as O}from"./el-row-DWOTPu4e.js";import{E as X}from"./el-col-BldbVot-.js";import{v as Y}from"./Header-CRGCksoP.js";import{r as ee,s as oe}from"./index-C62duh_X.js";import{i as le,E as te,_ as ae}from"./index-C-4RkVC5.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./typescript-_aKlIHPK.js";import"./_initCloneObject-CSxpNamp.js";import"./isEqual-QQ34r9eu.js";import"./request-kZhpW0Wr.js";const se=B({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:le}}),ne={click:n=>n instanceof MouseEvent},ie=["href","target"],de=h({name:"ElLink"}),ue=h({...de,props:se,emits:ne,setup(n,{emit:p}){const t=n,d=U("link"),g=q(()=>[d.b(),d.m(t.type),d.is("disabled",t.disabled),d.is("underline",t.underline&&!t.disabled)]);function y(a){t.disabled||p("click",a)}return(a,u)=>(f(),V("a",{class:C(v(g)),href:a.disabled||!a.href?void 0:a.href,target:a.disabled||!a.href?void 0:a.target,onClick:y},[a.icon?(f(),w(v(te),{key:0},{default:o(()=>[(f(),w(P(a.icon)))]),_:1})):k("v-if",!0),a.$slots.default?(f(),V("span",{key:1,class:C(v(d).e("inner"))},[x(a.$slots,"default")],2)):k("v-if",!0),a.$slots.icon?x(a.$slots,"icon",{key:2}):k("v-if",!0)],10,ie))}});var pe=ae(ue,[["__file","link.vue"]]);const me=L(pe),ce=n=>(j("data-v-b26cab7d"),n=n(),z(),n),fe={class:"register-main"},_e={class:"register-container"},ge=ce(()=>_("div",{class:"register-title"},[_("div",{class:"label"},"参展企业注册")],-1)),ye={style:{flex:"1","text-align":"center","margin-top":"20px"}},be=h({__name:"Register",setup(n){T();const p=A(),t=G({companyName:"",userName:"",gender:"1",email:"",phone:"",code:"",policy:[]}),d={companyName:[{required:!0,message:"请输入企业名称",trigger:"blur"}],userName:[{required:!0,message:"请输入姓名",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱格式",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号格式",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}],policy:[{type:"array",required:!0,message:"请阅读并同意",trigger:"change"}]},g=u=>{u.validate(l=>{if(l)y();else return console.log("error submit"),!1})},y=()=>{let{policy:u,...l}=t;ee(l).then(s=>{console.log(s)})},a=u=>{u.validateField(["phone"],l=>{if(l)oe(t).then(s=>{console.log(s)});else return console.log("error phone"),!1})};return(u,l)=>{const s=D,i=H,m=X,b=O,E=Z,$=J,N=W,S=me,F=M,I=Q,R=K;return f(),V("div",fe,[e(Y),_("div",_e,[ge,e(R,{style:{width:"900px",margin:"0 auto"},ref_key:"ruleFormRef",ref:p,model:t,rules:d,"label-width":"auto",class:"demo-ruleForm","status-icon":""},{default:o(()=>[e(b,{gutter:20},{default:o(()=>[e(m,{span:12},{default:o(()=>[e(i,{label:"企业名称",prop:"companyName"},{default:o(()=>[e(s,{modelValue:t.companyName,"onUpdate:modelValue":l[0]||(l[0]=r=>t.companyName=r)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(b,{gutter:20},{default:o(()=>[e(m,{span:12},{default:o(()=>[e(i,{label:"姓名",prop:"userName"},{default:o(()=>[e(s,{modelValue:t.userName,"onUpdate:modelValue":l[1]||(l[1]=r=>t.userName=r),style:{width:"calc(100% - 160px)"}},null,8,["modelValue"]),e(i,{label:"",prop:"gender"},{default:o(()=>[e($,{modelValue:t.gender,"onUpdate:modelValue":l[2]||(l[2]=r=>t.gender=r),style:{"margin-left":"10px",width:"150px"}},{default:o(()=>[e(E,{value:"1"},{default:o(()=>[c("先生")]),_:1}),e(E,{value:"2"},{default:o(()=>[c("女士")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,{span:12},{default:o(()=>[e(i,{label:"手机号",prop:"phone"},{default:o(()=>[e(s,{modelValue:t.phone,"onUpdate:modelValue":l[3]||(l[3]=r=>t.phone=r),style:{width:"calc(100% - 110px)"}},null,8,["modelValue"]),e(N,{type:"primary",style:{"margin-left":"10px",width:"100px"},onClick:l[4]||(l[4]=r=>a(p.value))},{default:o(()=>[c("发送验证码")]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{gutter:20},{default:o(()=>[e(m,{span:12},{default:o(()=>[e(i,{label:"注册人邮箱",prop:"email"},{default:o(()=>[e(s,{modelValue:t.email,"onUpdate:modelValue":l[5]||(l[5]=r=>t.email=r)},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12},{default:o(()=>[e(i,{label:"验证码",prop:"code"},{default:o(()=>[e(s,{modelValue:t.code,"onUpdate:modelValue":l[6]||(l[6]=r=>t.code=r)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,{label:"",prop:"policy",style:{"margin-top":"20px"}},{default:o(()=>[e(I,{modelValue:t.policy,"onUpdate:modelValue":l[7]||(l[7]=r=>t.policy=r)},{default:o(()=>[e(F,{value:"1",name:"policy"},{default:o(()=>[e(S,{href:"https://scm.exposaas.com/web/terms/use",type:"primary",target:"_blank"},{default:o(()=>[c(" 已阅读并同意《注册条款》、《隐私声明》、《安全产品、服务和功能隐私声明》及《Cookie声明》")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:o(()=>[_("div",ye,[e(N,{type:"primary",onClick:l[8]||(l[8]=r=>g(p.value))},{default:o(()=>[c("立即提交")]),_:1})])]),_:1})]),_:1},8,["model"])])])}}}),qe=re(be,[["__scopeId","data-v-b26cab7d"]]);export{qe as default};
