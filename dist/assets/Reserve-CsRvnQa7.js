import{d as $,s as P,O as k,o as f,f as b,P as s,S as e,w as l,Q as m,F as v,V as y,c as I,_ as O,$ as q}from"./index-DVHkByco.js";import{E as z}from"./el-dialog-bp7p8zQB.js";import"./el-overlay-C63ZvL_K.js";import{E as G}from"./el-col-BldbVot-.js";import{a as T}from"./el-scrollbar-CG_JaPfx.js";import{a as A,E as L,b as Q}from"./el-input-Dfe8Uzhl.js";import{E as H}from"./el-button-9__Ng1jP.js";import"./el-tag-BHjyucA7.js";import{a as J,E as K}from"./el-select-DgBIHiZD.js";import{E as M,a as W}from"./el-radio-BWxioSU6.js";import{b as X}from"./index-DiCdjWxQ.js";import{E as Y}from"./index-C-4RkVC5.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./scroll-KUqymI_7.js";import"./vnode-tcDvg3gh.js";import"./typescript-_aKlIHPK.js";import"./_initCloneObject-CSxpNamp.js";import"./isEqual-QQ34r9eu.js";import"./request-kZhpW0Wr.js";const Z=V=>(O("data-v-38f75a54"),V=V(),q(),V),le={class:"booth-reserve"},oe=Z(()=>s("div",{class:"l"},[s("div",{class:"title"},[s("span",null,"北京展会"),s("span",null,"北京展会"),s("span",null,"展馆号：北京展会")]),s("div",{class:"img-box"})],-1)),te={class:"r"},ae={class:"form-box"},ne=Z(()=>s("div",null,"预定展位",-1)),de={style:{"text-align":"center"}},ie={style:{padding:"15px"}},ue={class:"dialog-footer"},se=$({__name:"Reserve",setup(V){const t=P({clueId:1,exhibitionId:1,exhibitorId:1,add:[],discount:[],position:[]}),o=P({show:!1,index:0,form:{product:"",unitPrice:"",length:"",width:""}}),x=()=>{t.position.push({hallCode:"",positionCode:"",companyBrand:[],product:"",unitPrice:"",type:1,length:0,width:0,costPrice:0,addPrice:0,discountPrice:0,finalPrice:0,deposit:0,isOffset:1,payType:1,ratio:20})},B=()=>{X.create(t).then(c=>{console.log(c)})},S=c=>{o.show=!0,o.index=c,o.form.product="",o.form.unitPrice="",o.form.length="",o.form.width=""},F=()=>{o.show=!1,t.position[o.index].product=o.form.product,t.position[o.index].unitPrice=o.form.unitPrice,t.position[o.index].length=o.form.length,t.position[o.index].width=o.form.width,t.position[o.index].area=o.form.length*o.form.width};return(c,n)=>{const d=A,g=M,C=W,r=J,p=K,_=H,h=L,j=k("DeleteFilled"),E=Y,U=Q,D=T,w=G,N=k("Close"),R=z;return f(),b(v,null,[s("div",le,[oe,s("div",te,[s("div",ae,[e(D,{height:"100%"},{default:l(()=>[e(U,{model:t,"label-width":"auto",class:"form"},{default:l(()=>[ne,e(d,{label:"企业名称"}),e(d,{label:"新展商"},{default:l(()=>[e(C,{modelValue:t.resource,"onUpdate:modelValue":n[0]||(n[0]=a=>t.resource=a)},{default:l(()=>[e(g,{value:"1"},{default:l(()=>[m("是")]),_:1}),e(g,{value:"2"},{default:l(()=>[m("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"加收"},{default:l(()=>[e(p,{modelValue:t.add,"onUpdate:modelValue":n[1]||(n[1]=a=>t.add=a),multiple:"",placeholder:"请选择"},{default:l(()=>[e(r,{label:"Zone one",value:"shanghai"}),e(r,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"折扣"},{default:l(()=>[e(p,{modelValue:t.discount,"onUpdate:modelValue":n[2]||(n[2]=a=>t.discount=a),multiple:"",placeholder:"请选择"},{default:l(()=>[e(r,{label:"Zone one",value:"shanghai"}),e(r,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:""},{default:l(()=>[e(_,{icon:"Plus",onClick:x},{default:l(()=>[m("添加展位")]),_:1})]),_:1}),(f(!0),b(v,null,y(t.position,(a,i)=>(f(),b("div",{class:"item",key:i},[e(d,{label:"展馆号"},{default:l(()=>[e(p,{modelValue:t.position[i].hallCode,"onUpdate:modelValue":u=>t.position[i].hallCode=u,placeholder:"请选择"},{default:l(()=>[e(r,{label:"Zone one",value:"shanghai"}),e(r,{label:"Zone two",value:"beijing"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{label:"展位号"},{default:l(()=>[e(p,{modelValue:t.position[i].hallCode,"onUpdate:modelValue":u=>t.position[i].hallCode=u,placeholder:"请选择"},{default:l(()=>[e(r,{label:"Zone one",value:"shanghai"}),e(r,{label:"Zone two",value:"beijing"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{label:"品牌"},{default:l(()=>[e(p,{modelValue:t.position[i].companyBrand,"onUpdate:modelValue":u=>t.position[i].companyBrand=u,multiple:"",placeholder:"请选择"},{default:l(()=>[e(r,{label:"Zone one",value:"shanghai"}),e(r,{label:"Zone two",value:"beijing"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{label:"展位类型"},{default:l(()=>[e(C,{modelValue:t.position[i].type,"onUpdate:modelValue":u=>t.position[i].type=u},{default:l(()=>[e(g,{value:1},{default:l(()=>[m("标准")]),_:1}),e(g,{value:2},{default:l(()=>[m("特装")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{label:"展位规格"},{default:l(()=>[e(_,{size:"small",onClick:u=>S(i)},{default:l(()=>[m("添加")]),_:2},1032,["onClick"])]),_:2},1024),e(d,{label:"展位原价"},{default:l(()=>[e(h,{"model-value":a.unitPrice*a.width*a.length},null,8,["model-value"])]),_:2},1024),e(d,{label:"折后金额"},{default:l(()=>[e(h,{modelValue:t.position[i].discountPrice,"onUpdate:modelValue":u=>t.position[i].discountPrice=u},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{label:"最终金额"},{default:l(()=>[e(h,{modelValue:t.position[i].finalPrice,"onUpdate:modelValue":u=>t.position[i].finalPrice=u},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),s("div",de,[e(_,{link:"",type:"danger",onClick:u=>t.position.splice(i,1)},{default:l(()=>[e(E,null,{default:l(()=>[e(j)]),_:1})]),_:2},1032,["onClick"])])]))),128))]),_:1},8,["model"])]),_:1})]),s("div",ie,[e(_,{type:"primary",onClick:B,style:{width:"100%"}},{default:l(()=>[m("确认")]),_:1})])])]),e(R,{modelValue:o.show,"onUpdate:modelValue":n[8]||(n[8]=a=>o.show=a),title:"添加规格",width:"500",draggable:""},{footer:l(()=>[s("div",ue,[e(_,{onClick:n[7]||(n[7]=a=>o.show=!1)},{default:l(()=>[m("取消")]),_:1}),e(_,{type:"primary",onClick:F},{default:l(()=>[m("确定")]),_:1})])]),default:l(()=>[e(U,{ref:"ggFormRef",model:o.form,"label-width":"auto"},{default:l(()=>[e(d,{label:"产品名称",prop:"product",rules:[{required:!0,message:"请选择项目"}]},{default:l(()=>[e(p,{modelValue:o.form.product,"onUpdate:modelValue":n[3]||(n[3]=a=>o.form.product=a),placeholder:""},{default:l(()=>[(f(!0),b(v,null,y(c.exhibitionData,a=>(f(),I(r,{key:a.id,label:a.exhibitionName,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"单价",prop:"unitPrice",rules:[{required:!0,message:"请选择项目"}]},{default:l(()=>[e(p,{modelValue:o.form.unitPrice,"onUpdate:modelValue":n[4]||(n[4]=a=>o.form.unitPrice=a),placeholder:""},{default:l(()=>[(f(!0),b(v,null,y(c.exhibitionData,a=>(f(),I(r,{key:a.id,label:a.exhibitionName,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"尺寸"},{default:l(()=>[e(w,{span:11},{default:l(()=>[e(h,{modelValue:o.form.length,"onUpdate:modelValue":n[5]||(n[5]=a=>o.form.length=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(w,{span:2,style:{display:"flex","align-items":"center","justify-content":"center","font-size":"20px"}},{default:l(()=>[e(E,null,{default:l(()=>[e(N)]),_:1})]),_:1}),e(w,{span:11},{default:l(()=>[e(h,{modelValue:o.form.width,"onUpdate:modelValue":n[6]||(n[6]=a=>o.form.width=a),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{label:"面积"},{default:l(()=>[e(h,{"model-value":o.form.length*o.form.width,autocomplete:"off"},null,8,["model-value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}}),Ze=ee(se,[["__scopeId","data-v-38f75a54"]]);export{Ze as default};