import{d as K,S as Y,l as p,t as Z,s as $,b as g,O as h,R as t,i as l,F as y,W as ee,a5 as te,o as w,P as i,Q as b,e as oe,ai as ae}from"./index-Dbruow-8.js";import{E as le}from"./el-dialog-Cn13NkgW.js";/* empty css                   */import{E as ie}from"./el-progress-6ggq-6Uv.js";/* empty css                       */import{E as re,a as ne}from"./el-radio-BtKpg6s0.js";import{E as se}from"./el-pagination-Dzaze4nQ.js";/* empty css                 */import"./el-tag-Cwjeyy7Z.js";import"./el-select-DISwFAjD.js";import"./el-scrollbar-DQDzTEy-.js";import"./el-popper-KaCkgToV.js";import{E as de,a as pe}from"./el-table-column-_1BtIXOe.js";import"./el-checkbox-B4iN5yvQ.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                  */import{T as me}from"./index-DggKsebS.js";import{_ as ue}from"./GoodsOrderDetail.vue_vue_type_script_setup_true_lang-4KORsslc.js";import{c as v,b as ce}from"./index-nXGFsFT-.js";import{u as fe}from"./index-DaQGtzPM.js";import{d as _e}from"./index--_HS-yHh.js";import{z as ge}from"./fileZip-f2Oj7_Rr.js";import{E as he}from"./ExhibitionChange-DH3aO_Xa.js";/* empty css                       *//* empty css                   */import{c as s}from"./request-IQDh0xGg.js";import{E as ye}from"./index-BrXzY7YX.js";import{E as D}from"./index-DyvDh1tV.js";import"./index-BixeCaBD.js";import"./use-form-item-DC5bVoWo.js";import"./scroll-CgR9N02j.js";import"./vnode-Cu_wQVQX.js";import"./refs-DvQ1Z-mU.js";import"./event-BB_Ol6Sd.js";import"./cloneDeep-CBcIhglR.js";import"./_baseClone-DkM2Bk85.js";import"./_initCloneObject-XraVKfYz.js";import"./isEqual-CRab28oZ.js";import"./index-CJCk9YnP.js";import"./castArray-C77bChTH.js";import"./el-form-item-DY7Jg2_K.js";/* empty css                         */import"./index-X-HS0pxE.js";/* empty css                                                              */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DTm7mUl3.js";import"./aria-KgdLjl5h.js";import"./validator-C2QUHRhB.js";const we={class:"s-flex-col",style:{height:"100%"}},ve={class:"",style:{"margin-bottom":"10px"}},be={class:"s-table-operations"},ke={class:"s-flex-auto",style:{"min-height":"0"}},Ce={class:"s-table-pagination"},vt=K({__name:"Goods",setup(xe){const C=Y(),x=p(C.EXHIBITION_INFO);Z(()=>C.EXHIBITION_INFO,(o,e)=>{o.id!==e.id&&(x.value=o,u())},{deep:!0}),ee();const F=te(),c=p(!1),f=$({page:1,perPage:10}),E=p(0),I=p({}),N=F.query.id,k=p([]),S=p(null),T=p([]),d=$({show:!1,file:"",type:1,orderId:0}),U=o=>{I.value=o,f.page=1,u()},u=()=>{v.getList({exhibitionId:x.value.id,...f,...I.value}).then(o=>{o.code===0?(k.value=o.data.data,E.value=o.data.total):k.value=[{}]})},V=o=>{D.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{v.revoke({id:o}).then(e=>{e.code===0?(s.success("撤销成功"),u()):s.error(e.msg)})}).catch(()=>{})},P=o=>{D.confirm("是否确认要删除订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{v.del({id:o}).then(e=>{e.code===0?(s.success("删除成功"),u()):s.error(e.msg)})}).catch(()=>{})},L=()=>{let o=S.value.getSelectionRows().map(e=>e.id);if(o.length===0){s.warning("请选择需要下载的数据");return}_e({orderId:o}).then(e=>{if(e.code===0){if(e.data.length===0){s.warning("无数据");return}ge(e.data)}else s.error(e.msg)})},O=()=>{v.export({exhibitionId:N}).then(o=>{o.code===0?(window.open(o.data.url,"_self"),s.success("导出成功")):s.error(o.msg)})},M=p(null);let m=p([]);const q=o=>{let e=o[0];m.value=[{name:e.name,size:e.size,uid:e.uid,status:"ready",percentage:0,raw:e}]},G=o=>{const e=o.size/1024/1024<3;return e||s.error("文件大小不能超过 3MB!"),e},z=o=>{d.show=!0,d.type=1,d.orderId=o,d.file="",m.value=[]},H=()=>{if(d.type===1&&m.value.length===0){s.warning("请选择合同文件");return}c.value=!0;let o=new FormData;o.append("upload",m.value[0].raw),fe(o).then(e=>{e.code===0?ce.receipt({orderId:d.orderId,type:d.type,url:e.data.url}).then(r=>{r.code===0?(s.success("上传成功"),d.show=!1,u()):s.error(r.msg),c.value=!1}).catch(()=>{c.value=!1}):(s.error(e.msg),c.value=!1)}).catch(()=>{c.value=!1})},R=p(null),X=o=>{R.value.getDetail(o)};return v.getSearchField().then(o=>{o.code===0&&(T.value=o.data)}),u(),(o,e)=>{const r=ye,n=pe,j=de,Q=se,B=re,W=ne,A=ie,J=le;return w(),g(y,null,[h("div",we,[h("div",ve,[t(he)]),t(me,{data:T.value,onSearch:U},null,8,["data"]),h("div",be,[t(r,{size:"small",onClick:L},{default:l(()=>[i("批量下载合同")]),_:1}),t(r,{size:"small",onClick:O},{default:l(()=>[i("导出")]),_:1})]),h("div",ke,[t(j,{ref_key:"tableRef",ref:S,data:k.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[t(n,{type:"selection",width:"42",fixed:"left"}),t(n,{prop:"orderCode",label:"订单编号","min-width":"120"}),t(n,{prop:"companyName",label:"企业名称","min-width":"120"}),t(n,{prop:"exhibitionName",label:"展会名称","min-width":"120"}),t(n,{prop:"hallCode",label:"展馆号"}),t(n,{prop:"positionCode",label:"展位号"}),t(n,{prop:"orderPrice",label:"订单金额","min-width":"120"}),t(n,{prop:"orderType",label:"下单方式","min-width":"120"},{default:l(a=>[i(b({1:"代下单",2:"展商下单"}[a.row.orderType]),1)]),_:1}),t(n,{prop:"payStatus",label:"付款状态","min-width":"120"},{default:l(a=>[i(b({0:"未付款",1:"部分付款",2:"已付款"}[a.row.payStatus]),1)]),_:1}),t(n,{prop:"receivedPrice",label:"到款金额","min-width":"120"}),t(n,{prop:"contractStatus",label:"合同状态","min-width":"120"},{default:l(a=>[i(b({0:"未签订",1:"已签订",2:"已回执(电子)",3:"已回执(纸质)"}[a.row.contractStatus]),1)]),_:1}),t(n,{prop:"invoiceStatus",label:"发票状态","min-width":"120"},{default:l(a=>[i(b({0:"未申请",1:"待开票",2:"部分开票",3:"已开票"}[a.row.invoiceStatus]),1)]),_:1}),t(n,{prop:"clueUser",label:"所属人"}),t(n,{prop:"authUser",label:"下单人"}),t(n,{fixed:"right",label:"操作",width:"250"},{default:l(a=>[t(r,{link:"",type:"primary",onClick:_=>X(a.row.id)},{default:l(()=>[i("详情")]),_:2},1032,["onClick"]),a.row.orderStatus!==0?(w(),g(y,{key:0},[a.row.contractStatus===0?(w(),g(y,{key:0},[t(r,{link:"",type:"primary",onClick:_=>o.$router.push({name:"ContractTemplates",query:{id:a.row.id,type:2}})},{default:l(()=>[i("签订合同")]),_:2},1032,["onClick"]),t(r,{link:"",type:"primary",onClick:_=>z(a.row.id)},{default:l(()=>[i("上传合同")]),_:2},1032,["onClick"])],64)):(w(),g(y,{key:1},[t(r,{link:"",type:"primary",onClick:_=>o.$router.push({name:"ContractTemplates",query:{id:a.row.id,type:2}})},{default:l(()=>[i("更新合同")]),_:2},1032,["onClick"]),t(r,{link:"",type:"primary",onClick:_=>z(a.row.id)},{default:l(()=>[i("上传合同")]),_:2},1032,["onClick"])],64)),t(r,{link:"",type:"primary",onClick:_=>V(a.row.id)},{default:l(()=>[i("撤销")]),_:2},1032,["onClick"])],64)):(w(),g(y,{key:1},[t(r,{link:"",type:"",disabled:""},{default:l(()=>[i("已撤销")]),_:1}),t(r,{link:"",type:"danger",onClick:_=>P(a.row.id)},{default:l(()=>[i("删除")]),_:2},1032,["onClick"])],64))]),_:1})]),_:1},8,["data"])]),h("div",Ce,[t(Q,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:E.value,"current-page":f.page,"onUpdate:currentPage":e[0]||(e[0]=a=>f.page=a),"page-size":f.perPage,"onUpdate:pageSize":e[1]||(e[1]=a=>f.perPage=a),onChange:u},null,8,["total","current-page","page-size"])])]),t(J,{modelValue:d.show,"onUpdate:modelValue":e[5]||(e[5]=a=>d.show=a),title:"上传合同",width:"400",draggable:""},{footer:l(()=>[t(r,{type:"primary",onClick:H,loading:c.value},{default:l(()=>[i("确定")]),_:1},8,["loading"]),t(r,{onClick:e[4]||(e[4]=a=>d.show=!1)},{default:l(()=>[i("取消")]),_:1})]),default:l(()=>[t(W,{modelValue:d.type,"onUpdate:modelValue":e[2]||(e[2]=a=>d.type=a)},{default:l(()=>[t(B,{value:1},{default:l(()=>[i("电子合同")]),_:1}),t(B,{value:2},{default:l(()=>[i("纸质合同")]),_:1})]),_:1},8,["modelValue"]),t(A,{ref_key:"uploadRef",ref:M,"auto-upload":!1,limit:1,"before-upload":G,"on-exceed":q,"file-list":oe(m),"onUpdate:fileList":e[3]||(e[3]=a=>ae(m)?m.value=a:m=a),style:{"margin-top":"10px"}},{default:l(()=>[t(r,{size:"small",type:"primary"},{default:l(()=>[i("点击上传")]),_:1})]),_:1},8,["file-list"])]),_:1},8,["modelValue"]),t(ue,{ref_key:"detailRef",ref:R},null,512)],64)}}});export{vt as default};
