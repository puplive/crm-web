import{d as K,t as y,z as w,b as f,X as $,Z as j,e as i,$ as s,i as r,J as _,a5 as Q,al as W,o as t,a1 as k,h as m,Y as q,aj as x,a7 as R}from"./index-Burj71Mz.js";import{E as ee,a as le}from"./form-item-BgXu7TbV.js";import{E as ae}from"./cascader-panel-C2x9XH30.js";/* empty css              */import"./popper-DN7jCsAx.js";import"./tag-BMbTJcvT.js";import{E as oe,a as te}from"./checkbox-BId4FXGy.js";import{E as ue,a as de}from"./radio-CepCdyd7.js";import"./scrollbar-BBvbl3-b.js";/* empty css                       *//* empty css                    */import{E as ne}from"./button-Bh1aP2J2.js";import{E as re,a as se}from"./select-C6REEyqW.js";import{a as v}from"./index-D6cOPOhz.js";import{c as S}from"./index-CVEkRURf.js";import{_ as b}from"./rules-F8IXRWD9.js";/* empty css                */import{E as ce}from"./index-BBQhpRIJ.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-form-item-tjLgBssR.js";import"./castArray-UQdrNKdR.js";import"./_baseClone-ag1-RHwQ.js";import"./_initCloneObject-DkUEurvZ.js";import"./isEqual-BP9o_BCC.js";import"./aria-KgdLjl5h.js";import"./event-BB_Ol6Sd.js";import"./arrays-6TrVLtTe.js";import"./scroll-dalFB88l.js";import"./cloneDeep-DY_oMc42.js";import"./focus-trap-BKKcV_7_.js";const pe={class:"",style:{"margin-bottom":"20px"}},ie={style:{width:"500px"}},ve={style:{"margin-top":"20px","text-align":"right"}},ye=K({__name:"CluesAdd",setup(fe){const I=Q(),E=W(),M=y(null),l=y({companyName:"",contactName:"",contactTel:"",country:"",province:"",city:"",address:"",companyBrand:[""],customField:[]}),U=y([]),h=y([]),N=y([]),C=y(""),g=y(""),B=y(""),O=y([]),z=()=>{M.value.validate(u=>{u&&(E.name==="CluesEdit"?v.edit({id:E.query.id,...l.value}).then(a=>{a.code===0?(R.success("编辑成功"),I.go(-1)):R.error(a.msg)}):v.add(l.value).then(a=>{a.code===0?(R.success("保存成功"),I.go(-1)):R.error(a.msg)}))})},D=()=>{v.getCountry().then(u=>{u.code===0&&(U.value=u.data,E.name!=="CluesEdit"&&(C.value="CHN"))})},A=()=>{v.getProvince({countryCode:C.value}).then(u=>{u.code===0&&(h.value=u.data)})},G=()=>{v.getCity({provinceCode:g.value}).then(u=>{u.code===0&&(N.value=u.data)})};w(()=>C.value,u=>{let a=U.value.find(n=>n.code==u);l.value.country=a&&a.name||"",A()}),w(()=>g.value,u=>{let a=h.value.find(n=>n.code==u);l.value.province=a&&a.name||"",G()}),w(()=>B.value,u=>{let a=N.value.find(n=>n.code==u);l.value.city=a&&a.name||""});const H=()=>{v.getCustomField().then(u=>{u.code===0&&(O.value=u.data,u.data.forEach(a=>{l.value.customField.push({[a.key]:S[a.type].value})}),J())})};D(),H();const J=()=>{E.name==="CluesEdit"&&v.getData({id:E.query.id}).then(u=>{if(u.code===0){let a=u.data;for(let n in a)n==="customField"?a[n].forEach(c=>{let p=Object.keys(c)[0],V=Object.values(c)[0],F=l.value.customField.findIndex(T=>Object.keys(T)[0]===p);F!==-1&&(l.value.customField[F][p]=V)}):n==="customFieldTrans"||(l.value[n]=a[n]);v.getCountry().then(n=>{n.code===0&&(U.value=n.data,C.value=U.value.find(c=>c.name==l.value.country).code,v.getProvince({countryCode:C.value}).then(c=>{c.code===0&&(h.value=c.data,g.value=h.value.find(p=>p.name==l.value.province).code,v.getCity({provinceCode:g.value}).then(p=>{p.code===0&&(N.value=p.data,B.value=N.value.find(V=>V.name==l.value.city).code)}))}))})}})};return(u,a)=>{const n=ce,c=le,p=re,V=se,F=ne,T=ue,L=de,X=oe,Y=te,P=ae,Z=ee;return t(),f(_,null,[$("div",pe,[$("span",null,j(i(E).name==="CluesEdit"?"编辑":"新建")+"销售线索",1)]),$("div",ie,[s(Z,{ref_key:"formRef",ref:M,model:l.value,"label-width":"auto","label-position":"left"},{default:r(()=>[s(c,{label:"企业名称",prop:"companyName",rules:i(b).required},{default:r(()=>[s(n,{modelValue:l.value.companyName,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value.companyName=e)},null,8,["modelValue"])]),_:1},8,["rules"]),s(c,{label:"联系人",prop:"contactName",rules:i(b).required},{default:r(()=>[s(n,{modelValue:l.value.contactName,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value.contactName=e)},null,8,["modelValue"])]),_:1},8,["rules"]),s(c,{label:"联系电话",prop:"contactTel",rules:i(b).phone},{default:r(()=>[s(n,{modelValue:l.value.contactTel,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value.contactTel=e)},null,8,["modelValue"])]),_:1},8,["rules"]),s(c,{label:"国家",prop:"country",rules:i(b).select},{default:r(()=>[s(V,{modelValue:C.value,"onUpdate:modelValue":a[3]||(a[3]=e=>C.value=e)},{default:r(()=>[(t(!0),f(_,null,k(U.value,e=>(t(),m(p,{key:e.code,label:e.name,value:e.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"]),s(c,{label:"省份",prop:"province",rules:i(b).select},{default:r(()=>[s(V,{modelValue:g.value,"onUpdate:modelValue":a[4]||(a[4]=e=>g.value=e)},{default:r(()=>[(t(!0),f(_,null,k(h.value,e=>(t(),m(p,{key:e.code,label:e.name,value:e.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"]),s(c,{label:"城市",prop:"city",rules:i(b).select},{default:r(()=>[s(V,{modelValue:B.value,"onUpdate:modelValue":a[5]||(a[5]=e=>B.value=e)},{default:r(()=>[(t(!0),f(_,null,k(N.value,e=>(t(),m(p,{key:e.code,label:e.name,value:e.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"]),s(c,{label:"详细地址",prop:"address",rules:i(b).required},{default:r(()=>[s(n,{type:"textarea",modelValue:l.value.address,"onUpdate:modelValue":a[6]||(a[6]=e=>l.value.address=e)},null,8,["modelValue"])]),_:1},8,["rules"]),(t(!0),f(_,null,k(l.value.companyBrand,(e,d)=>(t(),m(c,{key:d,label:d===0?"品牌":" ",prop:`companyBrand[${d}]`,rules:i(b).required},{default:r(()=>[s(n,{modelValue:l.value.companyBrand[d],"onUpdate:modelValue":o=>l.value.companyBrand[d]=o},{append:r(()=>[d===0?(t(),m(F,{key:0,onClick:a[7]||(a[7]=o=>l.value.companyBrand.push("")),icon:"Plus"})):(t(),m(F,{key:1,onClick:o=>l.value.companyBrand.splice(d,1),icon:"Minus"},null,8,["onClick"]))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","prop","rules"]))),128)),(t(!0),f(_,null,k(O.value,(e,d)=>(t(),m(c,{key:e.key,label:e.name,prop:`customField[${d}][${e.key}]`,rules:e.isRequired?i(S)[e.type].rules:[]},{default:r(()=>[e.type===1?(t(),m(n,{key:0,modelValue:l.value.customField[d][e.key],"onUpdate:modelValue":o=>l.value.customField[d][e.key]=o,modelModifiers:{trim:!0}},null,8,["modelValue","onUpdate:modelValue"])):e.type===2?(t(),m(n,{key:1,modelValue:l.value.customField[d][e.key],"onUpdate:modelValue":o=>l.value.customField[d][e.key]=o,modelModifiers:{trim:!0},type:"textarea"},null,8,["modelValue","onUpdate:modelValue"])):e.type===3?(t(),m(V,{key:2,modelValue:l.value.customField[d][e.key],"onUpdate:modelValue":o=>l.value.customField[d][e.key]=o},{default:r(()=>[(t(!0),f(_,null,k(e.data||[],o=>(t(),m(p,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):e.type===4?(t(),m(L,{key:3,modelValue:l.value.customField[d][e.key],"onUpdate:modelValue":o=>l.value.customField[d][e.key]=o},{default:r(()=>[(t(!0),f(_,null,k(e.data||[],o=>(t(),m(T,{key:o.id,value:o.id},{default:r(()=>[q(j(o.name),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):e.type===5?(t(),m(Y,{key:4,modelValue:l.value.customField[d][e.key],"onUpdate:modelValue":o=>l.value.customField[d][e.key]=o},{default:r(()=>[(t(!0),f(_,null,k(e.data||[],o=>(t(),m(X,{key:o.id,value:o.id,name:"type"},{default:r(()=>[q(j(o.name),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):e.type===6?(t(),m(P,{key:5,clearable:"",style:{width:"100%"},modelValue:l.value.customField[d][e.key],"onUpdate:modelValue":o=>l.value.customField[d][e.key]=o,options:e.data,props:{value:"id",label:"name",children:"child",checkStrictly:!0}},null,8,["modelValue","onUpdate:modelValue","options"])):e.type===7?(t(),m(P,{key:6,clearable:"",style:{width:"100%"},modelValue:l.value.customField[d][e.key],"onUpdate:modelValue":o=>l.value.customField[d][e.key]=o,options:e.data,props:{value:"id",label:"name",children:"child",checkStrictly:!0,multiple:!0}},null,8,["modelValue","onUpdate:modelValue","options"])):x("",!0)]),_:2},1032,["label","prop","rules"]))),128)),$("div",ve,[s(F,{type:"primary",onClick:z,size:"small"},{default:r(()=>[q("保存")]),_:1}),s(F,{type:"default",onClick:a[8]||(a[8]=e=>u.$router.go(-1)),size:"small"},{default:r(()=>[q("取消")]),_:1})])]),_:1},8,["model"])])],64)}}}),Xe=me(ye,[["__scopeId","data-v-8ed8a2e3"]]);export{Xe as default};
