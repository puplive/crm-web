import{bZ as M,bg as F,bs as X,bf as w,be as P,b_ as C,bB as Q,bq as tt,bC as et,b$ as rt,ap as nt,c0 as at,B as it,a1 as st,c1 as ot,I as N,c2 as O,aY as B,c3 as $,c4 as G,ab as ft,aZ as ht,am as ut,a7 as W,v as ct,a as v,bG as lt,e as L,E as dt,k as gt,j,d as q,u as pt,o as bt,f as vt,r as mt,m as yt,ae as xt,h as St}from"./index-DVHkByco.js";function Mt(t){return t}function wt(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var kt=800,At=16,Ht=Date.now;function It(t){var e=0,r=0;return function(){var n=Ht(),a=At-(n-r);if(r=n,a>0){if(++e>=kt)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Rt(t){return function(){return t}}var _t=M?function(t,e){return M(t,"toString",{configurable:!0,enumerable:!1,value:Rt(e),writable:!0})}:Mt,Tt=It(_t),k=Math.max;function Et(t,e,r){return e=k(e===void 0?t.length-1:e,0),function(){for(var n=arguments,a=-1,i=k(n.length-e,0),s=Array(i);++a<i;)s[a]=n[e+a];a=-1;for(var o=Array(e+1);++a<e;)o[a]=n[a];return o[e]=r(s),wt(t,this,o)}}var Ft=9007199254740991;function Pt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Ft}var Ct="[object Arguments]";function A(t){return F(t)&&X(t)==Ct}var D=Object.prototype,Nt=D.hasOwnProperty,Ot=D.propertyIsEnumerable,U=A(function(){return arguments}())?A:function(t){return F(t)&&Nt.call(t,"callee")&&!Ot.call(t,"callee")};function Bt(t,e){for(var r=-1,n=e.length,a=t.length;++r<n;)t[a+r]=e[r];return t}var H=w?w.isConcatSpreadable:void 0;function $t(t){return P(t)||U(t)||!!(H&&t&&t[H])}function z(t,e,r,n,a){var i=-1,s=t.length;for(r||(r=$t),a||(a=[]);++i<s;){var o=t[i];e>0&&r(o)?e>1?z(o,e-1,r,n,a):Bt(a,o):n||(a[a.length]=o)}return a}function Gt(t){var e=t==null?0:t.length;return e?z(t,1):[]}function Wt(t){return Tt(Et(t,void 0,Gt),t+"")}function Lt(t,e){return t!=null&&e in Object(t)}function jt(t,e,r){e=C(e,t);for(var n=-1,a=e.length,i=!1;++n<a;){var s=Q(e[n]);if(!(i=t!=null&&r(t,s)))break;t=t[s]}return i||++n!=a?i:(a=t==null?0:t.length,!!a&&Pt(a)&&tt(s,a)&&(P(t)||U(t)))}function qt(t,e){return t!=null&&jt(t,e,Lt)}function Dt(t,e,r){for(var n=-1,a=e.length,i={};++n<a;){var s=e[n],o=et(t,s);r(o,s)&&rt(i,C(s,t),o)}return i}function Ut(t,e){return Dt(t,e,function(r,n){return qt(t,n)})}var zt=Wt(function(t,e){return t==null?{}:Ut(t,e)});class Vt extends Error{constructor(e){super(e),this.name="ElementPlusError"}}function be(t,e){throw new Vt(`[${t}] ${e}`)}function ve(t,e){}const V=(t="")=>t.split(" ").filter(e=>!!e.trim()),me=(t,e)=>{if(!t||!e)return!1;if(e.includes(" "))throw new Error("className should not contain space.");return t.classList.contains(e)},ye=(t,e)=>{!t||!e.trim()||t.classList.add(...V(e))},xe=(t,e)=>{!t||!e.trim()||t.classList.remove(...V(e))},Se=(t,e)=>{var r;if(!st||!t||!e)return"";let n=ot(e);n==="float"&&(n="cssFloat");try{const a=t.style[n];if(a)return a;const i=(r=document.defaultView)==null?void 0:r.getComputedStyle(t,"");return i?i[n]:""}catch{return t.style[n]}};function Kt(t,e="px"){if(!t)return"";if(nt(t)||at(t))return`${t}${e}`;if(it(t))return t}const Me=N([String,Object,Function]),we={Close:W},ke={Close:W,SuccessFilled:O,InfoFilled:G,WarningFilled:B,CircleCloseFilled:$},Ae={success:O,warning:B,error:$,info:G},He={validating:ft,success:ht,error:ut},Ie=({from:t,replacement:e,scope:r,version:n,ref:a,type:i="API"},s)=>{ct(()=>v(s),o=>{},{immediate:!0})},I={prefix:Math.floor(Math.random()*1e4),current:0},Zt=Symbol("elIdInjection"),Yt=()=>dt()?gt(Zt,I):I,Re=t=>{const e=Yt(),r=lt();return L(()=>v(t)||`${r.value}-id-${e.prefix}-${e.current++}`)},Jt=j({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),_e=t=>zt(Jt,t);var Xt=(t,e)=>{const r=t.__vccOpts||t;for(const[n,a]of e)r[n]=a;return r};const Qt=j({size:{type:N([Number,String])},color:{type:String}}),te=q({name:"ElIcon",inheritAttrs:!1}),ee=q({...te,props:Qt,setup(t){const e=t,r=pt("icon"),n=L(()=>{const{size:a,color:i}=e;return!a&&!i?{}:{fontSize:xt(a)?void 0:Kt(a),"--color":i}});return(a,i)=>(bt(),vt("i",yt({class:v(r).b(),style:v(n)},a.$attrs),[mt(a.$slots,"default")],16))}});var re=Xt(ee,[["__file","icon.vue"]]);const Te=St(re),Ee=Symbol("formContextKey"),Fe=Symbol("formItemContextKey");function f(t,e){ne(t)&&(t="100%");var r=ae(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function p(t){return Math.min(1,Math.max(0,t))}function ne(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function ae(t){return typeof t=="string"&&t.indexOf("%")!==-1}function K(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function b(t){return t<=1?"".concat(Number(t)*100,"%"):t}function g(t){return t.length===1?"0"+t:String(t)}function ie(t,e,r){return{r:f(t,255)*255,g:f(e,255)*255,b:f(r,255)*255}}function R(t,e,r){t=f(t,255),e=f(e,255),r=f(r,255);var n=Math.max(t,e,r),a=Math.min(t,e,r),i=0,s=0,o=(n+a)/2;if(n===a)s=0,i=0;else{var u=n-a;switch(s=o>.5?u/(2-n-a):u/(n+a),n){case t:i=(e-r)/u+(e<r?6:0);break;case e:i=(r-t)/u+2;break;case r:i=(t-e)/u+4;break}i/=6}return{h:i,s,l:o}}function m(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*(6*r):r<1/2?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function se(t,e,r){var n,a,i;if(t=f(t,360),e=f(e,100),r=f(r,100),e===0)a=r,i=r,n=r;else{var s=r<.5?r*(1+e):r+e-r*e,o=2*r-s;n=m(o,s,t+1/3),a=m(o,s,t),i=m(o,s,t-1/3)}return{r:n*255,g:a*255,b:i*255}}function _(t,e,r){t=f(t,255),e=f(e,255),r=f(r,255);var n=Math.max(t,e,r),a=Math.min(t,e,r),i=0,s=n,o=n-a,u=n===0?0:o/n;if(n===a)i=0;else{switch(n){case t:i=(e-r)/o+(e<r?6:0);break;case e:i=(r-t)/o+2;break;case r:i=(t-e)/o+4;break}i/=6}return{h:i,s:u,v:s}}function oe(t,e,r){t=f(t,360)*6,e=f(e,100),r=f(r,100);var n=Math.floor(t),a=t-n,i=r*(1-e),s=r*(1-a*e),o=r*(1-(1-a)*e),u=n%6,Z=[r,s,i,i,o,r][u],Y=[o,r,r,s,i,i][u],J=[i,i,o,r,r,s][u];return{r:Z*255,g:Y*255,b:J*255}}function T(t,e,r,n){var a=[g(Math.round(t).toString(16)),g(Math.round(e).toString(16)),g(Math.round(r).toString(16))];return n&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function fe(t,e,r,n,a){var i=[g(Math.round(t).toString(16)),g(Math.round(e).toString(16)),g(Math.round(r).toString(16)),g(he(n))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function he(t){return Math.round(parseFloat(t)*255).toString(16)}function E(t){return h(t)/255}function h(t){return parseInt(t,16)}function ue(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var S={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ce(t){var e={r:0,g:0,b:0},r=1,n=null,a=null,i=null,s=!1,o=!1;return typeof t=="string"&&(t=ge(t)),typeof t=="object"&&(l(t.r)&&l(t.g)&&l(t.b)?(e=ie(t.r,t.g,t.b),s=!0,o=String(t.r).substr(-1)==="%"?"prgb":"rgb"):l(t.h)&&l(t.s)&&l(t.v)?(n=b(t.s),a=b(t.v),e=oe(t.h,n,a),s=!0,o="hsv"):l(t.h)&&l(t.s)&&l(t.l)&&(n=b(t.s),i=b(t.l),e=se(t.h,n,i),s=!0,o="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(r=t.a)),r=K(r),{ok:s,format:t.format||o,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:r}}var le="[-\\+]?\\d+%?",de="[-\\+]?\\d*\\.\\d+%?",d="(?:".concat(de,")|(?:").concat(le,")"),y="[\\s|\\(]+(".concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")\\s*\\)?"),x="[\\s|\\(]+(".concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")\\s*\\)?"),c={CSS_UNIT:new RegExp(d),rgb:new RegExp("rgb"+y),rgba:new RegExp("rgba"+x),hsl:new RegExp("hsl"+y),hsla:new RegExp("hsla"+x),hsv:new RegExp("hsv"+y),hsva:new RegExp("hsva"+x),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ge(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(S[t])t=S[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r=c.rgb.exec(t);return r?{r:r[1],g:r[2],b:r[3]}:(r=c.rgba.exec(t),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=c.hsl.exec(t),r?{h:r[1],s:r[2],l:r[3]}:(r=c.hsla.exec(t),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=c.hsv.exec(t),r?{h:r[1],s:r[2],v:r[3]}:(r=c.hsva.exec(t),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=c.hex8.exec(t),r?{r:h(r[1]),g:h(r[2]),b:h(r[3]),a:E(r[4]),format:e?"name":"hex8"}:(r=c.hex6.exec(t),r?{r:h(r[1]),g:h(r[2]),b:h(r[3]),format:e?"name":"hex"}:(r=c.hex4.exec(t),r?{r:h(r[1]+r[1]),g:h(r[2]+r[2]),b:h(r[3]+r[3]),a:E(r[4]+r[4]),format:e?"name":"hex8"}:(r=c.hex3.exec(t),r?{r:h(r[1]+r[1]),g:h(r[2]+r[2]),b:h(r[3]+r[3]),format:e?"name":"hex"}:!1)))))))))}function l(t){return!!c.CSS_UNIT.exec(String(t))}var Pe=function(){function t(e,r){e===void 0&&(e=""),r===void 0&&(r={});var n;if(e instanceof t)return e;typeof e=="number"&&(e=ue(e)),this.originalInput=e;var a=ce(e);this.originalInput=e,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=(n=r.format)!==null&&n!==void 0?n:a.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),r,n,a,i=e.r/255,s=e.g/255,o=e.b/255;return i<=.03928?r=i/12.92:r=Math.pow((i+.055)/1.055,2.4),s<=.03928?n=s/12.92:n=Math.pow((s+.055)/1.055,2.4),o<=.03928?a=o/12.92:a=Math.pow((o+.055)/1.055,2.4),.2126*r+.7152*n+.0722*a},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=K(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},t.prototype.toHsv=function(){var e=_(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=_(this.r,this.g,this.b),r=Math.round(e.h*360),n=Math.round(e.s*100),a=Math.round(e.v*100);return this.a===1?"hsv(".concat(r,", ").concat(n,"%, ").concat(a,"%)"):"hsva(".concat(r,", ").concat(n,"%, ").concat(a,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=R(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=R(this.r,this.g,this.b),r=Math.round(e.h*360),n=Math.round(e.s*100),a=Math.round(e.l*100);return this.a===1?"hsl(".concat(r,", ").concat(n,"%, ").concat(a,"%)"):"hsla(".concat(r,", ").concat(n,"%, ").concat(a,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),T(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),fe(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),r=Math.round(this.g),n=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(r,", ").concat(n,")"):"rgba(".concat(e,", ").concat(r,", ").concat(n,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(r){return"".concat(Math.round(f(r,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(r){return Math.round(f(r,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+T(this.r,this.g,this.b,!1),r=0,n=Object.entries(S);r<n.length;r++){var a=n[r],i=a[0],s=a[1];if(e===s)return i}return!1},t.prototype.toString=function(e){var r=!!e;e=e??this.format;var n=!1,a=this.a<1&&this.a>=0,i=!r&&a&&(e.startsWith("hex")||e==="name");return i?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var r=this.toHsl();return r.l+=e/100,r.l=p(r.l),new t(r)},t.prototype.brighten=function(e){e===void 0&&(e=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(e/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(e/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(e/100)))),new t(r)},t.prototype.darken=function(e){e===void 0&&(e=10);var r=this.toHsl();return r.l-=e/100,r.l=p(r.l),new t(r)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var r=this.toHsl();return r.s-=e/100,r.s=p(r.s),new t(r)},t.prototype.saturate=function(e){e===void 0&&(e=10);var r=this.toHsl();return r.s+=e/100,r.s=p(r.s),new t(r)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var r=this.toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,new t(r)},t.prototype.mix=function(e,r){r===void 0&&(r=50);var n=this.toRgb(),a=new t(e).toRgb(),i=r/100,s={r:(a.r-n.r)*i+n.r,g:(a.g-n.g)*i+n.g,b:(a.b-n.b)*i+n.b,a:(a.a-n.a)*i+n.a};return new t(s)},t.prototype.analogous=function(e,r){e===void 0&&(e=6),r===void 0&&(r=30);var n=this.toHsl(),a=360/r,i=[this];for(n.h=(n.h-(a*e>>1)+720)%360;--e;)n.h=(n.h+a)%360,i.push(new t(n));return i},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var r=this.toHsv(),n=r.h,a=r.s,i=r.v,s=[],o=1/e;e--;)s.push(new t({h:n,s:a,v:i})),i=(i+o)%1;return s},t.prototype.splitcomplement=function(){var e=this.toHsl(),r=e.h;return[this,new t({h:(r+72)%360,s:e.s,l:e.l}),new t({h:(r+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var r=this.toRgb(),n=new t(e).toRgb(),a=r.a+n.a*(1-r.a);return new t({r:(r.r*r.a+n.r*n.a*(1-r.a))/a,g:(r.g*r.a+n.g*n.a*(1-r.a))/a,b:(r.b*r.a+n.b*n.a*(1-r.a))/a,a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var r=this.toHsl(),n=r.h,a=[this],i=360/e,s=1;s<e;s++)a.push(new t({h:(n+s*i)%360,s:r.s,l:r.l}));return a},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();export{we as C,Te as E,Pe as T,He as V,Xt as _,ye as a,Kt as b,Ie as c,ve as d,z as e,Re as f,Se as g,me as h,Me as i,Gt as j,ke as k,Ae as l,Bt as m,Ee as n,Fe as o,U as p,Et as q,xe as r,Tt as s,be as t,_e as u,Mt as v,zt as w,qt as x,Yt as y,Pt as z};