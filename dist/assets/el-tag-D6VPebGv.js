import{p as F,k as N}from"./_initCloneObject-l7c9p7aB.js";import{b as M}from"./isEqual-zCtjQBmP.js";import{bY as W,aH as h,bZ as v,b9 as _,b_ as G,bb as $,b7 as B,bO as U}from"./index-DwAgI1Tl.js";import{o as q,q as w}from"./el-button-GUz3KSyk.js";var H=/\s/;function K(n){for(var r=n.length;r--&&H.test(n.charAt(r)););return r}var X=/^\s+/;function Y(n){return n&&n.slice(0,K(n)+1).replace(X,"")}var O=NaN,Z=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,J=/^0o[0-7]+$/i,Q=parseInt;function R(n){if(typeof n=="number")return n;if(W(n))return O;if(h(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=h(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Y(n);var e=z.test(n);return e||J.test(n)?Q(n.slice(2),e?2:8):Z.test(n)?O:+n}var V=1,j=2;function nn(n,r,e,i){var a=e.length,d=a;if(n==null)return!d;for(n=Object(n);a--;){var f=e[a];if(f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++a<d;){f=e[a];var u=f[0],s=n[u],m=f[1];if(f[2]){if(s===void 0&&!(u in n))return!1}else{var g=new F,o;if(!(o===void 0?M(m,s,V|j,i,g):o))return!1}}return!0}function C(n){return n===n&&!h(n)}function rn(n){for(var r=N(n),e=r.length;e--;){var i=r[e],a=n[i];r[e]=[i,a,C(a)]}return r}function L(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function en(n){var r=rn(n);return r.length==1&&r[0][2]?L(r[0][0],r[0][1]):function(e){return e===n||nn(e,n,r)}}var tn=1,fn=2;function un(n,r){return v(n)&&C(r)?L(_(n),r):function(e){var i=G(e,n);return i===void 0&&i===r?q(e,n):M(r,i,tn|fn)}}function an(n){return function(r){return r==null?void 0:r[n]}}function sn(n){return function(r){return $(r,n)}}function on(n){return v(n)?an(_(n)):sn(n)}function pn(n){return typeof n=="function"?n:n==null?w:typeof n=="object"?B(n)?un(n[0],n[1]):en(n):on(n)}var A=function(){return U.Date.now()},cn="Expected a function",dn=Math.max,mn=Math.min;function In(n,r,e){var i,a,d,f,u,s,m=0,g=!1,o=!1,p=!0;if(typeof n!="function")throw new TypeError(cn);r=R(r)||0,h(e)&&(g=!!e.leading,o="maxWait"in e,d=o?dn(R(e.maxWait)||0,r):d,p="trailing"in e?!!e.trailing:p);function I(t){var c=i,l=a;return i=a=void 0,m=t,f=n.apply(l,c),f}function P(t){return m=t,u=setTimeout(b,r),g?I(t):f}function S(t){var c=t-s,l=t-m,x=r-c;return o?mn(x,d-l):x}function E(t){var c=t-s,l=t-m;return s===void 0||c>=r||c<0||o&&l>=d}function b(){var t=A();if(E(t))return T(t);u=setTimeout(b,S(t))}function T(t){return u=void 0,p&&i?I(t):(i=a=void 0,f)}function k(){u!==void 0&&clearTimeout(u),m=0,i=s=a=u=void 0}function D(){return u===void 0?f:T(A())}function y(){var t=A(),c=E(t);if(i=arguments,a=this,s=t,c){if(u===void 0)return P(s);if(o)return clearTimeout(u),u=setTimeout(b,r),I(s)}return u===void 0&&(u=setTimeout(b,r)),f}return y.cancel=k,y.flush=D,y}export{pn as b,In as d};
