import{d as S,u as qe,a as E,c as h,o as b,b as T,r as O,n as R,e as L,f as Me,w as Te,g as q,h as H,i as M,m as Ge,T as Ue,j as ge,k as re,l as w,p as Je,q as Ke,s as ye,t as ae,v as _e,x as Ie,y as Oe,z as x,A as Q,B as Ne,C as Qe,F as Z,D as Ce,E as ke,G as Ze,H as be,I as Xe,J as Ye,K as we,L as et,M as tt,N as xe,O as N,P as Pe,Q as le,R as $,S as nt,U as $e}from"./index-CoktlfKN.js";/* empty css                  *//* empty css                        */import{E as Ae,C as ot}from"./el-popper-L93M-ikX.js";import{E as st}from"./el-scrollbar-g4nKRSUD.js";import{E as at,a as lt,b as ut}from"./el-dropdown-item-DEqJOZYV.js";import{_ as Be}from"./logo-NwV_MDhb.js";import{_ as W,E as z,a as se,r as me,h as rt,i as ee,b as Se,m as it,u as ct}from"./request-DAESqlcg.js";import"./el-tooltip-l0sNRNKZ.js";import{g as dt}from"./index-Cih3JrZp.js";import{t as ue}from"./aria-KgdLjl5h.js";import{_ as pt}from"./index-DcCOaoYx.js";import{T as mt}from"./index-BPJO_kH-.js";import{t as ie}from"./use-form-item-DzIy8ETn.js";import{f as ft}from"./vnode-BZY6ZFgb.js";import"./castArray-C5ewEd_X.js";import"./refs-Ec48si0j.js";const vt=S({name:"ElContainer"}),ht=S({...vt,props:{direction:{type:String}},setup(e){const n=e,t=qe(),a=E("container"),s=h(()=>n.direction==="vertical"?!0:n.direction==="horizontal"?!1:t&&t.default?t.default().some(c=>{const p=c.type.name;return p==="ElHeader"||p==="ElFooter"}):!1);return(m,c)=>(b(),T("section",{class:R([L(a).b(),L(a).is("vertical",L(s))])},[O(m.$slots,"default")],2))}});var _t=W(ht,[["__file","container.vue"]]);const bt=S({name:"ElAside"}),Mt=S({...bt,props:{width:{type:String,default:null}},setup(e){const n=e,t=E("aside"),a=h(()=>n.width?t.cssVarBlock({width:n.width}):{});return(s,m)=>(b(),T("aside",{class:R(L(t).b()),style:Me(L(a))},[O(s.$slots,"default")],6))}});var ze=W(Mt,[["__file","aside.vue"]]);const gt=S({name:"ElFooter"}),yt=S({...gt,props:{height:{type:String,default:null}},setup(e){const n=e,t=E("footer"),a=h(()=>n.height?t.cssVarBlock({height:n.height}):{});return(s,m)=>(b(),T("footer",{class:R(L(t).b()),style:Me(L(a))},[O(s.$slots,"default")],6))}});var Le=W(yt,[["__file","footer.vue"]]);const It=S({name:"ElHeader"}),Ct=S({...It,props:{height:{type:String,default:null}},setup(e){const n=e,t=E("header"),a=h(()=>n.height?t.cssVarBlock({height:n.height}):{});return(s,m)=>(b(),T("header",{class:R(L(t).b()),style:Me(L(a))},[O(s.$slots,"default")],6))}});var De=W(Ct,[["__file","header.vue"]]);const xt=S({name:"ElMain"}),St=S({...xt,setup(e){const n=E("main");return(t,a)=>(b(),T("main",{class:R(L(n).b())},[O(t.$slots,"default")],2))}});var Re=W(St,[["__file","main.vue"]]);const Et=Te(_t,{Aside:ze,Footer:Le,Header:De,Main:Re}),kt=q(ze);q(Le);const wt=q(De),$t=q(Re);let Tt=class{constructor(n,t){this.parent=n,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(n){n===this.subMenuItems.length?n=0:n<0&&(n=this.subMenuItems.length-1),this.subMenuItems[n].focus(),this.subIndex=n}addListeners(){const n=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,t=>{t.addEventListener("keydown",a=>{let s=!1;switch(a.code){case z.down:{this.gotoSubIndex(this.subIndex+1),s=!0;break}case z.up:{this.gotoSubIndex(this.subIndex-1),s=!0;break}case z.tab:{ue(n,"mouseleave");break}case z.enter:case z.space:{s=!0,a.currentTarget.click();break}}return s&&(a.preventDefault(),a.stopPropagation()),!1})})}},Ot=class{constructor(n,t){this.domNode=n,this.submenu=null,this.submenu=null,this.init(t)}init(n){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(`.${n}-menu`);t&&(this.submenu=new Tt(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",n=>{let t=!1;switch(n.code){case z.down:{ue(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),t=!0;break}case z.up:{ue(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),t=!0;break}case z.tab:{ue(n.currentTarget,"mouseleave");break}case z.enter:case z.space:{t=!0,n.currentTarget.click();break}}t&&n.preventDefault()})}},Nt=class{constructor(n,t){this.domNode=n,this.init(t)}init(n){const t=this.domNode.childNodes;Array.from(t).forEach(a=>{a.nodeType===1&&new Ot(a,n)})}};const Pt=S({name:"ElMenuCollapseTransition",setup(){const e=E("menu");return{listeners:{onBeforeEnter:t=>t.style.opacity="0.2",onEnter(t,a){se(t,`${e.namespace.value}-opacity-transition`),t.style.opacity="1",a()},onAfterEnter(t){me(t,`${e.namespace.value}-opacity-transition`),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),rt(t,e.m("collapse"))?(me(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),se(t,e.m("collapse"))):(se(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),me(t,e.m("collapse"))),t.style.width=`${t.scrollWidth}px`,t.style.overflow="hidden"},onLeave(t){se(t,"horizontal-collapse-transition"),t.style.width=`${t.dataset.scrollWidth}px`}}}}});function At(e,n,t,a,s,m){return b(),H(Ue,Ge({mode:"out-in"},e.listeners),{default:M(()=>[O(e.$slots,"default")]),_:3},16)}var Bt=W(Pt,[["render",At],["__file","menu-collapse-transition.vue"]]);function We(e,n){const t=h(()=>{let s=e.parent;const m=[n.value];for(;s.type.name!=="ElMenu";)s.props.index&&m.unshift(s.props.index),s=s.parent;return m});return{parentMenu:h(()=>{let s=e.parent;for(;s&&!["ElMenu","ElSubMenu"].includes(s.type.name);)s=s.parent;return s}),indexPath:t}}function zt(e){return h(()=>{const t=e.backgroundColor;return t?new mt(t).shade(20).toString():""})}const Ve=(e,n)=>{const t=E("menu");return h(()=>t.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":zt(e).value||"","active-color":e.activeTextColor||"",level:`${n}`}))},Lt=ge({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:ee},expandOpenIcon:{type:ee},collapseCloseIcon:{type:ee},collapseOpenIcon:{type:ee}}),fe="ElSubMenu";var Ee=S({name:fe,props:Lt,setup(e,{slots:n,expose:t}){const a=Ce(),{indexPath:s,parentMenu:m}=We(a,h(()=>e.index)),c=E("menu"),p=E("sub-menu"),u=re("rootMenu");u||ie(fe,"can not inject root menu");const f=re(`subMenu:${m.value.uid}`);f||ie(fe,"can not inject sub menu");const d=w({}),g=w({});let y;const P=w(!1),ce=w(),te=w(null),V=h(()=>F.value==="horizontal"&&j.value?"bottom-start":"right-start"),G=h(()=>F.value==="horizontal"&&j.value||F.value==="vertical"&&!u.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?A.value?e.expandOpenIcon:e.expandCloseIcon:Je:e.collapseCloseIcon&&e.collapseOpenIcon?A.value?e.collapseOpenIcon:e.collapseCloseIcon:Ke),j=h(()=>f.level===0),X=h(()=>{const r=e.teleported;return r===void 0?j.value:r}),de=h(()=>u.props.collapse?`${c.namespace.value}-zoom-in-left`:`${c.namespace.value}-zoom-in-top`),pe=h(()=>F.value==="horizontal"&&j.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),A=h(()=>u.openedMenus.includes(e.index)),U=h(()=>{let r=!1;return Object.values(d.value).forEach(v=>{v.active&&(r=!0)}),Object.values(g.value).forEach(v=>{v.active&&(r=!0)}),r}),F=h(()=>u.props.mode),J=ye({index:e.index,indexPath:s,active:U}),Y=Ve(u.props,f.level+1),ne=h(()=>{var r;return(r=e.popperOffset)!=null?r:u.props.popperOffset}),K=h(()=>{var r;return(r=e.popperClass)!=null?r:u.props.popperClass}),oe=h(()=>{var r;return(r=e.showTimeout)!=null?r:u.props.showTimeout}),o=h(()=>{var r;return(r=e.hideTimeout)!=null?r:u.props.hideTimeout}),l=()=>{var r,v,C;return(C=(v=(r=te.value)==null?void 0:r.popperRef)==null?void 0:v.popperInstanceRef)==null?void 0:C.destroy()},i=r=>{r||l()},I=()=>{u.props.menuTrigger==="hover"&&u.props.mode==="horizontal"||u.props.collapse&&u.props.mode==="vertical"||e.disabled||u.handleSubMenuClick({index:e.index,indexPath:s.value,active:U.value})},_=(r,v=oe.value)=>{var C;if(r.type!=="focus"){if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"||e.disabled){f.mouseInChild.value=!0;return}f.mouseInChild.value=!0,y==null||y(),{stop:y}=ke(()=>{u.openMenu(e.index,s.value)},v),X.value&&((C=m.value.vnode.el)==null||C.dispatchEvent(new MouseEvent("mouseenter")))}},B=(r=!1)=>{var v;if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"){f.mouseInChild.value=!1;return}y==null||y(),f.mouseInChild.value=!1,{stop:y}=ke(()=>!P.value&&u.closeMenu(e.index,s.value),o.value),X.value&&r&&((v=f.handleMouseleave)==null||v.call(f,!0))};ae(()=>u.props.collapse,r=>i(!!r));{const r=C=>{g.value[C.index]=C},v=C=>{delete g.value[C.index]};_e(`subMenu:${a.uid}`,{addSubMenu:r,removeSubMenu:v,handleMouseleave:B,mouseInChild:P,level:f.level+1})}return t({opened:A}),Ie(()=>{u.addSubMenu(J),f.addSubMenu(J)}),Oe(()=>{f.removeSubMenu(J),u.removeSubMenu(J)}),()=>{var r;const v=[(r=n.title)==null?void 0:r.call(n),x(Se,{class:p.e("icon-arrow"),style:{transform:A.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&u.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>Q(G.value)?x(a.appContext.components[G.value]):x(G.value)})],C=u.isMenuPopup?x(Ae,{ref:te,visible:A.value,effect:"light",pure:!0,offset:ne.value,showArrow:!1,persistent:!0,popperClass:K.value,placement:V.value,teleported:X.value,fallbackPlacements:pe.value,transition:de.value,gpuAcceleration:!1},{content:()=>{var k;return x("div",{class:[c.m(F.value),c.m("popup-container"),K.value],onMouseenter:D=>_(D,100),onMouseleave:()=>B(!0),onFocus:D=>_(D,100)},[x("ul",{class:[c.b(),c.m("popup"),c.m(`popup-${V.value}`)],style:Y.value},[(k=n.default)==null?void 0:k.call(n)])])},default:()=>x("div",{class:p.e("title"),onClick:I},v)}):x(Z,{},[x("div",{class:p.e("title"),ref:ce,onClick:I},v),x(pt,{},{default:()=>{var k;return Ne(x("ul",{role:"menu",class:[c.b(),c.m("inline")],style:Y.value},[(k=n.default)==null?void 0:k.call(n)]),[[Qe,A.value]])}})]);return x("li",{class:[p.b(),p.is("active",U.value),p.is("opened",A.value),p.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:A.value,onMouseenter:_,onMouseleave:()=>B(),onFocus:_},[C])}}});const Dt=ge({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:be(Array),default:()=>it([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:ee,default:()=>Xe},popperEffect:{type:String,values:["dark","light"],default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),ve=e=>Array.isArray(e)&&e.every(n=>Q(n)),Rt={close:(e,n)=>Q(e)&&ve(n),open:(e,n)=>Q(e)&&ve(n),select:(e,n,t,a)=>Q(e)&&ve(n)&&Ye(t)&&(a===void 0||a instanceof Promise)};var Wt=S({name:"ElMenu",props:Dt,emits:Rt,setup(e,{emit:n,slots:t,expose:a}){const s=Ce(),m=s.appContext.config.globalProperties.$router,c=w(),p=E("menu"),u=E("sub-menu"),f=w(-1),d=w(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),g=w(e.defaultActive),y=w({}),P=w({}),ce=h(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),te=()=>{const o=g.value&&y.value[g.value];if(!o||e.mode==="horizontal"||e.collapse)return;o.indexPath.forEach(i=>{const I=P.value[i];I&&V(i,I.indexPath)})},V=(o,l)=>{d.value.includes(o)||(e.uniqueOpened&&(d.value=d.value.filter(i=>l.includes(i))),d.value.push(o),n("open",o,l))},G=o=>{const l=d.value.indexOf(o);l!==-1&&d.value.splice(l,1)},j=(o,l)=>{G(o),n("close",o,l)},X=({index:o,indexPath:l})=>{d.value.includes(o)?j(o,l):V(o,l)},de=o=>{(e.mode==="horizontal"||e.collapse)&&(d.value=[]);const{index:l,indexPath:i}=o;if(!(we(l)||we(i)))if(e.router&&m){const I=o.route||l,_=m.push(I).then(B=>(B||(g.value=l),B));n("select",l,i,{index:l,indexPath:i,route:I},_)}else g.value=l,n("select",l,i,{index:l,indexPath:i})},pe=o=>{const l=y.value,i=l[o]||g.value&&l[g.value]||l[e.defaultActive];i?g.value=i.index:g.value=o},A=o=>{const l=getComputedStyle(o),i=Number.parseInt(l.marginLeft,10),I=Number.parseInt(l.marginRight,10);return o.offsetWidth+i+I||0},U=()=>{var o,l;if(!c.value)return-1;const i=Array.from((l=(o=c.value)==null?void 0:o.childNodes)!=null?l:[]).filter(D=>D.nodeName!=="#comment"&&(D.nodeName!=="#text"||D.nodeValue)),I=64,_=getComputedStyle(c.value),B=Number.parseInt(_.paddingLeft,10),r=Number.parseInt(_.paddingRight,10),v=c.value.clientWidth-B-r;let C=0,k=0;return i.forEach((D,He)=>{C+=A(D),C<=v-I&&(k=He+1)}),k===i.length?-1:k},F=o=>P.value[o].indexPath,J=(o,l=33.34)=>{let i;return()=>{i&&clearTimeout(i),i=setTimeout(()=>{o()},l)}};let Y=!0;const ne=()=>{if(f.value===U())return;const o=()=>{f.value=-1,et(()=>{f.value=U()})};Y?o():J(o)(),Y=!1};ae(()=>e.defaultActive,o=>{y.value[o]||(g.value=""),pe(o)}),ae(()=>e.collapse,o=>{o&&(d.value=[])}),ae(y.value,te);let K;Ze(()=>{e.mode==="horizontal"&&e.ellipsis?K=ct(c,ne).stop:K==null||K()});const oe=w(!1);{const o=_=>{P.value[_.index]=_},l=_=>{delete P.value[_.index]};_e("rootMenu",ye({props:e,openedMenus:d,items:y,subMenus:P,activeIndex:g,isMenuPopup:ce,addMenuItem:_=>{y.value[_.index]=_},removeMenuItem:_=>{delete y.value[_.index]},addSubMenu:o,removeSubMenu:l,openMenu:V,closeMenu:j,handleMenuItemClick:de,handleSubMenuClick:X})),_e(`subMenu:${s.uid}`,{addSubMenu:o,removeSubMenu:l,mouseInChild:oe,level:0})}return Ie(()=>{e.mode==="horizontal"&&new Nt(s.vnode.el,p.namespace.value)}),a({open:l=>{const{indexPath:i}=P.value[l];i.forEach(I=>V(I,i))},close:G,handleResize:ne}),()=>{var o,l;let i=(l=(o=t.default)==null?void 0:o.call(t))!=null?l:[];const I=[];if(e.mode==="horizontal"&&c.value){const v=ft(i),C=f.value===-1?v:v.slice(0,f.value),k=f.value===-1?[]:v.slice(f.value);k!=null&&k.length&&e.ellipsis&&(i=C,I.push(x(Ee,{index:"sub-menu-more",class:u.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>x(Se,{class:u.e("icon-more")},{default:()=>x(e.ellipsisIcon)}),default:()=>k})))}const _=Ve(e,0),B=e.closeOnClickOutside?[[ot,()=>{d.value.length&&(oe.value||(d.value.forEach(v=>n("close",v,F(v))),d.value=[]))}]]:[],r=Ne(x("ul",{key:String(e.collapse),role:"menubar",ref:c,style:_.value,class:{[p.b()]:!0,[p.m(e.mode)]:!0,[p.m("collapse")]:e.collapse}},[...i,...I]),B);return e.collapseTransition&&e.mode==="vertical"?x(Bt,()=>r):r}}});const Vt=ge({index:{type:be([String,null]),default:null},route:{type:be([String,Object])},disabled:Boolean}),jt={click:e=>Q(e.index)&&Array.isArray(e.indexPath)},he="ElMenuItem",Ft=S({name:he,components:{ElTooltip:Ae},props:Vt,emits:jt,setup(e,{emit:n}){const t=Ce(),a=re("rootMenu"),s=E("menu"),m=E("menu-item");a||ie(he,"can not inject root menu");const{parentMenu:c,indexPath:p}=We(t,tt(e,"index")),u=re(`subMenu:${c.value.uid}`);u||ie(he,"can not inject sub menu");const f=h(()=>e.index===a.activeIndex),d=ye({index:e.index,indexPath:p,active:f}),g=()=>{e.disabled||(a.handleMenuItemClick({index:e.index,indexPath:p.value,route:e.route}),n("click",d))};return Ie(()=>{u.addSubMenu(d),a.addMenuItem(d)}),Oe(()=>{u.removeSubMenu(d),a.removeMenuItem(d)}),{parentMenu:c,rootMenu:a,active:f,nsMenu:s,nsMenuItem:m,handleClick:g}}});function Ht(e,n,t,a,s,m){const c=xe("el-tooltip");return b(),T("li",{class:R([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:n[0]||(n[0]=(...p)=>e.handleClick&&e.handleClick(...p))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(b(),H(c,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:M(()=>[O(e.$slots,"title")]),default:M(()=>[N("div",{class:R(e.nsMenu.be("tooltip","trigger"))},[O(e.$slots,"default")],2)]),_:3},8,["effect"])):(b(),T(Z,{key:1},[O(e.$slots,"default"),O(e.$slots,"title")],64))],2)}var je=W(Ft,[["render",Ht],["__file","menu-item.vue"]]);const qt={title:String},Gt="ElMenuItemGroup",Ut=S({name:Gt,props:qt,setup(){return{ns:E("menu-item-group")}}});function Jt(e,n,t,a,s,m){return b(),T("li",{class:R(e.ns.b())},[N("div",{class:R(e.ns.e("title"))},[e.$slots.title?O(e.$slots,"title",{key:1}):(b(),T(Z,{key:0},[Pe(le(e.title),1)],64))],2),N("ul",null,[O(e.$slots,"default")])],2)}var Fe=W(Ut,[["render",Jt],["__file","menu-item-group.vue"]]);const Kt=Te(Wt,{MenuItem:je,MenuItemGroup:Fe,SubMenu:Ee}),Qt=q(je);q(Fe);const Zt=q(Ee),Xt={class:"header"},Yt=N("div",null,[N("img",{src:Be,alt:""})],-1),en=N("div",{class:"s-flex-grow"},null,-1),tn={class:"el-dropdown-link"},nn=N("img",{src:Be,alt:"",style:{height:"30px","margin-right":"10px"}},null,-1),on=S({__name:"Header",setup(e){const n=t=>{t==="out"&&nt().LOGOUT()};return(t,a)=>{const s=xe("arrow-down"),m=Se,c=at,p=lt,u=ut;return b(),T("div",Xt,[Yt,en,N("div",null,[$(u,{trigger:"hover",onCommand:n},{dropdown:M(()=>[$(p,{style:{width:"150px"}},{default:M(()=>[$(c,{command:"out"},{default:M(()=>[Pe("退出")]),_:1})]),_:1})]),default:M(()=>[N("span",tn,[nn,$(m,{class:"el-icon--right"},{default:M(()=>[$(s)]),_:1})])]),_:1})])])}}}),sn=S({__name:"Sidebar",setup(e){const n=w([]);dt().then(s=>{n.value=s.data});const t=(s,m)=>{},a=(s,m)=>{};return(s,m)=>{const c=Qt,p=Zt,u=Kt,f=st;return b(),H(f,null,{default:M(()=>[$(u,{router:"","active-text-color":"#ffd04b","background-color":"#393d49",class:"el-menu-vertical-demo","default-active":"2","text-color":"#fff",onOpen:t,onClose:a},{default:M(()=>[(b(!0),T(Z,null,$e(n.value,(d,g)=>(b(),T(Z,{key:g},[d.child.length?(b(),H(p,{key:0,index:d.path},{title:M(()=>[N("span",null,le(d.meta.title),1)]),default:M(()=>[(b(!0),T(Z,null,$e(d.child,(y,P)=>(b(),H(c,{key:P,index:y.path,route:y.path},{default:M(()=>[N("span",null,le(y.meta.title),1)]),_:2},1032,["index","route"]))),128))]),_:2},1032,["index"])):(b(),H(c,{key:1,index:d.path,route:d.path},{default:M(()=>[N("span",null,le(d.meta.title),1)]),_:2},1032,["index","route"]))],64))),128))]),_:1})]),_:1})}}}),En={__name:"Layout",setup(e){return(n,t)=>{const a=wt,s=kt,m=xe("router-view"),c=$t,p=Et;return b(),H(p,{class:"common-layout"},{default:M(()=>[$(a,null,{default:M(()=>[$(on)]),_:1}),$(p,null,{default:M(()=>[$(s,{width:"200px"},{default:M(()=>[$(sn)]),_:1}),$(c,{class:"main-container"},{default:M(()=>[$(m)]),_:1})]),_:1})]),_:1})}}};export{En as default};
