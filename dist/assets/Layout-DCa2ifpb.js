import{d as M,u as S,o as _,c as R,w as g,r as O,m as Oe,t as Ze,a as P,T as Ne,b as Xe,e as h,f as w,n as V,g as Me,h as Pe,i as G,j as xe,k as ce,l as $,p as Ye,q as et,s as Ie,v as le,x as be,y as Ce,z as Be,A as E,B as X,C as Ae,D as tt,F as D,E as Ee,G as $e,H as nt,I as ye,J as ot,K as st,L as ke,M as at,N as lt,O as ze,P as H,Q as Z,R as ue,S as k,U as ut,V as we,W as Te}from"./index-DSfyh7qj.js";import"./el-tooltip-l0sNRNKZ.js";import{E as He,C as rt,a as it}from"./el-scrollbar-3Xjb0YVF.js";import{E as z,m as ct,u as dt}from"./typescript-Qg-Y0DRo.js";import{_ as W,a as ae,r as ve,h as pt,i as te,E as Le}from"./index-CEAPH9FP.js";import{t as re}from"./aria-KgdLjl5h.js";import{T as mt,t as de}from"./index-DibT7Pck.js";import{f as ft}from"./vnode-CWEG3rL2.js";import"./request-B1oD2Ia0.js";const vt=M({name:"ElCollapseTransition"}),ht=M({...vt,setup(e){const o=S("collapse-transition"),n=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},s={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height&&(t.dataset.elExistsHeight=t.style.height),t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){requestAnimationFrame(()=>{t.dataset.oldOverflow=t.style.overflow,t.dataset.elExistsHeight?t.style.maxHeight=t.dataset.elExistsHeight:t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"})},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){n(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){n(t)},leaveCancelled(t){n(t)}};return(t,p)=>(_(),R(Ne,Oe({name:P(o).b()},Ze(s)),{default:g(()=>[O(t.$slots,"default")]),_:3},16,["name"]))}});var ie=W(ht,[["__file","collapse-transition.vue"]]);ie.install=e=>{e.component(ie.name,ie)};const _t=ie,gt=M({name:"ElContainer"}),bt=M({...gt,props:{direction:{type:String}},setup(e){const o=e,n=Xe(),s=S("container"),t=h(()=>o.direction==="vertical"?!0:o.direction==="horizontal"?!1:n&&n.default?n.default().some(c=>{const m=c.type.name;return m==="ElHeader"||m==="ElFooter"}):!1);return(p,c)=>(_(),w("section",{class:V([P(s).b(),P(s).is("vertical",P(t))])},[O(p.$slots,"default")],2))}});var yt=W(bt,[["__file","container.vue"]]);const Mt=M({name:"ElAside"}),xt=M({...Mt,props:{width:{type:String,default:null}},setup(e){const o=e,n=S("aside"),s=h(()=>o.width?n.cssVarBlock({width:o.width}):{});return(t,p)=>(_(),w("aside",{class:V(P(n).b()),style:Me(P(s))},[O(t.$slots,"default")],6))}});var Re=W(xt,[["__file","aside.vue"]]);const It=M({name:"ElFooter"}),Ct=M({...It,props:{height:{type:String,default:null}},setup(e){const o=e,n=S("footer"),s=h(()=>o.height?n.cssVarBlock({height:o.height}):{});return(t,p)=>(_(),w("footer",{class:V(P(n).b()),style:Me(P(s))},[O(t.$slots,"default")],6))}});var Ve=W(Ct,[["__file","footer.vue"]]);const Et=M({name:"ElHeader"}),St=M({...Et,props:{height:{type:String,default:null}},setup(e){const o=e,n=S("header"),s=h(()=>o.height?n.cssVarBlock({height:o.height}):{});return(t,p)=>(_(),w("header",{class:V(P(n).b()),style:Me(P(s))},[O(t.$slots,"default")],6))}});var We=W(St,[["__file","header.vue"]]);const $t=M({name:"ElMain"}),kt=M({...$t,setup(e){const o=S("main");return(n,s)=>(_(),w("main",{class:V(P(o).b())},[O(n.$slots,"default")],2))}});var De=W(kt,[["__file","main.vue"]]);const wt=Pe(yt,{Aside:Re,Footer:Ve,Header:We,Main:De}),Tt=G(Re);G(Ve);const Ot=G(We),Nt=G(De);let Pt=class{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",s=>{let t=!1;switch(s.code){case z.down:{this.gotoSubIndex(this.subIndex+1),t=!0;break}case z.up:{this.gotoSubIndex(this.subIndex-1),t=!0;break}case z.tab:{re(o,"mouseleave");break}case z.enter:case z.space:{t=!0,s.currentTarget.click();break}}return t&&(s.preventDefault(),s.stopPropagation()),!1})})}},Bt=class{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new Pt(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case z.down:{re(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case z.up:{re(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case z.tab:{re(o.currentTarget,"mouseleave");break}case z.enter:case z.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}},At=class{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(s=>{s.nodeType===1&&new Bt(s,o)})}};const zt=M({name:"ElMenuCollapseTransition",setup(){const e=S("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,s){ae(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",s()},onAfterEnter(n){ve(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),pt(n,e.m("collapse"))?(ve(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),ae(n,e.m("collapse"))):(ae(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),ve(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){ae(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function Ht(e,o,n,s,t,p){return _(),R(Ne,Oe({mode:"out-in"},e.listeners),{default:g(()=>[O(e.$slots,"default")]),_:3},16)}var Lt=W(zt,[["render",Ht],["__file","menu-collapse-transition.vue"]]);function Fe(e,o){const n=h(()=>{let t=e.parent;const p=[o.value];for(;t.type.name!=="ElMenu";)t.props.index&&p.unshift(t.props.index),t=t.parent;return p});return{parentMenu:h(()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t}),indexPath:n}}function Rt(e){return h(()=>{const n=e.backgroundColor;return n?new mt(n).shade(20).toString():""})}const je=(e,o)=>{const n=S("menu");return h(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":Rt(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},Vt=xe({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:te},expandOpenIcon:{type:te},collapseCloseIcon:{type:te},collapseOpenIcon:{type:te}}),he="ElSubMenu";var Se=M({name:he,props:Vt,setup(e,{slots:o,expose:n}){const s=Ee(),{indexPath:t,parentMenu:p}=Fe(s,h(()=>e.index)),c=S("menu"),m=S("sub-menu"),u=ce("rootMenu");u||de(he,"can not inject root menu");const f=ce(`subMenu:${p.value.uid}`);f||de(he,"can not inject sub menu");const d=$({}),x=$({});let y;const N=$(!1),pe=$(),ne=$(null),F=h(()=>q.value==="horizontal"&&j.value?"bottom-start":"right-start"),U=h(()=>q.value==="horizontal"&&j.value||q.value==="vertical"&&!u.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?B.value?e.expandOpenIcon:e.expandCloseIcon:Ye:e.collapseCloseIcon&&e.collapseOpenIcon?B.value?e.collapseOpenIcon:e.collapseCloseIcon:et),j=h(()=>f.level===0),Y=h(()=>{const r=e.teleported;return r===void 0?j.value:r}),me=h(()=>u.props.collapse?`${c.namespace.value}-zoom-in-left`:`${c.namespace.value}-zoom-in-top`),fe=h(()=>q.value==="horizontal"&&j.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),B=h(()=>u.openedMenus.includes(e.index)),J=h(()=>{let r=!1;return Object.values(d.value).forEach(v=>{v.active&&(r=!0)}),Object.values(x.value).forEach(v=>{v.active&&(r=!0)}),r}),q=h(()=>u.props.mode),K=Ie({index:e.index,indexPath:t,active:J}),ee=je(u.props,f.level+1),oe=h(()=>{var r;return(r=e.popperOffset)!=null?r:u.props.popperOffset}),Q=h(()=>{var r;return(r=e.popperClass)!=null?r:u.props.popperClass}),se=h(()=>{var r;return(r=e.showTimeout)!=null?r:u.props.showTimeout}),a=h(()=>{var r;return(r=e.hideTimeout)!=null?r:u.props.hideTimeout}),l=()=>{var r,v,C;return(C=(v=(r=ne.value)==null?void 0:r.popperRef)==null?void 0:v.popperInstanceRef)==null?void 0:C.destroy()},i=r=>{r||l()},I=()=>{u.props.menuTrigger==="hover"&&u.props.mode==="horizontal"||u.props.collapse&&u.props.mode==="vertical"||e.disabled||u.handleSubMenuClick({index:e.index,indexPath:t.value,active:J.value})},b=(r,v=se.value)=>{var C;if(r.type!=="focus"){if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"||e.disabled){f.mouseInChild.value=!0;return}f.mouseInChild.value=!0,y==null||y(),{stop:y}=$e(()=>{u.openMenu(e.index,t.value)},v),Y.value&&((C=p.value.vnode.el)==null||C.dispatchEvent(new MouseEvent("mouseenter")))}},A=(r=!1)=>{var v;if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"){f.mouseInChild.value=!1;return}y==null||y(),f.mouseInChild.value=!1,{stop:y}=$e(()=>!N.value&&u.closeMenu(e.index,t.value),a.value),Y.value&&r&&((v=f.handleMouseleave)==null||v.call(f,!0))};le(()=>u.props.collapse,r=>i(!!r));{const r=C=>{x.value[C.index]=C},v=C=>{delete x.value[C.index]};be(`subMenu:${s.uid}`,{addSubMenu:r,removeSubMenu:v,handleMouseleave:A,mouseInChild:N,level:f.level+1})}return n({opened:B}),Ce(()=>{u.addSubMenu(K),f.addSubMenu(K)}),Be(()=>{f.removeSubMenu(K),u.removeSubMenu(K)}),()=>{var r;const v=[(r=o.title)==null?void 0:r.call(o),E(Le,{class:m.e("icon-arrow"),style:{transform:B.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&u.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>X(U.value)?E(s.appContext.components[U.value]):E(U.value)})],C=u.isMenuPopup?E(He,{ref:ne,visible:B.value,effect:"light",pure:!0,offset:oe.value,showArrow:!1,persistent:!0,popperClass:Q.value,placement:F.value,teleported:Y.value,fallbackPlacements:fe.value,transition:me.value,gpuAcceleration:!1},{content:()=>{var T;return E("div",{class:[c.m(q.value),c.m("popup-container"),Q.value],onMouseenter:L=>b(L,100),onMouseleave:()=>A(!0),onFocus:L=>b(L,100)},[E("ul",{class:[c.b(),c.m("popup"),c.m(`popup-${F.value}`)],style:ee.value},[(T=o.default)==null?void 0:T.call(o)])])},default:()=>E("div",{class:m.e("title"),onClick:I},v)}):E(D,{},[E("div",{class:m.e("title"),ref:pe,onClick:I},v),E(_t,{},{default:()=>{var T;return Ae(E("ul",{role:"menu",class:[c.b(),c.m("inline")],style:ee.value},[(T=o.default)==null?void 0:T.call(o)]),[[tt,B.value]])}})]);return E("li",{class:[m.b(),m.is("active",J.value),m.is("opened",B.value),m.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:B.value,onMouseenter:b,onMouseleave:()=>A(),onFocus:b},[C])}}});const Wt=xe({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:ye(Array),default:()=>ct([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:te,default:()=>ot},popperEffect:{type:String,values:["dark","light"],default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),_e=e=>Array.isArray(e)&&e.every(o=>X(o)),Dt={close:(e,o)=>X(e)&&_e(o),open:(e,o)=>X(e)&&_e(o),select:(e,o,n,s)=>X(e)&&_e(o)&&st(n)&&(s===void 0||s instanceof Promise)};var Ft=M({name:"ElMenu",props:Wt,emits:Dt,setup(e,{emit:o,slots:n,expose:s}){const t=Ee(),p=t.appContext.config.globalProperties.$router,c=$(),m=S("menu"),u=S("sub-menu"),f=$(-1),d=$(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),x=$(e.defaultActive),y=$({}),N=$({}),pe=h(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),ne=()=>{const a=x.value&&y.value[x.value];if(!a||e.mode==="horizontal"||e.collapse)return;a.indexPath.forEach(i=>{const I=N.value[i];I&&F(i,I.indexPath)})},F=(a,l)=>{d.value.includes(a)||(e.uniqueOpened&&(d.value=d.value.filter(i=>l.includes(i))),d.value.push(a),o("open",a,l))},U=a=>{const l=d.value.indexOf(a);l!==-1&&d.value.splice(l,1)},j=(a,l)=>{U(a),o("close",a,l)},Y=({index:a,indexPath:l})=>{d.value.includes(a)?j(a,l):F(a,l)},me=a=>{(e.mode==="horizontal"||e.collapse)&&(d.value=[]);const{index:l,indexPath:i}=a;if(!(ke(l)||ke(i)))if(e.router&&p){const I=a.route||l,b=p.push(I).then(A=>(A||(x.value=l),A));o("select",l,i,{index:l,indexPath:i,route:I},b)}else x.value=l,o("select",l,i,{index:l,indexPath:i})},fe=a=>{const l=y.value,i=l[a]||x.value&&l[x.value]||l[e.defaultActive];i?x.value=i.index:x.value=a},B=a=>{const l=getComputedStyle(a),i=Number.parseInt(l.marginLeft,10),I=Number.parseInt(l.marginRight,10);return a.offsetWidth+i+I||0},J=()=>{var a,l;if(!c.value)return-1;const i=Array.from((l=(a=c.value)==null?void 0:a.childNodes)!=null?l:[]).filter(L=>L.nodeName!=="#comment"&&(L.nodeName!=="#text"||L.nodeValue)),I=64,b=getComputedStyle(c.value),A=Number.parseInt(b.paddingLeft,10),r=Number.parseInt(b.paddingRight,10),v=c.value.clientWidth-A-r;let C=0,T=0;return i.forEach((L,Qe)=>{C+=B(L),C<=v-I&&(T=Qe+1)}),T===i.length?-1:T},q=a=>N.value[a].indexPath,K=(a,l=33.34)=>{let i;return()=>{i&&clearTimeout(i),i=setTimeout(()=>{a()},l)}};let ee=!0;const oe=()=>{if(f.value===J())return;const a=()=>{f.value=-1,at(()=>{f.value=J()})};ee?a():K(a)(),ee=!1};le(()=>e.defaultActive,a=>{y.value[a]||(x.value=""),fe(a)}),le(()=>e.collapse,a=>{a&&(d.value=[])}),le(y.value,ne);let Q;nt(()=>{e.mode==="horizontal"&&e.ellipsis?Q=dt(c,oe).stop:Q==null||Q()});const se=$(!1);{const a=b=>{N.value[b.index]=b},l=b=>{delete N.value[b.index]};be("rootMenu",Ie({props:e,openedMenus:d,items:y,subMenus:N,activeIndex:x,isMenuPopup:pe,addMenuItem:b=>{y.value[b.index]=b},removeMenuItem:b=>{delete y.value[b.index]},addSubMenu:a,removeSubMenu:l,openMenu:F,closeMenu:j,handleMenuItemClick:me,handleSubMenuClick:Y})),be(`subMenu:${t.uid}`,{addSubMenu:a,removeSubMenu:l,mouseInChild:se,level:0})}return Ce(()=>{e.mode==="horizontal"&&new At(t.vnode.el,m.namespace.value)}),s({open:l=>{const{indexPath:i}=N.value[l];i.forEach(I=>F(I,i))},close:U,handleResize:oe}),()=>{var a,l;let i=(l=(a=n.default)==null?void 0:a.call(n))!=null?l:[];const I=[];if(e.mode==="horizontal"&&c.value){const v=ft(i),C=f.value===-1?v:v.slice(0,f.value),T=f.value===-1?[]:v.slice(f.value);T!=null&&T.length&&e.ellipsis&&(i=C,I.push(E(Se,{index:"sub-menu-more",class:u.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>E(Le,{class:u.e("icon-more")},{default:()=>E(e.ellipsisIcon)}),default:()=>T})))}const b=je(e,0),A=e.closeOnClickOutside?[[rt,()=>{d.value.length&&(se.value||(d.value.forEach(v=>o("close",v,q(v))),d.value=[]))}]]:[],r=Ae(E("ul",{key:String(e.collapse),role:"menubar",ref:c,style:b.value,class:{[m.b()]:!0,[m.m(e.mode)]:!0,[m.m("collapse")]:e.collapse}},[...i,...I]),A);return e.collapseTransition&&e.mode==="vertical"?E(Lt,()=>r):r}}});const jt=xe({index:{type:ye([String,null]),default:null},route:{type:ye([String,Object])},disabled:Boolean}),qt={click:e=>X(e.index)&&Array.isArray(e.indexPath)},ge="ElMenuItem",Gt=M({name:ge,components:{ElTooltip:He},props:jt,emits:qt,setup(e,{emit:o}){const n=Ee(),s=ce("rootMenu"),t=S("menu"),p=S("menu-item");s||de(ge,"can not inject root menu");const{parentMenu:c,indexPath:m}=Fe(n,lt(e,"index")),u=ce(`subMenu:${c.value.uid}`);u||de(ge,"can not inject sub menu");const f=h(()=>e.index===s.activeIndex),d=Ie({index:e.index,indexPath:m,active:f}),x=()=>{e.disabled||(s.handleMenuItemClick({index:e.index,indexPath:m.value,route:e.route}),o("click",d))};return Ce(()=>{u.addSubMenu(d),s.addMenuItem(d)}),Be(()=>{u.removeSubMenu(d),s.removeMenuItem(d)}),{parentMenu:c,rootMenu:s,active:f,nsMenu:t,nsMenuItem:p,handleClick:x}}});function Ut(e,o,n,s,t,p){const c=ze("el-tooltip");return _(),w("li",{class:V([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...m)=>e.handleClick&&e.handleClick(...m))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(_(),R(c,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:g(()=>[O(e.$slots,"title")]),default:g(()=>[H("div",{class:V(e.nsMenu.be("tooltip","trigger"))},[O(e.$slots,"default")],2)]),_:3},8,["effect"])):(_(),w(D,{key:1},[O(e.$slots,"default"),O(e.$slots,"title")],64))],2)}var qe=W(Gt,[["render",Ut],["__file","menu-item.vue"]]);const Jt={title:String},Kt="ElMenuItemGroup",Qt=M({name:Kt,props:Jt,setup(){return{ns:S("menu-item-group")}}});function Zt(e,o,n,s,t,p){return _(),w("li",{class:V(e.ns.b())},[H("div",{class:V(e.ns.e("title"))},[e.$slots.title?O(e.$slots,"title",{key:1}):(_(),w(D,{key:0},[Z(ue(e.title),1)],64))],2),H("ul",null,[O(e.$slots,"default")])],2)}var Ge=W(Qt,[["render",Zt],["__file","menu-item-group.vue"]]);const Ue=Pe(Ft,{MenuItem:qe,MenuItemGroup:Ge,SubMenu:Se}),Je=G(qe);G(Ge);const Ke=G(Se),Xt=H("a",{href:"/",style:{width:"200px",height:"40px"}},[H("img",{style:{width:"200px",height:"40px"},src:"",alt:"logo"})],-1),Yt=H("div",{class:"s-flex-grow"},null,-1),en=H("img",{style:{width:"16px"},src:"",alt:"user"},null,-1),tn=M({__name:"Header",setup(e){$("1");const o=(n,s)=>{console.log(n,s)};return(n,s)=>{const t=Je,p=Ke,c=Ue;return _(),R(c,{router:"",class:"el-menu-header",mode:"horizontal","background-color":"#23262e","text-color":"#fff","active-text-color":"#ffd04b",ellipsis:!1,onSelect:o},{default:g(()=>[Xt,k(t,{index:"0"},{default:g(()=>[Z("首页")]),_:1}),k(t,{index:"1"},{default:g(()=>[Z("客户管理")]),_:1}),Yt,k(p,{index:"2"},{title:g(()=>[en]),default:g(()=>[k(t,{index:"2-1"},{default:g(()=>[Z("公司信息")]),_:1}),k(t,{index:"2-2"},{default:g(()=>[Z("账号信息")]),_:1}),k(t,{index:"2-3"},{default:g(()=>[Z("退出登录")]),_:1})]),_:1})]),_:1})}}}),nn=M({__name:"Sidebar",setup(e){const o=$([]);o.value=ut;const n=(t,p)=>{console.log(t,p)},s=(t,p)=>{console.log(t,p)};return(t,p)=>{const c=Je,m=Ke,u=Ue,f=it;return _(),R(f,null,{default:g(()=>[k(u,{router:"","active-text-color":"#ffd04b","background-color":"#393d49",class:"el-menu-vertical-demo","default-active":"2","text-color":"#fff",onOpen:n,onClose:s},{default:g(()=>[(_(!0),w(D,null,we(o.value,(d,x)=>(_(),w(D,{key:x},[d.meta.isMenu?(_(),w(D,{key:0},[d.children?(_(),R(m,{key:0,index:d.path},{title:g(()=>[H("span",null,ue(d.meta.title),1)]),default:g(()=>[(_(!0),w(D,null,we(d.children,(y,N)=>(_(),w(D,{key:N},[y.meta.isMenu?(_(),R(c,{index:y.path,route:y.path,key:N},{default:g(()=>[H("span",null,ue(y.meta.title),1)]),_:2},1032,["index","route"])):Te("",!0)],64))),128))]),_:2},1032,["index"])):(_(),R(c,{key:1,index:d.path,route:d.path},{default:g(()=>[H("span",null,ue(d.meta.title),1)]),_:2},1032,["index","route"]))],64)):Te("",!0)],64))),128))]),_:1})]),_:1})}}}),hn={__name:"Layout",setup(e){return(o,n)=>{const s=Ot,t=Tt,p=ze("router-view"),c=Nt,m=wt;return _(),R(m,{class:"common-layout"},{default:g(()=>[k(s,null,{default:g(()=>[k(tn)]),_:1}),k(m,null,{default:g(()=>[k(t,{width:"200px"},{default:g(()=>[k(nn)]),_:1}),k(c,{class:"main-container"},{default:g(()=>[k(p)]),_:1})]),_:1})]),_:1})}}};export{hn as default};