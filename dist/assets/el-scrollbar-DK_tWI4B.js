import{_ as A,d as N,b as D,u as Z}from"./index-CZ7niqPb.js";import{j as W,d as P,k as q,a as F,l as c,c as T,y as Q,M as K,o as R,h as M,i as I,B as ee,O,n as L,e as b,f as x,C as te,T as ae,Z as le,b as G,R as U,F as se,H as oe,a8 as C,t as X,L as Y,v as re,s as ne,x as ie,ad as ce,r as ue,a9 as ve,a3 as fe,J as me,w as de}from"./index-C4ZHMdsf.js";import{t as pe,u as he}from"./use-form-item-D6oge9Wn.js";const H=4,be={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},ye=({move:y,size:u,bar:o})=>({[o.size]:u,transform:`translate${o.axis}(${y}%)`}),$=Symbol("scrollbarContextKey"),ge=W({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Se="Thumb",we=P({__name:"thumb",props:ge,setup(y){const u=y,o=q($),l=F("scrollbar");o||pe(Se,"can not inject scrollbar context");const r=c(),v=c(),d=c({}),p=c(!1);let a=!1,h=!1,g=le?document.onselectstart:null;const t=T(()=>be[u.vertical?"vertical":"horizontal"]),s=T(()=>ye({size:u.size,move:u.move,bar:t.value})),f=T(()=>r.value[t.value.offset]**2/o.wrapElement[t.value.scrollSize]/u.ratio/v.value[t.value.offset]),m=i=>{var w;if(i.stopPropagation(),i.ctrlKey||[1,2].includes(i.button))return;(w=window.getSelection())==null||w.removeAllRanges(),_(i);const E=i.currentTarget;E&&(d.value[t.value.axis]=E[t.value.offset]-(i[t.value.client]-E.getBoundingClientRect()[t.value.direction]))},z=i=>{if(!v.value||!r.value||!o.wrapElement)return;const w=Math.abs(i.target.getBoundingClientRect()[t.value.direction]-i[t.value.client]),E=v.value[t.value.offset]/2,B=(w-E)*100*f.value/r.value[t.value.offset];o.wrapElement[t.value.scroll]=B*o.wrapElement[t.value.scrollSize]/100},_=i=>{i.stopImmediatePropagation(),a=!0,document.addEventListener("mousemove",S),document.addEventListener("mouseup",n),g=document.onselectstart,document.onselectstart=()=>!1},S=i=>{if(!r.value||!v.value||a===!1)return;const w=d.value[t.value.axis];if(!w)return;const E=(r.value.getBoundingClientRect()[t.value.direction]-i[t.value.client])*-1,B=v.value[t.value.offset]-w,J=(E-B)*100*f.value/r.value[t.value.offset];o.wrapElement[t.value.scroll]=J*o.wrapElement[t.value.scrollSize]/100},n=()=>{a=!1,d.value[t.value.axis]=0,document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",n),j(),h&&(p.value=!1)},e=()=>{h=!1,p.value=!!u.size},k=()=>{h=!0,p.value=a};Q(()=>{j(),document.removeEventListener("mouseup",n)});const j=()=>{document.onselectstart!==g&&(document.onselectstart=g)};return N(K(o,"scrollbarElement"),"mousemove",e),N(K(o,"scrollbarElement"),"mouseleave",k),(i,w)=>(R(),M(ae,{name:b(l).b("fade"),persisted:""},{default:I(()=>[ee(O("div",{ref_key:"instance",ref:r,class:L([b(l).e("bar"),b(l).is(b(t).key)]),onMousedown:z},[O("div",{ref_key:"thumb",ref:v,class:L(b(l).e("thumb")),style:x(b(s)),onMousedown:m},null,38)],34),[[te,i.always||p.value]])]),_:1},8,["name"]))}});var V=A(we,[["__file","thumb.vue"]]);const ze=W({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),_e=P({__name:"bar",props:ze,setup(y,{expose:u}){const o=y,l=q($),r=c(0),v=c(0),d=c(""),p=c(""),a=c(1),h=c(1);return u({handleScroll:s=>{if(s){const f=s.offsetHeight-H,m=s.offsetWidth-H;v.value=s.scrollTop*100/f*a.value,r.value=s.scrollLeft*100/m*h.value}},update:()=>{const s=l==null?void 0:l.wrapElement;if(!s)return;const f=s.offsetHeight-H,m=s.offsetWidth-H,z=f**2/s.scrollHeight,_=m**2/s.scrollWidth,S=Math.max(z,o.minSize),n=Math.max(_,o.minSize);a.value=z/(f-z)/(S/(f-S)),h.value=_/(m-_)/(n/(m-n)),p.value=S+H<f?`${S}px`:"",d.value=n+H<m?`${n}px`:""}}),(s,f)=>(R(),G(se,null,[U(V,{move:r.value,ratio:h.value,size:d.value,always:s.always},null,8,["move","ratio","size","always"]),U(V,{move:v.value,ratio:a.value,size:p.value,vertical:"",always:s.always},null,8,["move","ratio","size","always"])],64))}});var Ee=A(_e,[["__file","bar.vue"]]);const He=W({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:oe([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,...he(["ariaLabel","ariaOrientation"])}),Te={scroll:({scrollTop:y,scrollLeft:u})=>[y,u].every(C)},ke="ElScrollbar",Ce=P({name:ke}),Re=P({...Ce,props:He,emits:Te,setup(y,{expose:u,emit:o}){const l=y,r=F("scrollbar");let v,d;const p=c(),a=c(),h=c(),g=c(),t=T(()=>{const e={};return l.height&&(e.height=D(l.height)),l.maxHeight&&(e.maxHeight=D(l.maxHeight)),[l.wrapStyle,e]}),s=T(()=>[l.wrapClass,r.e("wrap"),{[r.em("wrap","hidden-default")]:!l.native}]),f=T(()=>[r.e("view"),l.viewClass]),m=()=>{var e;a.value&&((e=g.value)==null||e.handleScroll(a.value),o("scroll",{scrollTop:a.value.scrollTop,scrollLeft:a.value.scrollLeft}))};function z(e,k){me(e)?a.value.scrollTo(e):C(e)&&C(k)&&a.value.scrollTo(e,k)}const _=e=>{C(e)&&(a.value.scrollTop=e)},S=e=>{C(e)&&(a.value.scrollLeft=e)},n=()=>{var e;(e=g.value)==null||e.update()};return X(()=>l.noresize,e=>{e?(v==null||v(),d==null||d()):({stop:v}=Z(h,n),d=N("resize",n))},{immediate:!0}),X(()=>[l.maxHeight,l.height],()=>{l.native||Y(()=>{var e;n(),a.value&&((e=g.value)==null||e.handleScroll(a.value))})}),re($,ne({scrollbarElement:p,wrapElement:a})),ie(()=>{l.native||Y(()=>{n()})}),ce(()=>n()),u({wrapRef:a,update:n,scrollTo:z,setScrollTop:_,setScrollLeft:S,handleScroll:m}),(e,k)=>(R(),G("div",{ref_key:"scrollbarRef",ref:p,class:L(b(r).b())},[O("div",{ref_key:"wrapRef",ref:a,class:L(b(s)),style:x(b(t)),onScroll:m},[(R(),M(ve(e.tag),{id:e.id,ref_key:"resizeRef",ref:h,class:L(b(f)),style:x(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:I(()=>[ue(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?fe("v-if",!0):(R(),M(Ee,{key:0,ref_key:"barRef",ref:g,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}});var Le=A(Re,[["__file","scrollbar.vue"]]);const Me=de(Le);export{Me as E};
