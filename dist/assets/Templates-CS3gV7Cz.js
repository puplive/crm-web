import{d as h,t as p,b as u,X as a,$ as l,i as r,a5 as y,am as g,o as i,J as E,a1 as b,h as k,Z as C,H as I,I as S,e as V,Y as w,a2 as x,a3 as B}from"./index-D6lb1vAv.js";import{E as L}from"./scrollbar-DU4G5b5p.js";/* empty css                    */import{a as R,E as T}from"./radio-DpKKZ63o.js";import{E as q}from"./button-CnviZ8cJ.js";import{a as N}from"./index-CabLtwQT.js";import{v as $}from"./Template-C7c3fVsU.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-form-item-D2gyIkin.js";import"./event-BB_Ol6Sd.js";/* empty css                */const z=o=>(x("data-v-32afcfcb"),o=o(),B(),o),F={class:"contract-templates"},G=z(()=>a("div",{style:{"margin-bottom":"20px"}},"签订合同",-1)),H={class:"content",style:{"min-height":"0"}},J={class:"l list"},U={class:"item"},X={class:"r"},Y=h({__name:"Templates",setup(o){y();const n=g(),s=p(""),c=p([]);return(async()=>{N.getList({type:n.query.type}).then(e=>{e.code===0&&(c.value=e.data,s.value=e.data.length>0?e.data[0].id:"")})})(),(e,d)=>{const m=q,_=T,f=R,v=L;return i(),u("div",F,[G,a("div",H,[a("div",J,[l(f,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=t=>s.value=t)},{default:r(()=>[(i(!0),u(E,null,b(c.value,t=>(i(),k(_,{value:t.id,key:t.id,style:{width:"100%","margin-right":"0"}},{default:r(()=>[a("div",U,[a("span",null,C(t.name),1),I(l(m,{type:"primary",size:"small",onClick:j=>e.$router.push({name:"ContractConclude",query:{id:t.id,orderId:V(n).query.id}})},{default:r(()=>[w("使用模板")]),_:2},1032,["onClick"]),[[S,s.value===t.id]])])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),a("div",X,[l(v,null,{default:r(()=>[l($)]),_:1})])])])}}}),st=D(Y,[["__scopeId","data-v-32afcfcb"]]);export{st as default};