import{d as ie,a0 as ne,t as f,z as se,y as F,b as y,X as g,$ as l,i as a,J as w,a5 as de,am as pe,a7 as p,o as r,Y as i,a1 as ue,Z as x,h as u,ak as m,e as me,aB as ce}from"./index-mj6nX6cW.js";import{E as fe}from"./dialog-BpCbY_Hc.js";/* empty css                */import{E as _e}from"./progress-DvV6uX9o.js";/* empty css                    */import{E as he,a as ye}from"./radio-wQQYbtO2.js";import{E as ge,a as ke,_ as ve}from"./sx-D2CSf7GX.js";/* empty css              */import"./tag-CTbgcjoR.js";import"./select-HiBRVLk4.js";import"./scrollbar-__C50hk7.js";import"./popper-B6FPKx2r.js";import{E as be,a as we}from"./table-column-C0SMPn-F.js";import{E as Ce,a as xe}from"./checkbox-mY4ww0_f.js";/* empty css                *//* empty css                       */import{E as Ee}from"./button-jcEyolu9.js";import{_ as Ie}from"./index.vue_vue_type_script_setup_true_lang-C0tv8dbu.js";/* empty css                                              */import{_ as Be}from"./GoodsOrderDetail.vue_vue_type_script_setup_true_lang-DFfS1q8D.js";import{c as E,b as Se}from"./index-P4G-CyYP.js";import{u as Te}from"./index-DbC7hfxy.js";import{d as Ve}from"./index-DlURCG79.js";import{z as ze}from"./fileZip-DQe_cJqw.js";import{E as Re}from"./ExhibitionChange-B1wgMzJj.js";/* empty css                    *//* empty css                */import{E as P}from"./index-xcY17rZU.js";import"./index-DGtgn1Uv.js";import"./use-form-item-B27kjw89.js";import"./scroll-8Dfu7w70.js";import"./vnode-BcANh4JO.js";import"./focus-trap--BmSj3qZ.js";import"./refs-BgHLWhVP.js";import"./event-BB_Ol6Sd.js";import"./cloneDeep-CG4m2PvF.js";import"./_baseClone-DHvQq53Q.js";import"./_initCloneObject-rtfkBEjx.js";import"./isEqual-Dwqv-MoZ.js";import"./index-BbcXdUiV.js";import"./dropdown-BKe8mYFR.js";import"./castArray-B0k6tcL4.js";import"./form-item-BEwomLm8.js";/* empty css                      */import"./index-DC6y3mZW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-1OUTC0CW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./aria-KgdLjl5h.js";import"./validator-DtPP7zzP.js";const $e={class:"s-flex-col",style:{height:"100%"}},Ne={class:"",style:{"margin-bottom":"10px"}},Ue={class:"s-table-operations"},De=g("img",{style:{width:"17px"},src:ve,alt:""},null,-1),Fe={class:"s-flex-auto",style:{"min-height":"0"}},Pe={class:"s-table-pagination"},Dt=ie({__name:"Goods",setup(Le){const T=ne(),V=f(T.EXHIBITION_INFO);se(()=>T.EXHIBITION_INFO,(t,e)=>{t.id!==e.id&&(V.value=t,h())},{deep:!0}),de();const L=pe(),k=f(!1),v=F({page:1,perPage:20}),z=f(0),R=f({}),O=L.query.id,I=f([]),B=f(null),$=f([]),c=F({show:!1,file:"",type:1,orderId:0}),M=t=>{R.value=t,v.page=1,h()},h=()=>{E.getList({exhibitionId:V.value.id,...v,...R.value}).then(t=>{t.code===0?(I.value=t.data.data,z.value=t.data.total):I.value=[{}]})},j=t=>{P.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{E.revoke({id:t}).then(e=>{e.code===0?(p.success("撤销成功"),h()):p.error(e.msg)})}).catch(()=>{})},q=t=>{P.confirm("是否确认要删除订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{E.del({id:t}).then(e=>{e.code===0?(p.success("删除成功"),h()):p.error(e.msg)})}).catch(()=>{})},G=()=>{let t=B.value.getSelectionRows().map(e=>e.id);if(t.length===0){p.warning("请选择需要下载的数据");return}Ve({orderId:t}).then(e=>{if(e.code===0){if(e.data.length===0){p.warning("无数据");return}ze(e.data)}else p.error(e.msg)})},X=()=>{E.export({exhibitionId:O}).then(t=>{t.code===0?(window.open(t.data.url,"_self"),p.success("导出成功")):p.error(t.msg)})},H=f(null);let _=f([]);const J=t=>{let e=t[0];_.value=[{name:e.name,size:e.size,uid:e.uid,status:"ready",percentage:0,raw:e}]},Y=t=>{const e=t.size/1024/1024<3;return e||p.error("文件大小不能超过 3MB!"),e},N=t=>{c.show=!0,c.type=1,c.orderId=t,c.file="",_.value=[]},Z=()=>{if(c.type===1&&_.value.length===0){p.warning("请选择合同文件");return}k.value=!0;let t=new FormData;t.append("upload",_.value[0].raw),Te(t).then(e=>{e.code===0?Se.receipt({orderId:c.orderId,type:c.type,url:e.data.url}).then(n=>{n.code===0?(p.success("上传成功"),c.show=!1,h()):p.error(n.msg),k.value=!1}).catch(()=>{k.value=!1}):(p.error(e.msg),k.value=!1)}).catch(()=>{k.value=!1})},U=f(null),A=t=>{U.value.getDetail(t)};E.getSearchField().then(t=>{t.code===0&&($.value=t.data)}),h();const C=f([]),S=f([]),K=()=>{setTimeout(()=>{let t=[];B.value.columns.forEach(e=>{e.label&&t.push(e.label)}),S.value=t.join(",").split(","),C.value=t.join(",").split(",")},0)},d=t=>C.value.length===0&&S.value.length===0?!0:C.value.includes(t);return K(),(t,e)=>{const n=Ee,Q=Ce,W=xe,ee=ge,s=we,te=be,oe=ke,D=he,ae=ye,le=_e,re=fe;return r(),y(w,null,[g("div",$e,[g("div",Ne,[l(Re)]),l(Ie,{data:$.value,onSearch:M},null,8,["data"]),g("div",Ue,[l(n,{onClick:G},{default:a(()=>[i("批量下载合同")]),_:1}),l(n,{onClick:X},{default:a(()=>[i("导出")]),_:1}),l(ee,{placement:"bottom-end",trigger:"click"},{reference:a(()=>[l(n,{size:"",link:""},{default:a(()=>[De]),_:1})]),default:a(()=>[l(W,{modelValue:C.value,"onUpdate:modelValue":e[0]||(e[0]=o=>C.value=o)},{default:a(()=>[g("ul",null,[(r(!0),y(w,null,ue(S.value,o=>(r(),y("li",{class:"s-checkbox_item",key:o},[l(Q,{label:o,value:o},{default:a(()=>[i(x(o),1)]),_:2},1032,["label","value"])]))),128))])]),_:1},8,["modelValue"])]),_:1})]),g("div",Fe,[l(te,{ref_key:"tableRef",ref:B,data:I.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:a(()=>[l(s,{type:"selection",width:"42",fixed:"left"}),d("订单编号")?(r(),u(s,{key:0,prop:"orderCode",label:"订单编号","min-width":"120"})):m("",!0),d("企业名称")?(r(),u(s,{key:1,prop:"companyName",label:"企业名称","min-width":"120"})):m("",!0),d("展会名称")?(r(),u(s,{key:2,prop:"exhibitionName",label:"展会名称","min-width":"120"})):m("",!0),d("展馆号")?(r(),u(s,{key:3,prop:"hallCode",label:"展馆号"})):m("",!0),d("展位号")?(r(),u(s,{key:4,prop:"positionCode",label:"展位号"})):m("",!0),d("订单金额")?(r(),u(s,{key:5,prop:"orderPrice",label:"订单金额","min-width":"120"})):m("",!0),d("下单方式")?(r(),u(s,{key:6,prop:"orderType",label:"下单方式","min-width":"120"},{default:a(o=>[i(x({1:"代下单",2:"展商下单"}[o.row.orderType]),1)]),_:1})):m("",!0),d("付款状态")?(r(),u(s,{key:7,prop:"payStatus",label:"付款状态","min-width":"120"},{default:a(o=>[i(x({0:"未付款",1:"部分付款",2:"已付款"}[o.row.payStatus]),1)]),_:1})):m("",!0),d("到款金额")?(r(),u(s,{key:8,prop:"receivedPrice",label:"到款金额","min-width":"120"})):m("",!0),d("合同状态")?(r(),u(s,{key:9,prop:"contractStatus",label:"合同状态","min-width":"120"},{default:a(o=>[i(x({0:"未签订",1:"已签订",2:"已回执(电子)",3:"已回执(纸质)"}[o.row.contractStatus]),1)]),_:1})):m("",!0),d("发票状态")?(r(),u(s,{key:10,prop:"invoiceStatus",label:"发票状态","min-width":"120"},{default:a(o=>[i(x({0:"未申请",1:"待开票",2:"部分开票",3:"已开票"}[o.row.invoiceStatus]),1)]),_:1})):m("",!0),d("持有人")?(r(),u(s,{key:11,prop:"clueUser",label:"持有人"})):m("",!0),d("下单人")?(r(),u(s,{key:12,prop:"authUser",label:"下单人"})):m("",!0),d("操作")?(r(),u(s,{key:13,fixed:"right",label:"操作",width:"250"},{default:a(o=>[l(n,{link:"",type:"primary",onClick:b=>A(o.row.id)},{default:a(()=>[i("详情")]),_:2},1032,["onClick"]),o.row.orderStatus!==0?(r(),y(w,{key:0},[o.row.contractStatus===0?(r(),y(w,{key:0},[l(n,{link:"",type:"primary",onClick:b=>t.$router.push({name:"ContractTemplates",query:{id:o.row.id,type:2}})},{default:a(()=>[i("签订合同")]),_:2},1032,["onClick"]),l(n,{link:"",type:"primary",onClick:b=>N(o.row.id)},{default:a(()=>[i("上传合同")]),_:2},1032,["onClick"])],64)):(r(),y(w,{key:1},[l(n,{link:"",type:"primary",onClick:b=>t.$router.push({name:"ContractTemplates",query:{id:o.row.id,type:2}})},{default:a(()=>[i("更新合同")]),_:2},1032,["onClick"]),l(n,{link:"",type:"primary",onClick:b=>N(o.row.id)},{default:a(()=>[i("上传合同")]),_:2},1032,["onClick"])],64)),l(n,{link:"",type:"primary",onClick:b=>j(o.row.id)},{default:a(()=>[i("撤销")]),_:2},1032,["onClick"])],64)):(r(),y(w,{key:1},[l(n,{link:"",type:"",disabled:""},{default:a(()=>[i("已撤销")]),_:1}),l(n,{link:"",type:"danger",onClick:b=>q(o.row.id)},{default:a(()=>[i("删除")]),_:2},1032,["onClick"])],64))]),_:1})):m("",!0)]),_:1},8,["data"])]),g("div",Pe,[l(oe,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50,100],total:z.value,"current-page":v.page,"onUpdate:currentPage":e[1]||(e[1]=o=>v.page=o),"page-size":v.perPage,"onUpdate:pageSize":e[2]||(e[2]=o=>v.perPage=o),onChange:h},null,8,["total","current-page","page-size"])])]),l(re,{modelValue:c.show,"onUpdate:modelValue":e[6]||(e[6]=o=>c.show=o),title:"上传合同",width:"400",draggable:""},{footer:a(()=>[l(n,{type:"primary",onClick:Z,loading:k.value},{default:a(()=>[i("确定")]),_:1},8,["loading"]),l(n,{onClick:e[5]||(e[5]=o=>c.show=!1)},{default:a(()=>[i("取消")]),_:1})]),default:a(()=>[l(ae,{modelValue:c.type,"onUpdate:modelValue":e[3]||(e[3]=o=>c.type=o)},{default:a(()=>[l(D,{value:1},{default:a(()=>[i("电子合同")]),_:1}),l(D,{value:2},{default:a(()=>[i("纸质合同")]),_:1})]),_:1},8,["modelValue"]),l(le,{ref_key:"uploadRef",ref:H,"auto-upload":!1,limit:1,"before-upload":Y,"on-exceed":J,"file-list":me(_),"onUpdate:fileList":e[4]||(e[4]=o=>ce(_)?_.value=o:_=o),style:{"margin-top":"10px"}},{default:a(()=>[l(n,{type:"primary"},{default:a(()=>[i("点击上传")]),_:1})]),_:1},8,["file-list"])]),_:1},8,["modelValue"]),l(Be,{ref_key:"detailRef",ref:U},null,512)],64)}}});export{Dt as default};
