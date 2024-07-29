import{a1 as Y,A as W,a9 as q,a8 as U,k as N,c as k,ad as O,t as Z,L as _,D as ee,l as T,aP as F,bP as A,J as pe,bQ as H,d as L,u as le,a as M,o as y,h as ae,i as te,O as J,n as x,e as t,B as z,b as S,as as D,a7 as G,bR as w,r as j,F as ke,P as ne,Q as oe,W as R,aa as se,f as he,j as ge,H as Ce,v as xe,bC as ye,w as Se,g as ue}from"./index-CtnNdf6I.js";import{u as ie,c as Ve,a as K,e as re,b as X,d as de,p as Le}from"./use-form-item-BN_RNhUa.js";import{U as P}from"./event-BB_Ol6Sd.js";import{c as $,_ as Q}from"./index-Byn9vuEU.js";import{i as Be}from"./isEqual-DgFD6c0N.js";const be={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Y,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...ie(["ariaControls"])},ce={[P]:e=>W(e)||q(e)||U(e),change:e=>W(e)||q(e)||U(e)},B=Symbol("checkboxGroupContextKey"),Ee=({model:e,isChecked:c})=>{const d=N(B,void 0),n=k(()=>{var b,v;const o=(b=d==null?void 0:d.max)==null?void 0:b.value,f=(v=d==null?void 0:d.min)==null?void 0:v.value;return!O(o)&&e.value.length>=o&&!c.value||!O(f)&&e.value.length<=f&&c.value});return{isDisabled:Ve(k(()=>(d==null?void 0:d.disabled.value)||n.value)),isLimitDisabled:n}},Ie=(e,{model:c,isLimitExceeded:d,hasOwnLabel:n,isDisabled:m,isLabeledByFormItem:b})=>{const v=N(B,void 0),{formItem:o}=K(),{emit:f}=ee();function r(l){var u,h,i,a;return[!0,e.trueValue,e.trueLabel].includes(l)?(h=(u=e.trueValue)!=null?u:e.trueLabel)!=null?h:!0:(a=(i=e.falseValue)!=null?i:e.falseLabel)!=null?a:!1}function s(l,u){f("change",r(l),u)}function p(l){if(d.value)return;const u=l.target;f("change",r(u.checked),l)}async function g(l){d.value||!n.value&&!m.value&&b.value&&(l.composedPath().some(i=>i.tagName==="LABEL")||(c.value=r([!1,e.falseValue,e.falseLabel].includes(c.value)),await _(),s(c.value,l)))}const V=k(()=>(v==null?void 0:v.validateEvent)||e.validateEvent);return Z(()=>e.modelValue,()=>{V.value&&(o==null||o.validate("change").catch(l=>re()))}),{handleChange:p,onClickRoot:g}},$e=e=>{const c=T(!1),{emit:d}=ee(),n=N(B,void 0),m=k(()=>O(n)===!1),b=T(!1),v=k({get(){var o,f;return m.value?(o=n==null?void 0:n.modelValue)==null?void 0:o.value:(f=e.modelValue)!=null?f:c.value},set(o){var f,r;m.value&&F(o)?(b.value=((f=n==null?void 0:n.max)==null?void 0:f.value)!==void 0&&o.length>(n==null?void 0:n.max.value)&&o.length>v.value.length,b.value===!1&&((r=n==null?void 0:n.changeEvent)==null||r.call(n,o))):(d(P,o),c.value=o)}});return{model:v,isGroup:m,isLimitExceeded:b}},Fe=(e,c,{model:d})=>{const n=N(B,void 0),m=T(!1),b=k(()=>A(e.value)?e.label:e.value),v=k(()=>{const s=d.value;return U(s)?s:F(s)?pe(b.value)?s.map(H).some(p=>Be(p,b.value)):s.map(H).includes(b.value):s!=null?s===e.trueValue||s===e.trueLabel:!!s}),o=X(k(()=>{var s;return(s=n==null?void 0:n.size)==null?void 0:s.value}),{prop:!0}),f=X(k(()=>{var s;return(s=n==null?void 0:n.size)==null?void 0:s.value})),r=k(()=>!!c.default||!A(b.value));return{checkboxButtonSize:o,isChecked:v,isFocused:m,checkboxSize:f,hasOwnLabel:r,actualValue:b}},ve=(e,c)=>{const{formItem:d}=K(),{model:n,isGroup:m,isLimitExceeded:b}=$e(e),{isFocused:v,isChecked:o,checkboxButtonSize:f,checkboxSize:r,hasOwnLabel:s,actualValue:p}=Fe(e,c,{model:n}),{isDisabled:g}=Ee({model:n,isChecked:o}),{inputId:V,isLabeledByFormItem:l}=de(e,{formItemContext:d,disableIdGeneration:s,disableIdManagement:m}),{handleChange:u,onClickRoot:h}=Ie(e,{model:n,isLimitExceeded:b,hasOwnLabel:s,isDisabled:g,isLabeledByFormItem:l});return(()=>{function a(){var E,I;F(n.value)&&!n.value.includes(p.value)?n.value.push(p.value):n.value=(I=(E=e.trueValue)!=null?E:e.trueLabel)!=null?I:!0}e.checked&&a()})(),$({from:"controls",replacement:"aria-controls",version:"2.8.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},k(()=>!!e.controls)),$({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},k(()=>m.value&&A(e.value))),$({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},k(()=>!!e.trueLabel)),$({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},k(()=>!!e.falseLabel)),{inputId:V,isLabeledByFormItem:l,isChecked:o,isDisabled:g,isFocused:v,checkboxButtonSize:f,checkboxSize:r,hasOwnLabel:s,model:n,actualValue:p,handleChange:u,onClickRoot:h}},Ne=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],ze=["id","indeterminate","disabled","value","name","tabindex"],De=L({name:"ElCheckbox"}),Ge=L({...De,props:be,emits:ce,setup(e){const c=e,d=le(),{inputId:n,isLabeledByFormItem:m,isChecked:b,isDisabled:v,isFocused:o,checkboxSize:f,hasOwnLabel:r,model:s,actualValue:p,handleChange:g,onClickRoot:V}=ve(c,d),l=M("checkbox"),u=k(()=>[l.b(),l.m(f.value),l.is("disabled",v.value),l.is("bordered",c.border),l.is("checked",b.value)]),h=k(()=>[l.e("input"),l.is("disabled",v.value),l.is("checked",b.value),l.is("indeterminate",c.indeterminate),l.is("focus",o.value)]);return(i,a)=>(y(),ae(se(!t(r)&&t(m)?"span":"label"),{class:x(t(u)),"aria-controls":i.indeterminate?i.controls||i.ariaControls:null,onClick:t(V)},{default:te(()=>{var E,I;return[J("span",{class:x(t(h))},[i.trueValue||i.falseValue||i.trueLabel||i.falseLabel?z((y(),S("input",{key:0,id:t(n),"onUpdate:modelValue":a[0]||(a[0]=C=>D(s)?s.value=C:null),class:x(t(l).e("original")),type:"checkbox",indeterminate:i.indeterminate,name:i.name,tabindex:i.tabindex,disabled:t(v),"true-value":(E=i.trueValue)!=null?E:i.trueLabel,"false-value":(I=i.falseValue)!=null?I:i.falseLabel,onChange:a[1]||(a[1]=(...C)=>t(g)&&t(g)(...C)),onFocus:a[2]||(a[2]=C=>o.value=!0),onBlur:a[3]||(a[3]=C=>o.value=!1),onClick:a[4]||(a[4]=G(()=>{},["stop"]))},null,42,Ne)),[[w,t(s)]]):z((y(),S("input",{key:1,id:t(n),"onUpdate:modelValue":a[5]||(a[5]=C=>D(s)?s.value=C:null),class:x(t(l).e("original")),type:"checkbox",indeterminate:i.indeterminate,disabled:t(v),value:t(p),name:i.name,tabindex:i.tabindex,onChange:a[6]||(a[6]=(...C)=>t(g)&&t(g)(...C)),onFocus:a[7]||(a[7]=C=>o.value=!0),onBlur:a[8]||(a[8]=C=>o.value=!1),onClick:a[9]||(a[9]=G(()=>{},["stop"]))},null,42,ze)),[[w,t(s)]]),J("span",{class:x(t(l).e("inner"))},null,2)],2),t(r)?(y(),S("span",{key:0,class:x(t(l).e("label"))},[j(i.$slots,"default"),i.$slots.default?R("v-if",!0):(y(),S(ke,{key:0},[ne(oe(i.label),1)],64))],2)):R("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var we=Q(Ge,[["__file","checkbox.vue"]]);const Pe=["name","tabindex","disabled","true-value","false-value"],Ue=["name","tabindex","disabled","value"],Oe=L({name:"ElCheckboxButton"}),Te=L({...Oe,props:be,emits:ce,setup(e){const c=e,d=le(),{isFocused:n,isChecked:m,isDisabled:b,checkboxButtonSize:v,model:o,actualValue:f,handleChange:r}=ve(c,d),s=N(B,void 0),p=M("checkbox"),g=k(()=>{var l,u,h,i;const a=(u=(l=s==null?void 0:s.fill)==null?void 0:l.value)!=null?u:"";return{backgroundColor:a,borderColor:a,color:(i=(h=s==null?void 0:s.textColor)==null?void 0:h.value)!=null?i:"",boxShadow:a?`-1px 0 0 0 ${a}`:void 0}}),V=k(()=>[p.b("button"),p.bm("button",v.value),p.is("disabled",b.value),p.is("checked",m.value),p.is("focus",n.value)]);return(l,u)=>{var h,i;return y(),S("label",{class:x(t(V))},[l.trueValue||l.falseValue||l.trueLabel||l.falseLabel?z((y(),S("input",{key:0,"onUpdate:modelValue":u[0]||(u[0]=a=>D(o)?o.value=a:null),class:x(t(p).be("button","original")),type:"checkbox",name:l.name,tabindex:l.tabindex,disabled:t(b),"true-value":(h=l.trueValue)!=null?h:l.trueLabel,"false-value":(i=l.falseValue)!=null?i:l.falseLabel,onChange:u[1]||(u[1]=(...a)=>t(r)&&t(r)(...a)),onFocus:u[2]||(u[2]=a=>n.value=!0),onBlur:u[3]||(u[3]=a=>n.value=!1),onClick:u[4]||(u[4]=G(()=>{},["stop"]))},null,42,Pe)),[[w,t(o)]]):z((y(),S("input",{key:1,"onUpdate:modelValue":u[5]||(u[5]=a=>D(o)?o.value=a:null),class:x(t(p).be("button","original")),type:"checkbox",name:l.name,tabindex:l.tabindex,disabled:t(b),value:t(f),onChange:u[6]||(u[6]=(...a)=>t(r)&&t(r)(...a)),onFocus:u[7]||(u[7]=a=>n.value=!0),onBlur:u[8]||(u[8]=a=>n.value=!1),onClick:u[9]||(u[9]=G(()=>{},["stop"]))},null,42,Ue)),[[w,t(o)]]),l.$slots.default||l.label?(y(),S("span",{key:2,class:x(t(p).be("button","inner")),style:he(t(m)?t(g):void 0)},[j(l.$slots,"default",{},()=>[ne(oe(l.label),1)])],6)):R("v-if",!0)],2)}}});var me=Q(Te,[["__file","checkbox-button.vue"]]);const Ae=ge({modelValue:{type:Ce(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Y,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...ie(["ariaLabel"])}),Re={[P]:e=>F(e),change:e=>F(e)},Me=L({name:"ElCheckboxGroup"}),je=L({...Me,props:Ae,emits:Re,setup(e,{emit:c}){const d=e,n=M("checkbox"),{formItem:m}=K(),{inputId:b,isLabeledByFormItem:v}=de(d,{formItemContext:m}),o=async r=>{c(P,r),await _(),c("change",r)},f=k({get(){return d.modelValue},set(r){o(r)}});return xe(B,{...Le(ye(d),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:f,changeEvent:o}),$({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-checkbox-group",ref:"https://element-plus.org/en-US/component/checkbox.html"},k(()=>!!d.label)),Z(()=>d.modelValue,()=>{d.validateEvent&&(m==null||m.validate("change").catch(r=>re()))}),(r,s)=>{var p;return y(),ae(se(r.tag),{id:t(b),class:x(t(n).b("group")),role:"group","aria-label":t(v)?void 0:r.label||r.ariaLabel||"checkbox-group","aria-labelledby":t(v)?(p=t(m))==null?void 0:p.labelId:void 0},{default:te(()=>[j(r.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var fe=Q(je,[["__file","checkbox-group.vue"]]);const Je=Se(we,{CheckboxButton:me,CheckboxGroup:fe});ue(me);const Xe=ue(fe);export{Je as E,Xe as a};
