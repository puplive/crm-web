import{$ as ke,c as d,aW as je,D as Fe,l as N,a0 as J,t as Q,ak as We,a9 as we,j as Ue,a1 as Ye,H as ae,A as oe,d as Pe,ao as Xe,u as _e,a as Se,bz as qe,bA as Je,K as Qe,L as P,x as Ze,M as Ge,o as v,b as S,W as m,F as ne,n as y,e as t,r as X,O as V,h as I,i as L,aa as _,m as se,R as et,aq as tt,a7 as at,al as ot,Q as q,f as nt,J as Ce,w as st}from"./index-BCumuH2l.js";import{e as lt,i as Ie,m as rt,V as it,u as ut,c as ct,E as M,_ as dt}from"./index-BNMC9-9K.js";import{u as pt,a as ft,d as vt,b as mt,c as ht,e as Ee}from"./use-form-item-DPxtBdX-.js";import{U as le}from"./event-BB_Ol6Sd.js";const yt=()=>ke&&/firefox/i.test(window.navigator.userAgent),gt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),bt=["class","style"],xt=/^on[A-Z]/,wt=(o={})=>{const{excludeListeners:f=!1,excludeKeys:i}=o,a=d(()=>((i==null?void 0:i.value)||[]).concat(bt)),r=Fe();return r?d(()=>{var c;return je(Object.entries((c=r.proxy)==null?void 0:c.$attrs).filter(([u])=>!a.value.includes(u)&&!(f&&xt.test(u))))}):d(()=>({}))};function St(o){const f=N();function i(){if(o.value==null)return;const{selectionStart:r,selectionEnd:c,value:u}=o.value;if(r==null||c==null)return;const g=u.slice(0,Math.max(0,r)),p=u.slice(Math.max(0,c));f.value={selectionStart:r,selectionEnd:c,value:u,beforeTxt:g,afterTxt:p}}function a(){if(o.value==null||f.value==null)return;const{value:r}=o.value,{beforeTxt:c,afterTxt:u,selectionStart:g}=f.value;if(c==null||u==null||g==null)return;let p=r.length;if(r.endsWith(u))p=r.length-u.length;else if(r.startsWith(c))p=c.length;else{const x=c[g-1],w=r.indexOf(x,g-1);w!==-1&&(p=w+1)}o.value.setSelectionRange(p,p)}return[i,a]}function Ct(o,{afterFocus:f,beforeBlur:i,afterBlur:a}={}){const r=Fe(),{emit:c}=r,u=J(),g=N(!1),p=l=>{g.value||(g.value=!0,c("focus",l),f==null||f())},x=l=>{var T;We(i)&&i(l)||l.relatedTarget&&((T=u.value)!=null&&T.contains(l.relatedTarget))||(g.value=!1,c("blur",l),a==null||a())},w=()=>{var l;(l=o.value)==null||l.focus()};return Q(u,l=>{l&&l.setAttribute("tabindex","-1")}),lt(u,"click",w),{wrapperRef:u,isFocused:g,handleFocus:p,handleBlur:x}}let b;const It=`
  height:0 !important;
  visibility:hidden !important;
  ${yt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Et=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function zt(o){const f=window.getComputedStyle(o),i=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),r=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:Et.map(u=>`${u}:${f.getPropertyValue(u)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:i}}function ze(o,f=1,i){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:r,borderSize:c,boxSizing:u,contextStyle:g}=zt(o);b.setAttribute("style",`${g};${It}`),b.value=o.value||o.placeholder||"";let p=b.scrollHeight;const x={};u==="border-box"?p=p+c:u==="content-box"&&(p=p-r),b.value="";const w=b.scrollHeight-r;if(we(f)){let l=w*f;u==="border-box"&&(l=l+r+c),p=Math.max(l,p),x.minHeight=`${l}px`}if(we(i)){let l=w*i;u==="border-box"&&(l=l+r+c),p=Math.min(l,p)}return x.height=`${p}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,x}const kt=Ue({id:{type:String,default:void 0},size:Ye,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ie},prefixIcon:{type:Ie},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>rt({})},autofocus:{type:Boolean,default:!1},...pt(["ariaLabel"])}),Ft={[le]:o=>oe(o),input:o=>oe(o),change:o=>oe(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Pt=["role"],Vt=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Nt=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Tt=Pe({name:"ElInput",inheritAttrs:!1}),Rt=Pe({...Tt,props:kt,emits:Ft,setup(o,{expose:f,emit:i}){const a=o,r=Xe(),c=_e(),u=d(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),g=d(()=>[a.type==="textarea"?ie.b():s.b(),s.m(re.value),s.is("disabled",z.value),s.is("exceed",Re.value),{[s.b("group")]:c.prepend||c.append,[s.m("prefix")]:c.prefix||a.prefixIcon,[s.m("suffix")]:c.suffix||a.suffixIcon||a.clearable||a.showPassword,[s.bm("suffix","password-clear")]:U.value&&G.value,[s.b("hidden")]:a.type==="hidden"},r.class]),p=d(()=>[s.e("wrapper"),s.is("focus",K.value)]),x=wt({excludeKeys:d(()=>Object.keys(u.value))}),{form:w,formItem:l}=ft(),{inputId:T}=vt(a,{formItemContext:l}),re=mt(),z=ht(),s=Se("input"),ie=Se("textarea"),O=J(),C=J(),Z=N(!1),R=N(!1),H=N(!1),ue=N(),D=J(a.inputStyle),k=d(()=>O.value||C.value),{wrapperRef:Ve,isFocused:K,handleFocus:j,handleBlur:W}=Ct(k,{afterBlur(){var e;a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"blur").catch(n=>Ee()))}}),ce=d(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),$=d(()=>(l==null?void 0:l.validateState)||""),de=d(()=>$.value&&it[$.value]),Ne=d(()=>H.value?qe:Je),Te=d(()=>[r.style]),pe=d(()=>[a.inputStyle,D.value,{resize:a.resize}]),E=d(()=>Qe(a.modelValue)?"":String(a.modelValue)),U=d(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(K.value||Z.value)),G=d(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||K.value)),F=d(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),ee=d(()=>E.value.length),Re=d(()=>!!F.value&&ee.value>Number(a.maxlength)),$e=d(()=>!!c.suffix||!!a.suffixIcon||U.value||a.showPassword||F.value||!!$.value&&ce.value),[Ae,Be]=St(O);ut(C,e=>{if(Le(),!F.value||a.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;ue.value={right:`calc(100% - ${h+15+6}px)`}});const A=()=>{const{type:e,autosize:n}=a;if(!(!ke||e!=="textarea"||!C.value))if(n){const h=Ce(n)?n.minRows:void 0,Y=Ce(n)?n.maxRows:void 0,xe=ze(C.value,h,Y);D.value={overflowY:"hidden",...xe},P(()=>{C.value.offsetHeight,D.value=xe})}else D.value={minHeight:ze(C.value).minHeight}},Le=(e=>{let n=!1;return()=>{var h;if(n||!a.autosize)return;((h=C.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})(A),B=()=>{const e=k.value,n=a.formatter?a.formatter(E.value):E.value;!e||e.value===n||(e.value=n)},te=async e=>{Ae();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!R.value){if(n===E.value){B();return}i(le,n),i("input",n),await P(),B(),Be()}},fe=e=>{i("change",e.target.value)},ve=e=>{i("compositionstart",e),R.value=!0},me=e=>{var n;i("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,Y=h[h.length-1]||"";R.value=!gt(Y)},he=e=>{i("compositionend",e),R.value&&(R.value=!1,te(e))},Me=()=>{H.value=!H.value,ye()},ye=async()=>{var e;await P(),(e=k.value)==null||e.focus()},Oe=()=>{var e;return(e=k.value)==null?void 0:e.blur()},He=e=>{Z.value=!1,i("mouseleave",e)},De=e=>{Z.value=!0,i("mouseenter",e)},ge=e=>{i("keydown",e)},Ke=()=>{var e;(e=k.value)==null||e.select()},be=()=>{i(le,""),i("change",""),i("clear"),i("input","")};return Q(()=>a.modelValue,()=>{var e;P(()=>A()),a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"change").catch(n=>Ee()))}),Q(E,()=>B()),Q(()=>a.type,async()=>{await P(),B(),A()}),Ze(()=>{!a.formatter&&a.parser,B(),P(A)}),ct({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input",ref:"https://element-plus.org/en-US/component/input.html"},d(()=>!!a.label)),f({input:O,textarea:C,ref:k,textareaStyle:pe,autosize:Ge(a,"autosize"),focus:ye,blur:Oe,select:Ke,clear:be,resizeTextarea:A}),(e,n)=>(v(),S("div",se(t(u),{class:[t(g),{[t(s).bm("group","append")]:e.$slots.append,[t(s).bm("group","prepend")]:e.$slots.prepend}],style:t(Te),role:e.containerRole,onMouseenter:De,onMouseleave:He}),[m(" input "),e.type!=="textarea"?(v(),S(ne,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:y(t(s).be("group","prepend"))},[X(e.$slots,"prepend")],2)):m("v-if",!0),V("div",{ref_key:"wrapperRef",ref:Ve,class:y(t(p))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:y(t(s).e("prefix"))},[V("span",{class:y(t(s).e("prefix-inner"))},[X(e.$slots,"prefix"),e.prefixIcon?(v(),I(t(M),{key:0,class:y(t(s).e("icon"))},{default:L(()=>[(v(),I(_(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),V("input",se({id:t(T),ref_key:"input",ref:O,class:t(s).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?H.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[0]||(n[0]=(...h)=>t(j)&&t(j)(...h)),onBlur:n[1]||(n[1]=(...h)=>t(W)&&t(W)(...h)),onChange:fe,onKeydown:ge}),null,16,Vt),m(" suffix slot "),t($e)?(v(),S("span",{key:1,class:y(t(s).e("suffix"))},[V("span",{class:y(t(s).e("suffix-inner"))},[!t(U)||!t(G)||!t(F)?(v(),S(ne,{key:0},[X(e.$slots,"suffix"),e.suffixIcon?(v(),I(t(M),{key:0,class:y(t(s).e("icon"))},{default:L(()=>[(v(),I(_(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(U)?(v(),I(t(M),{key:1,class:y([t(s).e("icon"),t(s).e("clear")]),onMousedown:at(t(ot),["prevent"]),onClick:be},{default:L(()=>[et(t(tt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(G)?(v(),I(t(M),{key:2,class:y([t(s).e("icon"),t(s).e("password")]),onClick:Me},{default:L(()=>[(v(),I(_(t(Ne))))]),_:1},8,["class"])):m("v-if",!0),t(F)?(v(),S("span",{key:3,class:y(t(s).e("count"))},[V("span",{class:y(t(s).e("count-inner"))},q(t(ee))+" / "+q(e.maxlength),3)],2)):m("v-if",!0),t($)&&t(de)&&t(ce)?(v(),I(t(M),{key:4,class:y([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t($)==="validating")])},{default:L(()=>[(v(),I(_(t(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:y(t(s).be("group","append"))},[X(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(ne,{key:1},[m(" textarea "),V("textarea",se({id:t(T),ref_key:"textarea",ref:C,class:[t(ie).e("inner"),t(s).is("focus",t(K))]},t(x),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[2]||(n[2]=(...h)=>t(j)&&t(j)(...h)),onBlur:n[3]||(n[3]=(...h)=>t(W)&&t(W)(...h)),onChange:fe,onKeydown:ge}),null,16,Nt),t(F)?(v(),S("span",{key:0,style:nt(ue.value),class:y(t(s).e("count"))},q(t(ee))+" / "+q(e.maxlength),7)):m("v-if",!0)],64))],16,Pt))}});var $t=dt(Rt,[["__file","input.vue"]]);const Ht=st($t);export{Ht as E,wt as a,gt as i,Ct as u};
