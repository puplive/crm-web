import{r as c}from"./el-col-2WUFzs03.js";import{j as p,d as r,a as f,c as a,v as m,o as g,h as d,i as y,r as w,n as _,e as o,f as v,aa as R,w as b}from"./index-BCumuH2l.js";import{_ as h}from"./index-BNMC9-9K.js";const j=["start","center","end","space-around","space-between","space-evenly"],C=["top","middle","bottom"],S=p({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:j,default:"start"},align:{type:String,values:C}}),x=r({name:"ElRow"}),$=r({...x,props:S,setup(n){const t=n,e=f("row"),l=a(()=>t.gutter);m(c,{gutter:l});const i=a(()=>{const s={};return t.gutter&&(s.marginRight=s.marginLeft=`-${t.gutter/2}px`),s}),u=a(()=>[e.b(),e.is(`justify-${t.justify}`,t.justify!=="start"),e.is(`align-${t.align}`,!!t.align)]);return(s,k)=>(g(),d(R(s.tag),{class:_(o(u)),style:v(o(i))},{default:y(()=>[w(s.$slots,"default")]),_:3},8,["class","style"]))}});var E=h($,[["__file","row.vue"]]);const N=b(E);export{N as E};
