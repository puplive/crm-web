import{ag as ke,y as Ne,Q as qe,c2 as Fe,_ as we,d as pe,a as le,s as ne,D as Ke,r as Ae,A as se,t as _,k as ye,j as Pe,G as Ve,ar as je,z as q,U as xe,ct as Ue,W as Q,H as ve,I as Ce,o as D,b as P,X as L,h as T,i as w,aq as Re,n as U,an as G,ak as O,$ as k,f as He,J as re,a1 as fe,K as Be,aU as We,F as Ye,ad as Se,B as Ge,av as Je,b4 as Qe,E as J,q as Xe,ah as Ze,c as et,Z as ue,cu as tt,cv as ie,a7 as z,cg as oe,Y as j,e as Ie,a2 as nt,a3 as ot}from"./index-DaHF5CI3.js";import{E as at}from"./dialog-DvtX98X1.js";/* empty css                */import{a as dt,E as rt}from"./form-item-CT_6XElj.js";/* empty css              */import"./tag-QvaMJfZx.js";import{s as st,E as lt,a as it}from"./select-C09q8BZP.js";import"./scrollbar-BuEwUKLL.js";import"./popper-pDHqxWk6.js";import{E as ct}from"./cascader-panel-CtXitbnN.js";import{E as $e,a as ut}from"./checkbox-C8tGE7il.js";import"./radio--5V3VRkV.js";import{E as ht,a as ft,_ as pt}from"./sx-DGMQ8WAX.js";import{E as gt,a as mt}from"./table-column-W2fMcHS6.js";/* empty css                *//* empty css                       */import{E as yt}from"./link-BAYMf-bD.js";import{E as kt}from"./button-BUlIXzJu.js";import{_ as _e}from"./rules-F8IXRWD9.js";/* empty css                    *//* empty css                */import{E as ae}from"./index-2nnq0Wb1.js";import{_ as Nt}from"./index-BKnB42MR.js";import{h as vt}from"./use-form-item-Bpj_Kb5H.js";import{E as Ct}from"./index-D_s_huDF.js";import{_ as bt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BQ82Ig0h.js";import"./scroll-9v__LMn0.js";import"./vnode-A2gNds-9.js";import"./focus-trap-CPGdDEKT.js";import"./refs-DB779E0F.js";import"./event-BB_Ol6Sd.js";import"./castArray-CTNi390K.js";import"./_baseClone-CZDBlznn.js";import"./_initCloneObject-BoF03sb_.js";import"./isEqual-6psxVT9z.js";import"./aria-KgdLjl5h.js";import"./arrays-6TrVLtTe.js";import"./cloneDeep-CMwJkTS9.js";import"./dropdown-DSWenOjV.js";import"./validator-sO4KaDoS.js";const te="$treeNodeId",Te=function(t,e){!e||e[te]||Object.defineProperty(e,te,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},De=function(t,e){return t?e[t]:e[te]},be=(t,e,n)=>{const o=t.value.currentNode;n();const a=t.value.currentNode;o!==a&&e("current-change",a?a.data:null,a)},Ee=t=>{let e=!0,n=!0,o=!0;for(let a=0,d=t.length;a<d;a++){const r=t[a];(r.checked!==!0||r.indeterminate)&&(e=!1,r.disabled||(o=!1)),(r.checked!==!1||r.indeterminate)&&(n=!1)}return{all:e,none:n,allWithoutDisable:o,half:!e&&!n}},de=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:n,half:o}=Ee(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):o?(t.checked=!1,t.indeterminate=!0):n&&(t.checked=!1,t.indeterminate=!1);const a=t.parent;!a||a.level===0||t.store.checkStrictly||de(a)},ce=function(t,e){const n=t.store.props,o=t.data||{},a=n[e];if(typeof a=="function")return a(o,t);if(typeof a=="string")return o[a];if(typeof a>"u"){const d=o[e];return d===void 0?"":d}};let Et=0;class X{constructor(e){this.id=Et++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const n in e)ke(e,n)&&(this[n]=e[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const n=e.props;if(n&&typeof n.isLeaf<"u"){const d=ce(this,"isLeaf");typeof d=="boolean"&&(this.isLeafByUser=d)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||Te(this,this.data),!this.data)return;const o=e.defaultExpandedKeys,a=e.key;a&&o&&o.includes(this.key)&&this.expand(null,e.autoExpandParent),a&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||Te(this,e),this.data=e,this.childNodes=[];let n;this.level===0&&Array.isArray(this.data)?n=this.data:n=ce(this,"children")||[];for(let o=0,a=n.length;o<a;o++)this.insertChild({data:n[o]})}get label(){return ce(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return ce(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return e.childNodes[n+1]}return null}get previousSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return n>0?e.childNodes[n-1]:null}return null}contains(e,n=!0){return(this.childNodes||[]).some(o=>o===e||n&&o.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,n,o){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof X)){if(!o){const a=this.getChildren(!0);a.includes(e.data)||(typeof n>"u"||n<0?a.push(e.data):a.splice(n,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=Ne(new X(e)),e instanceof X&&e.initialize()}e.level=this.level+1,typeof n>"u"||n<0?this.childNodes.push(e):this.childNodes.splice(n,0,e),this.updateLeafState()}insertBefore(e,n){let o;n&&(o=this.childNodes.indexOf(n)),this.insertChild(e,o)}insertAfter(e,n){let o;n&&(o=this.childNodes.indexOf(n),o!==-1&&(o+=1)),this.insertChild(e,o)}removeChild(e){const n=this.getChildren()||[],o=n.indexOf(e.data);o>-1&&n.splice(o,1);const a=this.childNodes.indexOf(e);a>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(a,1)),this.updateLeafState()}removeChildByData(e){let n=null;for(let o=0;o<this.childNodes.length;o++)if(this.childNodes[o].data===e){n=this.childNodes[o];break}n&&this.removeChild(n)}expand(e,n){const o=()=>{if(n){let a=this.parent;for(;a.level>0;)a.expanded=!0,a=a.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(a=>{a.canFocus=!0})};this.shouldLoadData()?this.loadData(a=>{Array.isArray(a)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||de(this),o())}):o()}doCreateChildren(e,n={}){e.forEach(o=>{this.insertChild(Object.assign({data:o},n),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,n,o,a){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:r,allWithoutDisable:l}=Ee(this.childNodes);!this.isLeaf&&!r&&l&&(this.checked=!1,e=!1);const m=()=>{if(n){const C=this.childNodes;for(let i=0,v=C.length;i<v;i++){const E=C[i];a=a||e!==!1;const K=E.disabled?E.checked:a;E.setChecked(K,n,!0,a)}const{half:f,all:u}=Ee(C);u||(this.checked=u,this.indeterminate=f)}};if(this.shouldLoadData()){this.loadData(()=>{m(),de(this)},{checked:e!==!1});return}else m()}const d=this.parent;!d||d.level===0||o||de(d)}getChildren(e=!1){if(this.level===0)return this.data;const n=this.data;if(!n)return null;const o=this.store.props;let a="children";return o&&(a=o.children||"children"),n[a]===void 0&&(n[a]=null),e&&!n[a]&&(n[a]=[]),n[a]}updateChildren(){const e=this.getChildren()||[],n=this.childNodes.map(d=>d.data),o={},a=[];e.forEach((d,r)=>{const l=d[te];!!l&&n.findIndex(C=>C[te]===l)>=0?o[l]={index:r,data:d}:a.push({index:r,data:d})}),this.store.lazy||n.forEach(d=>{o[d[te]]||this.removeChildByData(d)}),a.forEach(({index:d,data:r})=>{this.insertChild({data:r},d)}),this.updateLeafState()}loadData(e,n={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(n).length)){this.loading=!0;const o=d=>{this.childNodes=[],this.doCreateChildren(d,n),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,d)},a=()=>{this.loading=!1};this.store.load(this,o,a)}else e&&e.call(this)}eachNode(e){const n=[this];for(;n.length;){const o=n.shift();n.unshift(...o.childNodes),e(o)}}reInitChecked(){this.store.checkStrictly||de(this)}}class wt{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const n in e)ke(e,n)&&(this[n]=e[n]);this.nodesMap={}}initialize(){if(this.root=new X({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,n=>{this.root.doCreateChildren(n),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const n=this.filterNodeMethod,o=this.lazy,a=function(d){const r=d.root?d.root.childNodes:d.childNodes;if(r.forEach(l=>{l.visible=n.call(l,e,l.data,l),a(l)}),!d.visible&&r.length){let l=!0;l=!r.some(m=>m.visible),d.root?d.root.visible=l===!1:d.visible=l===!1}e&&d.visible&&!d.isLeaf&&(!o||d.loaded)&&d.expand()};a(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof X)return e;const n=qe(e)?De(this.key,e):e;return this.nodesMap[n]||null}insertBefore(e,n){const o=this.getNode(n);o.parent.insertBefore({data:e},o)}insertAfter(e,n){const o=this.getNode(n);o.parent.insertAfter({data:e},o)}remove(e){const n=this.getNode(e);n&&n.parent&&(n===this.currentNode&&(this.currentNode=null),n.parent.removeChild(n))}append(e,n){const o=Fe(n)?this.root:this.getNode(n);o&&o.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],n=this.nodesMap;e.forEach(o=>{const a=n[o];a&&a.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const n=this.key;!e||!e.data||(n?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(o=>{this.deregisterNode(o)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,n=!1){const o=[],a=function(d){(d.root?d.root.childNodes:d.childNodes).forEach(l=>{(l.checked||n&&l.indeterminate)&&(!e||e&&l.isLeaf)&&o.push(l.data),a(l)})};return a(this),o}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(n=>(n||{})[this.key])}getHalfCheckedNodes(){const e=[],n=function(o){(o.root?o.root.childNodes:o.childNodes).forEach(d=>{d.indeterminate&&e.push(d.data),n(d)})};return n(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],n=this.nodesMap;for(const o in n)ke(n,o)&&e.push(n[o]);return e}updateChildren(e,n){const o=this.nodesMap[e];if(!o)return;const a=o.childNodes;for(let d=a.length-1;d>=0;d--){const r=a[d];this.remove(r.data)}for(let d=0,r=n.length;d<r;d++){const l=n[d];this.append(l,o.data)}}_setCheckedKeys(e,n=!1,o){const a=this._getAllNodes().sort((m,C)=>m.level-C.level),d=Object.create(null),r=Object.keys(o);a.forEach(m=>m.setChecked(!1,!1));const l=m=>{m.childNodes.forEach(C=>{var f;d[C.data[e]]=!0,(f=C.childNodes)!=null&&f.length&&l(C)})};for(let m=0,C=a.length;m<C;m++){const f=a[m],u=f.data[e].toString();if(!r.includes(u)){f.checked&&!d[u]&&f.setChecked(!1,!1);continue}if(f.childNodes.length&&l(f),f.isLeaf||this.checkStrictly){f.setChecked(!0,!1);continue}if(f.setChecked(!0,!0),n){f.setChecked(!1,!1);const v=function(E){E.childNodes.forEach(h=>{h.isLeaf||h.setChecked(!1,!1),v(h)})};v(f)}}}setCheckedNodes(e,n=!1){const o=this.key,a={};e.forEach(d=>{a[(d||{})[o]]=!0}),this._setCheckedKeys(o,n,a)}setCheckedKeys(e,n=!1){this.defaultCheckedKeys=e;const o=this.key,a={};e.forEach(d=>{a[d]=!0}),this._setCheckedKeys(o,n,a)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(n=>{const o=this.getNode(n);o&&o.expand(null,this.autoExpandParent)})}setChecked(e,n,o){const a=this.getNode(e);a&&a.setChecked(!!n,o)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const n=this.currentNode;n&&(n.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,n=!0){const o=e[this.key],a=this.nodesMap[o];this.setCurrentNode(a),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,n=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const o=this.getNode(e);o&&(this.setCurrentNode(o),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const Dt=pe({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=le("tree"),n=ne("NodeInstance"),o=ne("RootTree");return()=>{const a=t.node,{data:d,store:r}=a;return t.renderContent?t.renderContent(Ke,{_self:n,node:a,data:d,store:r}):Ae(o.ctx.slots,"default",{node:a,data:d},()=>[Ke("span",{class:e.be("node","label")},[a.label])])}}});var Kt=we(Dt,[["__file","tree-node-content.vue"]]);function Le(t){const e=ne("TreeNodeMap",null),n={treeNodeExpand:o=>{t.node!==o&&t.node.collapse()},children:[]};return e&&e.children.push(n),se("TreeNodeMap",n),{broadcastExpanded:o=>{if(t.accordion)for(const a of n.children)a.treeNodeExpand(o)}}}const Oe=Symbol("dragEvents");function xt({props:t,ctx:e,el$:n,dropIndicator$:o,store:a}){const d=le("tree"),r=_({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return se(Oe,{treeNodeDragStart:({event:f,treeNode:u})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(u.node))return f.preventDefault(),!1;f.dataTransfer.effectAllowed="move";try{f.dataTransfer.setData("text/plain","")}catch{}r.value.draggingNode=u,e.emit("node-drag-start",u.node,f)},treeNodeDragOver:({event:f,treeNode:u})=>{const i=u,v=r.value.dropNode;v&&v.node.id!==i.node.id&&ye(v.$el,d.is("drop-inner"));const E=r.value.draggingNode;if(!E||!i)return;let K=!0,h=!0,A=!0,B=!0;typeof t.allowDrop=="function"&&(K=t.allowDrop(E.node,i.node,"prev"),B=h=t.allowDrop(E.node,i.node,"inner"),A=t.allowDrop(E.node,i.node,"next")),f.dataTransfer.dropEffect=h||K||A?"move":"none",(K||h||A)&&(v==null?void 0:v.node.id)!==i.node.id&&(v&&e.emit("node-drag-leave",E.node,v.node,f),e.emit("node-drag-enter",E.node,i.node,f)),K||h||A?r.value.dropNode=i:r.value.dropNode=null,i.node.nextSibling===E.node&&(A=!1),i.node.previousSibling===E.node&&(K=!1),i.node.contains(E.node,!1)&&(h=!1),(E.node===i.node||E.node.contains(i.node))&&(K=!1,h=!1,A=!1);const M=i.$el.querySelector(`.${d.be("node","content")}`).getBoundingClientRect(),R=n.value.getBoundingClientRect();let S;const g=K?h?.25:A?.45:1:-1,c=A?h?.75:K?.55:0:1;let N=-9999;const p=f.clientY-M.top;p<M.height*g?S="before":p>M.height*c?S="after":h?S="inner":S="none";const x=i.$el.querySelector(`.${d.be("node","expand-icon")}`).getBoundingClientRect(),I=o.value;S==="before"?N=x.top-R.top:S==="after"&&(N=x.bottom-R.top),I.style.top=`${N}px`,I.style.left=`${x.right-R.left}px`,S==="inner"?Pe(i.$el,d.is("drop-inner")):ye(i.$el,d.is("drop-inner")),r.value.showDropIndicator=S==="before"||S==="after",r.value.allowDrop=r.value.showDropIndicator||B,r.value.dropType=S,e.emit("node-drag-over",E.node,i.node,f)},treeNodeDragEnd:f=>{const{draggingNode:u,dropType:i,dropNode:v}=r.value;if(f.preventDefault(),f.dataTransfer.dropEffect="move",u&&v){const E={data:u.node.data};i!=="none"&&u.node.remove(),i==="before"?v.node.parent.insertBefore(E,v.node):i==="after"?v.node.parent.insertAfter(E,v.node):i==="inner"&&v.node.insertChild(E),i!=="none"&&(a.value.registerNode(E),a.value.key&&u.node.eachNode(K=>{var h;(h=a.value.nodesMap[K.data[a.value.key]])==null||h.setChecked(K.checked,!a.value.checkStrictly)})),ye(v.$el,d.is("drop-inner")),e.emit("node-drag-end",u.node,v.node,i,f),i!=="none"&&e.emit("node-drop",u.node,v.node,i,f)}u&&!v&&e.emit("node-drag-end",u.node,null,i,f),r.value.showDropIndicator=!1,r.value.draggingNode=null,r.value.dropNode=null,r.value.allowDrop=!0}}),{dragState:r}}const St=pe({name:"ElTreeNode",components:{ElCollapseTransition:Nt,ElCheckbox:$e,NodeContent:Kt,ElIcon:Ve,Loading:je},props:{node:{type:X,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const n=le("tree"),{broadcastExpanded:o}=Le(t),a=ne("RootTree"),d=_(!1),r=_(!1),l=_(null),m=_(null),C=_(null),f=ne(Oe),u=Be();se("NodeInstance",u),t.node.expanded&&(d.value=!0,r.value=!0);const i=a.props.props.children||"children";q(()=>{const p=t.node.data[i];return p&&[...p]},()=>{t.node.updateChildren()}),q(()=>t.node.indeterminate,p=>{K(t.node.checked,p)}),q(()=>t.node.checked,p=>{K(p,t.node.indeterminate)}),q(()=>t.node.childNodes.length,()=>t.node.reInitChecked()),q(()=>t.node.expanded,p=>{xe(()=>d.value=p),p&&(r.value=!0)});const v=p=>De(a.props.nodeKey,p.data),E=p=>{const x=t.props.class;if(!x)return{};let I;if(We(x)){const{data:V}=p;I=x(V,p)}else I=x;return Ye(I)?{[I]:!0}:I},K=(p,x)=>{(l.value!==p||m.value!==x)&&a.ctx.emit("check-change",t.node.data,p,x),l.value=p,m.value=x},h=p=>{be(a.store,a.ctx.emit,()=>a.store.value.setCurrentNode(t.node)),a.currentNode.value=t.node,a.props.expandOnClickNode&&B(),a.props.checkOnClickNode&&!t.node.disabled&&M(null,{target:{checked:!t.node.checked}}),a.ctx.emit("node-click",t.node.data,t.node,u,p)},A=p=>{a.instance.vnode.props.onNodeContextmenu&&(p.stopPropagation(),p.preventDefault()),a.ctx.emit("node-contextmenu",p,t.node.data,t.node,u)},B=()=>{t.node.isLeaf||(d.value?(a.ctx.emit("node-collapse",t.node.data,t.node,u),t.node.collapse()):(t.node.expand(),e.emit("node-expand",t.node.data,t.node,u)))},M=(p,x)=>{t.node.setChecked(x.target.checked,!a.props.checkStrictly),xe(()=>{const I=a.store.value;a.ctx.emit("check",t.node.data,{checkedNodes:I.getCheckedNodes(),checkedKeys:I.getCheckedKeys(),halfCheckedNodes:I.getHalfCheckedNodes(),halfCheckedKeys:I.getHalfCheckedKeys()})})};return{ns:n,node$:C,tree:a,expanded:d,childNodeRendered:r,oldChecked:l,oldIndeterminate:m,getNodeKey:v,getNodeClass:E,handleSelectChange:K,handleClick:h,handleContextMenu:A,handleExpandIconClick:B,handleCheckChange:M,handleChildNodeExpand:(p,x,I)=>{o(x),a.ctx.emit("node-expand",p,x,I)},handleDragStart:p=>{a.props.draggable&&f.treeNodeDragStart({event:p,treeNode:t})},handleDragOver:p=>{p.preventDefault(),a.props.draggable&&f.treeNodeDragOver({event:p,treeNode:{$el:C.value,node:t.node}})},handleDrop:p=>{p.preventDefault()},handleDragEnd:p=>{a.props.draggable&&f.treeNodeDragEnd(p)},CaretRight:Ue}}}),It=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],_t=["aria-expanded"];function Tt(t,e,n,o,a,d){const r=Q("el-icon"),l=Q("el-checkbox"),m=Q("loading"),C=Q("node-content"),f=Q("el-tree-node"),u=Q("el-collapse-transition");return ve((D(),P("div",{ref:"node$",class:U([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:e[1]||(e[1]=G((...i)=>t.handleClick&&t.handleClick(...i),["stop"])),onContextmenu:e[2]||(e[2]=(...i)=>t.handleContextMenu&&t.handleContextMenu(...i)),onDragstart:e[3]||(e[3]=G((...i)=>t.handleDragStart&&t.handleDragStart(...i),["stop"])),onDragover:e[4]||(e[4]=G((...i)=>t.handleDragOver&&t.handleDragOver(...i),["stop"])),onDragend:e[5]||(e[5]=G((...i)=>t.handleDragEnd&&t.handleDragEnd(...i),["stop"])),onDrop:e[6]||(e[6]=G((...i)=>t.handleDrop&&t.handleDrop(...i),["stop"]))},[L("div",{class:U(t.ns.be("node","content")),style:He({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(D(),T(r,{key:0,class:U([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:G(t.handleExpandIconClick,["stop"])},{default:w(()=>[(D(),T(Re(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):O("v-if",!0),t.showCheckbox?(D(),T(l,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:e[0]||(e[0]=G(()=>{},["stop"])),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):O("v-if",!0),t.node.loading?(D(),T(r,{key:2,class:U([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:w(()=>[k(m)]),_:1},8,["class"])):O("v-if",!0),k(C,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),k(u,null,{default:w(()=>[!t.renderAfterExpand||t.childNodeRendered?ve((D(),P("div",{key:0,class:U(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(D(!0),P(re,null,fe(t.node.childNodes,i=>(D(),T(f,{key:t.getNodeKey(i),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:i,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,_t)),[[Ce,t.expanded]]):O("v-if",!0)]),_:1})],42,It)),[[Ce,t.node.visible]])}var At=we(St,[["render",Tt],["__file","tree-node.vue"]]);function Bt({el$:t},e){const n=le("tree"),o=Se([]),a=Se([]);Ge(()=>{r()}),Je(()=>{o.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),a.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),q(a,l=>{l.forEach(m=>{m.setAttribute("tabindex","-1")})}),Qe(t,"keydown",l=>{const m=l.target;if(!m.className.includes(n.b("node")))return;const C=l.code;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const f=o.value.indexOf(m);let u;if([J.up,J.down].includes(C)){if(l.preventDefault(),C===J.up){u=f===-1?0:f!==0?f-1:o.value.length-1;const v=u;for(;!e.value.getNode(o.value[u].dataset.key).canFocus;){if(u--,u===v){u=-1;break}u<0&&(u=o.value.length-1)}}else{u=f===-1?0:f<o.value.length-1?f+1:0;const v=u;for(;!e.value.getNode(o.value[u].dataset.key).canFocus;){if(u++,u===v){u=-1;break}u>=o.value.length&&(u=0)}}u!==-1&&o.value[u].focus()}[J.left,J.right].includes(C)&&(l.preventDefault(),m.click());const i=m.querySelector('[type="checkbox"]');[J.enter,J.space].includes(C)&&i&&(l.preventDefault(),i.click())});const r=()=>{var l;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),a.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const m=t.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);if(m.length){m[0].setAttribute("tabindex","0");return}(l=o.value[0])==null||l.setAttribute("tabindex","0")}}const $t=pe({name:"ElTree",components:{ElTreeNode:At},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:Xe}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:n}=Ze(),o=le("tree"),a=ne(st,null),d=_(new wt({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));d.value.initialize();const r=_(d.value.root),l=_(null),m=_(null),C=_(null),{broadcastExpanded:f}=Le(t),{dragState:u}=xt({props:t,ctx:e,el$:m,dropIndicator$:C,store:d});Bt({el$:m},d);const i=et(()=>{const{childNodes:s}=r.value,b=a?a.hasFilteredOptions!==0:!1;return(!s||s.length===0||s.every(({visible:F})=>!F))&&!b});q(()=>t.currentNodeKey,s=>{d.value.setCurrentNodeKey(s)}),q(()=>t.defaultCheckedKeys,s=>{d.value.setDefaultCheckedKey(s)}),q(()=>t.defaultExpandedKeys,s=>{d.value.setDefaultExpandedKeys(s)}),q(()=>t.data,s=>{d.value.setData(s)},{deep:!0}),q(()=>t.checkStrictly,s=>{d.value.checkStrictly=s});const v=s=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");d.value.filter(s)},E=s=>De(t.nodeKey,s.data),K=s=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const b=d.value.getNode(s);if(!b)return[];const F=[b.data];let W=b.parent;for(;W&&W!==r.value;)F.push(W.data),W=W.parent;return F.reverse()},h=(s,b)=>d.value.getCheckedNodes(s,b),A=s=>d.value.getCheckedKeys(s),B=()=>{const s=d.value.getCurrentNode();return s?s.data:null},M=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const s=B();return s?s[t.nodeKey]:null},R=(s,b)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");d.value.setCheckedNodes(s,b)},S=(s,b)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");d.value.setCheckedKeys(s,b)},g=(s,b,F)=>{d.value.setChecked(s,b,F)},c=()=>d.value.getHalfCheckedNodes(),N=()=>d.value.getHalfCheckedKeys(),p=(s,b=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");be(d,e.emit,()=>d.value.setUserCurrentNode(s,b))},x=(s,b=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");be(d,e.emit,()=>d.value.setCurrentNodeKey(s,b))},I=s=>d.value.getNode(s),V=s=>{d.value.remove(s)},H=(s,b)=>{d.value.append(s,b)},$=(s,b)=>{d.value.insertBefore(s,b)},Z=(s,b)=>{d.value.insertAfter(s,b)},ge=(s,b,F)=>{f(b),e.emit("node-expand",s,b,F)},ee=(s,b)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");d.value.updateChildren(s,b)};return se("RootTree",{ctx:e,props:t,store:d,root:r,currentNode:l,instance:Be()}),se(vt,void 0),{ns:o,store:d,root:r,currentNode:l,dragState:u,el$:m,dropIndicator$:C,isEmpty:i,filter:v,getNodeKey:E,getNodePath:K,getCheckedNodes:h,getCheckedKeys:A,getCurrentNode:B,getCurrentKey:M,setCheckedNodes:R,setCheckedKeys:S,setChecked:g,getHalfCheckedNodes:c,getHalfCheckedKeys:N,setCurrentNode:p,setCurrentKey:x,t:n,getNode:I,remove:V,append:H,insertBefore:$,insertAfter:Z,handleNodeExpand:ge,updateKeyChildren:ee}}});function Lt(t,e,n,o,a,d){const r=Q("el-tree-node");return D(),P("div",{ref:"el$",class:U([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(D(!0),P(re,null,fe(t.root.childNodes,l=>(D(),T(r,{key:t.getNodeKey(l),node:l,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(D(),P("div",{key:0,class:U(t.ns.e("empty-block"))},[Ae(t.$slots,"empty",{},()=>{var l;return[L("span",{class:U(t.ns.e("empty-text"))},ue((l=t.emptyText)!=null?l:t.t("el.tree.emptyText")),3)]})],2)):O("v-if",!0),ve(L("div",{ref:"dropIndicator$",class:U(t.ns.e("drop-indicator"))},null,2),[[Ce,t.dragState.showDropIndicator]])],2)}var he=we($t,[["render",Lt],["__file","tree.vue"]]);he.install=t=>{t.component(he.name,he)};const Ot=he,Mt=Ot,zt=t=>(nt("data-v-c9708cb6"),t=t(),ot(),t),qt={class:"org-main"},Ft={class:"content"},Pt={class:"l"},Vt={style:{"margin-bottom":"20px"}},jt={class:"tree-item"},Ut={class:"r"},Rt={class:"s-table-operations"},Ht=zt(()=>L("img",{style:{width:"17px"},src:pt,alt:""},null,-1)),Wt={class:"s-flex-auto",style:{"min-height":"0"}},Yt={class:"s-table-pagination"},Gt=pe({__name:"Org",setup(t){const e=Ne({page:1,perPage:20}),n=_(0);_({}),_([]);const o=_([]),a=_([]),d=_([]),r=_(null),l=_(0);_([]);const m=()=>{ie.getList().then(g=>{g.code===0&&(o.value=g.data,l.value=g.data[0].id)})},C=()=>{oe.getList({departmentId:l.value,...e}).then(g=>{g.code===0&&(d.value=g.data.data,n.value=g.data.total)})};tt.getList().then(g=>{g.code===0&&(a.value=g.data)});const f=g=>{ae.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{ie.del({id:g}).then(c=>{c.code===0?(z.success("删除成功"),m()):z.error(c.msg)})}).catch(()=>{})},u=g=>{ae.prompt("部门名称","新增部门",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(({value:c})=>{console.log(c),ie.add({name:c,pid:g}).then(N=>{N.code===0?(z.success("新增成功"),m()):z.error(N.msg)})}).catch(()=>{})},i=g=>{ae.prompt("部门名称","编辑部门",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:g.name}).then(({value:c})=>{console.log(c),ie.edit({id:g.id,name:c}).then(N=>{N.code===0?(z.success("编辑成功"),m()):z.error(N.msg)})}).catch(()=>{})},v=g=>{ae.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{oe.del({id:g}).then(c=>{c.code===0?(z.success("删除成功"),m()):z.error(c.msg)})}).catch(()=>{})},E=(g,c)=>{ae.confirm(`确定${c===1?"启用":"停用"}该账号？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{oe.setStatus({id:g,status:c}).then(N=>{N.code===0?(z.success(`账号${c===1?"启用":"停用"}成功`),C()):z.error(N.msg)})}).catch(()=>{})},K=_(null),h=Ne({show:!1,isEdit:!1,data:{account:"",password:"",departmentId:"",roleId:"",phone:"",email:""},set:g=>{h.show=!0,g?(h.isEdit=!0,h.data={id:g.id,account:g.account,password:g.password,departmentId:A(g.departmentId),roleId:g.roleId,phone:g.phone,email:g.email}):(h.isEdit=!1,h.data={account:"",password:"",departmentId:"",roleId:"",phone:"",email:""},setTimeout(()=>{K.value.resetFields()},100))},sub:()=>{K.value.validate(g=>{if(!g)return!1;let c=h.isEdit?oe.edit:oe.add,N={...h.data};N.departmentId=N.departmentId[N.departmentId.length-1],c(N).then(p=>{p.code===0?(z.success(h.isEdit?"修改成功":"新增成功"),h.show=!1,C()):z.error(p.msg)})})}}),A=g=>{let c=[],N=o.value,p=[];const x=(I,V)=>{for(let H=0;H<I.length;H++){let $=I[H],Z=I[H].id;if(c[V]=Z,g===Z)return p=c.slice(0,V+1),c;$.child.length>0&&x($.child,V+1)}};return x(N,0),p};q(l,()=>{C()}),m();const B=_([]),M=_([]),R=()=>{setTimeout(()=>{let g=[];r.value.columns.forEach(c=>{c.label&&g.push(c.label)}),M.value=g.join(",").split(","),B.value=g.join(",").split(",")},0)},S=g=>B.value.length===0&&M.value.length===0?!0:B.value.includes(g);return R(),(g,c)=>{const N=kt,p=yt,x=Mt,I=$e,V=ut,H=ht,$=mt,Z=gt,ge=ft,ee=Ct,s=dt,b=ct,F=lt,W=it,Me=rt,ze=at;return D(),P(re,null,[L("div",qt,[L("div",Ft,[L("div",Pt,[L("div",Vt,[k(N,{type:"primary",icon:"Plus",onClick:c[0]||(c[0]=y=>u(0))},{default:w(()=>[j("新增部门")]),_:1})]),k(x,{style:{"max-width":"300px"},"default-expand-all":"",data:o.value,"node-key":"id",props:{children:"child",label:"name"}},{default:w(({node:y,data:Y})=>[L("span",jt,[k(p,{class:"tree-item-label",onClick:me=>l.value=Y.id},{default:w(()=>[j(ue(y.label),1)]),_:2},1032,["onClick"]),k(N,{link:"",icon:"Plus",onClick:me=>u(Y.id)},null,8,["onClick"]),k(N,{link:"",icon:"Edit",onClick:me=>i(Y)},null,8,["onClick"]),k(N,{link:"",icon:"Delete",onClick:me=>f(Y.id)},null,8,["onClick"])])]),_:1},8,["data"])]),L("div",Ut,[L("div",Rt,[k(N,{onClick:c[1]||(c[1]=y=>h.set())},{default:w(()=>[j("新增员工")]),_:1}),k(H,{placement:"bottom-end",trigger:"click"},{reference:w(()=>[k(N,{size:"",link:""},{default:w(()=>[Ht]),_:1})]),default:w(()=>[k(V,{modelValue:B.value,"onUpdate:modelValue":c[2]||(c[2]=y=>B.value=y)},{default:w(()=>[L("ul",null,[(D(!0),P(re,null,fe(M.value,y=>(D(),P("li",{class:"s-checkbox_item",key:y},[k(I,{label:y,value:y},{default:w(()=>[j(ue(y),1)]),_:2},1032,["label","value"])]))),128))])]),_:1},8,["modelValue"])]),_:1})]),L("div",Wt,[k(Z,{ref_key:"tableRef",ref:r,data:d.value,border:"","table-layout":"fixed",height:"100%","header-row-class-name":"s-table-header"},{default:w(()=>[S("登录名")?(D(),T($,{key:0,prop:"account",label:"登录名"})):O("",!0),S("部门")?(D(),T($,{key:1,prop:"department",label:"部门"})):O("",!0),S("系统角色")?(D(),T($,{key:2,prop:"role",label:"系统角色","min-width":"120"})):O("",!0),S("手机")?(D(),T($,{key:3,prop:"phone",label:"手机"})):O("",!0),S("邮箱")?(D(),T($,{key:4,prop:"email",label:"邮箱"})):O("",!0),S("密码")?(D(),T($,{key:5,prop:"password",label:"密码"})):O("",!0),S("添加时间")?(D(),T($,{key:6,prop:"creatTime",label:"添加时间","min-width":"120"})):O("",!0),S("登录时间")?(D(),T($,{key:7,prop:"loginTime",label:"登录时间","min-width":"120"})):O("",!0),S("操作")?(D(),T($,{key:8,label:"操作",fixed:"right",width:"150"},{default:w(y=>[k(N,{link:"",type:"primary",onClick:Y=>h.set(y.row)},{default:w(()=>[j("编辑")]),_:2},1032,["onClick"]),k(N,{link:"",type:"primary",onClick:Y=>E(y.row.id,y.row.status===1?0:1)},{default:w(()=>[j(ue(y.row.status===1?"停用":"启用"),1)]),_:2},1032,["onClick"]),k(N,{link:"",type:"danger",onClick:Y=>v(y.row.id)},{default:w(()=>[j("删除")]),_:2},1032,["onClick"])]),_:1})):O("",!0)]),_:1},8,["data"])]),L("div",Yt,[k(ge,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50,100],total:n.value,"current-page":e.page,"onUpdate:currentPage":c[3]||(c[3]=y=>e.page=y),"page-size":e.perPage,"onUpdate:pageSize":c[4]||(c[4]=y=>e.perPage=y),onChange:m},null,8,["total","current-page","page-size"])])])])]),k(ze,{title:h.data.id?"编辑":"新增员工",modelValue:h.show,"onUpdate:modelValue":c[12]||(c[12]=y=>h.show=y),width:"500",draggable:"",onClose:c[13]||(c[13]=()=>{K.value.resetFields()})},{footer:w(()=>[k(N,{onClick:c[11]||(c[11]=y=>h.show=!1)},{default:w(()=>[j("取消")]),_:1}),k(N,{type:"primary",onClick:h.sub},{default:w(()=>[j("确定")]),_:1},8,["onClick"])]),default:w(()=>[k(Me,{ref_key:"formRef",ref:K,model:h.data,"label-width":"auto","label-position":"left"},{default:w(()=>[k(s,{label:"登录名",prop:"account",rules:[{required:!0,message:"请输入登录名",trigger:"blur"}]},{default:w(()=>[k(ee,{modelValue:h.data.account,"onUpdate:modelValue":c[5]||(c[5]=y=>h.data.account=y),placeholder:"请输入登录名"},null,8,["modelValue"])]),_:1}),k(s,{label:"密码",prop:"password",rules:[{required:!0,message:"请输入密码",trigger:"blur"}]},{default:w(()=>[k(ee,{modelValue:h.data.password,"onUpdate:modelValue":c[6]||(c[6]=y=>h.data.password=y),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),k(s,{label:"部门",prop:"departmentId",rules:[{required:!0,message:"请选择部门",trigger:"change"}]},{default:w(()=>[k(b,{modelValue:h.data.departmentId,"onUpdate:modelValue":c[7]||(c[7]=y=>h.data.departmentId=y),options:o.value,props:{value:"id",label:"name",children:"child",checkStrictly:!0},style:{width:"100%"}},null,8,["modelValue","options"])]),_:1}),k(s,{label:"系统角色",prop:"roleId",rules:[{required:!0,message:"请选择系统角色",trigger:"change"}]},{default:w(()=>[k(W,{modelValue:h.data.roleId,"onUpdate:modelValue":c[8]||(c[8]=y=>h.data.roleId=y)},{default:w(()=>[(D(!0),P(re,null,fe(a.value,y=>(D(),T(F,{key:y.id,label:y.name,value:y.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),k(s,{label:"手机",prop:"phone",rules:Ie(_e).phone},{default:w(()=>[k(ee,{modelValue:h.data.phone,"onUpdate:modelValue":c[9]||(c[9]=y=>h.data.phone=y),placeholder:"请输入手机"},null,8,["modelValue"])]),_:1},8,["rules"]),k(s,{label:"邮箱",prop:"email",rules:Ie(_e).email},{default:w(()=>[k(ee,{modelValue:h.data.email,"onUpdate:modelValue":c[10]||(c[10]=y=>h.data.email=y),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["model"])]),_:1},8,["title","modelValue"])],64)}}}),zn=bt(Gt,[["__scopeId","data-v-c9708cb6"]]);export{zn as default};