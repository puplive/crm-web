import{d as Y,s as Z,l as i,b,O as f,R as o,i as a,F as w,W as ee,a5 as te,o as d,P as r,Q as L,U as x,h as E,a3 as le}from"./index-DeSX2eSr.js";import{E as oe}from"./el-dialog-CD1L4fPG.js";/* empty css                   */import{a as ae,E as ie}from"./el-form-item-CRv0drmm.js";/* empty css                 */import"./el-tag-BQyrV36T.js";import{E as re,a as ne}from"./el-select-BMVNPZYZ.js";import"./el-scrollbar-C4h8kzU_.js";import"./el-popper-CT0v3eTF.js";import{E as se}from"./el-pagination-DEBTHSQ7.js";import{E as ue,a as de}from"./el-table-column-BdCa15VD.js";import"./el-checkbox-j7lFECTN.js";import"./el-tooltip-l0sNRNKZ.js";import{E as me}from"./el-link-C0fZh9hk.js";/* empty css                  */import{T as pe}from"./index-CxrsRhZD.js";import{a as m}from"./index-CgdkqLxD.js";import{e as ce}from"./index-B1n1Z6cX.js";import{b as fe}from"./index-CaNydjrM.js";import{d as ve}from"./tool-BQQRKqby.js";/* empty css                   *//* empty css                       */import{c as n}from"./request-Cns7CokS.js";import{E as ge}from"./index-2mh8h9PP.js";import{E as _e}from"./index-BrXk96ji.js";import"./index-Da9NyqAT.js";import"./use-form-item-D_DCfmfc.js";import"./scroll-iU-J_Tou.js";import"./vnode-C0RwecBe.js";import"./refs-Vw7JU3Sm.js";import"./event-BB_Ol6Sd.js";import"./castArray-hZIkKxd3.js";import"./_baseClone--tkZ36p-.js";import"./_initCloneObject-CHbams4w.js";import"./isEqual-BMa_i8p1.js";import"./index-BW2YqXyq.js";/* empty css                                                              */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./aria-KgdLjl5h.js";import"./validator-t_PUM3SV.js";const he={class:"s-flex-col",style:{height:"100%"}},be={class:"s-table-operations"},we={class:"s-flex-auto",style:{"min-height":"0"}},ke={class:"s-table-pagination"},ye={class:"dialog-footer"},xe={class:"dialog-footer"},ct=Y({__name:"Clues",setup(Ee){const M=ee();te();const c=Z({page:1,perPage:10}),C=i(0),S=i({}),F=i([]),k=i(null),V=i([]),U=i([]),$=e=>{S.value=e,c.page=1,p()},p=async()=>{m.getList({status:1,...c,...S.value}).then(e=>{e.code===0&&(F.value=e.data.data,C.value=e.data.total)})},v=i({}),g=i(!1),R=i(null),q=e=>{v.value.id=e.id,g.value=!0},O=()=>{R.value.validate(e=>{e&&m.changeIntention(v.value).then(t=>{t.code===0?(n.success("转为意向成功"),p(),g.value=!1):n.error(t.msg)})})},Q=()=>{let e=k.value.getSelectionRows().map(t=>t.id);if(e.length===0){n.warning("请选择需要删除的线索");return}ge.confirm("确定删除所选线索？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{m.del({id:e}).then(t=>{t.code===0?(n.success("删除成功"),p()):n.error(t.msg)})}).catch(()=>{})},_=i({}),h=i(!1),z=i(null),I=i([]),W=()=>{let e=k.value.getSelectionRows().map(t=>t.id);if(e.length===0){n.warning("请选择需要转移的线索");return}_.value.id=e,h.value=!0},j=()=>{z.value.validate(e=>{e&&m.changeUser(_.value).then(t=>{t.code===0?(n.success("转移成功"),h.value=!1,p()):n.error(t.msg)})})},A=()=>{let e=k.value.getSelectionRows().map(t=>t.id);if(e.length===0){n.warning("请选择需要移至公海的线索");return}m.changePublic({id:e}).then(t=>{t.code===0?(n.success("移至公海成功"),p()):n.error(t.msg)})},G=()=>{M.push("/market/clues/import")},H=()=>{m.clueExport({status:1}).then(e=>{e.code===0?(n.success("导出成功"),ve(e.data.url,"线索列表.xlsx")):n.error(e.msg)})};m.getSearchField().then(e=>{e.code===0&&(V.value=e.data)}),ce().then(e=>{e.code===0&&(U.value=e.data)}),fe().then(e=>{e.code===0&&(I.value=e.data)});const B=i([]);return(()=>{m.getCustomField().then(e=>{e.code===0&&(B.value=e.data)})})(),p(),(e,t)=>{const s=_e,u=de,J=me,K=ue,X=se,N=re,P=ne,y=ae,T=ie,D=oe;return d(),b(w,null,[f("div",he,[o(pe,{data:V.value,onSearch:$},null,8,["data"]),f("div",be,[o(s,{size:"small",onClick:t[0]||(t[0]=l=>e.$router.push("/market/clues/add"))},{default:a(()=>[r("新建线索")]),_:1}),o(s,{size:"small",onClick:G},{default:a(()=>[r("导入")]),_:1}),o(s,{size:"small",onClick:H},{default:a(()=>[r("导出")]),_:1}),o(s,{size:"small",onClick:W},{default:a(()=>[r("转移给他人")]),_:1}),o(s,{size:"small",onClick:A},{default:a(()=>[r("移至公海")]),_:1}),o(s,{size:"small",onClick:Q},{default:a(()=>[r("删除")]),_:1})]),f("div",we,[o(K,{ref_key:"tableRef",ref:k,data:F.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:a(()=>[o(u,{type:"selection",width:"42"}),o(u,{type:"index",label:"序号",width:"60"}),o(u,{prop:"companyName",label:"企业名称",width:"180"},{default:a(l=>[o(J,{href:"/market/clues/info?type=1&id="+l.row.id+"&exhibitionId="+l.row.exhibitionId+"&authUser="+l.row.authUser,type:"primary"},{default:a(()=>[r(L(l.row.companyName),1)]),_:2},1032,["href"])]),_:1}),o(u,{prop:"exhibitionContact",label:"展会联系人","min-width":"120"}),o(u,{prop:"duties",label:"职位"}),o(u,{prop:"phone",label:"手机号","min-width":"120"}),o(u,{prop:"recordStatus",label:"跟进状态","min-width":"120"},{default:a(l=>[r(L({0:"无",1:"电话邀约",2:"客户拜访",3:"初步方案",4:"停滞"}[l.row.recordStatus]),1)]),_:1}),o(u,{prop:"authUser",label:"持有人"}),(d(!0),b(w,null,x(B.value,l=>(d(),E(u,{key:l.key,prop:l.key,label:l.name,"min-width":"120"},null,8,["prop","label"]))),128)),o(u,{fixed:"right",label:"操作",width:"120"},{default:a(l=>[o(s,{link:"",type:"primary",onClick:Se=>q(l.row)},{default:a(()=>[r(" 转为意向客户 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),f("div",ke,[o(X,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:C.value,"current-page":c.page,"onUpdate:currentPage":t[1]||(t[1]=l=>c.page=l),"page-size":c.perPage,"onUpdate:pageSize":t[2]||(t[2]=l=>c.perPage=l),onChange:p},null,8,["total","current-page","page-size"])])]),o(D,{modelValue:g.value,"onUpdate:modelValue":t[5]||(t[5]=l=>g.value=l),title:"转为意向客户",width:"500",draggable:""},{footer:a(()=>[f("div",ye,[o(s,{onClick:t[4]||(t[4]=l=>g.value=!1)},{default:a(()=>[r("取消")]),_:1}),o(s,{type:"primary",onClick:O},{default:a(()=>[r("确定")]),_:1})])]),default:a(()=>[o(T,{ref_key:"willFormRef",ref:R,model:v.value,"label-width":"auto","label-position":"left"},{default:a(()=>[o(y,{label:"项目",prop:"exhibitionId",rules:[{required:!0,message:"请选择项目"}]},{default:a(()=>[o(P,{modelValue:v.value.exhibitionId,"onUpdate:modelValue":t[3]||(t[3]=l=>v.value.exhibitionId=l),placeholder:""},{default:a(()=>[(d(!0),b(w,null,x(U.value,l=>(d(),b(w,{key:l.id},[l.status===1?(d(),E(N,{key:0,label:l.exhibitionName,value:l.id},null,8,["label","value"])):le("",!0)],64))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),o(D,{modelValue:h.value,"onUpdate:modelValue":t[8]||(t[8]=l=>h.value=l),title:"转移销售线索",width:"500",draggable:""},{footer:a(()=>[f("div",xe,[o(s,{onClick:t[7]||(t[7]=l=>h.value=!1)},{default:a(()=>[r("取消")]),_:1}),o(s,{type:"primary",onClick:j},{default:a(()=>[r("确定")]),_:1})])]),default:a(()=>[o(T,{ref_key:"moveFormRef",ref:z,model:_.value,"label-width":"auto","label-position":"left"},{default:a(()=>[o(y,{label:""},{default:a(()=>[r("是否将选中的销售线索转移？")]),_:1}),o(y,{label:"销售线索所有人",prop:"userId",rules:[{required:!0,message:"请选择销售线索所有人"}]},{default:a(()=>[o(P,{modelValue:_.value.userId,"onUpdate:modelValue":t[6]||(t[6]=l=>_.value.userId=l),placeholder:""},{default:a(()=>[(d(!0),b(w,null,x(I.value,l=>(d(),E(N,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});export{ct as default};