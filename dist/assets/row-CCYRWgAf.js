import{r as c}from"./col-DXhSI-bL.js";import{p,d as r,a as f,c as a,A as g,o as m,h as d,i as y,r as w,n as _,e as o,f as v,aq as R,_ as b,w as h}from"./index-C3zMx4JQ.js";const C=["start","center","end","space-around","space-between","space-evenly"],S=["top","middle","bottom"],j=p({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:C,default:"start"},align:{type:String,values:S}}),x=r({name:"ElRow"}),$=r({...x,props:j,setup(n){const t=n,e=f("row"),l=a(()=>t.gutter);g(c,{gutter:l});const i=a(()=>{const s={};return t.gutter&&(s.marginRight=s.marginLeft=`-${t.gutter/2}px`),s}),u=a(()=>[e.b(),e.is(`justify-${t.justify}`,t.justify!=="start"),e.is(`align-${t.align}`,!!t.align)]);return(s,k)=>(m(),d(R(s.tag),{class:_(o(u)),style:v(o(i))},{default:y(()=>[w(s.$slots,"default")]),_:3},8,["class","style"]))}});var E=b($,[["__file","row.vue"]]);const B=h(E);export{B as E};