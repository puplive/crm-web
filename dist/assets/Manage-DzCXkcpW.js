import{d as Q,t as p,y as B,b as k,X as v,$ as l,i,J as I,a5 as W,am as Z,a7 as s,o as x,Y as u,a1 as D,h as M,e as ee}from"./index-DEM1Q7ah.js";import{g as le,E as te}from"./progress-DrfPNYOl.js";import{E as oe}from"./dialog-OvK7FIEd.js";/* empty css                */import{a as ae,E as ie}from"./form-item-BqEwLgzp.js";import{E as re}from"./row-KKdyI4Av.js";import{E as de}from"./col-CzLH8SeH.js";/* empty css              */import"./tag-BOE4AccX.js";import{E as ne,a as se}from"./select-DycYLwTT.js";import"./scrollbar-CyicQk5x.js";import"./popper-6cDUjaRW.js";import{E as ue}from"./pagination-CxeK4p13.js";import{E as pe,a as me}from"./table-column-wBiq0U5n.js";import"./checkbox-URtfrshM.js";/* empty css                */import{E as fe}from"./button-BhsazfUD.js";/* empty css                      *//* empty css                                              */import{b as ce,a as be,g as he,c as ge,d as _e,e as ve,f as xe}from"./index-DtUjHqe3.js";import{g as Ee}from"./index-CVSE0PMR.js";import{g as Ce}from"./index-Offk-8XA.js";import{d as we}from"./fileZip-DZCnPiar.js";/* empty css                *//* empty css                    */import{E as Ve}from"./index-B9pqzlZv.js";import{E as ye}from"./index-rUWjPUE6.js";import"./use-form-item-FEc-havy.js";import"./cloneDeep-D6tY96VI.js";import"./_baseClone-CM4Uj5KP.js";import"./_initCloneObject-B0so-X2S.js";import"./isEqual-Dnbp5P_R.js";import"./index-apjzc23w.js";import"./scroll-CzTDrJbU.js";import"./vnode-Bod1Q6cQ.js";import"./focus-trap-OSNMQz79.js";import"./refs-D-YtBsDp.js";import"./event-BB_Ol6Sd.js";import"./castArray-DHLwE7Nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./aria-KgdLjl5h.js";import"./validator-Cf7VM-w_.js";const ke={class:"s-flex-col",style:{height:"100%"}},Ie={class:"s-table-operations"},Ue={class:"s-flex-auto",style:{"min-height":"0"}},Pe={class:"s-table-pagination"},Fe={class:"dialog-footer"},El=Q({__name:"Manage",setup(Re){W();const m=Z().query.id,w=p([]),U=p(null),V=p(null),c=p(!1),E=p(!1),r=B({id:"",exhibitionId:m,hallCode:"",positionCode:"",standardPrice:0,specialPrice:0,specialUnit:1,length:0,width:0,remark:"",exhibitor:"",exhibitorId:""}),S={hallCode:[{required:!0,message:"请输入大厅号",trigger:"blur"}],positionCode:[{required:!0,message:"请输入位置号",trigger:"blur"}],standardPrice:[{required:!0,message:"请输入标准展位单价",trigger:"blur"},{validator:(t,e,o)=>{e<=0?o(new Error("不能小于0")):o()}}],specialPrice:[{required:!0,message:"请输入特装展位单价",trigger:"blur"},{validator:(t,e,o)=>{e<=0?o(new Error("不能小于0")):o()}}],specialUnit:[{required:!0,message:"请选择单位",trigger:"blur"}],length:[{required:!0,message:"请输入长度",trigger:"blur"},{validator:(t,e,o)=>{e<=0?o(new Error("必须大于0")):o()}}],width:[{required:!0,message:"请输入宽度",trigger:"blur"},{validator:(t,e,o)=>{e<=0?o(new Error("必须大于0")):o()}}]};let C=p([]);Ee({exhibitionId:m}).then(t=>{t.code===0&&(C.value=t.data)}),p([]);const g=()=>{ce({exhibitionId:m}).then(t=>{t.code===0?w.value=t.data:w.value=[]})},T=async t=>{E.value=!0,c.value=!0,r.hallCode=t.hallCode,r.positionCode=t.positionCode,r.standardPrice=t.standardPrice,r.specialPrice=t.specialPrice,r.specialUnit=t.specialUnit.indexOf("个")>-1?2:1,r.length=t.length,r.width=t.width,r.remark=t.remark,r.exhibitor=t.exhibitor,r.exhibitorId=t.exhibitorId,r.id=t.id},$=()=>{let t=U.value.getSelectionRows().map(e=>e.id);if(t.length===0){s.error("请选择需要删除的数据");return}P(t)},P=t=>{Ve.confirm("此操作将永久删除数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{be({id:t}).then(e=>{e.code===0?(s.success("删除成功"),g()):s.error(e.msg)})}).catch(()=>{})},z=async()=>{E.value=!1,c.value=!0,r.remark=""},L=()=>{V.value.validate(t=>{if(t)if(E.value){let e=r;e.exhibitor=e.exhibitorId?C.value.find(o=>o.id===r.exhibitorId).name:"",_e(e).then(o=>{o.code===0?(s.success("编辑成功"),c.value=!1,g()):s.error(o.msg)})}else{let{id:e,...o}=r;o.exhibitor=o.exhibitorId?C.value.find(d=>d.id===r.exhibitorId).name:"",ve(o).then(d=>{d.code===0?(s.success("新增成功"),c.value=!1,g()):s.error(d.msg)})}else return!1})},F=p([]);Ce({exhibitionId:m}).then(t=>{t.code===0&&(F.value=t.data)});const b=p(),n=B({show:!1,loading:!1,list:[],set:()=>{n.show=!0},sub:()=>{if(n.list.length===0){s.error("请选择文件");return}b.value.submit()},dowModel:()=>{he({exhibitionId:m}).then(t=>{t.code===0&&we(t.data.url,t.data.name)})}}),N=t=>{b.value.clearFiles();const e=t[0];e.uid=le(),b.value.handleStart(e)},O=()=>{ge({exhibitionId:m}).then(t=>{t.code===0?(window.open(t.data.url,"_self"),s.success("导出成功")):s.error(t.msg)})},A=t=>{const e=t.size/1024/1024<20;return e||s.error("文件大小不能超过 20MB!"),e},H=t=>{n.loading=!0;const e=new FormData;e.append("file",t.file),e.append("exhibitionId",m),xe(e).then(o=>{o.code===0?(s.success("导入成功"),n.show=!1,b.value.clearFiles(),g()):s.error(o.msg),n.loading=!1}).catch(o=>{n.loading=!1})};return m&&g(),(t,e)=>{const o=fe,d=me,J=pe,X=ue,_=ne,y=se,f=ae,h=ye,R=de,Y=re,j=ie,q=oe,G=te;return x(),k(I,null,[v("div",ke,[v("div",Ie,[l(o,{onClick:z},{default:i(()=>[u("新增")]),_:1}),l(o,{onClick:e[0]||(e[0]=a=>n.set())},{default:i(()=>[u("导入")]),_:1}),l(o,{onClick:O},{default:i(()=>[u("导出")]),_:1}),l(o,{onClick:$},{default:i(()=>[u("删除")]),_:1})]),v("div",Ue,[l(J,{ref_key:"tableRef",ref:U,data:w.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:i(()=>[l(d,{type:"selection",width:"42"}),l(d,{prop:"id",label:"ID",width:"50"}),l(d,{prop:"hallCode",label:"展馆号"}),l(d,{prop:"positionCode",label:"展位号"}),l(d,{prop:"standardPrice",label:"标摊/元","min-width":"120"}),l(d,{prop:"specialPrice",label:"特装/元","min-width":"120"}),l(d,{prop:"specialUnit",label:"特装/㎡/个","min-width":"120"}),l(d,{prop:"length",label:"长"}),l(d,{prop:"width",label:"宽"}),l(d,{prop:"remark",label:"备注"}),l(d,{prop:"exhibitor",label:"参展商"}),l(d,{prop:"time",label:"创建时间","min-width":"120"}),l(d,{fixed:"right",label:"操作",width:"150"},{default:i(a=>[l(o,{link:"",type:"primary",onClick:K=>T(a.row)},{default:i(()=>[u("编辑")]),_:2},1032,["onClick"]),l(o,{link:"",type:"danger",onClick:K=>P([a.row.id])},{default:i(()=>[u("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),v("div",Pe,[l(X,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:1e3})])]),l(q,{modelValue:c.value,"onUpdate:modelValue":e[11]||(e[11]=a=>c.value=a),title:E.value?"编辑":"新增展位信息",width:"500",draggable:"",onClose:e[12]||(e[12]=()=>V.value.resetFields())},{footer:i(()=>[v("div",Fe,[l(o,{onClick:e[10]||(e[10]=a=>c.value=!1)},{default:i(()=>[u("取消")]),_:1}),l(o,{type:"primary",onClick:L},{default:i(()=>[u("确定")]),_:1})])]),default:i(()=>[l(j,{ref_key:"formRef",ref:V,model:r,rules:S,"label-width":"auto","label-position":"left"},{default:i(()=>[l(f,{label:"展馆号",prop:"hallCode"},{default:i(()=>[l(y,{modelValue:r.hallCode,"onUpdate:modelValue":e[1]||(e[1]=a=>r.hallCode=a),placeholder:"请选择"},{default:i(()=>[(x(!0),k(I,null,D(F.value,a=>(x(),M(_,{key:a.code,label:a.code,value:a.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(f,{label:"展位号",prop:"positionCode"},{default:i(()=>[l(h,{modelValue:r.positionCode,"onUpdate:modelValue":e[2]||(e[2]=a=>r.positionCode=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(f,{label:"标准展位",prop:"standardPrice"},{default:i(()=>[l(h,{modelValue:r.standardPrice,"onUpdate:modelValue":e[3]||(e[3]=a=>r.standardPrice=a),autocomplete:"off",type:"number"},{append:i(()=>[u("元/个")]),_:1},8,["modelValue"])]),_:1}),l(f,{label:"特装展位",prop:"specialPrice"},{default:i(()=>[l(h,{modelValue:r.specialPrice,"onUpdate:modelValue":e[5]||(e[5]=a=>r.specialPrice=a),autocomplete:"off",type:"number"},{append:i(()=>[l(y,{modelValue:r.specialUnit,"onUpdate:modelValue":e[4]||(e[4]=a=>r.specialUnit=a),placeholder:"请选择",style:{width:"120px"}},{default:i(()=>[l(_,{label:"元/㎡",value:1}),l(_,{label:"元/个",value:2})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),l(Y,null,{default:i(()=>[l(R,{span:12},{default:i(()=>[l(f,{label:"长",prop:"length"},{default:i(()=>[l(h,{modelValue:r.length,"onUpdate:modelValue":e[6]||(e[6]=a=>r.length=a),autocomplete:"off",type:"number"},null,8,["modelValue"])]),_:1})]),_:1}),l(R,{span:12},{default:i(()=>[l(f,{label:"宽",prop:"width"},{default:i(()=>[l(h,{modelValue:r.width,"onUpdate:modelValue":e[7]||(e[7]=a=>r.width=a),autocomplete:"off",type:"number"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(f,{label:"备注"},{default:i(()=>[l(h,{modelValue:r.remark,"onUpdate:modelValue":e[8]||(e[8]=a=>r.remark=a),autocomplete:"off",type:"textarea"},null,8,["modelValue"])]),_:1}),l(f,{label:"参展商",prop:"exhibitorId"},{default:i(()=>[l(y,{modelValue:r.exhibitorId,"onUpdate:modelValue":e[9]||(e[9]=a=>r.exhibitorId=a),placeholder:"请选择"},{default:i(()=>[l(_,{label:"无",value:""}),(x(!0),k(I,null,D(ee(C),a=>(x(),M(_,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),l(q,{modelValue:n.show,"onUpdate:modelValue":e[15]||(e[15]=a=>n.show=a),title:"导入展位信息",width:"500",draggable:"",onClose:e[16]||(e[16]=()=>{n.loading=!1,b.value.clearFiles()})},{footer:i(()=>[l(o,{onClick:e[14]||(e[14]=a=>n.show=!1)},{default:i(()=>[u("取消")]),_:1}),l(o,{type:"primary",onClick:n.sub,loading:n.loading},{default:i(()=>[u("确定")]),_:1},8,["onClick","loading"])]),default:i(()=>[l(o,{type:"",onClick:n.dowModel,style:{"margin-bottom":"20px"}},{default:i(()=>[u("下载导入模板")]),_:1},8,["onClick"]),l(G,{ref_key:"uploadRef",ref:b,"file-list":n.list,"onUpdate:fileList":e[13]||(e[13]=a=>n.list=a),"before-upload":A,"http-request":H,accept:".xls,.xlsx","on-exceed":N,limit:1,multiple:!1,"auto-upload":!1},{default:i(()=>[l(o,{type:"primary"},{default:i(()=>[u("选择文件")]),_:1})]),_:1},8,["file-list"])]),_:1},8,["modelValue"])],64)}}});export{El as default};
