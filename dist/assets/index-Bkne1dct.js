import{b6 as tt,j as ol,aV as nt,d as Q,u as x,e as d,o as c,f as I,P as E,r as k,n as u,a as B,c as L,w as $,S as N,a6 as xe,a8 as D,W as T,g as Z,T as st,h as al,k as ge,K as X,b7 as il,b8 as j,v as q,E as Ee,s as ye,b2 as rl,z as ot,M as U,C as ae,D as Te,R as F,l as V,y as ke,al as Y,a4 as at,aq as it,aA as W,b9 as _e,a0 as rt,ae as ut,aa as dt,H as ct,ba as we,B as pt,a2 as ft,I as be,ar as vt,p as mt,ao as bt,x as ul,O as H,bb as gt,F as el,V as ll,Q as tl,a5 as oe,as as ht,a9 as Ie,bc as yt,i as dl}from"./index-Q273XHf8.js";import{i as St,u as Ct,E as Ot}from"./index-j8eE0ruH.js";import{u as wt,d as It,a as Vt,E as Et,C as Tt}from"./el-scrollbar-0l_cZ0S_.js";import{E as Ve,_ as ie,V as kt,i as nl}from"./index-CRFYaBQA.js";import{a as cl,u as $t,c as Mt,U as K,C as pl}from"./el-button-DXeH7ULc.js";import{i as he}from"./isEqual-DPHZFWxr.js";import{a as fl,d as Rt,u as Bt}from"./constants-D7u2-Egf.js";import{u as G,E as Dt,f as Lt}from"./typescript-CjU46sqC.js";import{s as zt}from"./scroll-BIoQ-qBU.js";import{b as Nt,d as Ft}from"./el-tag-DqRVPKx1.js";import{c as Wt}from"./index-Bvt8dlHX.js";function Pt(e,n,a,b){for(var i=e.length,p=a+(b?1:-1);b?p--:++p<i;)if(n(e[p],p,e))return p;return-1}function Kt(e,n,a){var b=e==null?0:e.length;if(!b)return-1;var i=b-1;return Pt(e,Nt(n),i,!0)}const At=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Vn=e=>tt(e),vl=ol({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:nt},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Ht={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},Ut=Q({name:"ElTag"}),Gt=Q({...Ut,props:vl,emits:Ht,setup(e,{emit:n}){const a=e,b=cl(),i=x("tag"),p=d(()=>{const{type:r,hit:h,effect:m,closable:C,round:O}=a;return[i.b(),i.is("closable",C),i.m(r||"primary"),i.m(b.value),i.m(m),i.is("hit",h),i.is("round",O)]}),t=r=>{n("close",r)},g=r=>{n("click",r)};return(r,h)=>r.disableTransitions?(c(),I("span",{key:0,class:u(B(p)),style:Z({backgroundColor:r.color}),onClick:g},[E("span",{class:u(B(i).e("content"))},[k(r.$slots,"default")],2),r.closable?(c(),L(B(Ve),{key:0,class:u(B(i).e("close")),onClick:D(t,["stop"])},{default:$(()=>[N(B(xe))]),_:1},8,["class","onClick"])):T("v-if",!0)],6)):(c(),L(st,{key:1,name:`${B(i).namespace.value}-zoom-in-center`,appear:""},{default:$(()=>[E("span",{class:u(B(p)),style:Z({backgroundColor:r.color}),onClick:g},[E("span",{class:u(B(i).e("content"))},[k(r.$slots,"default")],2),r.closable?(c(),L(B(Ve),{key:0,class:u(B(i).e("close")),onClick:D(t,["stop"])},{default:$(()=>[N(B(xe))]),_:1},8,["class","onClick"])):T("v-if",!0)],6)]),_:3},8,["name"]))}});var jt=ie(Gt,[["__file","tag.vue"]]);const qt=al(jt),ml=Symbol("ElSelectGroup"),Se=Symbol("ElSelect");function Qt(e,n){const a=ge(Se),b=ge(ml,{disabled:!1}),i=d(()=>a.props.multiple?m(a.props.modelValue,e.value):m([a.props.modelValue],e.value)),p=d(()=>{if(a.props.multiple){const f=a.props.modelValue||[];return!i.value&&f.length>=a.props.multipleLimit&&a.props.multipleLimit>0}else return!1}),t=d(()=>e.label||(X(e.value)?"":e.value)),g=d(()=>e.value||e.label||""),r=d(()=>e.disabled||n.groupDisabled||p.value),h=Ee(),m=(f=[],y)=>{if(X(e.value)){const o=a.props.valueKey;return f&&f.some(M=>il(j(M,o))===j(y,o))}else return f&&f.includes(y)},C=()=>{!e.disabled&&!b.disabled&&(a.states.hoveringIndex=a.optionsArray.indexOf(h.proxy))},O=f=>{const y=new RegExp(At(f),"i");n.visible=y.test(t.value)||e.created};return q(()=>t.value,()=>{!e.created&&!a.props.remote&&a.setSelected()}),q(()=>e.value,(f,y)=>{const{remote:o,valueKey:M}=a.props;if(he(f,y)||(a.onOptionDestroy(y,h.proxy),a.onOptionCreate(h.proxy)),!e.created&&!o){if(M&&X(f)&&X(y)&&f[M]===y[M])return;a.setSelected()}}),q(()=>b.disabled,()=>{n.groupDisabled=b.disabled},{immediate:!0}),{select:a,currentLabel:t,currentValue:g,itemSelected:i,isDisabled:r,hoverItem:C,updateOption:O}}const Jt=Q({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const n=x("select"),a=fl(),b=d(()=>[n.be("dropdown","item"),n.is("disabled",B(g)),n.is("selected",B(t)),n.is("hovering",B(O))]),i=ye({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:p,itemSelected:t,isDisabled:g,select:r,hoverItem:h,updateOption:m}=Qt(e,i),{visible:C,hover:O}=rl(i),f=Ee().proxy;r.onOptionCreate(f),ot(()=>{const o=f.value,{selected:M}=r.states,re=(r.props.multiple?M:[M]).some(ue=>ue.value===f.value);U(()=>{r.states.cachedOptions.get(o)===f&&!re&&r.states.cachedOptions.delete(o)}),r.onOptionDestroy(o,f)});function y(){e.disabled!==!0&&i.groupDisabled!==!0&&r.handleOptionSelect(f)}return{ns:n,id:a,containerKls:b,currentLabel:p,itemSelected:t,isDisabled:g,select:r,hoverItem:h,updateOption:m,visible:C,hover:O,selectOptionClick:y,states:i}}}),Xt=["id","aria-disabled","aria-selected"];function Yt(e,n,a,b,i,p){return ae((c(),I("li",{id:e.id,class:u(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:n[0]||(n[0]=(...t)=>e.hoverItem&&e.hoverItem(...t)),onClick:n[1]||(n[1]=D((...t)=>e.selectOptionClick&&e.selectOptionClick(...t),["stop"]))},[k(e.$slots,"default",{},()=>[E("span",null,F(e.currentLabel),1)])],42,Xt)),[[Te,e.visible]])}var $e=ie(Jt,[["render",Yt],["__file","option.vue"]]);const Zt=Q({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ge(Se),n=x("select"),a=d(()=>e.props.popperClass),b=d(()=>e.props.multiple),i=d(()=>e.props.fitInputWidth),p=V("");function t(){var g;p.value=`${(g=e.selectRef)==null?void 0:g.offsetWidth}px`}return ke(()=>{t(),G(e.selectRef,t)}),{ns:n,minWidth:p,popperClass:a,isMultiple:b,isFitInputWidth:i}}});function xt(e,n,a,b,i,p){return c(),I("div",{class:u([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:Z({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(c(),I("div",{key:0,class:u(e.ns.be("dropdown","header"))},[k(e.$slots,"header")],2)):T("v-if",!0),k(e.$slots,"default"),e.$slots.footer?(c(),I("div",{key:1,class:u(e.ns.be("dropdown","footer"))},[k(e.$slots,"footer")],2)):T("v-if",!0)],6)}var _t=ie(Zt,[["render",xt],["__file","select-dropdown.vue"]]);function en(e){const n=V(!1);return{handleCompositionStart:()=>{n.value=!0},handleCompositionUpdate:p=>{const t=p.target.value,g=t[t.length-1]||"";n.value=!St(g)},handleCompositionEnd:p=>{n.value&&(n.value=!1,Y(e)&&e(p))}}}const ln=11,tn=(e,n)=>{const{t:a}=at(),b=fl(),i=x("select"),p=x("input"),t=ye({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),g=V(null),r=V(null),h=V(null),m=V(null),C=V(null),O=V(null),f=V(null),y=V(null),o=V(null),M=V(null),_=V(null),re=V(null),{wrapperRef:ue,isFocused:Me,handleFocus:gl,handleBlur:Re}=Ct(C,{afterFocus(){e.automaticDropdown&&!w.value&&(w.value=!0,t.menuVisibleOnFocus=!0)},beforeBlur(l){var s,v;return((s=h.value)==null?void 0:s.isFocusInsideContent(l))||((v=m.value)==null?void 0:v.isFocusInsideContent(l))},afterBlur(){w.value=!1,t.menuVisibleOnFocus=!1}}),w=V(!1),ee=V(),{form:Be,formItem:le}=$t(),{inputId:hl}=Mt(e,{formItemContext:le}),{valueOnClear:yl,isEmptyValue:Sl}=it(e),de=d(()=>e.disabled||(Be==null?void 0:Be.disabled)),Ce=d(()=>e.multiple?W(e.modelValue)&&e.modelValue.length>0:!Sl(e.modelValue)),Cl=d(()=>e.clearable&&!de.value&&t.inputHovering&&Ce.value),De=d(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Ol=d(()=>i.is("reverse",De.value&&w.value)),Le=d(()=>(le==null?void 0:le.validateState)||""),wl=d(()=>kt[Le.value]),Il=d(()=>e.remote?300:0),ze=d(()=>e.loading?e.loadingText||a("el.select.loading"):e.remote&&!t.inputValue&&t.options.size===0?!1:e.filterable&&t.inputValue&&t.options.size>0&&te.value===0?e.noMatchText||a("el.select.noMatch"):t.options.size===0?e.noDataText||a("el.select.noData"):null),te=d(()=>R.value.filter(l=>l.visible).length),R=d(()=>{const l=Array.from(t.options.values()),s=[];return t.optionValues.forEach(v=>{const S=l.findIndex(P=>P.value===v);S>-1&&s.push(l[S])}),s.length>=l.length?s:l}),Vl=d(()=>Array.from(t.cachedOptions.values())),El=d(()=>{const l=R.value.filter(s=>!s.created).some(s=>s.currentLabel===t.inputValue);return e.filterable&&e.allowCreate&&t.inputValue!==""&&!l}),Ne=()=>{e.filterable&&Y(e.filterMethod)||e.filterable&&e.remote&&Y(e.remoteMethod)||R.value.forEach(l=>{var s;(s=l.updateOption)==null||s.call(l,t.inputValue)})},Fe=cl(),Tl=d(()=>["small"].includes(Fe.value)?"small":"default"),kl=d({get(){return w.value&&ze.value!==!1},set(l){w.value=l}}),$l=d(()=>W(e.modelValue)?e.modelValue.length===0&&!t.inputValue:e.filterable?!t.inputValue:!0),Ml=d(()=>{var l;const s=(l=e.placeholder)!=null?l:a("el.select.placeholder");return e.multiple||!Ce.value?s:t.selectedLabel}),Rl=d(()=>_e?null:"mouseenter");q(()=>e.modelValue,(l,s)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(t.inputValue="",ce("")),pe(),!he(l,s)&&e.validateEvent&&(le==null||le.validate("change").catch(v=>Rt()))},{flush:"post",deep:!0}),q(()=>w.value,l=>{l?ce(t.inputValue):(t.inputValue="",t.previousQuery=null,t.isBeforeHide=!0),n("visible-change",l)}),q(()=>t.options.entries(),()=>{var l;if(!rt)return;const s=((l=g.value)==null?void 0:l.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!ut(e.modelValue)||!Array.from(s).includes(document.activeElement))&&pe(),e.defaultFirstOption&&(e.filterable||e.remote)&&te.value&&We()},{flush:"post"}),q(()=>t.hoveringIndex,l=>{dt(l)&&l>-1?ee.value=R.value[l]||{}:ee.value={},R.value.forEach(s=>{s.hover=ee.value===s})}),ct(()=>{t.isBeforeHide||Ne()});const ce=l=>{t.previousQuery!==l&&(t.previousQuery=l,e.filterable&&Y(e.filterMethod)?e.filterMethod(l):e.filterable&&e.remote&&Y(e.remoteMethod)&&e.remoteMethod(l),e.defaultFirstOption&&(e.filterable||e.remote)&&te.value?U(We):U(Bl))},We=()=>{const l=R.value.filter(S=>S.visible&&!S.disabled&&!S.states.groupDisabled),s=l.find(S=>S.created),v=l[0];t.hoveringIndex=Qe(R.value,s||v)},pe=()=>{if(e.multiple)t.selectedLabel="";else{const s=Pe(e.modelValue);t.selectedLabel=s.currentLabel,t.selected=s;return}const l=[];W(e.modelValue)&&e.modelValue.forEach(s=>{l.push(Pe(s))}),t.selected=l},Pe=l=>{let s;const v=we(l).toLowerCase()==="object",S=we(l).toLowerCase()==="null",P=we(l).toLowerCase()==="undefined";for(let A=t.cachedOptions.size-1;A>=0;A--){const z=Vl.value[A];if(v?j(z.value,e.valueKey)===j(l,e.valueKey):z.value===l){s={value:l,currentLabel:z.currentLabel,get isDisabled(){return z.isDisabled}};break}}if(s)return s;const J=v?l.label:!S&&!P?l:"";return{value:l,currentLabel:J}},Bl=()=>{e.multiple?t.hoveringIndex=R.value.findIndex(l=>t.selected.some(s=>se(s)===se(l))):t.hoveringIndex=R.value.findIndex(l=>se(l)===se(t.selected))},Dl=()=>{t.selectionWidth=r.value.getBoundingClientRect().width},Ke=()=>{t.calculatorWidth=O.value.getBoundingClientRect().width},Ll=()=>{t.collapseItemWidth=_.value.getBoundingClientRect().width},Oe=()=>{var l,s;(s=(l=h.value)==null?void 0:l.updatePopper)==null||s.call(l)},Ae=()=>{var l,s;(s=(l=m.value)==null?void 0:l.updatePopper)==null||s.call(l)},He=()=>{t.inputValue.length>0&&!w.value&&(w.value=!0),ce(t.inputValue)},Ue=l=>{if(t.inputValue=l.target.value,e.remote)Ge();else return He()},Ge=Ft(()=>{He()},Il.value),ne=l=>{he(e.modelValue,l)||n(pl,l)},zl=l=>Kt(l,s=>!t.disabledOptions.has(s)),Nl=l=>{if(e.multiple&&l.code!==Dt.delete&&l.target.value.length<=0){const s=e.modelValue.slice(),v=zl(s);if(v<0)return;const S=s[v];s.splice(v,1),n(K,s),ne(s),n("remove-tag",S)}},Fl=(l,s)=>{const v=t.selected.indexOf(s);if(v>-1&&!de.value){const S=e.modelValue.slice();S.splice(v,1),n(K,S),ne(S),n("remove-tag",s.value)}l.stopPropagation(),ve()},je=l=>{l.stopPropagation();const s=e.multiple?[]:yl.value;if(e.multiple)for(const v of t.selected)v.isDisabled&&s.push(v.value);n(K,s),ne(s),t.hoveringIndex=-1,w.value=!1,n("clear"),ve()},qe=l=>{if(e.multiple){const s=(e.modelValue||[]).slice(),v=Qe(s,l.value);v>-1?s.splice(v,1):(e.multipleLimit<=0||s.length<e.multipleLimit)&&s.push(l.value),n(K,s),ne(s),l.created&&ce(""),e.filterable&&!e.reserveKeyword&&(t.inputValue="")}else n(K,l.value),ne(l.value),w.value=!1;ve(),!w.value&&U(()=>{fe(l)})},Qe=(l=[],s)=>{if(!X(s))return l.indexOf(s);const v=e.valueKey;let S=-1;return l.some((P,J)=>il(j(P,v))===j(s,v)?(S=J,!0):!1),S},fe=l=>{var s,v,S,P,J;const me=W(l)?l[0]:l;let A=null;if(me!=null&&me.value){const z=R.value.filter(Ze=>Ze.value===me.value);z.length>0&&(A=z[0].$el)}if(h.value&&A){const z=(P=(S=(v=(s=h.value)==null?void 0:s.popperRef)==null?void 0:v.contentRef)==null?void 0:S.querySelector)==null?void 0:P.call(S,`.${i.be("dropdown","wrap")}`);z&&zt(z,A)}(J=re.value)==null||J.handleScroll()},Wl=l=>{t.options.set(l.value,l),t.cachedOptions.set(l.value,l),l.disabled&&t.disabledOptions.set(l.value,l)},Pl=(l,s)=>{t.options.get(l)===s&&t.options.delete(l)},{handleCompositionStart:Kl,handleCompositionUpdate:Al,handleCompositionEnd:Hl}=en(l=>Ue(l)),Ul=d(()=>{var l,s;return(s=(l=h.value)==null?void 0:l.popperRef)==null?void 0:s.contentRef}),Gl=()=>{t.isBeforeHide=!1,U(()=>fe(t.selected))},ve=()=>{var l;(l=C.value)==null||l.focus()},jl=()=>{Je()},ql=l=>{je(l)},Je=l=>{if(w.value=!1,Me.value){const s=new FocusEvent("focus",l);U(()=>Re(s))}},Ql=()=>{t.inputValue.length>0?t.inputValue="":w.value=!1},Xe=()=>{de.value||(_e&&(t.inputHovering=!0),t.menuVisibleOnFocus?t.menuVisibleOnFocus=!1:w.value=!w.value)},Jl=()=>{w.value?R.value[t.hoveringIndex]&&qe(R.value[t.hoveringIndex]):Xe()},se=l=>X(l.value)?j(l.value,e.valueKey):l.value,Xl=d(()=>R.value.filter(l=>l.visible).every(l=>l.disabled)),Yl=d(()=>e.multiple?e.collapseTags?t.selected.slice(0,e.maxCollapseTags):t.selected:[]),Zl=d(()=>e.multiple?e.collapseTags?t.selected.slice(e.maxCollapseTags):[]:[]),Ye=l=>{if(!w.value){w.value=!0;return}if(!(t.options.size===0||te.value===0)&&!Xl.value){l==="next"?(t.hoveringIndex++,t.hoveringIndex===t.options.size&&(t.hoveringIndex=0)):l==="prev"&&(t.hoveringIndex--,t.hoveringIndex<0&&(t.hoveringIndex=t.options.size-1));const s=R.value[t.hoveringIndex];(s.disabled===!0||s.states.groupDisabled===!0||!s.visible)&&Ye(l),U(()=>fe(ee.value))}},xl=()=>{if(!r.value)return 0;const l=window.getComputedStyle(r.value);return Number.parseFloat(l.gap||"6px")},_l=d(()=>{const l=xl();return{maxWidth:`${_.value&&e.maxCollapseTags===1?t.selectionWidth-t.collapseItemWidth-l:t.selectionWidth}px`}}),et=d(()=>({maxWidth:`${t.selectionWidth}px`})),lt=d(()=>({width:`${Math.max(t.calculatorWidth,ln)}px`}));return e.multiple&&!W(e.modelValue)&&n(K,[]),!e.multiple&&W(e.modelValue)&&n(K,""),G(r,Dl),G(O,Ke),G(o,Oe),G(ue,Oe),G(M,Ae),G(_,Ll),ke(()=>{pe()}),{inputId:hl,contentId:b,nsSelect:i,nsInput:p,states:t,isFocused:Me,expanded:w,optionsArray:R,hoverOption:ee,selectSize:Fe,filteredOptionsCount:te,resetCalculatorWidth:Ke,updateTooltip:Oe,updateTagTooltip:Ae,debouncedOnInputChange:Ge,onInput:Ue,deletePrevTag:Nl,deleteTag:Fl,deleteSelected:je,handleOptionSelect:qe,scrollToOption:fe,hasModelValue:Ce,shouldShowPlaceholder:$l,currentPlaceholder:Ml,mouseEnterEventName:Rl,showClose:Cl,iconComponent:De,iconReverse:Ol,validateState:Le,validateIcon:wl,showNewOption:El,updateOptions:Ne,collapseTagSize:Tl,setSelected:pe,selectDisabled:de,emptyText:ze,handleCompositionStart:Kl,handleCompositionUpdate:Al,handleCompositionEnd:Hl,onOptionCreate:Wl,onOptionDestroy:Pl,handleMenuEnter:Gl,handleFocus:gl,focus:ve,blur:jl,handleBlur:Re,handleClearClick:ql,handleClickOutside:Je,handleEsc:Ql,toggleMenu:Xe,selectOption:Jl,getValueKey:se,navigateOptions:Ye,dropdownMenuVisible:kl,showTagList:Yl,collapseTagList:Zl,tagStyle:_l,collapseTagStyle:et,inputStyle:lt,popperRef:Ul,inputRef:C,tooltipRef:h,tagTooltipRef:m,calculatorRef:O,prefixRef:f,suffixRef:y,selectRef:g,wrapperRef:ue,selectionRef:r,scrollbarRef:re,menuRef:o,tagMenuRef:M,collapseItemRef:_}};var nn=Q({name:"ElOptions",setup(e,{slots:n}){const a=ge(Se);let b=[];return()=>{var i,p;const t=(i=n.default)==null?void 0:i.call(n),g=[];function r(h){W(h)&&h.forEach(m=>{var C,O,f,y;const o=(C=(m==null?void 0:m.type)||{})==null?void 0:C.name;o==="ElOptionGroup"?r(!pt(m.children)&&!W(m.children)&&Y((O=m.children)==null?void 0:O.default)?(f=m.children)==null?void 0:f.default():m.children):o==="ElOption"?g.push((y=m.props)==null?void 0:y.value):W(m.children)&&r(m.children)})}return t.length&&r((p=t[0])==null?void 0:p.children),he(g,b)||(b=g,a&&(a.states.optionValues=g)),t}}});const sn=ol({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:ft,effect:{type:be(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:be(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:wt.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:nl,default:vt},fitInputWidth:Boolean,suffixIcon:{type:nl,default:mt},tagType:{...vl.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:be(String),values:It,default:"bottom-start"},fallbackPlacements:{type:be(Array),default:["bottom-start","top-start","right","left"]},...bt,...Bt(["ariaLabel"])}),sl="ElSelect",on=Q({name:sl,componentName:sl,components:{ElInput:Ot,ElSelectMenu:_t,ElOption:$e,ElOptions:nn,ElTag:qt,ElScrollbar:Vt,ElTooltip:Et,ElIcon:Ve},directives:{ClickOutside:Tt},props:sn,emits:[K,pl,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:n}){const a=tn(e,n);return ul(Se,ye({props:e,states:a.states,optionsArray:a.optionsArray,handleOptionSelect:a.handleOptionSelect,onOptionCreate:a.onOptionCreate,onOptionDestroy:a.onOptionDestroy,selectRef:a.selectRef,setSelected:a.setSelected})),{...a}}}),an=["id","name","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label"],rn=["textContent"],un={key:1};function dn(e,n,a,b,i,p){const t=H("el-tag"),g=H("el-tooltip"),r=H("el-icon"),h=H("el-option"),m=H("el-options"),C=H("el-scrollbar"),O=H("el-select-menu"),f=gt("click-outside");return ae((c(),I("div",{ref:"selectRef",class:u([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),[yt(e.mouseEnterEventName)]:n[16]||(n[16]=y=>e.states.inputHovering=!0),onMouseleave:n[17]||(n[17]=y=>e.states.inputHovering=!1),onClick:n[18]||(n[18]=D((...y)=>e.toggleMenu&&e.toggleMenu(...y),["prevent","stop"]))},[N(g,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:n[15]||(n[15]=y=>e.states.isBeforeHide=!1)},{default:$(()=>{var y;return[E("div",{ref:"wrapperRef",class:u([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(c(),I("div",{key:0,ref:"prefixRef",class:u(e.nsSelect.e("prefix"))},[k(e.$slots,"prefix")],2)):T("v-if",!0),E("div",{ref:"selectionRef",class:u([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?k(e.$slots,"tag",{key:0},()=>[(c(!0),I(el,null,ll(e.showTagList,o=>(c(),I("div",{key:e.getValueKey(o),class:u(e.nsSelect.e("selected-item"))},[N(t,{closable:!e.selectDisabled&&!o.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:Z(e.tagStyle),onClose:M=>e.deleteTag(M,o)},{default:$(()=>[E("span",{class:u(e.nsSelect.e("tags-text"))},[k(e.$slots,"label",{label:o.currentLabel,value:o.value},()=>[tl(F(o.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(c(),L(g,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:$(()=>[E("div",{ref:"collapseItemRef",class:u(e.nsSelect.e("selected-item"))},[N(t,{closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:Z(e.collapseTagStyle)},{default:$(()=>[E("span",{class:u(e.nsSelect.e("tags-text"))}," + "+F(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","style"])],2)]),content:$(()=>[E("div",{ref:"tagMenuRef",class:u(e.nsSelect.e("selection"))},[(c(!0),I(el,null,ll(e.collapseTagList,o=>(c(),I("div",{key:e.getValueKey(o),class:u(e.nsSelect.e("selected-item"))},[N(t,{class:"in-tooltip",closable:!e.selectDisabled&&!o.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",onClose:M=>e.deleteTag(M,o)},{default:$(()=>[E("span",{class:u(e.nsSelect.e("tags-text"))},[k(e.$slots,"label",{label:o.currentLabel,value:o.value},()=>[tl(F(o.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","onClose"])],2))),128))],2)]),_:3},8,["disabled","effect","teleported"])):T("v-if",!0)]):T("v-if",!0),e.selectDisabled?T("v-if",!0):(c(),I("div",{key:1,class:u([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[ae(E("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":n[0]||(n[0]=o=>e.states.inputValue=o),type:"text",name:e.name,class:u([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:Z(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((y=e.hoverOption)==null?void 0:y.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:n[1]||(n[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onBlur:n[2]||(n[2]=(...o)=>e.handleBlur&&e.handleBlur(...o)),onKeydown:[n[3]||(n[3]=oe(D(o=>e.navigateOptions("next"),["stop","prevent"]),["down"])),n[4]||(n[4]=oe(D(o=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),n[5]||(n[5]=oe(D((...o)=>e.handleEsc&&e.handleEsc(...o),["stop","prevent"]),["esc"])),n[6]||(n[6]=oe(D((...o)=>e.selectOption&&e.selectOption(...o),["stop","prevent"]),["enter"])),n[7]||(n[7]=oe(D((...o)=>e.deletePrevTag&&e.deletePrevTag(...o),["stop"]),["delete"]))],onCompositionstart:n[8]||(n[8]=(...o)=>e.handleCompositionStart&&e.handleCompositionStart(...o)),onCompositionupdate:n[9]||(n[9]=(...o)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...o)),onCompositionend:n[10]||(n[10]=(...o)=>e.handleCompositionEnd&&e.handleCompositionEnd(...o)),onInput:n[11]||(n[11]=(...o)=>e.onInput&&e.onInput(...o)),onClick:n[12]||(n[12]=D((...o)=>e.toggleMenu&&e.toggleMenu(...o),["stop"]))},null,46,an),[[ht,e.states.inputValue]]),e.filterable?(c(),I("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:u(e.nsSelect.e("input-calculator")),textContent:F(e.states.inputValue)},null,10,rn)):T("v-if",!0)],2)),e.shouldShowPlaceholder?(c(),I("div",{key:2,class:u([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[e.hasModelValue?k(e.$slots,"label",{key:0,label:e.currentPlaceholder,value:e.modelValue},()=>[E("span",null,F(e.currentPlaceholder),1)]):(c(),I("span",un,F(e.currentPlaceholder),1))],2)):T("v-if",!0)],2),E("div",{ref:"suffixRef",class:u(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(c(),L(r,{key:0,class:u([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:$(()=>[(c(),L(Ie(e.iconComponent)))]),_:1},8,["class"])):T("v-if",!0),e.showClose&&e.clearIcon?(c(),L(r,{key:1,class:u([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:$(()=>[(c(),L(Ie(e.clearIcon)))]),_:1},8,["class","onClick"])):T("v-if",!0),e.validateState&&e.validateIcon?(c(),L(r,{key:2,class:u([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:$(()=>[(c(),L(Ie(e.validateIcon)))]),_:1},8,["class"])):T("v-if",!0)],2)],2)]}),content:$(()=>[N(O,{ref:"menuRef"},{default:$(()=>[e.$slots.header?(c(),I("div",{key:0,class:u(e.nsSelect.be("dropdown","header")),onClick:n[13]||(n[13]=D(()=>{},["stop"]))},[k(e.$slots,"header")],2)):T("v-if",!0),ae(N(C,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:u([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:$(()=>[e.showNewOption?(c(),L(h,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):T("v-if",!0),N(m,null,{default:$(()=>[k(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Te,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(c(),I("div",{key:1,class:u(e.nsSelect.be("dropdown","loading"))},[k(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(c(),I("div",{key:2,class:u(e.nsSelect.be("dropdown","empty"))},[k(e.$slots,"empty",{},()=>[E("span",null,F(e.emptyText),1)])],2)):T("v-if",!0),e.$slots.footer?(c(),I("div",{key:3,class:u(e.nsSelect.be("dropdown","footer")),onClick:n[14]||(n[14]=D(()=>{},["stop"]))},[k(e.$slots,"footer")],2)):T("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow"])],16)),[[f,e.handleClickOutside,e.popperRef]])}var cn=ie(on,[["render",dn],["__file","select.vue"]]);const pn=Q({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const n=x("select"),a=V(null),b=Ee(),i=V([]);ul(ml,ye({...rl(e)}));const p=d(()=>i.value.some(h=>h.visible===!0)),t=h=>{var m,C;return((m=h.type)==null?void 0:m.name)==="ElOption"&&!!((C=h.component)!=null&&C.proxy)},g=h=>{const m=Wt(h),C=[];return m.forEach(O=>{var f,y;t(O)?C.push(O.component.proxy):(f=O.children)!=null&&f.length?C.push(...g(O.children)):(y=O.component)!=null&&y.subTree&&C.push(...g(O.component.subTree))}),C},r=()=>{i.value=g(b.subTree)};return ke(()=>{r()}),Lt(a,r,{attributes:!0,subtree:!0,childList:!0}),{groupRef:a,visible:p,ns:n}}});function fn(e,n,a,b,i,p){return ae((c(),I("ul",{ref:"groupRef",class:u(e.ns.be("group","wrap"))},[E("li",{class:u(e.ns.be("group","title"))},F(e.label),3),E("li",null,[E("ul",{class:u(e.ns.b("group"))},[k(e.$slots,"default")],2)])],2)),[[Te,e.visible]])}var bl=ie(pn,[["render",fn],["__file","option-group.vue"]]);const En=al(cn,{Option:$e,OptionGroup:bl}),Tn=dl($e);dl(bl);export{En as E,Tn as a,qt as b,Vn as c,Pt as d,vl as t};
