import{d as G,a0 as j,t as u,z as J,y as P,b as I,X as p,$ as t,i,J as v,a5 as Y,a7 as s,o as w,Y as n,Z as c,a1 as Z,h as K,ak as Q,a2 as ee,a3 as te}from"./index-DEM1Q7ah.js";import{E as oe}from"./dialog-OvK7FIEd.js";/* empty css                */import{E as ae}from"./radio-cDeAVAMw.js";import{E as ie}from"./pagination-CxeK4p13.js";/* empty css              */import"./tag-BOE4AccX.js";import"./select-DycYLwTT.js";import"./scrollbar-CyicQk5x.js";import"./popper-6cDUjaRW.js";import{E as le,a as re}from"./table-column-wBiq0U5n.js";import"./checkbox-URtfrshM.js";/* empty css                */import{E as ne}from"./link-BNrb30ws.js";import{E as se}from"./button-BhsazfUD.js";import{_ as de}from"./index.vue_vue_type_script_setup_true_lang-DP3pQG-h.js";/* empty css                                              */import{E as pe}from"./ExhibitionChange-L0dImouF.js";import{_ as me}from"./Move.vue_vue_type_script_setup_true_lang-CYCxhaUW.js";import{a as h}from"./index-D-WV_ICy.js";import{j as T}from"./index-DvSBF-rc.js";/* empty css                *//* empty css                    */import{E as ue}from"./index-B9pqzlZv.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-apjzc23w.js";import"./use-form-item-FEc-havy.js";import"./scroll-CzTDrJbU.js";import"./vnode-Bod1Q6cQ.js";import"./focus-trap-OSNMQz79.js";import"./refs-D-YtBsDp.js";import"./event-BB_Ol6Sd.js";import"./isEqual-Dnbp5P_R.js";import"./_initCloneObject-B0so-X2S.js";import"./index-rUWjPUE6.js";import"./castArray-DHLwE7Nc.js";import"./form-item-BqEwLgzp.js";import"./_baseClone-CM4Uj5KP.js";/* empty css                      */import"./index-AZNK1TTm.js";import"./aria-KgdLjl5h.js";import"./validator-Cf7VM-w_.js";const x=b=>(ee("data-v-7513cfb3"),b=b(),te(),b),he={class:"s-flex-col",style:{height:"100%"}},fe={class:"",style:{"margin-bottom":"10px"}},ge={class:"s-table-operations"},_e={class:"s-flex-auto",style:{"min-height":"0"}},be={class:"s-table-pagination"},we=x(()=>p("div",{style:{"font-size":"15px","margin-bottom":"2px",color:"#444"}},"请在下列线索中选择主线索，合并后：",-1)),Ie=x(()=>p("p",null,"1. 被合并线索下的动态迁移到主线索下",-1)),ve=x(()=>p("p",null,"2. 合并后的线索以主线索为主，并保留两条线索的所有记录",-1)),xe={class:"dialog-footer"},ye=G({__name:"Will",setup(b){const y=Y(),C=j(),k=u(C.EXHIBITION_INFO);J(()=>C.EXHIBITION_INFO,(e,o)=>{e.id!==o.id&&(k.value=e,m())},{deep:!0});const f=P({page:1,perPage:20}),E=u(0),S=u({}),N=u([]),g=u(null),B=u([]),U=e=>{S.value=e,f.page=1,m()},m=async()=>{h.getList({status:2,exhibitionId:k.value.id,...f,...S.value}).then(e=>{e.code===0&&(N.value=e.data.data,E.value=e.data.total)})},r=P({show:!1,data:[],masterId:"",mergeId:"",ref:null,set:()=>{let e=g.value.getSelectionRows();if(e.length!==2){s.warning("请选择需要合并的线索，必须选择两个");return}r.show=!0,r.data=e,r.masterId=e[0].id,r.mergeId=e[1].id},sub:()=>{h.merge({masterId:r.masterId,mergeId:r.mergeId}).then(e=>{e.code===0?(s.success("合并成功"),r.show=!1,m()):s.error(e.msg)})}}),F=()=>{let e=g.value.getSelectionRows().map(o=>o.id);if(e.length===0){s.warning("请选择需要删除的线索");return}ue.confirm("确定删除所选线索？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{h.del({id:e}).then(o=>{o.code===0?(s.success("删除成功"),m()):s.error(o.msg)})}).catch(()=>{})},R=u(null),z=()=>{let e=g.value.getSelectionRows().map(o=>o.id);if(e.length===0){s.warning("请选择需要转移的线索");return}R.value.setMove(e)},M=()=>{let e=g.value.getSelectionRows().map(o=>o.id);if(e.length===0){s.warning("请选择需要移至公海的线索");return}h.changePublic({id:e}).then(o=>{o.code===0?(s.success("移至公海成功"),m()):s.error(o.msg)})},D=()=>{h.clueExport({status:2}).then(e=>{e.code===0?(s.success("导出成功"),window.open(e.data.url,"_self")):s.error(e.msg)})};h.getSearchField().then(e=>{e.code===0&&(B.value=e.data)});const V=u([]),L=()=>{h.getCustomField().then(e=>{e.code===0&&(V.value=e.data)})},O=e=>{T({exhibitionId:e.exhibitionId}).then(o=>{o.code===0?y.push({name:"HallLayout",query:{clueId:e.id,exhibitionId:e.exhibitionId,exhibitorId:e.exhibitorId}}):s.error(o.msg)})},q=e=>{T({exhibitionId:e.exhibitionId}).then(o=>{o.code===0?y.push({name:"GoodsReserve",query:{clueId:e.id,exhibitionId:e.exhibitionId,exhibitorId:e.exhibitorId,hallCode:e.hallCode,positionCode:e.positionCode}}):s.error(o.msg)})};return L(),m(),(e,o)=>{const d=se,l=re,H=ne,$=le,W=ie,X=ae,A=oe;return w(),I(v,null,[p("div",he,[p("div",fe,[t(pe)]),t(de,{data:B.value,onSearch:U},null,8,["data"]),p("div",ge,[t(d,{onClick:z},{default:i(()=>[n("转移")]),_:1}),t(d,{onClick:M},{default:i(()=>[n("移至公海")]),_:1}),t(d,{onClick:r.set},{default:i(()=>[n("合并")]),_:1},8,["onClick"]),t(d,{onClick:D},{default:i(()=>[n("导出")]),_:1}),t(d,{onClick:F},{default:i(()=>[n("删除")]),_:1}),t(d,{onClick:o[0]||(o[0]=a=>e.$router.push({name:"CluesAdd",query:{status:2}}))},{default:i(()=>[n("新建线索")]),_:1}),t(d,{onClick:o[1]||(o[1]=a=>e.$router.push({name:"CluesImport",query:{status:2}}))},{default:i(()=>[n("导入线索")]),_:1})]),p("div",_e,[t($,{ref_key:"tableRef",ref:g,data:N.value,border:"","table-layout":"fixed",height:"100%","cell-style":{minWidth:"120px"},"show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:i(()=>[t(l,{type:"selection",width:"42",fixed:"left"}),t(l,{type:"index",label:"序号",width:"60"}),t(l,{prop:"companyName",label:"企业名称",width:"180"},{default:i(a=>[t(H,{href:"/market/clues/info?type=2&id="+a.row.id+"&exhibitionId="+a.row.exhibitionId+"&authUser="+a.row.authUser,type:"primary"},{default:i(()=>[n(c(a.row.companyName),1)]),_:2},1032,["href"])]),_:1}),t(l,{prop:"exhibitionName",label:"展会名称",width:"180"}),t(l,{prop:"positionCode",label:"展位号"}),t(l,{prop:"positionType",label:"展位类型","min-width":"120"},{default:i(a=>[n(c({1:"标准",2:"特装"}[a.row.positionType]),1)]),_:1}),t(l,{prop:"positionArea",label:"展位面积","min-width":"120"}),t(l,{prop:"contractPosition",label:"展位合同","min-width":"120"},{default:i(a=>[n(c({0:"未签订",1:"已签订",2:"已回执"}[a.row.contractPosition]),1)]),_:1}),t(l,{prop:"contractMaterial",label:"物料合同","min-width":"120"},{default:i(a=>[n(c({0:"未签订",1:"已签订",2:"已回执"}[a.row.contractMaterial]),1)]),_:1}),t(l,{prop:"isExit",label:"是否退展","min-width":"120"},{default:i(a=>[n(c({0:"否",1:"是"}[a.row.isExit]),1)]),_:1}),t(l,{prop:"exhibitionContact",label:"展会联系人","min-width":"120"}),t(l,{prop:"duties",label:"职位","min-width":"120"}),t(l,{prop:"phone",label:"手机号","min-width":"120"}),(w(!0),I(v,null,Z(V.value,a=>(w(),I(v,{key:a.key},[a.name=="通讯地址"||a.name=="主营业务"?(w(),K(l,{key:0,prop:a.key,label:a.name,"min-width":"120"},null,8,["prop","label"])):Q("",!0)],64))),128)),t(l,{prop:"authUser",label:"持有人"}),t(l,{fixed:"right",label:"操作",width:"220"},{default:i(a=>[t(d,{link:"",type:"primary",onClick:_=>O(a.row)},{default:i(()=>[n(c(a.row.orderPositionStatus?"新增":"")+"展位预定 ",1)]),_:2},1032,["onClick"]),t(d,{link:"",type:"primary",onClick:_=>q(a.row)},{default:i(()=>[n(c(a.row.orderMaterialStatus?"新增":"")+"物料预定 ",1)]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),p("div",be,[t(W,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50,100],total:E.value,"current-page":f.page,"onUpdate:currentPage":o[2]||(o[2]=a=>f.page=a),"page-size":f.perPage,"onUpdate:pageSize":o[3]||(o[3]=a=>f.perPage=a),onChange:m},null,8,["total","current-page","page-size"])])]),t(A,{modelValue:r.show,"onUpdate:modelValue":o[7]||(o[7]=a=>r.show=a),title:"合并销售线索",width:"500",draggable:""},{footer:i(()=>[p("div",xe,[t(d,{onClick:o[6]||(o[6]=a=>r.show=!1)},{default:i(()=>[n("取消")]),_:1}),t(d,{type:"primary",onClick:r.sub},{default:i(()=>[n("确定")]),_:1},8,["onClick"])])]),default:i(()=>[we,Ie,ve,t($,{data:r.data,border:"","show-overflow-tooltip":"","header-row-class-name":"s-table-header",onCurrentChange:o[5]||(o[5]=a=>{let _=r.masterId;r.masterId=a.id,r.mergeId=_})},{default:i(()=>[t(l,{label:"主线索",width:"70"},{default:i(a=>[t(X,{value:a.row.id,modelValue:r.masterId,"onUpdate:modelValue":o[4]||(o[4]=_=>r.masterId=_)},null,8,["value","modelValue"])]),_:1}),t(l,{prop:"companyName",label:"公司名称","min-width":"120"}),t(l,{prop:"exhibitionName",label:"展会姓名","min-width":"120"}),t(l,{prop:"authUser",label:"线索所有人","min-width":"120"})]),_:1},8,["data"])]),_:1},8,["modelValue"]),t(me,{ref_key:"moveRef",ref:R,onCallback:m},null,512)],64)}}}),ut=ce(ye,[["__scopeId","data-v-7513cfb3"]]);export{ut as default};
