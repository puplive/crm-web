import{bS as Ot,bT as it,v as O,bU as st,bF as C,l as M,bV as Mt,bW as It,e as $,a7 as B,aE as At,E as ot,bX as Et,bY as kt,bZ as L,bj as ft,bs as Pt,bi as D,bh as ut,b_ as ct,bB as Rt,bq as Tt,bC as Ht,b$ as Ft,a2 as Nt,c0 as Ct,B as $t,c1 as Bt,I as lt,c2 as ht,b1 as dt,c3 as pt,c4 as gt,a4 as jt,b2 as Wt,av as Lt,ac as bt,a as P,bG as Dt,k as Gt,j as vt,d as mt,u as Ut,o as Vt,f as zt,r as qt,m as Qt,al as Kt,h as Jt}from"./index-BsE-9rTm.js";function S(t){var e;const r=st(t);return(e=r==null?void 0:r.$el)!=null?e:r}const I=B?window:void 0,Xt=B?window.document:void 0;function _(...t){let e,r,n,a;if(Ot(t[0])||Array.isArray(t[0])?([r,n,a]=t,e=I):[e,r,n,a]=t,!e)return it;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const i=[],s=()=>{i.forEach(l=>l()),i.length=0},o=(l,d,f,c)=>(l.addEventListener(d,f,c),()=>l.removeEventListener(d,f,c)),u=O(()=>[S(e),st(a)],([l,d])=>{s(),l&&i.push(...r.flatMap(f=>n.map(c=>o(l,f,c,d))))},{immediate:!0,flush:"post"}),b=()=>{u(),s()};return C(b),b}let G=!1;function ir(t,e,r={}){const{window:n=I,ignore:a=[],capture:i=!0,detectIframe:s=!1}=r;if(!n)return;At&&!G&&(G=!0,Array.from(n.document.body.children).forEach(f=>f.addEventListener("click",it)));let o=!0;const u=f=>a.some(c=>{if(typeof c=="string")return Array.from(n.document.querySelectorAll(c)).some(p=>p===f.target||f.composedPath().includes(p));{const p=S(c);return p&&(f.target===p||f.composedPath().includes(p))}}),l=[_(n,"click",f=>{const c=S(t);if(!(!c||c===f.target||f.composedPath().includes(c))){if(f.detail===0&&(o=!u(f)),!o){o=!0;return}e(f)}},{passive:!0,capture:i}),_(n,"pointerdown",f=>{const c=S(t);c&&(o=!f.composedPath().includes(c)&&!u(f))},{passive:!0}),s&&_(n,"blur",f=>{var c;const p=S(t);((c=n.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(p!=null&&p.contains(n.document.activeElement))&&e(f)})].filter(Boolean);return()=>l.forEach(f=>f())}function yt(t,e=!1){const r=M(),n=()=>r.value=!!t();return n(),Mt(n,e),r}function Yt(t){return JSON.parse(JSON.stringify(t))}const U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V="__vueuse_ssr_handlers__";U[V]=U[V]||{};function sr({document:t=Xt}={}){if(!t)return M("visible");const e=M(t.visibilityState);return _(t,"visibilitychange",()=>{e.value=t.visibilityState}),e}var z=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,ee=(t,e)=>{var r={};for(var n in t)Zt.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&z)for(var n of z(t))e.indexOf(n)<0&&te.call(t,n)&&(r[n]=t[n]);return r};function or(t,e,r={}){const n=r,{window:a=I}=n,i=ee(n,["window"]);let s;const o=yt(()=>a&&"ResizeObserver"in a),u=()=>{s&&(s.disconnect(),s=void 0)},b=O(()=>S(t),d=>{u(),o.value&&a&&d&&(s=new ResizeObserver(e),s.observe(d,i))},{immediate:!0,flush:"post"}),l=()=>{u(),b()};return C(l),{isSupported:o,stop:l}}var q=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,ae=(t,e)=>{var r={};for(var n in t)re.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&q)for(var n of q(t))e.indexOf(n)<0&&ne.call(t,n)&&(r[n]=t[n]);return r};function fr(t,e,r={}){const n=r,{window:a=I}=n,i=ae(n,["window"]);let s;const o=yt(()=>a&&"MutationObserver"in a),u=()=>{s&&(s.disconnect(),s=void 0)},b=O(()=>S(t),d=>{u(),o.value&&a&&d&&(s=new MutationObserver(e),s.observe(d,i))},{immediate:!0}),l=()=>{u(),b()};return C(l),{isSupported:o,stop:l}}var Q;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Q||(Q={}));var ie=Object.defineProperty,K=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,J=(t,e,r)=>e in t?ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,fe=(t,e)=>{for(var r in e||(e={}))se.call(e,r)&&J(t,r,e[r]);if(K)for(var r of K(e))oe.call(e,r)&&J(t,r,e[r]);return t};const ue={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};fe({linear:It},ue);function ur(t,e,r,n={}){var a,i,s;const{clone:o=!1,passive:u=!1,eventName:b,deep:l=!1,defaultValue:d}=n,f=ot(),c=(f==null?void 0:f.emit)||((a=f==null?void 0:f.$emit)==null?void 0:a.bind(f))||((s=(i=f==null?void 0:f.proxy)==null?void 0:i.$emit)==null?void 0:s.bind(f==null?void 0:f.proxy));let p=b;p=b||p||`update:${e.toString()}`;const j=w=>o?Et(o)?o(w):Yt(w):w,W=()=>kt(t[e])?j(t[e]):d;if(u){const w=W(),R=M(w);return O(()=>t[e],A=>R.value=j(A)),O(R,A=>{(A!==t[e]||l)&&c(p,A)},{deep:l}),R}else return $({get(){return W()},set(w){c(p,w)}})}function cr({window:t=I}={}){if(!t)return M(!1);const e=M(t.document.hasFocus());return _(t,"blur",()=>{e.value=!1}),_(t,"focus",()=>{e.value=!0}),e}function ce(t){return t}function le(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var he=800,de=16,pe=Date.now;function ge(t){var e=0,r=0;return function(){var n=pe(),a=de-(n-r);if(r=n,a>0){if(++e>=he)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function be(t){return function(){return t}}var ve=L?function(t,e){return L(t,"toString",{configurable:!0,enumerable:!1,value:be(e),writable:!0})}:ce,me=ge(ve),X=Math.max;function ye(t,e,r){return e=X(e===void 0?t.length-1:e,0),function(){for(var n=arguments,a=-1,i=X(n.length-e,0),s=Array(i);++a<i;)s[a]=n[e+a];a=-1;for(var o=Array(e+1);++a<e;)o[a]=n[a];return o[e]=r(s),le(t,this,o)}}var we=9007199254740991;function Se(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=we}var xe="[object Arguments]";function Y(t){return ft(t)&&Pt(t)==xe}var wt=Object.prototype,_e=wt.hasOwnProperty,Oe=wt.propertyIsEnumerable,St=Y(function(){return arguments}())?Y:function(t){return ft(t)&&_e.call(t,"callee")&&!Oe.call(t,"callee")};function Me(t,e){for(var r=-1,n=e.length,a=t.length;++r<n;)t[a+r]=e[r];return t}var Z=D?D.isConcatSpreadable:void 0;function Ie(t){return ut(t)||St(t)||!!(Z&&t&&t[Z])}function Ae(t,e,r,n,a){var i=-1,s=t.length;for(r||(r=Ie),a||(a=[]);++i<s;){var o=t[i];r(o)?Me(a,o):n||(a[a.length]=o)}return a}function Ee(t){var e=t==null?0:t.length;return e?Ae(t):[]}function ke(t){return me(ye(t,void 0,Ee),t+"")}function Pe(t,e){return t!=null&&e in Object(t)}function Re(t,e,r){e=ct(e,t);for(var n=-1,a=e.length,i=!1;++n<a;){var s=Rt(e[n]);if(!(i=t!=null&&r(t,s)))break;t=t[s]}return i||++n!=a?i:(a=t==null?0:t.length,!!a&&Se(a)&&Tt(s,a)&&(ut(t)||St(t)))}function Te(t,e){return t!=null&&Re(t,e,Pe)}function He(t,e,r){for(var n=-1,a=e.length,i={};++n<a;){var s=e[n],o=Ht(t,s);r(o,s)&&Ft(i,ct(s,t),o)}return i}function Fe(t,e){return He(t,e,function(r,n){return Te(t,n)})}var Ne=ke(function(t,e){return t==null?{}:Fe(t,e)});class Ce extends Error{constructor(e){super(e),this.name="ElementPlusError"}}function lr(t,e){throw new Ce(`[${t}] ${e}`)}function hr(t,e){}const xt=(t="")=>t.split(" ").filter(e=>!!e.trim()),dr=(t,e)=>{if(!t||!e)return!1;if(e.includes(" "))throw new Error("className should not contain space.");return t.classList.contains(e)},pr=(t,e)=>{!t||!e.trim()||t.classList.add(...xt(e))},gr=(t,e)=>{!t||!e.trim()||t.classList.remove(...xt(e))},br=(t,e)=>{var r;if(!B||!t||!e)return"";let n=Bt(e);n==="float"&&(n="cssFloat");try{const a=t.style[n];if(a)return a;const i=(r=document.defaultView)==null?void 0:r.getComputedStyle(t,"");return i?i[n]:""}catch{return t.style[n]}};function $e(t,e="px"){if(!t)return"";if(Nt(t)||Ct(t))return`${t}${e}`;if($t(t))return t}const vr=lt([String,Object,Function]),mr={Close:bt},yr={Close:bt,SuccessFilled:ht,InfoFilled:gt,WarningFilled:dt,CircleCloseFilled:pt},wr={success:ht,warning:dt,error:pt,info:gt},Sr={validating:jt,success:Wt,error:Lt},xr={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},_r=t=>t,Or=({from:t,replacement:e,scope:r,version:n,ref:a,type:i="API"},s)=>{O(()=>P(s),o=>{},{immediate:!0})},tt={prefix:Math.floor(Math.random()*1e4),current:0},Be=Symbol("elIdInjection"),je=()=>ot()?Gt(Be,tt):tt,Mr=t=>{const e=je(),r=Dt();return $(()=>P(t)||`${r.value}-id-${e.prefix}-${e.current++}`)},We=vt({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),Ir=t=>Ne(We,t);var Le=(t,e)=>{const r=t.__vccOpts||t;for(const[n,a]of e)r[n]=a;return r};const De=vt({size:{type:lt([Number,String])},color:{type:String}}),Ge=mt({name:"ElIcon",inheritAttrs:!1}),Ue=mt({...Ge,props:De,setup(t){const e=t,r=Ut("icon"),n=$(()=>{const{size:a,color:i}=e;return!a&&!i?{}:{fontSize:Kt(a)?void 0:$e(a),"--color":i}});return(a,i)=>(Vt(),zt("i",Qt({class:P(r).b(),style:P(n)},a.$attrs),[qt(a.$slots,"default")],16))}});var Ve=Le(Ue,[["__file","icon.vue"]]);const Ar=Jt(Ve),Er=Symbol("formContextKey"),kr=Symbol("formItemContextKey");function h(t,e){ze(t)&&(t="100%");var r=qe(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function E(t){return Math.min(1,Math.max(0,t))}function ze(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function qe(t){return typeof t=="string"&&t.indexOf("%")!==-1}function _t(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function k(t){return t<=1?"".concat(Number(t)*100,"%"):t}function x(t){return t.length===1?"0"+t:String(t)}function Qe(t,e,r){return{r:h(t,255)*255,g:h(e,255)*255,b:h(r,255)*255}}function et(t,e,r){t=h(t,255),e=h(e,255),r=h(r,255);var n=Math.max(t,e,r),a=Math.min(t,e,r),i=0,s=0,o=(n+a)/2;if(n===a)s=0,i=0;else{var u=n-a;switch(s=o>.5?u/(2-n-a):u/(n+a),n){case t:i=(e-r)/u+(e<r?6:0);break;case e:i=(r-t)/u+2;break;case r:i=(t-e)/u+4;break}i/=6}return{h:i,s,l:o}}function T(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*(6*r):r<1/2?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function Ke(t,e,r){var n,a,i;if(t=h(t,360),e=h(e,100),r=h(r,100),e===0)a=r,i=r,n=r;else{var s=r<.5?r*(1+e):r+e-r*e,o=2*r-s;n=T(o,s,t+1/3),a=T(o,s,t),i=T(o,s,t-1/3)}return{r:n*255,g:a*255,b:i*255}}function rt(t,e,r){t=h(t,255),e=h(e,255),r=h(r,255);var n=Math.max(t,e,r),a=Math.min(t,e,r),i=0,s=n,o=n-a,u=n===0?0:o/n;if(n===a)i=0;else{switch(n){case t:i=(e-r)/o+(e<r?6:0);break;case e:i=(r-t)/o+2;break;case r:i=(t-e)/o+4;break}i/=6}return{h:i,s:u,v:s}}function Je(t,e,r){t=h(t,360)*6,e=h(e,100),r=h(r,100);var n=Math.floor(t),a=t-n,i=r*(1-e),s=r*(1-a*e),o=r*(1-(1-a)*e),u=n%6,b=[r,s,i,i,o,r][u],l=[o,r,r,s,i,i][u],d=[i,i,o,r,r,s][u];return{r:b*255,g:l*255,b:d*255}}function nt(t,e,r,n){var a=[x(Math.round(t).toString(16)),x(Math.round(e).toString(16)),x(Math.round(r).toString(16))];return n&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function Xe(t,e,r,n,a){var i=[x(Math.round(t).toString(16)),x(Math.round(e).toString(16)),x(Math.round(r).toString(16)),x(Ye(n))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Ye(t){return Math.round(parseFloat(t)*255).toString(16)}function at(t){return g(t)/255}function g(t){return parseInt(t,16)}function Ze(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var N={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function tr(t){var e={r:0,g:0,b:0},r=1,n=null,a=null,i=null,s=!1,o=!1;return typeof t=="string"&&(t=nr(t)),typeof t=="object"&&(m(t.r)&&m(t.g)&&m(t.b)?(e=Qe(t.r,t.g,t.b),s=!0,o=String(t.r).substr(-1)==="%"?"prgb":"rgb"):m(t.h)&&m(t.s)&&m(t.v)?(n=k(t.s),a=k(t.v),e=Je(t.h,n,a),s=!0,o="hsv"):m(t.h)&&m(t.s)&&m(t.l)&&(n=k(t.s),i=k(t.l),e=Ke(t.h,n,i),s=!0,o="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(r=t.a)),r=_t(r),{ok:s,format:t.format||o,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:r}}var er="[-\\+]?\\d+%?",rr="[-\\+]?\\d*\\.\\d+%?",y="(?:".concat(rr,")|(?:").concat(er,")"),H="[\\s|\\(]+(".concat(y,")[,|\\s]+(").concat(y,")[,|\\s]+(").concat(y,")\\s*\\)?"),F="[\\s|\\(]+(".concat(y,")[,|\\s]+(").concat(y,")[,|\\s]+(").concat(y,")[,|\\s]+(").concat(y,")\\s*\\)?"),v={CSS_UNIT:new RegExp(y),rgb:new RegExp("rgb"+H),rgba:new RegExp("rgba"+F),hsl:new RegExp("hsl"+H),hsla:new RegExp("hsla"+F),hsv:new RegExp("hsv"+H),hsva:new RegExp("hsva"+F),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function nr(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(N[t])t=N[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r=v.rgb.exec(t);return r?{r:r[1],g:r[2],b:r[3]}:(r=v.rgba.exec(t),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=v.hsl.exec(t),r?{h:r[1],s:r[2],l:r[3]}:(r=v.hsla.exec(t),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=v.hsv.exec(t),r?{h:r[1],s:r[2],v:r[3]}:(r=v.hsva.exec(t),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=v.hex8.exec(t),r?{r:g(r[1]),g:g(r[2]),b:g(r[3]),a:at(r[4]),format:e?"name":"hex8"}:(r=v.hex6.exec(t),r?{r:g(r[1]),g:g(r[2]),b:g(r[3]),format:e?"name":"hex"}:(r=v.hex4.exec(t),r?{r:g(r[1]+r[1]),g:g(r[2]+r[2]),b:g(r[3]+r[3]),a:at(r[4]+r[4]),format:e?"name":"hex8"}:(r=v.hex3.exec(t),r?{r:g(r[1]+r[1]),g:g(r[2]+r[2]),b:g(r[3]+r[3]),format:e?"name":"hex"}:!1)))))))))}function m(t){return!!v.CSS_UNIT.exec(String(t))}var Pr=function(){function t(e,r){e===void 0&&(e=""),r===void 0&&(r={});var n;if(e instanceof t)return e;typeof e=="number"&&(e=Ze(e)),this.originalInput=e;var a=tr(e);this.originalInput=e,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=(n=r.format)!==null&&n!==void 0?n:a.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),r,n,a,i=e.r/255,s=e.g/255,o=e.b/255;return i<=.03928?r=i/12.92:r=Math.pow((i+.055)/1.055,2.4),s<=.03928?n=s/12.92:n=Math.pow((s+.055)/1.055,2.4),o<=.03928?a=o/12.92:a=Math.pow((o+.055)/1.055,2.4),.2126*r+.7152*n+.0722*a},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=_t(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},t.prototype.toHsv=function(){var e=rt(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=rt(this.r,this.g,this.b),r=Math.round(e.h*360),n=Math.round(e.s*100),a=Math.round(e.v*100);return this.a===1?"hsv(".concat(r,", ").concat(n,"%, ").concat(a,"%)"):"hsva(".concat(r,", ").concat(n,"%, ").concat(a,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=et(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=et(this.r,this.g,this.b),r=Math.round(e.h*360),n=Math.round(e.s*100),a=Math.round(e.l*100);return this.a===1?"hsl(".concat(r,", ").concat(n,"%, ").concat(a,"%)"):"hsla(".concat(r,", ").concat(n,"%, ").concat(a,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),nt(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),Xe(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),r=Math.round(this.g),n=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(r,", ").concat(n,")"):"rgba(".concat(e,", ").concat(r,", ").concat(n,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(r){return"".concat(Math.round(h(r,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(r){return Math.round(h(r,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+nt(this.r,this.g,this.b,!1),r=0,n=Object.entries(N);r<n.length;r++){var a=n[r],i=a[0],s=a[1];if(e===s)return i}return!1},t.prototype.toString=function(e){var r=!!e;e=e??this.format;var n=!1,a=this.a<1&&this.a>=0,i=!r&&a&&(e.startsWith("hex")||e==="name");return i?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var r=this.toHsl();return r.l+=e/100,r.l=E(r.l),new t(r)},t.prototype.brighten=function(e){e===void 0&&(e=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(e/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(e/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(e/100)))),new t(r)},t.prototype.darken=function(e){e===void 0&&(e=10);var r=this.toHsl();return r.l-=e/100,r.l=E(r.l),new t(r)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var r=this.toHsl();return r.s-=e/100,r.s=E(r.s),new t(r)},t.prototype.saturate=function(e){e===void 0&&(e=10);var r=this.toHsl();return r.s+=e/100,r.s=E(r.s),new t(r)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var r=this.toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,new t(r)},t.prototype.mix=function(e,r){r===void 0&&(r=50);var n=this.toRgb(),a=new t(e).toRgb(),i=r/100,s={r:(a.r-n.r)*i+n.r,g:(a.g-n.g)*i+n.g,b:(a.b-n.b)*i+n.b,a:(a.a-n.a)*i+n.a};return new t(s)},t.prototype.analogous=function(e,r){e===void 0&&(e=6),r===void 0&&(r=30);var n=this.toHsl(),a=360/r,i=[this];for(n.h=(n.h-(a*e>>1)+720)%360;--e;)n.h=(n.h+a)%360,i.push(new t(n));return i},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var r=this.toHsv(),n=r.h,a=r.s,i=r.v,s=[],o=1/e;e--;)s.push(new t({h:n,s:a,v:i})),i=(i+o)%1;return s},t.prototype.splitcomplement=function(){var e=this.toHsl(),r=e.h;return[this,new t({h:(r+72)%360,s:e.s,l:e.l}),new t({h:(r+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var r=this.toRgb(),n=new t(e).toRgb(),a=r.a+n.a*(1-r.a);return new t({r:(r.r*r.a+n.r*n.a*(1-r.a))/a,g:(r.g*r.a+n.g*n.a*(1-r.a))/a,b:(r.b*r.a+n.b*n.a*(1-r.a))/a,a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var r=this.toHsl(),n=r.h,a=[this],i=360/e,s=1;s<e;s++)a.push(new t({h:(n+s*i)%360,s:r.s,l:r.l}));return a},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();export{kr as A,St as B,mr as C,me as D,xr as E,ye as F,ce as G,Ne as H,Te as I,je as J,S as K,Se as L,Pr as T,Sr as V,Le as _,pr as a,Ar as b,Ir as c,$e as d,hr as e,Or as f,yr as g,dr as h,vr as i,wr as j,Mr as k,Ae as l,_r as m,br as n,ir as o,Ee as p,fr as q,gr as r,sr as s,lr as t,or as u,cr as v,_ as w,ur as x,Me as y,Er as z};
