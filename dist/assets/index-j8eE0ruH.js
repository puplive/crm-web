import{a0 as Fe,e as d,bo as je,E as Pe,l as V,a1 as Z,v as G,al as We,aa as we,j as Ue,a2 as Ye,I as ae,B as oe,d as ke,ap as Xe,b as _e,u as Se,bp as qe,bq as Ze,L as Ge,M as k,y as Je,N as Qe,o as v,f as S,W as m,F as ne,n as y,a as t,r as X,P as N,c as I,w as M,a9 as _,m as se,S as et,ar as tt,a8 as at,am as ot,R as q,g as nt,K as Ce,h as st}from"./index-Q273XHf8.js";import{b as lt,m as rt,u as it}from"./typescript-CjU46sqC.js";import{i as Ie,V as ut,u as ct,E as A,_ as dt}from"./index-CRFYaBQA.js";import{u as pt,d as Ee}from"./constants-D7u2-Egf.js";import{U as le,u as ft,c as vt,a as mt,b as ht}from"./el-button-DXeH7ULc.js";const yt=()=>Fe&&/firefox/i.test(window.navigator.userAgent),gt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),bt=["class","style"],xt=/^on[A-Z]/,wt=(o={})=>{const{excludeListeners:f=!1,excludeKeys:i}=o,a=d(()=>((i==null?void 0:i.value)||[]).concat(bt)),r=Pe();return r?d(()=>{var c;return je(Object.entries((c=r.proxy)==null?void 0:c.$attrs).filter(([u])=>!a.value.includes(u)&&!(f&&xt.test(u))))}):d(()=>({}))};function St(o){const f=V();function i(){if(o.value==null)return;const{selectionStart:r,selectionEnd:c,value:u}=o.value;if(r==null||c==null)return;const g=u.slice(0,Math.max(0,r)),p=u.slice(Math.max(0,c));f.value={selectionStart:r,selectionEnd:c,value:u,beforeTxt:g,afterTxt:p}}function a(){if(o.value==null||f.value==null)return;const{value:r}=o.value,{beforeTxt:c,afterTxt:u,selectionStart:g}=f.value;if(c==null||u==null||g==null)return;let p=r.length;if(r.endsWith(u))p=r.length-u.length;else if(r.startsWith(c))p=c.length;else{const x=c[g-1],w=r.indexOf(x,g-1);w!==-1&&(p=w+1)}o.value.setSelectionRange(p,p)}return[i,a]}function Ct(o,{afterFocus:f,beforeBlur:i,afterBlur:a}={}){const r=Pe(),{emit:c}=r,u=Z(),g=V(!1),p=l=>{g.value||(g.value=!0,c("focus",l),f==null||f())},x=l=>{var T;We(i)&&i(l)||l.relatedTarget&&((T=u.value)!=null&&T.contains(l.relatedTarget))||(g.value=!1,c("blur",l),a==null||a())},w=()=>{var l;(l=o.value)==null||l.focus()};return G(u,l=>{l&&l.setAttribute("tabindex","-1")}),lt(u,"click",w),{wrapperRef:u,isFocused:g,handleFocus:p,handleBlur:x}}let b;const It=`
  height:0 !important;
  visibility:hidden !important;
  ${yt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Et=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function zt(o){const f=window.getComputedStyle(o),i=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),r=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:Et.map(u=>`${u}:${f.getPropertyValue(u)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:i}}function ze(o,f=1,i){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:r,borderSize:c,boxSizing:u,contextStyle:g}=zt(o);b.setAttribute("style",`${g};${It}`),b.value=o.value||o.placeholder||"";let p=b.scrollHeight;const x={};u==="border-box"?p=p+c:u==="content-box"&&(p=p-r),b.value="";const w=b.scrollHeight-r;if(we(f)){let l=w*f;u==="border-box"&&(l=l+r+c),p=Math.max(l,p),x.minHeight=`${l}px`}if(we(i)){let l=w*i;u==="border-box"&&(l=l+r+c),p=Math.min(l,p)}return x.height=`${p}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,x}const Ft=Ue({id:{type:String,default:void 0},size:Ye,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ie},prefixIcon:{type:Ie},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>rt({})},autofocus:{type:Boolean,default:!1},...pt(["ariaLabel"])}),Pt={[le]:o=>oe(o),input:o=>oe(o),change:o=>oe(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},kt=["role"],Nt=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Vt=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Tt=ke({name:"ElInput",inheritAttrs:!1}),Rt=ke({...Tt,props:Ft,emits:Pt,setup(o,{expose:f,emit:i}){const a=o,r=Xe(),c=_e(),u=d(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),g=d(()=>[a.type==="textarea"?ie.b():s.b(),s.m(re.value),s.is("disabled",z.value),s.is("exceed",Re.value),{[s.b("group")]:c.prepend||c.append,[s.m("prefix")]:c.prefix||a.prefixIcon,[s.m("suffix")]:c.suffix||a.suffixIcon||a.clearable||a.showPassword,[s.bm("suffix","password-clear")]:U.value&&Q.value,[s.b("hidden")]:a.type==="hidden"},r.class]),p=d(()=>[s.e("wrapper"),s.is("focus",K.value)]),x=wt({excludeKeys:d(()=>Object.keys(u.value))}),{form:w,formItem:l}=ft(),{inputId:T}=vt(a,{formItemContext:l}),re=mt(),z=ht(),s=Se("input"),ie=Se("textarea"),O=Z(),C=Z(),J=V(!1),R=V(!1),H=V(!1),ue=V(),D=Z(a.inputStyle),F=d(()=>O.value||C.value),{wrapperRef:Ne,isFocused:K,handleFocus:j,handleBlur:W}=Ct(F,{afterBlur(){var e;a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"blur").catch(n=>Ee()))}}),ce=d(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),B=d(()=>(l==null?void 0:l.validateState)||""),de=d(()=>B.value&&ut[B.value]),Ve=d(()=>H.value?qe:Ze),Te=d(()=>[r.style]),pe=d(()=>[a.inputStyle,D.value,{resize:a.resize}]),E=d(()=>Ge(a.modelValue)?"":String(a.modelValue)),U=d(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(K.value||J.value)),Q=d(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||K.value)),P=d(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),ee=d(()=>E.value.length),Re=d(()=>!!P.value&&ee.value>Number(a.maxlength)),Be=d(()=>!!c.suffix||!!a.suffixIcon||U.value||a.showPassword||P.value||!!B.value&&ce.value),[$e,Le]=St(O);it(C,e=>{if(Me(),!P.value||a.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;ue.value={right:`calc(100% - ${h+15+6}px)`}});const $=()=>{const{type:e,autosize:n}=a;if(!(!Fe||e!=="textarea"||!C.value))if(n){const h=Ce(n)?n.minRows:void 0,Y=Ce(n)?n.maxRows:void 0,xe=ze(C.value,h,Y);D.value={overflowY:"hidden",...xe},k(()=>{C.value.offsetHeight,D.value=xe})}else D.value={minHeight:ze(C.value).minHeight}},Me=(e=>{let n=!1;return()=>{var h;if(n||!a.autosize)return;((h=C.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})($),L=()=>{const e=F.value,n=a.formatter?a.formatter(E.value):E.value;!e||e.value===n||(e.value=n)},te=async e=>{$e();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!R.value){if(n===E.value){L();return}i(le,n),i("input",n),await k(),L(),Le()}},fe=e=>{i("change",e.target.value)},ve=e=>{i("compositionstart",e),R.value=!0},me=e=>{var n;i("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,Y=h[h.length-1]||"";R.value=!gt(Y)},he=e=>{i("compositionend",e),R.value&&(R.value=!1,te(e))},Ae=()=>{H.value=!H.value,ye()},ye=async()=>{var e;await k(),(e=F.value)==null||e.focus()},Oe=()=>{var e;return(e=F.value)==null?void 0:e.blur()},He=e=>{J.value=!1,i("mouseleave",e)},De=e=>{J.value=!0,i("mouseenter",e)},ge=e=>{i("keydown",e)},Ke=()=>{var e;(e=F.value)==null||e.select()},be=()=>{i(le,""),i("change",""),i("clear"),i("input","")};return G(()=>a.modelValue,()=>{var e;k(()=>$()),a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"change").catch(n=>Ee()))}),G(E,()=>L()),G(()=>a.type,async()=>{await k(),L(),$()}),Je(()=>{!a.formatter&&a.parser,L(),k($)}),ct({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input",ref:"https://element-plus.org/en-US/component/input.html"},d(()=>!!a.label)),f({input:O,textarea:C,ref:F,textareaStyle:pe,autosize:Qe(a,"autosize"),focus:ye,blur:Oe,select:Ke,clear:be,resizeTextarea:$}),(e,n)=>(v(),S("div",se(t(u),{class:[t(g),{[t(s).bm("group","append")]:e.$slots.append,[t(s).bm("group","prepend")]:e.$slots.prepend}],style:t(Te),role:e.containerRole,onMouseenter:De,onMouseleave:He}),[m(" input "),e.type!=="textarea"?(v(),S(ne,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:y(t(s).be("group","prepend"))},[X(e.$slots,"prepend")],2)):m("v-if",!0),N("div",{ref_key:"wrapperRef",ref:Ne,class:y(t(p))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:y(t(s).e("prefix"))},[N("span",{class:y(t(s).e("prefix-inner"))},[X(e.$slots,"prefix"),e.prefixIcon?(v(),I(t(A),{key:0,class:y(t(s).e("icon"))},{default:M(()=>[(v(),I(_(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),N("input",se({id:t(T),ref_key:"input",ref:O,class:t(s).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?H.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[0]||(n[0]=(...h)=>t(j)&&t(j)(...h)),onBlur:n[1]||(n[1]=(...h)=>t(W)&&t(W)(...h)),onChange:fe,onKeydown:ge}),null,16,Nt),m(" suffix slot "),t(Be)?(v(),S("span",{key:1,class:y(t(s).e("suffix"))},[N("span",{class:y(t(s).e("suffix-inner"))},[!t(U)||!t(Q)||!t(P)?(v(),S(ne,{key:0},[X(e.$slots,"suffix"),e.suffixIcon?(v(),I(t(A),{key:0,class:y(t(s).e("icon"))},{default:M(()=>[(v(),I(_(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(U)?(v(),I(t(A),{key:1,class:y([t(s).e("icon"),t(s).e("clear")]),onMousedown:at(t(ot),["prevent"]),onClick:be},{default:M(()=>[et(t(tt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(Q)?(v(),I(t(A),{key:2,class:y([t(s).e("icon"),t(s).e("password")]),onClick:Ae},{default:M(()=>[(v(),I(_(t(Ve))))]),_:1},8,["class"])):m("v-if",!0),t(P)?(v(),S("span",{key:3,class:y(t(s).e("count"))},[N("span",{class:y(t(s).e("count-inner"))},q(t(ee))+" / "+q(e.maxlength),3)],2)):m("v-if",!0),t(B)&&t(de)&&t(ce)?(v(),I(t(A),{key:4,class:y([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(B)==="validating")])},{default:M(()=>[(v(),I(_(t(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:y(t(s).be("group","append"))},[X(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(ne,{key:1},[m(" textarea "),N("textarea",se({id:t(T),ref_key:"textarea",ref:C,class:[t(ie).e("inner"),t(s).is("focus",t(K))]},t(x),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[2]||(n[2]=(...h)=>t(j)&&t(j)(...h)),onBlur:n[3]||(n[3]=(...h)=>t(W)&&t(W)(...h)),onChange:fe,onKeydown:ge}),null,16,Vt),t(P)?(v(),S("span",{key:0,style:nt(ue.value),class:y(t(s).e("count"))},q(t(ee))+" / "+q(e.maxlength),7)):m("v-if",!0)],64))],16,kt))}});var Bt=dt(Rt,[["__file","input.vue"]]);const Dt=st(Bt);export{Dt as E,wt as a,gt as i,Ct as u};
