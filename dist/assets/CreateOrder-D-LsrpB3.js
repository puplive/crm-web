import{d as k,l as B,c as J,o as h,b as y,O as t,Q as d,e as E,F as T,U as I,R as e,i as s,P as i,W as R,a5 as F,X as q,Y as W}from"./index-CoktlfKN.js";/* empty css                  *//* empty css                       */import{E as j,a as D}from"./el-radio-DvnLKCLF.js";/* empty css                 */import{E as G,a as L}from"./el-table-column-B3tbDtuc.js";import"./el-checkbox-BJHQZPh0.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-L93M-ikX.js";import"./el-scrollbar-g4nKRSUD.js";import"./el-tag-6X7OaLzA.js";import{b as M}from"./index-n1oDgfxB.js";/* empty css                   */import{c as N}from"./request-DAESqlcg.js";import{E as Q}from"./index-BPJO_kH-.js";import{E as X}from"./index-BSg1NFlD.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./event-BB_Ol6Sd.js";import"./use-form-item-DzIy8ETn.js";import"./_initCloneObject-CnCR6HZ9.js";import"./isArrayLikeObject-BZLgJZ82.js";import"./isEqual-DF4feqD3.js";const c=m=>(q("data-v-b15589a1"),m=m(),W(),m),z={class:"create-order"},A={class:"p1"},H=c(()=>t("div",{class:"p2"},"展位清单",-1)),K={class:"p3"},Z={class:"p4"},$=c(()=>t("span",null,"预定金",-1)),ee=c(()=>t("span",null,"元",-1)),oe=c(()=>t("span",{style:{margin:"0 10px 0 40px"}},"是否冲抵展位费",-1)),ae=c(()=>t("span",{style:{"margin-left":"10px"}},"%",-1)),te={style:{"text-align":"center",padding:"20px"}},le=k({__name:"CreateOrder",setup(m){const b=R(),f=F(),O=f.query.companyName,u=B({});u.value=JSON.parse(f.query.data);const S={1:"%",2:"￥"},v=o=>{let p=[];return o.forEach(l=>{let n=JSON.parse(l);p.push(n.price+S[n.unit])}),p.join("，")},C=J(()=>o=>{let p=o.finalPrice;return o.isOffset===1&&(p=p-o.deposit),o.payType===2&&(p=p*o.ratio/100),Number(p.toFixed(2))}),U=()=>{let o=JSON.parse(JSON.stringify(u.value)),p=o.add.map(n=>JSON.parse(n)),l=o.discount.map(n=>JSON.parse(n));o.add=p,o.discount=l,M.create(o).then(n=>{n.code===0?(N.success("提交成功"),b.push({name:"Will"})):N.error(n.msg)})},P=()=>{b.go(-1)};return(o,p)=>{const l=G,n=L,V=X,_=j,x=D,g=Q;return h(),y("div",z,[t("div",A,d(E(f).query.exhibitionName),1),H,(h(!0),y(T,null,I(u.value.position,(a,w)=>(h(),y("div",{key:w,class:"item"},[e(n,{data:[a],border:""},{default:s(()=>[e(l,{prop:"name",label:"企业名称","min-width":"120"},{default:s(r=>[i(d(E(O)),1)]),_:1}),e(l,{prop:"companyBrand",label:"参展品牌","min-width":"120"}),e(l,{prop:"hallCode",label:"展馆号"}),e(l,{prop:"positionCode",label:"展位号"}),e(l,{prop:"product",label:"产品名称","min-width":"120"}),e(l,{prop:"unitPrice",label:"单价"}),e(l,{prop:"area",label:"面积"}),e(l,{prop:"discount",label:"折扣"},{default:s(r=>[i(d(v(u.value.discount)),1)]),_:1}),e(l,{prop:"add",label:"加收"},{default:s(r=>[i(d(v(u.value.add)),1)]),_:1})]),_:2},1032,["data"]),t("div",K,[t("span",null,"订单原价："+d(a.costPrice),1),t("span",null,"最终金额："+d(a.finalPrice),1),t("span",null,"待支付金额："+d(C.value(a)),1),t("span",null,"优惠金额："+d(a.discountPrice),1),t("span",null,"加收金额："+d(a.addPrice),1)]),t("div",Z,[$,e(V,{modelValue:a.deposit,"onUpdate:modelValue":r=>a.deposit=r,placeholder:"请输入金额",style:{width:"120px",margin:"0 10px 0 10px"}},null,8,["modelValue","onUpdate:modelValue"]),ee,oe,e(x,{modelValue:a.isOffset,"onUpdate:modelValue":r=>a.isOffset=r},{default:s(()=>[e(_,{value:1},{default:s(()=>[i("是")]),_:1}),e(_,{value:2},{default:s(()=>[i("否")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(x,{modelValue:a.payType,"onUpdate:modelValue":r=>a.payType=r,style:{margin:"0 10px 0 40px"}},{default:s(()=>[e(_,{value:1},{default:s(()=>[i("全款")]),_:1}),e(_,{value:2},{default:s(()=>[i("分期")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(V,{modelValue:a.ratio,"onUpdate:modelValue":r=>a.ratio=r,placeholder:"分期比例",style:{width:"120px"}},null,8,["modelValue","onUpdate:modelValue"]),ae])]))),128)),t("div",te,[e(g,{type:"primary",onClick:U},{default:s(()=>[i("提交订单")]),_:1}),e(g,{type:"",onClick:P},{default:s(()=>[i("返回")]),_:1})])])}}}),Ce=Y(le,[["__scopeId","data-v-b15589a1"]]);export{Ce as default};
