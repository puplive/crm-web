import{d as we,l as f,s as xe,v as Q,O as A,o as _,f as $,P as a,R as x,a as q,S as l,w as i,Q as r,F as B,W,c as G,X,Z as Ve,a7 as Se,M as Z,n as H,a8 as I,_ as Ee,$ as $e}from"./index-ejxKPGwJ.js";import{E as Ge}from"./el-dialog-ByUkjCrZ.js";/* empty css                   */import{E as Fe,a as Re}from"./el-table-column-CoHT1Mrs.js";import"./el-checkbox-BI4x9LQv.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-scrollbar-Qrc5ThxC.js";import"./el-tag-dhi2ZZn1.js";import{E as qe}from"./el-switch-Q8ChD9sS.js";/* empty css                     */import{E as Ie}from"./el-progress-ChOl5h9G.js";import{E as Le}from"./el-image-viewer-B3uiBe-D.js";import"./el-input-K2YKJKRm.js";import"./el-button-Dg3p6Aqk.js";import{r as h,E as u}from"./request-BBBgF-Ju.js";import{u as Ue}from"./index-BAGMsYxs.js";import{_ as P}from"./rules-BWEfMqzk.js";/* empty css                   */import{E as ze}from"./index-DfKfZ_zv.js";import{E as De}from"./index-BdsNbp0F.js";import{E as Ae}from"./index-ChIfEi4u.js";import{E as Be,a as Pe}from"./index--OPgakvE.js";import{_ as Me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-SOUT3Bpq.js";import"./scroll-DR1cmUK4.js";import"./vnode-Dt7HAh5V.js";import"./refs-BY8ECGcR.js";import"./event-BB_Ol6Sd.js";import"./isArrayLikeObject-DgnYbF4l.js";import"./typescript-6eASP1js.js";import"./isEqual-2rUlRSb8.js";import"./validator-BNyHTwWJ.js";import"./cloneDeep-DkU9bsZW.js";import"./castArray-C5fBeFso.js";const k="/web/v1",Te=d=>h({url:k+"/exhibition/material/getList",method:"get",params:d}),Ne=d=>h({url:k+"/exhibition/material/add",method:"post",data:d}),je=d=>h({url:k+"/exhibition/material/edit",method:"post",data:d}),Je=d=>h({url:k+"/exhibition/material/delete",method:"post",data:d}),Oe=d=>h({url:k+"/exhibition/material/getSetting",method:"get",params:d}),Qe=d=>h({url:k+"/exhibition/materialSetting/getList",method:"get",params:d}),We=d=>h({url:k+"/exhibition/materialSetting/add",method:"post",data:d}),Xe=d=>h({url:k+"/exhibition/materialSetting/edit",method:"post",data:d}),Ze=d=>h({url:k+"/exhibition/materialSetting/delete",method:"post",data:d}),He=d=>h({url:k+"/exhibition/materialSetting/setStatus",method:"post",data:d}),Ke=d=>(Ee("data-v-3c21ca03"),d=d(),$e(),d),Ye={class:"goods-index supplies-set"},et={class:"s-top_bar",style:{"margin-bottom":"10px"}},tt={style:{"margin-right":"20px"}},lt={class:"con"},ot={class:"l l1"},it={class:"top-bar"},st={class:"list-box"},at={class:"list",id:"list1"},nt=["onClick"],dt={class:"text"},rt={class:"l l2"},ut={class:"top-bar"},ct={class:"list-box"},mt={class:"list",id:"list2"},pt=["onClick"],ft={class:"text"},vt={class:"l l3"},_t={class:"top-bar"},gt={class:"list-box",style:{padding:"10px"}},bt={class:"list list2",id:"list3"},ht=["onClick"],kt={class:"text"},yt={class:"r",style:{background:"#F9FAFB",overflow:"auto"}},Ct={class:"top-bar"},wt=Ke(()=>a("span",null,"已设置物料",-1)),xt={class:"list-box",style:{padding:"10px"}},Vt={style:{"margin-bottom":"10px"}},St={style:{"text-align":"right"}},Et={class:"dialog-footer"},$t=we({__name:"Manage",setup(d){Ve();const K=Se(),M=K.query.id,de=K.query.title,Y=f([]),ee=f([]),te=f([]),y=f({}),V=f({}),C=f({}),g=f({}),le=f([]),oe=f(1),T=f(null),L=f(null),N=f(null),s=xe({show:!1,title:"",id:"",pid:"",exhibitionId:M,name:"",type:1}),ie=f(null),U=f(!1),m=f({}),re=()=>{Oe({materialId:C.value.id}).then(async t=>{t.code===0&&(g.value=t.data,await Z(),N.value.clearValidate())}).catch(t=>{})},z=()=>{Te({exhibitionId:M}).then(t=>{t.code===0?(Y.value=t.data,t.data.length>0&&(y.value.id?y.value=t.data.find(e=>e.id==y.value.id)||t.data[0]:y.value=t.data[0])):u.error(t.msg)}).catch(t=>{})},j=async t=>{s.type=t,s.id="",s.name="",t==1?(s.title="添加服务项目",s.pid=0):t==2?(s.title="添加位置/版面",s.pid=y.value.id):t==3&&(s.title="添加规格/尺寸",s.pid=V.value.id),s.show=!0,await Z(),setTimeout(()=>{L.value.clearValidate()},0)},se=async(t,e)=>{s.id=t.id,s.name=t.name,e==1?s.title="修改服务项目":e==2?s.title="修改位置/版面":e==3&&(s.title="修改规格/尺寸"),s.show=!0,await Z(),setTimeout(()=>{L.value.clearValidate()},0)},ue=()=>{L.value.validate(t=>{if(t)if(s.id)je({id:s.id,name:s.name}).then(e=>{e.code==0?(u.success("修改成功"),z()):u.error(e.msg),s.show=!1}).catch(e=>{});else{let{show:e,title:n,id:p,...c}=s;Ne(c).then(F=>{F.code===0?(u.success("添加成功"),z()):u.error(F.msg),s.show=!1}).catch(F=>{})}})},J=t=>{Je({id:t}).then(e=>{e.code===0?(u.success("删除成功"),z()):u.error(e.msg)}).catch(e=>{})},ce=()=>{},me=()=>{N.value.validate(t=>{t&&We({...g.value,materialId:C.value.id}).then(e=>{e.code===0?(u.success("上架成功"),R()):u.error(e.msg)}).catch(e=>{})})},R=()=>{Qe({exhibitionId:M}).then(t=>{t.code===0?le.value=t.data:u.error(t.msg)}).catch(t=>{})},pe=t=>{if(t.type!=="image/jpeg")u.error("Avatar picture must be JPG format!");else if(t.size/1024/1024>2)return u.error("Avatar picture size can not exceed 2MB!"),!1;return!0},fe=t=>{let e=new FormData;return e.append("upload",t.file),new Promise((n,p)=>{Ue(e).then(c=>{c.code===0?n(c.data):p(c)})})},ae=(t,e)=>{let n=[];if(t===2){if(n=T.value.getSelectionRows().map(p=>p.id),n.length===0)return u.warning("请选择要操作的数据"),!1}else n=[e];Ze({id:n}).then(p=>{p.code===0?(u.success("移除成功"),R()):u.error(p.msg)}).catch(p=>{})},D=(t,e,n)=>{let p=[];if(t===2){if(p=T.value.getSelectionRows().map(c=>c.id),p.length===0)return u.warning("请选择要操作的数据"),!1}else p=[n];He({id:p,status:e}).then(c=>{c.code===0?(u.success(e==1?"开启成功":"禁用成功"),R()):u.error(c.msg)}).catch(c=>{})},ve=t=>{U.value=!0,m.value=t},_e=()=>{ie.value.validate(t=>{t&&Xe({id:m.value.id,price:m.value.price,unit:m.value.unit,num:m.value.num}).then(e=>{e.code===0?(u.success("修改成功"),U.value=!1,R()):u.error(e.msg)}).catch(e=>{})})};return Q(()=>y.value,t=>{ee.value=t.child,t.child.length>0?V.value=t.child.find(e=>e.id==V.value.id)||t.child[0]:V.value={}}),Q(()=>V.value,t=>{te.value=t.child,t.child&&t.child.length>0?C.value=t.child.find(e=>e.id==C.value.id)||t.child[0]:C.value={}}),Q(()=>C.value,async t=>{t.id?re():g.value={}}),z(),R(),(t,e)=>{const n=ze,p=A("Edit"),c=De,F=A("Delete"),ge=A("Close"),E=Ae,v=Be,be=Le,he=A("Plus"),ke=Ie,O=Pe,ye=qe,w=Fe,Ce=Re,ne=Ge;return _(),$(B,null,[a("div",Ye,[a("div",et,[a("span",tt,x(q(de)),1),l(n,{type:"",onClick:e[0]||(e[0]=o=>t.$router.go(-1))},{default:i(()=>[r("返回")]),_:1})]),a("div",lt,[a("div",ot,[a("div",it,[l(n,{size:"small",type:"primary",icon:"Plus",onClick:e[1]||(e[1]=o=>j(1))},{default:i(()=>[r("服务项目")]),_:1})]),a("div",st,[a("ul",at,[(_(!0),$(B,null,W(Y.value,(o,b)=>(_(),$("li",{key:b,class:H(o.id==y.value.id?"active":""),onClick:S=>y.value=o},[a("span",dt,x(o.name),1),l(c,{onClick:I(S=>se(o,1),["stop"]),class:"icon-btn is_hide"},{default:i(()=>[l(p)]),_:2},1032,["onClick"]),l(c,{onClick:I(S=>J(o.id),["stop"]),class:"icon-btn is_hide"},{default:i(()=>[l(F)]),_:2},1032,["onClick"])],10,nt))),128))])])]),a("div",rt,[a("div",ut,[y.value.id?(_(),G(n,{key:0,size:"small",type:"primary",icon:"Plus",onClick:e[2]||(e[2]=o=>j(2))},{default:i(()=>[r("位置/版面")]),_:1})):X("",!0)]),a("div",ct,[a("ul",mt,[(_(!0),$(B,null,W(ee.value,(o,b)=>(_(),$("li",{key:b,class:H(o.id==V.value.id?"active":""),onClick:S=>V.value=o},[a("span",ft,x(o.name),1),l(c,{onClick:I(S=>se(o,2),["stop"]),class:"icon-btn is_hide"},{default:i(()=>[l(p)]),_:2},1032,["onClick"]),l(c,{onClick:I(S=>J(o.id),["stop"]),class:"icon-btn is_hide"},{default:i(()=>[l(F)]),_:2},1032,["onClick"])],10,pt))),128))])])]),a("div",vt,[a("div",_t,[V.value.id?(_(),G(n,{key:0,size:"small",type:"primary",icon:"Plus",onClick:e[3]||(e[3]=o=>j(3))},{default:i(()=>[r("规格/尺寸")]),_:1})):X("",!0)]),a("div",gt,[a("ul",bt,[(_(!0),$(B,null,W(te.value,(o,b)=>(_(),$("li",{key:b,class:H(o.id==C.value.id?"active":""),onClick:S=>C.value=o},[a("span",kt,x(o.name),1),l(c,{onClick:I(S=>J(o.id),["stop"]),class:"icon-btn"},{default:i(()=>[l(ge)]),_:2},1032,["onClick"])],10,ht))),128))]),C.value.id?(_(),G(O,{key:0,ref_key:"settingFormRef",ref:N,model:g.value,style:{"margin-top":"20px"},"label-width":"auto"},{default:i(()=>[l(v,{label:"单价",prop:"price",rules:[{required:!0,message:"请输入",trigger:"blur"},...q(P).positive]},{default:i(()=>[l(E,{modelValue:g.value.price,"onUpdate:modelValue":e[4]||(e[4]=o=>g.value.price=o),type:"number",placeholder:""},{append:i(()=>[r("元")]),_:1},8,["modelValue"])]),_:1},8,["rules"]),l(v,{label:"单位",prop:"unit",rules:[{required:!0,message:"请输入",trigger:"blur"}]},{default:i(()=>[l(E,{modelValue:g.value.unit,"onUpdate:modelValue":e[5]||(e[5]=o=>g.value.unit=o),placeholder:""},null,8,["modelValue"])]),_:1}),l(v,{label:"上架数量",prop:"num",rules:[{required:!0,message:"请输入",trigger:"blur"},...q(P).positive]},{default:i(()=>[l(E,{modelValue:g.value.num,"onUpdate:modelValue":e[6]||(e[6]=o=>g.value.num=o),type:"number",placeholder:""},null,8,["modelValue"])]),_:1},8,["rules"]),l(v,{label:"",prop:"img",rules:[{required:!0,message:"请上传图片"}]},{default:i(()=>[l(ke,{class:"img-uploader","show-file-list":!1,"on-success":(o,b,S)=>{g.value.img=o.url},"before-upload":pe,"http-request":fe},{default:i(()=>[g.value.img?(_(),G(be,{key:0,src:g.value.img,class:"img"},null,8,["src"])):(_(),G(c,{key:1,class:"img-uploader-icon"},{default:i(()=>[l(he)]),_:1}))]),_:1},8,["on-success"])]),_:1}),l(v,null,{default:i(()=>[l(n,{type:"primary",onClick:e[7]||(e[7]=o=>me())},{default:i(()=>[r("上架")]),_:1})]),_:1})]),_:1},8,["model"])):X("",!0)])]),a("div",yt,[a("div",Ct,[wt,l(ye,{modelValue:oe.value,"onUpdate:modelValue":e[8]||(e[8]=o=>oe.value=o),"active-value":1,"inactive-value":0,"active-text":"开启","inactive-text":"关闭","inline-prompt":"",onChange:e[9]||(e[9]=o=>ce())},null,8,["modelValue"])]),a("div",xt,[a("div",Vt,[l(n,{size:"small",onClick:e[10]||(e[10]=o=>D(2,1,0))},{default:i(()=>[r("批量启用")]),_:1}),l(n,{size:"small",onClick:e[11]||(e[11]=o=>D(2,0,0))},{default:i(()=>[r("批量禁用")]),_:1}),l(n,{size:"small",onClick:e[12]||(e[12]=o=>ae(2,0))},{default:i(()=>[r("批量移除")]),_:1})]),l(Ce,{ref_key:"tableRef",ref:T,data:le.value,border:""},{default:i(()=>[l(w,{type:"selection",fixed:"left",width:"42"}),l(w,{prop:"project",label:"服务项目"}),l(w,{prop:"position",label:"位置/版面",width:"100"}),l(w,{prop:"size",label:"尺寸规格",width:"100"}),l(w,{prop:"price",label:"单价(RMB)"}),l(w,{prop:"num",label:"上架数量"}),l(w,{prop:"buy",label:"已购数量"}),l(w,{prop:"stock",label:"库存"}),l(w,{label:"操作",fixed:"right",width:"170"},{default:i(o=>[l(n,{link:"",type:"primary",onClick:b=>ve(o.row)},{default:i(()=>[r("编辑")]),_:2},1032,["onClick"]),l(n,{link:"",type:"primary",onClick:b=>ae(1,o.row.id)},{default:i(()=>[r("移除")]),_:2},1032,["onClick"]),o.row.isEnable==1?(_(),G(n,{key:0,link:"",type:"primary",onClick:b=>D(1,0,o.row.id)},{default:i(()=>[r("已开启")]),_:2},1032,["onClick"])):(_(),G(n,{key:1,link:"",type:"primary",onClick:b=>D(1,1,o.row.id)},{default:i(()=>[r("已禁用")]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"])])])])]),l(ne,{modelValue:s.show,"onUpdate:modelValue":e[16]||(e[16]=o=>s.show=o),title:s.title,width:"400"},{default:i(()=>[l(O,{ref_key:"addFormRef",ref:L,model:s},{default:i(()=>[l(v,{label:"",prop:"name",rules:[{required:!0,message:"必填"}]},{default:i(()=>[l(E,{modelValue:s.name,"onUpdate:modelValue":e[13]||(e[13]=o=>s.name=o)},null,8,["modelValue"])]),_:1}),a("div",St,[l(n,{type:"primary",onClick:e[14]||(e[14]=o=>ue())},{default:i(()=>[r("确定")]),_:1}),l(n,{onClick:e[15]||(e[15]=o=>s.show=!1)},{default:i(()=>[r("取消")]),_:1})])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),l(ne,{modelValue:U.value,"onUpdate:modelValue":e[21]||(e[21]=o=>U.value=o),title:"编辑物料",width:"400"},{footer:i(()=>[a("div",Et,[l(n,{type:"primary",onClick:e[20]||(e[20]=o=>_e())},{default:i(()=>[r("保存")]),_:1})])]),default:i(()=>[l(O,{ref_key:"editSettingFormRef",ref:ie,model:m.value,"label-width":"auto"},{default:i(()=>[l(v,{label:"服务项目",style:{"margin-bottom":"0"}},{default:i(()=>[r(x(m.value.project),1)]),_:1}),l(v,{label:"位置/版面",style:{"margin-bottom":"0"}},{default:i(()=>[r(x(m.value.position),1)]),_:1}),l(v,{label:"规格/尺寸",style:{"margin-bottom":"0"}},{default:i(()=>[r(x(m.value.size),1)]),_:1}),l(v,{label:"单价",prop:"price",rules:[{required:!0,message:"请输入",trigger:"blur"},...q(P).positive]},{default:i(()=>[l(E,{modelValue:m.value.price,"onUpdate:modelValue":e[17]||(e[17]=o=>m.value.price=o)},null,8,["modelValue"])]),_:1},8,["rules"]),l(v,{label:"单位",prop:"unit",rules:[{required:!0,message:"请输入",trigger:"blur"}]},{default:i(()=>[l(E,{modelValue:m.value.unit,"onUpdate:modelValue":e[18]||(e[18]=o=>m.value.unit=o)},null,8,["modelValue"])]),_:1}),l(v,{label:"上架数量",prop:"num",rules:[{required:!0,message:"请输入",trigger:"blur"},...q(P).positive]},{default:i(()=>[l(E,{modelValue:m.value.num,"onUpdate:modelValue":e[19]||(e[19]=o=>m.value.num=o)},null,8,["modelValue"])]),_:1},8,["rules"]),l(v,{label:"已购数量",style:{"margin-bottom":"0"}},{default:i(()=>[r(x(m.value.buy),1)]),_:1}),l(v,{label:"库存"},{default:i(()=>[r(x(m.value.stock),1)]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}}),rl=Me($t,[["__scopeId","data-v-3c21ca03"]]);export{rl as default};