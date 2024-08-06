import{E as fe}from"./el-button-DpDBUIvU.js";import{c as k,a as Ne,u as de,E as ke,O as Be,w as ue,F as Le}from"./el-popper-BOD4jC64.js";import{E as Pe}from"./el-scrollbar-mi-wsowL.js";import{_ as M,k as Ke,E as $,i as De,b as me,d as Me}from"./request-DkBJXzax.js";import{d as A,r as B,l as _,v as U,k as C,x as Ae,e as h,y as ve,j as Q,G as P,c as y,b2 as Ge,M as V,t as ge,N as I,o as K,h as H,i as b,R as S,bn as ze,bo as Ye,L as Ue,p as He,a as oe,a1 as Je,b as q,al as Ve,m as j,n as Z,a3 as x,D as be,O as je,a9 as We,a6 as ee,F as qe,f as Qe,w as Xe,g as Ie}from"./index-DxDLsVQl.js";import{i as we,b as Ze}from"./use-form-item-DcmYeZdv.js";import{c as xe}from"./castArray-Br_PG5z_.js";import{c as Ee}from"./refs-Cg79f-kg.js";const eo=A({inheritAttrs:!1});function oo(e,o,i,t,u,d){return B(e.$slots,"default")}var no=M(eo,[["render",oo],["__file","collection.vue"]]);const to=A({name:"ElCollectionItem",inheritAttrs:!1});function lo(e,o,i,t,u,d){return B(e.$slots,"default")}var ro=M(to,[["render",lo],["__file","collection-item.vue"]]);const _e="data-el-collection-item",Ce=e=>{const o=`El${e}Collection`,i=`${o}Item`,t=Symbol(o),u=Symbol(i),d={...no,name:o,setup(){const l=_(null),p=new Map;U(t,{itemMap:p,getItems:()=>{const m=h(l);if(!m)return[];const f=Array.from(m.querySelectorAll(`[${_e}]`));return[...p.values()].sort((n,c)=>f.indexOf(n.ref)-f.indexOf(c.ref))},collectionRef:l})}},r={...ro,name:i,setup(l,{attrs:p}){const v=_(null),m=C(t,void 0);U(u,{collectionItemRef:v}),Ae(()=>{const f=h(v);f&&m.itemMap.set(f,{ref:f,...p})}),ve(()=>{const f=h(v);m.itemMap.delete(f)})}};return{COLLECTION_INJECTION_KEY:t,COLLECTION_ITEM_INJECTION_KEY:u,ElCollection:d,ElCollectionItem:r}},so=Q({style:{type:P([String,Array,Object])},currentTabId:{type:P(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:P(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:io,ElCollectionItem:ao,COLLECTION_INJECTION_KEY:ne,COLLECTION_ITEM_INJECTION_KEY:uo}=Ce("RovingFocusGroup"),te=Symbol("elRovingFocusGroup"),ye=Symbol("elRovingFocusGroupItem"),co={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},po=(e,o)=>e,fo=(e,o,i)=>{const t=po(e.key);return co[t]},mo=(e,o)=>e.map((i,t)=>e[(t+o)%e.length]),le=e=>{const{activeElement:o}=document;for(const i of e)if(i===o||(i.focus(),o!==document.activeElement))return},ce="currentTabIdChange",pe="rovingFocusGroup.entryFocus",vo={bubbles:!1,cancelable:!0},go=A({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:so,emits:[ce,"entryFocus"],setup(e,{emit:o}){var i;const t=_((i=e.currentTabId||e.defaultCurrentTabId)!=null?i:null),u=_(!1),d=_(!1),r=_(null),{getItems:l}=C(ne,void 0),p=y(()=>[{outline:"none"},e.style]),v=a=>{o(ce,a)},m=()=>{u.value=!0},f=k(a=>{var g;(g=e.onMousedown)==null||g.call(e,a)},()=>{d.value=!0}),w=k(a=>{var g;(g=e.onFocus)==null||g.call(e,a)},a=>{const g=!h(d),{target:D,currentTarget:R}=a;if(D===R&&g&&!h(u)){const G=new Event(pe,vo);if(R==null||R.dispatchEvent(G),!G.defaultPrevented){const E=l().filter(F=>F.focusable),T=E.find(F=>F.active),O=E.find(F=>F.id===h(t)),z=[T,O,...E].filter(Boolean).map(F=>F.ref);le(z)}}d.value=!1}),n=k(a=>{var g;(g=e.onBlur)==null||g.call(e,a)},()=>{u.value=!1}),c=(...a)=>{o("entryFocus",...a)};U(te,{currentTabbedId:Ge(t),loop:V(e,"loop"),tabIndex:y(()=>h(u)?-1:0),rovingFocusGroupRef:r,rovingFocusGroupRootStyle:p,orientation:V(e,"orientation"),dir:V(e,"dir"),onItemFocus:v,onItemShiftTab:m,onBlur:n,onFocus:w,onMousedown:f}),ge(()=>e.currentTabId,a=>{t.value=a??null}),Ke(r,pe,c)}});function bo(e,o,i,t,u,d){return B(e.$slots,"default")}var Io=M(go,[["render",bo],["__file","roving-focus-group-impl.vue"]]);const wo=A({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:io,ElRovingFocusGroupImpl:Io}});function Eo(e,o,i,t,u,d){const r=I("el-roving-focus-group-impl"),l=I("el-focus-group-collection");return K(),H(l,null,{default:b(()=>[S(r,ze(Ye(e.$attrs)),{default:b(()=>[B(e.$slots,"default")]),_:3},16)]),_:3})}var _o=M(wo,[["render",Eo],["__file","roving-focus-group.vue"]]);const Co=A({components:{ElRovingFocusCollectionItem:ao},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:i,loop:t,onItemFocus:u,onItemShiftTab:d}=C(te,void 0),{getItems:r}=C(ne,void 0),l=we(),p=_(null),v=k(n=>{o("mousedown",n)},n=>{e.focusable?u(h(l)):n.preventDefault()}),m=k(n=>{o("focus",n)},()=>{u(h(l))}),f=k(n=>{o("keydown",n)},n=>{const{key:c,shiftKey:a,target:g,currentTarget:D}=n;if(c===$.tab&&a){d();return}if(g!==D)return;const R=fo(n);if(R){n.preventDefault();let E=r().filter(T=>T.focusable).map(T=>T.ref);switch(R){case"last":{E.reverse();break}case"prev":case"next":{R==="prev"&&E.reverse();const T=E.indexOf(D);E=t.value?mo(E,T+1):E.slice(T+1);break}}Ue(()=>{le(E)})}}),w=y(()=>i.value===h(l));return U(ye,{rovingFocusGroupItemRef:p,tabIndex:y(()=>h(w)?0:-1),handleMousedown:v,handleFocus:m,handleKeydown:f}),{id:l,handleKeydown:f,handleFocus:m,handleMousedown:v}}});function yo(e,o,i,t,u,d){const r=I("el-roving-focus-collection-item");return K(),H(r,{id:e.id,focusable:e.focusable,active:e.active},{default:b(()=>[B(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var ho=M(Co,[["render",yo],["__file","roving-focus-item.vue"]]);const To=Q({trigger:Ne.trigger,effect:{...de.effect,default:"light"},type:{type:P(String)},placement:{type:P(String),default:"bottom"},popperOptions:{type:P(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:P([Number,String]),default:0},maxHeight:{type:P([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:P(Object)},teleported:de.teleported}),he=Q({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:De}}),$o=Q({onKeydown:{type:P(Function)}}),Oo=[$.down,$.pageDown,$.home],Te=[$.up,$.pageUp,$.end],Fo=[...Oo,...Te],{ElCollection:So,ElCollectionItem:Ro,COLLECTION_INJECTION_KEY:No,COLLECTION_ITEM_INJECTION_KEY:ko}=Ce("Dropdown"),X=Symbol("elDropdown"),{ButtonGroup:Bo}=fe,Lo=A({name:"ElDropdown",components:{ElButton:fe,ElButtonGroup:Bo,ElScrollbar:Pe,ElDropdownCollection:So,ElTooltip:ke,ElRovingFocusGroup:_o,ElOnlyChild:Be,ElIcon:me,ArrowDown:He},props:To,emits:["visible-change","click","command"],setup(e,{emit:o}){const i=be(),t=oe("dropdown"),{t:u}=Je(),d=_(),r=_(),l=_(null),p=_(null),v=_(null),m=_(null),f=_(!1),w=[$.enter,$.space,$.down],n=y(()=>({maxHeight:Me(e.maxHeight)})),c=y(()=>[t.m(T.value)]),a=y(()=>xe(e.trigger)),g=we().value,D=y(()=>e.id||g);ge([d,a],([s,N],[Y])=>{var se,ie,ae;(se=Y==null?void 0:Y.$el)!=null&&se.removeEventListener&&Y.$el.removeEventListener("pointerenter",L),(ie=s==null?void 0:s.$el)!=null&&ie.removeEventListener&&s.$el.removeEventListener("pointerenter",L),(ae=s==null?void 0:s.$el)!=null&&ae.addEventListener&&N.includes("hover")&&s.$el.addEventListener("pointerenter",L)},{immediate:!0}),ve(()=>{var s,N;(N=(s=d.value)==null?void 0:s.$el)!=null&&N.removeEventListener&&d.value.$el.removeEventListener("pointerenter",L)});function R(){G()}function G(){var s;(s=l.value)==null||s.onClose()}function E(){var s;(s=l.value)==null||s.onOpen()}const T=Ze();function O(...s){o("command",...s)}function L(){var s,N;(N=(s=d.value)==null?void 0:s.$el)==null||N.focus()}function z(){}function F(){const s=h(p);a.value.includes("hover")&&(s==null||s.focus()),m.value=null}function re(s){m.value=s}function W(s){f.value||(s.preventDefault(),s.stopImmediatePropagation())}function J(){o("visible-change",!0)}function Se(s){(s==null?void 0:s.type)==="keydown"&&p.value.focus()}function Re(){o("visible-change",!1)}return U(X,{contentRef:p,role:y(()=>e.role),triggerId:D,isUsingKeyboard:f,onItemEnter:z,onItemLeave:F}),U("elDropdown",{instance:i,dropdownSize:T,handleClick:R,commandHandler:O,trigger:V(e,"trigger"),hideOnClick:V(e,"hideOnClick")}),{t:u,ns:t,scrollbar:v,wrapStyle:n,dropdownTriggerKls:c,dropdownSize:T,triggerId:D,triggerKeys:w,currentTabId:m,handleCurrentTabIdChange:re,handlerMainButtonClick:s=>{o("click",s)},handleEntryFocus:W,handleClose:G,handleOpen:E,handleBeforeShowTooltip:J,handleShowTooltip:Se,handleBeforeHideTooltip:Re,onFocusAfterTrapped:s=>{var N,Y;s.preventDefault(),(Y=(N=p.value)==null?void 0:N.focus)==null||Y.call(N,{preventScroll:!0})},popperRef:l,contentRef:p,triggeringElementRef:d,referenceElementRef:r}}});function Po(e,o,i,t,u,d){var r;const l=I("el-dropdown-collection"),p=I("el-roving-focus-group"),v=I("el-scrollbar"),m=I("el-only-child"),f=I("el-tooltip"),w=I("el-button"),n=I("arrow-down"),c=I("el-icon"),a=I("el-button-group");return K(),q("div",{class:Z([e.ns.b(),e.ns.is("disabled",e.disabled)])},[S(f,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(r=e.referenceElementRef)==null?void 0:r.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Ve({content:b(()=>[S(v,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:b(()=>[S(p,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:b(()=>[S(l,null,{default:b(()=>[B(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:b(()=>[S(m,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:b(()=>[B(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(K(),H(a,{key:0},{default:b(()=>[S(w,j({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:b(()=>[B(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),S(w,j({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:b(()=>[S(c,{class:Z(e.ns.e("icon"))},{default:b(()=>[S(n)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):x("v-if",!0)],2)}var Ko=M(Lo,[["render",Po],["__file","dropdown.vue"]]);const Do=A({name:"DropdownItemImpl",components:{ElIcon:me},props:he,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const i=oe("dropdown"),{role:t}=C(X,void 0),{collectionItemRef:u}=C(ko,void 0),{collectionItemRef:d}=C(uo,void 0),{rovingFocusGroupItemRef:r,tabIndex:l,handleFocus:p,handleKeydown:v,handleMousedown:m}=C(ye,void 0),f=Ee(u,d,r),w=y(()=>t.value==="menu"?"menuitem":t.value==="navigation"?"link":"button"),n=k(c=>{const{code:a}=c;if(a===$.enter||a===$.space)return c.preventDefault(),c.stopImmediatePropagation(),o("clickimpl",c),!0},v);return{ns:i,itemRef:f,dataset:{[_e]:""},role:w,tabIndex:l,handleFocus:p,handleKeydown:n,handleMousedown:m}}}),Mo=["aria-disabled","tabindex","role"];function Ao(e,o,i,t,u,d){const r=I("el-icon");return K(),q(qe,null,[e.divided?(K(),q("li",j({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):x("v-if",!0),je("li",j({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=l=>e.$emit("clickimpl",l)),onFocus:o[1]||(o[1]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onKeydown:o[2]||(o[2]=ee((...l)=>e.handleKeydown&&e.handleKeydown(...l),["self"])),onMousedown:o[3]||(o[3]=(...l)=>e.handleMousedown&&e.handleMousedown(...l)),onPointermove:o[4]||(o[4]=l=>e.$emit("pointermove",l)),onPointerleave:o[5]||(o[5]=l=>e.$emit("pointerleave",l))}),[e.icon?(K(),H(r,{key:0},{default:b(()=>[(K(),H(We(e.icon)))]),_:1})):x("v-if",!0),B(e.$slots,"default")],16,Mo)],64)}var Go=M(Do,[["render",Ao],["__file","dropdown-item-impl.vue"]]);const $e=()=>{const e=C("elDropdown",{}),o=y(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},zo=A({name:"ElDropdownItem",components:{ElDropdownCollectionItem:Ro,ElRovingFocusItem:ho,ElDropdownItemImpl:Go},inheritAttrs:!1,props:he,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:i}){const{elDropdown:t}=$e(),u=be(),d=_(null),r=y(()=>{var n,c;return(c=(n=h(d))==null?void 0:n.textContent)!=null?c:""}),{onItemEnter:l,onItemLeave:p}=C(X,void 0),v=k(n=>(o("pointermove",n),n.defaultPrevented),ue(n=>{if(e.disabled){p(n);return}const c=n.currentTarget;c===document.activeElement||c.contains(document.activeElement)||(l(n),n.defaultPrevented||c==null||c.focus())})),m=k(n=>(o("pointerleave",n),n.defaultPrevented),ue(n=>{p(n)})),f=k(n=>{if(!e.disabled)return o("click",n),n.type!=="keydown"&&n.defaultPrevented},n=>{var c,a,g;if(e.disabled){n.stopImmediatePropagation();return}(c=t==null?void 0:t.hideOnClick)!=null&&c.value&&((a=t.handleClick)==null||a.call(t)),(g=t.commandHandler)==null||g.call(t,e.command,u,n)}),w=y(()=>({...e,...i}));return{handleClick:f,handlePointerMove:v,handlePointerLeave:m,textContent:r,propsAndAttrs:w}}});function Yo(e,o,i,t,u,d){var r;const l=I("el-dropdown-item-impl"),p=I("el-roving-focus-item"),v=I("el-dropdown-collection-item");return K(),H(v,{disabled:e.disabled,"text-value":(r=e.textValue)!=null?r:e.textContent},{default:b(()=>[S(p,{focusable:!e.disabled},{default:b(()=>[S(l,j(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:b(()=>[B(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var Oe=M(zo,[["render",Yo],["__file","dropdown-item.vue"]]);const Uo=A({name:"ElDropdownMenu",props:$o,setup(e){const o=oe("dropdown"),{_elDropdownSize:i}=$e(),t=i.value,{focusTrapRef:u,onKeydown:d}=C(Le,void 0),{contentRef:r,role:l,triggerId:p}=C(X,void 0),{collectionRef:v,getItems:m}=C(No,void 0),{rovingFocusGroupRef:f,rovingFocusGroupRootStyle:w,tabIndex:n,onBlur:c,onFocus:a,onMousedown:g}=C(te,void 0),{collectionRef:D}=C(ne,void 0),R=y(()=>[o.b("menu"),o.bm("menu",t==null?void 0:t.value)]),G=Ee(r,v,u,f,D),E=k(O=>{var L;(L=e.onKeydown)==null||L.call(e,O)},O=>{const{currentTarget:L,code:z,target:F}=O;if(L.contains(F),$.tab===z&&O.stopImmediatePropagation(),O.preventDefault(),F!==h(r)||!Fo.includes(z))return;const W=m().filter(J=>!J.disabled).map(J=>J.ref);Te.includes(z)&&W.reverse(),le(W)});return{size:t,rovingFocusGroupRootStyle:w,tabIndex:n,dropdownKls:R,role:l,triggerId:p,dropdownListWrapperRef:G,handleKeydown:O=>{E(O),d(O)},onBlur:c,onFocus:a,onMousedown:g}}}),Ho=["role","aria-labelledby"];function Jo(e,o,i,t,u,d){return K(),q("ul",{ref:e.dropdownListWrapperRef,class:Z(e.dropdownKls),style:Qe(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...r)=>e.onBlur&&e.onBlur(...r)),onFocus:o[1]||(o[1]=(...r)=>e.onFocus&&e.onFocus(...r)),onKeydown:o[2]||(o[2]=ee((...r)=>e.handleKeydown&&e.handleKeydown(...r),["self"])),onMousedown:o[3]||(o[3]=ee((...r)=>e.onMousedown&&e.onMousedown(...r),["self"]))},[B(e.$slots,"default")],46,Ho)}var Fe=M(Uo,[["render",Jo],["__file","dropdown-menu.vue"]]);const nn=Xe(Ko,{DropdownItem:Oe,DropdownMenu:Fe}),tn=Ie(Oe),ln=Ie(Fe);export{tn as E,ln as a,nn as b};
