import{aA as S,b3 as N}from"./index-DSfyh7qj.js";var o=(E=>(E[E.TEXT=1]="TEXT",E[E.CLASS=2]="CLASS",E[E.STYLE=4]="STYLE",E[E.PROPS=8]="PROPS",E[E.FULL_PROPS=16]="FULL_PROPS",E[E.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",E[E.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",E[E.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",E[E.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",E[E.NEED_PATCH=512]="NEED_PATCH",E[E.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",E[E.HOISTED=-1]="HOISTED",E[E.BAIL=-2]="BAIL",E))(o||{});const e=E=>{const _=S(E)?E:[E],A=[];return _.forEach(T=>{var r;S(T)?A.push(...e(T)):N(T)&&S(T.children)?A.push(...e(T.children)):(A.push(T),N(T)&&((r=T.component)!=null&&r.subTree)&&A.push(...e(T.component.subTree)))}),A};export{o as P,e as f};