import{m as me,E as x,_ as pe,e as Y}from"./index-5pYrHxHw.js";import{a0 as X,aH as Ie,j as ge,I as H,aa as ce,d as ne,aI as ve,aJ as _e,aK as Ce,a4 as ye,u as we,aL as Le,l as k,aM as ze,a1 as Se,e as w,v as ue,M as he,y as be,o as b,c as de,S as m,w as z,P as h,n as p,a as e,g as fe,a8 as Ee,X as S,a6 as Ne,f as T,F as te,aC as Te,q as xe,aN as Oe,aO as Re,ab as $e,aP as Ae,aQ as Xe,W as Ye,C as Be,D as Me,r as ae,T as Ve,aR as Pe,aS as De,h as ke,ap as Fe,aT as He,m as We,aU as je,B as Ke,R as qe}from"./index-z1lnycFL.js";import{E as A}from"./request-aXdAhXIg.js";import{d as Ue}from"./el-tag-YLIfQqcE.js";import{a as Ze}from"./index-BkWBfb-P.js";import{g as Ge}from"./scroll-BCz3Esio.js";const Je=(s,c)=>{if(!X||!s||!c)return!1;const n=s.getBoundingClientRect();let v;return c instanceof Element?v=c.getBoundingClientRect():v={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},n.top<v.bottom&&n.bottom>v.top&&n.right>v.left&&n.left<v.right},ba=s=>{let c,n;return s.type==="touchend"?(n=s.changedTouches[0].clientY,c=s.changedTouches[0].clientX):s.type.startsWith("touch")?(n=s.touches[0].clientY,c=s.touches[0].clientX):(n=s.clientY,c=s.clientX),{clientX:c,clientY:n}};var Qe="Expected a function";function ie(s,c,n){var v=!0,r=!0;if(typeof s!="function")throw new TypeError(Qe);return Ie(n)&&(v="leading"in n?!!n.leading:v,r="trailing"in n?!!n.trailing:r),Ue(s,c,{leading:v,maxWait:c,trailing:r})}const ea=ge({urlList:{type:H(Array),default:()=>me([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:H(String)}}),aa={close:()=>!0,switch:s=>ce(s),rotate:s=>ce(s)},ta=["src","crossorigin"],na=ne({name:"ElImageViewer"}),sa=ne({...na,props:ea,emits:aa,setup(s,{expose:c,emit:n}){var v;const r=s,y={CONTAIN:{name:"contain",icon:ve(_e)},ORIGINAL:{name:"original",icon:ve(Ce)}},{t:se}=ye(),u=we("image-viewer"),{nextZIndex:B}=Le(),E=k(),N=k([]),O=ze(),I=k(!0),d=k(r.initialIndex),R=Se(y.CONTAIN),o=k({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),M=k((v=r.zIndex)!=null?v:B()),le=w(()=>{const{urlList:t}=r;return t.length<=1}),W=w(()=>d.value===0),j=w(()=>d.value===r.urlList.length-1),V=w(()=>r.urlList[d.value]),oe=w(()=>[u.e("btn"),u.e("prev"),u.is("disabled",!r.infinite&&W.value)]),K=w(()=>[u.e("btn"),u.e("next"),u.is("disabled",!r.infinite&&j.value)]),P=w(()=>{const{scale:t,deg:l,offsetX:i,offsetY:_,enableTransition:L}=o.value;let g=i/t,C=_/t;switch(l%360){case 90:case-270:[g,C]=[C,-g];break;case 180:case-180:[g,C]=[-g,-C];break;case 270:case-90:[g,C]=[-C,g];break}const $={transform:`scale(${t}) rotate(${l}deg) translate(${g}px, ${C}px)`,transition:L?"transform .3s":""};return R.value.name===y.CONTAIN.name&&($.maxWidth=$.maxHeight="100%"),$});function D(){q(),n("close")}function re(){const t=ie(i=>{switch(i.code){case A.esc:r.closeOnPressEscape&&D();break;case A.space:Q();break;case A.left:ee();break;case A.up:f("zoomIn");break;case A.right:a();break;case A.down:f("zoomOut");break}}),l=ie(i=>{const _=i.deltaY||i.deltaX;f(_<0?"zoomIn":"zoomOut",{zoomRate:r.zoomRate,enableTransition:!1})});O.run(()=>{Y(document,"keydown",t),Y(document,"wheel",l)})}function q(){O.stop()}function U(){I.value=!1}function Z(t){I.value=!1,t.target.alt=se("el.image.error")}function G(t){if(I.value||t.button!==0||!E.value)return;o.value.enableTransition=!1;const{offsetX:l,offsetY:i}=o.value,_=t.pageX,L=t.pageY,g=ie($=>{o.value={...o.value,offsetX:l+$.pageX-_,offsetY:i+$.pageY-L}}),C=Y(document,"mousemove",g);Y(document,"mouseup",()=>{C()}),t.preventDefault()}function J(){o.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function Q(){if(I.value)return;const t=De(y),l=Object.values(y),i=R.value.name,L=(l.findIndex(g=>g.name===i)+1)%t.length;R.value=y[t[L]],J()}function F(t){const l=r.urlList.length;d.value=(t+l)%l}function ee(){W.value&&!r.infinite||F(d.value-1)}function a(){j.value&&!r.infinite||F(d.value+1)}function f(t,l={}){if(I.value)return;const{minScale:i,maxScale:_}=r,{zoomRate:L,rotateDeg:g,enableTransition:C}={zoomRate:r.zoomRate,rotateDeg:90,enableTransition:!0,...l};switch(t){case"zoomOut":o.value.scale>i&&(o.value.scale=Number.parseFloat((o.value.scale/L).toFixed(3)));break;case"zoomIn":o.value.scale<_&&(o.value.scale=Number.parseFloat((o.value.scale*L).toFixed(3)));break;case"clockwise":o.value.deg+=g,n("rotate",o.value.deg);break;case"anticlockwise":o.value.deg-=g,n("rotate",o.value.deg);break}o.value.enableTransition=C}return ue(V,()=>{he(()=>{const t=N.value[0];t!=null&&t.complete||(I.value=!0)})}),ue(d,t=>{J(),n("switch",t)}),be(()=>{var t,l;re(),(l=(t=E.value)==null?void 0:t.focus)==null||l.call(t)}),c({setActiveItem:F}),(t,l)=>(b(),de(Pe,{to:"body",disabled:!t.teleported},[m(Ve,{name:"viewer-fade",appear:""},{default:z(()=>[h("div",{ref_key:"wrapper",ref:E,tabindex:-1,class:p(e(u).e("wrapper")),style:fe({zIndex:M.value})},[h("div",{class:p(e(u).e("mask")),onClick:l[0]||(l[0]=Ee(i=>t.hideOnClickModal&&D(),["self"]))},null,2),S(" CLOSE "),h("span",{class:p([e(u).e("btn"),e(u).e("close")]),onClick:D},[m(e(x),null,{default:z(()=>[m(e(Ne))]),_:1})],2),S(" ARROW "),e(le)?S("v-if",!0):(b(),T(te,{key:0},[h("span",{class:p(e(oe)),onClick:ee},[m(e(x),null,{default:z(()=>[m(e(Te))]),_:1})],2),h("span",{class:p(e(K)),onClick:a},[m(e(x),null,{default:z(()=>[m(e(xe))]),_:1})],2)],64)),S(" ACTIONS "),h("div",{class:p([e(u).e("btn"),e(u).e("actions")])},[h("div",{class:p(e(u).e("actions__inner"))},[m(e(x),{onClick:l[1]||(l[1]=i=>f("zoomOut"))},{default:z(()=>[m(e(Oe))]),_:1}),m(e(x),{onClick:l[2]||(l[2]=i=>f("zoomIn"))},{default:z(()=>[m(e(Re))]),_:1}),h("i",{class:p(e(u).e("actions__divider"))},null,2),m(e(x),{onClick:Q},{default:z(()=>[(b(),de($e(e(R).icon)))]),_:1}),h("i",{class:p(e(u).e("actions__divider"))},null,2),m(e(x),{onClick:l[3]||(l[3]=i=>f("anticlockwise"))},{default:z(()=>[m(e(Ae))]),_:1}),m(e(x),{onClick:l[4]||(l[4]=i=>f("clockwise"))},{default:z(()=>[m(e(Xe))]),_:1})],2)],2),S(" CANVAS "),h("div",{class:p(e(u).e("canvas"))},[(b(!0),T(te,null,Ye(t.urlList,(i,_)=>Be((b(),T("img",{ref_for:!0,ref:L=>N.value[_]=L,key:i,src:i,style:fe(e(P)),class:p(e(u).e("img")),crossorigin:t.crossorigin,onLoad:U,onError:Z,onMousedown:G},null,46,ta)),[[Me,_===d.value]])),128))],2),ae(t.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var la=pe(sa,[["__file","image-viewer.vue"]]);const oa=ke(la),ra=ge({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:H([String,Object])},previewSrcList:{type:H(Array),default:()=>me([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:H(String)}}),ia={load:s=>s instanceof Event,error:s=>s instanceof Event,switch:s=>ce(s),close:()=>!0,show:()=>!0},ca=["src","loading","crossorigin"],ua={key:0},da=ne({name:"ElImage",inheritAttrs:!1}),fa=ne({...da,props:ra,emits:ia,setup(s,{emit:c}){const n=s;let v="";const{t:r}=ye(),y=we("image"),se=Fe(),u=Ze(),B=k(),E=k(!1),N=k(!0),O=k(!1),I=k(),d=k(),R=X&&"loading"in HTMLImageElement.prototype;let o,M;const le=w(()=>[y.e("inner"),V.value&&y.e("preview"),N.value&&y.is("loading")]),W=w(()=>se.style),j=w(()=>{const{fit:a}=n;return X&&a?{objectFit:a}:{}}),V=w(()=>{const{previewSrcList:a}=n;return Array.isArray(a)&&a.length>0}),oe=w(()=>{const{previewSrcList:a,initialIndex:f}=n;let t=f;return f>a.length-1&&(t=0),t}),K=w(()=>n.loading==="eager"?!1:!R&&n.loading==="lazy"||n.lazy),P=()=>{X&&(N.value=!0,E.value=!1,B.value=n.src)};function D(a){N.value=!1,E.value=!1,c("load",a)}function re(a){N.value=!1,E.value=!0,c("error",a)}function q(){Je(I.value,d.value)&&(P(),G())}const U=He(q,200,!0);async function Z(){var a;if(!X)return;await he();const{scrollContainer:f}=n;je(f)?d.value=f:Ke(f)&&f!==""?d.value=(a=document.querySelector(f))!=null?a:void 0:I.value&&(d.value=Ge(I.value)),d.value&&(o=Y(d,"scroll",U),setTimeout(()=>q(),100))}function G(){!X||!d.value||!U||(o==null||o(),d.value=void 0)}function J(a){if(a.ctrlKey){if(a.deltaY<0)return a.preventDefault(),!1;if(a.deltaY>0)return a.preventDefault(),!1}}function Q(){V.value&&(M=Y("wheel",J,{passive:!1}),v=document.body.style.overflow,document.body.style.overflow="hidden",O.value=!0,c("show"))}function F(){M==null||M(),document.body.style.overflow=v,O.value=!1,c("close")}function ee(a){c("switch",a)}return ue(()=>n.src,()=>{K.value?(N.value=!0,E.value=!1,G(),Z()):P()}),be(()=>{K.value?Z():P()}),(a,f)=>(b(),T("div",{ref_key:"container",ref:I,class:p([e(y).b(),a.$attrs.class]),style:fe(e(W))},[E.value?ae(a.$slots,"error",{key:0},()=>[h("div",{class:p(e(y).e("error"))},qe(e(r)("el.image.error")),3)]):(b(),T(te,{key:1},[B.value!==void 0?(b(),T("img",We({key:0},e(u),{src:B.value,loading:a.loading,style:e(j),class:e(le),crossorigin:a.crossorigin,onClick:Q,onLoad:D,onError:re}),null,16,ca)):S("v-if",!0),N.value?(b(),T("div",{key:1,class:p(e(y).e("wrapper"))},[ae(a.$slots,"placeholder",{},()=>[h("div",{class:p(e(y).e("placeholder"))},null,2)])],2)):S("v-if",!0)],64)),e(V)?(b(),T(te,{key:2},[O.value?(b(),de(e(oa),{key:0,"z-index":a.zIndex,"initial-index":e(oe),infinite:a.infinite,"zoom-rate":a.zoomRate,"min-scale":a.minScale,"max-scale":a.maxScale,"url-list":a.previewSrcList,"hide-on-click-modal":a.hideOnClickModal,teleported:a.previewTeleported,"close-on-press-escape":a.closeOnPressEscape,onClose:F,onSwitch:ee},{default:z(()=>[a.$slots.viewer?(b(),T("div",ua,[ae(a.$slots,"viewer")])):S("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):S("v-if",!0)],64)):S("v-if",!0)],6))}});var va=pe(fa,[["__file","image.vue"]]);const ka=ke(va);export{ka as E,ba as g};