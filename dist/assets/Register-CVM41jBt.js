import{d as C,l as F,s as R,o as U,f as q,S as e,P as d,w as o,Q as n,Z as I,_ as S,$ as B}from"./index-CeUaYvVA.js";/* empty css                     *//* empty css                          */import{E as $,a as A}from"./el-checkbox-P28d__VQ.js";import{E as G}from"./el-link-CZGW0Df9.js";import"./el-button-CG_o-Lai.js";/* empty css                 */import{E as T}from"./el-row-DWHvwCRI.js";import{E as H}from"./el-col-DL-pE2Po.js";/* empty css                 */import{v as L}from"./Header-DmvgFjGK.js";import{r as M,s as P}from"./index-CPy5h9Jl.js";import{E as u}from"./request-BYjuyoE7.js";import{E as Q}from"./index-nNlqqqFz.js";import{E as Z,a as j}from"./index-CQnDbio0.js";import{E as z,a as D}from"./index-Bc-gljCP.js";import{E as J}from"./index-Bd0HIxHa.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./event-BB_Ol6Sd.js";import"./index-iYWA_S4l.js";import"./isEqual-DTRV5mK6.js";import"./_initCloneObject-1jg3Pr7d.js";import"./typescript-CTRgrCvb.js";import"./logo-NwV_MDhb.js";import"./aria-BUADUvnR.js";import"./castArray-ta2Sfc5g.js";import"./_baseClone-C9EZC_0P.js";const O=i=>(S("data-v-d3b61a32"),i=i(),B(),i),W={class:"register-main"},X={class:"register-container"},Y=O(()=>d("div",{class:"register-title"},[d("div",{class:"label"},"参展企业注册")],-1)),ee={style:{flex:"1","text-align":"center","margin-top":"20px"}},oe=C({__name:"Register",setup(i){const y=I(),_=F(),l=R({companyName:"",userName:"",gender:"1",email:"",phone:"",code:"",policy:[]}),b={companyName:[{required:!0,message:"请输入企业名称",trigger:"blur"}],userName:[{required:!0,message:"请输入姓名",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱格式",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号格式",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}],policy:[{type:"array",required:!0,message:"请阅读并同意",trigger:"change"}]},V=m=>{m.validate(t=>{if(t)E();else return console.log("error submit"),!1})},E=()=>{let{policy:m,...t}=l;M(t).then(a=>{a.code===0?(u.success("注册成功"),setTimeout(()=>{y.push("/login")},1e3)):u.error(a.msg)})},x=m=>{m.validateField(["phone"],t=>{if(t)P(l).then(a=>{a.code===0?u.success("验证码已发送，请注意查收"):u.error(a.msg)});else return console.log("error phone"),!1})};return(m,t)=>{const a=Q,s=Z,p=H,c=T,f=z,v=D,g=J,h=G,k=$,N=A,w=j;return U(),q("div",W,[e(L),d("div",X,[Y,e(w,{style:{width:"900px",margin:"0 auto"},ref_key:"ruleFormRef",ref:_,model:l,rules:b,"label-width":"auto",class:"demo-ruleForm","status-icon":""},{default:o(()=>[e(c,{gutter:20},{default:o(()=>[e(p,{span:12},{default:o(()=>[e(s,{label:"企业名称",prop:"companyName"},{default:o(()=>[e(a,{modelValue:l.companyName,"onUpdate:modelValue":t[0]||(t[0]=r=>l.companyName=r)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,{gutter:20},{default:o(()=>[e(p,{span:12},{default:o(()=>[e(s,{label:"姓名",prop:"userName"},{default:o(()=>[e(a,{modelValue:l.userName,"onUpdate:modelValue":t[1]||(t[1]=r=>l.userName=r),style:{width:"calc(100% - 160px)"}},null,8,["modelValue"]),e(s,{label:"",prop:"gender"},{default:o(()=>[e(v,{modelValue:l.gender,"onUpdate:modelValue":t[2]||(t[2]=r=>l.gender=r),style:{"margin-left":"10px",width:"150px"}},{default:o(()=>[e(f,{value:"1"},{default:o(()=>[n("先生")]),_:1}),e(f,{value:"2"},{default:o(()=>[n("女士")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p,{span:12},{default:o(()=>[e(s,{label:"手机号",prop:"phone"},{default:o(()=>[e(a,{modelValue:l.phone,"onUpdate:modelValue":t[3]||(t[3]=r=>l.phone=r),style:{width:"calc(100% - 110px)"}},null,8,["modelValue"]),e(g,{type:"primary",style:{"margin-left":"10px",width:"100px"},onClick:t[4]||(t[4]=r=>x(_.value))},{default:o(()=>[n("发送验证码")]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{gutter:20},{default:o(()=>[e(p,{span:12},{default:o(()=>[e(s,{label:"注册人邮箱",prop:"email"},{default:o(()=>[e(a,{modelValue:l.email,"onUpdate:modelValue":t[5]||(t[5]=r=>l.email=r)},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:o(()=>[e(s,{label:"验证码",prop:"code"},{default:o(()=>[e(a,{modelValue:l.code,"onUpdate:modelValue":t[6]||(t[6]=r=>l.code=r)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{label:"",prop:"policy",style:{"margin-top":"20px"}},{default:o(()=>[e(N,{modelValue:l.policy,"onUpdate:modelValue":t[7]||(t[7]=r=>l.policy=r)},{default:o(()=>[e(k,{value:"1",name:"policy"},{default:o(()=>[e(h,{href:"https://scm.exposaas.com/web/terms/use",type:"primary",target:"_blank"},{default:o(()=>[n(" 已阅读并同意《注册条款》、《隐私声明》、《安全产品、服务和功能隐私声明》及《Cookie声明》")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,null,{default:o(()=>[d("div",ee,[e(g,{type:"primary",onClick:t[8]||(t[8]=r=>V(_.value))},{default:o(()=>[n("立即提交")]),_:1})])]),_:1})]),_:1},8,["model"])])])}}}),Re=K(oe,[["__scopeId","data-v-d3b61a32"]]);export{Re as default};
