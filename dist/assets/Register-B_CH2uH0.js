import{d as h,l as w,s as C,o as F,f as R,S as e,P as d,w as o,Q as n,Z as U,_ as q,$ as I}from"./index-ejxKPGwJ.js";/* empty css                     *//* empty css                          */import{E as S,a as B}from"./el-checkbox-BI4x9LQv.js";import{E as $}from"./el-link-BWd4E66f.js";import"./el-button-Dg3p6Aqk.js";/* empty css                 */import{E as A}from"./el-row-CuEKgaLa.js";import{E as G}from"./el-col-DZf0PYj_.js";import"./el-input-K2YKJKRm.js";import{v as H}from"./Header-ZV7LYg_i.js";import{r as L,s as P}from"./index-b7XfrZf8.js";import{E as Q}from"./index-ChIfEi4u.js";import{E as T,a as Z}from"./index--OPgakvE.js";import{E as j,a as z}from"./index-DC72FTcR.js";import{E as D}from"./index-DfKfZ_zv.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./event-BB_Ol6Sd.js";import"./index-BdsNbp0F.js";import"./isEqual-2rUlRSb8.js";import"./typescript-6eASP1js.js";import"./logo-NwV_MDhb.js";import"./request-BBBgF-Ju.js";import"./castArray-C5fBeFso.js";const K=u=>(q("data-v-b26cab7d"),u=u(),I(),u),M={class:"register-main"},O={class:"register-container"},W=K(()=>d("div",{class:"register-title"},[d("div",{class:"label"},"参展企业注册")],-1)),X={style:{flex:"1","text-align":"center","margin-top":"20px"}},Y=h({__name:"Register",setup(u){U();const i=w(),l=C({companyName:"",userName:"",gender:"1",email:"",phone:"",code:"",policy:[]}),g={companyName:[{required:!0,message:"请输入企业名称",trigger:"blur"}],userName:[{required:!0,message:"请输入姓名",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱格式",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号格式",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}],policy:[{type:"array",required:!0,message:"请阅读并同意",trigger:"change"}]},b=m=>{m.validate(t=>{if(t)y();else return console.log("error submit"),!1})},y=()=>{let{policy:m,...t}=l;L(t).then(a=>{console.log(a)})},V=m=>{m.validateField(["phone"],t=>{if(t)P(l).then(a=>{console.log(a)});else return console.log("error phone"),!1})};return(m,t)=>{const a=Q,s=T,p=G,_=A,c=j,x=z,f=D,E=$,v=S,k=B,N=Z;return F(),R("div",M,[e(H),d("div",O,[W,e(N,{style:{width:"900px",margin:"0 auto"},ref_key:"ruleFormRef",ref:i,model:l,rules:g,"label-width":"auto",class:"demo-ruleForm","status-icon":""},{default:o(()=>[e(_,{gutter:20},{default:o(()=>[e(p,{span:12},{default:o(()=>[e(s,{label:"企业名称",prop:"companyName"},{default:o(()=>[e(a,{modelValue:l.companyName,"onUpdate:modelValue":t[0]||(t[0]=r=>l.companyName=r)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(_,{gutter:20},{default:o(()=>[e(p,{span:12},{default:o(()=>[e(s,{label:"姓名",prop:"userName"},{default:o(()=>[e(a,{modelValue:l.userName,"onUpdate:modelValue":t[1]||(t[1]=r=>l.userName=r),style:{width:"calc(100% - 160px)"}},null,8,["modelValue"]),e(s,{label:"",prop:"gender"},{default:o(()=>[e(x,{modelValue:l.gender,"onUpdate:modelValue":t[2]||(t[2]=r=>l.gender=r),style:{"margin-left":"10px",width:"150px"}},{default:o(()=>[e(c,{value:"1"},{default:o(()=>[n("先生")]),_:1}),e(c,{value:"2"},{default:o(()=>[n("女士")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p,{span:12},{default:o(()=>[e(s,{label:"手机号",prop:"phone"},{default:o(()=>[e(a,{modelValue:l.phone,"onUpdate:modelValue":t[3]||(t[3]=r=>l.phone=r),style:{width:"calc(100% - 110px)"}},null,8,["modelValue"]),e(f,{type:"primary",style:{"margin-left":"10px",width:"100px"},onClick:t[4]||(t[4]=r=>V(i.value))},{default:o(()=>[n("发送验证码")]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{gutter:20},{default:o(()=>[e(p,{span:12},{default:o(()=>[e(s,{label:"注册人邮箱",prop:"email"},{default:o(()=>[e(a,{modelValue:l.email,"onUpdate:modelValue":t[5]||(t[5]=r=>l.email=r)},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:o(()=>[e(s,{label:"验证码",prop:"code"},{default:o(()=>[e(a,{modelValue:l.code,"onUpdate:modelValue":t[6]||(t[6]=r=>l.code=r)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{label:"",prop:"policy",style:{"margin-top":"20px"}},{default:o(()=>[e(k,{modelValue:l.policy,"onUpdate:modelValue":t[7]||(t[7]=r=>l.policy=r)},{default:o(()=>[e(v,{value:"1",name:"policy"},{default:o(()=>[e(E,{href:"https://scm.exposaas.com/web/terms/use",type:"primary",target:"_blank"},{default:o(()=>[n(" 已阅读并同意《注册条款》、《隐私声明》、《安全产品、服务和功能隐私声明》及《Cookie声明》")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,null,{default:o(()=>[d("div",X,[e(f,{type:"primary",onClick:t[8]||(t[8]=r=>b(i.value))},{default:o(()=>[n("立即提交")]),_:1})])]),_:1})]),_:1},8,["model"])])])}}}),Ne=J(Y,[["__scopeId","data-v-b26cab7d"]]);export{Ne as default};