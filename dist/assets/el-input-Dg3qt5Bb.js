import{bM as v,bE as f,aH as F,bu as Y,bl as Z,bv as J,bk as X,bt as A,bN as ee,br as te,bi as G,bO as _,bP as y,bL as re,bQ as b}from"./index-Q273XHf8.js";import{l as V,i as ae,c as ne}from"./constants-D7u2-Egf.js";var T=v(f,"WeakMap"),O=Object.create,oe=function(){function e(){}return function(r){if(!F(r))return{};if(O)return O(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();function jt(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}function mt(e,r,t,a){var i=!t;t||(t={});for(var s=-1,u=r.length;++s<u;){var c=r[s],p=void 0;p===void 0&&(p=e[c]),i?Y(t,c,p):Z(t,c,p)}return t}function N(e){return e!=null&&V(e.length)&&!J(e)}var se=Object.prototype;function x(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||se;return e===t}function ie(e,r){for(var t=-1,a=Array(e);++t<e;)a[t]=r(t);return a}function ue(){return!1}var R=typeof exports=="object"&&exports&&!exports.nodeType&&exports,P=R&&typeof module=="object"&&module&&!module.nodeType&&module,ce=P&&P.exports===R,S=ce?f.Buffer:void 0,fe=S?S.isBuffer:void 0,pe=fe||ue,le="[object Arguments]",be="[object Array]",ge="[object Boolean]",de="[object Date]",ye="[object Error]",ve="[object Function]",he="[object Map]",Te="[object Number]",je="[object Object]",me="[object RegExp]",we="[object Set]",Ae="[object String]",_e="[object WeakMap]",xe="[object ArrayBuffer]",Oe="[object DataView]",Pe="[object Float32Array]",Se="[object Float64Array]",$e="[object Int8Array]",Ce="[object Int16Array]",Ie="[object Int32Array]",Me="[object Uint8Array]",Ee="[object Uint8ClampedArray]",Be="[object Uint16Array]",Ue="[object Uint32Array]",n={};n[Pe]=n[Se]=n[$e]=n[Ce]=n[Ie]=n[Me]=n[Ee]=n[Be]=n[Ue]=!0;n[le]=n[be]=n[xe]=n[ge]=n[Oe]=n[de]=n[ye]=n[ve]=n[he]=n[Te]=n[je]=n[me]=n[we]=n[Ae]=n[_e]=!1;function ze(e){return X(e)&&V(e.length)&&!!n[A(e)]}function Le(e){return function(r){return e(r)}}var W=typeof exports=="object"&&exports&&!exports.nodeType&&exports,g=W&&typeof module=="object"&&module&&!module.nodeType&&module,ke=g&&g.exports===W,h=ke&&ee.process,$=function(){try{var e=g&&g.require&&g.require("util").types;return e||h&&h.binding&&h.binding("util")}catch{}}(),C=$&&$.isTypedArray,Ke=C?Le(C):ze,De=Object.prototype,Fe=De.hasOwnProperty;function q(e,r){var t=G(e),a=!t&&ae(e),i=!t&&!a&&pe(e),s=!t&&!a&&!i&&Ke(e),u=t||a||i||s,c=u?ie(e.length,String):[],p=c.length;for(var o in e)(r||Fe.call(e,o))&&!(u&&(o=="length"||i&&(o=="offset"||o=="parent")||s&&(o=="buffer"||o=="byteLength"||o=="byteOffset")||te(o,p)))&&c.push(o);return c}function H(e,r){return function(t){return e(r(t))}}var Ge=H(Object.keys,Object),Ve=Object.prototype,Ne=Ve.hasOwnProperty;function Re(e){if(!x(e))return Ge(e);var r=[];for(var t in Object(e))Ne.call(e,t)&&t!="constructor"&&r.push(t);return r}function We(e){return N(e)?q(e):Re(e)}function qe(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var He=Object.prototype,Qe=He.hasOwnProperty;function Ye(e){if(!F(e))return qe(e);var r=x(e),t=[];for(var a in e)a=="constructor"&&(r||!Qe.call(e,a))||t.push(a);return t}function wt(e){return N(e)?q(e,!0):Ye(e)}var Ze=H(Object.getPrototypeOf,Object);function Je(){this.__data__=new _,this.size=0}function Xe(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function et(e){return this.__data__.get(e)}function tt(e){return this.__data__.has(e)}var rt=200;function at(e,r){var t=this.__data__;if(t instanceof _){var a=t.__data__;if(!y||a.length<rt-1)return a.push([e,r]),this.size=++t.size,this;t=this.__data__=new re(a)}return t.set(e,r),this.size=t.size,this}function d(e){var r=this.__data__=new _(e);this.size=r.size}d.prototype.clear=Je;d.prototype.delete=Xe;d.prototype.get=et;d.prototype.has=tt;d.prototype.set=at;var Q=typeof exports=="object"&&exports&&!exports.nodeType&&exports,I=Q&&typeof module=="object"&&module&&!module.nodeType&&module,nt=I&&I.exports===Q,M=nt?f.Buffer:void 0,E=M?M.allocUnsafe:void 0;function At(e,r){if(r)return e.slice();var t=e.length,a=E?E(t):new e.constructor(t);return e.copy(a),a}function ot(e,r){for(var t=-1,a=e==null?0:e.length,i=0,s=[];++t<a;){var u=e[t];r(u,t,e)&&(s[i++]=u)}return s}function st(){return[]}var it=Object.prototype,ut=it.propertyIsEnumerable,B=Object.getOwnPropertySymbols,ct=B?function(e){return e==null?[]:(e=Object(e),ot(B(e),function(r){return ut.call(e,r)}))}:st;function ft(e,r,t){var a=r(e);return G(e)?a:ne(a,t(e))}function _t(e){return ft(e,We,ct)}var j=v(f,"DataView"),m=v(f,"Promise"),w=v(f,"Set"),U="[object Map]",pt="[object Object]",z="[object Promise]",L="[object Set]",k="[object WeakMap]",K="[object DataView]",lt=b(j),bt=b(y),gt=b(m),dt=b(w),yt=b(T),l=A;(j&&l(new j(new ArrayBuffer(1)))!=K||y&&l(new y)!=U||m&&l(m.resolve())!=z||w&&l(new w)!=L||T&&l(new T)!=k)&&(l=function(e){var r=A(e),t=r==pt?e.constructor:void 0,a=t?b(t):"";if(a)switch(a){case lt:return K;case bt:return U;case gt:return z;case dt:return L;case yt:return k}return r});var D=f.Uint8Array;function vt(e){var r=new e.constructor(e.byteLength);return new D(r).set(new D(e)),r}function xt(e,r){var t=r?vt(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}function Ot(e){return typeof e.constructor=="function"&&!x(e)?oe(Ze(e)):{}}export{w as S,D as U,wt as a,Ze as b,mt as c,ft as d,vt as e,xt as f,ct as g,l as h,Le as i,jt as j,We as k,pe as l,At as m,$ as n,Ot as o,d as p,_t as q,N as r,st as s,Ke as t};
