import{aa as y,bo as C,B as g,a0 as b,bp as h,ac as S,aW as v,ar as w,I as c,bq as i,aV as l,br as f,bs as u,a6 as d,v as I,a as n,j as F,d as p,u as P,e as T,ae as k,o as E,f as N,r as z,m as V,h as $}from"./index-DwAgI1Tl.js";const _=(s="")=>s.split(" ").filter(e=>!!e.trim()),W=(s,e)=>{if(!s||!e)return!1;if(e.includes(" "))throw new Error("className should not contain space.");return s.classList.contains(e)},q=(s,e)=>{!s||!e.trim()||s.classList.add(..._(e))},D=(s,e)=>{!s||!e.trim()||s.classList.remove(..._(e))},G=(s,e)=>{var r;if(!b||!s||!e)return"";let a=h(e);a==="float"&&(a="cssFloat");try{const t=s.style[a];if(t)return t;const o=(r=document.defaultView)==null?void 0:r.getComputedStyle(s,"");return o?o[a]:""}catch{return s.style[a]}};function A(s,e="px"){if(!s)return"";if(y(s)||C(s))return`${s}${e}`;if(g(s))return s}const H=c([String,Object,Function]),J={Close:d},K={Close:d,SuccessFilled:i,InfoFilled:u,WarningFilled:l,CircleCloseFilled:f},Q={success:i,warning:l,error:f,info:u},R={validating:S,success:v,error:w},X=({from:s,replacement:e,scope:r,version:a,ref:t,type:o="API"},m)=>{I(()=>n(m),O=>{},{immediate:!0})};var B=(s,e)=>{const r=s.__vccOpts||s;for(const[a,t]of e)r[a]=t;return r};const L=F({size:{type:c([Number,String])},color:{type:String}}),j=p({name:"ElIcon",inheritAttrs:!1}),x=p({...j,props:L,setup(s){const e=s,r=P("icon"),a=T(()=>{const{size:t,color:o}=e;return!t&&!o?{}:{fontSize:k(t)?void 0:A(t),"--color":o}});return(t,o)=>(E(),N("i",V({class:n(r).b(),style:n(a)},t.$attrs),[z(t.$slots,"default")],16))}});var M=B(x,[["__file","icon.vue"]]);const Y=$(M);export{J as C,Y as E,Q as T,R as V,B as _,q as a,A as b,K as c,G as g,W as h,H as i,D as r,X as u};
