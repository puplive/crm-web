import{j as Ce,$ as xe,a8 as k,K as ee,d as pe,a1 as Se,a as ke,l as V,s as ye,c as M,ac as ne,t as X,x as Fe,ad as Pe,o as b,b as I,B as be,e as s,n as re,a2 as se,r as fe,a3 as he,R as u,a6 as ce,A as ze,i as _,h as T,p as Ae,ae as Be,af as Te,ag as Ue,w as De,O as i,F as R,U as q,P as A,Q as $,W as $e,a5 as Me,X as Le,Y as Ke}from"./index-C4ZHMdsf.js";/* empty css                 */import{E as Oe,a as Re}from"./el-table-column-CZpklB2W.js";import"./el-checkbox-CDkq_TX-.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-B443bNNp.js";import{E as qe}from"./el-scrollbar-DK_tWI4B.js";import"./el-tag-CHBC5oVH.js";/* empty css                  */import{E as je}from"./el-image-viewer-D5I6eAaG.js";import{E as Ze,a as We}from"./el-form-item-7bO4EAtk.js";import{E as Ye,a as Ge}from"./el-select-BAI-bRYo.js";import{a as B}from"./request-dKwP9640.js";import{c as j,g as He}from"./index-JbWmDGMp.js";import{e as Qe}from"./index-DDNEr8xH.js";import{g as Xe}from"./index-BYSZpzwd.js";import{g as Je}from"./index-D41KsbDB.js";/* empty css                   */import{E as el}from"./index-Lvg0anao.js";import{E as Ie}from"./index-CYs0fHQD.js";import{c as ll,_ as tl,E as _e}from"./index-CZ7niqPb.js";import{u as al,a as ol,b as nl,c as sl,t as rl,e as ge}from"./use-form-item-D6oge9Wn.js";import{C as Ne,I as ue,U as J}from"./event-BB_Ol6Sd.js";import{v as Ve}from"./index-D21LTkpT.js";import{_ as ul}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_initCloneObject-D0-Iyl8Y.js";import"./isArrayLikeObject-DD89v4wE.js";import"./isEqual-CXVvUB-S.js";import"./scroll-DR2mTp8M.js";import"./castArray-Q0VEGTvx.js";import"./_baseClone-BkNg7ClW.js";const il=Ce({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:xe,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:r=>r===null||k(r)||["min","max"].includes(r),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:r=>r>=0&&r===Number.parseInt(`${r}`,10)},validateEvent:{type:Boolean,default:!0},...al(["ariaLabel"])}),dl={[Ne]:(r,Z)=>Z!==r,blur:r=>r instanceof FocusEvent,focus:r=>r instanceof FocusEvent,[ue]:r=>k(r)||ee(r),[J]:r=>k(r)||ee(r)},cl=["aria-label","onKeydown"],pl=["aria-label","onKeydown"],ml=pe({name:"ElInputNumber"}),vl=pe({...ml,props:il,emits:dl,setup(r,{expose:Z,emit:f}){const o=r,{t:N}=Se(),p=ke("input-number"),h=V(),d=ye({currentValue:o.modelValue,userInput:null}),{formItem:w}=ol(),F=M(()=>k(o.modelValue)&&o.modelValue<=o.min),P=M(()=>k(o.modelValue)&&o.modelValue>=o.max),x=M(()=>{const e=le(o.step);return ne(o.precision)?Math.max(le(o.modelValue),e):(e>o.precision,o.precision)}),L=M(()=>o.controls&&o.controlsPosition==="right"),W=nl(),z=sl(),U=M(()=>{if(d.userInput!==null)return d.userInput;let e=d.currentValue;if(ee(e))return"";if(k(e)){if(Number.isNaN(e))return"";ne(o.precision)||(e=e.toFixed(o.precision))}return e}),Y=(e,l)=>{if(ne(l)&&(l=x.value),l===0)return Math.round(e);let n=String(e);const v=n.indexOf(".");if(v===-1||!n.replace(".","").split("")[v+l])return e;const O=n.length;return n.charAt(O-1)==="5"&&(n=`${n.slice(0,Math.max(0,O-1))}6`),Number.parseFloat(Number(n).toFixed(l))},le=e=>{if(ee(e))return 0;const l=e.toString(),n=l.indexOf(".");let v=0;return n!==-1&&(v=l.length-n-1),v},te=(e,l=1)=>k(e)?Y(e+o.step*l):d.currentValue,G=()=>{if(o.readonly||z.value||P.value)return;const e=Number(U.value)||0,l=te(e);D(l),f(ue,d.currentValue),a()},H=()=>{if(o.readonly||z.value||F.value)return;const e=Number(U.value)||0,l=te(e,-1);D(l),f(ue,d.currentValue),a()},ae=(e,l)=>{const{max:n,min:v,step:m,precision:y,stepStrictly:O,valueOnClear:C}=o;n<v&&rl("InputNumber","min should not be greater than max.");let g=Number(e);if(ee(e)||Number.isNaN(g))return null;if(e===""){if(C===null)return null;g=ze(C)?{min:v,max:n}[C]:C}return O&&(g=Y(Math.round(g/m)*m,y)),ne(y)||(g=Y(g,y)),(g>n||g<v)&&(g=g>n?n:v,l&&f(J,g)),g},D=(e,l=!0)=>{var n;const v=d.currentValue,m=ae(e);if(!l){f(J,m);return}v===m&&e||(d.userInput=null,f(J,m),v!==m&&f(Ne,m,v),o.validateEvent&&((n=w==null?void 0:w.validate)==null||n.call(w,"change").catch(y=>ge())),d.currentValue=m)},Q=e=>{d.userInput=e;const l=e===""?null:Number(e);f(ue,l),D(l,!1)},oe=e=>{const l=e!==""?Number(e):"";(k(l)&&!Number.isNaN(l)||e==="")&&D(l),a(),d.userInput=null},E=()=>{var e,l;(l=(e=h.value)==null?void 0:e.focus)==null||l.call(e)},K=()=>{var e,l;(l=(e=h.value)==null?void 0:e.blur)==null||l.call(e)},ie=e=>{f("focus",e)},de=e=>{var l;d.userInput=null,f("blur",e),o.validateEvent&&((l=w==null?void 0:w.validate)==null||l.call(w,"blur").catch(n=>ge()))},a=()=>{d.currentValue!==o.modelValue&&(d.currentValue=o.modelValue)},c=e=>{document.activeElement===e.target&&e.preventDefault()};return X(()=>o.modelValue,(e,l)=>{const n=ae(e,!0);d.userInput===null&&n!==l&&(d.currentValue=n)},{immediate:!0}),Fe(()=>{var e;const{min:l,max:n,modelValue:v}=o,m=(e=h.value)==null?void 0:e.input;if(m.setAttribute("role","spinbutton"),Number.isFinite(n)?m.setAttribute("aria-valuemax",String(n)):m.removeAttribute("aria-valuemax"),Number.isFinite(l)?m.setAttribute("aria-valuemin",String(l)):m.removeAttribute("aria-valuemin"),m.setAttribute("aria-valuenow",d.currentValue||d.currentValue===0?String(d.currentValue):""),m.setAttribute("aria-disabled",String(z.value)),!k(v)&&v!=null){let y=Number(v);Number.isNaN(y)&&(y=null),f(J,y)}m.addEventListener("wheel",c,{passive:!1})}),Pe(()=>{var e,l;const n=(e=h.value)==null?void 0:e.input;n==null||n.setAttribute("aria-valuenow",`${(l=d.currentValue)!=null?l:""}`)}),ll({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input-number",ref:"https://element-plus.org/en-US/component/input-number.html"},M(()=>!!o.label)),Z({focus:E,blur:K}),(e,l)=>(b(),I("div",{class:re([s(p).b(),s(p).m(s(W)),s(p).is("disabled",s(z)),s(p).is("without-controls",!e.controls),s(p).is("controls-right",s(L))]),onDragstart:l[0]||(l[0]=ce(()=>{},["prevent"]))},[e.controls?be((b(),I("span",{key:0,role:"button","aria-label":s(N)("el.inputNumber.decrease"),class:re([s(p).e("decrease"),s(p).is("disabled",s(F))]),onKeydown:se(H,["enter"])},[fe(e.$slots,"decrease-icon",{},()=>[u(s(_e),null,{default:_(()=>[s(L)?(b(),T(s(Ae),{key:0})):(b(),T(s(Be),{key:1}))]),_:1})])],42,cl)),[[s(Ve),H]]):he("v-if",!0),e.controls?be((b(),I("span",{key:1,role:"button","aria-label":s(N)("el.inputNumber.increase"),class:re([s(p).e("increase"),s(p).is("disabled",s(P))]),onKeydown:se(G,["enter"])},[fe(e.$slots,"increase-icon",{},()=>[u(s(_e),null,{default:_(()=>[s(L)?(b(),T(s(Te),{key:0})):(b(),T(s(Ue),{key:1}))]),_:1})])],42,pl)),[[s(Ve),G]]):he("v-if",!0),u(s(Ie),{id:e.id,ref_key:"input",ref:h,type:"number",step:e.step,"model-value":s(U),placeholder:e.placeholder,readonly:e.readonly,disabled:s(z),size:s(W),max:e.max,min:e.min,name:e.name,"aria-label":e.label||e.ariaLabel,"validate-event":!1,onKeydown:[se(ce(G,["prevent"]),["up"]),se(ce(H,["prevent"]),["down"])],onBlur:de,onFocus:ie,onInput:Q,onChange:oe},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","aria-label","onKeydown"])],34))}});var bl=tl(vl,[["__file","input-number.vue"]]);const fl=De(bl),me=r=>(Le("data-v-de91bc76"),r=r(),Ke(),r),hl={class:"goods-reserve"},_l={class:"s-top_bar"},gl={class:"row"},Vl={class:"col col1"},yl={class:"goods-type"},Il=["onClick"],Nl={class:"col col2"},wl={class:"goods-list"},El={class:"msg"},Cl=["title"],xl=["title"],Sl=me(()=>i("label",{for:""},"规格(尺寸)：",-1)),kl=["title"],Fl=me(()=>i("label",{for:""},"单  价：",-1)),Pl={class:"p"},zl=me(()=>i("label",{for:""},"库  存：",-1)),Al={class:"col col3"},Bl={class:"table"},Tl={class:"bottom-bar"},Ul={class:"p1"},Dl={class:"p2"},$l=pe({__name:"Reserve",setup(r){const Z=$e(),f=Me(),o=V(f.query.exhibitionId?Number(f.query.exhibitionId):""),N=V(f.query.exhibitorId?Number(f.query.exhibitorId):""),p=V(f.query.hallCode||""),h=V(f.query.positionCode||""),d=f.query.clueId,w=V(0),F=V([]),P=V({}),x=V([]),L=V([]),W=V([]),z=V([]),U=V([]);ye({});const Y=(a,c=1)=>{j.addCart({exhibitorId:N.value,exhibitionId:o.value,hallCode:p.value,positionCode:h.value,id:a.id,num:c}).then(e=>{e.code===0?(B.success("添加成功"),E()):B.error(e.msg)})},le=(a,c=1)=>{j.editCart({exhibitorId:N.value,exhibitionId:o.value,hallCode:p.value,positionCode:h.value,id:a.id,num:c}).then(e=>{e.code===0?B.success("成功"):B.error(e.msg),E()})},te=a=>{j.delCart({exhibitorId:N.value,exhibitionId:o.value,hallCode:p.value,positionCode:h.value,id:a.id,num:a.num}).then(c=>{c.code===0?(B.success("删除成功"),E()):B.error(c.msg)})},G=a=>{P.value=F.value[a]},H=()=>{Qe().then(a=>{a.code===0&&(L.value=a.data)})},ae=()=>{Xe().then(a=>{a.code===0&&(W.value=a.data)})},D=()=>{He({exhibitionId:o.value}).then(a=>{a.code===0&&(z.value=a.data)})},Q=()=>{U.value=[],Je({exhibitionId:o.value,hallCode:p.value}).then(a=>{a.code===0&&(U.value=a.data)})},oe=()=>{j.getMaterial({exhibitionId:o.value}).then(a=>{a.code===0&&(F.value=a.data,F.value.length>0?P.value=F.value[0]:P.value={})})},E=()=>{if(!o.value||!p.value||!h.value){x.value=[];return}j.getCart({exhibitorId:N.value,exhibitionId:o.value,hallCode:p.value,positionCode:h.value}).then(a=>{a.code===0&&(x.value=a.data)})},K=V(!1),ie=()=>{K.value=!0,j.create({clueId:d,exhibitionId:o.value,exhibitorId:N.value,hallCode:p.value,positionCode:h.value,price:w.value,data:x.value.map(a=>({...a,remark:""}))}).then(a=>{a.code===0?(B.success("提交成功"),Z.go(-1)):B.error(a.msg),K.value=!1}).catch(a=>{K.value=!1})};X(()=>o.value,a=>{p.value="",h.value="",D(),Q(),oe(),E()}),X(()=>N.value,a=>{E()}),X(()=>p.value,a=>{h.value="",Q(),E()}),X(()=>h.value,a=>{E()});const de=M(()=>{let a=0;return x.value.forEach(c=>{a+=c.price*c.num}),w.value=a,a});return H(),ae(),D(),Q(),oe(),E(),(a,c)=>{const e=Ge,l=Ye,n=Ze,v=We,m=je,y=el,O=qe,C=Oe,g=fl,we=Re,Ee=Ie;return b(),I("div",hl,[i("div",_l,[u(v,{inline:!0},{default:_(()=>[u(n,{label:"展会名称",style:{width:"220px"}},{default:_(()=>[u(l,{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=t=>o.value=t),placeholder:"请选择展会名称",disabled:""},{default:_(()=>[(b(!0),I(R,null,q(L.value,t=>(b(),T(e,{key:t.id,label:t.exhibitionName,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"参展企业",style:{width:"220px"}},{default:_(()=>[u(l,{modelValue:N.value,"onUpdate:modelValue":c[1]||(c[1]=t=>N.value=t),placeholder:"请选择参展企业",disabled:""},{default:_(()=>[(b(!0),I(R,null,q(W.value,t=>(b(),T(e,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"展馆",style:{width:"220px"}},{default:_(()=>[u(l,{modelValue:p.value,"onUpdate:modelValue":c[2]||(c[2]=t=>p.value=t),placeholder:"请选择展馆"},{default:_(()=>[(b(!0),I(R,null,q(z.value,t=>(b(),T(e,{key:t.code,label:t.code,value:t.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"展位号",style:{width:"220px"}},{default:_(()=>[u(l,{modelValue:h.value,"onUpdate:modelValue":c[3]||(c[3]=t=>h.value=t),filterable:"","allow-create":"","default-first-option":"","reserve-keyword":!1,placeholder:"添加展位号",style:{width:"240px"}},{default:_(()=>[(b(!0),I(R,null,q(U.value,t=>(b(),T(e,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),i("div",gl,[i("div",Vl,[i("ul",yl,[(b(!0),I(R,null,q(F.value,(t,S)=>(b(),I("li",{key:S,onClick:ve=>G(S),class:re({active:t.project===P.value.project})},$(t.project),11,Il))),128))])]),i("div",Nl,[u(O,null,{default:_(()=>[i("div",wl,[(b(!0),I(R,null,q(P.value.data,(t,S)=>(b(),I("li",{key:S},[u(m,{style:{width:"100%",height:"200px"},src:t.img,"preview-src-list":[t.img],fit:"contain"},null,8,["src","preview-src-list"]),i("div",El,[i("p",{class:"title",title:t.position},$(t.position),9,Cl),i("p",{class:"p",title:t.size},[Sl,A($(t.size),1)],8,xl),i("p",{class:"p",title:t.price+"元/"+t.unit},[Fl,i("span",null,$(t.price+"元/"+t.unit),1)],8,kl),i("p",Pl,[zl,A($(t.num),1)])]),u(y,{type:"primary",onClick:ve=>Y(t),disabled:t.num<=0,style:{width:"100%"}},{default:_(()=>[A("加入购物车")]),_:2},1032,["onClick","disabled"])]))),128))])]),_:1})]),i("div",Al,[i("div",Bl,[u(we,{data:x.value,border:""},{default:_(()=>[u(C,{label:"服务项目",prop:"project","min-width":"120"}),u(C,{label:"位置/版面",prop:"position","min-width":"120"}),u(C,{label:"规格",prop:"size"}),u(C,{label:"单价(RMB)",prop:"price","min-width":"120"}),u(C,{label:"数量",width:"200px"},{default:_(t=>[u(g,{modelValue:t.row.num,"onUpdate:modelValue":S=>t.row.num=S,min:1,size:"small",onChange:(S,ve)=>{le(t.row,S)}},null,8,["modelValue","onUpdate:modelValue","onChange"]),u(y,{type:"danger",link:"",onClick:S=>te(t.row),style:{"margin-left":"10px"},icon:"Delete"},null,8,["onClick"])]),_:1})]),_:1},8,["data"])]),i("div",Tl,[i("div",Ul,[i("span",null,[A("已选物料 "),i("b",null,$(x.value.length),1),A(" 项")]),A(),i("span",null,[A("物料金额 "),i("b",null,"¥"+$(de.value),1)])]),i("div",Dl,[u(n,{label:"最终金额",style:{width:"100%","margin-bottom":"0"}},{default:_(()=>[u(Ee,{modelValue:w.value,"onUpdate:modelValue":c[4]||(c[4]=t=>w.value=t)},null,8,["modelValue"])]),_:1})]),u(y,{type:"primary",style:{width:"100%"},onClick:ie,loading:K.value,disabled:x.value.length<=0},{default:_(()=>[A("提交")]),_:1},8,["loading","disabled"])])])])])}}}),ft=ul($l,[["__scopeId","data-v-de91bc76"]]);export{ft as default};
