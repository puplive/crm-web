import{ag as ke,y as Ne,Q as Oe,c2 as Me,_ as De,d as pe,a as le,s as ne,D as Ke,r as Ie,A as re,t as _,k as ye,j as ze,G as qe,ar as Pe,z,U as xe,ct as Ve,W as Q,H as ve,I as Ce,o as w,b as j,X as $,h as A,i as D,aq as Fe,n as R,an as G,ak as L,$ as k,f as je,J as se,a1 as fe,K as Te,aU as Ue,F as Re,ad as Se,B as He,av as We,b4 as Ye,E as J,q as Ge,ah as Je,c as Qe,Z as ue,cu as Xe,cv as ie,a7 as M,cg as oe,Y as U,a2 as Ze,a3 as et}from"./index-BG7LMbPz.js";import{E as tt}from"./dialog-CxIkeKM_.js";/* empty css                */import{a as nt,E as ot}from"./form-item-6jvYYqHN.js";/* empty css              */import"./tag-BxsgDYqE.js";import{s as at,E as dt,a as st}from"./select-DcNk0NOX.js";import"./scrollbar-xaBfH7uM.js";import"./popper-R5cqvFUB.js";import{E as rt}from"./cascader-panel-ECEzwOxn.js";import{E as Ae,a as lt}from"./checkbox-B5sVTVQz.js";import"./radio-D31diOTa.js";import{E as it,a as ct,_ as ut}from"./sx-CscwSk2q.js";import{E as ht,a as ft}from"./table-column-BLWQpRWR.js";/* empty css                *//* empty css                       */import{E as pt}from"./link--Q0vObNM.js";import{E as gt}from"./button-DLuphGs-.js";/* empty css                    *//* empty css                */import{E as ae}from"./index-BlpqpxR-.js";import{_ as mt}from"./index-BBdzzj1u.js";import{h as yt}from"./use-form-item-7ZRTO0yW.js";import{E as kt}from"./index-S97IM6Lh.js";import{_ as Nt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CqxLOyh3.js";import"./scroll-DLMVdQfx.js";import"./vnode-Dos8Cr6u.js";import"./focus-trap-CcMYm46r.js";import"./refs-Cs7McP6f.js";import"./event-BB_Ol6Sd.js";import"./castArray-C0fgwSex.js";import"./_baseClone-W1Y196kT.js";import"./_initCloneObject-DYjwbyGr.js";import"./isEqual-Dii6UJBR.js";import"./aria-KgdLjl5h.js";import"./arrays-6TrVLtTe.js";import"./cloneDeep-CA6GiC6y.js";import"./dropdown-C6o-NvvM.js";import"./validator-CFn3_VVd.js";const te="$treeNodeId",_e=function(t,e){!e||e[te]||Object.defineProperty(e,te,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},we=function(t,e){return t?e[t]:e[te]},be=(t,e,n)=>{const o=t.value.currentNode;n();const a=t.value.currentNode;o!==a&&e("current-change",a?a.data:null,a)},Ee=t=>{let e=!0,n=!0,o=!0;for(let a=0,d=t.length;a<d;a++){const s=t[a];(s.checked!==!0||s.indeterminate)&&(e=!1,s.disabled||(o=!1)),(s.checked!==!1||s.indeterminate)&&(n=!1)}return{all:e,none:n,allWithoutDisable:o,half:!e&&!n}},de=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:n,half:o}=Ee(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):o?(t.checked=!1,t.indeterminate=!0):n&&(t.checked=!1,t.indeterminate=!1);const a=t.parent;!a||a.level===0||t.store.checkStrictly||de(a)},ce=function(t,e){const n=t.store.props,o=t.data||{},a=n[e];if(typeof a=="function")return a(o,t);if(typeof a=="string")return o[a];if(typeof a>"u"){const d=o[e];return d===void 0?"":d}};let vt=0;class X{constructor(e){this.id=vt++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const n in e)ke(e,n)&&(this[n]=e[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const n=e.props;if(n&&typeof n.isLeaf<"u"){const d=ce(this,"isLeaf");typeof d=="boolean"&&(this.isLeafByUser=d)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||_e(this,this.data),!this.data)return;const o=e.defaultExpandedKeys,a=e.key;a&&o&&o.includes(this.key)&&this.expand(null,e.autoExpandParent),a&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||_e(this,e),this.data=e,this.childNodes=[];let n;this.level===0&&Array.isArray(this.data)?n=this.data:n=ce(this,"children")||[];for(let o=0,a=n.length;o<a;o++)this.insertChild({data:n[o]})}get label(){return ce(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return ce(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return e.childNodes[n+1]}return null}get previousSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return n>0?e.childNodes[n-1]:null}return null}contains(e,n=!0){return(this.childNodes||[]).some(o=>o===e||n&&o.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,n,o){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof X)){if(!o){const a=this.getChildren(!0);a.includes(e.data)||(typeof n>"u"||n<0?a.push(e.data):a.splice(n,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=Ne(new X(e)),e instanceof X&&e.initialize()}e.level=this.level+1,typeof n>"u"||n<0?this.childNodes.push(e):this.childNodes.splice(n,0,e),this.updateLeafState()}insertBefore(e,n){let o;n&&(o=this.childNodes.indexOf(n)),this.insertChild(e,o)}insertAfter(e,n){let o;n&&(o=this.childNodes.indexOf(n),o!==-1&&(o+=1)),this.insertChild(e,o)}removeChild(e){const n=this.getChildren()||[],o=n.indexOf(e.data);o>-1&&n.splice(o,1);const a=this.childNodes.indexOf(e);a>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(a,1)),this.updateLeafState()}removeChildByData(e){let n=null;for(let o=0;o<this.childNodes.length;o++)if(this.childNodes[o].data===e){n=this.childNodes[o];break}n&&this.removeChild(n)}expand(e,n){const o=()=>{if(n){let a=this.parent;for(;a.level>0;)a.expanded=!0,a=a.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(a=>{a.canFocus=!0})};this.shouldLoadData()?this.loadData(a=>{Array.isArray(a)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||de(this),o())}):o()}doCreateChildren(e,n={}){e.forEach(o=>{this.insertChild(Object.assign({data:o},n),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,n,o,a){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:s,allWithoutDisable:l}=Ee(this.childNodes);!this.isLeaf&&!s&&l&&(this.checked=!1,e=!1);const m=()=>{if(n){const v=this.childNodes;for(let i=0,N=v.length;i<N;i++){const E=v[i];a=a||e!==!1;const f=E.disabled?E.checked:a;E.setChecked(f,n,!0,a)}const{half:p,all:h}=Ee(v);h||(this.checked=h,this.indeterminate=p)}};if(this.shouldLoadData()){this.loadData(()=>{m(),de(this)},{checked:e!==!1});return}else m()}const d=this.parent;!d||d.level===0||o||de(d)}getChildren(e=!1){if(this.level===0)return this.data;const n=this.data;if(!n)return null;const o=this.store.props;let a="children";return o&&(a=o.children||"children"),n[a]===void 0&&(n[a]=null),e&&!n[a]&&(n[a]=[]),n[a]}updateChildren(){const e=this.getChildren()||[],n=this.childNodes.map(d=>d.data),o={},a=[];e.forEach((d,s)=>{const l=d[te];!!l&&n.findIndex(v=>v[te]===l)>=0?o[l]={index:s,data:d}:a.push({index:s,data:d})}),this.store.lazy||n.forEach(d=>{o[d[te]]||this.removeChildByData(d)}),a.forEach(({index:d,data:s})=>{this.insertChild({data:s},d)}),this.updateLeafState()}loadData(e,n={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(n).length)){this.loading=!0;const o=d=>{this.childNodes=[],this.doCreateChildren(d,n),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,d)},a=()=>{this.loading=!1};this.store.load(this,o,a)}else e&&e.call(this)}eachNode(e){const n=[this];for(;n.length;){const o=n.shift();n.unshift(...o.childNodes),e(o)}}reInitChecked(){this.store.checkStrictly||de(this)}}class Ct{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const n in e)ke(e,n)&&(this[n]=e[n]);this.nodesMap={}}initialize(){if(this.root=new X({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,n=>{this.root.doCreateChildren(n),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const n=this.filterNodeMethod,o=this.lazy,a=function(d){const s=d.root?d.root.childNodes:d.childNodes;if(s.forEach(l=>{l.visible=n.call(l,e,l.data,l),a(l)}),!d.visible&&s.length){let l=!0;l=!s.some(m=>m.visible),d.root?d.root.visible=l===!1:d.visible=l===!1}e&&d.visible&&!d.isLeaf&&(!o||d.loaded)&&d.expand()};a(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof X)return e;const n=Oe(e)?we(this.key,e):e;return this.nodesMap[n]||null}insertBefore(e,n){const o=this.getNode(n);o.parent.insertBefore({data:e},o)}insertAfter(e,n){const o=this.getNode(n);o.parent.insertAfter({data:e},o)}remove(e){const n=this.getNode(e);n&&n.parent&&(n===this.currentNode&&(this.currentNode=null),n.parent.removeChild(n))}append(e,n){const o=Me(n)?this.root:this.getNode(n);o&&o.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],n=this.nodesMap;e.forEach(o=>{const a=n[o];a&&a.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const n=this.key;!e||!e.data||(n?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(o=>{this.deregisterNode(o)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,n=!1){const o=[],a=function(d){(d.root?d.root.childNodes:d.childNodes).forEach(l=>{(l.checked||n&&l.indeterminate)&&(!e||e&&l.isLeaf)&&o.push(l.data),a(l)})};return a(this),o}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(n=>(n||{})[this.key])}getHalfCheckedNodes(){const e=[],n=function(o){(o.root?o.root.childNodes:o.childNodes).forEach(d=>{d.indeterminate&&e.push(d.data),n(d)})};return n(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],n=this.nodesMap;for(const o in n)ke(n,o)&&e.push(n[o]);return e}updateChildren(e,n){const o=this.nodesMap[e];if(!o)return;const a=o.childNodes;for(let d=a.length-1;d>=0;d--){const s=a[d];this.remove(s.data)}for(let d=0,s=n.length;d<s;d++){const l=n[d];this.append(l,o.data)}}_setCheckedKeys(e,n=!1,o){const a=this._getAllNodes().sort((m,v)=>m.level-v.level),d=Object.create(null),s=Object.keys(o);a.forEach(m=>m.setChecked(!1,!1));const l=m=>{m.childNodes.forEach(v=>{var p;d[v.data[e]]=!0,(p=v.childNodes)!=null&&p.length&&l(v)})};for(let m=0,v=a.length;m<v;m++){const p=a[m],h=p.data[e].toString();if(!s.includes(h)){p.checked&&!d[h]&&p.setChecked(!1,!1);continue}if(p.childNodes.length&&l(p),p.isLeaf||this.checkStrictly){p.setChecked(!0,!1);continue}if(p.setChecked(!0,!0),n){p.setChecked(!1,!1);const N=function(E){E.childNodes.forEach(S=>{S.isLeaf||S.setChecked(!1,!1),N(S)})};N(p)}}}setCheckedNodes(e,n=!1){const o=this.key,a={};e.forEach(d=>{a[(d||{})[o]]=!0}),this._setCheckedKeys(o,n,a)}setCheckedKeys(e,n=!1){this.defaultCheckedKeys=e;const o=this.key,a={};e.forEach(d=>{a[d]=!0}),this._setCheckedKeys(o,n,a)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(n=>{const o=this.getNode(n);o&&o.expand(null,this.autoExpandParent)})}setChecked(e,n,o){const a=this.getNode(e);a&&a.setChecked(!!n,o)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const n=this.currentNode;n&&(n.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,n=!0){const o=e[this.key],a=this.nodesMap[o];this.setCurrentNode(a),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,n=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const o=this.getNode(e);o&&(this.setCurrentNode(o),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const bt=pe({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=le("tree"),n=ne("NodeInstance"),o=ne("RootTree");return()=>{const a=t.node,{data:d,store:s}=a;return t.renderContent?t.renderContent(Ke,{_self:n,node:a,data:d,store:s}):Ie(o.ctx.slots,"default",{node:a,data:d},()=>[Ke("span",{class:e.be("node","label")},[a.label])])}}});var Et=De(bt,[["__file","tree-node-content.vue"]]);function Be(t){const e=ne("TreeNodeMap",null),n={treeNodeExpand:o=>{t.node!==o&&t.node.collapse()},children:[]};return e&&e.children.push(n),re("TreeNodeMap",n),{broadcastExpanded:o=>{if(t.accordion)for(const a of n.children)a.treeNodeExpand(o)}}}const $e=Symbol("dragEvents");function Dt({props:t,ctx:e,el$:n,dropIndicator$:o,store:a}){const d=le("tree"),s=_({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return re($e,{treeNodeDragStart:({event:p,treeNode:h})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(h.node))return p.preventDefault(),!1;p.dataTransfer.effectAllowed="move";try{p.dataTransfer.setData("text/plain","")}catch{}s.value.draggingNode=h,e.emit("node-drag-start",h.node,p)},treeNodeDragOver:({event:p,treeNode:h})=>{const i=h,N=s.value.dropNode;N&&N.node.id!==i.node.id&&ye(N.$el,d.is("drop-inner"));const E=s.value.draggingNode;if(!E||!i)return;let f=!0,S=!0,I=!0,O=!0;typeof t.allowDrop=="function"&&(f=t.allowDrop(E.node,i.node,"prev"),O=S=t.allowDrop(E.node,i.node,"inner"),I=t.allowDrop(E.node,i.node,"next")),p.dataTransfer.dropEffect=S||f||I?"move":"none",(f||S||I)&&(N==null?void 0:N.node.id)!==i.node.id&&(N&&e.emit("node-drag-leave",E.node,N.node,p),e.emit("node-drag-enter",E.node,i.node,p)),f||S||I?s.value.dropNode=i:s.value.dropNode=null,i.node.nextSibling===E.node&&(I=!1),i.node.previousSibling===E.node&&(f=!1),i.node.contains(E.node,!1)&&(S=!1),(E.node===i.node||E.node.contains(i.node))&&(f=!1,S=!1,I=!1);const P=i.$el.querySelector(`.${d.be("node","content")}`).getBoundingClientRect(),T=n.value.getBoundingClientRect();let c;const r=f?S?.25:I?.45:1:-1,C=I?S?.75:f?.55:0:1;let q=-9999;const g=p.clientY-P.top;g<P.height*r?c="before":g>P.height*C?c="after":S?c="inner":c="none";const K=i.$el.querySelector(`.${d.be("node","expand-icon")}`).getBoundingClientRect(),x=o.value;c==="before"?q=K.top-T.top:c==="after"&&(q=K.bottom-T.top),x.style.top=`${q}px`,x.style.left=`${K.right-T.left}px`,c==="inner"?ze(i.$el,d.is("drop-inner")):ye(i.$el,d.is("drop-inner")),s.value.showDropIndicator=c==="before"||c==="after",s.value.allowDrop=s.value.showDropIndicator||O,s.value.dropType=c,e.emit("node-drag-over",E.node,i.node,p)},treeNodeDragEnd:p=>{const{draggingNode:h,dropType:i,dropNode:N}=s.value;if(p.preventDefault(),p.dataTransfer.dropEffect="move",h&&N){const E={data:h.node.data};i!=="none"&&h.node.remove(),i==="before"?N.node.parent.insertBefore(E,N.node):i==="after"?N.node.parent.insertAfter(E,N.node):i==="inner"&&N.node.insertChild(E),i!=="none"&&(a.value.registerNode(E),a.value.key&&h.node.eachNode(f=>{var S;(S=a.value.nodesMap[f.data[a.value.key]])==null||S.setChecked(f.checked,!a.value.checkStrictly)})),ye(N.$el,d.is("drop-inner")),e.emit("node-drag-end",h.node,N.node,i,p),i!=="none"&&e.emit("node-drop",h.node,N.node,i,p)}h&&!N&&e.emit("node-drag-end",h.node,null,i,p),s.value.showDropIndicator=!1,s.value.draggingNode=null,s.value.dropNode=null,s.value.allowDrop=!0}}),{dragState:s}}const wt=pe({name:"ElTreeNode",components:{ElCollapseTransition:mt,ElCheckbox:Ae,NodeContent:Et,ElIcon:qe,Loading:Pe},props:{node:{type:X,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const n=le("tree"),{broadcastExpanded:o}=Be(t),a=ne("RootTree"),d=_(!1),s=_(!1),l=_(null),m=_(null),v=_(null),p=ne($e),h=Te();re("NodeInstance",h),t.node.expanded&&(d.value=!0,s.value=!0);const i=a.props.props.children||"children";z(()=>{const g=t.node.data[i];return g&&[...g]},()=>{t.node.updateChildren()}),z(()=>t.node.indeterminate,g=>{f(t.node.checked,g)}),z(()=>t.node.checked,g=>{f(g,t.node.indeterminate)}),z(()=>t.node.childNodes.length,()=>t.node.reInitChecked()),z(()=>t.node.expanded,g=>{xe(()=>d.value=g),g&&(s.value=!0)});const N=g=>we(a.props.nodeKey,g.data),E=g=>{const K=t.props.class;if(!K)return{};let x;if(Ue(K)){const{data:V}=g;x=K(V,g)}else x=K;return Re(x)?{[x]:!0}:x},f=(g,K)=>{(l.value!==g||m.value!==K)&&a.ctx.emit("check-change",t.node.data,g,K),l.value=g,m.value=K},S=g=>{be(a.store,a.ctx.emit,()=>a.store.value.setCurrentNode(t.node)),a.currentNode.value=t.node,a.props.expandOnClickNode&&O(),a.props.checkOnClickNode&&!t.node.disabled&&P(null,{target:{checked:!t.node.checked}}),a.ctx.emit("node-click",t.node.data,t.node,h,g)},I=g=>{a.instance.vnode.props.onNodeContextmenu&&(g.stopPropagation(),g.preventDefault()),a.ctx.emit("node-contextmenu",g,t.node.data,t.node,h)},O=()=>{t.node.isLeaf||(d.value?(a.ctx.emit("node-collapse",t.node.data,t.node,h),t.node.collapse()):(t.node.expand(),e.emit("node-expand",t.node.data,t.node,h)))},P=(g,K)=>{t.node.setChecked(K.target.checked,!a.props.checkStrictly),xe(()=>{const x=a.store.value;a.ctx.emit("check",t.node.data,{checkedNodes:x.getCheckedNodes(),checkedKeys:x.getCheckedKeys(),halfCheckedNodes:x.getHalfCheckedNodes(),halfCheckedKeys:x.getHalfCheckedKeys()})})};return{ns:n,node$:v,tree:a,expanded:d,childNodeRendered:s,oldChecked:l,oldIndeterminate:m,getNodeKey:N,getNodeClass:E,handleSelectChange:f,handleClick:S,handleContextMenu:I,handleExpandIconClick:O,handleCheckChange:P,handleChildNodeExpand:(g,K,x)=>{o(K),a.ctx.emit("node-expand",g,K,x)},handleDragStart:g=>{a.props.draggable&&p.treeNodeDragStart({event:g,treeNode:t})},handleDragOver:g=>{g.preventDefault(),a.props.draggable&&p.treeNodeDragOver({event:g,treeNode:{$el:v.value,node:t.node}})},handleDrop:g=>{g.preventDefault()},handleDragEnd:g=>{a.props.draggable&&p.treeNodeDragEnd(g)},CaretRight:Ve}}}),Kt=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],xt=["aria-expanded"];function St(t,e,n,o,a,d){const s=Q("el-icon"),l=Q("el-checkbox"),m=Q("loading"),v=Q("node-content"),p=Q("el-tree-node"),h=Q("el-collapse-transition");return ve((w(),j("div",{ref:"node$",class:R([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:e[1]||(e[1]=G((...i)=>t.handleClick&&t.handleClick(...i),["stop"])),onContextmenu:e[2]||(e[2]=(...i)=>t.handleContextMenu&&t.handleContextMenu(...i)),onDragstart:e[3]||(e[3]=G((...i)=>t.handleDragStart&&t.handleDragStart(...i),["stop"])),onDragover:e[4]||(e[4]=G((...i)=>t.handleDragOver&&t.handleDragOver(...i),["stop"])),onDragend:e[5]||(e[5]=G((...i)=>t.handleDragEnd&&t.handleDragEnd(...i),["stop"])),onDrop:e[6]||(e[6]=G((...i)=>t.handleDrop&&t.handleDrop(...i),["stop"]))},[$("div",{class:R(t.ns.be("node","content")),style:je({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(w(),A(s,{key:0,class:R([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:G(t.handleExpandIconClick,["stop"])},{default:D(()=>[(w(),A(Fe(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):L("v-if",!0),t.showCheckbox?(w(),A(l,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:e[0]||(e[0]=G(()=>{},["stop"])),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):L("v-if",!0),t.node.loading?(w(),A(s,{key:2,class:R([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:D(()=>[k(m)]),_:1},8,["class"])):L("v-if",!0),k(v,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),k(h,null,{default:D(()=>[!t.renderAfterExpand||t.childNodeRendered?ve((w(),j("div",{key:0,class:R(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(w(!0),j(se,null,fe(t.node.childNodes,i=>(w(),A(p,{key:t.getNodeKey(i),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:i,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,xt)),[[Ce,t.expanded]]):L("v-if",!0)]),_:1})],42,Kt)),[[Ce,t.node.visible]])}var _t=De(wt,[["render",St],["__file","tree-node.vue"]]);function It({el$:t},e){const n=le("tree"),o=Se([]),a=Se([]);He(()=>{s()}),We(()=>{o.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),a.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),z(a,l=>{l.forEach(m=>{m.setAttribute("tabindex","-1")})}),Ye(t,"keydown",l=>{const m=l.target;if(!m.className.includes(n.b("node")))return;const v=l.code;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const p=o.value.indexOf(m);let h;if([J.up,J.down].includes(v)){if(l.preventDefault(),v===J.up){h=p===-1?0:p!==0?p-1:o.value.length-1;const N=h;for(;!e.value.getNode(o.value[h].dataset.key).canFocus;){if(h--,h===N){h=-1;break}h<0&&(h=o.value.length-1)}}else{h=p===-1?0:p<o.value.length-1?p+1:0;const N=h;for(;!e.value.getNode(o.value[h].dataset.key).canFocus;){if(h++,h===N){h=-1;break}h>=o.value.length&&(h=0)}}h!==-1&&o.value[h].focus()}[J.left,J.right].includes(v)&&(l.preventDefault(),m.click());const i=m.querySelector('[type="checkbox"]');[J.enter,J.space].includes(v)&&i&&(l.preventDefault(),i.click())});const s=()=>{var l;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),a.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const m=t.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);if(m.length){m[0].setAttribute("tabindex","0");return}(l=o.value[0])==null||l.setAttribute("tabindex","0")}}const Tt=pe({name:"ElTree",components:{ElTreeNode:_t},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:Ge}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:n}=Je(),o=le("tree"),a=ne(at,null),d=_(new Ct({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));d.value.initialize();const s=_(d.value.root),l=_(null),m=_(null),v=_(null),{broadcastExpanded:p}=Be(t),{dragState:h}=Dt({props:t,ctx:e,el$:m,dropIndicator$:v,store:d});It({el$:m},d);const i=Qe(()=>{const{childNodes:u}=s.value,b=a?a.hasFilteredOptions!==0:!1;return(!u||u.length===0||u.every(({visible:F})=>!F))&&!b});z(()=>t.currentNodeKey,u=>{d.value.setCurrentNodeKey(u)}),z(()=>t.defaultCheckedKeys,u=>{d.value.setDefaultCheckedKey(u)}),z(()=>t.defaultExpandedKeys,u=>{d.value.setDefaultExpandedKeys(u)}),z(()=>t.data,u=>{d.value.setData(u)},{deep:!0}),z(()=>t.checkStrictly,u=>{d.value.checkStrictly=u});const N=u=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");d.value.filter(u)},E=u=>we(t.nodeKey,u.data),f=u=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const b=d.value.getNode(u);if(!b)return[];const F=[b.data];let W=b.parent;for(;W&&W!==s.value;)F.push(W.data),W=W.parent;return F.reverse()},S=(u,b)=>d.value.getCheckedNodes(u,b),I=u=>d.value.getCheckedKeys(u),O=()=>{const u=d.value.getCurrentNode();return u?u.data:null},P=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const u=O();return u?u[t.nodeKey]:null},T=(u,b)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");d.value.setCheckedNodes(u,b)},c=(u,b)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");d.value.setCheckedKeys(u,b)},r=(u,b,F)=>{d.value.setChecked(u,b,F)},C=()=>d.value.getHalfCheckedNodes(),q=()=>d.value.getHalfCheckedKeys(),g=(u,b=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");be(d,e.emit,()=>d.value.setUserCurrentNode(u,b))},K=(u,b=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");be(d,e.emit,()=>d.value.setCurrentNodeKey(u,b))},x=u=>d.value.getNode(u),V=u=>{d.value.remove(u)},B=(u,b)=>{d.value.append(u,b)},Z=(u,b)=>{d.value.insertBefore(u,b)},ge=(u,b)=>{d.value.insertAfter(u,b)},ee=(u,b,F)=>{p(b),e.emit("node-expand",u,b,F)},H=(u,b)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");d.value.updateChildren(u,b)};return re("RootTree",{ctx:e,props:t,store:d,root:s,currentNode:l,instance:Te()}),re(yt,void 0),{ns:o,store:d,root:s,currentNode:l,dragState:h,el$:m,dropIndicator$:v,isEmpty:i,filter:N,getNodeKey:E,getNodePath:f,getCheckedNodes:S,getCheckedKeys:I,getCurrentNode:O,getCurrentKey:P,setCheckedNodes:T,setCheckedKeys:c,setChecked:r,getHalfCheckedNodes:C,getHalfCheckedKeys:q,setCurrentNode:g,setCurrentKey:K,t:n,getNode:x,remove:V,append:B,insertBefore:Z,insertAfter:ge,handleNodeExpand:ee,updateKeyChildren:H}}});function At(t,e,n,o,a,d){const s=Q("el-tree-node");return w(),j("div",{ref:"el$",class:R([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(w(!0),j(se,null,fe(t.root.childNodes,l=>(w(),A(s,{key:t.getNodeKey(l),node:l,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(w(),j("div",{key:0,class:R(t.ns.e("empty-block"))},[Ie(t.$slots,"empty",{},()=>{var l;return[$("span",{class:R(t.ns.e("empty-text"))},ue((l=t.emptyText)!=null?l:t.t("el.tree.emptyText")),3)]})],2)):L("v-if",!0),ve($("div",{ref:"dropIndicator$",class:R(t.ns.e("drop-indicator"))},null,2),[[Ce,t.dragState.showDropIndicator]])],2)}var he=De(Tt,[["render",At],["__file","tree.vue"]]);he.install=t=>{t.component(he.name,he)};const Bt=he,$t=Bt,Lt=t=>(Ze("data-v-672bda50"),t=t(),et(),t),Ot={class:"org-main"},Mt={class:"content"},zt={class:"l"},qt={style:{"margin-bottom":"20px"}},Pt={class:"tree-item"},Vt={class:"r"},Ft={class:"s-table-operations"},jt=Lt(()=>$("img",{style:{width:"17px"},src:ut,alt:""},null,-1)),Ut={class:"s-flex-auto",style:{"min-height":"0"}},Rt={class:"s-table-pagination"},Ht=pe({__name:"Org",setup(t){const e=Ne({page:1,perPage:20}),n=_(0);_({}),_([]);const o=_([]),a=_([]),d=_([]),s=_(null),l=_(0);_([]);const m=()=>{ie.getList().then(c=>{c.code===0&&(o.value=c.data,l.value=c.data[0].id)})},v=()=>{oe.getList({departmentId:l.value,...e}).then(c=>{c.code===0&&(d.value=c.data.data,n.value=c.data.total)})};Xe.getList().then(c=>{c.code===0&&(a.value=c.data)});const p=c=>{ae.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{ie.del({id:c}).then(r=>{r.code===0?(M.success("删除成功"),m()):M.error(r.msg)})}).catch(()=>{})},h=c=>{ae.prompt("部门名称","新增部门",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(({value:r})=>{console.log(r),ie.add({name:r,pid:c}).then(C=>{C.code===0?(M.success("新增成功"),m()):M.error(C.msg)})}).catch(()=>{})},i=c=>{ae.prompt("部门名称","编辑部门",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:c.name}).then(({value:r})=>{console.log(r),ie.edit({id:c.id,name:r}).then(C=>{C.code===0?(M.success("编辑成功"),m()):M.error(C.msg)})}).catch(()=>{})},N=c=>{ae.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{oe.del({id:c}).then(r=>{r.code===0?(M.success("删除成功"),m()):M.error(r.msg)})}).catch(()=>{})},E=(c,r)=>{ae.confirm(`确定${r===1?"启用":"停用"}该账号？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{oe.setStatus({id:c,status:r}).then(C=>{C.code===0?(M.success(`账号${r===1?"启用":"停用"}成功`),v()):M.error(C.msg)})}).catch(()=>{})},f=Ne({show:!1,isEdit:!1,data:{account:"",password:"",departmentId:"",roleId:"",phone:"",email:""},set:c=>{f.show=!0,c?(f.isEdit=!0,f.data={id:c.id,account:c.account,password:c.password,departmentId:S(c.departmentId),roleId:c.roleId,phone:c.phone,email:c.email}):(f.isEdit=!1,f.data={account:"",password:"",departmentId:"",roleId:"",phone:"",email:""})},sub:()=>{let c=f.isEdit?oe.edit:oe.add,r={...f.data};r.departmentId=r.departmentId[r.departmentId.length-1],c(r).then(C=>{C.code===0?(M.success(f.isEdit?"修改成功":"新增成功"),f.show=!1,v()):M.error(C.msg)})}}),S=c=>{let r=[],C=o.value,q=[];const g=(K,x)=>{for(let V=0;V<K.length;V++){let B=K[V],Z=K[V].id;if(r[x]=Z,c===Z)return q=r.slice(0,x+1),r;B.child.length>0&&g(B.child,x+1)}};return g(C,0),q};z(l,()=>{v()}),m();const I=_([]),O=_([]),P=()=>{setTimeout(()=>{let c=[];s.value.columns.forEach(r=>{r.label&&c.push(r.label)}),O.value=c.join(",").split(","),I.value=c.join(",").split(",")},0)},T=c=>I.value.length===0&&O.value.length===0?!0:I.value.includes(c);return P(),(c,r)=>{const C=gt,q=pt,g=$t,K=Ae,x=lt,V=it,B=ft,Z=ht,ge=ct,ee=kt,H=nt,u=rt,b=dt,F=st,W=ot,Le=tt;return w(),j(se,null,[$("div",Ot,[$("div",Mt,[$("div",zt,[$("div",qt,[k(C,{type:"primary",icon:"Plus",onClick:r[0]||(r[0]=y=>h(0))},{default:D(()=>[U("新增部门")]),_:1})]),k(g,{style:{"max-width":"300px"},"default-expand-all":"",data:o.value,"node-key":"id",props:{children:"child",label:"name"}},{default:D(({node:y,data:Y})=>[$("span",Pt,[k(q,{class:"tree-item-label",onClick:me=>l.value=Y.id},{default:D(()=>[U(ue(y.label),1)]),_:2},1032,["onClick"]),k(C,{link:"",icon:"Plus",onClick:me=>h(Y.id)},null,8,["onClick"]),k(C,{link:"",icon:"Edit",onClick:me=>i(Y)},null,8,["onClick"]),k(C,{link:"",icon:"Delete",onClick:me=>p(Y.id)},null,8,["onClick"])])]),_:1},8,["data"])]),$("div",Vt,[$("div",Ft,[k(C,{onClick:r[1]||(r[1]=y=>f.set())},{default:D(()=>[U("新增员工")]),_:1}),k(V,{placement:"bottom-end",trigger:"click"},{reference:D(()=>[k(C,{size:"",link:""},{default:D(()=>[jt]),_:1})]),default:D(()=>[k(x,{modelValue:I.value,"onUpdate:modelValue":r[2]||(r[2]=y=>I.value=y)},{default:D(()=>[$("ul",null,[(w(!0),j(se,null,fe(O.value,y=>(w(),j("li",{class:"s-checkbox_item",key:y},[k(K,{label:y,value:y},{default:D(()=>[U(ue(y),1)]),_:2},1032,["label","value"])]))),128))])]),_:1},8,["modelValue"])]),_:1})]),$("div",Ut,[k(Z,{ref_key:"tableRef",ref:s,data:d.value,border:"","table-layout":"fixed",height:"100%","header-row-class-name":"s-table-header"},{default:D(()=>[T("登录名")?(w(),A(B,{key:0,prop:"account",label:"登录名"})):L("",!0),T("部门")?(w(),A(B,{key:1,prop:"department",label:"部门"})):L("",!0),T("系统角色")?(w(),A(B,{key:2,prop:"role",label:"系统角色","min-width":"120"})):L("",!0),T("手机")?(w(),A(B,{key:3,prop:"phone",label:"手机"})):L("",!0),T("邮箱")?(w(),A(B,{key:4,prop:"email",label:"邮箱"})):L("",!0),T("密码")?(w(),A(B,{key:5,prop:"password",label:"密码"})):L("",!0),T("添加时间")?(w(),A(B,{key:6,prop:"creatTime",label:"添加时间","min-width":"120"})):L("",!0),T("登录时间")?(w(),A(B,{key:7,prop:"loginTime",label:"登录时间","min-width":"120"})):L("",!0),T("操作")?(w(),A(B,{key:8,label:"操作",fixed:"right",width:"150"},{default:D(y=>[k(C,{link:"",type:"primary",onClick:Y=>f.set(y.row)},{default:D(()=>[U("编辑")]),_:2},1032,["onClick"]),k(C,{link:"",type:"primary",onClick:Y=>E(y.row.id,y.row.status===1?0:1)},{default:D(()=>[U(ue(y.row.status===1?"停用":"启用"),1)]),_:2},1032,["onClick"]),k(C,{link:"",type:"danger",onClick:Y=>N(y.row.id)},{default:D(()=>[U("删除")]),_:2},1032,["onClick"])]),_:1})):L("",!0)]),_:1},8,["data"])]),$("div",Rt,[k(ge,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50,100],total:n.value,"current-page":e.page,"onUpdate:currentPage":r[3]||(r[3]=y=>e.page=y),"page-size":e.perPage,"onUpdate:pageSize":r[4]||(r[4]=y=>e.perPage=y),onChange:m},null,8,["total","current-page","page-size"])])])])]),k(Le,{title:f.data.id?"编辑":"新增员工",modelValue:f.show,"onUpdate:modelValue":r[12]||(r[12]=y=>f.show=y),width:"500",draggable:""},{footer:D(()=>[k(C,{onClick:r[11]||(r[11]=y=>f.show=!1)},{default:D(()=>[U("取消")]),_:1}),k(C,{type:"primary",onClick:f.sub},{default:D(()=>[U("确定")]),_:1},8,["onClick"])]),default:D(()=>[k(W,{model:f.data,"label-width":"auto","label-position":"left"},{default:D(()=>[k(H,{label:"登录名",required:""},{default:D(()=>[k(ee,{modelValue:f.data.account,"onUpdate:modelValue":r[5]||(r[5]=y=>f.data.account=y),placeholder:"请输入登录名"},null,8,["modelValue"])]),_:1}),k(H,{label:"密码",required:""},{default:D(()=>[k(ee,{modelValue:f.data.password,"onUpdate:modelValue":r[6]||(r[6]=y=>f.data.password=y),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),k(H,{label:"部门",required:""},{default:D(()=>[k(u,{modelValue:f.data.departmentId,"onUpdate:modelValue":r[7]||(r[7]=y=>f.data.departmentId=y),options:o.value,props:{value:"id",label:"name",children:"child",checkStrictly:!0},style:{width:"100%"}},null,8,["modelValue","options"])]),_:1}),k(H,{label:"系统角色",required:""},{default:D(()=>[k(F,{modelValue:f.data.roleId,"onUpdate:modelValue":r[8]||(r[8]=y=>f.data.roleId=y)},{default:D(()=>[(w(!0),j(se,null,fe(a.value,y=>(w(),A(b,{key:y.id,label:y.name,value:y.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),k(H,{label:"手机",required:""},{default:D(()=>[k(ee,{modelValue:f.data.phone,"onUpdate:modelValue":r[9]||(r[9]=y=>f.data.phone=y),placeholder:"请输入手机"},null,8,["modelValue"])]),_:1}),k(H,{label:"邮箱",required:""},{default:D(()=>[k(ee,{modelValue:f.data.email,"onUpdate:modelValue":r[10]||(r[10]=y=>f.data.email=y),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])],64)}}}),$n=Nt(Ht,[["__scopeId","data-v-672bda50"]]);export{$n as default};