import{d as I,l as y,b as C,O as r,Q as o,R as e,i as l,a5 as E,o as c,P as i,h as u,a3 as _,X as T,Y as B}from"./index-DxDLsVQl.js";import{E as N}from"./el-image-viewer-C_bkjHV5.js";import{E as P,a as D}from"./el-table-column-CIQNaga-.js";import"./el-checkbox-CGTq2bgt.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-BOD4jC64.js";import"./el-scrollbar-mi-wsowL.js";import{E as V}from"./el-button-DpDBUIvU.js";import"./el-tag-BOs9rQra.js";import{b as g}from"./index-n8QeuUkd.js";/* empty css                   *//* empty css                       *//* empty css                 *//* empty css                   */import{c as w}from"./request-DkBJXzax.js";import{E as R}from"./index-CANRM6W8.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DmtnYd9Z.js";import"./use-form-item-DcmYeZdv.js";import"./event-BB_Ol6Sd.js";import"./scroll-BucS4Uda.js";import"./_initCloneObject-DPTJWJAD.js";import"./isEqual-D-JR0jWU.js";import"./index-BAE8diGd.js";import"./vnode-GuuDE3-s.js";import"./aria-KgdLjl5h.js";import"./validator-BZIlV_DB.js";const h=m=>(T("data-v-4b19150c"),m=m(),B(),m),M=h(()=>r("div",null,"详情",-1)),U=h(()=>r("div",{class:"title"},"展位订单",-1)),X={class:"info"},j={class:"table"},q=h(()=>r("div",{class:"title"},"到款详情",-1)),A={class:"table"},O=h(()=>r("div",{class:"title"},"发票详情",-1)),Q={class:"table"},Y=I({__name:"GoodsDetail",setup(m){const k=E(),x=y(k.query.id),p=y({brand:[],payment:[],invoice:[]}),v=()=>{g.getDetail({id:x.value}).then(n=>{n.code===0?p.value=n.data:w.error(n.msg)})},S=n=>{R.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{g.revoke({id:n}).then(s=>{s.code===0?(w.success("撤销成功"),v()):w.error(s.msg)})}).catch(()=>{})};return v(),(n,s)=>{const t=D,d=V,b=P,f=N;return c(),C("div",null,[M,r("div",null,[U,r("div",X,[r("span",null,"订单编号："+o(p.value.orderCode),1),r("span",null,"企业名称："+o(p.value.exhibitorName),1),r("span",null,"参展品牌："+o(p.value.brand.join(",")),1),r("span",null,"订单状态："+o(p.value.orderStatus),1),r("span",null,"订单生成时间："+o(p.value.orderTime),1),r("span",null,"下单人："+o(p.value.authUser),1),r("span",null,"对应销售："+o(p.value.clueUser),1)]),r("div",j,[e(b,{data:[p.value],border:"","table-layout":"fixed","header-row-class-name":"s-table-header"},{default:l(()=>[e(t,{prop:"exhibitionName",label:"项目名称","min-width":"120"}),e(t,{prop:"hallCode",label:"展馆号"}),e(t,{prop:"positionCode",label:"展位号"}),e(t,{prop:"area",label:"面积"}),e(t,{prop:"length",label:"展位尺寸","min-width":"120"},{default:l(a=>[i(o(a.row.length)+" X "+o(a.row.width),1)]),_:1}),e(t,{prop:"num",label:"展位数量","min-width":"120"}),e(t,{prop:"product",label:"产品名称","min-width":"120"}),e(t,{prop:"unitPrice",label:"单价"}),e(t,{prop:"orderPrice",label:"订单金额","min-width":"120"}),e(t,{prop:"contractStatus",label:"合同状态","min-width":"120"},{default:l(a=>[i(o(["未签约","已签约","已回执(电子)","已回执(纸质)"][a.row.contractStatus]),1)]),_:1}),e(t,{prop:"payStatus",label:"付款状态","min-width":"120"},{default:l(a=>[i(o(["未付款","部分付款","已付款"][a.row.payStatus]),1)]),_:1}),e(t,{prop:"receivedPrice",label:"到款金额","min-width":"120"}),e(t,{prop:"notReceivedPrice",label:"未到金额","min-width":"120"}),e(t,{prop:"invoiceStatus",label:"发票状态","min-width":"120"},{default:l(a=>[i(o(["未申请","待开票","部分开票","已开票"][a.row.invoiceStatus]),1)]),_:1}),e(t,{prop:"remark",label:"备注"}),e(t,{fixed:"right",label:"操作",width:"200"},{default:l(a=>[p.value.orderStatus===1?(c(),u(d,{key:0,link:"",type:"primary",onClick:s[0]||(s[0]=$=>S(p.value.id))},{default:l(()=>[i("撤销")]),_:1})):p.value.orderStatus===0?(c(),u(d,{key:1,link:"",type:"",disabled:""},{default:l(()=>[i("已撤销")]),_:1})):_("",!0)]),_:1})]),_:1},8,["data"])]),q,r("div",A,[e(b,{data:p.value.payment,border:"","table-layout":"fixed","header-row-class-name":"s-table-header"},{default:l(()=>[e(t,{prop:"code",label:"录款编号","min-width":"120"}),e(t,{prop:"payCompany",label:"付款公司","min-width":"120"}),e(t,{prop:"payType",label:"到款类型","min-width":"120"},{default:l(a=>[i(o({1:"预定金",2:"首款",3:"二次款",4:"尾款",5:"转款"}[a.row.payType]),1)]),_:1}),e(t,{prop:"payPrice",label:"到款金额","min-width":"120"}),e(t,{prop:"payTime",label:"到款时间","min-width":"120"}),e(t,{prop:"receiveAccount",label:"收款账户","min-width":"120"}),e(t,{prop:"payImg",label:"付款凭证"},{default:l(a=>[a.row.payImg?(c(),u(f,{key:0,style:{width:"30px",height:"30px"},src:a.row.payImg,"preview-src-list":[a.row.payImg],fit:"cover"},null,8,["src","preview-src-list"])):_("",!0)]),_:1}),e(t,{prop:"receiveImg",label:"到款凭证","min-width":"120"},{default:l(a=>[a.row.receiveImg?(c(),u(f,{key:0,style:{width:"30px",height:"30px"},src:a.row.receiveImg,"preview-src-list":[a.row.receiveImg],fit:"cover"},null,8,["src","preview-src-list"])):_("",!0)]),_:1}),e(t,{prop:"invoiceStatus",label:"发票状态","min-width":"120"},{default:l(a=>[i(o({0:"未申请",1:"待开票",2:"已开票"}[a.row.invoiceStatus]),1)]),_:1}),e(t,{prop:"remark",label:"备注"}),e(t,{fixed:"right",label:"操作",width:"200"},{default:l(a=>[e(d,{link:"",type:"primary"},{default:l(()=>[i("编辑")]),_:1}),e(d,{link:"",type:"primary"},{default:l(()=>[i("申请发票")]),_:1}),e(d,{link:"",type:"danger"},{default:l(()=>[i("删除")]),_:1})]),_:1})]),_:1},8,["data"])]),O,r("div",Q,[e(b,{data:p.value.invoice,border:"","table-layout":"fixed","header-row-class-name":"s-table-header"},{default:l(()=>[e(t,{prop:"code",label:"编号"}),e(t,{prop:"title",label:"发票抬头","min-width":"120"}),e(t,{prop:"socialCode",label:"社会信用代码","min-width":"120"}),e(t,{prop:"price",label:"开票金额","min-width":"120"}),e(t,{prop:"invoiceType",label:"发票类型","min-width":"120"},{default:l(a=>[i(o({1:"电子专票",2:"电子普票"}[a.row.invoiceType]),1)]),_:1}),e(t,{prop:"contact",label:"联系人"}),e(t,{prop:"email",label:"发送邮箱","min-width":"120"}),e(t,{prop:"invoiceStatus",label:"开票状态","min-width":"120"},{default:l(a=>[i(o({1:"待开票",2:"已开票"}[a.row.invoiceStatus]),1)]),_:1}),e(t,{prop:"invoiceCode",label:"发票号"}),e(t,{prop:"remark",label:"备注"}),e(t,{fixed:"right",label:"操作",width:"200"},{default:l(a=>[e(d,{link:"",type:"primary"},{default:l(()=>[i("上传发票")]),_:1}),e(d,{link:"",type:"primary"},{default:l(()=>[i("编辑")]),_:1}),e(d,{link:"",type:"danger"},{default:l(()=>[i("删除")]),_:1})]),_:1})]),_:1},8,["data"])])])])}}}),fe=G(Y,[["__scopeId","data-v-4b19150c"]]);export{fe as default};
