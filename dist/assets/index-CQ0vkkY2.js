import{d as O,t as V,z as P,y as Y,c as Z,B as q,b as d,$ as i,i as t,o,J as m,a1 as h,h as c,Y as b,Z as w,e as x,aj as k,cf as G}from"./index-Burj71Mz.js";import{E as H,a as K}from"./form-item-BgXu7TbV.js";/* empty css              */import"./tag-BMbTJcvT.js";import{E as Q,a as R}from"./select-C6REEyqW.js";import"./scrollbar-BBvbl3-b.js";import"./popper-DN7jCsAx.js";import{E as W}from"./button-Bh1aP2J2.js";/* empty css                      */import{E as X,a as ee,b as le}from"./index-CMQNn4Ag.js";import{E as ae}from"./index-BBQhpRIJ.js";/* empty css                                                              */import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";const f={positionType:{label:"展位类型",type:3,options:[{value:1,label:"标准"},{value:2,label:"特装"}]},orderType:{label:"下单方式",type:3,options:[{value:1,label:"代下单"},{value:2,label:"展商下单"}]},orderStatus:{label:"订单状态",type:3,options:[{value:0,label:"已撤销"},{value:1,label:"已完成"}]},payType:{label:"付款类型",type:3,options:[{value:1,label:"预定金"},{value:2,label:"首款"},{value:3,label:"二次款"},{value:4,label:"尾款"},{value:5,label:"转款"}]},payStatus:{label:"付款状态",type:3,options:[{value:0,label:"未付款"},{value:1,label:"部分付款"},{value:2,label:"已付款"}]},contractStatus:{label:"合同状态",type:3,options:[{value:0,label:"未签订"},{value:1,label:"已签订"},{value:2,label:"已回执(电子)"},{value:3,label:"已回执(纸质)"}]},invoiceType:{label:"发票类型",type:3,options:[{value:1,label:"电子专票"},{value:2,label:"电子普票"}]},invoiceStatus:{label:"发票状态",type:3,options:[{value:0,label:"未申请"},{value:1,label:"待开票"},{value:2,label:"部分开票"},{value:3,label:"已开票"}]},authUser:{label:"持有人",type:3,options:[]}},oe={invoiceStatus:{label:"发票状态",type:3,options:[{value:0,label:"未申请"},{value:1,label:"待开票"},{value:2,label:"已开票"}]}},C={payType:{label:"付款方式",type:3,options:[{value:1,label:"全款"},{value:2,label:"分期"}]},invoiceStatus:{label:"发票状态",type:3,options:[{value:1,label:"待开票"},{value:2,label:"已开票"}]}},ne=O({__name:"index",props:{data:{},type:{}},emits:["search"],setup(F,{emit:U}){const E=V(),p=F,u=V([]);P(()=>p.data,e=>{u.value.push(e[0]),e.some(l=>l.field==="authUser")&&G.getAccount().then(l=>{l.code===0&&(f.authUser.options=l.data.map(n=>({label:n.name,value:n.name})))})});const z=()=>{for(let e=0;e<p.data.length;e++){const l=p.data[e];if(!g(l.field)){u.value.push(l);return}}},B=(e,l)=>{u.value[e]=p.data.find(n=>n.field===l)},g=e=>u.value.some(l=>l.field===e),S=U,r=Y({}),D=Z(()=>e=>{if(e==="payType"){if(p.type==="invoice")return C[e].options}else if(e==="invoiceStatus"){if(p.type==="invoice")return C[e].options;if(p.type==="payment")return oe[e].options}return f[e].options}),I=e=>{e&&(e.resetFields(),S("search",r))},v=()=>{S("search",r)};return q(()=>{}),(e,l)=>{const n=W,M=X,N=ee,A=le,L=Q,$=R,j=ae,T=K,J=H;return o(),d("div",null,[i(J,{ref_key:"refForm",ref:E,inline:!0,model:r,class:"table-search-form","label-width":"auto","label-position":"left"},{default:t(()=>[(o(!0),d(m,null,h(u.value,(a,y)=>(o(),c(T,{key:y,prop:a.field},{label:t(()=>[i(A,{trigger:"click"},{dropdown:t(()=>[i(N,null,{default:t(()=>[(o(!0),d(m,null,h(e.data,(s,_)=>(o(),c(M,{key:_,onClick:()=>{r[a.field]="",v(),B(y,s.field)},disabled:g(s.field)},{default:t(()=>[b(w(s.text),1)]),_:2},1032,["onClick","disabled"]))),128))]),_:2},1024)]),default:t(()=>[i(n,{link:"",style:{"line-height":"26px"}},{default:t(()=>[b(w(a.text),1)]),_:2},1024)]),_:2},1024)]),default:t(()=>[x(f)[a.field]?(o(),d(m,{key:0},[x(f)[a.field].type===3?(o(),c($,{key:0,modelValue:r[a.field],"onUpdate:modelValue":s=>r[a.field]=s,placeholder:"请选择",clearable:""},{default:t(()=>[(o(!0),d(m,null,h(D.value(a.field),(s,_)=>(o(),c(L,{key:_,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):k("",!0)],64)):(o(),c(j,{key:1,modelValue:r[a.field],"onUpdate:modelValue":s=>r[a.field]=s,placeholder:"请输入",clearable:""},null,8,["modelValue","onUpdate:modelValue"])),u.value.length>1?(o(),c(n,{key:2,type:"primary",icon:"Minus",size:"small",circle:"",onClick:()=>{r[a.field]="",u.value.splice(y,1),v()},style:{"font-size":"16px","margin-left":"5px"}},null,8,["onClick"])):k("",!0)]),_:2},1032,["prop"]))),128)),i(T,null,{default:t(()=>[i(n,{type:"primary",onClick:v,icon:"Search"},{default:t(()=>[b("搜索")]),_:1}),i(n,{type:"",onClick:l[0]||(l[0]=a=>I(E.value))},{default:t(()=>[b("重置")]),_:1}),u.value.length<p.data.length?(o(),c(n,{key:0,type:"primary",icon:"Plus",size:"small",circle:"",style:{"font-size":"16px"},onClick:z})):k("",!0)]),_:1})]),_:1},8,["model"])])}}}),he=te(ne,[["__scopeId","data-v-e4d73ac5"]]);export{he as T};
