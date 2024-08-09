import{U as R,E as be,_ as Ce,d as he,G as Ee,ch as Be,ci as we,c as C,t as M,y as Me,cj as J,z as x,B as ke,C as Te,bL as Se,W as k,o as f,h as g,i as m,H,$ as h,X as p,n as r,f as _,an as z,b as N,aq as P,ak as T,Z as $,aj as D,r as Ie,Y as K,I as j,T as Ae,ac as $e,F as le,bI as re,ck as ie,ag as ee,Q as Re,au as Oe,aU as ne,b7 as oe}from"./index-C-8ijE_e.js";import{E as Ve}from"./button-BaKn7Moe.js";import{E as Le}from"./index-KPSF2wsW.js";import{E as ze,u as Pe,a as De,b as Fe}from"./index-DmwpG0PW.js";import{o as se}from"./aria-KgdLjl5h.js";import{E as Ue}from"./focus-trap-Df20x8QO.js";import{i as He}from"./validator-D284zSKu.js";import{i as te}from"./use-form-item-CzNOTzf0.js";const q="_trap-focus-children",E=[],ae=e=>{if(E.length===0)return;const n=E[E.length-1][q];if(n.length>0&&e.code===be.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const a=e.shiftKey,i=e.target===n[0],l=e.target===n[n.length-1];i&&a&&(e.preventDefault(),n[n.length-1].focus()),l&&!a&&(e.preventDefault(),n[0].focus())}},Ne={beforeMount(e){e[q]=se(e),E.push(e),E.length<=1&&document.addEventListener("keydown",ae)},updated(e){R(()=>{e[q]=se(e)})},unmounted(){E.shift(),E.length===0&&document.removeEventListener("keydown",ae)}},Ke=he({name:"ElMessageBox",directives:{TrapFocus:Ne},components:{ElButton:Ve,ElFocusTrap:Ue,ElInput:Le,ElOverlay:ze,ElIcon:Ee,...Be},inheritAttrs:!1,props:{buttonSize:{type:String,validator:He},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:a,zIndex:i,ns:l,size:s}=we("message-box",C(()=>e.buttonSize)),{t:d}=a,{nextZIndex:c}=i,b=M(!1),o=Me({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:c()}),F=C(()=>{const t=o.type;return{[l.bm("icon",t)]:t&&J[t]}}),U=te(),u=te(),ue=C(()=>o.icon||J[o.type]||""),de=C(()=>!!o.message),B=M(),G=M(),I=M(),V=M(),X=M(),fe=C(()=>o.confirmButtonClass);x(()=>o.inputValue,async t=>{await R(),e.boxType==="prompt"&&t!==null&&Z()},{immediate:!0}),x(()=>b.value,t=>{var v,w;t&&(e.boxType!=="prompt"&&(o.autofocus?I.value=(w=(v=X.value)==null?void 0:v.$el)!=null?w:B.value:I.value=B.value),o.zIndex=c()),e.boxType==="prompt"&&(t?R().then(()=>{var Y;V.value&&V.value.$el&&(o.autofocus?I.value=(Y=ge())!=null?Y:B.value:I.value=B.value)}):(o.editorErrorMessage="",o.validateError=!1))});const ce=C(()=>e.draggable),me=C(()=>e.overflow);Pe(B,G,ce,me),ke(async()=>{await R(),e.closeOnHashChange&&window.addEventListener("hashchange",A)}),Te(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",A)});function A(){b.value&&(b.value=!1,R(()=>{o.action&&n("action",o.action)}))}const W=()=>{e.closeOnClickModal&&L(o.distinguishCancelAndClose?"close":"cancel")},pe=Fe(W),ve=t=>{if(o.inputType!=="textarea")return t.preventDefault(),L("confirm")},L=t=>{var v;e.boxType==="prompt"&&t==="confirm"&&!Z()||(o.action=t,o.beforeClose?(v=o.beforeClose)==null||v.call(o,t,o,A):A())},Z=()=>{if(e.boxType==="prompt"){const t=o.inputPattern;if(t&&!t.test(o.inputValue||""))return o.editorErrorMessage=o.inputErrorMessage||d("el.messagebox.error"),o.validateError=!0,!1;const v=o.inputValidator;if(typeof v=="function"){const w=v(o.inputValue);if(w===!1)return o.editorErrorMessage=o.inputErrorMessage||d("el.messagebox.error"),o.validateError=!0,!1;if(typeof w=="string")return o.editorErrorMessage=w,o.validateError=!0,!1}}return o.editorErrorMessage="",o.validateError=!1,!0},ge=()=>{const t=V.value.$refs;return t.input||t.textarea},Q=()=>{L("close")},ye=()=>{e.closeOnPressEscape&&Q()};return e.lockScroll&&De(b),{...Se(o),ns:l,overlayEvent:pe,visible:b,hasMessage:de,typeClass:F,contentId:U,inputId:u,btnSize:s,iconComponent:ue,confirmButtonClasses:fe,rootRef:B,focusStartRef:I,headerRef:G,inputRef:V,confirmRef:X,doClose:A,handleClose:Q,onCloseRequested:ye,handleWrapperClick:W,handleInputEnter:ve,handleAction:L,t:d}}}),je=["aria-label","aria-describedby"],qe=["aria-label"],Ge=["id"];function Xe(e,n,a,i,l,s){const d=k("el-icon"),c=k("close"),b=k("el-input"),o=k("el-button"),F=k("el-focus-trap"),U=k("el-overlay");return f(),g(Ae,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=u=>e.$emit("vanish")),persisted:""},{default:m(()=>[H(h(U,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:m(()=>[p("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:r(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...u)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...u)),onMousedown:n[9]||(n[9]=(...u)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...u)),onMouseup:n[10]||(n[10]=(...u)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...u))},[h(F,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:m(()=>[p("div",{ref:"rootRef",class:r([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:_(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=z(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(f(),N("div",{key:0,ref:"headerRef",class:r([e.ns.e("header"),{"show-close":e.showClose}])},[p("div",{class:r(e.ns.e("title"))},[e.iconComponent&&e.center?(f(),g(d,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:m(()=>[(f(),g(P(e.iconComponent)))]),_:1},8,["class"])):T("v-if",!0),p("span",null,$(e.title),1)],2),e.showClose?(f(),N("button",{key:0,type:"button",class:r(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=D(z(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[h(d,{class:r(e.ns.e("close"))},{default:m(()=>[h(c)]),_:1},8,["class"])],42,qe)):T("v-if",!0)],2)):T("v-if",!0),p("div",{id:e.contentId,class:r(e.ns.e("content"))},[p("div",{class:r(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(f(),g(d,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:m(()=>[(f(),g(P(e.iconComponent)))]),_:1},8,["class"])):T("v-if",!0),e.hasMessage?(f(),N("div",{key:1,class:r(e.ns.e("message"))},[Ie(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(f(),g(P(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(f(),g(P(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:m(()=>[K($(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):T("v-if",!0)],2),H(p("div",{class:r(e.ns.e("input"))},[h(b,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=u=>e.inputValue=u),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:r({invalid:e.validateError}),onKeydown:D(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),p("div",{class:r(e.ns.e("errormsg")),style:_({visibility:e.editorErrorMessage?"visible":"hidden"})},$(e.editorErrorMessage),7)],2),[[j,e.showInput]])],10,Ge),p("div",{class:r(e.ns.e("btns"))},[e.showCancelButton?(f(),g(o,{key:0,loading:e.cancelButtonLoading,class:r([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=u=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=D(z(u=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:m(()=>[K($(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):T("v-if",!0),H(h(o,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:r([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=u=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=D(z(u=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:m(()=>[K($(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[j,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,je)]),_:3},8,["z-index","overlay-class","mask"]),[[j,e.visible]])]),_:3})}var We=Ce(Ke,[["render",Xe],["__file","index.vue"]]);const O=new Map,Ze=e=>{let n=document.body;return e.appendTo&&(le(e.appendTo)&&(n=document.querySelector(e.appendTo)),oe(e.appendTo)&&(n=e.appendTo),oe(n)||(n=document.body)),n},Qe=(e,n,a=null)=>{const i=h(We,e,ne(e.message)||re(e.message)?{default:ne(e.message)?e.message:()=>e.message}:null);return i.appContext=a,ie(i,n),Ze(e).appendChild(n.firstElementChild),i.component},Ye=()=>document.createElement("div"),Je=(e,n)=>{const a=Ye();e.onVanish=()=>{ie(null,a),O.delete(l)},e.onAction=s=>{const d=O.get(l);let c;e.showInput?c={value:l.inputValue,action:s}:c=s,e.callback?e.callback(c,i.proxy):s==="cancel"||s==="close"?e.distinguishCancelAndClose&&s!=="cancel"?d.reject("close"):d.reject("cancel"):d.resolve(c)};const i=Qe(e,a,n),l=i.proxy;for(const s in e)ee(e,s)&&!ee(l.$props,s)&&(l[s]=e[s]);return l.visible=!0,l};function S(e,n=null){if(!$e)return Promise.reject();let a;return le(e)||re(e)?e={message:e}:a=e.callback,new Promise((i,l)=>{const s=Je(e,n??S._context);O.set(s,{options:e,callback:a,resolve:i,reject:l})})}const xe=["alert","confirm","prompt"],_e={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};xe.forEach(e=>{S[e]=en(e)});function en(e){return(n,a,i,l)=>{let s="";return Re(a)?(i=a,s=""):Oe(a)?s="":s=a,S(Object.assign({title:s,message:n,type:"",..._e[e]},i,{boxType:e}),l)}}S.close=()=>{O.forEach((e,n)=>{n.doClose()}),O.clear()};S._context=null;const y=S;y.install=e=>{y._context=e._context,e.config.globalProperties.$msgbox=y,e.config.globalProperties.$messageBox=y,e.config.globalProperties.$alert=y.alert,e.config.globalProperties.$confirm=y.confirm,e.config.globalProperties.$prompt=y.prompt};const dn=y;export{dn as E};
