import{d as ie,t as b,y as L,b as w,X as v,$ as t,i as a,J as P,a5 as re,am as ne,a7 as m,o as n,Y as s,a1 as M,Z as de,h as u,ak as c,e as se}from"./index-mj6nX6cW.js";import{g as ue,E as pe}from"./progress-DvV6uX9o.js";import{E as me}from"./dialog-BpCbY_Hc.js";/* empty css                */import{a as fe,E as ce}from"./form-item-BEwomLm8.js";import{E as be}from"./row-BQ2T1xN-.js";import{E as he}from"./col-CU9LTTBJ.js";/* empty css              */import"./tag-CTbgcjoR.js";import{E as ge,a as _e}from"./select-HiBRVLk4.js";import"./scrollbar-__C50hk7.js";import"./popper-B6FPKx2r.js";import{E as ve,_ as xe,a as ke}from"./sx-D2CSf7GX.js";import{E as ye,a as Ee}from"./table-column-C0SMPn-F.js";import{E as Ce,a as Ve}from"./checkbox-mY4ww0_f.js";/* empty css                *//* empty css                       */import{E as we}from"./button-jcEyolu9.js";/* empty css                      *//* empty css                                              */import{b as Ie,a as Ue,g as Pe,c as Fe,d as De,e as Re,f as qe}from"./index-Bo0bRq9z.js";import{g as Be}from"./index-1NnJYHyA.js";import{g as Me}from"./index-P4G-CyYP.js";import{d as Se}from"./fileZip-DQe_cJqw.js";/* empty css                *//* empty css                    */import{E as Te}from"./index-xcY17rZU.js";import{E as $e}from"./index-BbcXdUiV.js";import"./use-form-item-B27kjw89.js";import"./cloneDeep-CG4m2PvF.js";import"./_baseClone-DHvQq53Q.js";import"./_initCloneObject-rtfkBEjx.js";import"./isEqual-Dwqv-MoZ.js";import"./index-DGtgn1Uv.js";import"./scroll-8Dfu7w70.js";import"./vnode-BcANh4JO.js";import"./focus-trap--BmSj3qZ.js";import"./refs-BgHLWhVP.js";import"./event-BB_Ol6Sd.js";import"./castArray-B0k6tcL4.js";import"./dropdown-BKe8mYFR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./aria-KgdLjl5h.js";import"./validator-DtPP7zzP.js";const ze={class:"s-flex-col",style:{height:"100%"}},Le={class:"s-table-operations"},Ne=v("img",{style:{width:"17px"},src:xe,alt:""},null,-1),Oe={class:"s-flex-auto",style:{"min-height":"0"}},je={class:"s-table-pagination"},Ae={class:"dialog-footer"},Tl=ie({__name:"Manage",setup(Ge){re();const h=ne().query.id,F=b([]),D=b(null),R=b(null),_=b(!1),I=b(!1),r=L({id:"",exhibitionId:h,hallCode:"",positionCode:"",standardPrice:0,specialPrice:0,specialUnit:1,length:0,width:0,remark:"",exhibitor:"",exhibitorId:""}),N={hallCode:[{required:!0,message:"请输入大厅号",trigger:"blur"}],positionCode:[{required:!0,message:"请输入位置号",trigger:"blur"}],standardPrice:[{required:!0,message:"请输入标准展位单价",trigger:"blur"},{validator:(l,e,i)=>{e<=0?i(new Error("不能小于0")):i()}}],specialPrice:[{required:!0,message:"请输入特装展位单价",trigger:"blur"},{validator:(l,e,i)=>{e<=0?i(new Error("不能小于0")):i()}}],specialUnit:[{required:!0,message:"请选择单位",trigger:"blur"}],length:[{required:!0,message:"请输入长度",trigger:"blur"},{validator:(l,e,i)=>{e<=0?i(new Error("必须大于0")):i()}}],width:[{required:!0,message:"请输入宽度",trigger:"blur"},{validator:(l,e,i)=>{e<=0?i(new Error("必须大于0")):i()}}]};let U=b([]);Be({exhibitionId:h}).then(l=>{l.code===0&&(U.value=l.data)}),b([]);const E=()=>{Ie({exhibitionId:h}).then(l=>{l.code===0?F.value=l.data:F.value=[]})},O=async l=>{I.value=!0,_.value=!0,r.hallCode=l.hallCode,r.positionCode=l.positionCode,r.standardPrice=l.standardPrice,r.specialPrice=l.specialPrice,r.specialUnit=l.specialUnit.indexOf("个")>-1?2:1,r.length=l.length,r.width=l.width,r.remark=l.remark,r.exhibitor=l.exhibitor,r.exhibitorId=l.exhibitorId,r.id=l.id},j=()=>{let l=D.value.getSelectionRows().map(e=>e.id);if(l.length===0){m.error("请选择需要删除的数据");return}S(l)},S=l=>{Te.confirm("此操作将永久删除数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Ue({id:l}).then(e=>{e.code===0?(m.success("删除成功"),E()):m.error(e.msg)})}).catch(()=>{})},A=async()=>{I.value=!1,_.value=!0,r.remark=""},G=()=>{R.value.validate(l=>{if(l)if(I.value){let e=r;e.exhibitor=e.exhibitorId?U.value.find(i=>i.id===r.exhibitorId).name:"",De(e).then(i=>{i.code===0?(m.success("编辑成功"),_.value=!1,E()):m.error(i.msg)})}else{let{id:e,...i}=r;i.exhibitor=i.exhibitorId?U.value.find(k=>k.id===r.exhibitorId).name:"",Re(i).then(k=>{k.code===0?(m.success("新增成功"),_.value=!1,E()):m.error(k.msg)})}else return!1})},T=b([]);Me({exhibitionId:h}).then(l=>{l.code===0&&(T.value=l.data)});const x=b(),d=L({show:!1,loading:!1,list:[],set:()=>{d.show=!0},sub:()=>{if(d.list.length===0){m.error("请选择文件");return}x.value.submit()},dowModel:()=>{Pe({exhibitionId:h}).then(l=>{l.code===0&&Se(l.data.url,l.data.name)})}}),H=l=>{x.value.clearFiles();const e=l[0];e.uid=ue(),x.value.handleStart(e)},J=()=>{Fe({exhibitionId:h}).then(l=>{l.code===0?(window.open(l.data.url,"_self"),m.success("导出成功")):m.error(l.msg)})},X=l=>{const e=l.size/1024/1024<20;return e||m.error("文件大小不能超过 20MB!"),e},Y=l=>{d.loading=!0;const e=new FormData;e.append("file",l.file),e.append("exhibitionId",h),qe(e).then(i=>{i.code===0?(m.success("导入成功"),d.show=!1,x.value.clearFiles(),E()):m.error(i.msg),d.loading=!1}).catch(i=>{d.loading=!1})};h&&E();const C=b([]),q=b([]),Z=()=>{setTimeout(()=>{let l=[];D.value.columns.forEach(e=>{e.label&&l.push(e.label)}),q.value=l.join(",").split(","),C.value=l.join(",").split(",")},0)},f=l=>C.value.length===0&&q.value.length===0?!0:C.value.includes(l);return Z(),(l,e)=>{const i=we,k=Ce,K=Ve,Q=ve,p=Ee,W=ye,ee=ke,V=ge,B=_e,g=fe,y=$e,$=he,le=be,te=ce,z=me,oe=pe;return n(),w(P,null,[v("div",ze,[v("div",Le,[t(i,{onClick:A},{default:a(()=>[s("新增")]),_:1}),t(i,{onClick:e[0]||(e[0]=o=>d.set())},{default:a(()=>[s("导入")]),_:1}),t(i,{onClick:J},{default:a(()=>[s("导出")]),_:1}),t(i,{onClick:j},{default:a(()=>[s("删除")]),_:1}),t(Q,{placement:"bottom-end",trigger:"click"},{reference:a(()=>[t(i,{size:"",link:""},{default:a(()=>[Ne]),_:1})]),default:a(()=>[t(K,{modelValue:C.value,"onUpdate:modelValue":e[1]||(e[1]=o=>C.value=o)},{default:a(()=>[v("ul",null,[(n(!0),w(P,null,M(q.value,o=>(n(),w("li",{class:"s-checkbox_item",key:o},[t(k,{label:o,value:o},{default:a(()=>[s(de(o),1)]),_:2},1032,["label","value"])]))),128))])]),_:1},8,["modelValue"])]),_:1})]),v("div",Oe,[t(W,{ref_key:"tableRef",ref:D,data:F.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:a(()=>[t(p,{type:"selection",width:"42"}),f("ID")?(n(),u(p,{key:0,prop:"id",label:"ID",width:"50"})):c("",!0),f("展馆号")?(n(),u(p,{key:1,prop:"hallCode",label:"展馆号"})):c("",!0),f("展位号")?(n(),u(p,{key:2,prop:"positionCode",label:"展位号"})):c("",!0),f("标摊/元")?(n(),u(p,{key:3,prop:"standardPrice",label:"标摊/元","min-width":"120"})):c("",!0),f("特装/元")?(n(),u(p,{key:4,prop:"specialPrice",label:"特装/元","min-width":"120"})):c("",!0),f("特装/㎡/个")?(n(),u(p,{key:5,prop:"specialUnit",label:"特装/㎡/个","min-width":"120"})):c("",!0),f("长")?(n(),u(p,{key:6,prop:"length",label:"长"})):c("",!0),f("宽")?(n(),u(p,{key:7,prop:"width",label:"宽"})):c("",!0),f("备注")?(n(),u(p,{key:8,prop:"remark",label:"备注"})):c("",!0),f("参展商")?(n(),u(p,{key:9,prop:"exhibitor",label:"参展商"})):c("",!0),f("创建时间")?(n(),u(p,{key:10,prop:"time",label:"创建时间","min-width":"120"})):c("",!0),f("操作")?(n(),u(p,{key:11,fixed:"right",label:"操作",width:"150"},{default:a(o=>[t(i,{link:"",type:"primary",onClick:ae=>O(o.row)},{default:a(()=>[s("编辑")]),_:2},1032,["onClick"]),t(i,{link:"",type:"danger",onClick:ae=>S([o.row.id])},{default:a(()=>[s("删除")]),_:2},1032,["onClick"])]),_:1})):c("",!0)]),_:1},8,["data"])]),v("div",je,[t(ee,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:1e3})])]),t(z,{modelValue:_.value,"onUpdate:modelValue":e[12]||(e[12]=o=>_.value=o),title:I.value?"编辑":"新增展位信息",width:"500",draggable:"",onClose:e[13]||(e[13]=()=>R.value.resetFields())},{footer:a(()=>[v("div",Ae,[t(i,{onClick:e[11]||(e[11]=o=>_.value=!1)},{default:a(()=>[s("取消")]),_:1}),t(i,{type:"primary",onClick:G},{default:a(()=>[s("确定")]),_:1})])]),default:a(()=>[t(te,{ref_key:"formRef",ref:R,model:r,rules:N,"label-width":"auto","label-position":"left"},{default:a(()=>[t(g,{label:"展馆号",prop:"hallCode"},{default:a(()=>[t(B,{modelValue:r.hallCode,"onUpdate:modelValue":e[2]||(e[2]=o=>r.hallCode=o),placeholder:"请选择"},{default:a(()=>[(n(!0),w(P,null,M(T.value,o=>(n(),u(V,{key:o.code,label:o.code,value:o.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(g,{label:"展位号",prop:"positionCode"},{default:a(()=>[t(y,{modelValue:r.positionCode,"onUpdate:modelValue":e[3]||(e[3]=o=>r.positionCode=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(g,{label:"标准展位",prop:"standardPrice"},{default:a(()=>[t(y,{modelValue:r.standardPrice,"onUpdate:modelValue":e[4]||(e[4]=o=>r.standardPrice=o),autocomplete:"off",type:"number"},{append:a(()=>[s("元/个")]),_:1},8,["modelValue"])]),_:1}),t(g,{label:"特装展位",prop:"specialPrice"},{default:a(()=>[t(y,{modelValue:r.specialPrice,"onUpdate:modelValue":e[6]||(e[6]=o=>r.specialPrice=o),autocomplete:"off",type:"number"},{append:a(()=>[t(B,{modelValue:r.specialUnit,"onUpdate:modelValue":e[5]||(e[5]=o=>r.specialUnit=o),placeholder:"请选择",style:{width:"120px"}},{default:a(()=>[t(V,{label:"元/㎡",value:1}),t(V,{label:"元/个",value:2})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),t(le,null,{default:a(()=>[t($,{span:12},{default:a(()=>[t(g,{label:"长",prop:"length"},{default:a(()=>[t(y,{modelValue:r.length,"onUpdate:modelValue":e[7]||(e[7]=o=>r.length=o),autocomplete:"off",type:"number"},null,8,["modelValue"])]),_:1})]),_:1}),t($,{span:12},{default:a(()=>[t(g,{label:"宽",prop:"width"},{default:a(()=>[t(y,{modelValue:r.width,"onUpdate:modelValue":e[8]||(e[8]=o=>r.width=o),autocomplete:"off",type:"number"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(g,{label:"备注"},{default:a(()=>[t(y,{modelValue:r.remark,"onUpdate:modelValue":e[9]||(e[9]=o=>r.remark=o),autocomplete:"off",type:"textarea"},null,8,["modelValue"])]),_:1}),t(g,{label:"参展商",prop:"exhibitorId"},{default:a(()=>[t(B,{modelValue:r.exhibitorId,"onUpdate:modelValue":e[10]||(e[10]=o=>r.exhibitorId=o),placeholder:"请选择"},{default:a(()=>[t(V,{label:"无",value:""}),(n(!0),w(P,null,M(se(U),o=>(n(),u(V,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),t(z,{modelValue:d.show,"onUpdate:modelValue":e[16]||(e[16]=o=>d.show=o),title:"导入展位信息",width:"500",draggable:"",onClose:e[17]||(e[17]=()=>{d.loading=!1,x.value.clearFiles()})},{footer:a(()=>[t(i,{onClick:e[15]||(e[15]=o=>d.show=!1)},{default:a(()=>[s("取消")]),_:1}),t(i,{type:"primary",onClick:d.sub,loading:d.loading},{default:a(()=>[s("确定")]),_:1},8,["onClick","loading"])]),default:a(()=>[t(i,{type:"",onClick:d.dowModel,style:{"margin-bottom":"20px"}},{default:a(()=>[s("下载导入模板")]),_:1},8,["onClick"]),t(oe,{ref_key:"uploadRef",ref:x,"file-list":d.list,"onUpdate:fileList":e[14]||(e[14]=o=>d.list=o),"before-upload":X,"http-request":Y,accept:".xls,.xlsx","on-exceed":H,limit:1,multiple:!1,"auto-upload":!1},{default:a(()=>[t(i,{type:"primary"},{default:a(()=>[s("选择文件")]),_:1})]),_:1},8,["file-list"])]),_:1},8,["modelValue"])],64)}}});export{Tl as default};
