import{j as we,I as Pe,a0 as tt,a1 as De,u as ae,l as w,y as he,v as H,e as L,E as me,d as W,o as v,f as S,P as k,n as T,a as p,g as X,a2 as lt,B as _e,L as ye,a3 as Le,k as at,H as ot,F as Y,W as z,a4 as nt,s as qe,M as pe,x as rt,c as I,w as c,C as ke,a5 as He,S as i,X as q,Q as O,R as Be,m as st,p as it,D as xe,a6 as ut,h as je,r as ct,O as dt,Z as pt,a7 as ft,a8 as te,_ as ht,$ as mt}from"./index-CqGmAY_u.js";/* empty css                     *//* empty css                 */import{u as vt,a as gt,b as bt,c as _t,d as yt,e as Oe}from"./el-button-DpzYuNCC.js";import{E as kt}from"./el-progress-DhJv_DBp.js";import{g as Se,E as Vt}from"./el-image-viewer-DCgxXVTD.js";/* empty css                       */import{u as Ct,C as $t,E as Et}from"./el-scrollbar-DStktWal.js";import{E as Tt}from"./el-col-bHdl6-l-.js";/* empty css                 */import{d as Mt}from"./el-tag-uPOr0Gox.js";/* empty css                  */import{b as wt,g as Pt,c as St,d as It,f as Nt,h as Ft}from"./index-Dp5RPssR.js";import{u as Ut}from"./index-Bewy8imb.js";/* empty css                   */import{E as Ve,a as re}from"./request-BWe5mLiC.js";import{b as Re,_ as oe,u as At,E as Ee}from"./index-BJocUqJs.js";import{u as Dt,E as Xe}from"./index-CN0jcStv.js";import{E as Lt,a as Ht}from"./index-M5aUYcP_.js";import{E as Bt,a as xt}from"./index-CFhDgrYB.js";import{E as Ot,a as Rt}from"./index-CguX-oIt.js";import{E as Te}from"./index-Bd1qaB5O.js";import{E as Kt}from"./index-BXjaXClQ.js";import{U as Me,C as Yt}from"./event-BB_Ol6Sd.js";import{_ as Wt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./typescript-B9iuFu41.js";import"./cloneDeep-CKE_w5NT.js";import"./_baseClone-CIKtdTEW.js";import"./_initCloneObject-BTvP7gDY.js";import"./isEqual-BCKW0y_w.js";import"./scroll-Covgc6bg.js";import"./castArray-Ds8PJccp.js";import"./arrays-6TrVLtTe.js";import"./index-E146iEmP.js";const zt=we({color:{type:Pe(Object),required:!0},vertical:{type:Boolean,default:!1}});let Ce=!1;function ue(t,o){if(!tt)return;const a=function(r){var s;(s=o.drag)==null||s.call(o,r)},l=function(r){var s;document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",l),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",l),document.onselectstart=null,document.ondragstart=null,Ce=!1,(s=o.end)==null||s.call(o,r)},e=function(r){var s;Ce||(r.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",a),document.addEventListener("mouseup",l),document.addEventListener("touchmove",a),document.addEventListener("touchend",l),Ce=!0,(s=o.start)==null||s.call(o,r))};t.addEventListener("mousedown",e),t.addEventListener("touchstart",e)}const qt=t=>{const o=me(),a=De(),l=De();function e(s){s.target!==a.value&&r(s)}function r(s){if(!l.value||!a.value)return;const h=o.vnode.el.getBoundingClientRect(),{clientX:_,clientY:F}=Se(s);if(t.vertical){let V=F-h.top;V=Math.max(a.value.offsetHeight/2,V),V=Math.min(V,h.height-a.value.offsetHeight/2),t.color.set("alpha",Math.round((V-a.value.offsetHeight/2)/(h.height-a.value.offsetHeight)*100))}else{let V=_-h.left;V=Math.max(a.value.offsetWidth/2,V),V=Math.min(V,h.width-a.value.offsetWidth/2),t.color.set("alpha",Math.round((V-a.value.offsetWidth/2)/(h.width-a.value.offsetWidth)*100))}}return{thumb:a,bar:l,handleDrag:r,handleClick:e}},jt=(t,{bar:o,thumb:a,handleDrag:l})=>{const e=me(),r=ae("color-alpha-slider"),s=w(0),g=w(0),h=w();function _(){if(!a.value||t.vertical)return 0;const n=e.vnode.el,f=t.color.get("alpha");return n?Math.round(f*(n.offsetWidth-a.value.offsetWidth/2)/100):0}function F(){if(!a.value)return 0;const n=e.vnode.el;if(!t.vertical)return 0;const f=t.color.get("alpha");return n?Math.round(f*(n.offsetHeight-a.value.offsetHeight/2)/100):0}function V(){if(t.color&&t.color.value){const{r:n,g:f,b}=t.color.toRgb();return`linear-gradient(to right, rgba(${n}, ${f}, ${b}, 0) 0%, rgba(${n}, ${f}, ${b}, 1) 100%)`}return""}function U(){s.value=_(),g.value=F(),h.value=V()}he(()=>{if(!o.value||!a.value)return;const n={drag:f=>{l(f)},end:f=>{l(f)}};ue(o.value,n),ue(a.value,n),U()}),H(()=>t.color.get("alpha"),()=>U()),H(()=>t.color.value,()=>U());const M=L(()=>[r.b(),r.is("vertical",t.vertical)]),E=L(()=>r.e("bar")),P=L(()=>r.e("thumb")),j=L(()=>({background:h.value})),d=L(()=>({left:Re(s.value),top:Re(g.value)}));return{rootKls:M,barKls:E,barStyle:j,thumbKls:P,thumbStyle:d,update:U}},Xt="ElColorAlphaSlider",Gt=W({name:Xt}),Zt=W({...Gt,props:zt,setup(t,{expose:o}){const a=t,{bar:l,thumb:e,handleDrag:r,handleClick:s}=qt(a),{rootKls:g,barKls:h,barStyle:_,thumbKls:F,thumbStyle:V,update:U}=jt(a,{bar:l,thumb:e,handleDrag:r});return o({update:U,bar:l,thumb:e}),(M,E)=>(v(),S("div",{class:T(p(g))},[k("div",{ref_key:"bar",ref:l,class:T(p(h)),style:X(p(_)),onClick:E[0]||(E[0]=(...P)=>p(s)&&p(s)(...P))},null,6),k("div",{ref_key:"thumb",ref:e,class:T(p(F)),style:X(p(V))},null,6)],2))}});var Qt=oe(Zt,[["__file","alpha-slider.vue"]]);const Jt=W({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(t){const o=ae("color-hue-slider"),a=me(),l=w(),e=w(),r=w(0),s=w(0),g=L(()=>t.color.get("hue"));H(()=>g.value,()=>{U()});function h(M){M.target!==l.value&&_(M)}function _(M){if(!e.value||!l.value)return;const P=a.vnode.el.getBoundingClientRect(),{clientX:j,clientY:d}=Se(M);let n;if(t.vertical){let f=d-P.top;f=Math.min(f,P.height-l.value.offsetHeight/2),f=Math.max(l.value.offsetHeight/2,f),n=Math.round((f-l.value.offsetHeight/2)/(P.height-l.value.offsetHeight)*360)}else{let f=j-P.left;f=Math.min(f,P.width-l.value.offsetWidth/2),f=Math.max(l.value.offsetWidth/2,f),n=Math.round((f-l.value.offsetWidth/2)/(P.width-l.value.offsetWidth)*360)}t.color.set("hue",n)}function F(){if(!l.value)return 0;const M=a.vnode.el;if(t.vertical)return 0;const E=t.color.get("hue");return M?Math.round(E*(M.offsetWidth-l.value.offsetWidth/2)/360):0}function V(){if(!l.value)return 0;const M=a.vnode.el;if(!t.vertical)return 0;const E=t.color.get("hue");return M?Math.round(E*(M.offsetHeight-l.value.offsetHeight/2)/360):0}function U(){r.value=F(),s.value=V()}return he(()=>{if(!e.value||!l.value)return;const M={drag:E=>{_(E)},end:E=>{_(E)}};ue(e.value,M),ue(l.value,M),U()}),{bar:e,thumb:l,thumbLeft:r,thumbTop:s,hueValue:g,handleClick:h,update:U,ns:o}}});function el(t,o,a,l,e,r){return v(),S("div",{class:T([t.ns.b(),t.ns.is("vertical",t.vertical)])},[k("div",{ref:"bar",class:T(t.ns.e("bar")),onClick:o[0]||(o[0]=(...s)=>t.handleClick&&t.handleClick(...s))},null,2),k("div",{ref:"thumb",class:T(t.ns.e("thumb")),style:X({left:t.thumbLeft+"px",top:t.thumbTop+"px"})},null,6)],2)}var tl=oe(Jt,[["render",el],["__file","hue-slider.vue"]]);const ll=we({modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:lt,popperClass:{type:String,default:""},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},teleported:Ct.teleported,predefine:{type:Pe(Array)},validateEvent:{type:Boolean,default:!0},...vt(["ariaLabel"])}),al={[Me]:t=>_e(t)||ye(t),[Yt]:t=>_e(t)||ye(t),activeChange:t=>_e(t)||ye(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent},Ge=Symbol("colorPickerContextKey"),Ke=function(t,o,a){return[t,o*a/((t=(2-o)*a)<1?t:2-t)||0,t/2]},ol=function(t){return typeof t=="string"&&t.includes(".")&&Number.parseFloat(t)===1},nl=function(t){return typeof t=="string"&&t.includes("%")},le=function(t,o){ol(t)&&(t="100%");const a=nl(t);return t=Math.min(o,Math.max(0,Number.parseFloat(`${t}`))),a&&(t=Number.parseInt(`${t*o}`,10)/100),Math.abs(t-o)<1e-6?1:t%o/Number.parseFloat(o)},Ye={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},fe=t=>{t=Math.min(Math.round(t),255);const o=Math.floor(t/16),a=t%16;return`${Ye[o]||o}${Ye[a]||a}`},We=function({r:t,g:o,b:a}){return Number.isNaN(+t)||Number.isNaN(+o)||Number.isNaN(+a)?"":`#${fe(t)}${fe(o)}${fe(a)}`},$e={A:10,B:11,C:12,D:13,E:14,F:15},J=function(t){return t.length===2?($e[t[0].toUpperCase()]||+t[0])*16+($e[t[1].toUpperCase()]||+t[1]):$e[t[1].toUpperCase()]||+t[1]},rl=function(t,o,a){o=o/100,a=a/100;let l=o;const e=Math.max(a,.01);a*=2,o*=a<=1?a:2-a,l*=e<=1?e:2-e;const r=(a+o)/2,s=a===0?2*l/(e+l):2*o/(a+o);return{h:t,s:s*100,v:r*100}},ze=(t,o,a)=>{t=le(t,255),o=le(o,255),a=le(a,255);const l=Math.max(t,o,a),e=Math.min(t,o,a);let r;const s=l,g=l-e,h=l===0?0:g/l;if(l===e)r=0;else{switch(l){case t:{r=(o-a)/g+(o<a?6:0);break}case o:{r=(a-t)/g+2;break}case a:{r=(t-o)/g+4;break}}r/=6}return{h:r*360,s:h*100,v:s*100}},se=function(t,o,a){t=le(t,360)*6,o=le(o,100),a=le(a,100);const l=Math.floor(t),e=t-l,r=a*(1-o),s=a*(1-e*o),g=a*(1-(1-e)*o),h=l%6,_=[a,s,r,r,g,a][h],F=[g,a,a,s,r,r][h],V=[r,r,g,a,a,s][h];return{r:Math.round(_*255),g:Math.round(F*255),b:Math.round(V*255)}};class ie{constructor(o={}){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="";for(const a in o)Le(o,a)&&(this[a]=o[a]);o.value?this.fromString(o.value):this.doOnChange()}set(o,a){if(arguments.length===1&&typeof o=="object"){for(const l in o)Le(o,l)&&this.set(l,o[l]);return}this[`_${o}`]=a,this.doOnChange()}get(o){return o==="alpha"?Math.floor(this[`_${o}`]):this[`_${o}`]}toRgb(){return se(this._hue,this._saturation,this._value)}fromString(o){if(!o){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}const a=(l,e,r)=>{this._hue=Math.max(0,Math.min(360,l)),this._saturation=Math.max(0,Math.min(100,e)),this._value=Math.max(0,Math.min(100,r)),this.doOnChange()};if(o.includes("hsl")){const l=o.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(e=>e!=="").map((e,r)=>r>2?Number.parseFloat(e):Number.parseInt(e,10));if(l.length===4?this._alpha=Number.parseFloat(l[3])*100:l.length===3&&(this._alpha=100),l.length>=3){const{h:e,s:r,v:s}=rl(l[0],l[1],l[2]);a(e,r,s)}}else if(o.includes("hsv")){const l=o.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(e=>e!=="").map((e,r)=>r>2?Number.parseFloat(e):Number.parseInt(e,10));l.length===4?this._alpha=Number.parseFloat(l[3])*100:l.length===3&&(this._alpha=100),l.length>=3&&a(l[0],l[1],l[2])}else if(o.includes("rgb")){const l=o.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(e=>e!=="").map((e,r)=>r>2?Number.parseFloat(e):Number.parseInt(e,10));if(l.length===4?this._alpha=Number.parseFloat(l[3])*100:l.length===3&&(this._alpha=100),l.length>=3){const{h:e,s:r,v:s}=ze(l[0],l[1],l[2]);a(e,r,s)}}else if(o.includes("#")){const l=o.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(l))return;let e,r,s;l.length===3?(e=J(l[0]+l[0]),r=J(l[1]+l[1]),s=J(l[2]+l[2])):(l.length===6||l.length===8)&&(e=J(l.slice(0,2)),r=J(l.slice(2,4)),s=J(l.slice(4,6))),l.length===8?this._alpha=J(l.slice(6))/255*100:(l.length===3||l.length===6)&&(this._alpha=100);const{h:g,s:h,v:_}=ze(e,r,s);a(g,h,_)}}compare(o){return Math.abs(o._hue-this._hue)<2&&Math.abs(o._saturation-this._saturation)<1&&Math.abs(o._value-this._value)<1&&Math.abs(o._alpha-this._alpha)<1}doOnChange(){const{_hue:o,_saturation:a,_value:l,_alpha:e,format:r}=this;if(this.enableAlpha)switch(r){case"hsl":{const s=Ke(o,a/100,l/100);this.value=`hsla(${o}, ${Math.round(s[1]*100)}%, ${Math.round(s[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${o}, ${Math.round(a)}%, ${Math.round(l)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${We(se(o,a,l))}${fe(e*255/100)}`;break}default:{const{r:s,g,b:h}=se(o,a,l);this.value=`rgba(${s}, ${g}, ${h}, ${this.get("alpha")/100})`}}else switch(r){case"hsl":{const s=Ke(o,a/100,l/100);this.value=`hsl(${o}, ${Math.round(s[1]*100)}%, ${Math.round(s[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${o}, ${Math.round(a)}%, ${Math.round(l)}%)`;break}case"rgb":{const{r:s,g,b:h}=se(o,a,l);this.value=`rgb(${s}, ${g}, ${h})`;break}default:this.value=We(se(o,a,l))}}}const sl=W({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0},enableAlpha:{type:Boolean,required:!0}},setup(t){const o=ae("color-predefine"),{currentColor:a}=at(Ge),l=w(r(t.colors,t.color));H(()=>a.value,s=>{const g=new ie;g.fromString(s),l.value.forEach(h=>{h.selected=g.compare(h)})}),ot(()=>{l.value=r(t.colors,t.color)});function e(s){t.color.fromString(t.colors[s])}function r(s,g){return s.map(h=>{const _=new ie;return _.enableAlpha=t.enableAlpha,_.format="rgba",_.fromString(h),_.selected=_.value===g.value,_})}return{rgbaColors:l,handleSelect:e,ns:o}}}),il=["onClick"];function ul(t,o,a,l,e,r){return v(),S("div",{class:T(t.ns.b())},[k("div",{class:T(t.ns.e("colors"))},[(v(!0),S(Y,null,z(t.rgbaColors,(s,g)=>(v(),S("div",{key:t.colors[g],class:T([t.ns.e("color-selector"),t.ns.is("alpha",s._alpha<100),{selected:s.selected}]),onClick:h=>t.handleSelect(g)},[k("div",{style:X({backgroundColor:s.value})},null,4)],10,il))),128))],2)],2)}var cl=oe(sl,[["render",ul],["__file","predefine.vue"]]);const dl=W({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(t){const o=ae("color-svpanel"),a=me(),l=w(0),e=w(0),r=w("hsl(0, 100%, 50%)"),s=L(()=>{const _=t.color.get("hue"),F=t.color.get("value");return{hue:_,value:F}});function g(){const _=t.color.get("saturation"),F=t.color.get("value"),V=a.vnode.el,{clientWidth:U,clientHeight:M}=V;e.value=_*U/100,l.value=(100-F)*M/100,r.value=`hsl(${t.color.get("hue")}, 100%, 50%)`}function h(_){const V=a.vnode.el.getBoundingClientRect(),{clientX:U,clientY:M}=Se(_);let E=U-V.left,P=M-V.top;E=Math.max(0,E),E=Math.min(E,V.width),P=Math.max(0,P),P=Math.min(P,V.height),e.value=E,l.value=P,t.color.set({saturation:E/V.width*100,value:100-P/V.height*100})}return H(()=>s.value,()=>{g()}),he(()=>{ue(a.vnode.el,{drag:_=>{h(_)},end:_=>{h(_)}}),g()}),{cursorTop:l,cursorLeft:e,background:r,colorValue:s,handleDrag:h,update:g,ns:o}}}),pl=k("div",null,null,-1),fl=[pl];function hl(t,o,a,l,e,r){return v(),S("div",{class:T(t.ns.b()),style:X({backgroundColor:t.background})},[k("div",{class:T(t.ns.e("white"))},null,2),k("div",{class:T(t.ns.e("black"))},null,2),k("div",{class:T(t.ns.e("cursor")),style:X({top:t.cursorTop+"px",left:t.cursorLeft+"px"})},fl,6)],6)}var ml=oe(dl,[["render",hl],["__file","sv-panel.vue"]]);const vl=["onKeydown"],gl=["id","aria-label","aria-labelledby","aria-description","aria-disabled","tabindex"],bl=W({name:"ElColorPicker"}),_l=W({...bl,props:ll,emits:al,setup(t,{expose:o,emit:a}){const l=t,{t:e}=nt(),r=ae("color"),{formItem:s}=gt(),g=bt(),h=_t(),{inputId:_,isLabeledByFormItem:F}=yt(l,{formItemContext:s}),V=w(),U=w(),M=w(),E=w(),P=w(),j=w(),{isFocused:d,handleFocus:n,handleBlur:f}=Dt(P,{beforeBlur(m){var A;return(A=E.value)==null?void 0:A.isFocusInsideContent(m)},afterBlur(){Q(!1),C()}}),b=m=>{if(h.value)return Fe();n(m)};let y=!0;const N=qe(new ie({enableAlpha:l.showAlpha,format:l.colorFormat||"",value:l.modelValue})),R=w(!1),x=w(!1),Z=w(""),D=L(()=>!l.modelValue&&!x.value?"transparent":ge(N,l.showAlpha)),B=L(()=>!l.modelValue&&!x.value?"":N.value),ne=L(()=>F.value?void 0:l.label||l.ariaLabel||e("el.colorpicker.defaultLabel"));At({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-color-picker",ref:"https://element-plus.org/en-US/component/color-picker.html"},L(()=>!!l.label));const ce=L(()=>F.value?s==null?void 0:s.labelId:void 0),ve=L(()=>[r.b("picker"),r.is("disabled",h.value),r.bm("picker",g.value),r.is("focused",d.value)]);function ge(m,A){if(!(m instanceof ie))throw new TypeError("color should be instance of _color Class");const{r:K,g:Ue,b:Ae}=m.toRgb();return A?`rgba(${K}, ${Ue}, ${Ae}, ${m.get("alpha")/100})`:`rgb(${K}, ${Ue}, ${Ae})`}function Q(m){R.value=m}const ee=Mt(Q,100,{leading:!0});function de(){h.value||Q(!0)}function u(){ee(!1),C()}function C(){pe(()=>{l.modelValue?N.fromString(l.modelValue):(N.value="",pe(()=>{x.value=!1}))})}function $(){h.value||ee(!R.value)}function be(){N.fromString(Z.value)}function Ie(){const m=N.value;a(Me,m),a("change",m),l.validateEvent&&(s==null||s.validate("change").catch(A=>Oe())),ee(!1),pe(()=>{const A=new ie({enableAlpha:l.showAlpha,format:l.colorFormat||"",value:l.modelValue});N.compare(A)||C()})}function Ze(){ee(!1),a(Me,null),a("change",null),l.modelValue!==null&&l.validateEvent&&(s==null||s.validate("change").catch(m=>Oe())),C()}function Qe(m){if(R.value&&(u(),d.value)){const A=new FocusEvent("focus",m);f(A)}}function Ne(m){m.preventDefault(),m.stopPropagation(),Q(!1),C()}function Je(m){switch(m.code){case Ve.enter:case Ve.space:m.preventDefault(),m.stopPropagation(),de(),j.value.focus();break;case Ve.esc:Ne(m);break}}function et(){P.value.focus()}function Fe(){P.value.blur()}return he(()=>{l.modelValue&&(Z.value=B.value)}),H(()=>l.modelValue,m=>{m?m&&m!==N.value&&(y=!1,N.fromString(m)):x.value=!1}),H(()=>B.value,m=>{Z.value=m,y&&a("activeChange",m),y=!0}),H(()=>N.value,()=>{!l.modelValue&&!x.value&&(x.value=!0)}),H(()=>R.value,()=>{pe(()=>{var m,A,K;(m=V.value)==null||m.update(),(A=U.value)==null||A.update(),(K=M.value)==null||K.update()})}),rt(Ge,{currentColor:B}),o({color:N,show:de,hide:u,focus:et,blur:Fe}),(m,A)=>(v(),I(p(Et),{ref_key:"popper",ref:E,visible:R.value,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[p(r).be("picker","panel"),p(r).b("dropdown"),m.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",teleported:m.teleported,transition:`${p(r).namespace.value}-zoom-in-top`,persistent:"",onHide:A[2]||(A[2]=K=>Q(!1))},{content:c(()=>[ke((v(),S("div",{onKeydown:He(Ne,["esc"])},[k("div",{class:T(p(r).be("dropdown","main-wrapper"))},[i(tl,{ref_key:"hue",ref:V,class:"hue-slider",color:p(N),vertical:""},null,8,["color"]),i(ml,{ref_key:"sv",ref:U,color:p(N)},null,8,["color"])],2),m.showAlpha?(v(),I(Qt,{key:0,ref_key:"alpha",ref:M,color:p(N)},null,8,["color"])):q("v-if",!0),m.predefine?(v(),I(cl,{key:1,ref:"predefine","enable-alpha":m.showAlpha,color:p(N),colors:m.predefine},null,8,["enable-alpha","color","colors"])):q("v-if",!0),k("div",{class:T(p(r).be("dropdown","btns"))},[k("span",{class:T(p(r).be("dropdown","value"))},[i(p(Xe),{ref_key:"inputRef",ref:j,modelValue:Z.value,"onUpdate:modelValue":A[0]||(A[0]=K=>Z.value=K),"validate-event":!1,size:"small",onKeyup:He(be,["enter"]),onBlur:be},null,8,["modelValue","onKeyup"])],2),i(p(Te),{class:T(p(r).be("dropdown","link-btn")),text:"",size:"small",onClick:Ze},{default:c(()=>[O(Be(p(e)("el.colorpicker.clear")),1)]),_:1},8,["class"]),i(p(Te),{plain:"",size:"small",class:T(p(r).be("dropdown","btn")),onClick:Ie},{default:c(()=>[O(Be(p(e)("el.colorpicker.confirm")),1)]),_:1},8,["class"])],2)],40,vl)),[[p($t),Qe]])]),default:c(()=>[k("div",st({id:p(_),ref_key:"triggerRef",ref:P},m.$attrs,{class:p(ve),role:"button","aria-label":p(ne),"aria-labelledby":p(ce),"aria-description":p(e)("el.colorpicker.description",{color:m.modelValue||""}),"aria-disabled":p(h),tabindex:p(h)?-1:m.tabindex,onKeydown:Je,onFocus:b,onBlur:A[1]||(A[1]=(...K)=>p(f)&&p(f)(...K))}),[p(h)?(v(),S("div",{key:0,class:T(p(r).be("picker","mask"))},null,2)):q("v-if",!0),k("div",{class:T(p(r).be("picker","trigger")),onClick:$},[k("span",{class:T([p(r).be("picker","color"),p(r).is("alpha",m.showAlpha)])},[k("span",{class:T(p(r).be("picker","color-inner")),style:X({backgroundColor:p(D)})},[ke(i(p(Ee),{class:T([p(r).be("picker","icon"),p(r).is("icon-arrow-down")])},{default:c(()=>[i(p(it))]),_:1},8,["class"]),[[xe,m.modelValue||x.value]]),ke(i(p(Ee),{class:T([p(r).be("picker","empty"),p(r).is("icon-close")])},{default:c(()=>[i(p(ut))]),_:1},8,["class"]),[[xe,!m.modelValue&&!x.value]])],6)],2)],2)],16,gl)]),_:1},8,["visible","popper-class","teleported","transition"]))}});var yl=oe(_l,[["__file","color-picker.vue"]]);const kl=je(yl),Vl=we({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:Pe(String),default:"solid"}}),Cl=W({name:"ElDivider"}),$l=W({...Cl,props:Vl,setup(t){const o=t,a=ae("divider"),l=L(()=>a.cssVar({"border-style":o.borderStyle}));return(e,r)=>(v(),S("div",{class:T([p(a).b(),p(a).m(e.direction)]),style:X(p(l)),role:"separator"},[e.$slots.default&&e.direction!=="vertical"?(v(),S("div",{key:0,class:T([p(a).e("text"),p(a).is(e.contentPosition)])},[ct(e.$slots,"default")],2)):q("v-if",!0)],6))}});var El=oe($l,[["__file","divider.vue"]]);const Tl=je(El),G=t=>(ht("data-v-206c4677"),t=t(),mt(),t),Ml=G(()=>k("span",{class:"title"},"基本信息",-1)),wl=G(()=>k("span",{class:"title"},"时间信息",-1)),Pl=G(()=>k("span",{class:"title"},"图片素材",-1)),Sl={class:"image-slot"},Il=G(()=>k("span",{class:"title"},"展区分类",-1)),Nl=G(()=>k("span",{class:"title"},"单价设置",-1)),Fl={class:"list"},Ul={key:0,for:""},Al={key:0,for:""},Dl={key:0,for:""},Ll=G(()=>k("span",{class:"title"},"加收设置",-1)),Hl={class:"list"},Bl=G(()=>k("span",{class:"title"},"折扣设置",-1)),xl={class:"list"},Ol=G(()=>k("span",{class:"title"},"付款期限",-1)),Rl={class:"s-flex-center"},Kl=W({__name:"Add",setup(t){const o=pt();let l=ft().query.id;const e=qe({exhibitionName:"",cityId:"",cityName:"",hallId:"",hallName:"",positionImgType:1,host:[""],arrangeStartTime:"",arrangeEndTime:"",startTime:"",endTime:"",saleEndTime:"",payFirst:"",payFinal:"",position:[{code:"",img:""}],cate:[{name:"",rgb:""}],unitPrice:[{text:"",price:0,num:0}],attachPrice:[{text:"",price:0,priceType:1,changeType:1},{text:"",price:"",priceType:1,changeType:-1}]}),r=w(""),s=w(["",""]),g=w(["",""]),h=w([]),_=w([]);H(s,async(d,n)=>{d&&d[0]&&d[1]?(e.arrangeStartTime=d[0],e.arrangeEndTime=d[1]):(e.arrangeStartTime="",e.arrangeEndTime="")}),H(g,async(d,n)=>{d&&d[0]&&d[1]?(e.startTime=d[0],e.endTime=d[1]):(e.startTime="",e.endTime="")}),l&&wt({id:l}).then(d=>{if(d.code===0&&d.data){let n=d.data;e.exhibitionName=n.exhibitionName,e.cityId=n.cityId,e.cityName=n.cityName,e.hallId=n.hallId,e.hallName=n.hallName,e.positionImgType=n.positionImgType||1,e.host=n.host,e.arrangeStartTime=n.arrangeStartTime,e.arrangeEndTime=n.arrangeEndTime,s.value=[n.arrangeStartTime,n.arrangeEndTime],g.value=[n.startTime,n.endTime],e.startTime=n.startTime,e.endTime=n.endTime,e.saleEndTime=n.saleEndTime,e.payFirst=n.payFirst,e.payFinal=n.payFinal,e.position=n.position,e.cate=n.cate.length?n.cate:[{name:"",rgb:""}],e.unitPrice=n.unitPrice;let f=0,b=0;e.attachPrice=n.add.map(y=>(y.change_type==1?f++:b++,{text:y.text,price:y.price,priceType:y.price_type,changeType:y.change_type})),n.discount.forEach(y=>{y.change_type==1?f++:b++,e.attachPrice.push({text:y.text,price:y.price,priceType:y.price_type,changeType:y.change_type})}),f===0&&e.attachPrice.push({text:"",price:0,priceType:1,changeType:1}),b===0&&e.attachPrice.push({text:"",price:0,priceType:1,changeType:-1})}}),Pt().then(d=>{d.code===0&&d.data.length>0&&(h.value=d.data)});const F=d=>{e.cityName=h.value.filter(n=>n.id==d)[0].cityName,_.value=[],e.hallId="",e.hallName=""};H(()=>e.cityId,async(d,n)=>{M()}),H(()=>e.hallId,async(d,n)=>{U()});const V=d=>{e.hallName=_.value.filter(n=>n.id==d)[0].hallName},U=()=>{e.hallId&&Nt({hallId:e.hallId}).then(d=>{d.code===0&&d.data.length>0&&(r.value=d.data)})},M=()=>{e.cityId&&Ft({id:e.cityId}).then(d=>{d.code===0&&d.data.length>0&&(_.value=d.data)})},E=d=>d.size/1024/1024>3?(re.error("文件大小不能超过 3MB!"),!1):!0,P=d=>{let n=new FormData;return n.append("upload",d.file),new Promise((f,b)=>{Ut(n).then(y=>{y.code===0?f(y.data):b(y)})})},j=()=>{console.log(e);let d={};for(let n in e)if(e[n]!==void 0)if(n==="position"){let f=e[n].filter(b=>b.img);d[n]=f}else if(n==="cate"){let f=e[n].filter(b=>b.name&&b.rgb);d[n]=f}else if(n==="unitPrice"){let f=e[n].filter(b=>b.text&&b.price&&b.num);d[n]=f}else if(n==="attachPrice"){let f=e[n].filter(b=>b.text&&b.price);d[n]=f}else if(n==="host"){let f=e[n].filter(b=>b);d[n]=f}else d[n]=e[n];l?(d.id=l,St(d).then(n=>{n.code===0?(re.success("保存成功"),o.back()):re.error(n.msg)})):It(d).then(n=>{n.code===0?(re.success("保存成功"),o.back()):re.error(n.msg)})};return(d,n)=>{const f=Tl,b=Xe,y=Lt,N=xt,R=Bt,x=Ot,Z=Rt,D=Te,B=Tt,ne=Kt,ce=Vt,ve=kt,ge=dt("Picture"),Q=Ee,ee=kl,de=Ht;return v(),I(de,{model:e,"label-width":"auto"},{default:c(()=>[i(f,{"content-position":"left"},{default:c(()=>[Ml]),_:1}),i(B,{md:16,lg:10,offset:1},{default:c(()=>[i(y,{label:"展会名称"},{default:c(()=>[i(b,{modelValue:e.exhibitionName,"onUpdate:modelValue":n[0]||(n[0]=u=>e.exhibitionName=u)},null,8,["modelValue"])]),_:1}),i(y,{label:"所在城市"},{default:c(()=>[i(R,{modelValue:e.cityId,"onUpdate:modelValue":n[1]||(n[1]=u=>e.cityId=u),filterable:"",placeholder:"",onChange:F},{default:c(()=>[(v(!0),S(Y,null,z(h.value,u=>(v(),I(N,{key:u.id,label:u.cityName,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),i(y,{label:"所在展馆"},{default:c(()=>[i(R,{modelValue:e.hallId,"onUpdate:modelValue":n[2]||(n[2]=u=>e.hallId=u),placeholder:"",onChange:V},{default:c(()=>[(v(!0),S(Y,null,z(_.value,u=>(v(),I(N,{key:u.id,label:u.hallName,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),i(y,{label:"展位图类型"},{default:c(()=>[i(Z,{modelValue:e.positionImgType,"onUpdate:modelValue":n[3]||(n[3]=u=>e.positionImgType=u)},{default:c(()=>[i(x,{value:1},{default:c(()=>[O("已有展位图上传")]),_:1}),i(x,{value:2},{default:c(()=>[O("在线自定义展位")]),_:1})]),_:1},8,["modelValue"])]),_:1}),(v(!0),S(Y,null,z(e.host,(u,C)=>(v(),I(y,{key:C,label:C>0?" ":"主办单位",prop:"form.host."+C},{default:c(()=>[i(b,{modelValue:e.host[C],"onUpdate:modelValue":$=>e.host[C]=$},{append:c(()=>[C===0?(v(),I(D,{key:0,icon:"Plus",onClick:n[4]||(n[4]=()=>{e.host.push("")})})):(v(),I(D,{key:1,icon:"Minus",onClick:te(()=>{e.host.splice(C,1)},["prevent"])},null,8,["onClick"]))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","prop"]))),128))]),_:1}),i(f,{"content-position":"left"},{default:c(()=>[wl]),_:1}),i(B,{md:16,lg:10,offset:1},{default:c(()=>[i(y,{label:"布展日期"},{default:c(()=>[i(ne,{modelValue:s.value,"onUpdate:modelValue":n[5]||(n[5]=u=>s.value=u),"value-format":"YYYY-MM-DD",type:"daterange","range-separator":"至","start-placeholder":"","end-placeholder":""},null,8,["modelValue"])]),_:1}),i(y,{label:"开展日期"},{default:c(()=>[i(ne,{modelValue:g.value,"onUpdate:modelValue":n[6]||(n[6]=u=>g.value=u),"value-format":"YYYY-MM-DD",type:"daterange","range-separator":"至","start-placeholder":"","end-placeholder":""},null,8,["modelValue"])]),_:1}),i(y,{label:"销售截止日期"},{default:c(()=>[i(ne,{modelValue:e.saleEndTime,"onUpdate:modelValue":n[7]||(n[7]=u=>e.saleEndTime=u),"value-format":"YYYY-MM-DD",type:"date",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),i(f,{"content-position":"left"},{default:c(()=>[Pl]),_:1}),i(B,{md:16,lg:10,offset:1},{default:c(()=>[i(y,{label:"招展平面图"},{default:c(()=>[i(ce,{src:r.value,"preview-src-list":[r.value],fit:"cover",style:{width:"100px",height:"100px"}},null,8,["src","preview-src-list"])]),_:1}),i(y,{label:"展位图"},{default:c(()=>[(v(!0),S(Y,null,z(e.position,(u,C)=>(v(),S("div",{key:C,style:{display:"flex","align-items":"center","margin-bottom":"10px"}},[i(b,{modelValue:u.code,"onUpdate:modelValue":$=>u.code=$,placeholder:"展馆号",style:{"max-width":"220px"}},{append:c(()=>[C===0?(v(),I(D,{key:0,icon:"Plus",onClick:n[8]||(n[8]=()=>{e.position.push({code:"",img:""})})})):(v(),I(D,{key:1,icon:"Minus",onClick:te(()=>{e.position.splice(C,1)},["prevent"])},null,8,["onClick"]))]),_:2},1032,["modelValue","onUpdate:modelValue"]),i(ve,{style:{"margin-left":"10px",display:"inline-flex","align-items":"center","justify-content":"center"},class:"","show-file-list":!1,"on-success":($,be,Ie)=>{e.position[C].img=$.url},"before-upload":E,"http-request":P},{default:c(()=>[i(D,{link:"",type:"primary"},{default:c(()=>[O("上传图片")]),_:1})]),_:2},1032,["on-success"]),u.img?(v(),I(ce,{key:0,src:u.img,"preview-src-list":[u.img],fit:"cover",style:{width:"32px",height:"32px","margin-left":"10px"}},{error:c(()=>[k("div",Sl,[i(Q,null,{default:c(()=>[i(ge)]),_:1})])]),_:2},1032,["src","preview-src-list"])):q("",!0)]))),128))]),_:1})]),_:1}),e.positionImgType==2?(v(),S(Y,{key:0},[i(f,{"content-position":"left"},{default:c(()=>[Il]),_:1}),i(B,{md:16,lg:10,offset:1},{default:c(()=>[(v(!0),S(Y,null,z(e.cate,(u,C)=>(v(),I(y,{label:" "},{default:c(()=>[i(b,{modelValue:u.name,"onUpdate:modelValue":$=>u.name=$,placeholder:"请输入展区分类",style:{"max-width":"220px"}},{append:c(()=>[C===0?(v(),I(D,{key:0,icon:"Plus",onClick:n[9]||(n[9]=()=>{e.cate.push({name:"",rgb:""})})})):(v(),I(D,{key:1,icon:"Minus",onClick:te(()=>{e.cate.splice(C,1)},["prevent"])},null,8,["onClick"]))]),_:2},1032,["modelValue","onUpdate:modelValue"]),i(ee,{style:{"margin-left":"10px"},modelValue:u.rgb,"onUpdate:modelValue":$=>u.rgb=$},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))),256))]),_:1})],64)):q("",!0),i(f,{"content-position":"left"},{default:c(()=>[Nl]),_:1}),i(B,{md:16,lg:10,offset:1},{default:c(()=>[i(y,{label:" "},{default:c(()=>[(v(!0),S(Y,null,z(e.unitPrice,(u,C)=>(v(),S("div",Fl,[k("div",null,[C===0?(v(),S("label",Ul,"标题")):q("",!0),i(b,{modelValue:u.text,"onUpdate:modelValue":$=>u.text=$,placeholder:"请输入标题"},null,8,["modelValue","onUpdate:modelValue"])]),k("div",null,[C===0?(v(),S("label",Al,"单价")):q("",!0),i(b,{modelValue:u.price,"onUpdate:modelValue":$=>u.price=$,placeholder:"请输入单价",type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),k("div",null,[C===0?(v(),S("label",Dl,"计价基数")):q("",!0),i(b,{modelValue:u.num,"onUpdate:modelValue":$=>u.num=$,placeholder:"请输入计价基数",type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),C===0?(v(),I(D,{key:0,type:"info",plain:"",icon:"Plus",onClick:n[10]||(n[10]=()=>{e.unitPrice.push({text:"",price:0,num:0})})})):(v(),I(D,{key:1,type:"info",plain:"",icon:"Minus",onClick:te(()=>{e.unitPrice.splice(C,1)},["prevent"])},null,8,["onClick"]))]))),256))]),_:1})]),_:1}),i(f,{"content-position":"left"},{default:c(()=>[Ll]),_:1}),i(B,{md:16,lg:10,offset:1},{default:c(()=>[(v(!0),S(Y,null,z(e.attachPrice.filter(u=>u.changeType===1),(u,C)=>(v(),I(y,{label:"加收"},{default:c(()=>[k("div",Hl,[k("div",null,[i(b,{modelValue:u.text,"onUpdate:modelValue":$=>u.text=$,placeholder:"例如：双开口"},null,8,["modelValue","onUpdate:modelValue"])]),k("div",null,[i(b,{type:"number",modelValue:u.price,"onUpdate:modelValue":$=>u.price=$,placeholder:"设置金额"},{append:c(()=>[i(R,{modelValue:u.priceType,"onUpdate:modelValue":$=>u.priceType=$,placeholder:"",style:{width:"60px"}},{default:c(()=>[i(N,{label:"%",value:1}),i(N,{label:"￥",value:2})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),C===0?(v(),I(D,{key:0,type:"info",plain:"",icon:"Plus",onClick:n[11]||(n[11]=()=>{e.attachPrice.push({text:"",price:0,priceType:1,changeType:1})})})):(v(),I(D,{key:1,type:"info",plain:"",icon:"Minus",onClick:te(()=>{e.attachPrice.splice(C,1)},["prevent"])},null,8,["onClick"]))])]),_:2},1024))),256))]),_:1}),i(f,{"content-position":"left"},{default:c(()=>[Bl]),_:1}),i(B,{md:16,lg:10,offset:1},{default:c(()=>[(v(!0),S(Y,null,z(e.attachPrice.filter(u=>u.changeType===-1),(u,C)=>(v(),I(y,{label:"折扣"},{default:c(()=>[k("div",xl,[k("div",null,[i(b,{modelValue:u.text,"onUpdate:modelValue":$=>u.text=$,placeholder:"例如：提前预定"},null,8,["modelValue","onUpdate:modelValue"])]),k("div",null,[i(b,{type:"number",modelValue:u.price,"onUpdate:modelValue":$=>u.price=$,placeholder:"设置金额"},{append:c(()=>[i(R,{modelValue:u.priceType,"onUpdate:modelValue":$=>u.priceType=$,placeholder:"",style:{width:"60px"}},{default:c(()=>[i(N,{label:"%",value:1}),i(N,{label:"￥",value:2})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),C===0?(v(),I(D,{key:0,type:"info",plain:"",icon:"Plus",onClick:n[12]||(n[12]=()=>{e.attachPrice.push({text:"",price:0,priceType:1,changeType:-1})})})):(v(),I(D,{key:1,type:"info",plain:"",icon:"Minus",onClick:te(()=>{e.attachPrice.splice(C,1)},["prevent"])},null,8,["onClick"]))])]),_:2},1024))),256))]),_:1}),i(f,{"content-position":"left"},{default:c(()=>[Ol]),_:1}),i(B,{md:16,lg:10,offset:1},{default:c(()=>[i(y,{label:"一期款"},{default:c(()=>[i(b,{type:"number",modelValue:e.payFirst,"onUpdate:modelValue":n[13]||(n[13]=u=>e.payFirst=u)},{prepend:c(()=>[O("合同签订后")]),append:c(()=>[O("个自然日")]),_:1},8,["modelValue"])]),_:1}),i(y,{label:"尾款及全款"},{default:c(()=>[i(b,{type:"number",modelValue:e.payFinal,"onUpdate:modelValue":n[14]||(n[14]=u=>e.payFinal=u)},{prepend:c(()=>[O("合同签订后")]),append:c(()=>[O("个自然日")]),_:1},8,["modelValue"])]),_:1})]),_:1}),k("div",Rl,[i(D,{type:"primary",onClick:j},{default:c(()=>[O("保存")]),_:1}),i(D,{onClick:n[15]||(n[15]=u=>d.$router.go(-1))},{default:c(()=>[O("取消")]),_:1})])]),_:1},8,["model"])}}}),$a=Wt(Kl,[["__scopeId","data-v-206c4677"]]);export{$a as default};
