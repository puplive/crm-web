import{g as a}from"./index-BdsNbp0F.js";import{a0 as n}from"./index-ejxKPGwJ.js";const p=(e,o)=>{if(!n)return!1;const t={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(o)],l=a(e,t);return["scroll","auto","overlay"].some(r=>l.includes(r))},m=(e,o)=>{if(!n)return;let t=e;for(;t;){if([window,document,document.documentElement].includes(t))return window;if(p(t,o))return t;t=t.parentNode}return t};let i;const v=e=>{var o;if(!n)return 0;if(i!==void 0)return i;const t=document.createElement("div");t.className=`${e}-scrollbar__wrap`,t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const l=t.offsetWidth;t.style.overflow="scroll";const r=document.createElement("div");r.style.width="100%",t.appendChild(r);const s=r.offsetWidth;return(o=t.parentNode)==null||o.removeChild(t),i=l-s,i};function y(e,o){if(!n)return;if(!o){e.scrollTop=0;return}const t=[];let l=o.offsetParent;for(;l!==null&&e!==l&&e.contains(l);)t.push(l),l=l.offsetParent;const r=o.offsetTop+t.reduce((d,u)=>d+u.offsetTop,0),s=r+o.offsetHeight,f=e.scrollTop,c=f+e.clientHeight;r<f?e.scrollTop=r:s>c&&(e.scrollTop=s-e.clientHeight)}export{v as a,m as g,y as s};