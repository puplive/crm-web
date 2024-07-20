import{M as O,d as be,bf as Ce,e as C,l as M,s as Ee,v as Y,y as he,z as Be,b2 as we,O as T,o as f,c as g,w as m,C as H,S as E,P as p,n as r,g as x,a8 as L,f as K,a9 as P,W as S,R,a5 as D,r as Me,Q as N,D as j,T as Te,a0 as Se,B as le,b3 as re,bg as ie,a3 as _,K as ke,ae as Ie,al as ee,aU as ne}from"./index-Q273XHf8.js";import{E as Ae}from"./index-nVic9h1r.js";import{E as Re}from"./index-j8eE0ruH.js";import{E as Oe,u as $e,a as Ve,b as ze}from"./index-CUKUieZ5.js";import{_ as Le,E as Pe,T as De,c as oe}from"./index-CRFYaBQA.js";import{E as Fe}from"./typescript-CjU46sqC.js";import{o as se}from"./aria-KgdLjl5h.js";import{e as Ue}from"./el-scrollbar-0l_cZ0S_.js";import{i as He}from"./validator-Dg3P4JN7.js";import{a as te}from"./constants-D7u2-Egf.js";const q="_trap-focus-children",h=[],ae=e=>{if(h.length===0)return;const n=h[h.length-1][q];if(n.length>0&&e.code===Fe.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const a=e.shiftKey,i=e.target===n[0],l=e.target===n[n.length-1];i&&a&&(e.preventDefault(),n[n.length-1].focus()),l&&!a&&(e.preventDefault(),n[0].focus())}},Ke={beforeMount(e){e[q]=se(e),h.push(e),h.length<=1&&document.addEventListener("keydown",ae)},updated(e){O(()=>{e[q]=se(e)})},unmounted(){h.shift(),h.length===0&&document.removeEventListener("keydown",ae)}},Ne=be({name:"ElMessageBox",directives:{TrapFocus:Ke},components:{ElButton:Ae,ElFocusTrap:Ue,ElInput:Re,ElOverlay:Oe,ElIcon:Pe,...De},inheritAttrs:!1,props:{buttonSize:{type:String,validator:He},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:a,zIndex:i,ns:l,size:s}=Ce("message-box",C(()=>e.buttonSize)),{t:d}=a,{nextZIndex:c}=i,b=M(!1),o=Ee({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:c()}),F=C(()=>{const t=o.type;return{[l.bm("icon",t)]:t&&oe[t]}}),U=te(),u=te(),ue=C(()=>o.icon||oe[o.type]||""),de=C(()=>!!o.message),B=M(),G=M(),I=M(),V=M(),W=M(),fe=C(()=>o.confirmButtonClass);Y(()=>o.inputValue,async t=>{await O(),e.boxType==="prompt"&&t!==null&&Q()},{immediate:!0}),Y(()=>b.value,t=>{var v,w;t&&(e.boxType!=="prompt"&&(o.autofocus?I.value=(w=(v=W.value)==null?void 0:v.$el)!=null?w:B.value:I.value=B.value),o.zIndex=c()),e.boxType==="prompt"&&(t?O().then(()=>{var J;V.value&&V.value.$el&&(o.autofocus?I.value=(J=ge())!=null?J:B.value:I.value=B.value)}):(o.editorErrorMessage="",o.validateError=!1))});const ce=C(()=>e.draggable),me=C(()=>e.overflow);$e(B,G,ce,me),he(async()=>{await O(),e.closeOnHashChange&&window.addEventListener("hashchange",A)}),Be(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",A)});function A(){b.value&&(b.value=!1,O(()=>{o.action&&n("action",o.action)}))}const X=()=>{e.closeOnClickModal&&z(o.distinguishCancelAndClose?"close":"cancel")},pe=ze(X),ve=t=>{if(o.inputType!=="textarea")return t.preventDefault(),z("confirm")},z=t=>{var v;e.boxType==="prompt"&&t==="confirm"&&!Q()||(o.action=t,o.beforeClose?(v=o.beforeClose)==null||v.call(o,t,o,A):A())},Q=()=>{if(e.boxType==="prompt"){const t=o.inputPattern;if(t&&!t.test(o.inputValue||""))return o.editorErrorMessage=o.inputErrorMessage||d("el.messagebox.error"),o.validateError=!0,!1;const v=o.inputValidator;if(typeof v=="function"){const w=v(o.inputValue);if(w===!1)return o.editorErrorMessage=o.inputErrorMessage||d("el.messagebox.error"),o.validateError=!0,!1;if(typeof w=="string")return o.editorErrorMessage=w,o.validateError=!0,!1}}return o.editorErrorMessage="",o.validateError=!1,!0},ge=()=>{const t=V.value.$refs;return t.input||t.textarea},Z=()=>{z("close")},ye=()=>{e.closeOnPressEscape&&Z()};return e.lockScroll&&Ve(b),{...we(o),ns:l,overlayEvent:pe,visible:b,hasMessage:de,typeClass:F,contentId:U,inputId:u,btnSize:s,iconComponent:ue,confirmButtonClasses:fe,rootRef:B,focusStartRef:I,headerRef:G,inputRef:V,confirmRef:W,doClose:A,handleClose:Z,onCloseRequested:ye,handleWrapperClick:X,handleInputEnter:ve,handleAction:z,t:d}}}),je=["aria-label","aria-describedby"],qe=["aria-label"],Ge=["id"];function We(e,n,a,i,l,s){const d=T("el-icon"),c=T("close"),b=T("el-input"),o=T("el-button"),F=T("el-focus-trap"),U=T("el-overlay");return f(),g(Te,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=u=>e.$emit("vanish")),persisted:""},{default:m(()=>[H(E(U,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:m(()=>[p("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:r(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...u)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...u)),onMousedown:n[9]||(n[9]=(...u)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...u)),onMouseup:n[10]||(n[10]=(...u)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...u))},[E(F,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:m(()=>[p("div",{ref:"rootRef",class:r([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:x(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=L(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(f(),K("div",{key:0,ref:"headerRef",class:r([e.ns.e("header"),{"show-close":e.showClose}])},[p("div",{class:r(e.ns.e("title"))},[e.iconComponent&&e.center?(f(),g(d,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:m(()=>[(f(),g(P(e.iconComponent)))]),_:1},8,["class"])):S("v-if",!0),p("span",null,R(e.title),1)],2),e.showClose?(f(),K("button",{key:0,type:"button",class:r(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=D(L(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[E(d,{class:r(e.ns.e("close"))},{default:m(()=>[E(c)]),_:1},8,["class"])],42,qe)):S("v-if",!0)],2)):S("v-if",!0),p("div",{id:e.contentId,class:r(e.ns.e("content"))},[p("div",{class:r(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(f(),g(d,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:m(()=>[(f(),g(P(e.iconComponent)))]),_:1},8,["class"])):S("v-if",!0),e.hasMessage?(f(),K("div",{key:1,class:r(e.ns.e("message"))},[Me(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(f(),g(P(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(f(),g(P(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:m(()=>[N(R(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):S("v-if",!0)],2),H(p("div",{class:r(e.ns.e("input"))},[E(b,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=u=>e.inputValue=u),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:r({invalid:e.validateError}),onKeydown:D(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),p("div",{class:r(e.ns.e("errormsg")),style:x({visibility:e.editorErrorMessage?"visible":"hidden"})},R(e.editorErrorMessage),7)],2),[[j,e.showInput]])],10,Ge),p("div",{class:r(e.ns.e("btns"))},[e.showCancelButton?(f(),g(o,{key:0,loading:e.cancelButtonLoading,class:r([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=u=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=D(L(u=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:m(()=>[N(R(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):S("v-if",!0),H(E(o,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:r([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=u=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=D(L(u=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:m(()=>[N(R(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[j,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,je)]),_:3},8,["z-index","overlay-class","mask"]),[[j,e.visible]])]),_:3})}var Xe=Le(Ne,[["render",We],["__file","index.vue"]]);const $=new Map,Qe=e=>{let n=document.body;return e.appendTo&&(le(e.appendTo)&&(n=document.querySelector(e.appendTo)),ne(e.appendTo)&&(n=e.appendTo),ne(n)||(n=document.body)),n},Ze=(e,n,a=null)=>{const i=E(Xe,e,ee(e.message)||re(e.message)?{default:ee(e.message)?e.message:()=>e.message}:null);return i.appContext=a,ie(i,n),Qe(e).appendChild(n.firstElementChild),i.component},Je=()=>document.createElement("div"),Ye=(e,n)=>{const a=Je();e.onVanish=()=>{ie(null,a),$.delete(l)},e.onAction=s=>{const d=$.get(l);let c;e.showInput?c={value:l.inputValue,action:s}:c=s,e.callback?e.callback(c,i.proxy):s==="cancel"||s==="close"?e.distinguishCancelAndClose&&s!=="cancel"?d.reject("close"):d.reject("cancel"):d.resolve(c)};const i=Ze(e,a,n),l=i.proxy;for(const s in e)_(e,s)&&!_(l.$props,s)&&(l[s]=e[s]);return l.visible=!0,l};function k(e,n=null){if(!Se)return Promise.reject();let a;return le(e)||re(e)?e={message:e}:a=e.callback,new Promise((i,l)=>{const s=Ye(e,n??k._context);$.set(s,{options:e,callback:a,resolve:i,reject:l})})}const xe=["alert","confirm","prompt"],_e={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};xe.forEach(e=>{k[e]=en(e)});function en(e){return(n,a,i,l)=>{let s="";return ke(a)?(i=a,s=""):Ie(a)?s="":s=a,k(Object.assign({title:s,message:n,type:"",..._e[e]},i,{boxType:e}),l)}}k.close=()=>{$.forEach((e,n)=>{n.doClose()}),$.clear()};k._context=null;const y=k;y.install=e=>{y._context=e._context,e.config.globalProperties.$msgbox=y,e.config.globalProperties.$messageBox=y,e.config.globalProperties.$alert=y.alert,e.config.globalProperties.$confirm=y.confirm,e.config.globalProperties.$prompt=y.prompt};const cn=y;export{cn as E};
