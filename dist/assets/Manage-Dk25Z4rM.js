import{an as h,d as we,t as f,y as Ce,z as W,b as E,X as a,Z as V,e as Ve,$ as t,i,J as D,a1 as X,h as $,aj as Y,a5 as xe,al as Se,a7 as u,U as Z,W as B,o as _,Y as r,n as H,am as I,a2 as Ee,a3 as $e,G as Ge}from"./index-Burj71Mz.js";import{E as Fe}from"./dialog-CE1vbSJ8.js";/* empty css                */import{E as Ie,a as Re}from"./table-column-BIWm4N41.js";import"./checkbox-BId4FXGy.js";/* empty css                */import"./popper-DN7jCsAx.js";import"./scrollbar-BBvbl3-b.js";import"./tag-BMbTJcvT.js";import{E as Ue}from"./switch-BRe2QzcC.js";import{E as qe,a as Le}from"./form-item-BgXu7TbV.js";import{E as ze}from"./progress-9maJgk35.js";import{E as De}from"./image-viewer-B6wmEquf.js";/* empty css              */import{E as Be}from"./input-number-D9HCVayl.js";import{E as Ae}from"./button-Bh1aP2J2.js";import{u as Me}from"./index-CjmEh_Yq.js";/* empty css                */import{E as Pe}from"./index-BBQhpRIJ.js";import{_ as Te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CvsXQ4m2.js";import"./use-form-item-tjLgBssR.js";import"./scroll-dalFB88l.js";import"./vnode-B8ooRqKJ.js";import"./focus-trap-BKKcV_7_.js";import"./refs-BGTEdiMJ.js";import"./event-BB_Ol6Sd.js";import"./_initCloneObject-DkUEurvZ.js";import"./isEqual-BP9o_BCC.js";import"./validator-g63KIeJx.js";import"./castArray-UQdrNKdR.js";import"./_baseClone-ag1-RHwQ.js";import"./cloneDeep-DY_oMc42.js";import"./index-lXcgdrkx.js";const k="/web/v1",Ne=d=>h({url:k+"/exhibition/material/getList",method:"get",params:d}),je=d=>h({url:k+"/exhibition/material/add",method:"post",data:d}),Je=d=>h({url:k+"/exhibition/material/edit",method:"post",data:d}),We=d=>h({url:k+"/exhibition/material/delete",method:"post",data:d}),Xe=d=>h({url:k+"/exhibition/material/getSetting",method:"get",params:d}),Ye=d=>h({url:k+"/exhibition/materialSetting/getList",method:"get",params:d}),Ze=d=>h({url:k+"/exhibition/materialSetting/add",method:"post",data:d}),He=d=>h({url:k+"/exhibition/materialSetting/edit",method:"post",data:d}),Ke=d=>h({url:k+"/exhibition/materialSetting/delete",method:"post",data:d}),Oe=d=>h({url:k+"/exhibition/materialSetting/setStatus",method:"post",data:d}),Qe=d=>(Ee("data-v-b5874c61"),d=d(),$e(),d),et={class:"goods-index supplies-set"},tt={class:"s-top_bar",style:{"margin-bottom":"10px"}},lt={style:{"margin-right":"20px"}},ot={class:"con"},it={class:"l l1"},st={class:"top-bar"},at={class:"list-box"},nt={class:"list",id:"list1"},dt=["onClick"],rt={class:"text"},ut={class:"l l2"},mt={class:"top-bar"},ct={class:"list-box"},pt={class:"list",id:"list2"},ft=["onClick"],vt={class:"text"},_t={class:"l l3"},gt={class:"top-bar"},bt={class:"list-box",style:{padding:"10px"}},ht={class:"list list2",id:"list3"},kt=["onClick"],yt={class:"text"},wt={class:"r",style:{background:"#F9FAFB",overflow:"auto"}},Ct={class:"top-bar"},Vt=Qe(()=>a("span",null,"已设置物料",-1)),xt={class:"list-box",style:{padding:"10px"}},St={style:{"margin-bottom":"10px"}},Et={style:{"text-align":"right"}},$t={class:"dialog-footer"},Gt=we({__name:"Manage",setup(d){xe();const K=Se(),A=K.query.id,ne=K.query.title,O=f([]),Q=f([]),ee=f([]),y=f({}),x=f({}),w=f({}),g=f({}),te=f([]),le=f(1),M=f(null),R=f(null),P=f(null),s=Ce({show:!1,title:"",id:"",pid:"",exhibitionId:A,name:"",type:1}),oe=f(null),U=f(!1),c=f({}),de=()=>{Xe({materialId:w.value.id}).then(async l=>{l.code===0&&(g.value=l.data,await Z(),P.value.clearValidate())}).catch(l=>{})},q=()=>{Ne({exhibitionId:A}).then(l=>{l.code===0?(O.value=l.data,l.data.length>0&&(y.value.id?y.value=l.data.find(e=>e.id==y.value.id)||l.data[0]:y.value=l.data[0])):u.error(l.msg)}).catch(l=>{})},T=async l=>{s.type=l,s.id="",s.name="",l==1?(s.title="添加服务项目",s.pid=0):l==2?(s.title="添加位置/版面",s.pid=y.value.id):l==3&&(s.title="添加规格/尺寸",s.pid=x.value.id),s.show=!0,await Z(),setTimeout(()=>{R.value.clearValidate()},0)},ie=async(l,e)=>{s.id=l.id,s.name=l.name,e==1?s.title="修改服务项目":e==2?s.title="修改位置/版面":e==3&&(s.title="修改规格/尺寸"),s.show=!0,await Z(),setTimeout(()=>{R.value.clearValidate()},0)},re=()=>{R.value.validate(l=>{if(l)if(s.id)Je({id:s.id,name:s.name}).then(e=>{e.code==0?(u.success("修改成功"),q()):u.error(e.msg),s.show=!1}).catch(e=>{});else{let{show:e,title:n,id:p,...m}=s;je(m).then(G=>{G.code===0?(u.success("添加成功"),q()):u.error(G.msg),s.show=!1}).catch(G=>{})}})},N=l=>{We({id:l}).then(e=>{e.code===0?(u.success("删除成功"),q()):u.error(e.msg)}).catch(e=>{})},ue=()=>{},me=()=>{P.value.validate(l=>{l&&Ze({...g.value,materialId:w.value.id}).then(e=>{e.code===0?(u.success("上架成功"),F()):u.error(e.msg)}).catch(e=>{})})},F=()=>{Ye({exhibitionId:A}).then(l=>{l.code===0?te.value=l.data:u.error(l.msg)}).catch(l=>{})},ce=l=>l.size/1024/1024>3?(u.error("文件大小不能超过 3MB!"),!1):!0,pe=l=>{let e=new FormData;return e.append("upload",l.file),new Promise((n,p)=>{Me(e).then(m=>{m.code===0?n(m.data):p(m)})})},se=(l,e)=>{let n=[];if(l===2){if(n=M.value.getSelectionRows().map(p=>p.id),n.length===0)return u.warning("请选择要操作的数据"),!1}else n=[e];Ke({id:n}).then(p=>{p.code===0?(u.success("移除成功"),F()):u.error(p.msg)}).catch(p=>{})},L=(l,e,n)=>{let p=[];if(l===2){if(p=M.value.getSelectionRows().map(m=>m.id),p.length===0)return u.warning("请选择要操作的数据"),!1}else p=[n];Oe({id:p,status:e}).then(m=>{m.code===0?(u.success(e==1?"开启成功":"禁用成功"),F()):u.error(m.msg)}).catch(m=>{})},fe=l=>{U.value=!0,c.value=l},ve=()=>{oe.value.validate(l=>{l&&He({id:c.value.id,price:c.value.price,unit:c.value.unit,num:c.value.num}).then(e=>{e.code===0?(u.success("修改成功"),U.value=!1,F()):u.error(e.msg)}).catch(e=>{})})};return W(()=>y.value,l=>{Q.value=l.child,l.child.length>0?x.value=l.child.find(e=>e.id==x.value.id)||l.child[0]:x.value={}}),W(()=>x.value,l=>{ee.value=l.child,l.child&&l.child.length>0?w.value=l.child.find(e=>e.id==w.value.id)||l.child[0]:w.value={}}),W(()=>w.value,async l=>{l.id?de():g.value={}}),q(),F(),(l,e)=>{const n=Ae,p=B("Edit"),m=Ge,G=B("Delete"),_e=B("Close"),z=Be,v=Le,j=Pe,ge=De,be=B("Plus"),he=ze,J=qe,ke=Ue,C=Re,ye=Ie,ae=Fe;return _(),E(D,null,[a("div",et,[a("div",tt,[a("span",lt,V(Ve(ne)),1),t(n,{type:"",onClick:e[0]||(e[0]=o=>l.$router.go(-1))},{default:i(()=>[r("返回")]),_:1})]),a("div",ot,[a("div",it,[a("div",st,[t(n,{size:"small",type:"primary",icon:"Plus",onClick:e[1]||(e[1]=o=>T(1))},{default:i(()=>[r("服务项目")]),_:1})]),a("div",at,[a("ul",nt,[(_(!0),E(D,null,X(O.value,(o,b)=>(_(),E("li",{key:b,class:H(o.id==y.value.id?"active":""),onClick:S=>y.value=o},[a("span",rt,V(o.name),1),t(m,{onClick:I(S=>ie(o,1),["stop"]),class:"icon-btn is_hide"},{default:i(()=>[t(p)]),_:2},1032,["onClick"]),t(m,{onClick:I(S=>N(o.id),["stop"]),class:"icon-btn is_hide"},{default:i(()=>[t(G)]),_:2},1032,["onClick"])],10,dt))),128))])])]),a("div",ut,[a("div",mt,[y.value.id?(_(),$(n,{key:0,size:"small",type:"primary",icon:"Plus",onClick:e[2]||(e[2]=o=>T(2))},{default:i(()=>[r("位置/版面")]),_:1})):Y("",!0)]),a("div",ct,[a("ul",pt,[(_(!0),E(D,null,X(Q.value,(o,b)=>(_(),E("li",{key:b,class:H(o.id==x.value.id?"active":""),onClick:S=>x.value=o},[a("span",vt,V(o.name),1),t(m,{onClick:I(S=>ie(o,2),["stop"]),class:"icon-btn is_hide"},{default:i(()=>[t(p)]),_:2},1032,["onClick"]),t(m,{onClick:I(S=>N(o.id),["stop"]),class:"icon-btn is_hide"},{default:i(()=>[t(G)]),_:2},1032,["onClick"])],10,ft))),128))])])]),a("div",_t,[a("div",gt,[x.value.id?(_(),$(n,{key:0,size:"small",type:"primary",icon:"Plus",onClick:e[3]||(e[3]=o=>T(3))},{default:i(()=>[r("规格/尺寸")]),_:1})):Y("",!0)]),a("div",bt,[a("ul",ht,[(_(!0),E(D,null,X(ee.value,(o,b)=>(_(),E("li",{key:b,class:H(o.id==w.value.id?"active":""),onClick:S=>w.value=o},[a("span",yt,V(o.name),1),t(m,{onClick:I(S=>N(o.id),["stop"]),class:"icon-btn"},{default:i(()=>[t(_e)]),_:2},1032,["onClick"])],10,kt))),128))]),w.value.id?(_(),$(J,{key:0,ref_key:"settingFormRef",ref:P,model:g.value,style:{"margin-top":"20px"},"label-width":"auto","label-position":"left"},{default:i(()=>[t(v,{label:"单价",prop:"price",rules:[{required:!0,message:"请输入",trigger:"blur"}]},{default:i(()=>[t(z,{class:"s-number-input",modelValue:g.value.price,"onUpdate:modelValue":e[4]||(e[4]=o=>g.value.price=o),min:0,controls:!1},{append:i(()=>[r("元")]),_:1},8,["modelValue"])]),_:1}),t(v,{label:"单位",prop:"unit",rules:[{required:!0,message:"请输入",trigger:"blur"}]},{default:i(()=>[t(j,{modelValue:g.value.unit,"onUpdate:modelValue":e[5]||(e[5]=o=>g.value.unit=o),placeholder:""},null,8,["modelValue"])]),_:1}),t(v,{label:"上架数量",prop:"num",rules:[{required:!0,message:"请输入",trigger:"blur"}]},{default:i(()=>[t(z,{class:"s-number-input",modelValue:g.value.num,"onUpdate:modelValue":e[6]||(e[6]=o=>g.value.num=o),min:0,controls:!1},null,8,["modelValue"])]),_:1}),t(v,{label:"",prop:"img",rules:[{required:!0,message:"请上传图片"}]},{default:i(()=>[t(he,{class:"img-uploader","show-file-list":!1,"on-success":(o,b,S)=>{g.value.img=o.url},"before-upload":ce,"http-request":pe,accept:"image/*"},{default:i(()=>[g.value.img?(_(),$(ge,{key:0,src:g.value.img,class:"img"},null,8,["src"])):(_(),$(m,{key:1,class:"img-uploader-icon"},{default:i(()=>[t(be)]),_:1}))]),_:1},8,["on-success"])]),_:1}),t(v,null,{default:i(()=>[t(n,{type:"primary",onClick:e[7]||(e[7]=o=>me())},{default:i(()=>[r("上架")]),_:1})]),_:1})]),_:1},8,["model"])):Y("",!0)])]),a("div",wt,[a("div",Ct,[Vt,t(ke,{modelValue:le.value,"onUpdate:modelValue":e[8]||(e[8]=o=>le.value=o),"active-value":1,"inactive-value":0,"active-text":"开启","inactive-text":"关闭","inline-prompt":"",onChange:e[9]||(e[9]=o=>ue())},null,8,["modelValue"])]),a("div",xt,[a("div",St,[t(n,{size:"small",onClick:e[10]||(e[10]=o=>L(2,1,0))},{default:i(()=>[r("批量启用")]),_:1}),t(n,{size:"small",onClick:e[11]||(e[11]=o=>L(2,0,0))},{default:i(()=>[r("批量禁用")]),_:1}),t(n,{size:"small",onClick:e[12]||(e[12]=o=>se(2,0))},{default:i(()=>[r("批量移除")]),_:1})]),t(ye,{ref_key:"tableRef",ref:M,data:te.value,border:""},{default:i(()=>[t(C,{type:"selection",fixed:"left",width:"42"}),t(C,{prop:"project",label:"服务项目","min-width":"120"}),t(C,{prop:"position",label:"位置/版面",width:"100"}),t(C,{prop:"size",label:"尺寸规格",width:"100"}),t(C,{prop:"price",label:"单价(RMB)","min-width":"120"}),t(C,{prop:"num",label:"上架数量","min-width":"120"}),t(C,{prop:"buy",label:"已购数量","min-width":"120"}),t(C,{prop:"stock",label:"库存"}),t(C,{label:"操作",fixed:"right",width:"170"},{default:i(o=>[t(n,{link:"",type:"primary",onClick:b=>fe(o.row)},{default:i(()=>[r("编辑")]),_:2},1032,["onClick"]),t(n,{link:"",type:"primary",onClick:b=>se(1,o.row.id)},{default:i(()=>[r("移除")]),_:2},1032,["onClick"]),o.row.isEnable==1?(_(),$(n,{key:0,link:"",type:"primary",onClick:b=>L(1,0,o.row.id)},{default:i(()=>[r("已开启")]),_:2},1032,["onClick"])):(_(),$(n,{key:1,link:"",type:"primary",onClick:b=>L(1,1,o.row.id)},{default:i(()=>[r("已禁用")]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"])])])])]),t(ae,{modelValue:s.show,"onUpdate:modelValue":e[16]||(e[16]=o=>s.show=o),title:s.title,width:"400",draggable:""},{default:i(()=>[t(J,{ref_key:"addFormRef",ref:R,model:s},{default:i(()=>[t(v,{label:"",prop:"name",rules:[{required:!0,message:"必填"}]},{default:i(()=>[t(j,{modelValue:s.name,"onUpdate:modelValue":e[13]||(e[13]=o=>s.name=o)},null,8,["modelValue"])]),_:1}),a("div",Et,[t(n,{type:"primary",onClick:e[14]||(e[14]=o=>re())},{default:i(()=>[r("确定")]),_:1}),t(n,{onClick:e[15]||(e[15]=o=>s.show=!1)},{default:i(()=>[r("取消")]),_:1})])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),t(ae,{modelValue:U.value,"onUpdate:modelValue":e[21]||(e[21]=o=>U.value=o),title:"编辑物料",width:"400",draggable:""},{footer:i(()=>[a("div",$t,[t(n,{type:"primary",onClick:e[20]||(e[20]=o=>ve())},{default:i(()=>[r("保存")]),_:1})])]),default:i(()=>[t(J,{ref_key:"editSettingFormRef",ref:oe,model:c.value,"label-width":"auto","label-position":"left"},{default:i(()=>[t(v,{label:"服务项目",style:{"margin-bottom":"0"}},{default:i(()=>[r(V(c.value.project),1)]),_:1}),t(v,{label:"位置/版面",style:{"margin-bottom":"0"}},{default:i(()=>[r(V(c.value.position),1)]),_:1}),t(v,{label:"规格/尺寸",style:{"margin-bottom":"0"}},{default:i(()=>[r(V(c.value.size),1)]),_:1}),t(v,{label:"单价",prop:"price",rules:[{required:!0,message:"请输入",trigger:"blur"}]},{default:i(()=>[t(z,{modelValue:c.value.price,"onUpdate:modelValue":e[17]||(e[17]=o=>c.value.price=o),min:0,controls:!1,class:"s-number-input"},null,8,["modelValue"])]),_:1}),t(v,{label:"单位",prop:"unit",rules:[{required:!0,message:"请输入",trigger:"blur"}]},{default:i(()=>[t(j,{modelValue:c.value.unit,"onUpdate:modelValue":e[18]||(e[18]=o=>c.value.unit=o)},null,8,["modelValue"])]),_:1}),t(v,{label:"上架数量",prop:"num",rules:[{required:!0,message:"请输入",trigger:"blur"}]},{default:i(()=>[t(z,{modelValue:c.value.num,"onUpdate:modelValue":e[19]||(e[19]=o=>c.value.num=o),min:0,controls:!1,class:"s-number-input"},null,8,["modelValue"])]),_:1}),t(v,{label:"已购数量",style:{"margin-bottom":"0"}},{default:i(()=>[r(V(c.value.buy),1)]),_:1}),t(v,{label:"库存"},{default:i(()=>[r(V(c.value.stock),1)]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}}),ul=Te(Gt,[["__scopeId","data-v-b5874c61"]]);export{ul as default};
