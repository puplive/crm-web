import{B as W,P as D,C as I,ae as E,aB as N,a as S,c as $,ac as j,l as x,z as A,aQ as U,j as F,c1 as K,k as Q,bb as y,p as V,M as k,d as q,$ as G,r as L,D as J}from"./index-CsSJFrlK.js";import{t as Z}from"./use-form-item-DnM4c4f2.js";import{a as _}from"./scroll-0bU1GjN2.js";import{P as h}from"./vnode-BI2wCGRQ.js";const ue=(e,o,n,s)=>{let c={offsetX:0,offsetY:0};const a=u=>{const m=u.clientX,f=u.clientY,{offsetX:v,offsetY:p}=c,d=e.value.getBoundingClientRect(),b=d.left,g=d.top,T=d.width,Y=d.height,O=document.documentElement.clientWidth,B=document.documentElement.clientHeight,P=-b+v,H=-g+p,X=O-b-T+v,z=B-g-Y+p,M=C=>{let i=v+C.clientX-m,r=p+C.clientY-f;s!=null&&s.value||(i=Math.min(Math.max(i,P),X),r=Math.min(Math.max(r,H),z)),c={offsetX:i,offsetY:r},e.value&&(e.value.style.transform=`translate(${E(i)}, ${E(r)})`)},w=()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",w)},t=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",a)},l=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",a)};W(()=>{D(()=>{n.value?t():l()})}),I(()=>{l()})},de=(e,o={})=>{N(e)||Z("[useLockscreen]","You need to pass a ref param to this function");const n=o.ns||S("popup"),s=$(()=>n.bm("parent","hidden"));if(!j||x(document.body,s.value))return;let c=0,a=!1,t="0";const l=()=>{setTimeout(()=>{Q(document==null?void 0:document.body,s.value),a&&document&&(document.body.style.width=t)},200)};A(e,u=>{if(!u){l();return}a=!x(document.body,s.value),a&&(t=document.body.style.width),c=_(n.namespace.value);const m=document.documentElement.clientHeight<document.body.scrollHeight,f=U(document.body,"overflowY");c>0&&(m||f==="scroll")&&a&&(document.body.style.width=`calc(100% - ${c}px)`),F(document.body,s.value)}),K(()=>l())},R=e=>{if(!e)return{onClick:y,onMousedown:y,onMouseup:y};let o=!1,n=!1;return{onClick:t=>{o&&n&&e(t),o=n=!1},onMousedown:t=>{o=t.target===t.currentTarget},onMouseup:t=>{n=t.target===t.currentTarget}}},ee=V({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:k([String,Array,Object])},zIndex:{type:k([String,Number])}}),te={click:e=>e instanceof MouseEvent},oe="overlay";var ne=q({name:"ElOverlay",props:ee,emits:te,setup(e,{slots:o,emit:n}){const s=S(oe),c=u=>{n("click",u)},{onClick:a,onMousedown:t,onMouseup:l}=R(e.customMaskEvent?void 0:c);return()=>e.mask?G("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:a,onMousedown:t,onMouseup:l},[L(o,"default")],h.STYLE|h.CLASS|h.PROPS,["onClick","onMouseup","onMousedown"]):J("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[L(o,"default")])}});const ie=ne;export{ie as E,de as a,R as b,ue as u};