import{j as Y,d as N,a1 as ae,k as K,c as E,o as T,b as _,O,r as k,n as y,e,Q as se,R as M,i as D,h as j,a9 as te,a3 as q,f as H,G as Z,a7 as ne,aD as re,l as w,bo as ie,c3 as de,t as G,L as ue,x as ce,D as fe,E as J,Z as ve,u as me,a as pe,v as ye,B as ge,m as Ce,al as be,C as he,T as De,aJ as ke,w as we}from"./index-CcZ7XGMY.js";import{u as Ee,a as Be,E as Ie,b as Te}from"./index-BBJnnwGy.js";import{i as Fe,b as Ae,_ as W,C as Se,d as $e,e as Le}from"./request-xKsCOlzW.js";import{F as Pe,i as Re,d as Oe}from"./el-popper-Bwfxp3Mi.js";import{c as Me}from"./refs-wB-gPoO5.js";import{U as X}from"./event-BB_Ol6Sd.js";import{i as Q}from"./use-form-item-DIvTaMtO.js";const x=Symbol("dialogInjectionKey"),ee=Y({center:Boolean,alignCenter:Boolean,closeIcon:{type:Fe},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),Ne={close:()=>!0},ze=["aria-level"],Ve=["aria-label"],Ue=["id"],_e=N({name:"ElDialogContent"}),je=N({..._e,props:ee,emits:Ne,setup(o){const t=o,{t:u}=ae(),{Close:S}=Se,{dialogRef:n,headerRef:c,bodyId:B,ns:s,style:g}=K(x),{focusTrapRef:r}=K(Pe),f=E(()=>[s.b(),s.is("fullscreen",t.fullscreen),s.is("draggable",t.draggable),s.is("align-center",t.alignCenter),{[s.m("center")]:t.center}]),v=Me(r,n),C=E(()=>t.draggable),d=E(()=>t.overflow);return Ee(n,c,C,d),(a,I)=>(T(),_("div",{ref:e(v),class:y(e(f)),style:H(e(g)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:c,class:y([e(s).e("header"),{"show-close":a.showClose}])},[k(a.$slots,"header",{},()=>[O("span",{role:"heading","aria-level":a.ariaLevel,class:y(e(s).e("title"))},se(a.title),11,ze)]),a.showClose?(T(),_("button",{key:0,"aria-label":e(u)("el.dialog.close"),class:y(e(s).e("headerbtn")),type:"button",onClick:I[0]||(I[0]=$=>a.$emit("close"))},[M(e(Ae),{class:y(e(s).e("close"))},{default:D(()=>[(T(),j(te(a.closeIcon||e(S))))]),_:1},8,["class"])],10,Ve)):q("v-if",!0)],2),O("div",{id:e(B),class:y(e(s).e("body"))},[k(a.$slots,"default")],10,Ue),a.$slots.footer?(T(),_("footer",{key:0,class:y(e(s).e("footer"))},[k(a.$slots,"footer")],2)):q("v-if",!0)],6))}});var qe=W(je,[["__file","dialog-content.vue"]]);const Ke=Y({...ee,appendToBody:Boolean,appendTo:{type:Z(String),default:"body"},beforeClose:{type:Z(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Ze={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[X]:o=>ne(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ge=(o,t)=>{var u;const n=fe().emit,{nextZIndex:c}=re();let B="";const s=Q(),g=Q(),r=w(!1),f=w(!1),v=w(!1),C=w((u=o.zIndex)!=null?u:c());let d,a;const I=ie("namespace",de),$=E(()=>{const i={},h=`--${I.value}-dialog`;return o.fullscreen||(o.top&&(i[`${h}-margin-top`]=o.top),o.width&&(i[`${h}-width`]=$e(o.width))),i}),z=E(()=>o.alignCenter?{display:"flex"}:{});function L(){n("opened")}function V(){n("closed"),n(X,!1),o.destroyOnClose&&(v.value=!1)}function U(){n("close")}function P(){a==null||a(),d==null||d(),o.openDelay&&o.openDelay>0?{stop:d}=J(()=>R(),o.openDelay):R()}function F(){d==null||d(),a==null||a(),o.closeDelay&&o.closeDelay>0?{stop:a}=J(()=>l(),o.closeDelay):l()}function A(){function i(h){h||(f.value=!0,r.value=!1)}o.beforeClose?o.beforeClose(i):F()}function m(){o.closeOnClickModal&&A()}function R(){ve&&(r.value=!0)}function l(){r.value=!1}function p(){n("openAutoFocus")}function b(){n("closeAutoFocus")}function oe(i){var h;((h=i.detail)==null?void 0:h.focusReason)==="pointer"&&i.preventDefault()}o.lockScroll&&Be(r);function le(){o.closeOnPressEscape&&A()}return G(()=>o.modelValue,i=>{i?(f.value=!1,P(),v.value=!0,C.value=Re(o.zIndex)?c():C.value++,ue(()=>{n("open"),t.value&&(t.value.scrollTop=0)})):r.value&&F()}),G(()=>o.fullscreen,i=>{t.value&&(i?(B=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=B)}),ce(()=>{o.modelValue&&(r.value=!0,v.value=!0,P())}),{afterEnter:L,afterLeave:V,beforeLeave:U,handleClose:A,onModalClick:m,close:F,doClose:l,onOpenAutoFocus:p,onCloseAutoFocus:b,onCloseRequested:le,onFocusoutPrevented:oe,titleId:s,bodyId:g,closed:f,style:$,overlayDialogStyle:z,rendered:v,visible:r,zIndex:C}},Je=["aria-label","aria-labelledby","aria-describedby"],Qe=N({name:"ElDialog",inheritAttrs:!1}),Ye=N({...Qe,props:Ke,emits:Ze,setup(o,{expose:t}){const u=o,S=me();Le({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},E(()=>!!S.title));const n=pe("dialog"),c=w(),B=w(),s=w(),{visible:g,titleId:r,bodyId:f,style:v,overlayDialogStyle:C,rendered:d,zIndex:a,afterEnter:I,afterLeave:$,beforeLeave:z,handleClose:L,onModalClick:V,onOpenAutoFocus:U,onCloseAutoFocus:P,onCloseRequested:F,onFocusoutPrevented:A}=Ge(u,c);ye(x,{dialogRef:c,headerRef:B,bodyId:f,ns:n,rendered:d,style:v});const m=Te(V),R=E(()=>u.draggable&&!u.fullscreen);return t({visible:g,dialogContentRef:s}),(l,p)=>(T(),j(ke,{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},[M(De,{name:"dialog-fade",onAfterEnter:e(I),onAfterLeave:e($),onBeforeLeave:e(z),persisted:""},{default:D(()=>[ge(M(e(Ie),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(a)},{default:D(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(r),"aria-describedby":e(f),class:y(`${e(n).namespace.value}-overlay-dialog`),style:H(e(C)),onClick:p[0]||(p[0]=(...b)=>e(m).onClick&&e(m).onClick(...b)),onMousedown:p[1]||(p[1]=(...b)=>e(m).onMousedown&&e(m).onMousedown(...b)),onMouseup:p[2]||(p[2]=(...b)=>e(m).onMouseup&&e(m).onMouseup(...b))},[M(e(Oe),{loop:"",trapped:e(g),"focus-start-el":"container",onFocusAfterTrapped:e(U),onFocusAfterReleased:e(P),onFocusoutPrevented:e(A),onReleaseRequested:e(F)},{default:D(()=>[e(d)?(T(),j(qe,Ce({key:0,ref_key:"dialogContentRef",ref:s},l.$attrs,{center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(R),overflow:l.overflow,fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(L)}),be({header:D(()=>[l.$slots.title?k(l.$slots,"title",{key:1}):k(l.$slots,"header",{key:0,close:e(L),titleId:e(r),titleClass:e(n).e("title")})]),default:D(()=>[k(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:D(()=>[k(l.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):q("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Je)]),_:3},8,["mask","overlay-class","z-index"]),[[he,e(g)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var He=W(Ye,[["__file","dialog.vue"]]);const so=we(He);export{so as E};
