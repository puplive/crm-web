import{b as C,h as x,g as I,a as W,r as D}from"./index-5pYrHxHw.js";import{y as N,H as A,z as $,at as j,u as S,e as U,a0 as F,v as K,c4 as V,am as y,j as q,I as k,d as G,S as J,r as L,A as Q}from"./index-z1lnycFL.js";import{t as Z}from"./el-button-C93tUob9.js";import{a as _}from"./scroll-BCz3Esio.js";import{P as h}from"./vnode-Dbe6RxbW.js";const de=(e,o,n,s)=>{let c={offsetX:0,offsetY:0};const a=u=>{const m=u.clientX,f=u.clientY,{offsetX:v,offsetY:p}=c,d=e.value.getBoundingClientRect(),g=d.left,b=d.top,T=d.width,Y=d.height,O=document.documentElement.clientWidth,H=document.documentElement.clientHeight,P=-g+v,B=-b+p,X=O-g-T+v,z=H-b-Y+p,M=E=>{let i=v+E.clientX-m,r=p+E.clientY-f;s!=null&&s.value||(i=Math.min(Math.max(i,P),X),r=Math.min(Math.max(r,B),z)),c={offsetX:i,offsetY:r},e.value&&(e.value.style.transform=`translate(${C(i)}, ${C(r)})`)},w=()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",w)},t=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",a)},l=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",a)};N(()=>{A(()=>{n.value?t():l()})}),$(()=>{l()})},ie=(e,o={})=>{j(e)||Z("[useLockscreen]","You need to pass a ref param to this function");const n=o.ns||S("popup"),s=U(()=>n.bm("parent","hidden"));if(!F||x(document.body,s.value))return;let c=0,a=!1,t="0";const l=()=>{setTimeout(()=>{D(document==null?void 0:document.body,s.value),a&&document&&(document.body.style.width=t)},200)};K(e,u=>{if(!u){l();return}a=!x(document.body,s.value),a&&(t=document.body.style.width),c=_(n.namespace.value);const m=document.documentElement.clientHeight<document.body.scrollHeight,f=I(document.body,"overflowY");c>0&&(m||f==="scroll")&&a&&(document.body.style.width=`calc(100% - ${c}px)`),W(document.body,s.value)}),V(()=>l())},R=e=>{if(!e)return{onClick:y,onMousedown:y,onMouseup:y};let o=!1,n=!1;return{onClick:t=>{o&&n&&e(t),o=n=!1},onMousedown:t=>{o=t.target===t.currentTarget},onMouseup:t=>{n=t.target===t.currentTarget}}},ee=q({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:k([String,Array,Object])},zIndex:{type:k([String,Number])}}),te={click:e=>e instanceof MouseEvent},oe="overlay";var ne=G({name:"ElOverlay",props:ee,emits:te,setup(e,{slots:o,emit:n}){const s=S(oe),c=u=>{n("click",u)},{onClick:a,onMousedown:t,onMouseup:l}=R(e.customMaskEvent?void 0:c);return()=>e.mask?J("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:a,onMousedown:t,onMouseup:l},[L(o,"default")],h.STYLE|h.CLASS|h.PROPS,["onClick","onMouseup","onMousedown"]):Q("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[L(o,"default")])}});const re=ne;export{re as E,ie as a,R as b,de as u};