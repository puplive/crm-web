import{d as de,a as ue,D as $t,_ as Se,G as he,aA as Qe,ar as et,x as St,s as tt,c as g,W as Z,o as v,b as x,ak as G,h as F,an as ve,i as I,$ as J,n as T,J as re,X as ie,ah as at,t as S,a1 as me,Y as Tt,Z as ne,K as Vt,aG as xe,aU as qe,au as Pt,p as st,M as ge,bb as Lt,A as Dt,y as Re,z as te,cn as Mt,B as nt,U as se,ac as lt,E as A,af as _t,aK as It,ao as xt,aL as Bt,aM as Ft,as as zt,S as Ht,H as ke,e as d,f as At,aJ as Kt,v as Ot,aj as qt,aE as Rt,aB as Ut,I as Ue,r as Wt,co as Zt}from"./index-D6lb1vAv.js";import{E as ot}from"./scrollbar-DU4G5b5p.js";import{E as jt}from"./checkbox-DdrTfKwk.js";import{E as Gt}from"./radio-DpKKZ63o.js";import{r as Jt,i as Xt,a as Yt,b as Qt,e as ea}from"./use-form-item-D2gyIkin.js";import{c as We,t as ta,b as Ze}from"./select-C-KkSNyU.js";import{i as be}from"./isEqual-DtkQ-0cD.js";import{i as aa,f as Ce,g as it}from"./aria-KgdLjl5h.js";import{U as we,C as $e}from"./event-BB_Ol6Sd.js";import{u as je,c as Ge}from"./arrays-6TrVLtTe.js";import{s as sa}from"./scroll-Cee1eboZ.js";import{c as rt}from"./cloneDeep-CQWJaEaZ.js";import{E as na,i as la}from"./index-DtV3tWyM.js";import{u as oa,E as Je,C as ia}from"./popper-PtN5-UwR.js";import{d as ra}from"./tag-DyRGJO6y.js";var ua=1/0;function ca(e){var a=e==null?0:e.length;return a?Jt(e,ua):[]}var da=de({name:"NodeContent",setup(){return{ns:ue("cascader-node")}},render(){const{ns:e}=this,{node:a,panel:l}=this.$parent,{data:s,label:o}=a,{renderLabelFn:p}=l;return $t("span",{class:e.e("label")},p?p({node:a,data:s}):o)}});const Fe=Symbol(),pa=de({name:"ElCascaderNode",components:{ElCheckbox:jt,ElRadio:Gt,NodeContent:da,ElIcon:he,Check:Qe,Loading:et,ArrowRight:St},props:{node:{type:Object,required:!0},menuId:String},emits:["expand"],setup(e,{emit:a}){const l=tt(Fe),s=ue("cascader-node"),o=g(()=>l.isHoverMenu),p=g(()=>l.config.multiple),u=g(()=>l.config.checkStrictly),m=g(()=>{var y;return(y=l.checkedNodes[0])==null?void 0:y.uid}),c=g(()=>e.node.isDisabled),b=g(()=>e.node.isLeaf),C=g(()=>u.value&&!b.value||!c.value),P=g(()=>z(l.expandingNode)),L=g(()=>u.value&&l.checkedNodes.some(z)),z=y=>{var _;const{level:B,uid:j}=e.node;return((_=y==null?void 0:y.pathNodes[B-1])==null?void 0:_.uid)===j},K=()=>{P.value||l.expandNode(e.node)},O=y=>{const{node:_}=e;y!==_.checked&&l.handleCheckChange(_,y)},H=()=>{l.lazyLoad(e.node,()=>{b.value||K()})},V=y=>{o.value&&(q(),!b.value&&a("expand",y))},q=()=>{const{node:y}=e;!C.value||y.loading||(y.loaded?K():H())},D=()=>{o.value&&!b.value||(b.value&&!c.value&&!u.value&&!p.value?M(!0):q())},X=y=>{u.value?(O(y),e.node.loaded&&K()):M(y)},M=y=>{e.node.loaded?(O(y),!u.value&&K()):H()};return{panel:l,isHoverMenu:o,multiple:p,checkStrictly:u,checkedNodeId:m,isDisabled:c,isLeaf:b,expandable:C,inExpandingPath:P,inCheckedPath:L,ns:s,handleHoverExpand:V,handleExpand:q,handleClick:D,handleCheck:M,handleSelectCheck:X}}}),fa=["id","aria-haspopup","aria-owns","aria-expanded","tabindex"],ha=ie("span",null,null,-1);function va(e,a,l,s,o,p){const u=Z("el-checkbox"),m=Z("el-radio"),c=Z("check"),b=Z("el-icon"),C=Z("node-content"),P=Z("loading"),L=Z("arrow-right");return v(),x("li",{id:`${e.menuId}-${e.node.uid}`,role:"menuitem","aria-haspopup":!e.isLeaf,"aria-owns":e.isLeaf?null:e.menuId,"aria-expanded":e.inExpandingPath,tabindex:e.expandable?-1:void 0,class:T([e.ns.b(),e.ns.is("selectable",e.checkStrictly),e.ns.is("active",e.node.checked),e.ns.is("disabled",!e.expandable),e.inExpandingPath&&"in-active-path",e.inCheckedPath&&"in-checked-path"]),onMouseenter:a[2]||(a[2]=(...z)=>e.handleHoverExpand&&e.handleHoverExpand(...z)),onFocus:a[3]||(a[3]=(...z)=>e.handleHoverExpand&&e.handleHoverExpand(...z)),onClick:a[4]||(a[4]=(...z)=>e.handleClick&&e.handleClick(...z))},[G(" prefix "),e.multiple?(v(),F(u,{key:0,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:e.isDisabled,onClick:a[0]||(a[0]=ve(()=>{},["stop"])),"onUpdate:modelValue":e.handleSelectCheck},null,8,["model-value","indeterminate","disabled","onUpdate:modelValue"])):e.checkStrictly?(v(),F(m,{key:1,"model-value":e.checkedNodeId,label:e.node.uid,disabled:e.isDisabled,"onUpdate:modelValue":e.handleSelectCheck,onClick:a[1]||(a[1]=ve(()=>{},["stop"]))},{default:I(()=>[G(`
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      `),ha]),_:1},8,["model-value","label","disabled","onUpdate:modelValue"])):e.isLeaf&&e.node.checked?(v(),F(b,{key:2,class:T(e.ns.e("prefix"))},{default:I(()=>[J(c)]),_:1},8,["class"])):G("v-if",!0),G(" content "),J(C),G(" postfix "),e.isLeaf?G("v-if",!0):(v(),x(re,{key:3},[e.node.loading?(v(),F(b,{key:0,class:T([e.ns.is("loading"),e.ns.e("postfix")])},{default:I(()=>[J(P)]),_:1},8,["class"])):(v(),F(b,{key:1,class:T(["arrow-right",e.ns.e("postfix")])},{default:I(()=>[J(L)]),_:1},8,["class"]))],64))],42,fa)}var ma=Se(pa,[["render",va],["__file","node.vue"]]);const ga=de({name:"ElCascaderMenu",components:{Loading:et,ElIcon:he,ElScrollbar:ot,ElCascaderNode:ma},props:{nodes:{type:Array,required:!0},index:{type:Number,required:!0}},setup(e){const a=Vt(),l=ue("cascader-menu"),{t:s}=at(),o=Xt();let p=null,u=null;const m=tt(Fe),c=S(null),b=g(()=>!e.nodes.length),C=g(()=>!m.initialLoaded),P=g(()=>`${o.value}-${e.index}`),L=H=>{p=H.target},z=H=>{if(!(!m.isHoverMenu||!p||!c.value))if(p.contains(H.target)){K();const V=a.vnode.el,{left:q}=V.getBoundingClientRect(),{offsetWidth:D,offsetHeight:X}=V,M=H.clientX-q,y=p.offsetTop,_=y+p.offsetHeight;c.value.innerHTML=`
          <path style="pointer-events: auto;" fill="transparent" d="M${M} ${y} L${D} 0 V${y} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${M} ${_} L${D} ${X} V${_} Z" />
        `}else u||(u=window.setTimeout(O,m.config.hoverThreshold))},K=()=>{u&&(clearTimeout(u),u=null)},O=()=>{c.value&&(c.value.innerHTML="",K())};return{ns:l,panel:m,hoverZone:c,isEmpty:b,isLoading:C,menuId:P,t:s,handleExpand:L,handleMouseMove:z,clearHoverZone:O}}});function ba(e,a,l,s,o,p){const u=Z("el-cascader-node"),m=Z("loading"),c=Z("el-icon"),b=Z("el-scrollbar");return v(),F(b,{key:e.menuId,tag:"ul",role:"menu",class:T(e.ns.b()),"wrap-class":e.ns.e("wrap"),"view-class":[e.ns.e("list"),e.ns.is("empty",e.isEmpty)],onMousemove:e.handleMouseMove,onMouseleave:e.clearHoverZone},{default:I(()=>{var C;return[(v(!0),x(re,null,me(e.nodes,P=>(v(),F(u,{key:P.uid,node:P,"menu-id":e.menuId,onExpand:e.handleExpand},null,8,["node","menu-id","onExpand"]))),128)),e.isLoading?(v(),x("div",{key:0,class:T(e.ns.e("empty-text"))},[J(c,{size:"14",class:T(e.ns.is("loading"))},{default:I(()=>[J(m)]),_:1},8,["class"]),Tt(" "+ne(e.t("el.cascader.loading")),1)],2)):e.isEmpty?(v(),x("div",{key:1,class:T(e.ns.e("empty-text"))},ne(e.t("el.cascader.noData")),3)):(C=e.panel)!=null&&C.isHoverMenu?(v(),x("svg",{key:2,ref:"hoverZone",class:T(e.ns.e("hover-zone"))},null,2)):G("v-if",!0)]}),_:1},8,["class","wrap-class","view-class","onMousemove","onMouseleave"])}var ya=Se(ga,[["render",ba],["__file","menu.vue"]]);let ka=0;const Ca=e=>{const a=[e];let{parent:l}=e;for(;l;)a.unshift(l),l=l.parent;return a};class ce{constructor(a,l,s,o=!1){this.data=a,this.config=l,this.parent=s,this.root=o,this.uid=ka++,this.checked=!1,this.indeterminate=!1,this.loading=!1;const{value:p,label:u,children:m}=l,c=a[m],b=Ca(this);this.level=o?0:s?s.level+1:1,this.value=a[p],this.label=a[u],this.pathNodes=b,this.pathValues=b.map(C=>C.value),this.pathLabels=b.map(C=>C.label),this.childrenData=c,this.children=(c||[]).map(C=>new ce(C,l,this)),this.loaded=!l.lazy||this.isLeaf||!xe(c)}get isDisabled(){const{data:a,parent:l,config:s}=this,{disabled:o,checkStrictly:p}=s;return(qe(o)?o(a,this):!!a[o])||!p&&(l==null?void 0:l.isDisabled)}get isLeaf(){const{data:a,config:l,childrenData:s,loaded:o}=this,{lazy:p,leaf:u}=l,m=qe(u)?u(a,this):a[u];return Pt(m)?p&&!o?!1:!(Array.isArray(s)&&s.length):!!m}get valueByOption(){return this.config.emitPath?this.pathValues:this.value}appendChild(a){const{childrenData:l,children:s}=this,o=new ce(a,this.config,this);return Array.isArray(l)?l.push(a):this.childrenData=[a],s.push(o),o}calcText(a,l){const s=a?this.pathLabels.join(l):this.label;return this.text=s,s}broadcast(a,...l){const s=`onParent${We(a)}`;this.children.forEach(o=>{o&&(o.broadcast(a,...l),o[s]&&o[s](...l))})}emit(a,...l){const{parent:s}=this,o=`onChild${We(a)}`;s&&(s[o]&&s[o](...l),s.emit(a,...l))}onParentCheck(a){this.isDisabled||this.setCheckState(a)}onChildCheck(){const{children:a}=this,l=a.filter(o=>!o.isDisabled),s=l.length?l.every(o=>o.checked):!1;this.setCheckState(s)}setCheckState(a){const l=this.children.length,s=this.children.reduce((o,p)=>{const u=p.checked?1:p.indeterminate?.5:0;return o+u},0);this.checked=this.loaded&&this.children.filter(o=>!o.isDisabled).every(o=>o.loaded&&o.checked)&&a,this.indeterminate=this.loaded&&s!==l&&s>0}doCheck(a){if(this.checked===a)return;const{checkStrictly:l,multiple:s}=this.config;l||!s?this.checked=a:(this.broadcast("check",a),this.setCheckState(a),this.emit("check"))}}const Be=(e,a)=>e.reduce((l,s)=>(s.isLeaf?l.push(s):(!a&&l.push(s),l=l.concat(Be(s.children,a))),l),[]);class Xe{constructor(a,l){this.config=l;const s=(a||[]).map(o=>new ce(o,this.config));this.nodes=s,this.allNodes=Be(s,!1),this.leafNodes=Be(s,!0)}getNodes(){return this.nodes}getFlattedNodes(a){return a?this.leafNodes:this.allNodes}appendNode(a,l){const s=l?l.appendChild(a):new ce(a,this.config);l||this.nodes.push(s),this.allNodes.push(s),s.isLeaf&&this.leafNodes.push(s)}appendNodes(a,l){a.forEach(s=>this.appendNode(s,l))}getNodeByValue(a,l=!1){return!a&&a!==0?null:this.getFlattedNodes(l).find(o=>be(o.value,a)||be(o.pathValues,a))||null}getSameNode(a){return a&&this.getFlattedNodes(!1).find(({value:s,level:o})=>be(a.value,s)&&a.level===o)||null}}const ut=st({modelValue:{type:ge([Number,String,Array])},options:{type:ge(Array),default:()=>[]},props:{type:ge(Object),default:()=>({})}}),Na={expandTrigger:"click",multiple:!1,checkStrictly:!1,emitPath:!0,lazy:!1,lazyLoad:Lt,value:"value",label:"label",children:"children",leaf:"leaf",disabled:"disabled",hoverThreshold:500},Ea=e=>g(()=>({...Na,...e.props})),Ye=e=>{if(!e)return 0;const a=e.id.split("-");return Number(a[a.length-2])},wa=e=>{if(!e)return;const a=e.querySelector("input");a?a.click():aa(e)&&e.click()},$a=(e,a)=>{const l=a.slice(0),s=l.map(p=>p.uid),o=e.reduce((p,u)=>{const m=s.indexOf(u.uid);return m>-1&&(p.push(u),l.splice(m,1),s.splice(m,1)),p},[]);return o.push(...l),o},Sa=de({name:"ElCascaderPanel",components:{ElCascaderMenu:ya},props:{...ut,border:{type:Boolean,default:!0},renderLabel:Function},emits:[we,$e,"close","expand-change"],setup(e,{emit:a,slots:l}){let s=!1;const o=ue("cascader"),p=Ea(e);let u=null;const m=S(!0),c=S([]),b=S(null),C=S([]),P=S(null),L=S([]),z=g(()=>p.value.expandTrigger==="hover"),K=g(()=>e.renderLabel||l.default),O=()=>{const{options:r}=e,h=p.value;s=!1,u=new Xe(r,h),C.value=[u.getNodes()],h.lazy&&xe(e.options)?(m.value=!1,H(void 0,f=>{f&&(u=new Xe(f,h),C.value=[u.getNodes()]),m.value=!0,B(!1,!0)})):B(!1,!0)},H=(r,h)=>{const f=p.value;r=r||new ce({},f,void 0,!0),r.loading=!0;const N=w=>{const E=r,U=E.root?null:E;w&&(u==null||u.appendNodes(w,U)),E.loading=!1,E.loaded=!0,E.childrenData=E.childrenData||[],h&&h(w)};f.lazyLoad(r,N)},V=(r,h)=>{var f;const{level:N}=r,w=C.value.slice(0,N);let E;r.isLeaf?E=r.pathNodes[N-2]:(E=r,w.push(r.children)),((f=P.value)==null?void 0:f.uid)!==(E==null?void 0:E.uid)&&(P.value=r,C.value=w,!h&&a("expand-change",(r==null?void 0:r.pathValues)||[]))},q=(r,h,f=!0)=>{const{checkStrictly:N,multiple:w}=p.value,E=L.value[0];s=!0,!w&&(E==null||E.doCheck(!1)),r.doCheck(h),_(),f&&!w&&!N&&a("close"),!f&&!w&&!N&&D(r)},D=r=>{r&&(r=r.parent,D(r),r&&V(r))},X=r=>u==null?void 0:u.getFlattedNodes(r),M=r=>{var h;return(h=X(r))==null?void 0:h.filter(f=>f.checked!==!1)},y=()=>{L.value.forEach(r=>r.doCheck(!1)),_(),C.value=C.value.slice(0,1),P.value=null,a("expand-change",[])},_=()=>{var r;const{checkStrictly:h,multiple:f}=p.value,N=L.value,w=M(!h),E=$a(N,w),U=E.map($=>$.valueByOption);L.value=E,b.value=f?U:(r=U[0])!=null?r:null},B=(r=!1,h=!1)=>{const{modelValue:f}=e,{lazy:N,multiple:w,checkStrictly:E}=p.value,U=!E;if(!(!m.value||s||!h&&be(f,b.value)))if(N&&!r){const ae=je(ca(Ge(f))).map(W=>u==null?void 0:u.getNodeByValue(W)).filter(W=>!!W&&!W.loaded&&!W.loading);ae.length?ae.forEach(W=>{H(W,()=>B(!1,h))}):B(!0,h)}else{const $=w?Ge(f):[f],ae=je($.map(W=>u==null?void 0:u.getNodeByValue(W,U)));j(ae,h),b.value=rt(f)}},j=(r,h=!0)=>{const{checkStrictly:f}=p.value,N=L.value,w=r.filter($=>!!$&&(f||$.isLeaf)),E=u==null?void 0:u.getSameNode(P.value),U=h&&E||w[0];U?U.pathNodes.forEach($=>V($,!0)):P.value=null,N.forEach($=>$.doCheck(!1)),Re(w).forEach($=>$.doCheck(!0)),L.value=w,se(le)},le=()=>{lt&&c.value.forEach(r=>{const h=r==null?void 0:r.$el;if(h){const f=h.querySelector(`.${o.namespace.value}-scrollbar__wrap`),N=h.querySelector(`.${o.b("node")}.${o.is("active")}`)||h.querySelector(`.${o.b("node")}.in-active-path`);sa(f,N)}})},pe=r=>{const h=r.target,{code:f}=r;switch(f){case A.up:case A.down:{r.preventDefault();const N=f===A.up?-1:1;Ce(it(h,N,`.${o.b("node")}[tabindex="-1"]`));break}case A.left:{r.preventDefault();const N=c.value[Ye(h)-1],w=N==null?void 0:N.$el.querySelector(`.${o.b("node")}[aria-expanded="true"]`);Ce(w);break}case A.right:{r.preventDefault();const N=c.value[Ye(h)+1],w=N==null?void 0:N.$el.querySelector(`.${o.b("node")}[tabindex="-1"]`);Ce(w);break}case A.enter:wa(h);break}};return Dt(Fe,Re({config:p,expandingNode:P,checkedNodes:L,isHoverMenu:z,initialLoaded:m,renderLabelFn:K,lazyLoad:H,expandNode:V,handleCheckChange:q})),te([p,()=>e.options],O,{deep:!0,immediate:!0}),te(()=>e.modelValue,()=>{s=!1,B()},{deep:!0}),te(()=>b.value,r=>{be(r,e.modelValue)||(a(we,r),a($e,r))}),Mt(()=>c.value=[]),nt(()=>!xe(e.modelValue)&&B()),{ns:o,menuList:c,menus:C,checkedNodes:L,handleKeyDown:pe,handleCheckChange:q,getFlattedNodes:X,getCheckedNodes:M,clearCheckedNodes:y,calculateCheckedValue:_,scrollToExpandingNode:le}}});function Ta(e,a,l,s,o,p){const u=Z("el-cascader-menu");return v(),x("div",{class:T([e.ns.b("panel"),e.ns.is("bordered",e.border)]),onKeydown:a[0]||(a[0]=(...m)=>e.handleKeyDown&&e.handleKeyDown(...m))},[(v(!0),x(re,null,me(e.menus,(m,c)=>(v(),F(u,{key:c,ref_for:!0,ref:b=>e.menuList[c]=b,index:c,nodes:[...m]},null,8,["index","nodes"]))),128))],34)}var Ne=Se(Sa,[["render",Ta],["__file","index.vue"]]);Ne.install=e=>{e.component(Ne.name,Ne)};const Va=Ne,Pa=st({...ut,size:_t,placeholder:String,disabled:Boolean,clearable:Boolean,filterable:Boolean,filterMethod:{type:ge(Function),default:(e,a)=>e.text.includes(a)},separator:{type:String,default:" / "},showAllLevels:{type:Boolean,default:!0},collapseTags:Boolean,maxCollapseTags:{type:Number,default:1},collapseTagsTooltip:{type:Boolean,default:!1},debounce:{type:Number,default:300},beforeFilter:{type:ge(Function),default:()=>!0},popperClass:{type:String,default:""},teleported:oa.teleported,tagType:{...ta.type,default:"info"},validateEvent:{type:Boolean,default:!0},...It}),La={[we]:e=>!0,[$e]:e=>!0,focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,visibleChange:e=>xt(e),expandChange:e=>!!e,removeTag:e=>!!e},Da={key:0},Ma=["placeholder","onKeydown"],_a=["onClick"],Ia="ElCascader",xa=de({name:Ia}),Ba=de({...xa,props:Pa,emits:La,setup(e,{expose:a,emit:l}){const s=e,o={modifiers:[{name:"arrowPosition",enabled:!0,phase:"main",fn:({state:t})=>{const{modifiersData:n,placement:i}=t;["right","left","bottom","top"].includes(i)||(n.arrow.x=35)},requires:["arrow"]}]},p=Bt();let u=0,m=0;const c=ue("cascader"),b=ue("input"),{t:C}=at(),{form:P,formItem:L}=Yt(),{valueOnClear:z}=Ft(s),K=S(null),O=S(null),H=S(null),V=S(null),q=S(null),D=S(!1),X=S(!1),M=S(!1),y=S(!1),_=S(""),B=S(""),j=S([]),le=S([]),pe=S([]),r=S(!1),h=g(()=>p.style),f=g(()=>s.disabled||(P==null?void 0:P.disabled)),N=g(()=>s.placeholder||C("el.cascader.placeholder")),w=g(()=>B.value||j.value.length>0||r.value?"":N.value),E=Qt(),U=g(()=>["small"].includes(E.value)?"small":"default"),$=g(()=>!!s.props.multiple),ae=g(()=>!s.filterable||$.value),W=g(()=>$.value?B.value:_.value),ye=g(()=>{var t;return((t=V.value)==null?void 0:t.checkedNodes)||[]}),ct=g(()=>!s.clearable||f.value||M.value||!X.value?!1:!!ye.value.length),Te=g(()=>{const{showAllLevels:t,separator:n}=s,i=ye.value;return i.length?$.value?"":i[0].calcText(t,n):""}),dt=g(()=>(L==null?void 0:L.validateState)||""),Ve=g({get(){return rt(s.modelValue)},set(t){const n=t||z.value;l(we,n),l($e,n),s.validateEvent&&(L==null||L.validate("change").catch(i=>ea()))}}),pt=g(()=>[c.b(),c.m(E.value),c.is("disabled",f.value),p.class]),ft=g(()=>[b.e("icon"),"icon-arrow-down",c.is("reverse",D.value)]),ht=g(()=>c.is("focus",D.value||y.value)),ze=g(()=>{var t,n;return(n=(t=K.value)==null?void 0:t.popperRef)==null?void 0:n.contentRef}),R=t=>{var n,i,k;f.value||(t=t??!D.value,t!==D.value&&(D.value=t,(i=(n=O.value)==null?void 0:n.input)==null||i.setAttribute("aria-expanded",`${t}`),t?(fe(),se((k=V.value)==null?void 0:k.scrollToExpandingNode)):s.filterable&&_e(),l("visibleChange",t)))},fe=()=>{se(()=>{var t;(t=K.value)==null||t.updatePopper()})},Pe=()=>{M.value=!1},Le=t=>{const{showAllLevels:n,separator:i}=s;return{node:t,key:t.uid,text:t.calcText(n,i),hitState:!1,closable:!f.value&&!t.isDisabled,isCollapseTag:!1}},De=t=>{var n;const i=t.node;i.doCheck(!1),(n=V.value)==null||n.calculateCheckedValue(),l("removeTag",i.valueByOption)},vt=()=>{if(!$.value)return;const t=ye.value,n=[],i=[];if(t.forEach(k=>i.push(Le(k))),le.value=i,t.length){t.slice(0,s.maxCollapseTags).forEach(Y=>n.push(Le(Y)));const k=t.slice(s.maxCollapseTags),Q=k.length;Q&&(s.collapseTags?n.push({key:-1,text:`+ ${Q}`,closable:!1,isCollapseTag:!0}):k.forEach(Y=>n.push(Le(Y))))}j.value=n},He=()=>{var t,n;const{filterMethod:i,showAllLevels:k,separator:Q}=s,Y=(n=(t=V.value)==null?void 0:t.getFlattedNodes(!s.props.checkStrictly))==null?void 0:n.filter(ee=>ee.isDisabled?!1:(ee.calcText(k,Q),i(ee,W.value)));$.value&&(j.value.forEach(ee=>{ee.hitState=!1}),le.value.forEach(ee=>{ee.hitState=!1})),M.value=!0,pe.value=Y,fe()},mt=()=>{var t;let n;M.value&&q.value?n=q.value.$el.querySelector(`.${c.e("suggestion-item")}`):n=(t=V.value)==null?void 0:t.$el.querySelector(`.${c.b("node")}[tabindex="-1"]`),n&&(n.focus(),!M.value&&n.click())},Me=()=>{var t,n;const i=(t=O.value)==null?void 0:t.input,k=H.value,Q=(n=q.value)==null?void 0:n.$el;if(!(!lt||!i)){if(Q){const Y=Q.querySelector(`.${c.e("suggestion-list")}`);Y.style.minWidth=`${i.offsetWidth}px`}if(k){const{offsetHeight:Y}=k,ee=j.value.length>0?`${Math.max(Y+6,u)}px`:`${u}px`;i.style.height=ee,fe()}}},gt=t=>{var n;return(n=V.value)==null?void 0:n.getCheckedNodes(t)},bt=t=>{fe(),l("expandChange",t)},oe=t=>{var n;const i=(n=t.target)==null?void 0:n.value;if(t.type==="compositionend")r.value=!1,se(()=>Ie(i));else{const k=i[i.length-1]||"";r.value=!la(k)}},yt=t=>{if(!r.value)switch(t.code){case A.enter:R();break;case A.down:R(!0),se(mt),t.preventDefault();break;case A.esc:D.value===!0&&(t.preventDefault(),t.stopPropagation(),R(!1));break;case A.tab:R(!1);break}},kt=()=>{var t;(t=V.value)==null||t.clearCheckedNodes(),!D.value&&s.filterable&&_e(),R(!1)},_e=()=>{const{value:t}=Te;_.value=t,B.value=t},Ct=t=>{var n,i;const{checked:k}=t;$.value?(n=V.value)==null||n.handleCheckChange(t,!k,!1):(!k&&((i=V.value)==null||i.handleCheckChange(t,!0,!1)),R(!1))},Nt=t=>{const n=t.target,{code:i}=t;switch(i){case A.up:case A.down:{const k=i===A.up?-1:1;Ce(it(n,k,`.${c.e("suggestion-item")}[tabindex="-1"]`));break}case A.enter:n.click();break}},Et=()=>{const t=j.value,n=t[t.length-1];m=B.value?0:m+1,!(!n||!m||s.collapseTags&&t.length>1)&&(n.hitState?De(n):n.hitState=!0)},Ae=t=>{const n=t.target,i=c.e("search-input");n.className===i&&(y.value=!0),l("focus",t)},Ke=t=>{y.value=!1,l("blur",t)},wt=ra(()=>{const{value:t}=W;if(!t)return;const n=s.beforeFilter(t);zt(n)?n.then(He).catch(()=>{}):n!==!1?He():Pe()},s.debounce),Ie=(t,n)=>{!D.value&&R(!0),!(n!=null&&n.isComposing)&&(t?wt():Pe())},Oe=t=>Number.parseFloat(Zt(b.cssVarName("input-height"),t).value)-2;return te(M,fe),te([ye,f],vt),te(j,()=>{se(()=>Me())}),te(E,async()=>{await se();const t=O.value.input;u=Oe(t)||u,Me()}),te(Te,_e,{immediate:!0}),nt(()=>{const t=O.value.input,n=Oe(t);u=t.offsetHeight||n,Ht(t,Me)}),a({getCheckedNodes:gt,cascaderPanelRef:V,togglePopperVisible:R,contentRef:ze}),(t,n)=>(v(),F(d(Je),{ref_key:"tooltipRef",ref:K,visible:D.value,teleported:t.teleported,"popper-class":[d(c).e("dropdown"),t.popperClass],"popper-options":o,"fallback-placements":["bottom-start","bottom","top-start","top","right","left"],"stop-popper-mouse-event":!1,"gpu-acceleration":!1,placement:"bottom-start",transition:`${d(c).namespace.value}-zoom-in-top`,effect:"light",pure:"",persistent:"",onHide:Pe},{default:I(()=>[ke((v(),x("div",{class:T(d(pt)),style:At(d(h)),onClick:n[5]||(n[5]=()=>R(d(ae)?void 0:!0)),onKeydown:yt,onMouseenter:n[6]||(n[6]=i=>X.value=!0),onMouseleave:n[7]||(n[7]=i=>X.value=!1)},[J(d(na),{ref_key:"input",ref:O,modelValue:_.value,"onUpdate:modelValue":n[1]||(n[1]=i=>_.value=i),placeholder:d(w),readonly:d(ae),disabled:d(f),"validate-event":!1,size:d(E),class:T(d(ht)),tabindex:d($)&&t.filterable&&!d(f)?-1:void 0,onCompositionstart:oe,onCompositionupdate:oe,onCompositionend:oe,onFocus:Ae,onBlur:Ke,onInput:Ie},{suffix:I(()=>[d(ct)?(v(),F(d(he),{key:"clear",class:T([d(b).e("icon"),"icon-circle-close"]),onClick:ve(kt,["stop"])},{default:I(()=>[J(d(Kt))]),_:1},8,["class","onClick"])):(v(),F(d(he),{key:"arrow-down",class:T(d(ft)),onClick:n[0]||(n[0]=ve(i=>R(),["stop"]))},{default:I(()=>[J(d(Ot))]),_:1},8,["class"]))]),_:1},8,["modelValue","placeholder","readonly","disabled","size","class","tabindex"]),d($)?(v(),x("div",{key:0,ref_key:"tagWrapper",ref:H,class:T([d(c).e("tags"),d(c).is("validate",!!d(dt))])},[(v(!0),x(re,null,me(j.value,i=>(v(),F(d(Ze),{key:i.key,type:t.tagType,size:d(U),hit:i.hitState,closable:i.closable,"disable-transitions":"",onClose:k=>De(i)},{default:I(()=>[i.isCollapseTag===!1?(v(),x("span",Da,ne(i.text),1)):(v(),F(d(Je),{key:1,disabled:D.value||!t.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],placement:"bottom",effect:"light"},{default:I(()=>[ie("span",null,ne(i.text),1)]),content:I(()=>[ie("div",{class:T(d(c).e("collapse-tags"))},[(v(!0),x(re,null,me(le.value.slice(t.maxCollapseTags),(k,Q)=>(v(),x("div",{key:Q,class:T(d(c).e("collapse-tag"))},[(v(),F(d(Ze),{key:k.key,class:"in-tooltip",type:t.tagType,size:d(U),hit:k.hitState,closable:k.closable,"disable-transitions":"",onClose:Y=>De(k)},{default:I(()=>[ie("span",null,ne(k.text),1)]),_:2},1032,["type","size","hit","closable","onClose"]))],2))),128))],2)]),_:2},1032,["disabled"]))]),_:2},1032,["type","size","hit","closable","onClose"]))),128)),t.filterable&&!d(f)?ke((v(),x("input",{key:0,"onUpdate:modelValue":n[2]||(n[2]=i=>B.value=i),type:"text",class:T(d(c).e("search-input")),placeholder:d(Te)?"":d(N),onInput:n[3]||(n[3]=i=>Ie(B.value,i)),onClick:n[4]||(n[4]=ve(i=>R(!0),["stop"])),onKeydown:qt(Et,["delete"]),onCompositionstart:oe,onCompositionupdate:oe,onCompositionend:oe,onFocus:Ae,onBlur:Ke},null,42,Ma)),[[Rt,B.value]]):G("v-if",!0)],2)):G("v-if",!0)],38)),[[d(ia),()=>R(!1),d(ze)]])]),content:I(()=>[ke(J(d(Va),{ref_key:"cascaderPanelRef",ref:V,modelValue:d(Ve),"onUpdate:modelValue":n[8]||(n[8]=i=>Ut(Ve)?Ve.value=i:null),options:t.options,props:s.props,border:!1,"render-label":t.$slots.default,onExpandChange:bt,onClose:n[9]||(n[9]=i=>t.$nextTick(()=>R(!1)))},null,8,["modelValue","options","props","render-label"]),[[Ue,!M.value]]),t.filterable?ke((v(),F(d(ot),{key:0,ref_key:"suggestionPanel",ref:q,tag:"ul",class:T(d(c).e("suggestion-panel")),"view-class":d(c).e("suggestion-list"),onKeydown:Nt},{default:I(()=>[pe.value.length?(v(!0),x(re,{key:0},me(pe.value,i=>(v(),x("li",{key:i.uid,class:T([d(c).e("suggestion-item"),d(c).is("checked",i.checked)]),tabindex:-1,onClick:k=>Ct(i)},[ie("span",null,ne(i.text),1),i.checked?(v(),F(d(he),{key:0},{default:I(()=>[J(d(Qe))]),_:1})):G("v-if",!0)],10,_a))),128)):Wt(t.$slots,"empty",{key:1},()=>[ie("li",{class:T(d(c).e("empty-text"))},ne(d(C)("el.cascader.noMatch")),3)])]),_:3},8,["class","view-class"])),[[Ue,M.value]]):G("v-if",!0)]),_:3},8,["visible","teleported","popper-class","transition"]))}});var Ee=Se(Ba,[["__file","cascader.vue"]]);Ee.install=e=>{e.component(Ee.name,Ee)};const Fa=Ee,Qa=Fa;export{Qa as E};