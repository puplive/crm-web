import{bd as b,be as w,bf as F,bg as h,bh as S,bi as P,bj as N,bk as A,bl as R,bm as $,e as l,E,bn as k,a as d,k as i,j as K,l as f,bo as L,y as D,v as H,N as M,b5 as U}from"./index-ejxKPGwJ.js";function B(n){return n}function C(n,e,r){switch(r.length){case 0:return n.call(e);case 1:return n.call(e,r[0]);case 2:return n.call(e,r[0],r[1]);case 3:return n.call(e,r[0],r[1],r[2])}return n.apply(e,r)}var G=800,q=16,J=Date.now;function W(n){var e=0,r=0;return function(){var a=J(),t=q-(a-r);if(r=a,t>0){if(++e>=G)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function X(n){return function(){return n}}var Y=b?function(n,e){return b(n,"toString",{configurable:!0,enumerable:!1,value:X(e),writable:!0})}:B,j=W(Y),p=Math.max;function Q(n,e,r){return e=p(e===void 0?n.length-1:e,0),function(){for(var a=arguments,t=-1,s=p(a.length-e,0),o=Array(s);++t<s;)o[t]=a[e+t];t=-1;for(var u=Array(e+1);++t<e;)u[t]=a[t];return u[e]=r(o),C(n,this,u)}}var V=9007199254740991;function Z(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=V}var nn="[object Arguments]";function g(n){return w(n)&&F(n)==nn}var O=Object.prototype,en=O.hasOwnProperty,rn=O.propertyIsEnumerable,z=g(function(){return arguments}())?g:function(n){return w(n)&&en.call(n,"callee")&&!rn.call(n,"callee")};function tn(n,e){for(var r=-1,a=e.length,t=n.length;++r<a;)n[t+r]=e[r];return n}var I=h?h.isConcatSpreadable:void 0;function an(n){return S(n)||z(n)||!!(I&&n&&n[I])}function T(n,e,r,a,t){var s=-1,o=n.length;for(r||(r=an),t||(t=[]);++s<o;){var u=n[s];e>0&&r(u)?e>1?T(u,e-1,r,a,t):tn(t,u):a||(t[t.length]=u)}return t}function sn(n){var e=n==null?0:n.length;return e?T(n,1):[]}function on(n){return j(Q(n,void 0,sn),n+"")}function un(n,e){return n!=null&&e in Object(n)}function ln(n,e,r){e=P(e,n);for(var a=-1,t=e.length,s=!1;++a<t;){var o=N(e[a]);if(!(s=n!=null&&r(n,o)))break;n=n[o]}return s||++a!=t?s:(t=n==null?0:n.length,!!t&&Z(t)&&A(o,t)&&(S(n)||z(n)))}function cn(n,e){return n!=null&&ln(n,e,un)}function fn(n,e,r){for(var a=-1,t=e.length,s={};++a<t;){var o=e[a],u=R(n,o);r(u,o)&&$(s,P(o,n),u)}return s}function dn(n,e){return fn(n,e,function(r,a){return cn(n,a)})}var vn=on(function(n,e){return n==null?{}:dn(n,e)});class mn extends Error{constructor(e){super(e),this.name="ElementPlusError"}}function yn(n,e){throw new mn(`[${n}] ${e}`)}function wn(n,e){}const _=n=>{const e=E();return l(()=>{var r,a;return(a=(r=e==null?void 0:e.proxy)==null?void 0:r.$props)==null?void 0:a[n]})},y={prefix:Math.floor(Math.random()*1e4),current:0},bn=Symbol("elIdInjection"),hn=()=>E()?i(bn,y):y,pn=n=>{const e=hn(),r=k();return l(()=>d(n)||`${r.value}-id-${e.prefix}-${e.current++}`)},gn=K({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),Sn=n=>vn(gn,n),v=Symbol("formContextKey"),x=Symbol("formItemContextKey"),Pn=(n,e={})=>{const r=f(void 0),a=e.prop?r:_("size"),t=e.global?r:L(),s=e.form?{size:void 0}:i(v,void 0),o=e.formItem?{size:void 0}:i(x,void 0);return l(()=>a.value||d(n)||(o==null?void 0:o.size)||(s==null?void 0:s.size)||t.value||"")},En=n=>{const e=_("disabled"),r=i(v,void 0);return l(()=>e.value||d(n)||(r==null?void 0:r.disabled)||!1)},On=()=>{const n=i(v,void 0),e=i(x,void 0);return{form:n,formItem:e}},zn=(n,{formItemContext:e,disableIdGeneration:r,disableIdManagement:a})=>{r||(r=f(!1)),a||(a=f(!1));const t=f();let s;const o=l(()=>{var u;return!!(!(n.label||n.ariaLabel)&&e&&e.inputIds&&((u=e.inputIds)==null?void 0:u.length)<=1)});return D(()=>{s=H([M(n,"id"),r],([u,m])=>{const c=u??(m?void 0:pn().value);c!==t.value&&(e!=null&&e.removeInputId&&(t.value&&e.removeInputId(t.value),!(a!=null&&a.value)&&!m&&c&&e.addInputId(c)),t.value=c)},{immediate:!0})}),U(()=>{s&&s(),e!=null&&e.removeInputId&&t.value&&e.removeInputId(t.value)}),{isLabeledByFormItem:o,inputId:t}};export{On as a,Pn as b,En as c,zn as d,wn as e,T as f,pn as g,sn as h,hn as i,x as j,Z as k,z as l,tn as m,v as n,cn as o,vn as p,B as q,Q as r,j as s,yn as t,Sn as u};