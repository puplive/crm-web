import{a0 as fe,s as pe,J as Ae,bJ as Be,d as le,a as ae,k as Y,z as Ee,r as xe,v as oe,l as x,aa as $e,t as B,L as De,c8 as Le,N as j,B as ge,C as me,o as I,b as F,O as A,h as U,i as D,a9 as _e,n as O,a6 as V,a3 as te,R as y,f as Oe,F as ie,U as Ce,D as Se,aH as Me,A as ze,_ as we,x as Pe,ad as Fe,a1 as Ve,c as qe,Q as ye,P}from"./index-C4ZHMdsf.js";import{E as je}from"./el-dialog-DT0Vm4yd.js";/* empty css                   */import{E as Ue,a as Re}from"./el-form-item-7bO4EAtk.js";/* empty css                 */import"./el-tag-CHBC5oVH.js";import{s as He,E as Je,a as We}from"./el-select-BAI-bRYo.js";import"./el-scrollbar-DK_tWI4B.js";import"./el-popper-B443bNNp.js";import{E as Ye}from"./el-cascader-panel-DSeFm9_7.js";import{E as Qe}from"./el-checkbox-CDkq_TX-.js";import"./el-radio-DND-9TzI.js";import{E as Ge}from"./el-pagination-Px-iAm1m.js";import{E as Xe,a as Ze}from"./el-table-column-CZpklB2W.js";import"./el-tooltip-l0sNRNKZ.js";import{E as et}from"./el-link-DjKNuL99.js";/* empty css                  */import{c as tt,o as de,d as Z}from"./index-DED89qRE.js";/* empty css                       *//* empty css                   */import{E as ee}from"./index-p2j87hdZ.js";import{E as q,a as T}from"./request-dKwP9640.js";import{E as nt}from"./index-Lvg0anao.js";import{_ as ot}from"./index-Cr9N7bLn.js";import{_ as ve,r as he,a as at,E as dt,d as st,i as rt}from"./index-CZ7niqPb.js";import{h as it}from"./use-form-item-D6oge9Wn.js";import{E as lt}from"./index-CYs0fHQD.js";import{_ as ct}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BRWKrWXD.js";import"./scroll-DR2mTp8M.js";import"./vnode-URQtSuPv.js";import"./refs-Cyz4nhRV.js";import"./event-BB_Ol6Sd.js";import"./castArray-Q0VEGTvx.js";import"./_baseClone-BkNg7ClW.js";import"./_initCloneObject-D0-Iyl8Y.js";import"./isEqual-CXVvUB-S.js";import"./aria-KgdLjl5h.js";import"./arrays-6TrVLtTe.js";import"./cloneDeep-BWHYeVvH.js";import"./isArrayLikeObject-DD89v4wE.js";import"./validator-CSHokMzt.js";const W="$treeNodeId",Ke=function(t,e){!e||e[W]||Object.defineProperty(e,W,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},be=function(t,e){return t?e[t]:e[W]},Ne=(t,e,n)=>{const o=t.value.currentNode;n();const a=t.value.currentNode;o!==a&&e("current-change",a?a.data:null,a)},ke=t=>{let e=!0,n=!0,o=!0;for(let a=0,d=t.length;a<d;a++){const s=t[a];(s.checked!==!0||s.indeterminate)&&(e=!1,s.disabled||(o=!1)),(s.checked!==!1||s.indeterminate)&&(n=!1)}return{all:e,none:n,allWithoutDisable:o,half:!e&&!n}},ne=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:n,half:o}=ke(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):o?(t.checked=!1,t.indeterminate=!0):n&&(t.checked=!1,t.indeterminate=!1);const a=t.parent;!a||a.level===0||t.store.checkStrictly||ne(a)},se=function(t,e){const n=t.store.props,o=t.data||{},a=n[e];if(typeof a=="function")return a(o,t);if(typeof a=="string")return o[a];if(typeof a>"u"){const d=o[e];return d===void 0?"":d}};let ut=0;class R{constructor(e){this.id=ut++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const n in e)fe(e,n)&&(this[n]=e[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const n=e.props;if(n&&typeof n.isLeaf<"u"){const d=se(this,"isLeaf");typeof d=="boolean"&&(this.isLeafByUser=d)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||Ke(this,this.data),!this.data)return;const o=e.defaultExpandedKeys,a=e.key;a&&o&&o.includes(this.key)&&this.expand(null,e.autoExpandParent),a&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||Ke(this,e),this.data=e,this.childNodes=[];let n;this.level===0&&Array.isArray(this.data)?n=this.data:n=se(this,"children")||[];for(let o=0,a=n.length;o<a;o++)this.insertChild({data:n[o]})}get label(){return se(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return se(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return e.childNodes[n+1]}return null}get previousSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return n>0?e.childNodes[n-1]:null}return null}contains(e,n=!0){return(this.childNodes||[]).some(o=>o===e||n&&o.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,n,o){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof R)){if(!o){const a=this.getChildren(!0);a.includes(e.data)||(typeof n>"u"||n<0?a.push(e.data):a.splice(n,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=pe(new R(e)),e instanceof R&&e.initialize()}e.level=this.level+1,typeof n>"u"||n<0?this.childNodes.push(e):this.childNodes.splice(n,0,e),this.updateLeafState()}insertBefore(e,n){let o;n&&(o=this.childNodes.indexOf(n)),this.insertChild(e,o)}insertAfter(e,n){let o;n&&(o=this.childNodes.indexOf(n),o!==-1&&(o+=1)),this.insertChild(e,o)}removeChild(e){const n=this.getChildren()||[],o=n.indexOf(e.data);o>-1&&n.splice(o,1);const a=this.childNodes.indexOf(e);a>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(a,1)),this.updateLeafState()}removeChildByData(e){let n=null;for(let o=0;o<this.childNodes.length;o++)if(this.childNodes[o].data===e){n=this.childNodes[o];break}n&&this.removeChild(n)}expand(e,n){const o=()=>{if(n){let a=this.parent;for(;a.level>0;)a.expanded=!0,a=a.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(a=>{a.canFocus=!0})};this.shouldLoadData()?this.loadData(a=>{Array.isArray(a)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||ne(this),o())}):o()}doCreateChildren(e,n={}){e.forEach(o=>{this.insertChild(Object.assign({data:o},n),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,n,o,a){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:s,allWithoutDisable:r}=ke(this.childNodes);!this.isLeaf&&!s&&r&&(this.checked=!1,e=!1);const m=()=>{if(n){const C=this.childNodes;for(let i=0,k=C.length;i<k;i++){const b=C[i];a=a||e!==!1;const p=b.disabled?b.checked:a;b.setChecked(p,n,!0,a)}const{half:f,all:h}=ke(C);h||(this.checked=h,this.indeterminate=f)}};if(this.shouldLoadData()){this.loadData(()=>{m(),ne(this)},{checked:e!==!1});return}else m()}const d=this.parent;!d||d.level===0||o||ne(d)}getChildren(e=!1){if(this.level===0)return this.data;const n=this.data;if(!n)return null;const o=this.store.props;let a="children";return o&&(a=o.children||"children"),n[a]===void 0&&(n[a]=null),e&&!n[a]&&(n[a]=[]),n[a]}updateChildren(){const e=this.getChildren()||[],n=this.childNodes.map(d=>d.data),o={},a=[];e.forEach((d,s)=>{const r=d[W];!!r&&n.findIndex(C=>C[W]===r)>=0?o[r]={index:s,data:d}:a.push({index:s,data:d})}),this.store.lazy||n.forEach(d=>{o[d[W]]||this.removeChildByData(d)}),a.forEach(({index:d,data:s})=>{this.insertChild({data:s},d)}),this.updateLeafState()}loadData(e,n={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(n).length)){this.loading=!0;const o=d=>{this.childNodes=[],this.doCreateChildren(d,n),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,d)},a=()=>{this.loading=!1};this.store.load(this,o,a)}else e&&e.call(this)}eachNode(e){const n=[this];for(;n.length;){const o=n.shift();n.unshift(...o.childNodes),e(o)}}reInitChecked(){this.store.checkStrictly||ne(this)}}class ht{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const n in e)fe(e,n)&&(this[n]=e[n]);this.nodesMap={}}initialize(){if(this.root=new R({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,n=>{this.root.doCreateChildren(n),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const n=this.filterNodeMethod,o=this.lazy,a=function(d){const s=d.root?d.root.childNodes:d.childNodes;if(s.forEach(r=>{r.visible=n.call(r,e,r.data,r),a(r)}),!d.visible&&s.length){let r=!0;r=!s.some(m=>m.visible),d.root?d.root.visible=r===!1:d.visible=r===!1}e&&d.visible&&!d.isLeaf&&(!o||d.loaded)&&d.expand()};a(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof R)return e;const n=Ae(e)?be(this.key,e):e;return this.nodesMap[n]||null}insertBefore(e,n){const o=this.getNode(n);o.parent.insertBefore({data:e},o)}insertAfter(e,n){const o=this.getNode(n);o.parent.insertAfter({data:e},o)}remove(e){const n=this.getNode(e);n&&n.parent&&(n===this.currentNode&&(this.currentNode=null),n.parent.removeChild(n))}append(e,n){const o=Be(n)?this.root:this.getNode(n);o&&o.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],n=this.nodesMap;e.forEach(o=>{const a=n[o];a&&a.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const n=this.key;!e||!e.data||(n?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(o=>{this.deregisterNode(o)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,n=!1){const o=[],a=function(d){(d.root?d.root.childNodes:d.childNodes).forEach(r=>{(r.checked||n&&r.indeterminate)&&(!e||e&&r.isLeaf)&&o.push(r.data),a(r)})};return a(this),o}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(n=>(n||{})[this.key])}getHalfCheckedNodes(){const e=[],n=function(o){(o.root?o.root.childNodes:o.childNodes).forEach(d=>{d.indeterminate&&e.push(d.data),n(d)})};return n(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],n=this.nodesMap;for(const o in n)fe(n,o)&&e.push(n[o]);return e}updateChildren(e,n){const o=this.nodesMap[e];if(!o)return;const a=o.childNodes;for(let d=a.length-1;d>=0;d--){const s=a[d];this.remove(s.data)}for(let d=0,s=n.length;d<s;d++){const r=n[d];this.append(r,o.data)}}_setCheckedKeys(e,n=!1,o){const a=this._getAllNodes().sort((m,C)=>m.level-C.level),d=Object.create(null),s=Object.keys(o);a.forEach(m=>m.setChecked(!1,!1));const r=m=>{m.childNodes.forEach(C=>{var f;d[C.data[e]]=!0,(f=C.childNodes)!=null&&f.length&&r(C)})};for(let m=0,C=a.length;m<C;m++){const f=a[m],h=f.data[e].toString();if(!s.includes(h)){f.checked&&!d[h]&&f.setChecked(!1,!1);continue}if(f.childNodes.length&&r(f),f.isLeaf||this.checkStrictly){f.setChecked(!0,!1);continue}if(f.setChecked(!0,!0),n){f.setChecked(!1,!1);const k=function(b){b.childNodes.forEach(c=>{c.isLeaf||c.setChecked(!1,!1),k(c)})};k(f)}}}setCheckedNodes(e,n=!1){const o=this.key,a={};e.forEach(d=>{a[(d||{})[o]]=!0}),this._setCheckedKeys(o,n,a)}setCheckedKeys(e,n=!1){this.defaultCheckedKeys=e;const o=this.key,a={};e.forEach(d=>{a[d]=!0}),this._setCheckedKeys(o,n,a)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(n=>{const o=this.getNode(n);o&&o.expand(null,this.autoExpandParent)})}setChecked(e,n,o){const a=this.getNode(e);a&&a.setChecked(!!n,o)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const n=this.currentNode;n&&(n.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,n=!0){const o=e[this.key],a=this.nodesMap[o];this.setCurrentNode(a),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,n=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const o=this.getNode(e);o&&(this.setCurrentNode(o),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const ft=le({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=ae("tree"),n=Y("NodeInstance"),o=Y("RootTree");return()=>{const a=t.node,{data:d,store:s}=a;return t.renderContent?t.renderContent(Ee,{_self:n,node:a,data:d,store:s}):xe(o.ctx.slots,"default",{node:a,data:d},()=>[Ee("span",{class:e.be("node","label")},[a.label])])}}});var pt=ve(ft,[["__file","tree-node-content.vue"]]);function Ie(t){const e=Y("TreeNodeMap",null),n={treeNodeExpand:o=>{t.node!==o&&t.node.collapse()},children:[]};return e&&e.children.push(n),oe("TreeNodeMap",n),{broadcastExpanded:o=>{if(t.accordion)for(const a of n.children)a.treeNodeExpand(o)}}}const Te=Symbol("dragEvents");function gt({props:t,ctx:e,el$:n,dropIndicator$:o,store:a}){const d=ae("tree"),s=x({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return oe(Te,{treeNodeDragStart:({event:f,treeNode:h})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(h.node))return f.preventDefault(),!1;f.dataTransfer.effectAllowed="move";try{f.dataTransfer.setData("text/plain","")}catch{}s.value.draggingNode=h,e.emit("node-drag-start",h.node,f)},treeNodeDragOver:({event:f,treeNode:h})=>{const i=h,k=s.value.dropNode;k&&k.node.id!==i.node.id&&he(k.$el,d.is("drop-inner"));const b=s.value.draggingNode;if(!b||!i)return;let p=!0,c=!0,l=!0,v=!0;typeof t.allowDrop=="function"&&(p=t.allowDrop(b.node,i.node,"prev"),v=c=t.allowDrop(b.node,i.node,"inner"),l=t.allowDrop(b.node,i.node,"next")),f.dataTransfer.dropEffect=c||p||l?"move":"none",(p||c||l)&&(k==null?void 0:k.node.id)!==i.node.id&&(k&&e.emit("node-drag-leave",b.node,k.node,f),e.emit("node-drag-enter",b.node,i.node,f)),p||c||l?s.value.dropNode=i:s.value.dropNode=null,i.node.nextSibling===b.node&&(l=!1),i.node.previousSibling===b.node&&(p=!1),i.node.contains(b.node,!1)&&(c=!1),(b.node===i.node||b.node.contains(i.node))&&(p=!1,c=!1,l=!1);const L=i.$el.querySelector(`.${d.be("node","content")}`).getBoundingClientRect(),M=n.value.getBoundingClientRect();let w;const H=p?c?.25:l?.45:1:-1,J=l?c?.75:p?.55:0:1;let $=-9999;const g=f.clientY-L.top;g<L.height*H?w="before":g>L.height*J?w="after":c?w="inner":w="none";const K=i.$el.querySelector(`.${d.be("node","expand-icon")}`).getBoundingClientRect(),S=o.value;w==="before"?$=K.top-M.top:w==="after"&&($=K.bottom-M.top),S.style.top=`${$}px`,S.style.left=`${K.right-M.left}px`,w==="inner"?at(i.$el,d.is("drop-inner")):he(i.$el,d.is("drop-inner")),s.value.showDropIndicator=w==="before"||w==="after",s.value.allowDrop=s.value.showDropIndicator||v,s.value.dropType=w,e.emit("node-drag-over",b.node,i.node,f)},treeNodeDragEnd:f=>{const{draggingNode:h,dropType:i,dropNode:k}=s.value;if(f.preventDefault(),f.dataTransfer.dropEffect="move",h&&k){const b={data:h.node.data};i!=="none"&&h.node.remove(),i==="before"?k.node.parent.insertBefore(b,k.node):i==="after"?k.node.parent.insertAfter(b,k.node):i==="inner"&&k.node.insertChild(b),i!=="none"&&(a.value.registerNode(b),a.value.key&&h.node.eachNode(p=>{var c;(c=a.value.nodesMap[p.data[a.value.key]])==null||c.setChecked(p.checked,!a.value.checkStrictly)})),he(k.$el,d.is("drop-inner")),e.emit("node-drag-end",h.node,k.node,i,f),i!=="none"&&e.emit("node-drop",h.node,k.node,i,f)}h&&!k&&e.emit("node-drag-end",h.node,null,i,f),s.value.showDropIndicator=!1,s.value.draggingNode=null,s.value.dropNode=null,s.value.allowDrop=!0}}),{dragState:s}}const mt=le({name:"ElTreeNode",components:{ElCollapseTransition:ot,ElCheckbox:Qe,NodeContent:pt,ElIcon:dt,Loading:$e},props:{node:{type:R,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const n=ae("tree"),{broadcastExpanded:o}=Ie(t),a=Y("RootTree"),d=x(!1),s=x(!1),r=x(null),m=x(null),C=x(null),f=Y(Te),h=Se();oe("NodeInstance",h),t.node.expanded&&(d.value=!0,s.value=!0);const i=a.props.props.children||"children";B(()=>{const g=t.node.data[i];return g&&[...g]},()=>{t.node.updateChildren()}),B(()=>t.node.indeterminate,g=>{p(t.node.checked,g)}),B(()=>t.node.checked,g=>{p(g,t.node.indeterminate)}),B(()=>t.node.childNodes.length,()=>t.node.reInitChecked()),B(()=>t.node.expanded,g=>{De(()=>d.value=g),g&&(s.value=!0)});const k=g=>be(a.props.nodeKey,g.data),b=g=>{const K=t.props.class;if(!K)return{};let S;if(Me(K)){const{data:Q}=g;S=K(Q,g)}else S=K;return ze(S)?{[S]:!0}:S},p=(g,K)=>{(r.value!==g||m.value!==K)&&a.ctx.emit("check-change",t.node.data,g,K),r.value=g,m.value=K},c=g=>{Ne(a.store,a.ctx.emit,()=>a.store.value.setCurrentNode(t.node)),a.currentNode.value=t.node,a.props.expandOnClickNode&&v(),a.props.checkOnClickNode&&!t.node.disabled&&L(null,{target:{checked:!t.node.checked}}),a.ctx.emit("node-click",t.node.data,t.node,h,g)},l=g=>{a.instance.vnode.props.onNodeContextmenu&&(g.stopPropagation(),g.preventDefault()),a.ctx.emit("node-contextmenu",g,t.node.data,t.node,h)},v=()=>{t.node.isLeaf||(d.value?(a.ctx.emit("node-collapse",t.node.data,t.node,h),t.node.collapse()):(t.node.expand(),e.emit("node-expand",t.node.data,t.node,h)))},L=(g,K)=>{t.node.setChecked(K.target.checked,!a.props.checkStrictly),De(()=>{const S=a.store.value;a.ctx.emit("check",t.node.data,{checkedNodes:S.getCheckedNodes(),checkedKeys:S.getCheckedKeys(),halfCheckedNodes:S.getHalfCheckedNodes(),halfCheckedKeys:S.getHalfCheckedKeys()})})};return{ns:n,node$:C,tree:a,expanded:d,childNodeRendered:s,oldChecked:r,oldIndeterminate:m,getNodeKey:k,getNodeClass:b,handleSelectChange:p,handleClick:c,handleContextMenu:l,handleExpandIconClick:v,handleCheckChange:L,handleChildNodeExpand:(g,K,S)=>{o(K),a.ctx.emit("node-expand",g,K,S)},handleDragStart:g=>{a.props.draggable&&f.treeNodeDragStart({event:g,treeNode:t})},handleDragOver:g=>{g.preventDefault(),a.props.draggable&&f.treeNodeDragOver({event:g,treeNode:{$el:C.value,node:t.node}})},handleDrop:g=>{g.preventDefault()},handleDragEnd:g=>{a.props.draggable&&f.treeNodeDragEnd(g)},CaretRight:Le}}}),yt=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],Nt=["aria-expanded"];function kt(t,e,n,o,a,d){const s=j("el-icon"),r=j("el-checkbox"),m=j("loading"),C=j("node-content"),f=j("el-tree-node"),h=j("el-collapse-transition");return ge((I(),F("div",{ref:"node$",class:O([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:e[1]||(e[1]=V((...i)=>t.handleClick&&t.handleClick(...i),["stop"])),onContextmenu:e[2]||(e[2]=(...i)=>t.handleContextMenu&&t.handleContextMenu(...i)),onDragstart:e[3]||(e[3]=V((...i)=>t.handleDragStart&&t.handleDragStart(...i),["stop"])),onDragover:e[4]||(e[4]=V((...i)=>t.handleDragOver&&t.handleDragOver(...i),["stop"])),onDragend:e[5]||(e[5]=V((...i)=>t.handleDragEnd&&t.handleDragEnd(...i),["stop"])),onDrop:e[6]||(e[6]=V((...i)=>t.handleDrop&&t.handleDrop(...i),["stop"]))},[A("div",{class:O(t.ns.be("node","content")),style:Oe({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(I(),U(s,{key:0,class:O([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:V(t.handleExpandIconClick,["stop"])},{default:D(()=>[(I(),U(_e(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):te("v-if",!0),t.showCheckbox?(I(),U(r,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:e[0]||(e[0]=V(()=>{},["stop"])),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):te("v-if",!0),t.node.loading?(I(),U(s,{key:2,class:O([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:D(()=>[y(m)]),_:1},8,["class"])):te("v-if",!0),y(C,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),y(h,null,{default:D(()=>[!t.renderAfterExpand||t.childNodeRendered?ge((I(),F("div",{key:0,class:O(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(I(!0),F(ie,null,Ce(t.node.childNodes,i=>(I(),U(f,{key:t.getNodeKey(i),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:i,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,Nt)),[[me,t.expanded]]):te("v-if",!0)]),_:1})],42,yt)),[[me,t.node.visible]])}var Ct=ve(mt,[["render",kt],["__file","tree-node.vue"]]);function vt({el$:t},e){const n=ae("tree"),o=we([]),a=we([]);Pe(()=>{s()}),Fe(()=>{o.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),a.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),B(a,r=>{r.forEach(m=>{m.setAttribute("tabindex","-1")})}),st(t,"keydown",r=>{const m=r.target;if(!m.className.includes(n.b("node")))return;const C=r.code;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const f=o.value.indexOf(m);let h;if([q.up,q.down].includes(C)){if(r.preventDefault(),C===q.up){h=f===-1?0:f!==0?f-1:o.value.length-1;const k=h;for(;!e.value.getNode(o.value[h].dataset.key).canFocus;){if(h--,h===k){h=-1;break}h<0&&(h=o.value.length-1)}}else{h=f===-1?0:f<o.value.length-1?f+1:0;const k=h;for(;!e.value.getNode(o.value[h].dataset.key).canFocus;){if(h++,h===k){h=-1;break}h>=o.value.length&&(h=0)}}h!==-1&&o.value[h].focus()}[q.left,q.right].includes(C)&&(r.preventDefault(),m.click());const i=m.querySelector('[type="checkbox"]');[q.enter,q.space].includes(C)&&i&&(r.preventDefault(),i.click())});const s=()=>{var r;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),a.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const m=t.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);if(m.length){m[0].setAttribute("tabindex","0");return}(r=o.value[0])==null||r.setAttribute("tabindex","0")}}const bt=le({name:"ElTree",components:{ElTreeNode:Ct},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:rt}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:n}=Ve(),o=ae("tree"),a=Y(He,null),d=x(new ht({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));d.value.initialize();const s=x(d.value.root),r=x(null),m=x(null),C=x(null),{broadcastExpanded:f}=Ie(t),{dragState:h}=gt({props:t,ctx:e,el$:m,dropIndicator$:C,store:d});vt({el$:m},d);const i=qe(()=>{const{childNodes:u}=s.value,E=a?a.hasFilteredOptions!==0:!1;return(!u||u.length===0||u.every(({visible:z})=>!z))&&!E});B(()=>t.currentNodeKey,u=>{d.value.setCurrentNodeKey(u)}),B(()=>t.defaultCheckedKeys,u=>{d.value.setDefaultCheckedKey(u)}),B(()=>t.defaultExpandedKeys,u=>{d.value.setDefaultExpandedKeys(u)}),B(()=>t.data,u=>{d.value.setData(u)},{deep:!0}),B(()=>t.checkStrictly,u=>{d.value.checkStrictly=u});const k=u=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");d.value.filter(u)},b=u=>be(t.nodeKey,u.data),p=u=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const E=d.value.getNode(u);if(!E)return[];const z=[E.data];let X=E.parent;for(;X&&X!==s.value;)z.push(X.data),X=X.parent;return z.reverse()},c=(u,E)=>d.value.getCheckedNodes(u,E),l=u=>d.value.getCheckedKeys(u),v=()=>{const u=d.value.getCurrentNode();return u?u.data:null},L=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const u=v();return u?u[t.nodeKey]:null},M=(u,E)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");d.value.setCheckedNodes(u,E)},w=(u,E)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");d.value.setCheckedKeys(u,E)},H=(u,E,z)=>{d.value.setChecked(u,E,z)},J=()=>d.value.getHalfCheckedNodes(),$=()=>d.value.getHalfCheckedKeys(),g=(u,E=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");Ne(d,e.emit,()=>d.value.setUserCurrentNode(u,E))},K=(u,E=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");Ne(d,e.emit,()=>d.value.setCurrentNodeKey(u,E))},S=u=>d.value.getNode(u),Q=u=>{d.value.remove(u)},ce=(u,E)=>{d.value.append(u,E)},ue=(u,E)=>{d.value.insertBefore(u,E)},N=(u,E)=>{d.value.insertAfter(u,E)},_=(u,E,z)=>{f(E),e.emit("node-expand",u,E,z)},G=(u,E)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");d.value.updateChildren(u,E)};return oe("RootTree",{ctx:e,props:t,store:d,root:s,currentNode:r,instance:Se()}),oe(it,void 0),{ns:o,store:d,root:s,currentNode:r,dragState:h,el$:m,dropIndicator$:C,isEmpty:i,filter:k,getNodeKey:b,getNodePath:p,getCheckedNodes:c,getCheckedKeys:l,getCurrentNode:v,getCurrentKey:L,setCheckedNodes:M,setCheckedKeys:w,setChecked:H,getHalfCheckedNodes:J,getHalfCheckedKeys:$,setCurrentNode:g,setCurrentKey:K,t:n,getNode:S,remove:Q,append:ce,insertBefore:ue,insertAfter:N,handleNodeExpand:_,updateKeyChildren:G}}});function Et(t,e,n,o,a,d){const s=j("el-tree-node");return I(),F("div",{ref:"el$",class:O([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(I(!0),F(ie,null,Ce(t.root.childNodes,r=>(I(),U(s,{key:t.getNodeKey(r),node:r,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(I(),F("div",{key:0,class:O(t.ns.e("empty-block"))},[xe(t.$slots,"empty",{},()=>{var r;return[A("span",{class:O(t.ns.e("empty-text"))},ye((r=t.emptyText)!=null?r:t.t("el.tree.emptyText")),3)]})],2)):te("v-if",!0),ge(A("div",{ref:"dropIndicator$",class:O(t.ns.e("drop-indicator"))},null,2),[[me,t.dragState.showDropIndicator]])],2)}var re=ve(bt,[["render",Et],["__file","tree.vue"]]);re.install=t=>{t.component(re.name,re)};const Dt=re,wt=Dt,Kt={class:"org-main"},xt={class:"content"},St={class:"l"},It={style:{"margin-bottom":"20px"}},Tt={class:"tree-item"},At={class:"r"},Bt={class:"s-table-operations"},$t={class:"s-flex-auto",style:{"min-height":"0"}},Lt={class:"s-table-pagination"},_t=le({__name:"Org",setup(t){const e=pe({page:1,perPage:10}),n=x(0);x({}),x([]);const o=x([]),a=x([]),d=x([]),s=x(null),r=x(0);x([]);const m=()=>{de.getList().then(c=>{c.code===0&&(o.value=c.data,r.value=c.data[0].id)})},C=()=>{Z.getList({departmentId:r.value,...e}).then(c=>{c.code===0&&(d.value=c.data.data,n.value=c.data.total)})};tt.getList().then(c=>{c.code===0&&(a.value=c.data)});const f=c=>{ee.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{de.del({id:c}).then(l=>{l.code===0?(T.success("删除成功"),m()):T.error(l.msg)})}).catch(()=>{})},h=c=>{ee.prompt("部门名称","新增部门",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(({value:l})=>{console.log(l),de.add({name:l,pid:c}).then(v=>{v.code===0?(T.success("新增成功"),m()):T.error(v.msg)})}).catch(()=>{})},i=c=>{ee.prompt("部门名称","编辑部门",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:c.name}).then(({value:l})=>{console.log(l),de.edit({id:c.id,name:l}).then(v=>{v.code===0?(T.success("编辑成功"),m()):T.error(v.msg)})}).catch(()=>{})},k=c=>{ee.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Z.del({id:c}).then(l=>{l.code===0?(T.success("删除成功"),m()):T.error(l.msg)})}).catch(()=>{})},b=(c,l)=>{ee.confirm(`确定${l===1?"启用":"停用"}该账号？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Z.setStatus({id:c,status:l}).then(v=>{v.code===0?(T.success(`账号${l===1?"启用":"停用"}成功`),C()):T.error(v.msg)})}).catch(()=>{})},p=pe({show:!1,isEdit:!1,data:{account:"",password:"",departmentId:"",roleId:"",phone:"",email:""},set:c=>{p.show=!0,c?(p.isEdit=!0,p.data={id:c.id,account:c.account,password:c.password,departmentId:[c.departmentId],roleId:c.roleId,phone:c.phone,email:c.email}):(p.isEdit=!1,p.data={account:"",password:"",departmentId:"",roleId:"",phone:"",email:""})},sub:()=>{let c=p.isEdit?Z.edit:Z.add,l={...p.data};l.departmentId=l.departmentId.pop(),c(l).then(v=>{v.code===0?(T.success(p.isEdit?"修改成功":"新增成功"),p.show=!1,C()):T.error(v.msg)})}});return B(r,()=>{C()}),m(),(c,l)=>{const v=nt,L=et,M=wt,w=Xe,H=Ze,J=Ge,$=lt,g=Ue,K=Ye,S=We,Q=Je,ce=Re,ue=je;return I(),F(ie,null,[A("div",Kt,[A("div",xt,[A("div",St,[A("div",It,[y(v,{type:"primary",icon:"Plus",onClick:l[0]||(l[0]=N=>h(0))},{default:D(()=>[P("新增部门")]),_:1})]),y(M,{style:{"max-width":"300px"},"default-expand-all":"",data:o.value,"node-key":"id",props:{children:"child",label:"name"}},{default:D(({node:N,data:_})=>[A("span",Tt,[y(L,{class:"tree-item-label",onClick:G=>r.value=_.id},{default:D(()=>[P(ye(N.label),1)]),_:2},1032,["onClick"]),y(v,{link:"",icon:"Plus",onClick:G=>h(_.id)},null,8,["onClick"]),y(v,{link:"",icon:"Edit",onClick:G=>i(_)},null,8,["onClick"]),y(v,{link:"",icon:"Delete",onClick:G=>f(_.id)},null,8,["onClick"])])]),_:1},8,["data"])]),A("div",At,[A("div",Bt,[y(v,{size:"small",onClick:l[1]||(l[1]=N=>p.set())},{default:D(()=>[P("新增员工")]),_:1})]),A("div",$t,[y(H,{ref_key:"tableRef",ref:s,data:d.value,border:"","table-layout":"fixed",height:"100%","header-row-class-name":"s-table-header"},{default:D(()=>[y(w,{prop:"account",label:"登录名"}),y(w,{prop:"department",label:"部门"}),y(w,{prop:"role",label:"系统角色","min-width":"120"}),y(w,{prop:"phone",label:"手机"}),y(w,{prop:"email",label:"邮箱"}),y(w,{prop:"",label:"密码"}),y(w,{prop:"creatTime",label:"添加时间","min-width":"120"}),y(w,{prop:"",label:"登录时间","min-width":"120"}),y(w,{label:"操作",fixed:"right",width:"150"},{default:D(N=>[y(v,{link:"",type:"primary",onClick:_=>p.set(N.row)},{default:D(()=>[P("编辑")]),_:2},1032,["onClick"]),y(v,{link:"",type:"primary",onClick:_=>b(N.row.id,N.row.status===1?0:1)},{default:D(()=>[P(ye(N.row.status===1?"停用":"启用"),1)]),_:2},1032,["onClick"]),y(v,{link:"",type:"danger",onClick:_=>k(N.row.id)},{default:D(()=>[P("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),A("div",Lt,[y(J,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:n.value,"current-page":e.page,"onUpdate:currentPage":l[2]||(l[2]=N=>e.page=N),"page-size":e.perPage,"onUpdate:pageSize":l[3]||(l[3]=N=>e.perPage=N),onChange:m},null,8,["total","current-page","page-size"])])])])]),y(ue,{title:"新增员工",modelValue:p.show,"onUpdate:modelValue":l[11]||(l[11]=N=>p.show=N),width:"500"},{footer:D(()=>[y(v,{onClick:l[10]||(l[10]=N=>p.show=!1)},{default:D(()=>[P("取消")]),_:1}),y(v,{type:"primary",onClick:p.sub},{default:D(()=>[P("确定")]),_:1},8,["onClick"])]),default:D(()=>[y(ce,{model:p.data,"label-width":"auto"},{default:D(()=>[y(g,{label:"登录名"},{default:D(()=>[y($,{modelValue:p.data.account,"onUpdate:modelValue":l[4]||(l[4]=N=>p.data.account=N),placeholder:"请输入登录名"},null,8,["modelValue"])]),_:1}),y(g,{label:"密码"},{default:D(()=>[y($,{modelValue:p.data.password,"onUpdate:modelValue":l[5]||(l[5]=N=>p.data.password=N),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),y(g,{label:"部门"},{default:D(()=>[y(K,{modelValue:p.data.departmentId,"onUpdate:modelValue":l[6]||(l[6]=N=>p.data.departmentId=N),options:o.value,props:{value:"id",label:"name",children:"child",checkStrictly:!0},style:{width:"100%"}},null,8,["modelValue","options"])]),_:1}),y(g,{label:"系统角色"},{default:D(()=>[y(Q,{modelValue:p.data.roleId,"onUpdate:modelValue":l[7]||(l[7]=N=>p.data.roleId=N)},{default:D(()=>[(I(!0),F(ie,null,Ce(a.value,N=>(I(),U(S,{key:N.id,label:N.name,value:N.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),y(g,{label:"手机"},{default:D(()=>[y($,{modelValue:p.data.phone,"onUpdate:modelValue":l[8]||(l[8]=N=>p.data.phone=N),placeholder:"请输入手机"},null,8,["modelValue"])]),_:1}),y(g,{label:"邮箱"},{default:D(()=>[y($,{modelValue:p.data.email,"onUpdate:modelValue":l[9]||(l[9]=N=>p.data.email=N),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}}),wn=ct(_t,[["__scopeId","data-v-77f68e78"]]);export{wn as default};
