import{d as Y,l as p,s as B,b as k,O as v,R as l,i,F as U,W as Z,a5 as ee,L as z,o as x,P as n,U as D,h as T,e as le}from"./index-D74zJG6I.js";import{g as te,E as oe}from"./el-progress-WApiLj-O.js";import{E as ae}from"./el-dialog-CH-BynCD.js";/* empty css                   */import{a as ie,E as re}from"./el-form-item-CEqfdHhv.js";import{E as de}from"./el-row-DgGu9Wfb.js";import{E as se}from"./el-col-jCP9jUXD.js";/* empty css                 */import"./el-tag-BLjf6BdM.js";import{E as ne,a as ue}from"./el-select-BGofGsA5.js";import"./el-scrollbar-BwZs3z-3.js";import"./el-popper-9L01qqUk.js";import{E as pe}from"./el-pagination-f87UeLt8.js";import{E as me,a as fe}from"./el-table-column-Dg2tv9m0.js";import"./el-checkbox-Rb8muSVz.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                  *//* empty css                                                              */import{b as ce,a as be,c as he,d as ge,e as _e,f as ve}from"./index-crk-1ue5.js";import{g as xe}from"./index-DBm1Eqlz.js";import{g as we}from"./index-BXL5a2W-.js";/* empty css                   *//* empty css                       */import{c as u}from"./request-C7RHyssF.js";import{E as Ee}from"./index-fW9Rnt2l.js";import{E as Ce}from"./index-CUqJQoYg.js";import{E as Ve}from"./index-D8kCEjCi.js";import"./use-form-item-Xhvpbpdu.js";import"./cloneDeep-Du5jcrEz.js";import"./_baseClone-BtdRBJ7b.js";import"./_initCloneObject-BHMU9ihz.js";import"./isEqual-Bal6lYlC.js";import"./index-BYW6HLlR.js";import"./scroll-D7V7eYag.js";import"./vnode-BQBJT8b3.js";import"./refs-DjK8gIcj.js";import"./event-BB_Ol6Sd.js";import"./castArray-DygwAlv5.js";import"./aria-KgdLjl5h.js";import"./validator-C_w0eNiX.js";const ye={class:"s-flex-col",style:{height:"100%"}},ke={class:"s-table-operations"},Ue={class:"s-flex-auto",style:{"min-height":"0"}},Ie={class:"s-table-pagination"},Pe={class:"dialog-footer"},_l=Y({__name:"Manage",setup(Fe){Z();const f=ee().query.id,V=p([]),I=p(null),w=p(null),c=p(!1),E=p(!1),r=B({id:"",exhibitionId:f,hallCode:"",positionCode:"",standardPrice:0,specialPrice:0,specialUnit:1,length:0,width:0,remark:"",exhibitor:"",exhibitorId:""}),M={hallCode:[{required:!0,message:"请输入大厅号",trigger:"blur"}],positionCode:[{required:!0,message:"请输入位置号",trigger:"blur"}],standardPrice:[{required:!0,message:"请输入标准展位单价",trigger:"blur"},{validator:(t,e,o)=>{e<=0?o(new Error("不能小于0")):o()}}],specialPrice:[{required:!0,message:"请输入特装展位单价",trigger:"blur"},{validator:(t,e,o)=>{e<=0?o(new Error("不能小于0")):o()}}],specialUnit:[{required:!0,message:"请选择单位",trigger:"blur"}],length:[{required:!0,message:"请输入长度",trigger:"blur"},{validator:(t,e,o)=>{e<=0?o(new Error("必须大于0")):o()}}],width:[{required:!0,message:"请输入宽度",trigger:"blur"},{validator:(t,e,o)=>{e<=0?o(new Error("必须大于0")):o()}}]};let C=p([]);xe({exhibitionId:f}).then(t=>{t.code===0&&(C.value=t.data)}),p([]);const g=()=>{ce({exhibitionId:f}).then(t=>{t.code===0?V.value=t.data:V.value=[]})},S=async t=>{E.value=!0,c.value=!0,await z(),w.value.resetFields(),r.hallCode=t.hallCode,r.positionCode=t.positionCode,r.standardPrice=t.standardPrice,r.specialPrice=t.specialPrice,r.specialUnit=t.specialUnit.indexOf("个")>-1?2:1,r.length=t.length,r.width=t.width,r.remark=t.remark,r.exhibitor=t.exhibitor,r.id=t.id},L=()=>{let t=I.value.getSelectionRows().map(e=>e.id);if(t.length===0){u.warning("请选择需要删除的数据");return}P(t)},P=t=>{Ee.confirm("此操作将永久删除数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{be({id:t}).then(e=>{e.code===0?(u.success("删除成功"),g()):u.error(e.msg)})}).catch(()=>{})},$=async()=>{E.value=!1,c.value=!0,r.remark="",await z(),w.value.resetFields()},O=()=>{w.value.validate(t=>{if(t)if(E.value){let e=r;e.exhibitor=e.exhibitorId?C.value.find(o=>o.id===r.exhibitorId).name:"",ge(e).then(o=>{o.code===0?(u.success("编辑成功"),c.value=!1,g()):u.error(o.msg)})}else{let{id:e,...o}=r;o.exhibitor=o.exhibitorId?C.value.find(d=>d.id===r.exhibitorId).name:"",_e(o).then(d=>{d.code===0?(u.success("新增成功"),c.value=!1,g()):u.error(d.msg)})}else return!1})},F=p([]);we({exhibitionId:f}).then(t=>{t.code===0&&(F.value=t.data)});const b=p(),s=B({show:!1,loading:!1,list:[],set:()=>{s.show=!0},sub:()=>{if(s.list.length===0){u.error("请选择文件");return}b.value.submit()},dowModel:()=>{window.open("https://crm-test-1256699835.cos.ap-shanghai.myqcloud.com/importTemplate/position.xlsx","_self")}}),N=t=>{b.value.clearFiles();const e=t[0];e.uid=te(),b.value.handleStart(e)},A=()=>{he({exhibitionId:f}).then(t=>{t.code===0?(window.open(t.data.url,"_self"),u.success("导出成功")):u.error(t.msg)})},H=t=>{const e=t.size/1024/1024<20;return e||u.error("文件大小不能超过 20MB!"),e},W=t=>{s.loading=!0;const e=new FormData;e.append("file",t.file),e.append("exhibitionId",f),ve(e).then(o=>{o.code===0?(u.success("导入成功"),s.show=!1,b.value.clearFiles(),g()):u.error(o.msg),s.loading=!1}).catch(o=>{s.loading=!1})};return f&&g(),(t,e)=>{const o=Ce,d=fe,j=me,G=pe,_=ne,y=ue,m=ie,h=Ve,R=se,J=de,K=re,q=ae,Q=oe;return x(),k(U,null,[v("div",ye,[v("div",ke,[l(o,{size:"small",onClick:$},{default:i(()=>[n("新增")]),_:1}),l(o,{size:"small",onClick:e[0]||(e[0]=a=>s.set())},{default:i(()=>[n("导入")]),_:1}),l(o,{size:"small",onClick:A},{default:i(()=>[n("导出")]),_:1}),l(o,{size:"small",onClick:L},{default:i(()=>[n("删除")]),_:1})]),v("div",Ue,[l(j,{ref_key:"tableRef",ref:I,data:V.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:i(()=>[l(d,{type:"selection",width:"42"}),l(d,{prop:"id",label:"ID",width:"50"}),l(d,{prop:"hallCode",label:"展馆号"}),l(d,{prop:"positionCode",label:"展位号"}),l(d,{prop:"standardPrice",label:"标摊/元","min-width":"120"}),l(d,{prop:"specialPrice",label:"特装/元","min-width":"120"}),l(d,{prop:"specialUnit",label:"特装/㎡/个","min-width":"120"}),l(d,{prop:"length",label:"长"}),l(d,{prop:"width",label:"宽"}),l(d,{prop:"remark",label:"备注"}),l(d,{prop:"exhibitor",label:"参展商"}),l(d,{prop:"createTime",label:"创建时间","min-width":"120"}),l(d,{fixed:"right",label:"操作",width:"150"},{default:i(a=>[l(o,{link:"",type:"primary",onClick:X=>S(a.row)},{default:i(()=>[n("编辑")]),_:2},1032,["onClick"]),l(o,{link:"",type:"danger",onClick:X=>P([a.row.id])},{default:i(()=>[n("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),v("div",Ie,[l(G,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:1e3})])]),l(q,{modelValue:c.value,"onUpdate:modelValue":e[11]||(e[11]=a=>c.value=a),title:E.value?"编辑":"新增展位信息",width:"500",draggable:""},{footer:i(()=>[v("div",Pe,[l(o,{onClick:e[10]||(e[10]=a=>c.value=!1)},{default:i(()=>[n("取消")]),_:1}),l(o,{type:"primary",onClick:O},{default:i(()=>[n("确定")]),_:1})])]),default:i(()=>[l(K,{ref_key:"formRef",ref:w,model:r,rules:M,"label-width":"auto","label-position":"left"},{default:i(()=>[l(m,{label:"展馆号",prop:"hallCode"},{default:i(()=>[l(y,{modelValue:r.hallCode,"onUpdate:modelValue":e[1]||(e[1]=a=>r.hallCode=a),placeholder:"请选择"},{default:i(()=>[(x(!0),k(U,null,D(F.value,a=>(x(),T(_,{key:a.code,label:a.code,value:a.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"展位号",prop:"positionCode"},{default:i(()=>[l(h,{modelValue:r.positionCode,"onUpdate:modelValue":e[2]||(e[2]=a=>r.positionCode=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(m,{label:"标准展位",prop:"standardPrice"},{default:i(()=>[l(h,{modelValue:r.standardPrice,"onUpdate:modelValue":e[3]||(e[3]=a=>r.standardPrice=a),autocomplete:"off",type:"number"},{append:i(()=>[n("元/个")]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"特装展位",prop:"specialPrice"},{default:i(()=>[l(h,{modelValue:r.specialPrice,"onUpdate:modelValue":e[5]||(e[5]=a=>r.specialPrice=a),autocomplete:"off",type:"number"},{append:i(()=>[l(y,{modelValue:r.specialUnit,"onUpdate:modelValue":e[4]||(e[4]=a=>r.specialUnit=a),placeholder:"请选择",style:{width:"120px"}},{default:i(()=>[l(_,{label:"元/㎡",value:1}),l(_,{label:"元/个",value:2})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),l(J,null,{default:i(()=>[l(R,{span:12},{default:i(()=>[l(m,{label:"长",prop:"length"},{default:i(()=>[l(h,{modelValue:r.length,"onUpdate:modelValue":e[6]||(e[6]=a=>r.length=a),autocomplete:"off",type:"number"},null,8,["modelValue"])]),_:1})]),_:1}),l(R,{span:12},{default:i(()=>[l(m,{label:"宽",prop:"width"},{default:i(()=>[l(h,{modelValue:r.width,"onUpdate:modelValue":e[7]||(e[7]=a=>r.width=a),autocomplete:"off",type:"number"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(m,{label:"备注"},{default:i(()=>[l(h,{modelValue:r.remark,"onUpdate:modelValue":e[8]||(e[8]=a=>r.remark=a),autocomplete:"off",type:"textarea"},null,8,["modelValue"])]),_:1}),l(m,{label:"参展商",prop:"exhibitorId"},{default:i(()=>[l(y,{modelValue:r.exhibitorId,"onUpdate:modelValue":e[9]||(e[9]=a=>r.exhibitorId=a),placeholder:"请选择"},{default:i(()=>[l(_,{label:"无",value:""}),(x(!0),k(U,null,D(le(C),a=>(x(),T(_,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),l(q,{modelValue:s.show,"onUpdate:modelValue":e[14]||(e[14]=a=>s.show=a),title:"导入展位信息",width:"500",draggable:"",onClose:e[15]||(e[15]=()=>{s.loading=!1,b.value.clearFiles()})},{footer:i(()=>[l(o,{onClick:e[13]||(e[13]=a=>s.show=!1)},{default:i(()=>[n("取消")]),_:1}),l(o,{type:"primary",onClick:s.sub,loading:s.loading},{default:i(()=>[n("确定")]),_:1},8,["onClick","loading"])]),default:i(()=>[l(o,{type:"",onClick:s.dowModel,style:{"margin-bottom":"20px"}},{default:i(()=>[n("下载导入模板")]),_:1},8,["onClick"]),l(Q,{ref_key:"uploadRef",ref:b,"file-list":s.list,"onUpdate:fileList":e[12]||(e[12]=a=>s.list=a),"before-upload":H,"http-request":W,accept:".xls,.xlsx","on-exceed":N,limit:1,multiple:!1,"auto-upload":!1},{default:i(()=>[l(o,{type:"primary"},{default:i(()=>[n("选择文件")]),_:1})]),_:1},8,["file-list"])]),_:1},8,["modelValue"])],64)}}});export{_l as default};
