import{p as h,M as o,N as u,d,s as N,c,a as _,ap as f,Q as $,o as g,h as x,i as C,r as j,n as v,e as p,f as O,aq as E,_ as w,w as S}from"./index-Burj71Mz.js";const K=Symbol("rowContextKey"),k=h({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:o([Number,Object]),default:()=>u({})},sm:{type:o([Number,Object]),default:()=>u({})},md:{type:o([Number,Object]),default:()=>u({})},lg:{type:o([Number,Object]),default:()=>u({})},xl:{type:o([Number,Object]),default:()=>u({})}}),B=d({name:"ElCol"}),P=d({...B,props:k,setup(m){const t=m,{gutter:n}=N(K,{gutter:c(()=>0)}),a=_("col"),b=c(()=>{const e={};return n.value&&(e.paddingLeft=e.paddingRight=`${n.value/2}px`),e}),i=c(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const l=t[s];f(l)&&(s==="span"?e.push(a.b(`${t[s]}`)):l>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{f(t[s])?e.push(a.b(`${s}-${t[s]}`)):$(t[s])&&Object.entries(t[s]).forEach(([l,r])=>{e.push(l!=="span"?a.b(`${s}-${l}-${r}`):a.b(`${s}-${r}`))})}),n.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,y)=>(g(),x(E(e.tag),{class:v(p(i)),style:O(p(b))},{default:C(()=>[j(e.$slots,"default")]),_:3},8,["class","style"]))}});var q=w(P,[["__file","col.vue"]]);const L=S(q);export{L as E,K as r};