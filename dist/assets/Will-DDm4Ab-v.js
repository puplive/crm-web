import{d as W,s as j,l as r,o as _,f as z,P as v,S as o,w as l,Q as n,F as x,V as A,c as H}from"./index-DVHkByco.js";import{E as J}from"./el-dialog-bp7p8zQB.js";import"./el-overlay-C63ZvL_K.js";import{a as K,b as X}from"./el-input-Dfe8Uzhl.js";import"./el-tag-BHjyucA7.js";import{E as Y,a as Z}from"./el-select-DgBIHiZD.js";import"./el-scrollbar-CG_JaPfx.js";import{E as ee}from"./el-pagination-Y47XXVE0.js";import{E as te,a as oe}from"./el-table-89c60yQ4.js";import"./el-checkbox-Cqc95xet.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                        */import{E as le}from"./el-button-9__Ng1jP.js";import{T as ae}from"./index-CfuTKQ2m.js";import{a as f}from"./index-D6JUichE.js";import{e as re}from"./index-nGf7mDmu.js";import{g as ne}from"./index-C62duh_X.js";/* empty css                   */import{E as ie}from"./el-message-box-BcM5ZuTJ.js";import{E as m}from"./request-kZhpW0Wr.js";import"./index-C-4RkVC5.js";import"./scroll-KUqymI_7.js";import"./vnode-tcDvg3gh.js";import"./typescript-_aKlIHPK.js";import"./_initCloneObject-CSxpNamp.js";import"./isEqual-QQ34r9eu.js";import"./isArrayLikeObject-C7wPhYU0.js";import"./el-date-picker-fOPNftKE.js";import"./arrays-6TrVLtTe.js";import"./el-radio-BWxioSU6.js";/* empty css                          */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./aria-KgdLjl5h.js";import"./validator-BJiU7xXV.js";const se={class:"s-table-operations"},me={class:"s-table-pagination"},pe={class:"dialog-footer"},je=W({__name:"Will",setup(ue){const p=j({page:1,perPage:10}),h=r(0),b=r({}),k=r([]),g=r(null),w=r([]),F=r([]),V=e=>{b.value=e,p.page=1,u()},u=async()=>{f.getList({status:2,...p,...b.value}).then(e=>{e.code!==200&&(k.value=e.data.data,h.value=e.data.total)})},B=r({}),R=r(!1);r(null);const T=e=>{B.value.id=e.id,R.value=!0},U=()=>{let e=g.value.getSelectionRows().map(t=>t.id);if(e.length===0){m.warning("请选择需要删除的线索");return}ie.confirm("确定删除所选线索？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{f.del({id:e}).then(t=>{t.code===0?(m.success("删除成功"),u()):m.error(t.msg)})}).catch(()=>{})},d=r({}),c=r(!1),C=r(null),E=r([]),$=()=>{let e=g.value.getSelectionRows().map(t=>t.id);if(e.length===0){m.warning("请选择需要转移的线索");return}d.value.id=e,c.value=!0},P=()=>{C.value.validate(e=>{e&&f.changeUser(d.value).then(t=>{t.code===0?(m.success("转移成功"),c.value=!1,u()):m.error(t.msg)})})},D=()=>{let e=g.value.getSelectionRows().map(t=>t.id);if(e.length===0){m.warning("请选择需要移至公海的线索");return}f.changePublic({id:e}).then(t=>{t.code===0?(m.success("移至公海成功"),u()):m.error(t.msg)})},I=()=>{console.log("import")},M=()=>{console.log("export")};return f.getSearchField().then(e=>{e.code===0&&(w.value=e.data)}),re().then(e=>{e.code===0&&(F.value=e.data)}),ne().then(e=>{e.code===0&&(E.value=e.data)}),u(),(e,t)=>{const i=le,s=te,L=oe,N=ee,y=K,q=Z,G=Y,O=X,Q=J;return _(),z(x,null,[v("div",null,[o(ae,{data:w.value,onSearch:V},null,8,["data"]),v("div",se,[o(i,{size:"small",onClick:$},{default:l(()=>[n("转移")]),_:1}),o(i,{size:"small",onClick:D},{default:l(()=>[n("移至公海")]),_:1}),o(i,{size:"small",onClick:t[0]||(t[0]=()=>{})},{default:l(()=>[n("合并")]),_:1}),o(i,{size:"small",onClick:M},{default:l(()=>[n("导出")]),_:1}),o(i,{size:"small",onClick:U},{default:l(()=>[n("删除")]),_:1}),o(i,{size:"small",onClick:t[1]||(t[1]=a=>e.$router.push("/market/clues/add"))},{default:l(()=>[n("新建线索")]),_:1}),o(i,{size:"small",onClick:I},{default:l(()=>[n("导入线索")]),_:1})]),o(L,{ref_key:"tableRef",ref:g,data:k.value,border:"","table-layout":"fixed","max-height":"300","header-row-class-name":"s-table-header"},{default:l(()=>[o(s,{type:"selection",width:"50"}),o(s,{prop:"companyName",label:"公司名称",width:"180"}),o(s,{prop:"exhibitionContact",label:"联系方式",width:"180"}),o(s,{prop:"duties",label:"职务"}),o(s,{prop:"phone",label:"电话"}),o(s,{prop:"recordTime",label:"记录时间",width:"180"}),o(s,{prop:"recordText",label:"记录内容"}),o(s,{prop:"authUser",label:"授权人"}),o(s,{fixed:"right",label:"操作",width:"180"},{default:l(a=>[o(i,{link:"",type:"primary",size:"small",onClick:S=>e.$router.push({name:"BoothReserve",query:{id:a.row.id}})},{default:l(()=>[n(" 展位预定 ")]),_:2},1032,["onClick"]),o(i,{link:"",type:"primary",size:"small",onClick:S=>e.$router.push({name:"GoodsReserve",query:{id:a.row.id}})},{default:l(()=>[n(" 物料预定 ")]),_:2},1032,["onClick"]),o(i,{link:"",type:"primary",size:"small",onClick:S=>T(a.row)},{default:l(()=>[n(" 移除意向 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),v("div",me,[o(N,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:h.value,"current-page":p.page,"onUpdate:currentPage":t[2]||(t[2]=a=>p.page=a),"page-size":p.perPage,"onUpdate:pageSize":t[3]||(t[3]=a=>p.perPage=a),onChange:u},null,8,["total","current-page","page-size"])])]),o(Q,{modelValue:c.value,"onUpdate:modelValue":t[6]||(t[6]=a=>c.value=a),title:"转移销售线索",width:"500",draggable:""},{footer:l(()=>[v("div",pe,[o(i,{onClick:t[5]||(t[5]=a=>c.value=!1)},{default:l(()=>[n("取消")]),_:1}),o(i,{type:"primary",onClick:P},{default:l(()=>[n("确定")]),_:1})])]),default:l(()=>[o(O,{ref_key:"moveFormRef",ref:C,model:d.value,"label-width":"auto"},{default:l(()=>[o(y,{label:""},{default:l(()=>[n("是否将选中的销售线索转移？")]),_:1}),o(y,{label:"销售线索所有人",prop:"userId",rules:[{required:!0,message:"请选择销售线索所有人"}]},{default:l(()=>[o(G,{modelValue:d.value.userId,"onUpdate:modelValue":t[4]||(t[4]=a=>d.value.userId=a),placeholder:""},{default:l(()=>[(_(!0),z(x,null,A(E.value,a=>(_(),H(q,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});export{je as default};
