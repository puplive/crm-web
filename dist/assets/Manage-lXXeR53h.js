import{d as ye,l as p,s as Ce,v as J,O as D,o as v,f as E,P as i,R as y,a as G,S as l,w as s,Q as d,F as L,V as O,c as x,W as Q,Z as we,a8 as Ve,M as W,n as Z,a9 as F,_ as Ee,$ as xe}from"./index-DGy8YaiM.js";import{E as Se}from"./el-dialog-DHh5pbtB.js";import"./el-overlay-BKhi8GxI.js";import{E as $e,a as Ge}from"./el-table-ChIpBGPs.js";import"./el-checkbox-3VMAPkI5.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-scrollbar-Dv4Quh1c.js";/* empty css                        */import"./el-tag-BH7nPyvM.js";import{E as Fe}from"./el-switch-CLJQd7eS.js";import{E as Re,a as Ie,b as Ue}from"./el-input-BrZoxqCi.js";import{E as qe}from"./el-progress-CZ_oIF9b.js";import{E as ze}from"./el-image-viewer-DHmtL7kj.js";import{E as De}from"./el-button-Bovxw4wD.js";import{g as Le,e as Ae,a as Be,b as Pe,c as Me,d as Te,s as Ne,f as je,h as Je,i as Oe}from"./index-B6vLZhrk.js";import{u as Qe}from"./index-_uQBNnUC.js";import{_ as A}from"./rules-BWEfMqzk.js";/* empty css                   */import{E as r}from"./request-BAaZbgW9.js";import{E as We}from"./index-BqYhbl5u.js";import{_ as Ze}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./scroll-cHXkFjnP.js";import"./vnode-CZsncPWw.js";import"./_initCloneObject-kgg4kgWv.js";import"./isArrayLikeObject-C8yChd3w.js";import"./typescript-CKMpzsq3.js";import"./isEqual-C3CT6KsK.js";import"./validator-glxezYYN.js";import"./cloneDeep-BFRveJc9.js";const He=R=>(Ee("data-v-06623db7"),R=R(),xe(),R),Ke={class:"goods-index supplies-set"},Xe={class:"s-top_bar",style:{"margin-bottom":"10px"}},Ye={style:{"margin-right":"20px"}},et={class:"con"},tt={class:"l l1"},lt={class:"top-bar"},ot={class:"list-box"},st={class:"list",id:"list1"},at=["onClick"],it={class:"text"},nt={class:"l l2"},dt={class:"top-bar"},rt={class:"list-box"},ut={class:"list",id:"list2"},ct=["onClick"],mt={class:"text"},pt={class:"l l3"},ft={class:"top-bar"},vt={class:"list-box",style:{padding:"10px"}},_t={class:"list list2",id:"list3"},gt=["onClick"],bt={class:"text"},ht={class:"r",style:{background:"#F9FAFB",overflow:"auto"}},kt={class:"top-bar"},yt=He(()=>i("span",null,"已设置物料",-1)),Ct={class:"list-box",style:{padding:"10px"}},wt={style:{"margin-bottom":"10px"}},Vt={style:{"text-align":"right"}},Et={class:"dialog-footer"},xt=ye({__name:"Manage",setup(R){we();const H=Ve(),B=H.query.id,ie=H.query.title,K=p([]),X=p([]),Y=p([]),b=p({}),C=p({}),h=p({}),_=p({}),ee=p([]),te=p(1),P=p(null),I=p(null),M=p(null),a=Ce({show:!1,title:"",id:"",pid:"",exhibitionId:B,name:"",type:1}),le=p(null),U=p(!1),c=p({}),ne=()=>{Je({materialId:h.value.id}).then(async t=>{t.code===0&&(_.value=t.data,await W(),M.value.clearValidate())}).catch(t=>{})},q=()=>{Le({exhibitionId:B}).then(t=>{t.code===0?(K.value=t.data,t.data.length>0&&(b.value.id?b.value=t.data.find(e=>e.id==b.value.id)||t.data[0]:b.value=t.data[0])):r.error(t.msg)}).catch(t=>{})},T=async t=>{a.type=t,a.id="",a.name="",t==1?(a.title="添加服务项目",a.pid=0):t==2?(a.title="添加位置/版面",a.pid=b.value.id):t==3&&(a.title="添加规格/尺寸",a.pid=C.value.id),a.show=!0,await W(),setTimeout(()=>{I.value.clearValidate()},0)},oe=async(t,e)=>{a.id=t.id,a.name=t.name,e==1?a.title="修改服务项目":e==2?a.title="修改位置/版面":e==3&&(a.title="修改规格/尺寸"),a.show=!0,await W(),setTimeout(()=>{I.value.clearValidate()},0)},de=()=>{I.value.validate(t=>{if(t)if(a.id)Ae({id:a.id,name:a.name}).then(e=>{e.code==0?(r.success("修改成功"),q()):r.error(e.msg),a.show=!1}).catch(e=>{});else{let{show:e,title:n,id:m,...u}=a;Be(u).then(S=>{S.code===0?(r.success("添加成功"),q()):r.error(S.msg),a.show=!1}).catch(S=>{})}})},N=t=>{Oe({id:t}).then(e=>{e.code===0?(r.success("删除成功"),q()):r.error(e.msg)}).catch(e=>{})},re=()=>{},ue=()=>{M.value.validate(t=>{t&&Pe({..._.value,materialId:h.value.id}).then(e=>{e.code===0?(r.success("上架成功"),$()):r.error(e.msg)}).catch(e=>{})})},$=()=>{Me({exhibitionId:B}).then(t=>{t.code===0?ee.value=t.data:r.error(t.msg)}).catch(t=>{})},ce=t=>{if(t.type!=="image/jpeg")r.error("Avatar picture must be JPG format!");else if(t.size/1024/1024>2)return r.error("Avatar picture size can not exceed 2MB!"),!1;return!0},me=t=>{let e=new FormData;return e.append("upload",t.file),new Promise((n,m)=>{Qe(e).then(u=>{u.code===0?n(u.data):m(u)})})},se=(t,e)=>{let n=[];if(t===2){if(n=P.value.getSelectionRows().map(m=>m.id),n.length===0)return r.warning("请选择要操作的数据"),!1}else n=[e];Te({id:n}).then(m=>{m.code===0?(r.success("移除成功"),$()):r.error(m.msg)}).catch(m=>{})},z=(t,e,n)=>{let m=[];if(t===2){if(m=P.value.getSelectionRows().map(u=>u.id),m.length===0)return r.warning("请选择要操作的数据"),!1}else m=[n];Ne({id:m,status:e}).then(u=>{u.code===0?(r.success(e==1?"开启成功":"禁用成功"),$()):r.error(u.msg)}).catch(u=>{})},pe=t=>{U.value=!0,c.value=t},fe=()=>{le.value.validate(t=>{t&&je({id:c.value.id,price:c.value.price,unit:c.value.unit,num:c.value.num}).then(e=>{e.code===0?(r.success("修改成功"),U.value=!1,$()):r.error(e.msg)}).catch(e=>{})})};return J(()=>b.value,t=>{X.value=t.child,t.child.length>0?C.value=t.child.find(e=>e.id==C.value.id)||t.child[0]:C.value={}}),J(()=>C.value,t=>{Y.value=t.child,t.child&&t.child.length>0?h.value=t.child.find(e=>e.id==h.value.id)||t.child[0]:h.value={}}),J(()=>h.value,async t=>{t.id?ne():_.value={}}),q(),$(),(t,e)=>{const n=De,m=D("Edit"),u=We,S=D("Delete"),ve=D("Close"),V=Re,f=Ie,_e=ze,ge=D("Plus"),be=qe,j=Ue,he=Fe,k=$e,ke=Ge,ae=Se;return v(),E(L,null,[i("div",Ke,[i("div",Xe,[i("span",Ye,y(G(ie)),1),l(n,{type:"",onClick:e[0]||(e[0]=o=>t.$router.go(-1))},{default:s(()=>[d("返回")]),_:1})]),i("div",et,[i("div",tt,[i("div",lt,[l(n,{size:"small",type:"primary",icon:"Plus",onClick:e[1]||(e[1]=o=>T(1))},{default:s(()=>[d("服务项目")]),_:1})]),i("div",ot,[i("ul",st,[(v(!0),E(L,null,O(K.value,(o,g)=>(v(),E("li",{key:g,class:Z(o.id==b.value.id?"active":""),onClick:w=>b.value=o},[i("span",it,y(o.name),1),l(u,{onClick:F(w=>oe(o,1),["stop"]),class:"icon-btn is_hide"},{default:s(()=>[l(m)]),_:2},1032,["onClick"]),l(u,{onClick:F(w=>N(o.id),["stop"]),class:"icon-btn is_hide"},{default:s(()=>[l(S)]),_:2},1032,["onClick"])],10,at))),128))])])]),i("div",nt,[i("div",dt,[b.value.id?(v(),x(n,{key:0,size:"small",type:"primary",icon:"Plus",onClick:e[2]||(e[2]=o=>T(2))},{default:s(()=>[d("位置/版面")]),_:1})):Q("",!0)]),i("div",rt,[i("ul",ut,[(v(!0),E(L,null,O(X.value,(o,g)=>(v(),E("li",{key:g,class:Z(o.id==C.value.id?"active":""),onClick:w=>C.value=o},[i("span",mt,y(o.name),1),l(u,{onClick:F(w=>oe(o,2),["stop"]),class:"icon-btn is_hide"},{default:s(()=>[l(m)]),_:2},1032,["onClick"]),l(u,{onClick:F(w=>N(o.id),["stop"]),class:"icon-btn is_hide"},{default:s(()=>[l(S)]),_:2},1032,["onClick"])],10,ct))),128))])])]),i("div",pt,[i("div",ft,[C.value.id?(v(),x(n,{key:0,size:"small",type:"primary",icon:"Plus",onClick:e[3]||(e[3]=o=>T(3))},{default:s(()=>[d("规格/尺寸")]),_:1})):Q("",!0)]),i("div",vt,[i("ul",_t,[(v(!0),E(L,null,O(Y.value,(o,g)=>(v(),E("li",{key:g,class:Z(o.id==h.value.id?"active":""),onClick:w=>h.value=o},[i("span",bt,y(o.name),1),l(u,{onClick:F(w=>N(o.id),["stop"]),class:"icon-btn"},{default:s(()=>[l(ve)]),_:2},1032,["onClick"])],10,gt))),128))]),h.value.id?(v(),x(j,{key:0,ref_key:"settingFormRef",ref:M,model:_.value,style:{"margin-top":"20px"},"label-width":"auto"},{default:s(()=>[l(f,{label:"单价",prop:"price",rules:[{required:!0,message:"请输入",trigger:"blur"},...G(A).positive]},{default:s(()=>[l(V,{modelValue:_.value.price,"onUpdate:modelValue":e[4]||(e[4]=o=>_.value.price=o),type:"number",placeholder:""},{append:s(()=>[d("元")]),_:1},8,["modelValue"])]),_:1},8,["rules"]),l(f,{label:"单位",prop:"unit",rules:[{required:!0,message:"请输入",trigger:"blur"}]},{default:s(()=>[l(V,{modelValue:_.value.unit,"onUpdate:modelValue":e[5]||(e[5]=o=>_.value.unit=o),placeholder:""},null,8,["modelValue"])]),_:1}),l(f,{label:"上架数量",prop:"num",rules:[{required:!0,message:"请输入",trigger:"blur"},...G(A).positive]},{default:s(()=>[l(V,{modelValue:_.value.num,"onUpdate:modelValue":e[6]||(e[6]=o=>_.value.num=o),type:"number",placeholder:""},null,8,["modelValue"])]),_:1},8,["rules"]),l(f,{label:"",prop:"img",rules:[{required:!0,message:"请上传图片"}]},{default:s(()=>[l(be,{class:"img-uploader","show-file-list":!1,"on-success":(o,g,w)=>{_.value.img=o.url},"before-upload":ce,"http-request":me},{default:s(()=>[_.value.img?(v(),x(_e,{key:0,src:_.value.img,class:"img"},null,8,["src"])):(v(),x(u,{key:1,class:"img-uploader-icon"},{default:s(()=>[l(ge)]),_:1}))]),_:1},8,["on-success"])]),_:1}),l(f,null,{default:s(()=>[l(n,{type:"primary",onClick:e[7]||(e[7]=o=>ue())},{default:s(()=>[d("上架")]),_:1})]),_:1})]),_:1},8,["model"])):Q("",!0)])]),i("div",ht,[i("div",kt,[yt,l(he,{modelValue:te.value,"onUpdate:modelValue":e[8]||(e[8]=o=>te.value=o),"active-value":1,"inactive-value":0,"active-text":"开启","inactive-text":"关闭","inline-prompt":"",onChange:e[9]||(e[9]=o=>re())},null,8,["modelValue"])]),i("div",Ct,[i("div",wt,[l(n,{size:"small",onClick:e[10]||(e[10]=o=>z(2,1,0))},{default:s(()=>[d("批量启用")]),_:1}),l(n,{size:"small",onClick:e[11]||(e[11]=o=>z(2,0,0))},{default:s(()=>[d("批量禁用")]),_:1}),l(n,{size:"small",onClick:e[12]||(e[12]=o=>se(2,0))},{default:s(()=>[d("批量移除")]),_:1})]),l(ke,{ref_key:"tableRef",ref:P,data:ee.value,border:""},{default:s(()=>[l(k,{type:"selection",fixed:"left",width:"50"}),l(k,{prop:"project",label:"服务项目"}),l(k,{prop:"position",label:"位置/版面",width:"100"}),l(k,{prop:"size",label:"尺寸规格",width:"100"}),l(k,{prop:"price",label:"单价(RMB)"}),l(k,{prop:"num",label:"上架数量"}),l(k,{prop:"buy",label:"已购数量"}),l(k,{prop:"stock",label:"库存"}),l(k,{label:"操作",fixed:"right",width:"170"},{default:s(o=>[l(n,{link:"",type:"primary",onClick:g=>pe(o.row)},{default:s(()=>[d("编辑")]),_:2},1032,["onClick"]),l(n,{link:"",type:"primary",onClick:g=>se(1,o.row.id)},{default:s(()=>[d("移除")]),_:2},1032,["onClick"]),o.row.isEnable==1?(v(),x(n,{key:0,link:"",type:"primary",onClick:g=>z(1,0,o.row.id)},{default:s(()=>[d("已开启")]),_:2},1032,["onClick"])):(v(),x(n,{key:1,link:"",type:"primary",onClick:g=>z(1,1,o.row.id)},{default:s(()=>[d("已禁用")]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"])])])])]),l(ae,{modelValue:a.show,"onUpdate:modelValue":e[16]||(e[16]=o=>a.show=o),title:a.title,width:"400"},{default:s(()=>[l(j,{ref_key:"addFormRef",ref:I,model:a},{default:s(()=>[l(f,{label:"",prop:"name",rules:[{required:!0,message:"必填"}]},{default:s(()=>[l(V,{modelValue:a.name,"onUpdate:modelValue":e[13]||(e[13]=o=>a.name=o)},null,8,["modelValue"])]),_:1}),i("div",Vt,[l(n,{type:"primary",onClick:e[14]||(e[14]=o=>de())},{default:s(()=>[d("确定")]),_:1}),l(n,{onClick:e[15]||(e[15]=o=>a.show=!1)},{default:s(()=>[d("取消")]),_:1})])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),l(ae,{modelValue:U.value,"onUpdate:modelValue":e[21]||(e[21]=o=>U.value=o),title:"编辑物料",width:"400"},{footer:s(()=>[i("div",Et,[l(n,{type:"primary",onClick:e[20]||(e[20]=o=>fe())},{default:s(()=>[d("保存")]),_:1})])]),default:s(()=>[l(j,{ref_key:"editSettingFormRef",ref:le,model:c.value,"label-width":"auto"},{default:s(()=>[l(f,{label:"服务项目",style:{"margin-bottom":"0"}},{default:s(()=>[d(y(c.value.project),1)]),_:1}),l(f,{label:"位置/版面",style:{"margin-bottom":"0"}},{default:s(()=>[d(y(c.value.position),1)]),_:1}),l(f,{label:"规格/尺寸",style:{"margin-bottom":"0"}},{default:s(()=>[d(y(c.value.size),1)]),_:1}),l(f,{label:"单价",prop:"price",rules:[{required:!0,message:"请输入",trigger:"blur"},...G(A).positive]},{default:s(()=>[l(V,{modelValue:c.value.price,"onUpdate:modelValue":e[17]||(e[17]=o=>c.value.price=o)},null,8,["modelValue"])]),_:1},8,["rules"]),l(f,{label:"单位",prop:"unit",rules:[{required:!0,message:"请输入",trigger:"blur"}]},{default:s(()=>[l(V,{modelValue:c.value.unit,"onUpdate:modelValue":e[18]||(e[18]=o=>c.value.unit=o)},null,8,["modelValue"])]),_:1}),l(f,{label:"上架数量",prop:"num",rules:[{required:!0,message:"请输入",trigger:"blur"},...G(A).positive]},{default:s(()=>[l(V,{modelValue:c.value.num,"onUpdate:modelValue":e[19]||(e[19]=o=>c.value.num=o)},null,8,["modelValue"])]),_:1},8,["rules"]),l(f,{label:"已购数量",style:{"margin-bottom":"0"}},{default:s(()=>[d(y(c.value.buy),1)]),_:1}),l(f,{label:"库存"},{default:s(()=>[d(y(c.value.stock),1)]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}}),ll=Ze(xt,[["__scopeId","data-v-06623db7"]]);export{ll as default};
