import{d as A,S as J,l as u,t as K,s as R,b as g,O as y,R as t,i as l,F as w,W as Y,a5 as Z,o as v,P as r,Q as b,e as ee,ai as te}from"./index-DeEmUtk8.js";import{E as oe}from"./el-dialog-DOyBZBm6.js";/* empty css                   */import{E as ae}from"./el-progress-C3XsK8Af.js";/* empty css                       */import{E as le,a as re}from"./el-radio-DTQ752oL.js";import{E as ie}from"./el-pagination-DVhabw-y.js";/* empty css                 */import"./el-tag-sTjTPs1p.js";import"./el-select-CdAKibK0.js";import"./el-scrollbar-B1UEJCGn.js";import"./el-popper-BDA29ZWi.js";import{E as ne,a as se}from"./el-table-column-BgZCj435.js";import"./el-checkbox-BzP2PgOU.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                  */import{T as pe}from"./index-DdLp2tIy.js";import{b as f}from"./index-sbguJ_ol.js";import{u as de}from"./index-CnQNvcr7.js";import{d as ue}from"./index-Cs82ctsT.js";import{z as me}from"./fileZip-D6Yl7FsS.js";import{_ as ce}from"./ExhibitionChange.vue_vue_type_script_setup_true_lang-Cv30U2LH.js";/* empty css                       *//* empty css                   */import{c as p}from"./request-CrXne6Ug.js";import{E as fe}from"./index-qMmuViMS.js";import{E as $}from"./index-ClnE_xu4.js";import"./index-B4wusByw.js";import"./use-form-item-DsK_TWpk.js";import"./scroll-2Pi8ZKPm.js";import"./vnode-DmBlLciG.js";import"./refs-BZ5sklc_.js";import"./event-BB_Ol6Sd.js";import"./cloneDeep-Dx6YH9FS.js";import"./_baseClone-EScuJjl1.js";import"./_initCloneObject-BADudMQM.js";import"./isEqual-BJDDhv6O.js";import"./index-BuE8HFtE.js";import"./castArray-B2QRG32N.js";import"./el-form-item-CUOwenu9.js";/* empty css                                                              */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                        */import"./el-dropdown-item-D1RhnIXn.js";import"./index-IG-qNpH2.js";import"./aria-KgdLjl5h.js";import"./validator-wDnDF2Ia.js";const he={class:"s-flex-col",style:{height:"100%"}},_e={class:"",style:{"margin-bottom":"10px"}},ge={class:"s-table-operations"},ye={class:"s-flex-auto",style:{"min-height":"0"}},we={class:"s-table-pagination"},ht=A({__name:"Booth",setup(ve){const C=J(),E=u(C.EXHIBITION_INFO);K(()=>C.EXHIBITION_INFO,(o,e)=>{o.id!==e.id&&(E.value=o,c())},{deep:!0}),Y();const F=Z(),m=u(!1),h=R({page:1,perPage:10}),x=u(0),I=u({}),N=F.query.id,k=u([]),S=u(null),T=u([]),n=R({show:!1,file:"",type:1,orderId:""}),U=o=>{I.value=o,h.page=1,c()},c=()=>{f.getList({exhibitionId:E.value.id,...h,...I.value}).then(o=>{o.code===0?(k.value=o.data.data,x.value=o.data.total):k.value=[{}]})},V=o=>{$.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{f.revoke({id:o}).then(e=>{e.code===0?(p.success("撤销成功"),c()):p.error(e.msg)})}).catch(()=>{})},D=o=>{$.confirm("是否确认要删除订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{f.del({id:o}).then(e=>{e.code===0?(p.success("删除成功"),c()):p.error(e.msg)})}).catch(()=>{})},P=()=>{let o=S.value.getSelectionRows().map(e=>e.id);if(o.length===0){p.warning("请选择需要下载的数据");return}ue({orderId:o}).then(e=>{if(e.code===0){if(e.data.length===0){p.warning("无数据");return}me(e.data)}else p.error(e.msg)})},O=()=>{f.export({exhibitionId:N}).then(o=>{o.code===0?(window.open(o.data.url,"_self"),p.success("导出成功")):p.error(o.msg)})},L=u(null);let d=u([]);const q=o=>{let e=o[0];d.value=[{name:e.name,size:e.size,uid:e.uid,status:"ready",percentage:0,raw:e}]},M=o=>{const e=o.size/1024/1024<3;return e||p.error("文件大小不能超过 3MB!"),e},B=o=>{n.show=!0,n.type=1,n.orderId=o,n.file="",d.value=[]},H=()=>{if(n.type===1&&d.value.length===0){p.warning("请选择合同文件");return}if(m.value=!0,d.value.length===0)f.receipt({orderId:n.orderId,type:n.type}).then(o=>{o.code===0?(p.success("上传成功"),n.show=!1,c()):p.error(o.msg),m.value=!1}).catch(()=>{m.value=!1});else{let o=new FormData;o.append("upload",d.value[0].raw),de(o).then(e=>{e.code===0?f.receipt({orderId:n.orderId,type:n.type,url:e.data.url}).then(s=>{s.code===0?(p.success("上传成功"),n.show=!1,c()):p.error(s.msg),m.value=!1}).catch(()=>{m.value=!1}):(p.error(e.msg),m.value=!1)}).catch(()=>{m.value=!1})}};return f.getSearchField().then(o=>{o.code===0&&(T.value=o.data)}),c(),(o,e)=>{const s=fe,i=se,X=ne,j=ie,z=le,G=re,Q=ae,W=oe;return v(),g(w,null,[y("div",he,[y("div",_e,[t(ce)]),t(pe,{data:T.value,onSearch:U},null,8,["data"]),y("div",ge,[t(s,{size:"small",onClick:P},{default:l(()=>[r("批量下载合同")]),_:1}),t(s,{size:"small",onClick:O},{default:l(()=>[r("导出")]),_:1})]),y("div",ye,[t(X,{ref_key:"tableRef",ref:S,data:k.value,border:"",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[t(i,{type:"selection",width:"40",fixed:"left"}),t(i,{prop:"orderCode",label:"订单编号",width:"280"}),t(i,{prop:"companyName",label:"企业名称","min-width":"120"}),t(i,{prop:"exhibitionName",label:"展会名称","min-width":"120"}),t(i,{prop:"hallCode",label:"展馆号"}),t(i,{prop:"positionCode",label:"展位号"}),t(i,{prop:"area",label:"面积"}),t(i,{prop:"num",label:"展位数量","min-width":"120"}),t(i,{prop:"orderPrice",label:"订单金额","min-width":"120"}),t(i,{prop:"orderType",label:"下单方式","min-width":"120"},{default:l(a=>[r(b(a.row.orderType===1?"代下单":"展商下单"),1)]),_:1}),t(i,{prop:"payStatus",label:"付款状态","min-width":"120"},{default:l(a=>[r(b({0:"未付款",1:"部分付款",2:"已付款"}[a.row.payStatus]),1)]),_:1}),t(i,{prop:"receivedPrice",label:"到款金额","min-width":"120"}),t(i,{prop:"contractStatus",label:"合同状态","min-width":"120"},{default:l(a=>[r(b({0:"未签订",1:"已签订",2:"已回执(电子)",3:"已回执(纸质)"}[a.row.contractStatus]),1)]),_:1}),t(i,{prop:"invoiceStatus",label:"发票状态","min-width":"120"},{default:l(a=>[r(b({0:"未申请",1:"待开票",2:"部分开票",3:"已开票"}[a.row.invoiceStatus]),1)]),_:1}),t(i,{prop:"clueUser",label:"所属人"}),t(i,{prop:"authUser",label:"下单人"}),t(i,{fixed:"right",label:"操作",width:"250"},{default:l(a=>[t(s,{link:"",type:"primary",onClick:_=>o.$router.push({name:"OrderBoothDetail",query:{id:a.row.id}})},{default:l(()=>[r("详情")]),_:2},1032,["onClick"]),a.row.orderStatus!==0?(v(),g(w,{key:0},[a.row.contractStatus===0?(v(),g(w,{key:0},[t(s,{link:"",type:"primary",onClick:_=>o.$router.push({name:"ContractTemplates",query:{id:a.row.id,type:1}})},{default:l(()=>[r("签订合同")]),_:2},1032,["onClick"]),t(s,{link:"",type:"primary",onClick:_=>B(a.row.id)},{default:l(()=>[r("上传合同")]),_:2},1032,["onClick"])],64)):(v(),g(w,{key:1},[t(s,{link:"",type:"primary",onClick:_=>o.$router.push({name:"ContractTemplates",query:{id:a.row.id,type:1}})},{default:l(()=>[r("更新合同")]),_:2},1032,["onClick"]),t(s,{link:"",type:"primary",onClick:_=>B(a.row.id)},{default:l(()=>[r("上传合同")]),_:2},1032,["onClick"])],64)),t(s,{link:"",type:"primary",onClick:_=>V(a.row.id)},{default:l(()=>[r("撤销")]),_:2},1032,["onClick"])],64)):(v(),g(w,{key:1},[t(s,{link:"",type:"",disabled:""},{default:l(()=>[r("已撤销")]),_:1}),t(s,{link:"",type:"danger",onClick:_=>D(a.row.id)},{default:l(()=>[r("删除")]),_:2},1032,["onClick"])],64))]),_:1})]),_:1},8,["data"])]),y("div",we,[t(j,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:x.value,"current-page":h.page,"onUpdate:currentPage":e[0]||(e[0]=a=>h.page=a),"page-size":h.perPage,"onUpdate:pageSize":e[1]||(e[1]=a=>h.perPage=a),onChange:c},null,8,["total","current-page","page-size"])])]),t(W,{modelValue:n.show,"onUpdate:modelValue":e[5]||(e[5]=a=>n.show=a),title:"上传合同",width:"400",draggable:""},{footer:l(()=>[t(s,{type:"primary",onClick:H,loading:m.value},{default:l(()=>[r("确定")]),_:1},8,["loading"]),t(s,{onClick:e[4]||(e[4]=a=>n.show=!1)},{default:l(()=>[r("取消")]),_:1})]),default:l(()=>[t(G,{modelValue:n.type,"onUpdate:modelValue":e[2]||(e[2]=a=>n.type=a)},{default:l(()=>[t(z,{value:1},{default:l(()=>[r("电子合同")]),_:1}),t(z,{value:2},{default:l(()=>[r("纸质合同")]),_:1})]),_:1},8,["modelValue"]),t(Q,{ref_key:"uploadRef",ref:L,"auto-upload":!1,limit:1,"before-upload":M,"on-exceed":q,"file-list":ee(d),"onUpdate:fileList":e[3]||(e[3]=a=>te(d)?d.value=a:d=a),style:{"margin-top":"10px"}},{default:l(()=>[t(s,{size:"small",type:"primary"},{default:l(()=>[r("点击上传")]),_:1})]),_:1},8,["file-list"])]),_:1},8,["modelValue"])],64)}}});export{ht as default};
