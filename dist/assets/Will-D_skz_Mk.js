import{d as re,l as d,s as B,O as ie,o as f,f as x,P as p,S as o,w as l,F as C,W as P,Q as i,R as M,c as I,X as L,_ as ne,$ as se}from"./index-CqGmAY_u.js";/* empty css                     *//* empty css                 */import"./el-tag-uPOr0Gox.js";/* empty css                  */import"./el-scrollbar-DStktWal.js";import{E as de}from"./el-dialog-v8QaKeiT.js";/* empty css                   *//* empty css                 */import{E as me}from"./el-pagination-C94Vvszp.js";import{E as pe,a as ue}from"./el-table-column-BN3t8Niw.js";import"./el-checkbox-BEIE1FTh.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-button-DpzYuNCC.js";/* empty css                        */import{a as ce,b as fe,E as _e}from"./el-dropdown-item-BW3AALgD.js";import{T as he}from"./index-BGjDof29.js";import{a as h}from"./index-C_duR44S.js";import{e as ge}from"./index-Dp5RPssR.js";import{g as ve}from"./index-CxVMG3W4.js";/* empty css                   *//* empty css                       */import{a as m}from"./request-BWe5mLiC.js";import{E as be}from"./index-D5J-_Dfe.js";import{E as we}from"./index-BJocUqJs.js";import{E as Ie}from"./index-Bd1qaB5O.js";import{E as xe}from"./index-CguX-oIt.js";import{E as Ce,a as ke}from"./index-M5aUYcP_.js";import{E as ye,a as Ee}from"./index-CFhDgrYB.js";import{_ as Se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_initCloneObject-BTvP7gDY.js";import"./isEqual-BCKW0y_w.js";import"./typescript-B9iuFu41.js";import"./index-ChNZniro.js";import"./scroll-Covgc6bg.js";import"./vnode-8cI36gNR.js";import"./refs-DIIzzgZO.js";import"./event-BB_Ol6Sd.js";import"./index-CN0jcStv.js";import"./isArrayLikeObject-bNXIFdAR.js";import"./castArray-Ds8PJccp.js";/* empty css                                                              *//* empty css                       *//* empty css                          */import"./index-BXjaXClQ.js";import"./arrays-6TrVLtTe.js";import"./index-E146iEmP.js";import"./aria-KgdLjl5h.js";import"./validator-0OFKhMQ4.js";import"./_baseClone-CIKtdTEW.js";const k=w=>(ne("data-v-483054ed"),w=w(),se(),w),ze={class:"s-flex-col",style:{height:"100%"}},Ve={class:"",style:{"margin-bottom":"10px"}},Re={class:"el-dropdown-link"},Ue={class:"s-table-operations"},Ne={class:"s-flex-auto",style:{"min-height":"0"}},De={class:"s-table-pagination"},Fe=k(()=>p("div",{style:{"font-size":"15px","margin-bottom":"2px",color:"#444"}},"请在下列线索中选择主线索，合并后：",-1)),Te=k(()=>p("p",null,"1. 被合并线索下的动态迁移到主线索下",-1)),$e=k(()=>p("p",null,"2. 合并后的线索以主线索为主，并保留两条线索的所有记录",-1)),Be={class:"dialog-footer"},Pe={class:"dialog-footer"},Me=re({__name:"Will",setup(w){const y=d("全部"),E=d(""),_=B({page:1,perPage:10}),S=d(0),z=d({}),V=d([]),g=d(null),R=d([]),U=d([]),q=e=>{z.value=e,_.page=1,u()},u=async()=>{h.getList({status:2,exhibitionId:E.value,..._,...z.value}).then(e=>{e.code===0&&(V.value=e.data.data,S.value=e.data.total)})},r=B({show:!1,data:[],masterId:"",mergeId:"",ref:null,set:()=>{let e=g.value.getSelectionRows();if(e.length!==2){m.warning("请选择需要合并的线索，必须选择两个");return}r.show=!0,r.data=e,r.masterId=e[0].id,r.mergeId=e[1].id},sub:()=>{h.merge({masterId:r.masterId,mergeId:r.mergeId}).then(e=>{e.code===0?(m.success("合并成功"),r.show=!1,u()):m.error(e.msg)})}}),W=()=>{let e=g.value.getSelectionRows().map(t=>t.id);if(e.length===0){m.warning("请选择需要删除的线索");return}be.confirm("确定删除所选线索？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{h.del({id:e}).then(t=>{t.code===0?(m.success("删除成功"),u()):m.error(t.msg)})}).catch(()=>{})},v=d({}),b=d(!1),N=d(null),D=d([]),O=()=>{let e=g.value.getSelectionRows().map(t=>t.id);if(e.length===0){m.warning("请选择需要转移的线索");return}v.value.id=e,b.value=!0},G=()=>{N.value.validate(e=>{e&&h.changeUser(v.value).then(t=>{t.code===0?(m.success("转移成功"),b.value=!1,u()):m.error(t.msg)})})},H=()=>{let e=g.value.getSelectionRows().map(t=>t.id);if(e.length===0){m.warning("请选择需要移至公海的线索");return}h.changePublic({id:e}).then(t=>{t.code===0?(m.success("移至公海成功"),u()):m.error(t.msg)})},Q=()=>{console.log("import")},X=()=>{console.log("export")};h.getSearchField().then(e=>{e.code===0&&(R.value=e.data)}),ge().then(e=>{e.code===0&&(U.value=[{exhibitionName:"全部",id:""},...e.data])}),ve().then(e=>{e.code===0&&(D.value=e.data)});const j=e=>{console.log(e),y.value=e.exhibitionName,E.value=e.id,u()};return u(),(e,t)=>{const A=ie("arrow-down"),J=we,K=_e,Y=ce,Z=fe,n=Ie,s=pe,F=ue,ee=me,oe=xe,T=de,$=Ce,te=Ee,ae=ye,le=ke;return f(),x(C,null,[p("div",ze,[p("div",Ve,[o(Z,{onCommand:j,style:{outline:"none"}},{dropdown:l(()=>[o(Y,null,{default:l(()=>[(f(!0),x(C,null,P(U.value,(a,c)=>(f(),I(K,{key:c,command:a},{default:l(()=>[i(M(a.exhibitionName),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:l(()=>[p("span",Re,[i(M(y.value),1),o(J,{class:"el-icon--right"},{default:l(()=>[o(A)]),_:1})])]),_:1})]),o(he,{data:R.value,onSearch:q},null,8,["data"]),p("div",Ue,[o(n,{size:"small",onClick:O},{default:l(()=>[i("转移")]),_:1}),o(n,{size:"small",onClick:H},{default:l(()=>[i("移至公海")]),_:1}),o(n,{size:"small",onClick:r.set},{default:l(()=>[i("合并")]),_:1},8,["onClick"]),o(n,{size:"small",onClick:X},{default:l(()=>[i("导出")]),_:1}),o(n,{size:"small",onClick:W},{default:l(()=>[i("删除")]),_:1}),o(n,{size:"small",onClick:t[0]||(t[0]=a=>e.$router.push("/market/clues/add"))},{default:l(()=>[i("新建线索")]),_:1}),o(n,{size:"small",onClick:Q},{default:l(()=>[i("导入线索")]),_:1})]),p("div",Ne,[o(F,{ref_key:"tableRef",ref:g,data:V.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[o(s,{type:"selection",width:"42"}),o(s,{prop:"companyName",label:"公司名称",width:"180"}),o(s,{prop:"exhibitionContact",label:"联系方式",width:"180"}),o(s,{prop:"duties",label:"职务"}),o(s,{prop:"phone",label:"电话"}),o(s,{prop:"recordTime",label:"记录时间",width:"180"}),o(s,{prop:"recordText",label:"记录内容"}),o(s,{prop:"authUser",label:"授权人"}),o(s,{fixed:"right",label:"操作",width:"180"},{default:l(a=>[a.row.orderPositionStatus?(f(),I(n,{key:0,link:"",type:"primary",size:"small",onClick:c=>e.$router.push({name:"HallLayout",query:{clueId:a.row.id,exhibitionId:a.row.exhibitionId,exhibitorId:a.row.exhibitorId}})},{default:l(()=>[i(" 展位预定 ")]),_:2},1032,["onClick"])):L("",!0),a.row.orderMaterialStatus?(f(),I(n,{key:1,link:"",type:"primary",size:"small",onClick:c=>e.$router.push({name:"GoodsReserve",query:{clueId:a.row.id,exhibitionId:a.row.exhibitionId,exhibitorId:a.row.exhibitorId,hallCode:a.row.hallCode,positionCode:a.row.positionCode}})},{default:l(()=>[i(" 物料预定 ")]),_:2},1032,["onClick"])):L("",!0)]),_:1})]),_:1},8,["data"])]),p("div",De,[o(ee,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:S.value,"current-page":_.page,"onUpdate:currentPage":t[1]||(t[1]=a=>_.page=a),"page-size":_.perPage,"onUpdate:pageSize":t[2]||(t[2]=a=>_.perPage=a),onChange:u},null,8,["total","current-page","page-size"])])]),o(T,{modelValue:r.show,"onUpdate:modelValue":t[6]||(t[6]=a=>r.show=a),title:"合并销售线索",width:"500",draggable:""},{footer:l(()=>[p("div",Be,[o(n,{onClick:t[5]||(t[5]=a=>r.show=!1)},{default:l(()=>[i("取消")]),_:1}),o(n,{type:"primary",onClick:r.sub},{default:l(()=>[i("确定")]),_:1},8,["onClick"])])]),default:l(()=>[Fe,Te,$e,o(F,{data:r.data,border:"","show-overflow-tooltip":"","header-row-class-name":"s-table-header",onCurrentChange:t[4]||(t[4]=a=>{let c=r.masterId;r.masterId=a.id,r.mergeId=c})},{default:l(()=>[o(s,{label:"主线索",width:"70"},{default:l(a=>[o(oe,{value:a.row.id,modelValue:r.masterId,"onUpdate:modelValue":t[3]||(t[3]=c=>r.masterId=c)},null,8,["value","modelValue"])]),_:1}),o(s,{prop:"companyName",label:"公司名称"}),o(s,{prop:"exhibitionName",label:"展会姓名"}),o(s,{prop:"authUser",label:"线索所有人"})]),_:1},8,["data"])]),_:1},8,["modelValue"]),o(T,{modelValue:b.value,"onUpdate:modelValue":t[9]||(t[9]=a=>b.value=a),title:"转移销售线索",width:"500",draggable:""},{footer:l(()=>[p("div",Pe,[o(n,{onClick:t[8]||(t[8]=a=>b.value=!1)},{default:l(()=>[i("取消")]),_:1}),o(n,{type:"primary",onClick:G},{default:l(()=>[i("确定")]),_:1})])]),default:l(()=>[o(le,{ref_key:"moveFormRef",ref:N,model:v.value,"label-width":"auto"},{default:l(()=>[o($,{label:""},{default:l(()=>[i("是否将选中的销售线索转移？")]),_:1}),o($,{label:"销售线索所有人",prop:"userId",rules:[{required:!0,message:"请选择销售线索所有人"}]},{default:l(()=>[o(ae,{modelValue:v.value.userId,"onUpdate:modelValue":t[7]||(t[7]=a=>v.value.userId=a),placeholder:""},{default:l(()=>[(f(!0),x(C,null,P(D.value,a=>(f(),I(te,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}}),Bo=Se(Me,[["__scopeId","data-v-483054ed"]]);export{Bo as default};
