import{d as se,l as b,s as H,e as L,v as Q,O as W,o as s,f as m,P as c,R as I,a as Z,S as e,w as l,Q as f,F as _,V as v,Z as ce,a7 as pe,c as P,W as me,_ as fe,$ as _e}from"./index-Q273XHf8.js";import{E as he}from"./el-dialog-C8sC26KZ.js";/* empty css                   */import{E as be}from"./el-col-m4tKqkJv.js";import{a as ve}from"./el-scrollbar-0l_cZ0S_.js";/* empty css                     */import"./el-input-Dg3qt5Bb.js";import"./el-button-DXeH7ULc.js";import"./el-tag-DqRVPKx1.js";/* empty css                  *//* empty css                 */import{E as Pe}from"./el-image-viewer-G1g_jTJ1.js";import{g as ge}from"./index-Bar3g9kv.js";import{g as Ve}from"./index-B1Yzqv3z.js";import{E as ye,a as we}from"./index-Bvt8dlHX.js";import{E as Ee,a as xe}from"./index-TOYvJhkT.js";import{E as Ce,a as Ne}from"./index-Bkne1dct.js";import{E as ke}from"./index-nVic9h1r.js";import{E as Ue}from"./index-j8eE0ruH.js";import{E as Fe}from"./index-CRFYaBQA.js";import{_ as Ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CUKUieZ5.js";import"./constants-D7u2-Egf.js";import"./scroll-BIoQ-qBU.js";import"./vnode-CembcOEi.js";import"./typescript-CjU46sqC.js";import"./isEqual-DPHZFWxr.js";import"./request-CQ37sLB9.js";import"./index-r5W6hzzQ.js";const Se=C=>(fe("data-v-8fd62eca"),C=C(),_e(),C),Be={class:"booth-reserve"},Oe={class:"l"},Re={class:"title"},qe={class:"img-box"},Je={class:"r"},De={class:"form-box"},$e=Se(()=>c("div",null,"预定展位",-1)),Te={style:{"text-align":"center"}},ze={style:{padding:"15px"}},Ge={class:"dialog-footer"},je=se({__name:"Reserve",setup(C){const K=ce(),g=pe(),S=g.query.clueId,k=g.query.exhibitionId,M=g.query.exhibitorId,E=g.query.hallCode,X=g.query.exhibitionName,U=b([]),B=b([]),O=b([]),R=b([]),q=b([]),J=b([]),D={1:"%",2:"￥"},t=H({clueId:S,exhibitionId:k,exhibitorId:M,add:[],discount:[],position:[{hallCode:E,positionCode:"",companyBrand:[],product:"",unitPrice:"",type:1,length:0,width:0,costPrice:0,addPrice:0,discountPrice:0,finalPrice:0,deposit:0,isOffset:1,payType:1,ratio:0}]});b({});const a=H({show:!1,index:0,form:{product:"",unitPrice:"",num:1,length:"",width:""}}),Y=r=>{a.form.unitPrice=Number(r.price),a.form.product=r.text,a.form.num=r.num},ee=L(()=>a.form.unitPrice?a.form.unitPrice+"元/"+(a.form.num===1?"":a.form.num)+"㎡":""),oe=()=>{t.position.push({hallCode:E,positionCode:"",companyBrand:[],product:"",unitPrice:"",type:1,length:0,width:0,costPrice:0,addPrice:0,discountPrice:0,finalPrice:0,deposit:0,isOffset:1,payType:1,ratio:0})},le=()=>{K.push({name:"BoothCreateOrder",query:{...g.query,data:JSON.stringify(t)}})},te=r=>{a.show=!0,a.index=r,a.form.product="",a.form.unitPrice="",a.form.length="",a.form.width="",a.form.num=1},ae=()=>{a.show=!1;let r=a.form.length*a.form.width,o=r*a.form.unitPrice/a.form.num,p=$(o),i=T(o);t.position[a.index].product=a.form.product,t.position[a.index].unitPrice=a.form.unitPrice,t.position[a.index].length=a.form.length,t.position[a.index].width=a.form.width,t.position[a.index].area=r,t.position[a.index].costPrice=Number(o.toFixed(2)),t.position[a.index].addPrice=Number(p.toFixed(2)),t.position[a.index].discountPrice=Number(i.toFixed(2)),t.position[a.index].finalPrice=Number((o+p-i).toFixed(2))},$=r=>{let o=0;return t.add.forEach(p=>{let i=JSON.parse(p);i.unit===1?o+=r*i.price/100:i.unit===2&&(o+=i.price)}),o},T=r=>{let o=0;return t.discount.forEach(p=>{let i=JSON.parse(p);i.unit===1?o+=r*i.price/100:i.unit===2&&(o+=i.price)}),o};Q(()=>t.add,r=>{t.position.forEach(o=>{o.addPrice=Number($(o.costPrice).toFixed(2)),o.finalPrice=Number((o.costPrice+o.addPrice-o.discountPrice).toFixed(2))})}),Q(()=>t.discount,r=>{t.position.forEach(o=>{o.discountPrice=Number(T(o.costPrice).toFixed(2)),o.finalPrice=Number((o.costPrice+o.addPrice-o.discountPrice).toFixed(2))})});const ie=r=>{let o=t.position[r].costPrice,p=t.position[r].addPrice,i=t.position[r].discountPrice;return Number((o+p-i).toFixed(2))};Ve({exhibitionId:k,hallCode:E}).then(r=>{B.value=r.data}),ge({clueId:S,exhibitionId:k}).then(r=>{let o=r.data;O.value=o.attachPrice.add,R.value=o.attachPrice.discount,q.value=o.companyBrand,J.value=o.unitPrice,U.value=o.exhibitionHall});const z=L(()=>{let r=U.value.find(o=>o.code===E);return r?r.img:""});return(r,o)=>{const p=Pe,i=ye,N=Ee,G=xe,V=Ne,y=Ce,w=ke,h=Ue,ne=W("DeleteFilled"),j=Fe,A=we,re=ve,F=be,de=W("Close"),ue=he;return s(),m(_,null,[c("div",Be,[c("div",Oe,[c("div",Re,[c("span",null,I(Z(X)),1),c("span",null,"展馆号："+I(Z(E)),1)]),c("div",qe,[e(p,{style:{width:"100%",height:"100%"},src:z.value,"preview-src-list":[z.value],fit:"scale-down",alt:"展馆图片"},null,8,["src","preview-src-list"])])]),c("div",Je,[c("div",De,[e(re,{height:"100%"},{default:l(()=>[e(A,{model:t,"label-width":"auto",class:"form"},{default:l(()=>[$e,e(i,{label:"企业名称"}),e(i,{label:"新展商"},{default:l(()=>[e(G,{modelValue:t.resource,"onUpdate:modelValue":o[0]||(o[0]=n=>t.resource=n)},{default:l(()=>[e(N,{value:"1"},{default:l(()=>[f("是")]),_:1}),e(N,{value:"2"},{default:l(()=>[f("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"加收"},{default:l(()=>[e(y,{modelValue:t.add,"onUpdate:modelValue":o[1]||(o[1]=n=>t.add=n),multiple:"",placeholder:"请选择"},{default:l(()=>[(s(!0),m(_,null,v(O.value,(n,d)=>(s(),P(V,{key:d,label:n.text+" "+n.price+D[n.unit],value:JSON.stringify(n)},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"折扣"},{default:l(()=>[e(y,{modelValue:t.discount,"onUpdate:modelValue":o[2]||(o[2]=n=>t.discount=n),multiple:"",placeholder:"请选择"},{default:l(()=>[(s(!0),m(_,null,v(R.value,(n,d)=>(s(),P(V,{key:d,label:n.text+" "+n.price+D[n.unit],value:JSON.stringify(n)},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:""},{default:l(()=>[e(w,{icon:"Plus",onClick:oe},{default:l(()=>[f("添加展位")]),_:1})]),_:1}),(s(!0),m(_,null,v(t.position,(n,d)=>(s(),m("div",{class:"item",key:d},[e(i,{label:"展馆号"},{default:l(()=>[e(y,{modelValue:t.position[d].hallCode,"onUpdate:modelValue":u=>t.position[d].hallCode=u,placeholder:"请选择"},{default:l(()=>[(s(!0),m(_,null,v(U.value,(u,x)=>(s(),P(V,{key:x,label:u.code,value:u.code},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"展位号"},{default:l(()=>[e(y,{modelValue:t.position[d].positionCode,"onUpdate:modelValue":u=>t.position[d].positionCode=u,filterable:"","allow-create":"","default-first-option":"","reserve-keyword":!1,placeholder:"请选择"},{default:l(()=>[(s(!0),m(_,null,v(B.value,(u,x)=>(s(),P(V,{key:x,label:u,value:u},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"品牌"},{default:l(()=>[e(y,{modelValue:t.position[d].companyBrand,"onUpdate:modelValue":u=>t.position[d].companyBrand=u,multiple:"",placeholder:"请选择"},{default:l(()=>[(s(!0),m(_,null,v(q.value,(u,x)=>(s(),P(V,{key:x,label:u,value:u},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"展位类型"},{default:l(()=>[e(G,{modelValue:t.position[d].type,"onUpdate:modelValue":u=>t.position[d].type=u},{default:l(()=>[e(N,{value:1},{default:l(()=>[f("标准")]),_:1}),e(N,{value:2},{default:l(()=>[f("特装")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"展位规格"},{default:l(()=>[e(w,{size:"small",onClick:u=>te(d)},{default:l(()=>[f("添加")]),_:2},1032,["onClick"])]),_:2},1024),t.position[d].product?(s(),P(i,{key:0,label:" "},{default:l(()=>[c("div",null,I(t.position[d].product+" "+t.position[d].area+"㎡"),1)]),_:2},1024)):me("",!0),e(i,{label:"展位原价"},{default:l(()=>[e(h,{modelValue:t.position[d].costPrice,"onUpdate:modelValue":u=>t.position[d].costPrice=u,disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"折后金额"},{default:l(()=>[e(h,{"model-value":ie(d),disabled:""},null,8,["model-value"])]),_:2},1024),e(i,{label:"最终金额"},{default:l(()=>[e(h,{modelValue:t.position[d].finalPrice,"onUpdate:modelValue":u=>t.position[d].finalPrice=u},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),c("div",Te,[e(w,{link:"",type:"danger",onClick:u=>t.position.splice(d,1)},{default:l(()=>[e(j,null,{default:l(()=>[e(ne)]),_:1})]),_:2},1032,["onClick"])])]))),128))]),_:1},8,["model"])]),_:1})]),c("div",ze,[e(w,{type:"primary",onClick:le,style:{width:"100%"}},{default:l(()=>[f("确认")]),_:1})])])]),e(ue,{modelValue:a.show,"onUpdate:modelValue":o[7]||(o[7]=n=>a.show=n),title:"添加规格",width:"500",draggable:""},{footer:l(()=>[c("div",Ge,[e(w,{onClick:o[6]||(o[6]=n=>a.show=!1)},{default:l(()=>[f("取消")]),_:1}),e(w,{type:"primary",onClick:ae},{default:l(()=>[f("确定")]),_:1})])]),default:l(()=>[e(A,{ref:"ggFormRef",model:a.form,"label-width":"auto"},{default:l(()=>[e(i,{label:"产品名称",prop:"product"},{default:l(()=>[e(y,{modelValue:a.form.product,"onUpdate:modelValue":o[3]||(o[3]=n=>a.form.product=n),placeholder:"",onChange:Y},{default:l(()=>[(s(!0),m(_,null,v(J.value,n=>(s(),P(V,{key:n.id,label:n.text+" "+n.price+"/"+n.num+"/㎡",value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"单价",prop:"unitPrice"},{default:l(()=>[e(h,{"model-value":ee.value,disabled:""},null,8,["model-value"])]),_:1}),e(i,{label:"尺寸"},{default:l(()=>[e(F,{span:11},{default:l(()=>[e(h,{modelValue:a.form.length,"onUpdate:modelValue":o[4]||(o[4]=n=>a.form.length=n),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(F,{span:2,style:{display:"flex","align-items":"center","justify-content":"center","font-size":"20px"}},{default:l(()=>[e(j,null,{default:l(()=>[e(de)]),_:1})]),_:1}),e(F,{span:11},{default:l(()=>[e(h,{modelValue:a.form.width,"onUpdate:modelValue":o[5]||(o[5]=n=>a.form.width=n),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{label:"面积"},{default:l(()=>[e(h,{"model-value":Number((a.form.length*a.form.width).toFixed(2)),autocomplete:"off",disabled:""},null,8,["model-value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}}),go=Ie(je,[["__scopeId","data-v-8fd62eca"]]);export{go as default};
