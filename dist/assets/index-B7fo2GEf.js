import{d as g,l as w,s as D,c as L,b as r,R as s,i as n,o as a,F as u,U as _,h as p,e as f,a3 as k,P as h}from"./index-BgyAZvUt.js";import{E as O,a as P}from"./el-form-item-w7WYBo5V.js";/* empty css                  *//* empty css                 */import"./el-tag-DEVuN4Hv.js";import{E as R,a as $}from"./el-select-oKGMiqGO.js";import"./el-scrollbar-HjInS6QP.js";import"./el-popper-BpTaYU20.js";import{E as j}from"./index-CunGH_dN.js";import{E as q}from"./index-Z1v5JTS_.js";/* empty css                                                              */import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";const i={positionType:{label:"展位类型",type:3,options:[{value:1,label:"标准"},{value:2,label:"特装"}]},orderType:{label:"下单方式",type:3,options:[{value:1,label:"代下单"},{value:2,label:"展商下单"}]},orderStatus:{label:"订单状态",type:3,options:[{value:0,label:"已撤销"},{value:1,label:"已完成"}]},payType:{label:"付款类型",type:3,options:[{value:1,label:"预定金"},{value:2,label:"首款"},{value:3,label:"二次款"},{value:4,label:"尾款"},{value:5,label:"转款"}]},payStatus:{label:"付款状态",type:3,options:[{value:0,label:"未付款"},{value:1,label:"部分付款"},{value:2,label:"已付款"}]},contractStatus:{label:"合同状态",type:3,options:[{value:0,label:"未签订"},{value:1,label:"已签订"},{value:2,label:"已回执(电子)"},{value:3,label:"已回执(纸质)"}]},invoiceType:{label:"发票类型",type:3,options:[{value:1,label:"电子专票"},{value:2,label:"电子普票"}]},invoiceStatus:{label:"发票状态",type:3,options:[{value:0,label:"未申请"},{value:1,label:"待开票"},{value:2,label:"部分开票"},{value:3,label:"已开票"}]}},A={invoiceStatus:{label:"发票状态",type:3,options:[{value:0,label:"未申请"},{value:1,label:"待开票"},{value:2,label:"已开票"}]}},G={payType:{label:"付款方式",type:3,options:[{value:1,label:"全款"},{value:2,label:"分期"}]},invoiceStatus:{label:"发票状态",type:3,options:[{value:1,label:"待开票"},{value:2,label:"已开票"}]}},H=g({__name:"index",props:{data:{},type:{}},emits:["search"],setup(T,{emit:V}){const c=w(),b=T,m=V,t=D({}),E=L(()=>e=>{if(b.type==="invoice"){if(e==="payType"||e==="invoiceStatus")return G[e].options}else if(b.type==="payment"&&e==="invoiceStatus")return A[e].options;return i[e].options}),S=e=>{e&&(e.resetFields(),m("search",t))},F=()=>{m("search",t)};return(e,v)=>{const x=R,C=$,U=j,d=P,y=q,B=O;return a(),r("div",null,[s(B,{ref_key:"refForm",ref:c,inline:!0,model:t,class:"table-search-form","label-width":"auto","label-position":"left"},{default:n(()=>[(a(!0),r(u,null,_(e.data,(l,I)=>(a(),p(d,{key:I,label:l.text,prop:l.field},{default:n(()=>[f(i)[l.field]?(a(),r(u,{key:0},[f(i)[l.field].type===3?(a(),p(C,{key:0,modelValue:t[l.field],"onUpdate:modelValue":o=>t[l.field]=o,placeholder:"请选择",clearable:""},{default:n(()=>[(a(!0),r(u,null,_(E.value(l.field),(o,N)=>(a(),p(x,{key:N,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):k("",!0)],64)):(a(),p(U,{key:1,modelValue:t[l.field],"onUpdate:modelValue":o=>t[l.field]=o,placeholder:"请输入",clearable:""},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["label","prop"]))),128)),s(d,null,{default:n(()=>[s(y,{type:"primary",onClick:F},{default:n(()=>[h("搜索")]),_:1}),e.data.length>0?(a(),p(y,{key:0,type:"primary",onClick:v[0]||(v[0]=l=>S(c.value))},{default:n(()=>[h("重置")]),_:1})):k("",!0)]),_:1})]),_:1},8,["model"])])}}}),oe=z(H,[["__scopeId","data-v-a3147d0e"]]);export{oe as T};
