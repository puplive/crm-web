import{j as we,G as Pe,Z as tt,_ as De,a as ae,l as w,x as he,t as B,c as L,D as me,d as W,o as v,b as S,O as k,n as E,e as p,f as X,$ as lt,A as _e,K as ye,a0 as Le,k as at,I as ot,F as Y,U as z,a1 as nt,s as qe,L as pe,v as rt,h as I,i as c,B as ke,a2 as Be,R as i,a3 as q,P as O,Q as He,m as st,p as it,C as xe,a4 as ut,w as je,r as ct,W as dt,a5 as pt,N as ft,a6 as te,X as ht,Y as mt}from"./index-QgCPknRV.js";import{E as vt,a as gt}from"./form-item-PCY24Bz9.js";/* empty css              */import{E as Te}from"./button-BkUY8nVK.js";import{E as bt}from"./progress-DHPYBA5h.js";import{g as Se,E as _t}from"./image-viewer-DQbdlWSy.js";import{E as yt}from"./date-picker-D1JiB1gJ.js";import"./scrollbar-2JWi6wHl.js";import{u as kt,C as Vt,E as Ct}from"./popper-FvkgnJ0o.js";import{E as $t}from"./col-D7BLacbL.js";/* empty css                    */import{E as Tt,a as Et}from"./radio-Cu9-35mr.js";import{d as Mt}from"./tag-DYJzjqVa.js";import{E as wt,a as Pt}from"./select-D2x7JMsJ.js";import{b as St,c as It,d as Nt,h as Ft,f as Ut,i as At}from"./index-DPKxTLg9.js";import{u as Dt}from"./index-B0GW5j1n.js";/* empty css                */import{d as Oe,_ as oe,e as Lt,b as Ee,E as Ve,c as re}from"./request-D3ROOKJz.js";import{u as Bt,E as Xe}from"./index-Ku1Bi_gm.js";import{u as Ht,a as xt,b as Ot,c as Kt,d as Rt,e as Ke}from"./use-form-item-Do-jLYkW.js";import{U as Me,C as Yt}from"./event-BB_Ol6Sd.js";import{_ as Wt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./castArray-CXoRlNM7.js";import"./_baseClone-CkCg4Dv3.js";import"./_initCloneObject-DzxW9sW-.js";import"./cloneDeep-CYu946u6.js";import"./isEqual-Dq4V8Bky.js";import"./scroll-DylINAFt.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./arrays-6TrVLtTe.js";import"./index-DLge-GfZ.js";const zt=we({color:{type:Pe(Object),required:!0},vertical:{type:Boolean,default:!1}});let Ce=!1;function ue(t,n){if(!tt)return;const a=function(r){var s;(s=n.drag)==null||s.call(n,r)},l=function(r){var s;document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",l),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",l),document.onselectstart=null,document.ondragstart=null,Ce=!1,(s=n.end)==null||s.call(n,r)},e=function(r){var s;Ce||(r.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",a),document.addEventListener("mouseup",l),document.addEventListener("touchmove",a),document.addEventListener("touchend",l),Ce=!0,(s=n.start)==null||s.call(n,r))};t.addEventListener("mousedown",e),t.addEventListener("touchstart",e)}const qt=t=>{const n=me(),a=De(),l=De();function e(s){s.target!==a.value&&r(s)}function r(s){if(!l.value||!a.value)return;const h=n.vnode.el.getBoundingClientRect(),{clientX:_,clientY:F}=Se(s);if(t.vertical){let V=F-h.top;V=Math.max(a.value.offsetHeight/2,V),V=Math.min(V,h.height-a.value.offsetHeight/2),t.color.set("alpha",Math.round((V-a.value.offsetHeight/2)/(h.height-a.value.offsetHeight)*100))}else{let V=_-h.left;V=Math.max(a.value.offsetWidth/2,V),V=Math.min(V,h.width-a.value.offsetWidth/2),t.color.set("alpha",Math.round((V-a.value.offsetWidth/2)/(h.width-a.value.offsetWidth)*100))}}return{thumb:a,bar:l,handleDrag:r,handleClick:e}},jt=(t,{bar:n,thumb:a,handleDrag:l})=>{const e=me(),r=ae("color-alpha-slider"),s=w(0),g=w(0),h=w();function _(){if(!a.value||t.vertical)return 0;const o=e.vnode.el,f=t.color.get("alpha");return o?Math.round(f*(o.offsetWidth-a.value.offsetWidth/2)/100):0}function F(){if(!a.value)return 0;const o=e.vnode.el;if(!t.vertical)return 0;const f=t.color.get("alpha");return o?Math.round(f*(o.offsetHeight-a.value.offsetHeight/2)/100):0}function V(){if(t.color&&t.color.value){const{r:o,g:f,b}=t.color.toRgb();return`linear-gradient(to right, rgba(${o}, ${f}, ${b}, 0) 0%, rgba(${o}, ${f}, ${b}, 1) 100%)`}return""}function U(){s.value=_(),g.value=F(),h.value=V()}he(()=>{if(!n.value||!a.value)return;const o={drag:f=>{l(f)},end:f=>{l(f)}};ue(n.value,o),ue(a.value,o),U()}),B(()=>t.color.get("alpha"),()=>U()),B(()=>t.color.value,()=>U());const M=L(()=>[r.b(),r.is("vertical",t.vertical)]),T=L(()=>r.e("bar")),P=L(()=>r.e("thumb")),j=L(()=>({background:h.value})),d=L(()=>({left:Oe(s.value),top:Oe(g.value)}));return{rootKls:M,barKls:T,barStyle:j,thumbKls:P,thumbStyle:d,update:U}},Xt="ElColorAlphaSlider",Gt=W({name:Xt}),Zt=W({...Gt,props:zt,setup(t,{expose:n}){const a=t,{bar:l,thumb:e,handleDrag:r,handleClick:s}=qt(a),{rootKls:g,barKls:h,barStyle:_,thumbKls:F,thumbStyle:V,update:U}=jt(a,{bar:l,thumb:e,handleDrag:r});return n({update:U,bar:l,thumb:e}),(M,T)=>(v(),S("div",{class:E(p(g))},[k("div",{ref_key:"bar",ref:l,class:E(p(h)),style:X(p(_)),onClick:T[0]||(T[0]=(...P)=>p(s)&&p(s)(...P))},null,6),k("div",{ref_key:"thumb",ref:e,class:E(p(F)),style:X(p(V))},null,6)],2))}});var Qt=oe(Zt,[["__file","alpha-slider.vue"]]);const Jt=W({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(t){const n=ae("color-hue-slider"),a=me(),l=w(),e=w(),r=w(0),s=w(0),g=L(()=>t.color.get("hue"));B(()=>g.value,()=>{U()});function h(M){M.target!==l.value&&_(M)}function _(M){if(!e.value||!l.value)return;const P=a.vnode.el.getBoundingClientRect(),{clientX:j,clientY:d}=Se(M);let o;if(t.vertical){let f=d-P.top;f=Math.min(f,P.height-l.value.offsetHeight/2),f=Math.max(l.value.offsetHeight/2,f),o=Math.round((f-l.value.offsetHeight/2)/(P.height-l.value.offsetHeight)*360)}else{let f=j-P.left;f=Math.min(f,P.width-l.value.offsetWidth/2),f=Math.max(l.value.offsetWidth/2,f),o=Math.round((f-l.value.offsetWidth/2)/(P.width-l.value.offsetWidth)*360)}t.color.set("hue",o)}function F(){if(!l.value)return 0;const M=a.vnode.el;if(t.vertical)return 0;const T=t.color.get("hue");return M?Math.round(T*(M.offsetWidth-l.value.offsetWidth/2)/360):0}function V(){if(!l.value)return 0;const M=a.vnode.el;if(!t.vertical)return 0;const T=t.color.get("hue");return M?Math.round(T*(M.offsetHeight-l.value.offsetHeight/2)/360):0}function U(){r.value=F(),s.value=V()}return he(()=>{if(!e.value||!l.value)return;const M={drag:T=>{_(T)},end:T=>{_(T)}};ue(e.value,M),ue(l.value,M),U()}),{bar:e,thumb:l,thumbLeft:r,thumbTop:s,hueValue:g,handleClick:h,update:U,ns:n}}});function el(t,n,a,l,e,r){return v(),S("div",{class:E([t.ns.b(),t.ns.is("vertical",t.vertical)])},[k("div",{ref:"bar",class:E(t.ns.e("bar")),onClick:n[0]||(n[0]=(...s)=>t.handleClick&&t.handleClick(...s))},null,2),k("div",{ref:"thumb",class:E(t.ns.e("thumb")),style:X({left:t.thumbLeft+"px",top:t.thumbTop+"px"})},null,6)],2)}var tl=oe(Jt,[["render",el],["__file","hue-slider.vue"]]);const ll=we({modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:lt,popperClass:{type:String,default:""},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},teleported:kt.teleported,predefine:{type:Pe(Array)},validateEvent:{type:Boolean,default:!0},...Ht(["ariaLabel"])}),al={[Me]:t=>_e(t)||ye(t),[Yt]:t=>_e(t)||ye(t),activeChange:t=>_e(t)||ye(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent},Ge=Symbol("colorPickerContextKey"),Re=function(t,n,a){return[t,n*a/((t=(2-n)*a)<1?t:2-t)||0,t/2]},ol=function(t){return typeof t=="string"&&t.includes(".")&&Number.parseFloat(t)===1},nl=function(t){return typeof t=="string"&&t.includes("%")},le=function(t,n){ol(t)&&(t="100%");const a=nl(t);return t=Math.min(n,Math.max(0,Number.parseFloat(`${t}`))),a&&(t=Number.parseInt(`${t*n}`,10)/100),Math.abs(t-n)<1e-6?1:t%n/Number.parseFloat(n)},Ye={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},fe=t=>{t=Math.min(Math.round(t),255);const n=Math.floor(t/16),a=t%16;return`${Ye[n]||n}${Ye[a]||a}`},We=function({r:t,g:n,b:a}){return Number.isNaN(+t)||Number.isNaN(+n)||Number.isNaN(+a)?"":`#${fe(t)}${fe(n)}${fe(a)}`},$e={A:10,B:11,C:12,D:13,E:14,F:15},J=function(t){return t.length===2?($e[t[0].toUpperCase()]||+t[0])*16+($e[t[1].toUpperCase()]||+t[1]):$e[t[1].toUpperCase()]||+t[1]},rl=function(t,n,a){n=n/100,a=a/100;let l=n;const e=Math.max(a,.01);a*=2,n*=a<=1?a:2-a,l*=e<=1?e:2-e;const r=(a+n)/2,s=a===0?2*l/(e+l):2*n/(a+n);return{h:t,s:s*100,v:r*100}},ze=(t,n,a)=>{t=le(t,255),n=le(n,255),a=le(a,255);const l=Math.max(t,n,a),e=Math.min(t,n,a);let r;const s=l,g=l-e,h=l===0?0:g/l;if(l===e)r=0;else{switch(l){case t:{r=(n-a)/g+(n<a?6:0);break}case n:{r=(a-t)/g+2;break}case a:{r=(t-n)/g+4;break}}r/=6}return{h:r*360,s:h*100,v:s*100}},se=function(t,n,a){t=le(t,360)*6,n=le(n,100),a=le(a,100);const l=Math.floor(t),e=t-l,r=a*(1-n),s=a*(1-e*n),g=a*(1-(1-e)*n),h=l%6,_=[a,s,r,r,g,a][h],F=[g,a,a,s,r,r][h],V=[r,r,g,a,a,s][h];return{r:Math.round(_*255),g:Math.round(F*255),b:Math.round(V*255)}};class ie{constructor(n={}){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="";for(const a in n)Le(n,a)&&(this[a]=n[a]);n.value?this.fromString(n.value):this.doOnChange()}set(n,a){if(arguments.length===1&&typeof n=="object"){for(const l in n)Le(n,l)&&this.set(l,n[l]);return}this[`_${n}`]=a,this.doOnChange()}get(n){return n==="alpha"?Math.floor(this[`_${n}`]):this[`_${n}`]}toRgb(){return se(this._hue,this._saturation,this._value)}fromString(n){if(!n){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}const a=(l,e,r)=>{this._hue=Math.max(0,Math.min(360,l)),this._saturation=Math.max(0,Math.min(100,e)),this._value=Math.max(0,Math.min(100,r)),this.doOnChange()};if(n.includes("hsl")){const l=n.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(e=>e!=="").map((e,r)=>r>2?Number.parseFloat(e):Number.parseInt(e,10));if(l.length===4?this._alpha=Number.parseFloat(l[3])*100:l.length===3&&(this._alpha=100),l.length>=3){const{h:e,s:r,v:s}=rl(l[0],l[1],l[2]);a(e,r,s)}}else if(n.includes("hsv")){const l=n.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(e=>e!=="").map((e,r)=>r>2?Number.parseFloat(e):Number.parseInt(e,10));l.length===4?this._alpha=Number.parseFloat(l[3])*100:l.length===3&&(this._alpha=100),l.length>=3&&a(l[0],l[1],l[2])}else if(n.includes("rgb")){const l=n.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(e=>e!=="").map((e,r)=>r>2?Number.parseFloat(e):Number.parseInt(e,10));if(l.length===4?this._alpha=Number.parseFloat(l[3])*100:l.length===3&&(this._alpha=100),l.length>=3){const{h:e,s:r,v:s}=ze(l[0],l[1],l[2]);a(e,r,s)}}else if(n.includes("#")){const l=n.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(l))return;let e,r,s;l.length===3?(e=J(l[0]+l[0]),r=J(l[1]+l[1]),s=J(l[2]+l[2])):(l.length===6||l.length===8)&&(e=J(l.slice(0,2)),r=J(l.slice(2,4)),s=J(l.slice(4,6))),l.length===8?this._alpha=J(l.slice(6))/255*100:(l.length===3||l.length===6)&&(this._alpha=100);const{h:g,s:h,v:_}=ze(e,r,s);a(g,h,_)}}compare(n){return Math.abs(n._hue-this._hue)<2&&Math.abs(n._saturation-this._saturation)<1&&Math.abs(n._value-this._value)<1&&Math.abs(n._alpha-this._alpha)<1}doOnChange(){const{_hue:n,_saturation:a,_value:l,_alpha:e,format:r}=this;if(this.enableAlpha)switch(r){case"hsl":{const s=Re(n,a/100,l/100);this.value=`hsla(${n}, ${Math.round(s[1]*100)}%, ${Math.round(s[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${n}, ${Math.round(a)}%, ${Math.round(l)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${We(se(n,a,l))}${fe(e*255/100)}`;break}default:{const{r:s,g,b:h}=se(n,a,l);this.value=`rgba(${s}, ${g}, ${h}, ${this.get("alpha")/100})`}}else switch(r){case"hsl":{const s=Re(n,a/100,l/100);this.value=`hsl(${n}, ${Math.round(s[1]*100)}%, ${Math.round(s[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${n}, ${Math.round(a)}%, ${Math.round(l)}%)`;break}case"rgb":{const{r:s,g,b:h}=se(n,a,l);this.value=`rgb(${s}, ${g}, ${h})`;break}default:this.value=We(se(n,a,l))}}}const sl=W({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0},enableAlpha:{type:Boolean,required:!0}},setup(t){const n=ae("color-predefine"),{currentColor:a}=at(Ge),l=w(r(t.colors,t.color));B(()=>a.value,s=>{const g=new ie;g.fromString(s),l.value.forEach(h=>{h.selected=g.compare(h)})}),ot(()=>{l.value=r(t.colors,t.color)});function e(s){t.color.fromString(t.colors[s])}function r(s,g){return s.map(h=>{const _=new ie;return _.enableAlpha=t.enableAlpha,_.format="rgba",_.fromString(h),_.selected=_.value===g.value,_})}return{rgbaColors:l,handleSelect:e,ns:n}}}),il=["onClick"];function ul(t,n,a,l,e,r){return v(),S("div",{class:E(t.ns.b())},[k("div",{class:E(t.ns.e("colors"))},[(v(!0),S(Y,null,z(t.rgbaColors,(s,g)=>(v(),S("div",{key:t.colors[g],class:E([t.ns.e("color-selector"),t.ns.is("alpha",s._alpha<100),{selected:s.selected}]),onClick:h=>t.handleSelect(g)},[k("div",{style:X({backgroundColor:s.value})},null,4)],10,il))),128))],2)],2)}var cl=oe(sl,[["render",ul],["__file","predefine.vue"]]);const dl=W({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(t){const n=ae("color-svpanel"),a=me(),l=w(0),e=w(0),r=w("hsl(0, 100%, 50%)"),s=L(()=>{const _=t.color.get("hue"),F=t.color.get("value");return{hue:_,value:F}});function g(){const _=t.color.get("saturation"),F=t.color.get("value"),V=a.vnode.el,{clientWidth:U,clientHeight:M}=V;e.value=_*U/100,l.value=(100-F)*M/100,r.value=`hsl(${t.color.get("hue")}, 100%, 50%)`}function h(_){const V=a.vnode.el.getBoundingClientRect(),{clientX:U,clientY:M}=Se(_);let T=U-V.left,P=M-V.top;T=Math.max(0,T),T=Math.min(T,V.width),P=Math.max(0,P),P=Math.min(P,V.height),e.value=T,l.value=P,t.color.set({saturation:T/V.width*100,value:100-P/V.height*100})}return B(()=>s.value,()=>{g()}),he(()=>{ue(a.vnode.el,{drag:_=>{h(_)},end:_=>{h(_)}}),g()}),{cursorTop:l,cursorLeft:e,background:r,colorValue:s,handleDrag:h,update:g,ns:n}}}),pl=k("div",null,null,-1),fl=[pl];function hl(t,n,a,l,e,r){return v(),S("div",{class:E(t.ns.b()),style:X({backgroundColor:t.background})},[k("div",{class:E(t.ns.e("white"))},null,2),k("div",{class:E(t.ns.e("black"))},null,2),k("div",{class:E(t.ns.e("cursor")),style:X({top:t.cursorTop+"px",left:t.cursorLeft+"px"})},fl,6)],6)}var ml=oe(dl,[["render",hl],["__file","sv-panel.vue"]]);const vl=["onKeydown"],gl=["id","aria-label","aria-labelledby","aria-description","aria-disabled","tabindex"],bl=W({name:"ElColorPicker"}),_l=W({...bl,props:ll,emits:al,setup(t,{expose:n,emit:a}){const l=t,{t:e}=nt(),r=ae("color"),{formItem:s}=xt(),g=Ot(),h=Kt(),{inputId:_,isLabeledByFormItem:F}=Rt(l,{formItemContext:s}),V=w(),U=w(),M=w(),T=w(),P=w(),j=w(),{isFocused:d,handleFocus:o,handleBlur:f}=Bt(P,{beforeBlur(m){var A;return(A=T.value)==null?void 0:A.isFocusInsideContent(m)},afterBlur(){Q(!1),C()}}),b=m=>{if(h.value)return Fe();o(m)};let y=!0;const N=qe(new ie({enableAlpha:l.showAlpha,format:l.colorFormat||"",value:l.modelValue})),K=w(!1),x=w(!1),Z=w(""),D=L(()=>!l.modelValue&&!x.value?"transparent":ge(N,l.showAlpha)),H=L(()=>!l.modelValue&&!x.value?"":N.value),ne=L(()=>F.value?void 0:l.label||l.ariaLabel||e("el.colorpicker.defaultLabel"));Lt({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-color-picker",ref:"https://element-plus.org/en-US/component/color-picker.html"},L(()=>!!l.label));const ce=L(()=>F.value?s==null?void 0:s.labelId:void 0),ve=L(()=>[r.b("picker"),r.is("disabled",h.value),r.bm("picker",g.value),r.is("focused",d.value)]);function ge(m,A){if(!(m instanceof ie))throw new TypeError("color should be instance of _color Class");const{r:R,g:Ue,b:Ae}=m.toRgb();return A?`rgba(${R}, ${Ue}, ${Ae}, ${m.get("alpha")/100})`:`rgb(${R}, ${Ue}, ${Ae})`}function Q(m){K.value=m}const ee=Mt(Q,100,{leading:!0});function de(){h.value||Q(!0)}function u(){ee(!1),C()}function C(){pe(()=>{l.modelValue?N.fromString(l.modelValue):(N.value="",pe(()=>{x.value=!1}))})}function $(){h.value||ee(!K.value)}function be(){N.fromString(Z.value)}function Ie(){const m=N.value;a(Me,m),a("change",m),l.validateEvent&&(s==null||s.validate("change").catch(A=>Ke())),ee(!1),pe(()=>{const A=new ie({enableAlpha:l.showAlpha,format:l.colorFormat||"",value:l.modelValue});N.compare(A)||C()})}function Ze(){ee(!1),a(Me,null),a("change",null),l.modelValue!==null&&l.validateEvent&&(s==null||s.validate("change").catch(m=>Ke())),C()}function Qe(m){if(K.value&&(u(),d.value)){const A=new FocusEvent("focus",m);f(A)}}function Ne(m){m.preventDefault(),m.stopPropagation(),Q(!1),C()}function Je(m){switch(m.code){case Ve.enter:case Ve.space:m.preventDefault(),m.stopPropagation(),de(),j.value.focus();break;case Ve.esc:Ne(m);break}}function et(){P.value.focus()}function Fe(){P.value.blur()}return he(()=>{l.modelValue&&(Z.value=H.value)}),B(()=>l.modelValue,m=>{m?m&&m!==N.value&&(y=!1,N.fromString(m)):x.value=!1}),B(()=>H.value,m=>{Z.value=m,y&&a("activeChange",m),y=!0}),B(()=>N.value,()=>{!l.modelValue&&!x.value&&(x.value=!0)}),B(()=>K.value,()=>{pe(()=>{var m,A,R;(m=V.value)==null||m.update(),(A=U.value)==null||A.update(),(R=M.value)==null||R.update()})}),rt(Ge,{currentColor:H}),n({color:N,show:de,hide:u,focus:et,blur:Fe}),(m,A)=>(v(),I(p(Ct),{ref_key:"popper",ref:T,visible:K.value,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[p(r).be("picker","panel"),p(r).b("dropdown"),m.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",teleported:m.teleported,transition:`${p(r).namespace.value}-zoom-in-top`,persistent:"",onHide:A[2]||(A[2]=R=>Q(!1))},{content:c(()=>[ke((v(),S("div",{onKeydown:Be(Ne,["esc"])},[k("div",{class:E(p(r).be("dropdown","main-wrapper"))},[i(tl,{ref_key:"hue",ref:V,class:"hue-slider",color:p(N),vertical:""},null,8,["color"]),i(ml,{ref_key:"sv",ref:U,color:p(N)},null,8,["color"])],2),m.showAlpha?(v(),I(Qt,{key:0,ref_key:"alpha",ref:M,color:p(N)},null,8,["color"])):q("v-if",!0),m.predefine?(v(),I(cl,{key:1,ref:"predefine","enable-alpha":m.showAlpha,color:p(N),colors:m.predefine},null,8,["enable-alpha","color","colors"])):q("v-if",!0),k("div",{class:E(p(r).be("dropdown","btns"))},[k("span",{class:E(p(r).be("dropdown","value"))},[i(p(Xe),{ref_key:"inputRef",ref:j,modelValue:Z.value,"onUpdate:modelValue":A[0]||(A[0]=R=>Z.value=R),"validate-event":!1,size:"small",onKeyup:Be(be,["enter"]),onBlur:be},null,8,["modelValue","onKeyup"])],2),i(p(Te),{class:E(p(r).be("dropdown","link-btn")),text:"",size:"small",onClick:Ze},{default:c(()=>[O(He(p(e)("el.colorpicker.clear")),1)]),_:1},8,["class"]),i(p(Te),{plain:"",size:"small",class:E(p(r).be("dropdown","btn")),onClick:Ie},{default:c(()=>[O(He(p(e)("el.colorpicker.confirm")),1)]),_:1},8,["class"])],2)],40,vl)),[[p(Vt),Qe]])]),default:c(()=>[k("div",st({id:p(_),ref_key:"triggerRef",ref:P},m.$attrs,{class:p(ve),role:"button","aria-label":p(ne),"aria-labelledby":p(ce),"aria-description":p(e)("el.colorpicker.description",{color:m.modelValue||""}),"aria-disabled":p(h),tabindex:p(h)?-1:m.tabindex,onKeydown:Je,onFocus:b,onBlur:A[1]||(A[1]=(...R)=>p(f)&&p(f)(...R))}),[p(h)?(v(),S("div",{key:0,class:E(p(r).be("picker","mask"))},null,2)):q("v-if",!0),k("div",{class:E(p(r).be("picker","trigger")),onClick:$},[k("span",{class:E([p(r).be("picker","color"),p(r).is("alpha",m.showAlpha)])},[k("span",{class:E(p(r).be("picker","color-inner")),style:X({backgroundColor:p(D)})},[ke(i(p(Ee),{class:E([p(r).be("picker","icon"),p(r).is("icon-arrow-down")])},{default:c(()=>[i(p(it))]),_:1},8,["class"]),[[xe,m.modelValue||x.value]]),ke(i(p(Ee),{class:E([p(r).be("picker","empty"),p(r).is("icon-close")])},{default:c(()=>[i(p(ut))]),_:1},8,["class"]),[[xe,!m.modelValue&&!x.value]])],6)],2)],2)],16,gl)]),_:1},8,["visible","popper-class","teleported","transition"]))}});var yl=oe(_l,[["__file","color-picker.vue"]]);const kl=je(yl),Vl=we({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:Pe(String),default:"solid"}}),Cl=W({name:"ElDivider"}),$l=W({...Cl,props:Vl,setup(t){const n=t,a=ae("divider"),l=L(()=>a.cssVar({"border-style":n.borderStyle}));return(e,r)=>(v(),S("div",{class:E([p(a).b(),p(a).m(e.direction)]),style:X(p(l)),role:"separator"},[e.$slots.default&&e.direction!=="vertical"?(v(),S("div",{key:0,class:E([p(a).e("text"),p(a).is(e.contentPosition)])},[ct(e.$slots,"default")],2)):q("v-if",!0)],6))}});var Tl=oe($l,[["__file","divider.vue"]]);const El=je(Tl),G=t=>(ht("data-v-5d2d14a5"),t=t(),mt(),t),Ml=G(()=>k("span",{class:"title"},"基本信息",-1)),wl=G(()=>k("span",{class:"title"},"时间信息",-1)),Pl=G(()=>k("span",{class:"title"},"图片素材",-1)),Sl={class:"image-slot"},Il=G(()=>k("span",{class:"title"},"展区分类",-1)),Nl=G(()=>k("span",{class:"title"},"单价设置",-1)),Fl={class:"list"},Ul={key:0,for:""},Al={key:0,for:""},Dl={key:0,for:""},Ll=G(()=>k("span",{class:"title"},"加收设置",-1)),Bl={class:"list"},Hl=G(()=>k("span",{class:"title"},"折扣设置",-1)),xl={class:"list"},Ol=G(()=>k("span",{class:"title"},"付款期限",-1)),Kl={class:"s-flex-center"},Rl=W({__name:"Add",setup(t){const n=dt();let l=pt().query.id;const e=qe({exhibitionName:"",cityId:"",cityName:"",hallId:"",hallName:"",positionImgType:1,host:[""],arrangeStartTime:"",arrangeEndTime:"",startTime:"",endTime:"",saleEndTime:"",payFirst:"",payFinal:"",position:[{code:"",img:""}],cate:[{name:"",rgb:""}],unitPrice:[{text:"",price:0,num:0}],attachPrice:[{text:"",price:0,priceType:1,changeType:1},{text:"",price:"",priceType:1,changeType:-1}]}),r=w(""),s=w(["",""]),g=w(["",""]),h=w([]),_=w([]);B(s,async(d,o)=>{d&&d[0]&&d[1]?(e.arrangeStartTime=d[0],e.arrangeEndTime=d[1]):(e.arrangeStartTime="",e.arrangeEndTime="")}),B(g,async(d,o)=>{d&&d[0]&&d[1]?(e.startTime=d[0],e.endTime=d[1]):(e.startTime="",e.endTime="")}),l&&St({id:l}).then(d=>{if(d.code===0&&d.data){let o=d.data;e.exhibitionName=o.exhibitionName,e.cityId=o.cityId+"",e.cityName=o.cityName,e.hallId=o.hallId,e.hallName=o.hallName,e.positionImgType=o.positionImgType||1,e.host=o.host,e.arrangeStartTime=o.arrangeStartTime,e.arrangeEndTime=o.arrangeEndTime,s.value=[o.arrangeStartTime,o.arrangeEndTime],g.value=[o.startTime,o.endTime],e.startTime=o.startTime,e.endTime=o.endTime,e.saleEndTime=o.saleEndTime,e.payFirst=o.payFirst,e.payFinal=o.payFinal,e.position=o.position,e.cate=o.cate.length?o.cate:[{name:"",rgb:""}],e.unitPrice=o.unitPrice.length?o.unitPrice:[{text:"",price:0,num:0}];let f=0,b=0;e.attachPrice=o.add.map(y=>(y.change_type==1?f++:b++,{text:y.text,price:y.price,priceType:y.price_type,changeType:y.change_type})),o.discount.forEach(y=>{y.change_type==1?f++:b++,e.attachPrice.push({text:y.text,price:y.price,priceType:y.price_type,changeType:y.change_type})}),f===0&&e.attachPrice.push({text:"",price:0,priceType:1,changeType:1}),b===0&&e.attachPrice.push({text:"",price:0,priceType:1,changeType:-1})}}),It().then(d=>{d.code===0&&d.data.length>0&&(h.value=d.data)});const F=d=>{e.cityName=h.value.filter(o=>o.id==d)[0].cityName,_.value=[],e.hallId="",e.hallName=""};B(()=>e.cityId,async(d,o)=>{M()}),B(()=>e.hallId,async(d,o)=>{U()});const V=d=>{e.hallName=_.value.filter(o=>o.id==d)[0].hallName},U=()=>{e.hallId&&Nt({hallId:e.hallId}).then(d=>{d.code===0&&d.data.length>0&&(r.value=d.data)})},M=()=>{e.cityId&&Ft({id:e.cityId}).then(d=>{d.code===0&&d.data.length>0&&(_.value=d.data)})},T=d=>d.size/1024/1024>3?(re.error("文件大小不能超过 3MB!"),!1):!0,P=d=>{let o=new FormData;return o.append("upload",d.file),new Promise((f,b)=>{Dt(o).then(y=>{y.code===0?f(y.data):b(y)})})},j=()=>{console.log(e);let d={};for(let o in e)if(e[o]!==void 0)if(o==="position"){let f=e[o].filter(b=>b.img);d[o]=f}else if(o==="cate"){let f=e[o].filter(b=>b.name&&b.rgb);d[o]=f}else if(o==="unitPrice"){let f=e[o].filter(b=>b.text&&b.price&&b.num);d[o]=f}else if(o==="attachPrice"){let f=e[o].filter(b=>b.text&&b.price);d[o]=f}else if(o==="host"){let f=e[o].filter(b=>b);d[o]=f}else d[o]=e[o];l?(d.id=l,Ut(d).then(o=>{o.code===0?(re.success("保存成功"),n.back()):re.error(o.msg)})):At(d).then(o=>{o.code===0?(re.success("保存成功"),n.back()):re.error(o.msg)})};return(d,o)=>{const f=El,b=Xe,y=gt,N=wt,K=Pt,x=Tt,Z=Et,D=Te,H=$t,ne=yt,ce=_t,ve=bt,ge=ft("Picture"),Q=Ee,ee=kl,de=vt;return v(),I(de,{model:e,"label-width":"auto","label-position":"left"},{default:c(()=>[i(f,{"content-position":"left"},{default:c(()=>[Ml]),_:1}),i(H,{md:16,lg:10,offset:1},{default:c(()=>[i(y,{label:"展会名称"},{default:c(()=>[i(b,{modelValue:e.exhibitionName,"onUpdate:modelValue":o[0]||(o[0]=u=>e.exhibitionName=u)},null,8,["modelValue"])]),_:1}),i(y,{label:"所在城市"},{default:c(()=>[i(K,{modelValue:e.cityId,"onUpdate:modelValue":o[1]||(o[1]=u=>e.cityId=u),filterable:"",placeholder:"",onChange:F},{default:c(()=>[(v(!0),S(Y,null,z(h.value,u=>(v(),I(N,{key:u.id,label:u.cityName,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),i(y,{label:"所在展馆"},{default:c(()=>[i(K,{modelValue:e.hallId,"onUpdate:modelValue":o[2]||(o[2]=u=>e.hallId=u),placeholder:"",onChange:V},{default:c(()=>[(v(!0),S(Y,null,z(_.value,u=>(v(),I(N,{key:u.id,label:u.hallName,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),i(y,{label:"展位图类型"},{default:c(()=>[i(Z,{modelValue:e.positionImgType,"onUpdate:modelValue":o[3]||(o[3]=u=>e.positionImgType=u)},{default:c(()=>[i(x,{value:1},{default:c(()=>[O("已有展位图上传")]),_:1}),i(x,{value:2},{default:c(()=>[O("在线自定义展位")]),_:1})]),_:1},8,["modelValue"])]),_:1}),(v(!0),S(Y,null,z(e.host,(u,C)=>(v(),I(y,{key:C,label:C>0?" ":"主办单位",prop:"form.host."+C},{default:c(()=>[i(b,{modelValue:e.host[C],"onUpdate:modelValue":$=>e.host[C]=$},{append:c(()=>[C===0?(v(),I(D,{key:0,icon:"Plus",onClick:o[4]||(o[4]=()=>{e.host.push("")})})):(v(),I(D,{key:1,icon:"Minus",onClick:te(()=>{e.host.splice(C,1)},["prevent"])},null,8,["onClick"]))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","prop"]))),128))]),_:1}),i(f,{"content-position":"left"},{default:c(()=>[wl]),_:1}),i(H,{md:16,lg:10,offset:1},{default:c(()=>[i(y,{label:"布展日期"},{default:c(()=>[i(ne,{modelValue:s.value,"onUpdate:modelValue":o[5]||(o[5]=u=>s.value=u),"value-format":"YYYY-MM-DD",type:"daterange","range-separator":"至","start-placeholder":"","end-placeholder":""},null,8,["modelValue"])]),_:1}),i(y,{label:"开展日期"},{default:c(()=>[i(ne,{modelValue:g.value,"onUpdate:modelValue":o[6]||(o[6]=u=>g.value=u),"value-format":"YYYY-MM-DD",type:"daterange","range-separator":"至","start-placeholder":"","end-placeholder":""},null,8,["modelValue"])]),_:1}),i(y,{label:"销售截止日期"},{default:c(()=>[i(ne,{modelValue:e.saleEndTime,"onUpdate:modelValue":o[7]||(o[7]=u=>e.saleEndTime=u),"value-format":"YYYY-MM-DD",type:"date",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),i(f,{"content-position":"left"},{default:c(()=>[Pl]),_:1}),i(H,{md:16,lg:10,offset:1},{default:c(()=>[i(y,{label:"招展平面图"},{default:c(()=>[i(ce,{src:r.value,"preview-src-list":[r.value],fit:"cover",style:{width:"100px",height:"100px"}},null,8,["src","preview-src-list"])]),_:1}),i(y,{label:"展位图"},{default:c(()=>[(v(!0),S(Y,null,z(e.position,(u,C)=>(v(),S("div",{key:C,style:{display:"flex","align-items":"center","margin-bottom":"10px"}},[i(b,{modelValue:u.code,"onUpdate:modelValue":$=>u.code=$,placeholder:"展馆号",style:{"max-width":"220px"}},{append:c(()=>[C===0?(v(),I(D,{key:0,icon:"Plus",onClick:o[8]||(o[8]=()=>{e.position.push({code:"",img:""})})})):(v(),I(D,{key:1,icon:"Minus",onClick:te(()=>{e.position.splice(C,1)},["prevent"])},null,8,["onClick"]))]),_:2},1032,["modelValue","onUpdate:modelValue"]),i(ve,{style:{"margin-left":"10px",display:"inline-flex","align-items":"center","justify-content":"center"},class:"","show-file-list":!1,"on-success":($,be,Ie)=>{e.position[C].img=$.url},"before-upload":T,"http-request":P,accept:"image/*"},{default:c(()=>[i(D,{link:"",type:"primary"},{default:c(()=>[O("上传图片")]),_:1})]),_:2},1032,["on-success"]),u.img?(v(),I(ce,{key:0,src:u.img,"preview-src-list":[u.img],fit:"cover",style:{width:"32px",height:"32px","margin-left":"10px"}},{error:c(()=>[k("div",Sl,[i(Q,null,{default:c(()=>[i(ge)]),_:1})])]),_:2},1032,["src","preview-src-list"])):q("",!0)]))),128))]),_:1})]),_:1}),e.positionImgType==2?(v(),S(Y,{key:0},[i(f,{"content-position":"left"},{default:c(()=>[Il]),_:1}),i(H,{md:16,lg:10,offset:1},{default:c(()=>[(v(!0),S(Y,null,z(e.cate,(u,C)=>(v(),I(y,{label:" "},{default:c(()=>[i(b,{modelValue:u.name,"onUpdate:modelValue":$=>u.name=$,placeholder:"请输入展区分类",style:{"max-width":"220px"}},{append:c(()=>[C===0?(v(),I(D,{key:0,icon:"Plus",onClick:o[9]||(o[9]=()=>{e.cate.push({name:"",rgb:""})})})):(v(),I(D,{key:1,icon:"Minus",onClick:te(()=>{e.cate.splice(C,1)},["prevent"])},null,8,["onClick"]))]),_:2},1032,["modelValue","onUpdate:modelValue"]),i(ee,{style:{"margin-left":"10px"},modelValue:u.rgb,"onUpdate:modelValue":$=>u.rgb=$},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))),256))]),_:1})],64)):q("",!0),i(f,{"content-position":"left"},{default:c(()=>[Nl]),_:1}),i(H,{md:16,lg:10,offset:1},{default:c(()=>[i(y,{label:" "},{default:c(()=>[(v(!0),S(Y,null,z(e.unitPrice,(u,C)=>(v(),S("div",Fl,[k("div",null,[C===0?(v(),S("label",Ul,"标题")):q("",!0),i(b,{modelValue:u.text,"onUpdate:modelValue":$=>u.text=$,placeholder:"请输入标题"},null,8,["modelValue","onUpdate:modelValue"])]),k("div",null,[C===0?(v(),S("label",Al,"单价")):q("",!0),i(b,{modelValue:u.price,"onUpdate:modelValue":$=>u.price=$,placeholder:"请输入单价",type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),k("div",null,[C===0?(v(),S("label",Dl,"计价基数")):q("",!0),i(b,{modelValue:u.num,"onUpdate:modelValue":$=>u.num=$,placeholder:"请输入计价基数",type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),C===0?(v(),I(D,{key:0,type:"info",plain:"",icon:"Plus",onClick:o[10]||(o[10]=()=>{e.unitPrice.push({text:"",price:0,num:0})})})):(v(),I(D,{key:1,type:"info",plain:"",icon:"Minus",onClick:te(()=>{e.unitPrice.splice(C,1)},["prevent"])},null,8,["onClick"]))]))),256))]),_:1})]),_:1}),i(f,{"content-position":"left"},{default:c(()=>[Ll]),_:1}),i(H,{md:16,lg:10,offset:1},{default:c(()=>[(v(!0),S(Y,null,z(e.attachPrice.filter(u=>u.changeType===1),(u,C)=>(v(),I(y,{label:"加收"},{default:c(()=>[k("div",Bl,[k("div",null,[i(b,{modelValue:u.text,"onUpdate:modelValue":$=>u.text=$,placeholder:"例如：双开口"},null,8,["modelValue","onUpdate:modelValue"])]),k("div",null,[i(b,{type:"number",modelValue:u.price,"onUpdate:modelValue":$=>u.price=$,placeholder:"设置金额"},{append:c(()=>[i(K,{modelValue:u.priceType,"onUpdate:modelValue":$=>u.priceType=$,placeholder:"",style:{width:"60px"}},{default:c(()=>[i(N,{label:"%",value:1}),i(N,{label:"￥",value:2})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),C===0?(v(),I(D,{key:0,type:"info",plain:"",icon:"Plus",onClick:o[11]||(o[11]=()=>{e.attachPrice.push({text:"",price:0,priceType:1,changeType:1})})})):(v(),I(D,{key:1,type:"info",plain:"",icon:"Minus",onClick:te(()=>{e.attachPrice.splice(C,1)},["prevent"])},null,8,["onClick"]))])]),_:2},1024))),256))]),_:1}),i(f,{"content-position":"left"},{default:c(()=>[Hl]),_:1}),i(H,{md:16,lg:10,offset:1},{default:c(()=>[(v(!0),S(Y,null,z(e.attachPrice.filter(u=>u.changeType===-1),(u,C)=>(v(),I(y,{label:"折扣"},{default:c(()=>[k("div",xl,[k("div",null,[i(b,{modelValue:u.text,"onUpdate:modelValue":$=>u.text=$,placeholder:"例如：提前预定"},null,8,["modelValue","onUpdate:modelValue"])]),k("div",null,[i(b,{type:"number",modelValue:u.price,"onUpdate:modelValue":$=>u.price=$,placeholder:"设置金额"},{append:c(()=>[i(K,{modelValue:u.priceType,"onUpdate:modelValue":$=>u.priceType=$,placeholder:"",style:{width:"60px"}},{default:c(()=>[i(N,{label:"%",value:1}),i(N,{label:"￥",value:2})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),C===0?(v(),I(D,{key:0,type:"info",plain:"",icon:"Plus",onClick:o[12]||(o[12]=()=>{e.attachPrice.push({text:"",price:0,priceType:1,changeType:-1})})})):(v(),I(D,{key:1,type:"info",plain:"",icon:"Minus",onClick:te(()=>{e.attachPrice.splice(C,1)},["prevent"])},null,8,["onClick"]))])]),_:2},1024))),256))]),_:1}),i(f,{"content-position":"left"},{default:c(()=>[Ol]),_:1}),i(H,{md:16,lg:10,offset:1},{default:c(()=>[i(y,{label:"一期款"},{default:c(()=>[i(b,{type:"number",modelValue:e.payFirst,"onUpdate:modelValue":o[13]||(o[13]=u=>e.payFirst=u)},{prepend:c(()=>[O("合同签订后")]),append:c(()=>[O("个自然日")]),_:1},8,["modelValue"])]),_:1}),i(y,{label:"尾款及全款"},{default:c(()=>[i(b,{type:"number",modelValue:e.payFinal,"onUpdate:modelValue":o[14]||(o[14]=u=>e.payFinal=u)},{prepend:c(()=>[O("合同签订后")]),append:c(()=>[O("个自然日")]),_:1},8,["modelValue"])]),_:1})]),_:1}),k("div",Kl,[i(D,{type:"primary",onClick:j},{default:c(()=>[O("保存")]),_:1}),i(D,{onClick:o[15]||(o[15]=u=>d.$router.go(-1))},{default:c(()=>[O("取消")]),_:1})])]),_:1},8,["model"])}}}),ka=Wt(Rl,[["__scopeId","data-v-5d2d14a5"]]);export{ka as default};
