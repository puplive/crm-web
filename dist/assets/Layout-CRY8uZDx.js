import{c as p}from"./index-DHg2I1DM.js";import{b as m}from"./index-ErwEA2Es.js";import{d as f,l as t,o as s,f as i,P as o,R as n,F as u,V as x,X as b,Z as y,a8 as I}from"./index-BcUC0sDV.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./request-LfwzVzzV.js";import"./typescript-BxLz-5vR.js";import"./index-tw6LFjf8.js";const k={class:"hall-layout"},N={class:"hall-info"},q={class:"s1"},B={class:"s2"},C={class:"s2"},R=b('<div class="p1" data-v-808eee28> 请选择 <div class="c" data-v-808eee28><div class="c1" data-v-808eee28></div><span style="margin-right:50px;" data-v-808eee28>可选</span><div class="c2" data-v-808eee28></div><span data-v-808eee28>不可选</span></div></div>',1),S={class:"hall-list"},T=["onClick"],L={key:1,class:"hall-item"},V=f({__name:"Layout",setup(D){y();const d=I(),v=t(d.query.clueId),c=t(d.query.exhibitionId),h=t(d.query.exhibitorId),e=t({}),r=t([]);return m({id:c.value}).then(a=>{a.code===0&&(e.value=a.data)}),p({exhibitionId:c.value}).then(a=>{a.code===0&&(r.value=a.data)}),(a,E)=>(s(),i("div",k,[o("div",N,[o("span",q,n(e.value.exhibitionName),1),o("span",B,"布展日期 "+n(e.value.arrangeStartTime+"到"+e.value.arrangeEndTime),1),o("span",C,"开展日期 "+n(e.value.startTime+"到"+e.value.endTime),1)]),R,o("div",S,[(s(!0),i(u,null,x(r.value,(l,_)=>(s(),i(u,{key:_},[l.isSelect?(s(),i("div",{key:0,class:"hall-item active",onClick:F=>a.$router.push({name:"BoothReserve",query:{clueId:v.value,exhibitionId:c.value,exhibitorId:h.value,hallCode:l.code,exhibitionName:e.value.exhibitionName}})},n(l.code),9,T)):(s(),i("div",L,n(l.code),1))],64))),128))])]))}}),z=g(V,[["__scopeId","data-v-808eee28"]]);export{z as default};
