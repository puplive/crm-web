import{d as O,l as m,s as L,o as V,f as U,P as h,S as e,w as r,Q as d,F as q,V as A,a as G,Z as Q,a8 as Z,M as j,c as H}from"./index-DVHkByco.js";import{E as J}from"./el-dialog-bp7p8zQB.js";import"./el-overlay-C63ZvL_K.js";import{E as K,a as W,b as X}from"./el-input-Dfe8Uzhl.js";import{E as Y}from"./el-row-DWOTPu4e.js";import{E as ee}from"./el-col-BldbVot-.js";import"./el-tag-BHjyucA7.js";import{a as le,E as te}from"./el-select-DgBIHiZD.js";import"./el-scrollbar-CG_JaPfx.js";import{E as oe}from"./el-pagination-Y47XXVE0.js";import{E as ae,a as re}from"./el-table-89c60yQ4.js";import"./el-checkbox-Cqc95xet.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                        */import{E as ie}from"./el-button-9__Ng1jP.js";import{T as ne}from"./index-CfuTKQ2m.js";import{g as de}from"./index-DiCdjWxQ.js";/* empty css                   */import{E as se}from"./el-message-box-BcM5ZuTJ.js";import{E as p}from"./request-kZhpW0Wr.js";import"./index-C-4RkVC5.js";import"./scroll-KUqymI_7.js";import"./vnode-tcDvg3gh.js";import"./typescript-_aKlIHPK.js";import"./_initCloneObject-CSxpNamp.js";import"./isEqual-QQ34r9eu.js";import"./isArrayLikeObject-C7wPhYU0.js";import"./el-date-picker-fOPNftKE.js";import"./arrays-6TrVLtTe.js";import"./el-radio-BWxioSU6.js";/* empty css                          */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./aria-KgdLjl5h.js";import"./validator-BJiU7xXV.js";const pe={class:"s-table-operations"},ue={class:"s-table-pagination"},me={class:"dialog-footer"},Je=O({__name:"Goods",setup(fe){Q();const c=Z().query.id,v=m([]),z=m(null),C=m(null),f=m(!1),y=m(!1),t=L({id:"",exhibitionId:c,hallCode:"",positionCode:"",standardPrice:0,specialPrice:0,specialUnit:1,length:0,width:0,remark:"",exhibitor:""}),T={hallCode:[{required:!0,message:"请输入大厅号",trigger:"blur"}],positionCode:[{required:!0,message:"请输入位置号",trigger:"blur"}],standardPrice:[{required:!0,message:"请输入标准展位单价",trigger:"blur"},{validator:(o,l,i)=>{l<=0?i(new Error("不能小于0")):i()}}],specialPrice:[{required:!0,message:"请输入特装展位单价",trigger:"blur"},{validator:(o,l,i)=>{l<=0?i(new Error("不能小于0")):i()}}],specialUnit:[{required:!0,message:"请选择单位",trigger:"blur"}],length:[{required:!0,message:"请输入长度",trigger:"blur"},{validator:(o,l,i)=>{l<=0?i(new Error("必须大于0")):i()}}],width:[{required:!0,message:"请输入宽度",trigger:"blur"},{validator:(o,l,i)=>{l<=0?i(new Error("必须大于0")):i()}}],exhibitor:[{required:!0,message:"请选择展商",trigger:"blur"}]};let k=m([]);exhibitorList().then(o=>{o.code===0&&(k.value=o.data)});const B=m([{label:"企业名称",key:"1",type:"input",value:""},{label:"2",key:"2",type:"select",value:"",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},{label:"3",key:"3",type:"date",value:""}]),b=()=>{de.get({exhibitionId:c}).then(o=>{o.code===0?v.value=o.data:v.value=[]})},D=async o=>{y.value=!0,f.value=!0,await j(),C.value.resetFields(),t.hallCode=o.hallCode,t.positionCode=o.positionCode,t.standardPrice=o.standardPrice,t.specialPrice=o.specialPrice,t.specialUnit=o.specialUnit.indexOf("个")>-1?2:1,t.length=o.length,t.width=o.width,t.remark=o.remark,t.exhibitor=o.exhibitor,t.id=o.id},_=o=>{se.confirm("是否确认要取消订单信息?","撤销",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{boothDelete({id:o}).then(l=>{l.code===0?(p.success("删除成功"),b()):p.error(l.msg)})}).catch(()=>{})},R=()=>{C.value.validate(o=>{if(o)if(y.value){let l=t;boothEdit(l).then(i=>{i.code===0?(p.success("编辑成功"),f.value=!1,b()):p.error(i.msg)})}else{let{id:l,...i}=t;boothAdd(i).then(n=>{n.code===0?(p.success("新增成功"),f.value=!1,b()):p.error(n.msg)})}else return!1})},x=()=>{boothExport({exhibitionId:c}).then(o=>{o.code===0?(window.open(o.data.url,"_self"),p.success("导出成功")):p.error(o.msg)})},F=o=>{console.log(o)};return c&&b(),(o,l)=>{const i=ie,n=ae,I=re,S=oe,u=K,s=W,E=le,w=te,P=ee,$=Y,M=X,N=J;return V(),U(q,null,[h("div",null,[e(ne,{data:B.value,onSearch:F},null,8,["data"]),h("div",pe,[e(i,{size:"small",onClick:x},{default:r(()=>[d("批量下载合同")]),_:1}),e(i,{size:"small",onClick:x},{default:r(()=>[d("导出")]),_:1})]),e(I,{ref_key:"tableRef",ref:z,data:v.value,border:"","table-layout":"fixed","max-height":"300","header-row-class-name":"s-table-header"},{default:r(()=>[e(n,{type:"selection",width:"50"}),e(n,{prop:"id",label:"ID",width:"50"}),e(n,{prop:"hallCode",label:"展馆号"}),e(n,{prop:"positionCode",label:"展位号"}),e(n,{prop:"standardPrice",label:"标摊/元"}),e(n,{prop:"specialPrice",label:"特装/元"}),e(n,{prop:"specialUnit",label:"特装/㎡/个"}),e(n,{prop:"length",label:"长"}),e(n,{prop:"width",label:"宽"}),e(n,{prop:"remark",label:"备注"}),e(n,{prop:"exhibitor",label:"参展商"}),e(n,{prop:"createTime",label:"创建时间"}),e(n,{fixed:"right",label:"操作",width:"120"},{default:r(a=>[e(i,{link:"",type:"primary",size:"small",onClick:g=>D(a.row)},{default:r(()=>[d("详情")]),_:2},1032,["onClick"]),e(i,{link:"",type:"primary",size:"small",onClick:g=>_([a.row.id])},{default:r(()=>[d("签订合同")]),_:2},1032,["onClick"]),e(i,{link:"",type:"primary",size:"small",onClick:g=>_([a.row.id])},{default:r(()=>[d("上传合同")]),_:2},1032,["onClick"]),e(i,{link:"",type:"primary",size:"small",onClick:g=>_([a.row.id])},{default:r(()=>[d("录入到款")]),_:2},1032,["onClick"]),e(i,{link:"",type:"primary",size:"small",onClick:g=>_([a.row.id])},{default:r(()=>[d("撤销")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),h("div",ue,[e(S,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:1e3})])]),e(N,{modelValue:f.value,"onUpdate:modelValue":l[10]||(l[10]=a=>f.value=a),title:"新增展位信息",width:"500",draggable:""},{footer:r(()=>[h("div",me,[e(i,{onClick:l[9]||(l[9]=a=>f.value=!1)},{default:r(()=>[d("取消")]),_:1}),e(i,{type:"primary",onClick:R},{default:r(()=>[d("确定")]),_:1})])]),default:r(()=>[e(M,{ref_key:"formRef",ref:C,model:t,rules:T,"label-width":"auto"},{default:r(()=>[e(s,{label:"展馆号",prop:"hallCode"},{default:r(()=>[e(u,{modelValue:t.hallCode,"onUpdate:modelValue":l[0]||(l[0]=a=>t.hallCode=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(s,{label:"展位号",prop:"positionCode"},{default:r(()=>[e(u,{modelValue:t.positionCode,"onUpdate:modelValue":l[1]||(l[1]=a=>t.positionCode=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(s,{label:"标准展位",prop:"standardPrice"},{default:r(()=>[e(u,{modelValue:t.standardPrice,"onUpdate:modelValue":l[2]||(l[2]=a=>t.standardPrice=a),autocomplete:"off",type:"number"},{append:r(()=>[d("元/个")]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"特装展位",prop:"specialPrice"},{default:r(()=>[e(u,{modelValue:t.specialPrice,"onUpdate:modelValue":l[4]||(l[4]=a=>t.specialPrice=a),autocomplete:"off",type:"number"},{append:r(()=>[e(w,{modelValue:t.specialUnit,"onUpdate:modelValue":l[3]||(l[3]=a=>t.specialUnit=a),placeholder:"请选择",style:{width:"120px"}},{default:r(()=>[e(E,{label:"元/㎡",value:1}),e(E,{label:"元/个",value:2})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),e($,null,{default:r(()=>[e(P,{span:12},{default:r(()=>[e(s,{label:"长",prop:"length"},{default:r(()=>[e(u,{modelValue:t.length,"onUpdate:modelValue":l[5]||(l[5]=a=>t.length=a),autocomplete:"off",type:"number"},null,8,["modelValue"])]),_:1})]),_:1}),e(P,{span:12},{default:r(()=>[e(s,{label:"宽",prop:"width"},{default:r(()=>[e(u,{modelValue:t.width,"onUpdate:modelValue":l[6]||(l[6]=a=>t.width=a),autocomplete:"off",type:"number"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{label:"备注"},{default:r(()=>[e(u,{modelValue:t.remark,"onUpdate:modelValue":l[7]||(l[7]=a=>t.remark=a),autocomplete:"off",type:"textarea"},null,8,["modelValue"])]),_:1}),e(s,{label:"参展商",prop:"exhibitor"},{default:r(()=>[e(w,{modelValue:t.exhibitor,"onUpdate:modelValue":l[8]||(l[8]=a=>t.exhibitor=a),placeholder:"请选择"},{default:r(()=>[(V(!0),U(q,null,A(G(k),a=>(V(),H(E,{key:a.id,label:a.name,value:a.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});export{Je as default};
