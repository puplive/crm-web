import{d as _e,l as m,s as Z,c as ee,t as le,b as _,O as p,Q as q,R as e,i as o,F as v,W as ve,a5 as he,N as oe,o as s,P as f,U as g,h as P,e as y,a3 as be,X as ge,Y as Pe}from"./index-CXHZvf4q.js";import{E as ye}from"./el-dialog-Dgi6K1gn.js";/* empty css                   */import{E as Ve}from"./el-col-Du8F9Zv_.js";import{E as Ce}from"./el-scrollbar-4lg7kmpw.js";import{a as we,E as Ee}from"./el-form-item-CjzOUbj7.js";/* empty css                 */import{E as Ne}from"./el-input-number-CR95xotX.js";/* empty css                  */import"./el-tag-BKHQJBMw.js";import{E as ke,a as Ue}from"./el-select-ClqRiZmz.js";import"./el-popper-kvSAsfd_.js";/* empty css                       */import{E as xe,a as Fe}from"./el-radio-DN0A5DbK.js";import{E as Ie}from"./el-image-viewer-Kn6aew3V.js";import{a as qe}from"./index-CmcOOHEj.js";import{g as Se}from"./index-b6ef-liI.js";import{_ as V}from"./rules-pzSmFXOw.js";import{E as Be}from"./index-Ck_64Yyt.js";import{E as Re}from"./index-DvbXMlUp.js";import{b as Oe}from"./request-D5zMqTLz.js";import{_ as $e}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BQnLN9qq.js";import"./use-form-item-B8Qj3pZg.js";import"./scroll-C6Gh4qq8.js";import"./vnode-BO_ADvFr.js";import"./refs-Dw1jXJTj.js";import"./event-BB_Ol6Sd.js";import"./castArray-DgK_tM7v.js";import"./_baseClone-BFD8Zqn6.js";import"./_initCloneObject-CSlZU8KL.js";import"./index-Dam1U20p.js";import"./isEqual-C7ib5S45.js";const Je=x=>(ge("data-v-d9e476f9"),x=x(),Pe(),x),De={class:"booth-reserve"},Te={class:"l"},ze={class:"title"},Ge={class:"img-box"},je={class:"r"},Ae={class:"form-box"},He=Je(()=>p("div",null,"预定展位",-1)),Le={style:{"text-align":"center"}},Qe={style:{padding:"15px"}},We={class:"dialog-footer"},Xe=_e({__name:"Reserve",setup(x){const te=ve(),N=he(),z=N.query.clueId,S=N.query.exhibitionId,ae=N.query.exhibitorId,h=m(N.query.hallCode),B=m([]),F=m([]),G=m([]),j=m([]),A=m([]),H=m([]),L={1:"%",2:"￥"},a=Z({clueId:z,exhibitionId:S,exhibitorId:ae,add:[],discount:[],position:[{hallCode:h.value,positionCode:"",companyBrand:[],product:"",unitPrice:"",type:1,length:0,width:0,costPrice:0,addPrice:0,discountPrice:0,finalPrice:0,deposit:0,isOffset:1,payType:1,ratio:0}]});m({});const R=m(null),t=Z({show:!1,index:0,form:{product:"",unitPrice:"",num:1,length:"",width:""}}),ie=u=>{t.form.unitPrice=Number(u.price),t.form.product=u.text,t.form.num=u.num},re=ee(()=>t.form.unitPrice?t.form.unitPrice+"元/"+(t.form.num===1?"":t.form.num)+"㎡":""),ne=()=>{let u=a.position.length;O(h.value,u),a.position.push({hallCode:h.value,positionCode:"",companyBrand:[],product:"",unitPrice:"",type:1,length:0,width:0,costPrice:0,addPrice:0,discountPrice:0,finalPrice:0,deposit:0,isOffset:1,payType:1,ratio:0})},O=(u,l)=>{F.value[l]=[],Se({exhibitionId:S,hallCode:u}).then(c=>{F.value[l]=c.data})};O(h.value,0);const $=m(null),ue=()=>{$.value.validate().then(u=>{u&&te.push({name:"BoothCreateOrder",query:{...N.query,companyName:I.value,data:JSON.stringify(a)}})}).catch(()=>{})},de=u=>{t.index=u,t.form.product="",t.form.unitPrice="",t.form.length=0,t.form.width=0,t.form.num=1,t.show=!0},se=()=>{R.value.validate().then(u=>{if(!u)return;t.show=!1;let l=t.form.length*t.form.width,c=l*t.form.unitPrice/t.form.num,i=Q(c),b=W(c);a.position[t.index].product=t.form.product,a.position[t.index].unitPrice=t.form.unitPrice,a.position[t.index].length=t.form.length,a.position[t.index].width=t.form.width,a.position[t.index].area=l,a.position[t.index].costPrice=Number(c.toFixed(2)),a.position[t.index].addPrice=Number(i.toFixed(2)),a.position[t.index].discountPrice=Number(b.toFixed(2)),a.position[t.index].finalPrice=Number((c+i-b).toFixed(2)),$.value.clearValidate(["position["+t.index+"].product"])}).catch(()=>{})},Q=u=>{let l=0;return a.add.forEach(c=>{let i=JSON.parse(c);i.unit===1?l+=u*i.price/100:i.unit===2&&(l+=i.price)}),l},W=u=>{let l=0;return a.discount.forEach(c=>{let i=JSON.parse(c);i.unit===1?l+=u*i.price/100:i.unit===2&&(l+=i.price)}),l};le(()=>a.add,u=>{a.position.forEach(l=>{l.addPrice=Number(Q(l.costPrice).toFixed(2)),l.finalPrice=Number((l.costPrice+l.addPrice-l.discountPrice).toFixed(2))})}),le(()=>a.discount,u=>{a.position.forEach(l=>{l.discountPrice=Number(W(l.costPrice).toFixed(2)),l.finalPrice=Number((l.costPrice+l.addPrice-l.discountPrice).toFixed(2))})});const I=m(""),J=m(!0);qe({clueId:z,exhibitionId:S}).then(u=>{let l=u.data;G.value=l.attachPrice.add,j.value=l.attachPrice.discount,A.value=l.companyBrand,H.value=l.unitPrice,B.value=l.exhibitionHall,I.value=l.companyName,J.value=l.isNew});const X=ee(()=>{let u=B.value.find(l=>l.code===h.value);return u?u.img:""});return(u,l)=>{const c=Ie,i=we,b=xe,Y=Fe,C=ke,w=Ue,E=Be,k=Re,D=Ne,pe=oe("DeleteFilled"),K=Oe,M=Ee,ce=Ce,T=Ve,me=oe("Close"),fe=ye;return s(),_(v,null,[p("div",De,[p("div",Te,[p("div",ze,[p("span",null,q(I.value),1),p("span",null,"展馆号："+q(h.value),1)]),p("div",Ge,[e(c,{style:{width:"100%",height:"100%"},src:X.value,"preview-src-list":[X.value],fit:"scale-down",alt:"展馆图片"},null,8,["src","preview-src-list"])])]),p("div",je,[p("div",Ae,[e(ce,{height:"100%"},{default:o(()=>[e(M,{ref_key:"formRef",ref:$,model:a,"label-width":"auto",class:"form"},{default:o(()=>[He,e(i,{label:"企业名称"},{default:o(()=>[f(q(I.value),1)]),_:1}),e(i,{label:"新展商"},{default:o(()=>[e(Y,{modelValue:J.value,"onUpdate:modelValue":l[0]||(l[0]=r=>J.value=r),disabled:""},{default:o(()=>[e(b,{value:!0},{default:o(()=>[f("是")]),_:1}),e(b,{value:!1},{default:o(()=>[f("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"加收"},{default:o(()=>[e(w,{modelValue:a.add,"onUpdate:modelValue":l[1]||(l[1]=r=>a.add=r),multiple:"",placeholder:"请选择"},{default:o(()=>[(s(!0),_(v,null,g(G.value,(r,n)=>(s(),P(C,{key:n,label:r.text+" "+r.price+L[r.unit],value:JSON.stringify(r)},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"折扣"},{default:o(()=>[e(w,{modelValue:a.discount,"onUpdate:modelValue":l[2]||(l[2]=r=>a.discount=r),multiple:"",placeholder:"请选择"},{default:o(()=>[(s(!0),_(v,null,g(j.value,(r,n)=>(s(),P(C,{key:n,label:r.text+" "+r.price+L[r.unit],value:JSON.stringify(r)},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:""},{default:o(()=>[e(E,{icon:"Plus",onClick:ne},{default:o(()=>[f("添加展位")]),_:1})]),_:1}),(s(!0),_(v,null,g(a.position,(r,n)=>(s(),_("div",{class:"item",key:n},[e(i,{label:"展馆号",prop:`position[${n}].hallCode`,rules:y(V).required},{default:o(()=>[e(w,{modelValue:a.position[n].hallCode,"onUpdate:modelValue":d=>a.position[n].hallCode=d,placeholder:"请选择",onChange:()=>{O(r.hallCode,n),h.value=r.hallCode}},{default:o(()=>[(s(!0),_(v,null,g(B.value,(d,U)=>(s(),P(C,{key:U,label:d.code,value:d.code},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["prop","rules"]),e(i,{label:"展位号",prop:`position[${n}].positionCode`,rules:y(V).required},{default:o(()=>[e(w,{modelValue:a.position[n].positionCode,"onUpdate:modelValue":d=>a.position[n].positionCode=d,filterable:"","allow-create":"","default-first-option":"","reserve-keyword":!1,placeholder:"请选择"},{default:o(()=>[(s(!0),_(v,null,g(F.value[n],(d,U)=>(s(),P(C,{key:U,label:d,value:d},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"]),e(i,{label:"品牌"},{default:o(()=>[e(w,{modelValue:a.position[n].companyBrand,"onUpdate:modelValue":d=>a.position[n].companyBrand=d,multiple:"",placeholder:"请选择"},{default:o(()=>[(s(!0),_(v,null,g(A.value,(d,U)=>(s(),P(C,{key:U,label:d,value:d},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"展位类型"},{default:o(()=>[e(Y,{modelValue:a.position[n].type,"onUpdate:modelValue":d=>a.position[n].type=d},{default:o(()=>[e(b,{value:1},{default:o(()=>[f("标准")]),_:1}),e(b,{value:2},{default:o(()=>[f("特装")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"展位规格",prop:`position[${n}].product`,rules:y(V).required},{default:o(()=>[e(E,{size:"small",onClick:d=>de(n)},{default:o(()=>[f("添加")]),_:2},1032,["onClick"])]),_:2},1032,["prop","rules"]),a.position[n].product?(s(),P(i,{key:0,label:" "},{default:o(()=>[p("div",null,q(a.position[n].product+" "+a.position[n].area+"㎡"),1)]),_:2},1024)):be("",!0),e(i,{label:"展位原价"},{default:o(()=>[e(k,{modelValue:a.position[n].costPrice,"onUpdate:modelValue":d=>a.position[n].costPrice=d,disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"加收金额"},{default:o(()=>[e(k,{"model-value":a.position[n].addPrice,disabled:""},null,8,["model-value"])]),_:2},1024),e(i,{label:"折扣金额"},{default:o(()=>[e(k,{"model-value":a.position[n].discountPrice,disabled:""},null,8,["model-value"])]),_:2},1024),e(i,{label:"最终金额",prop:`position[${n}].finalPrice`,rules:y(V).required},{default:o(()=>[e(D,{modelValue:a.position[n].finalPrice,"onUpdate:modelValue":d=>a.position[n].finalPrice=d,min:0,controls:!1,class:"s-number-input"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"]),p("div",Le,[e(E,{link:"",type:"danger",onClick:d=>{a.position.splice(n,1),F.value.splice(n,1)}},{default:o(()=>[e(K,null,{default:o(()=>[e(pe)]),_:1})]),_:2},1032,["onClick"])])]))),128))]),_:1},8,["model"])]),_:1})]),p("div",Qe,[e(E,{type:"primary",onClick:ue,style:{width:"100%"}},{default:o(()=>[f("确认")]),_:1})])])]),e(fe,{modelValue:t.show,"onUpdate:modelValue":l[7]||(l[7]=r=>t.show=r),title:"添加规格",width:"500",draggable:"",onClose:l[8]||(l[8]=()=>{R.value.resetFields()})},{footer:o(()=>[p("div",We,[e(E,{onClick:l[6]||(l[6]=r=>t.show=!1)},{default:o(()=>[f("取消")]),_:1}),e(E,{type:"primary",onClick:se},{default:o(()=>[f("确定")]),_:1})])]),default:o(()=>[e(M,{ref_key:"ggFormRef",ref:R,model:t.form,"label-width":"auto"},{default:o(()=>[e(i,{label:"产品名称",prop:"product",rules:y(V).required},{default:o(()=>[e(w,{modelValue:t.form.product,"onUpdate:modelValue":l[3]||(l[3]=r=>t.form.product=r),placeholder:"",onChange:ie},{default:o(()=>[(s(!0),_(v,null,g(H.value,r=>(s(),P(C,{key:r.id,label:r.text+" "+r.price+"/"+r.num+"/㎡",value:r},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"]),e(i,{label:"单价",prop:"unitPrice"},{default:o(()=>[e(k,{"model-value":re.value,disabled:""},null,8,["model-value"])]),_:1}),e(i,{label:"尺寸"},{default:o(()=>[e(T,{span:11},{default:o(()=>[e(i,{label:"",prop:"length",rules:y(V).required},{default:o(()=>[e(D,{modelValue:t.form.length,"onUpdate:modelValue":l[4]||(l[4]=r=>t.form.length=r),min:0,controls:!1,style:{flex:"1"}},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(T,{span:2,style:{display:"flex","align-items":"center","justify-content":"center","font-size":"20px"}},{default:o(()=>[e(K,null,{default:o(()=>[e(me)]),_:1})]),_:1}),e(T,{span:11},{default:o(()=>[e(i,{label:"",prop:"width",rules:y(V).required},{default:o(()=>[e(D,{modelValue:t.form.width,"onUpdate:modelValue":l[5]||(l[5]=r=>t.form.width=r),min:0,controls:!1,style:{flex:"1"}},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(i,{label:"面积"},{default:o(()=>[e(k,{"model-value":Number((t.form.length*t.form.width).toFixed(2)),autocomplete:"off",disabled:""},null,8,["model-value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}}),xl=$e(Xe,[["__scopeId","data-v-d9e476f9"]]);export{xl as default};
