import{v as F,k as G}from"./el-button-faPFsBYy.js";import{b as v}from"./isEqual-BH6r-STX.js";import{by as N,aP as y,bz as M,bA as C,ay as W,bB as $,bg as B,bC as U}from"./index-C7BJXNGv.js";import{I as w,G as K}from"./index-C9cl6geq.js";var q=/\s/;function z(n){for(var r=n.length;r--&&q.test(n.charAt(r)););return r}var H=/^\s+/;function X(n){return n&&n.slice(0,z(n)+1).replace(H,"")}var O=NaN,J=/^[-+]0x[0-9a-f]+$/i,Q=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,Z=parseInt;function R(n){if(typeof n=="number")return n;if(N(n))return O;if(y(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=y(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=X(n);var e=Q.test(n);return e||Y.test(n)?Z(n.slice(2),e?2:8):J.test(n)?O:+n}var V=1,j=2;function nn(n,r,e,i){var a=e.length,d=a;if(n==null)return!d;for(n=Object(n);a--;){var f=e[a];if(f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++a<d;){f=e[a];var u=f[0],s=n[u],m=f[1];if(f[2]){if(s===void 0&&!(u in n))return!1}else{var g=new F,o;if(!(o===void 0?v(m,s,V|j,i,g):o))return!1}}return!0}function P(n){return n===n&&!y(n)}function rn(n){for(var r=G(n),e=r.length;e--;){var i=r[e],a=n[i];r[e]=[i,a,P(a)]}return r}function L(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function en(n){var r=rn(n);return r.length==1&&r[0][2]?L(r[0][0],r[0][1]):function(e){return e===n||nn(e,n,r)}}var tn=1,fn=2;function un(n,r){return M(n)&&P(r)?L(C(n),r):function(e){var i=W(e,n);return i===void 0&&i===r?w(e,n):v(r,i,tn|fn)}}function an(n){return function(r){return r==null?void 0:r[n]}}function sn(n){return function(r){return $(r,n)}}function on(n){return M(n)?an(C(n)):sn(n)}function In(n){return typeof n=="function"?n:n==null?K:typeof n=="object"?B(n)?un(n[0],n[1]):en(n):on(n)}var p=function(){return U.Date.now()},cn="Expected a function",dn=Math.max,mn=Math.min;function An(n,r,e){var i,a,d,f,u,s,m=0,g=!1,o=!1,I=!0;if(typeof n!="function")throw new TypeError(cn);r=R(r)||0,y(e)&&(g=!!e.leading,o="maxWait"in e,d=o?dn(R(e.maxWait)||0,r):d,I="trailing"in e?!!e.trailing:I);function A(t){var c=i,l=a;return i=a=void 0,m=t,f=n.apply(l,c),f}function _(t){return m=t,u=setTimeout(h,r),g?A(t):f}function S(t){var c=t-s,l=t-m,x=r-c;return o?mn(x,d-l):x}function E(t){var c=t-s,l=t-m;return s===void 0||c>=r||c<0||o&&l>=d}function h(){var t=p();if(E(t))return T(t);u=setTimeout(h,S(t))}function T(t){return u=void 0,I&&i?A(t):(i=a=void 0,f)}function k(){u!==void 0&&clearTimeout(u),m=0,i=s=a=u=void 0}function D(){return u===void 0?f:T(p())}function b(){var t=p(),c=E(t);if(i=arguments,a=this,s=t,c){if(u===void 0)return _(s);if(o)return clearTimeout(u),u=setTimeout(h,r),A(s)}return u===void 0&&(u=setTimeout(h,r)),f}return b.cancel=k,b.flush=D,b}export{In as b,An as d};
