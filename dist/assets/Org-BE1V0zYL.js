import{a0 as fe,s as pe,J as Ae,bS as Be,d as ie,a as oe,k as J,z as Ee,r as xe,v as ne,l as x,aa as $e,t as L,L as De,c8 as _e,N as R,B as ge,C as me,o as A,b as q,O as _,h as H,i as w,a9 as Le,n as P,a6 as j,a3 as ee,R as y,f as Oe,F as re,U as Ce,D as Se,ay as Me,A as ze,_ as we,x as Pe,ad as Fe,a1 as Ve,c as qe,Q as ye,P as V}from"./index-QgCPknRV.js";import{E as je}from"./dialog-sXgMEFre.js";/* empty css                */import{a as Ue,E as Re}from"./form-item-PCY24Bz9.js";/* empty css              */import"./tag-DYJzjqVa.js";import{s as He,E as We,a as Ye}from"./select-D2x7JMsJ.js";import"./scrollbar-2JWi6wHl.js";import"./popper-FvkgnJ0o.js";import{E as Je}from"./cascader-panel-Bifah1Fv.js";import{E as Qe}from"./checkbox-GQAT0fGF.js";import"./radio-Cu9-35mr.js";import{E as Ge}from"./pagination--27wNCmI.js";import{E as Xe,a as Ze}from"./table-column-Bt9ktRkS.js";/* empty css                */import{E as et}from"./link-0_DBKRmF.js";import{E as tt}from"./button-BkUY8nVK.js";import{d as nt,o as ae,c as X}from"./index-CRM4bH88.js";/* empty css                    *//* empty css                */import{E as Z}from"./index-D6PYRXf8.js";import{_ as ve,r as he,a as ot,b as at,k as dt,E as U,i as st,c as $}from"./request-D3ROOKJz.js";import{_ as rt}from"./index-B4upFCXi.js";import{h as it}from"./use-form-item-Do-jLYkW.js";import{E as lt}from"./index-Ku1Bi_gm.js";import{_ as ct}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Dj4886hi.js";import"./scroll-DylINAFt.js";import"./vnode-BA49LMa9.js";import"./refs-C4B67JwL.js";import"./event-BB_Ol6Sd.js";import"./castArray-CXoRlNM7.js";import"./_baseClone-CkCg4Dv3.js";import"./_initCloneObject-DzxW9sW-.js";import"./isEqual-Dq4V8Bky.js";import"./aria-KgdLjl5h.js";import"./arrays-6TrVLtTe.js";import"./cloneDeep-CYu946u6.js";import"./validator-Okt9-3p9.js";const Y="$treeNodeId",Ke=function(t,e){!e||e[Y]||Object.defineProperty(e,Y,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},be=function(t,e){return t?e[t]:e[Y]},Ne=(t,e,n)=>{const o=t.value.currentNode;n();const a=t.value.currentNode;o!==a&&e("current-change",a?a.data:null,a)},ke=t=>{let e=!0,n=!0,o=!0;for(let a=0,d=t.length;a<d;a++){const s=t[a];(s.checked!==!0||s.indeterminate)&&(e=!1,s.disabled||(o=!1)),(s.checked!==!1||s.indeterminate)&&(n=!1)}return{all:e,none:n,allWithoutDisable:o,half:!e&&!n}},te=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:n,half:o}=ke(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):o?(t.checked=!1,t.indeterminate=!0):n&&(t.checked=!1,t.indeterminate=!1);const a=t.parent;!a||a.level===0||t.store.checkStrictly||te(a)},de=function(t,e){const n=t.store.props,o=t.data||{},a=n[e];if(typeof a=="function")return a(o,t);if(typeof a=="string")return o[a];if(typeof a>"u"){const d=o[e];return d===void 0?"":d}};let ut=0;class W{constructor(e){this.id=ut++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const n in e)fe(e,n)&&(this[n]=e[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const n=e.props;if(n&&typeof n.isLeaf<"u"){const d=de(this,"isLeaf");typeof d=="boolean"&&(this.isLeafByUser=d)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||Ke(this,this.data),!this.data)return;const o=e.defaultExpandedKeys,a=e.key;a&&o&&o.includes(this.key)&&this.expand(null,e.autoExpandParent),a&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||Ke(this,e),this.data=e,this.childNodes=[];let n;this.level===0&&Array.isArray(this.data)?n=this.data:n=de(this,"children")||[];for(let o=0,a=n.length;o<a;o++)this.insertChild({data:n[o]})}get label(){return de(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return de(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return e.childNodes[n+1]}return null}get previousSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return n>0?e.childNodes[n-1]:null}return null}contains(e,n=!0){return(this.childNodes||[]).some(o=>o===e||n&&o.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,n,o){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof W)){if(!o){const a=this.getChildren(!0);a.includes(e.data)||(typeof n>"u"||n<0?a.push(e.data):a.splice(n,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=pe(new W(e)),e instanceof W&&e.initialize()}e.level=this.level+1,typeof n>"u"||n<0?this.childNodes.push(e):this.childNodes.splice(n,0,e),this.updateLeafState()}insertBefore(e,n){let o;n&&(o=this.childNodes.indexOf(n)),this.insertChild(e,o)}insertAfter(e,n){let o;n&&(o=this.childNodes.indexOf(n),o!==-1&&(o+=1)),this.insertChild(e,o)}removeChild(e){const n=this.getChildren()||[],o=n.indexOf(e.data);o>-1&&n.splice(o,1);const a=this.childNodes.indexOf(e);a>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(a,1)),this.updateLeafState()}removeChildByData(e){let n=null;for(let o=0;o<this.childNodes.length;o++)if(this.childNodes[o].data===e){n=this.childNodes[o];break}n&&this.removeChild(n)}expand(e,n){const o=()=>{if(n){let a=this.parent;for(;a.level>0;)a.expanded=!0,a=a.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(a=>{a.canFocus=!0})};this.shouldLoadData()?this.loadData(a=>{Array.isArray(a)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||te(this),o())}):o()}doCreateChildren(e,n={}){e.forEach(o=>{this.insertChild(Object.assign({data:o},n),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,n,o,a){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:s,allWithoutDisable:r}=ke(this.childNodes);!this.isLeaf&&!s&&r&&(this.checked=!1,e=!1);const m=()=>{if(n){const v=this.childNodes;for(let i=0,k=v.length;i<k;i++){const b=v[i];a=a||e!==!1;const f=b.disabled?b.checked:a;b.setChecked(f,n,!0,a)}const{half:h,all:u}=ke(v);u||(this.checked=u,this.indeterminate=h)}};if(this.shouldLoadData()){this.loadData(()=>{m(),te(this)},{checked:e!==!1});return}else m()}const d=this.parent;!d||d.level===0||o||te(d)}getChildren(e=!1){if(this.level===0)return this.data;const n=this.data;if(!n)return null;const o=this.store.props;let a="children";return o&&(a=o.children||"children"),n[a]===void 0&&(n[a]=null),e&&!n[a]&&(n[a]=[]),n[a]}updateChildren(){const e=this.getChildren()||[],n=this.childNodes.map(d=>d.data),o={},a=[];e.forEach((d,s)=>{const r=d[Y];!!r&&n.findIndex(v=>v[Y]===r)>=0?o[r]={index:s,data:d}:a.push({index:s,data:d})}),this.store.lazy||n.forEach(d=>{o[d[Y]]||this.removeChildByData(d)}),a.forEach(({index:d,data:s})=>{this.insertChild({data:s},d)}),this.updateLeafState()}loadData(e,n={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(n).length)){this.loading=!0;const o=d=>{this.childNodes=[],this.doCreateChildren(d,n),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,d)},a=()=>{this.loading=!1};this.store.load(this,o,a)}else e&&e.call(this)}eachNode(e){const n=[this];for(;n.length;){const o=n.shift();n.unshift(...o.childNodes),e(o)}}reInitChecked(){this.store.checkStrictly||te(this)}}class ht{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const n in e)fe(e,n)&&(this[n]=e[n]);this.nodesMap={}}initialize(){if(this.root=new W({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,n=>{this.root.doCreateChildren(n),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const n=this.filterNodeMethod,o=this.lazy,a=function(d){const s=d.root?d.root.childNodes:d.childNodes;if(s.forEach(r=>{r.visible=n.call(r,e,r.data,r),a(r)}),!d.visible&&s.length){let r=!0;r=!s.some(m=>m.visible),d.root?d.root.visible=r===!1:d.visible=r===!1}e&&d.visible&&!d.isLeaf&&(!o||d.loaded)&&d.expand()};a(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof W)return e;const n=Ae(e)?be(this.key,e):e;return this.nodesMap[n]||null}insertBefore(e,n){const o=this.getNode(n);o.parent.insertBefore({data:e},o)}insertAfter(e,n){const o=this.getNode(n);o.parent.insertAfter({data:e},o)}remove(e){const n=this.getNode(e);n&&n.parent&&(n===this.currentNode&&(this.currentNode=null),n.parent.removeChild(n))}append(e,n){const o=Be(n)?this.root:this.getNode(n);o&&o.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],n=this.nodesMap;e.forEach(o=>{const a=n[o];a&&a.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const n=this.key;!e||!e.data||(n?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(o=>{this.deregisterNode(o)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,n=!1){const o=[],a=function(d){(d.root?d.root.childNodes:d.childNodes).forEach(r=>{(r.checked||n&&r.indeterminate)&&(!e||e&&r.isLeaf)&&o.push(r.data),a(r)})};return a(this),o}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(n=>(n||{})[this.key])}getHalfCheckedNodes(){const e=[],n=function(o){(o.root?o.root.childNodes:o.childNodes).forEach(d=>{d.indeterminate&&e.push(d.data),n(d)})};return n(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],n=this.nodesMap;for(const o in n)fe(n,o)&&e.push(n[o]);return e}updateChildren(e,n){const o=this.nodesMap[e];if(!o)return;const a=o.childNodes;for(let d=a.length-1;d>=0;d--){const s=a[d];this.remove(s.data)}for(let d=0,s=n.length;d<s;d++){const r=n[d];this.append(r,o.data)}}_setCheckedKeys(e,n=!1,o){const a=this._getAllNodes().sort((m,v)=>m.level-v.level),d=Object.create(null),s=Object.keys(o);a.forEach(m=>m.setChecked(!1,!1));const r=m=>{m.childNodes.forEach(v=>{var h;d[v.data[e]]=!0,(h=v.childNodes)!=null&&h.length&&r(v)})};for(let m=0,v=a.length;m<v;m++){const h=a[m],u=h.data[e].toString();if(!s.includes(u)){h.checked&&!d[u]&&h.setChecked(!1,!1);continue}if(h.childNodes.length&&r(h),h.isLeaf||this.checkStrictly){h.setChecked(!0,!1);continue}if(h.setChecked(!0,!0),n){h.setChecked(!1,!1);const k=function(b){b.childNodes.forEach(K=>{K.isLeaf||K.setChecked(!1,!1),k(K)})};k(h)}}}setCheckedNodes(e,n=!1){const o=this.key,a={};e.forEach(d=>{a[(d||{})[o]]=!0}),this._setCheckedKeys(o,n,a)}setCheckedKeys(e,n=!1){this.defaultCheckedKeys=e;const o=this.key,a={};e.forEach(d=>{a[d]=!0}),this._setCheckedKeys(o,n,a)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(n=>{const o=this.getNode(n);o&&o.expand(null,this.autoExpandParent)})}setChecked(e,n,o){const a=this.getNode(e);a&&a.setChecked(!!n,o)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const n=this.currentNode;n&&(n.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,n=!0){const o=e[this.key],a=this.nodesMap[o];this.setCurrentNode(a),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,n=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const o=this.getNode(e);o&&(this.setCurrentNode(o),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const ft=ie({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=oe("tree"),n=J("NodeInstance"),o=J("RootTree");return()=>{const a=t.node,{data:d,store:s}=a;return t.renderContent?t.renderContent(Ee,{_self:n,node:a,data:d,store:s}):xe(o.ctx.slots,"default",{node:a,data:d},()=>[Ee("span",{class:e.be("node","label")},[a.label])])}}});var pt=ve(ft,[["__file","tree-node-content.vue"]]);function Ie(t){const e=J("TreeNodeMap",null),n={treeNodeExpand:o=>{t.node!==o&&t.node.collapse()},children:[]};return e&&e.children.push(n),ne("TreeNodeMap",n),{broadcastExpanded:o=>{if(t.accordion)for(const a of n.children)a.treeNodeExpand(o)}}}const Te=Symbol("dragEvents");function gt({props:t,ctx:e,el$:n,dropIndicator$:o,store:a}){const d=oe("tree"),s=x({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return ne(Te,{treeNodeDragStart:({event:h,treeNode:u})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(u.node))return h.preventDefault(),!1;h.dataTransfer.effectAllowed="move";try{h.dataTransfer.setData("text/plain","")}catch{}s.value.draggingNode=u,e.emit("node-drag-start",u.node,h)},treeNodeDragOver:({event:h,treeNode:u})=>{const i=u,k=s.value.dropNode;k&&k.node.id!==i.node.id&&he(k.$el,d.is("drop-inner"));const b=s.value.draggingNode;if(!b||!i)return;let f=!0,K=!0,g=!0,l=!0;typeof t.allowDrop=="function"&&(f=t.allowDrop(b.node,i.node,"prev"),l=K=t.allowDrop(b.node,i.node,"inner"),g=t.allowDrop(b.node,i.node,"next")),h.dataTransfer.dropEffect=K||f||g?"move":"none",(f||K||g)&&(k==null?void 0:k.node.id)!==i.node.id&&(k&&e.emit("node-drag-leave",b.node,k.node,h),e.emit("node-drag-enter",b.node,i.node,h)),f||K||g?s.value.dropNode=i:s.value.dropNode=null,i.node.nextSibling===b.node&&(g=!1),i.node.previousSibling===b.node&&(f=!1),i.node.contains(b.node,!1)&&(K=!1),(b.node===i.node||b.node.contains(i.node))&&(f=!1,K=!1,g=!1);const C=i.$el.querySelector(`.${d.be("node","content")}`).getBoundingClientRect(),O=n.value.getBoundingClientRect();let I;const T=f?K?.25:g?.45:1:-1,M=g?K?.75:f?.55:0:1;let B=-9999;const p=h.clientY-C.top;p<C.height*T?I="before":p>C.height*M?I="after":K?I="inner":I="none";const E=i.$el.querySelector(`.${d.be("node","expand-icon")}`).getBoundingClientRect(),S=o.value;I==="before"?B=E.top-O.top:I==="after"&&(B=E.bottom-O.top),S.style.top=`${B}px`,S.style.left=`${E.right-O.left}px`,I==="inner"?ot(i.$el,d.is("drop-inner")):he(i.$el,d.is("drop-inner")),s.value.showDropIndicator=I==="before"||I==="after",s.value.allowDrop=s.value.showDropIndicator||l,s.value.dropType=I,e.emit("node-drag-over",b.node,i.node,h)},treeNodeDragEnd:h=>{const{draggingNode:u,dropType:i,dropNode:k}=s.value;if(h.preventDefault(),h.dataTransfer.dropEffect="move",u&&k){const b={data:u.node.data};i!=="none"&&u.node.remove(),i==="before"?k.node.parent.insertBefore(b,k.node):i==="after"?k.node.parent.insertAfter(b,k.node):i==="inner"&&k.node.insertChild(b),i!=="none"&&(a.value.registerNode(b),a.value.key&&u.node.eachNode(f=>{var K;(K=a.value.nodesMap[f.data[a.value.key]])==null||K.setChecked(f.checked,!a.value.checkStrictly)})),he(k.$el,d.is("drop-inner")),e.emit("node-drag-end",u.node,k.node,i,h),i!=="none"&&e.emit("node-drop",u.node,k.node,i,h)}u&&!k&&e.emit("node-drag-end",u.node,null,i,h),s.value.showDropIndicator=!1,s.value.draggingNode=null,s.value.dropNode=null,s.value.allowDrop=!0}}),{dragState:s}}const mt=ie({name:"ElTreeNode",components:{ElCollapseTransition:rt,ElCheckbox:Qe,NodeContent:pt,ElIcon:at,Loading:$e},props:{node:{type:W,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const n=oe("tree"),{broadcastExpanded:o}=Ie(t),a=J("RootTree"),d=x(!1),s=x(!1),r=x(null),m=x(null),v=x(null),h=J(Te),u=Se();ne("NodeInstance",u),t.node.expanded&&(d.value=!0,s.value=!0);const i=a.props.props.children||"children";L(()=>{const p=t.node.data[i];return p&&[...p]},()=>{t.node.updateChildren()}),L(()=>t.node.indeterminate,p=>{f(t.node.checked,p)}),L(()=>t.node.checked,p=>{f(p,t.node.indeterminate)}),L(()=>t.node.childNodes.length,()=>t.node.reInitChecked()),L(()=>t.node.expanded,p=>{De(()=>d.value=p),p&&(s.value=!0)});const k=p=>be(a.props.nodeKey,p.data),b=p=>{const E=t.props.class;if(!E)return{};let S;if(Me(E)){const{data:Q}=p;S=E(Q,p)}else S=E;return ze(S)?{[S]:!0}:S},f=(p,E)=>{(r.value!==p||m.value!==E)&&a.ctx.emit("check-change",t.node.data,p,E),r.value=p,m.value=E},K=p=>{Ne(a.store,a.ctx.emit,()=>a.store.value.setCurrentNode(t.node)),a.currentNode.value=t.node,a.props.expandOnClickNode&&l(),a.props.checkOnClickNode&&!t.node.disabled&&C(null,{target:{checked:!t.node.checked}}),a.ctx.emit("node-click",t.node.data,t.node,u,p)},g=p=>{a.instance.vnode.props.onNodeContextmenu&&(p.stopPropagation(),p.preventDefault()),a.ctx.emit("node-contextmenu",p,t.node.data,t.node,u)},l=()=>{t.node.isLeaf||(d.value?(a.ctx.emit("node-collapse",t.node.data,t.node,u),t.node.collapse()):(t.node.expand(),e.emit("node-expand",t.node.data,t.node,u)))},C=(p,E)=>{t.node.setChecked(E.target.checked,!a.props.checkStrictly),De(()=>{const S=a.store.value;a.ctx.emit("check",t.node.data,{checkedNodes:S.getCheckedNodes(),checkedKeys:S.getCheckedKeys(),halfCheckedNodes:S.getHalfCheckedNodes(),halfCheckedKeys:S.getHalfCheckedKeys()})})};return{ns:n,node$:v,tree:a,expanded:d,childNodeRendered:s,oldChecked:r,oldIndeterminate:m,getNodeKey:k,getNodeClass:b,handleSelectChange:f,handleClick:K,handleContextMenu:g,handleExpandIconClick:l,handleCheckChange:C,handleChildNodeExpand:(p,E,S)=>{o(E),a.ctx.emit("node-expand",p,E,S)},handleDragStart:p=>{a.props.draggable&&h.treeNodeDragStart({event:p,treeNode:t})},handleDragOver:p=>{p.preventDefault(),a.props.draggable&&h.treeNodeDragOver({event:p,treeNode:{$el:v.value,node:t.node}})},handleDrop:p=>{p.preventDefault()},handleDragEnd:p=>{a.props.draggable&&h.treeNodeDragEnd(p)},CaretRight:_e}}}),yt=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],Nt=["aria-expanded"];function kt(t,e,n,o,a,d){const s=R("el-icon"),r=R("el-checkbox"),m=R("loading"),v=R("node-content"),h=R("el-tree-node"),u=R("el-collapse-transition");return ge((A(),q("div",{ref:"node$",class:P([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:e[1]||(e[1]=j((...i)=>t.handleClick&&t.handleClick(...i),["stop"])),onContextmenu:e[2]||(e[2]=(...i)=>t.handleContextMenu&&t.handleContextMenu(...i)),onDragstart:e[3]||(e[3]=j((...i)=>t.handleDragStart&&t.handleDragStart(...i),["stop"])),onDragover:e[4]||(e[4]=j((...i)=>t.handleDragOver&&t.handleDragOver(...i),["stop"])),onDragend:e[5]||(e[5]=j((...i)=>t.handleDragEnd&&t.handleDragEnd(...i),["stop"])),onDrop:e[6]||(e[6]=j((...i)=>t.handleDrop&&t.handleDrop(...i),["stop"]))},[_("div",{class:P(t.ns.be("node","content")),style:Oe({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(A(),H(s,{key:0,class:P([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:j(t.handleExpandIconClick,["stop"])},{default:w(()=>[(A(),H(Le(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):ee("v-if",!0),t.showCheckbox?(A(),H(r,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:e[0]||(e[0]=j(()=>{},["stop"])),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):ee("v-if",!0),t.node.loading?(A(),H(s,{key:2,class:P([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:w(()=>[y(m)]),_:1},8,["class"])):ee("v-if",!0),y(v,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),y(u,null,{default:w(()=>[!t.renderAfterExpand||t.childNodeRendered?ge((A(),q("div",{key:0,class:P(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(A(!0),q(re,null,Ce(t.node.childNodes,i=>(A(),H(h,{key:t.getNodeKey(i),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:i,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,Nt)),[[me,t.expanded]]):ee("v-if",!0)]),_:1})],42,yt)),[[me,t.node.visible]])}var Ct=ve(mt,[["render",kt],["__file","tree-node.vue"]]);function vt({el$:t},e){const n=oe("tree"),o=we([]),a=we([]);Pe(()=>{s()}),Fe(()=>{o.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),a.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),L(a,r=>{r.forEach(m=>{m.setAttribute("tabindex","-1")})}),dt(t,"keydown",r=>{const m=r.target;if(!m.className.includes(n.b("node")))return;const v=r.code;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const h=o.value.indexOf(m);let u;if([U.up,U.down].includes(v)){if(r.preventDefault(),v===U.up){u=h===-1?0:h!==0?h-1:o.value.length-1;const k=u;for(;!e.value.getNode(o.value[u].dataset.key).canFocus;){if(u--,u===k){u=-1;break}u<0&&(u=o.value.length-1)}}else{u=h===-1?0:h<o.value.length-1?h+1:0;const k=u;for(;!e.value.getNode(o.value[u].dataset.key).canFocus;){if(u++,u===k){u=-1;break}u>=o.value.length&&(u=0)}}u!==-1&&o.value[u].focus()}[U.left,U.right].includes(v)&&(r.preventDefault(),m.click());const i=m.querySelector('[type="checkbox"]');[U.enter,U.space].includes(v)&&i&&(r.preventDefault(),i.click())});const s=()=>{var r;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),a.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const m=t.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);if(m.length){m[0].setAttribute("tabindex","0");return}(r=o.value[0])==null||r.setAttribute("tabindex","0")}}const bt=ie({name:"ElTree",components:{ElTreeNode:Ct},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:st}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:n}=Ve(),o=oe("tree"),a=J(He,null),d=x(new ht({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));d.value.initialize();const s=x(d.value.root),r=x(null),m=x(null),v=x(null),{broadcastExpanded:h}=Ie(t),{dragState:u}=gt({props:t,ctx:e,el$:m,dropIndicator$:v,store:d});vt({el$:m},d);const i=qe(()=>{const{childNodes:c}=s.value,D=a?a.hasFilteredOptions!==0:!1;return(!c||c.length===0||c.every(({visible:F})=>!F))&&!D});L(()=>t.currentNodeKey,c=>{d.value.setCurrentNodeKey(c)}),L(()=>t.defaultCheckedKeys,c=>{d.value.setDefaultCheckedKey(c)}),L(()=>t.defaultExpandedKeys,c=>{d.value.setDefaultExpandedKeys(c)}),L(()=>t.data,c=>{d.value.setData(c)},{deep:!0}),L(()=>t.checkStrictly,c=>{d.value.checkStrictly=c});const k=c=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");d.value.filter(c)},b=c=>be(t.nodeKey,c.data),f=c=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const D=d.value.getNode(c);if(!D)return[];const F=[D.data];let G=D.parent;for(;G&&G!==s.value;)F.push(G.data),G=G.parent;return F.reverse()},K=(c,D)=>d.value.getCheckedNodes(c,D),g=c=>d.value.getCheckedKeys(c),l=()=>{const c=d.value.getCurrentNode();return c?c.data:null},C=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const c=l();return c?c[t.nodeKey]:null},O=(c,D)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");d.value.setCheckedNodes(c,D)},I=(c,D)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");d.value.setCheckedKeys(c,D)},T=(c,D,F)=>{d.value.setChecked(c,D,F)},M=()=>d.value.getHalfCheckedNodes(),B=()=>d.value.getHalfCheckedKeys(),p=(c,D=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");Ne(d,e.emit,()=>d.value.setUserCurrentNode(c,D))},E=(c,D=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");Ne(d,e.emit,()=>d.value.setCurrentNodeKey(c,D))},S=c=>d.value.getNode(c),Q=c=>{d.value.remove(c)},le=(c,D)=>{d.value.append(c,D)},ce=(c,D)=>{d.value.insertBefore(c,D)},ue=(c,D)=>{d.value.insertAfter(c,D)},N=(c,D,F)=>{h(D),e.emit("node-expand",c,D,F)},z=(c,D)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");d.value.updateChildren(c,D)};return ne("RootTree",{ctx:e,props:t,store:d,root:s,currentNode:r,instance:Se()}),ne(it,void 0),{ns:o,store:d,root:s,currentNode:r,dragState:u,el$:m,dropIndicator$:v,isEmpty:i,filter:k,getNodeKey:b,getNodePath:f,getCheckedNodes:K,getCheckedKeys:g,getCurrentNode:l,getCurrentKey:C,setCheckedNodes:O,setCheckedKeys:I,setChecked:T,getHalfCheckedNodes:M,getHalfCheckedKeys:B,setCurrentNode:p,setCurrentKey:E,t:n,getNode:S,remove:Q,append:le,insertBefore:ce,insertAfter:ue,handleNodeExpand:N,updateKeyChildren:z}}});function Et(t,e,n,o,a,d){const s=R("el-tree-node");return A(),q("div",{ref:"el$",class:P([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(A(!0),q(re,null,Ce(t.root.childNodes,r=>(A(),H(s,{key:t.getNodeKey(r),node:r,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(A(),q("div",{key:0,class:P(t.ns.e("empty-block"))},[xe(t.$slots,"empty",{},()=>{var r;return[_("span",{class:P(t.ns.e("empty-text"))},ye((r=t.emptyText)!=null?r:t.t("el.tree.emptyText")),3)]})],2)):ee("v-if",!0),ge(_("div",{ref:"dropIndicator$",class:P(t.ns.e("drop-indicator"))},null,2),[[me,t.dragState.showDropIndicator]])],2)}var se=ve(bt,[["render",Et],["__file","tree.vue"]]);se.install=t=>{t.component(se.name,se)};const Dt=se,wt=Dt,Kt={class:"org-main"},xt={class:"content"},St={class:"l"},It={style:{"margin-bottom":"20px"}},Tt={class:"tree-item"},At={class:"r"},Bt={class:"s-table-operations"},$t={class:"s-flex-auto",style:{"min-height":"0"}},_t={class:"s-table-pagination"},Lt=ie({__name:"Org",setup(t){const e=pe({page:1,perPage:10}),n=x(0);x({}),x([]);const o=x([]),a=x([]),d=x([]),s=x(null),r=x(0);x([]);const m=()=>{ae.getList().then(g=>{g.code===0&&(o.value=g.data,r.value=g.data[0].id)})},v=()=>{X.getList({departmentId:r.value,...e}).then(g=>{g.code===0&&(d.value=g.data.data,n.value=g.data.total)})};nt.getList().then(g=>{g.code===0&&(a.value=g.data)});const h=g=>{Z.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{ae.del({id:g}).then(l=>{l.code===0?($.success("删除成功"),m()):$.error(l.msg)})}).catch(()=>{})},u=g=>{Z.prompt("部门名称","新增部门",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(({value:l})=>{console.log(l),ae.add({name:l,pid:g}).then(C=>{C.code===0?($.success("新增成功"),m()):$.error(C.msg)})}).catch(()=>{})},i=g=>{Z.prompt("部门名称","编辑部门",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:g.name}).then(({value:l})=>{console.log(l),ae.edit({id:g.id,name:l}).then(C=>{C.code===0?($.success("编辑成功"),m()):$.error(C.msg)})}).catch(()=>{})},k=g=>{Z.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{X.del({id:g}).then(l=>{l.code===0?($.success("删除成功"),m()):$.error(l.msg)})}).catch(()=>{})},b=(g,l)=>{Z.confirm(`确定${l===1?"启用":"停用"}该账号？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{X.setStatus({id:g,status:l}).then(C=>{C.code===0?($.success(`账号${l===1?"启用":"停用"}成功`),v()):$.error(C.msg)})}).catch(()=>{})},f=pe({show:!1,isEdit:!1,data:{account:"",password:"",departmentId:"",roleId:"",phone:"",email:""},set:g=>{f.show=!0,g?(f.isEdit=!0,f.data={id:g.id,account:g.account,password:g.password,departmentId:K(g.departmentId),roleId:g.roleId,phone:g.phone,email:g.email}):(f.isEdit=!1,f.data={account:"",password:"",departmentId:"",roleId:"",phone:"",email:""})},sub:()=>{let g=f.isEdit?X.edit:X.add,l={...f.data};l.departmentId=l.departmentId[l.departmentId.length-1],g(l).then(C=>{C.code===0?($.success(f.isEdit?"修改成功":"新增成功"),f.show=!1,v()):$.error(C.msg)})}}),K=g=>{let l=[],C=o.value,O=[];const I=(T,M)=>{for(let B=0;B<T.length;B++){let p=T[B],E=T[B].id;if(l[M]=E,g===E)return O=l.slice(0,M+1),l;p.child.length>0&&I(p.child,M+1)}};return I(C,0),O};return L(r,()=>{v()}),m(),(g,l)=>{const C=tt,O=et,I=wt,T=Ze,M=Xe,B=Ge,p=lt,E=Ue,S=Je,Q=We,le=Ye,ce=Re,ue=je;return A(),q(re,null,[_("div",Kt,[_("div",xt,[_("div",St,[_("div",It,[y(C,{type:"primary",icon:"Plus",onClick:l[0]||(l[0]=N=>u(0))},{default:w(()=>[V("新增部门")]),_:1})]),y(I,{style:{"max-width":"300px"},"default-expand-all":"",data:o.value,"node-key":"id",props:{children:"child",label:"name"}},{default:w(({node:N,data:z})=>[_("span",Tt,[y(O,{class:"tree-item-label",onClick:c=>r.value=z.id},{default:w(()=>[V(ye(N.label),1)]),_:2},1032,["onClick"]),y(C,{link:"",icon:"Plus",onClick:c=>u(z.id)},null,8,["onClick"]),y(C,{link:"",icon:"Edit",onClick:c=>i(z)},null,8,["onClick"]),y(C,{link:"",icon:"Delete",onClick:c=>h(z.id)},null,8,["onClick"])])]),_:1},8,["data"])]),_("div",At,[_("div",Bt,[y(C,{size:"small",onClick:l[1]||(l[1]=N=>f.set())},{default:w(()=>[V("新增员工")]),_:1})]),_("div",$t,[y(M,{ref_key:"tableRef",ref:s,data:d.value,border:"","table-layout":"fixed",height:"100%","header-row-class-name":"s-table-header"},{default:w(()=>[y(T,{prop:"account",label:"登录名"}),y(T,{prop:"department",label:"部门"}),y(T,{prop:"role",label:"系统角色","min-width":"120"}),y(T,{prop:"phone",label:"手机"}),y(T,{prop:"email",label:"邮箱"}),y(T,{prop:"password",label:"密码"}),y(T,{prop:"creatTime",label:"添加时间","min-width":"120"}),y(T,{prop:"loginTime",label:"登录时间","min-width":"120"}),y(T,{label:"操作",fixed:"right",width:"150"},{default:w(N=>[y(C,{link:"",type:"primary",onClick:z=>f.set(N.row)},{default:w(()=>[V("编辑")]),_:2},1032,["onClick"]),y(C,{link:"",type:"primary",onClick:z=>b(N.row.id,N.row.status===1?0:1)},{default:w(()=>[V(ye(N.row.status===1?"停用":"启用"),1)]),_:2},1032,["onClick"]),y(C,{link:"",type:"danger",onClick:z=>k(N.row.id)},{default:w(()=>[V("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_("div",_t,[y(B,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:n.value,"current-page":e.page,"onUpdate:currentPage":l[2]||(l[2]=N=>e.page=N),"page-size":e.perPage,"onUpdate:pageSize":l[3]||(l[3]=N=>e.perPage=N),onChange:m},null,8,["total","current-page","page-size"])])])])]),y(ue,{title:"新增员工",modelValue:f.show,"onUpdate:modelValue":l[11]||(l[11]=N=>f.show=N),width:"500",draggable:""},{footer:w(()=>[y(C,{onClick:l[10]||(l[10]=N=>f.show=!1)},{default:w(()=>[V("取消")]),_:1}),y(C,{type:"primary",onClick:f.sub},{default:w(()=>[V("确定")]),_:1},8,["onClick"])]),default:w(()=>[y(ce,{model:f.data,"label-width":"auto","label-position":"left"},{default:w(()=>[y(E,{label:"登录名"},{default:w(()=>[y(p,{modelValue:f.data.account,"onUpdate:modelValue":l[4]||(l[4]=N=>f.data.account=N),placeholder:"请输入登录名"},null,8,["modelValue"])]),_:1}),y(E,{label:"密码"},{default:w(()=>[y(p,{modelValue:f.data.password,"onUpdate:modelValue":l[5]||(l[5]=N=>f.data.password=N),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),y(E,{label:"部门"},{default:w(()=>[y(S,{modelValue:f.data.departmentId,"onUpdate:modelValue":l[6]||(l[6]=N=>f.data.departmentId=N),options:o.value,props:{value:"id",label:"name",children:"child",checkStrictly:!0},style:{width:"100%"}},null,8,["modelValue","options"])]),_:1}),y(E,{label:"系统角色"},{default:w(()=>[y(le,{modelValue:f.data.roleId,"onUpdate:modelValue":l[7]||(l[7]=N=>f.data.roleId=N)},{default:w(()=>[(A(!0),q(re,null,Ce(a.value,N=>(A(),H(Q,{key:N.id,label:N.name,value:N.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),y(E,{label:"手机"},{default:w(()=>[y(p,{modelValue:f.data.phone,"onUpdate:modelValue":l[8]||(l[8]=N=>f.data.phone=N),placeholder:"请输入手机"},null,8,["modelValue"])]),_:1}),y(E,{label:"邮箱"},{default:w(()=>[y(p,{modelValue:f.data.email,"onUpdate:modelValue":l[9]||(l[9]=N=>f.data.email=N),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}}),bn=ct(Lt,[["__scopeId","data-v-cc27cdd9"]]);export{bn as default};
