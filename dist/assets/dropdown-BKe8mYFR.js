import{_ as I,d as T,r as O,t as E,A as _,s as S,B as b,e as f,C as L,p as m,M as t,q as $,E as o}from"./index-mj6nX6cW.js";import{a as M,u as C}from"./popper-B6FPKx2r.js";const h=T({inheritAttrs:!1});function w(n,l,a,s,i,d){return O(n.$slots,"default")}var A=I(h,[["render",w],["__file","collection.vue"]]);const B=T({name:"ElCollectionItem",inheritAttrs:!1});function P(n,l,a,s,i,d){return O(n.$slots,"default")}var v=I(B,[["render",P],["__file","collection-item.vue"]]);const K="data-el-collection-item",x=n=>{const l=`El${n}Collection`,a=`${l}Item`,s=Symbol(l),i=Symbol(a),d={...A,name:l,setup(){const u=E(null),c=new Map;_(s,{itemMap:c,getItems:()=>{const r=f(u);if(!r)return[];const e=Array.from(r.querySelectorAll(`[${K}]`));return[...c.values()].sort((N,g)=>e.indexOf(N.ref)-e.indexOf(g.ref))},collectionRef:u})}},y={...v,name:a,setup(u,{attrs:c}){const p=E(null),r=S(s,void 0);_(i,{collectionItemRef:p}),b(()=>{const e=f(p);e&&r.itemMap.set(e,{ref:e,...c})}),L(()=>{const e=f(p);r.itemMap.delete(e)})}};return{COLLECTION_INJECTION_KEY:s,COLLECTION_ITEM_INJECTION_KEY:i,ElCollection:d,ElCollectionItem:y}},D=m({trigger:M.trigger,effect:{...C.effect,default:"light"},type:{type:t(String)},placement:{type:t(String),default:"bottom"},popperOptions:{type:t(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:t([Number,String]),default:0},maxHeight:{type:t([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:t(Object)},teleported:C.teleported}),q=m({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:$}}),U=m({onKeydown:{type:t(Function)}}),Y=[o.down,o.pageDown,o.home],j=[o.up,o.pageUp,o.end],V=[...Y,...j],{ElCollection:k,ElCollectionItem:z,COLLECTION_INJECTION_KEY:G,COLLECTION_ITEM_INJECTION_KEY:H}=x("Dropdown");export{H as C,k as E,V as F,j as L,q as a,K as b,x as c,D as d,z as e,U as f,G as g};
