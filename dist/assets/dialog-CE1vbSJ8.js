import{p as J,q as ae,d as N,ag as se,s as j,c as D,o as T,b as q,X as M,r as w,n as y,e,Z as te,$ as O,i as E,h as K,aq as ne,G as re,aj as _,f as X,_ as Q,bR as ie,M as Z,ao as de,aY as ue,t as k,bh as ce,bS as fe,ad as ve,z as G,U as pe,B as me,K as ye,L as Y,ab as ge,u as be,ah as Ce,a as he,A as Ee,H as we,m as ke,aE as De,I as Ie,T as Be,b2 as Te,w as Ae}from"./index-Burj71Mz.js";import{u as Fe,a as Se,E as $e,b as Le}from"./index-CvsXQ4m2.js";import{F as Pe,i as Re,E as Me}from"./focus-trap-BKKcV_7_.js";import{c as Oe}from"./refs-BGTEdiMJ.js";import{U as W}from"./event-BB_Ol6Sd.js";import{i as H}from"./use-form-item-tjLgBssR.js";const x=Symbol("dialogInjectionKey"),ee=J({center:Boolean,alignCenter:Boolean,closeIcon:{type:ae},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),Ne={close:()=>!0},ze=["aria-level"],Ue=["aria-label"],Ve=["id"],qe=N({name:"ElDialogContent"}),Ke=N({...qe,props:ee,emits:Ne,setup(o){const t=o,{t:u}=se(),{Close:S}=ie,{dialogRef:n,headerRef:c,bodyId:I,ns:s,style:g}=j(x),{focusTrapRef:r}=j(Pe),f=D(()=>[s.b(),s.is("fullscreen",t.fullscreen),s.is("draggable",t.draggable),s.is("align-center",t.alignCenter),{[s.m("center")]:t.center}]),v=Oe(r,n),b=D(()=>t.draggable),d=D(()=>t.overflow);return Fe(n,c,b,d),(a,B)=>(T(),q("div",{ref:e(v),class:y(e(f)),style:X(e(g)),tabindex:"-1"},[M("header",{ref_key:"headerRef",ref:c,class:y([e(s).e("header"),{"show-close":a.showClose}])},[w(a.$slots,"header",{},()=>[M("span",{role:"heading","aria-level":a.ariaLevel,class:y(e(s).e("title"))},te(a.title),11,ze)]),a.showClose?(T(),q("button",{key:0,"aria-label":e(u)("el.dialog.close"),class:y(e(s).e("headerbtn")),type:"button",onClick:B[0]||(B[0]=$=>a.$emit("close"))},[O(e(re),{class:y(e(s).e("close"))},{default:E(()=>[(T(),K(ne(a.closeIcon||e(S))))]),_:1},8,["class"])],10,Ue)):_("v-if",!0)],2),M("div",{id:e(I),class:y(e(s).e("body"))},[w(a.$slots,"default")],10,Ve),a.$slots.footer?(T(),q("footer",{key:0,class:y(e(s).e("footer"))},[w(a.$slots,"footer")],2)):_("v-if",!0)],6))}});var _e=Q(Ke,[["__file","dialog-content.vue"]]);const je=J({...ee,appendToBody:Boolean,appendTo:{type:Z(String),default:"body"},beforeClose:{type:Z(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Ze={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[W]:o=>de(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ge=(o,t)=>{var u;const n=ye().emit,{nextZIndex:c}=ue();let I="";const s=H(),g=H(),r=k(!1),f=k(!1),v=k(!1),b=k((u=o.zIndex)!=null?u:c());let d,a;const B=ce("namespace",fe),$=D(()=>{const i={},h=`--${B.value}-dialog`;return o.fullscreen||(o.top&&(i[`${h}-margin-top`]=o.top),o.width&&(i[`${h}-width`]=ve(o.width))),i}),z=D(()=>o.alignCenter?{display:"flex"}:{});function L(){n("opened")}function U(){n("closed"),n(W,!1),o.destroyOnClose&&(v.value=!1)}function V(){n("close")}function P(){a==null||a(),d==null||d(),o.openDelay&&o.openDelay>0?{stop:d}=Y(()=>R(),o.openDelay):R()}function A(){d==null||d(),a==null||a(),o.closeDelay&&o.closeDelay>0?{stop:a}=Y(()=>l(),o.closeDelay):l()}function F(){function i(h){h||(f.value=!0,r.value=!1)}o.beforeClose?o.beforeClose(i):A()}function p(){o.closeOnClickModal&&F()}function R(){ge&&(r.value=!0)}function l(){r.value=!1}function m(){n("openAutoFocus")}function C(){n("closeAutoFocus")}function oe(i){var h;((h=i.detail)==null?void 0:h.focusReason)==="pointer"&&i.preventDefault()}o.lockScroll&&Se(r);function le(){o.closeOnPressEscape&&F()}return G(()=>o.modelValue,i=>{i?(f.value=!1,P(),v.value=!0,b.value=Re(o.zIndex)?c():b.value++,pe(()=>{n("open"),t.value&&(t.value.scrollTop=0)})):r.value&&A()}),G(()=>o.fullscreen,i=>{t.value&&(i?(I=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=I)}),me(()=>{o.modelValue&&(r.value=!0,v.value=!0,P())}),{afterEnter:L,afterLeave:U,beforeLeave:V,handleClose:F,onModalClick:p,close:A,doClose:l,onOpenAutoFocus:m,onCloseAutoFocus:C,onCloseRequested:le,onFocusoutPrevented:oe,titleId:s,bodyId:g,closed:f,style:$,overlayDialogStyle:z,rendered:v,visible:r,zIndex:b}},Ye=["aria-label","aria-labelledby","aria-describedby"],He=N({name:"ElDialog",inheritAttrs:!1}),Je=N({...He,props:je,emits:Ze,setup(o,{expose:t}){const u=o,S=be();Ce({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},D(()=>!!S.title));const n=he("dialog"),c=k(),I=k(),s=k(),{visible:g,titleId:r,bodyId:f,style:v,overlayDialogStyle:b,rendered:d,zIndex:a,afterEnter:B,afterLeave:$,beforeLeave:z,handleClose:L,onModalClick:U,onOpenAutoFocus:V,onCloseAutoFocus:P,onCloseRequested:A,onFocusoutPrevented:F}=Ge(u,c);Ee(x,{dialogRef:c,headerRef:I,bodyId:f,ns:n,rendered:d,style:v});const p=Le(U),R=D(()=>u.draggable&&!u.fullscreen);return t({visible:g,dialogContentRef:s}),(l,m)=>(T(),K(Te,{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},[O(Be,{name:"dialog-fade",onAfterEnter:e(B),onAfterLeave:e($),onBeforeLeave:e(z),persisted:""},{default:E(()=>[we(O(e($e),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(a)},{default:E(()=>[M("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(r),"aria-describedby":e(f),class:y(`${e(n).namespace.value}-overlay-dialog`),style:X(e(b)),onClick:m[0]||(m[0]=(...C)=>e(p).onClick&&e(p).onClick(...C)),onMousedown:m[1]||(m[1]=(...C)=>e(p).onMousedown&&e(p).onMousedown(...C)),onMouseup:m[2]||(m[2]=(...C)=>e(p).onMouseup&&e(p).onMouseup(...C))},[O(e(Me),{loop:"",trapped:e(g),"focus-start-el":"container",onFocusAfterTrapped:e(V),onFocusAfterReleased:e(P),onFocusoutPrevented:e(F),onReleaseRequested:e(A)},{default:E(()=>[e(d)?(T(),K(_e,ke({key:0,ref_key:"dialogContentRef",ref:s},l.$attrs,{center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(R),overflow:l.overflow,fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(L)}),De({header:E(()=>[l.$slots.title?w(l.$slots,"title",{key:1}):w(l.$slots,"header",{key:0,close:e(L),titleId:e(r),titleClass:e(n).e("title")})]),default:E(()=>[w(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:E(()=>[w(l.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):_("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ye)]),_:3},8,["mask","overlay-class","z-index"]),[[Ie,e(g)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var Xe=Q(Je,[["__file","dialog.vue"]]);const ao=Ae(Xe);export{ao as E};