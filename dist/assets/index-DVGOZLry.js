import{d as R,l as V,t as $,s as j,c as q,x as G,b as d,R as i,i as t,o,F as m,U as h,h as c,P as b,Q as w,e as C,a3 as k}from"./index-Cvxdud8X.js";import{E as H,a as J}from"./el-form-item-DwKXY0ad.js";/* empty css                 */import"./el-tag-DHCDDT8A.js";import{E as K,a as W}from"./el-select-DThfN3Ul.js";import"./el-scrollbar-XryityOC.js";import"./el-popper-Drp6kb6z.js";import{E as X}from"./el-button-BduWogw9.js";/* empty css                         */import{c as Y}from"./index-DQz9XEJJ.js";import{E as Z,a as ee,b as le}from"./index-BPsY-_bE.js";import{E as ae}from"./index-BfRblS7Z.js";/* empty css                                                              */import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";const f={positionType:{label:"展位类型",type:3,options:[{value:1,label:"标准"},{value:2,label:"特装"}]},orderType:{label:"下单方式",type:3,options:[{value:1,label:"代下单"},{value:2,label:"展商下单"}]},orderStatus:{label:"订单状态",type:3,options:[{value:0,label:"已撤销"},{value:1,label:"已完成"}]},payType:{label:"付款类型",type:3,options:[{value:1,label:"预定金"},{value:2,label:"首款"},{value:3,label:"二次款"},{value:4,label:"尾款"},{value:5,label:"转款"}]},payStatus:{label:"付款状态",type:3,options:[{value:0,label:"未付款"},{value:1,label:"部分付款"},{value:2,label:"已付款"}]},contractStatus:{label:"合同状态",type:3,options:[{value:0,label:"未签订"},{value:1,label:"已签订"},{value:2,label:"已回执(电子)"},{value:3,label:"已回执(纸质)"}]},invoiceType:{label:"发票类型",type:3,options:[{value:1,label:"电子专票"},{value:2,label:"电子普票"}]},invoiceStatus:{label:"发票状态",type:3,options:[{value:0,label:"未申请"},{value:1,label:"待开票"},{value:2,label:"部分开票"},{value:3,label:"已开票"}]},authUser:{label:"持有人",type:3,options:[]}},oe={invoiceStatus:{label:"发票状态",type:3,options:[{value:0,label:"未申请"},{value:1,label:"待开票"},{value:2,label:"已开票"}]}},S={payType:{label:"付款方式",type:3,options:[{value:1,label:"全款"},{value:2,label:"分期"}]},invoiceStatus:{label:"发票状态",type:3,options:[{value:1,label:"待开票"},{value:2,label:"已开票"}]}},ne=R({__name:"index",props:{data:{},type:{}},emits:["search"],setup(F,{emit:U}){const E=V(),p=F,u=V([]);$(()=>p.data,e=>{u.value.push(e[0]),e.some(l=>l.field==="authUser")&&Y.getAccount().then(l=>{l.code===0&&(f.authUser.options=l.data.map(n=>({label:n.name,value:n.name})))})});const D=()=>{for(let e=0;e<p.data.length;e++){const l=p.data[e];if(!g(l.field)){u.value.push(l);return}}},z=(e,l)=>{u.value[e]=p.data.find(n=>n.field===l)},g=e=>u.value.some(l=>l.field===e),x=U,r=j({}),B=q(()=>e=>{if(e==="payType"){if(p.type==="invoice")return S[e].options}else if(e==="invoiceStatus"){if(p.type==="invoice")return S[e].options;if(p.type==="payment")return oe[e].options}return f[e].options}),I=e=>{e&&(e.resetFields(),x("search",r))},v=()=>{x("search",r)};return G(()=>{}),(e,l)=>{const n=X,M=Z,N=ee,A=le,L=K,P=W,O=ae,T=J,Q=H;return o(),d("div",null,[i(Q,{ref_key:"refForm",ref:E,inline:!0,model:r,class:"table-search-form","label-width":"auto","label-position":"left"},{default:t(()=>[(o(!0),d(m,null,h(u.value,(a,y)=>(o(),c(T,{key:y,prop:a.field},{label:t(()=>[i(A,{trigger:"click"},{dropdown:t(()=>[i(N,null,{default:t(()=>[(o(!0),d(m,null,h(e.data,(s,_)=>(o(),c(M,{key:_,onClick:()=>{r[a.field]="",v(),z(y,s.field)},disabled:g(s.field)},{default:t(()=>[b(w(s.text),1)]),_:2},1032,["onClick","disabled"]))),128))]),_:2},1024)]),default:t(()=>[i(n,{link:"",style:{"line-height":"26px"}},{default:t(()=>[b(w(a.text),1)]),_:2},1024)]),_:2},1024)]),default:t(()=>[C(f)[a.field]?(o(),d(m,{key:0},[C(f)[a.field].type===3?(o(),c(P,{key:0,modelValue:r[a.field],"onUpdate:modelValue":s=>r[a.field]=s,placeholder:"请选择",clearable:""},{default:t(()=>[(o(!0),d(m,null,h(B.value(a.field),(s,_)=>(o(),c(L,{key:_,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):k("",!0)],64)):(o(),c(O,{key:1,modelValue:r[a.field],"onUpdate:modelValue":s=>r[a.field]=s,placeholder:"请输入",clearable:""},null,8,["modelValue","onUpdate:modelValue"])),u.value.length>1?(o(),c(n,{key:2,type:"primary",icon:"Minus",size:"small",circle:"",onClick:()=>{r[a.field]="",u.value.splice(y,1),v()},style:{"font-size":"16px","margin-left":"5px"}},null,8,["onClick"])):k("",!0)]),_:2},1032,["prop"]))),128)),i(T,null,{default:t(()=>[i(n,{type:"primary",onClick:v},{default:t(()=>[b("搜索")]),_:1}),i(n,{type:"primary",onClick:l[0]||(l[0]=a=>I(E.value))},{default:t(()=>[b("重置")]),_:1}),u.value.length<p.data.length?(o(),c(n,{key:0,type:"primary",icon:"Plus",size:"small",circle:"",style:{"font-size":"16px"},onClick:D})):k("",!0)]),_:1})]),_:1},8,["model"])])}}}),ke=te(ne,[["__scopeId","data-v-68325d74"]]);export{ke as T};
