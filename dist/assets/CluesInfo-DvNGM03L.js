import{d as ae,l as g,o as u,f as y,P as d,S as e,w as l,F as U,W as H,Q as s,c as w,R as m,_ as ne,$ as se,e as _e,s as ee,a as $,X as R,Z as be,a7 as ve}from"./index-z1lnycFL.js";import{E as ye}from"./el-dialog-DLgRERcb.js";/* empty css                   *//* empty css                 */import"./el-tag-YLIfQqcE.js";import{a as ie,E as de}from"./el-select-xgJ2gGrg.js";import{E as he}from"./el-scrollbar-D-pOLxMj.js";import"./el-popper-B7J-cV2H.js";import{E as ke,a as we}from"./el-tab-pane-vGUVB7XM.js";import{E as ge,a as Ce}from"./el-form-item-CEpn_uB5.js";import{E as Ve,a as xe}from"./el-table-column-C-rYy-n-.js";import"./el-checkbox-B2gCYMrl.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-button-C93tUob9.js";import{E as Ee,a as Ie}from"./el-radio-mLjZ-LRc.js";import{c as le,b as q,g as Te,d as $e,e as Ue,f as Be,h as Ne}from"./index-DK16_DYH.js";/* empty css                   */import{a as _}from"./request-aXdAhXIg.js";import{E as re}from"./index-BkWBfb-P.js";import{E as ue}from"./index-BzXKYKgM.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as Se}from"./Move.vue_vue_type_script_setup_true_lang-Cl1GQUEP.js";import{_ as Fe}from"./GoodsOrderDetail.vue_vue_type_script_setup_true_lang-B57XkcsM.js";import{b as te,c as oe}from"./index-D8Lrg4BL.js";/* empty css                       */import{E as D}from"./index-DllrCRMq.js";import"./index-xYMOok71.js";import"./index-5pYrHxHw.js";import"./scroll-BCz3Esio.js";import"./vnode-Dbe6RxbW.js";import"./refs-Drwk4c_1.js";import"./event-BB_Ol6Sd.js";import"./_initCloneObject-DYOGIJrZ.js";import"./isEqual-BbYM-4Ba.js";import"./castArray-C_8BC8pz.js";import"./index-zn0pSciR.js";import"./_baseClone-08HETTmO.js";import"./isArrayLikeObject-CB844vlx.js";import"./index-Ia4SxtYl.js";import"./aria-KgdLjl5h.js";import"./validator-BE8XcUtN.js";const me=C=>(ne("data-v-a3b65e20"),C=C(),se(),C),Le={class:"follow-up"},Pe=me(()=>d("div",{class:"title"},"跟进记录",-1)),Re={class:"form"},ze={class:"item"},De=me(()=>d("label",null,"跟进状态",-1)),qe={class:"record"},Me={class:"list"},je={class:"p1"},Ae={class:"p2"},Oe=ae({__name:"FollowUp",props:["clueId"],setup(C,{expose:M}){const B=C,x=g(""),v=g(0),r=g(0),S=g(""),j=()=>{le.add({clueId:B.clueId,text:x.value,status:v.value,contactId:r.value,contactName:S.value}).then(b=>{b.code===0?(_.success("跟进记录添加成功"),E()):_.error(b.msg)})},A=g([]),E=()=>{le.getList({clueId:B.clueId}).then(b=>{b.code===0&&(A.value=b.data)})};E();const z=g([]),O=()=>{q.getList({clueId:B.clueId}).then(b=>{b.code===0&&(z.value=b.data)})};return O(),M({getContactList:O}),(b,o)=>{const F=re,V=ie,G=de,L=ue,Q=he;return u(),y("div",Le,[Pe,d("div",Re,[e(F,{type:"textarea",placeholder:"请输入跟进内容",modelValue:x.value,"onUpdate:modelValue":o[0]||(o[0]=c=>x.value=c)},null,8,["modelValue"]),d("div",ze,[De,e(G,{modelValue:v.value,"onUpdate:modelValue":o[1]||(o[1]=c=>v.value=c),placeholder:"跟进状态"},{default:l(()=>[e(V,{label:"未跟进",value:0}),e(V,{label:"电话邀约",value:1}),e(V,{label:"客户拜访",value:2}),e(V,{label:"初步方案",value:3}),e(V,{label:"停滞",value:4})]),_:1},8,["modelValue"]),e(G,{modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=c=>r.value=c),placeholder:"联系人",onChange:o[3]||(o[3]=c=>{if(c===0)S.value="";else{let N=z.value.find(X=>X.id===c);S.value=N?N.name:""}})},{default:l(()=>[e(V,{label:"联系人",value:0}),(u(!0),y(U,null,H(z.value,c=>(u(),w(V,{key:c.id,label:c.name,value:c.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e(L,{type:"primary",onClick:j},{default:l(()=>[s("提交")]),_:1})])]),d("div",qe,[e(Q,null,{default:l(()=>[d("ul",Me,[(u(!0),y(U,null,H(A.value,(c,N)=>(u(),y("li",{key:N,class:"item"},[d("div",je,[s(m(c.time)+" ",1),d("span",null,m(c.authUser),1),s(),d("span",null,m({0:"无",1:"电话邀约",2:"客户拜访",3:"初步方案",4:"停滞"}[c.status]),1)]),d("div",Ae,"（联系人："+m(c.contact)+"）"+m(c.text),1)]))),128))])]),_:1})])])}}}),Ge=pe(Oe,[["__scopeId","data-v-a3b65e20"]]),J=C=>(ne("data-v-bdb85105"),C=C(),se(),C),Qe={class:"clues-info"},We={class:"clues-info-header"},Xe={class:"clues-info-header-left"},Ze={class:"p1"},He={class:"p2"},Je={key:0},Ke={key:1},Ye={class:"clues-info-header-right"},el={class:"clues-info-content"},ll={class:"clues-info-left"},tl={style:{}},ol={class:"title-bar"},al=J(()=>d("label",{for:""},"公司信息",-1)),nl={key:0},sl={key:1},il={key:2},dl=J(()=>d("p",{style:{padding:"10px 0"}},"展位订单",-1)),rl=J(()=>d("p",{style:{padding:"10px 0","margin-top":"10px"}},"物料订单",-1)),ul={class:"clues-info-right"},pl=ae({__name:"CluesInfo",setup(C){const M=be(),B=ve(),x=B.query.type,v=B.query.id;B.query.exhibitionId;const r=g({customField:[],orderPosition:[],orderMaterial:[],contract:[]}),S=g([]),j=()=>{Te().then(a=>{a.code===0&&(S.value=a.data)})},A=_e(()=>{let a=[];for(let n in r.value.customFieldTrans){let k=r.value.customFieldTrans[n],h=S.value.find(p=>p.key===n);a.push({key:n,value:k,type:h?h.type:1,name:h?h.name:""})}return a}),E=()=>{$e({id:v}).then(a=>{a.code===0&&(r.value=a.data)})},z=()=>{D.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Ue({id:[v]}).then(a=>{a.code===0?(_.success("删除成功"),setTimeout(()=>{M.go(-1)},1e3)):_.error(a.msg)})}).catch(()=>{console.log("cancel")})},O=()=>{console.log(r.value.isNew),Be({id:v,status:r.value.isNew}).then(a=>{a.code===0?_.success("修改成功"):_.error(a.msg)})},b=()=>{q.getList({clueId:v}).then(a=>{a.code===0&&(o.list=a.data)})},o=ee({show:!1,isEdit:!1,list:[],form:{clueId:v,name:"",duties:"",type:0,mobile:"",tel:"",email:"",wechat:"",status:1},setAdd:()=>{o.show=!0,o.isEdit=!1,o.form={clueId:v,name:"",duties:"",type:0,mobile:"",tel:"",email:"",wechat:"",status:1}},setEdit:a=>{o.show=!0,o.isEdit=!0,o.form=a,o.form.clueId=v},add:()=>{q.add(o.form).then(a=>{a.code===0?(_.success("添加成功"),o.show=!1,b(),F.value.getContactList()):_.error(a.msg)})},edit:()=>{q.edit(o.form).then(a=>{a.code===0?(_.success("修改成功"),o.show=!1,b(),F.value.getContactList()):(_.error(a.msg),b())})},del:a=>{D.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{q.del({id:a}).then(n=>{n.code===0?(_.success("删除成功"),b(),F.value.getContactList()):_.error(n.msg)})})}}),F=g(null),V=g(null),G=()=>{D.confirm("确定退展？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Ne({id:v}).then(a=>{a.code===0?(_.success("退展成功"),setTimeout(()=>{M.go(-1)},1e3)):_.error(a.msg)})})},L=ee({activeName:1,change:a=>{L.activeName=a,a===1&&(j(),b()),E()}}),Q=(a,n)=>{D.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{let k=te.revoke;n===2&&(k=oe.revoke),k({id:a}).then(h=>{h.code===0?(_.success("撤销成功"),E()):_.error(h.msg)})}).catch(()=>{})},c=(a,n)=>{D.confirm("是否确认要删除订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{let k=te.del;n===2&&(k=oe.del),k({id:a}).then(h=>{h.code===0?(_.success("删除成功"),E()):_.error(h.msg)})}).catch(()=>{})},N=g(null),X=a=>{N.value.getDetail(a)};return E(),j(),b(),(a,n)=>{const k=Ee,h=Ie,p=ue,f=ge,i=Ve,W=xe,K=Ce,Z=ke,ce=we,P=re,I=ie,Y=de,fe=ye;return u(),y(U,null,[d("div",Qe,[d("div",We,[d("div",Xe,[d("div",Ze,m(r.value.companyName),1),d("div",He,[$(x)==="2"?(u(),y("span",Je,"所属展商："+m(r.value.companyName),1)):R("",!0),$(x)==="2"?(u(),y("span",Ke,[s("新展商： "),e(h,{"model-value":r.value.isNew,"onUpdate:modelValue":n[0]||(n[0]=t=>r.value.isNew=t),onChange:O},{default:l(()=>[e(k,{value:!0,style:{"margin-right":"10px"}},{default:l(()=>[s("是")]),_:1}),e(k,{value:!1},{default:l(()=>[s("否")]),_:1})]),_:1},8,["model-value"])])):R("",!0),d("span",null,"客户经理："+m(r.value.authUser),1)])]),d("div",Ye,[$(x)==="2"?(u(),y(U,{key:0},[r.value.isExit?(u(),w(p,{key:0,type:"info",size:"small",plain:"",disabled:""},{default:l(()=>[s("已退展")]),_:1})):(u(),w(p,{key:1,type:"primary",size:"small",onClick:G},{default:l(()=>[s("退展")]),_:1}))],64)):R("",!0),e(p,{type:"primary",size:"small",onClick:n[1]||(n[1]=()=>{V.value.setMove([$(v)])})},{default:l(()=>[s("转他人")]),_:1})])]),d("div",el,[d("div",ll,[e(ce,{modelValue:L.activeName,"onUpdate:modelValue":n[3]||(n[3]=t=>L.activeName=t),onTabChange:L.change,type:"border-card",class:"demo-tabs",style:{height:"100%"}},{default:l(()=>[e(Z,{label:"资料",name:1},{default:l(()=>[d("div",tl,[e(K,{ref_key:"form",ref:r,"label-width":"auto"},{default:l(()=>[d("div",ol,[al,e(p,{type:"default",onClick:n[2]||(n[2]=t=>a.$router.push({name:"CluesEdit",query:{id:$(v)}})),size:"small"},{default:l(()=>[s("编辑")]),_:1}),e(p,{type:"default",onClick:z,size:"small"},{default:l(()=>[s("删除")]),_:1})]),e(f,{label:"企业名称"},{default:l(()=>[d("span",null,m(r.value.companyName),1)]),_:1}),e(f,{label:"联系人"},{default:l(()=>[d("span",null,m(r.value.contactName),1)]),_:1}),e(f,{label:"国家"},{default:l(()=>[d("span",null,m(r.value.country),1)]),_:1}),e(f,{label:"省份"},{default:l(()=>[d("span",null,m(r.value.province),1)]),_:1}),e(f,{label:"城市"},{default:l(()=>[d("span",null,m(r.value.city),1)]),_:1}),e(f,{label:"详细地址",prop:"address"},{default:l(()=>[d("span",null,m(r.value.address),1)]),_:1}),e(f,{label:"企业品牌",prop:""},{default:l(()=>[d("span",null,m(r.value.companyBrand&&r.value.companyBrand.length>0?r.value.companyBrand.join(","):""),1)]),_:1}),(u(!0),y(U,null,H(A.value,(t,T)=>(u(),w(f,{key:t.key,label:t.name},{default:l(()=>[t.type===5?(u(),y("span",nl,m(t.value.join("，")),1)):t.type===7?(u(),y("span",sl,m(t.value.join("，")),1)):(u(),y("span",il,m(t.value),1))]),_:2},1032,["label"]))),128)),e(f,{label:"参展联系人",prop:""},{default:l(()=>[e(p,{size:"small",onClick:o.setAdd},{default:l(()=>[s("添加")]),_:1},8,["onClick"])]),_:1}),e(W,{border:"",data:o.list,"show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[e(i,{prop:"name",label:"姓名"}),e(i,{prop:"duties",label:"职务"}),e(i,{prop:"type",label:"类别"},{default:l(t=>[s(m(["无","展位","财务","市场","现场"][t.row.type]),1)]),_:1}),e(i,{prop:"mobile",label:"手机号"}),e(i,{prop:"tel",label:"电话"}),e(i,{prop:"email",label:"邮箱"}),e(i,{prop:"wechat",label:"微信"}),e(i,{prop:"status",label:"在职状态","min-width":"120"},{default:l(t=>[s(m(["","在职","离职","调岗"][t.row.status]),1)]),_:1}),e(i,{prop:"isExhibitionContact",label:"展会联系人"},{default:l(t=>[s(m(t.row.isExhibitionContact===1?"是":"否"),1)]),_:1}),e(i,{label:"操作",fixed:"right",width:"150"},{default:l(t=>[e(p,{type:"text",size:"small",onClick:T=>o.setEdit(t.row)},{default:l(()=>[s("编辑")]),_:2},1032,["onClick"]),e(p,{type:"text",size:"small",onClick:T=>o.del(t.row.id)},{default:l(()=>[s("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},512)])]),_:1}),$(x)==="2"?(u(),w(Z,{key:0,label:"订单",name:2},{default:l(()=>[dl,e(W,{data:r.value.orderPosition,border:"","show-overflow-tooltip":""},{default:l(()=>[e(i,{prop:"orderCode",label:"订单编号","min-width":"120"}),e(i,{prop:"brand",label:"品牌"}),e(i,{prop:"positionCode",label:"展位号"}),e(i,{prop:"price",label:"订单金额","min-width":"120"}),e(i,{label:"操作",width:"150",fixed:"right"},{default:l(t=>[e(p,{link:"",type:"primary",onClick:T=>a.$router.push({name:"OrderBoothDetail",query:{id:t.row.id}})},{default:l(()=>[s("详情")]),_:2},1032,["onClick"]),t.row.orderStatus===1?(u(),w(p,{key:0,link:"",type:"primary",onClick:T=>Q(t.row.id,1)},{default:l(()=>[s("撤销")]),_:2},1032,["onClick"])):(u(),y(U,{key:1},[e(p,{link:"",type:"info",disabled:""},{default:l(()=>[s("已撤销")]),_:1}),e(p,{link:"",type:"primary",onClick:T=>c(t.row.id,1)},{default:l(()=>[s("删除")]),_:2},1032,["onClick"])],64))]),_:1})]),_:1},8,["data"]),rl,e(W,{data:r.value.orderMaterial,border:"","show-overflow-tooltip":""},{default:l(()=>[e(i,{prop:"orderCode",label:"订单编号","min-width":"120"}),e(i,{prop:"positionCode",label:"展位号"}),e(i,{prop:"price",label:"订单金额","min-width":"120"}),e(i,{label:"操作",width:"150",fixed:"right"},{default:l(t=>[e(p,{link:"",type:"primary",onClick:T=>X(t.row.id)},{default:l(()=>[s("详情")]),_:2},1032,["onClick"]),t.row.orderStatus===1?(u(),w(p,{key:0,link:"",type:"primary",onClick:T=>Q(t.row.id,2)},{default:l(()=>[s("撤销")]),_:2},1032,["onClick"])):(u(),y(U,{key:1},[e(p,{link:"",type:"info",disabled:""},{default:l(()=>[s("已撤销")]),_:1}),e(p,{link:"",type:"primary",onClick:T=>c(t.row.id,2)},{default:l(()=>[s("删除")]),_:2},1032,["onClick"])],64))]),_:1})]),_:1},8,["data"])]),_:1})):R("",!0),$(x)==="2"?(u(),w(Z,{key:1,label:"合同",name:3},{default:l(()=>[e(W,{data:r.value.contract,border:"","show-overflow-tooltip":""},{default:l(()=>[e(i,{prop:"contractCode",label:"合同编号","min-width":"120"}),e(i,{prop:"contractType",label:"合同类型","min-width":"120"},{default:l(t=>[s(m({1:"展位合同",2:"物料合同",3:"展位+物料"}[t.row.contractType]),1)]),_:1}),e(i,{prop:"",label:"付款方式","min-width":"120"}),e(i,{prop:"contractAmount",label:"合同金额","min-width":"120"}),e(i,{prop:"deposit",label:"预定金"}),e(i,{prop:"",label:"抵扣"}),e(i,{prop:"firstPayPrice",label:"一期款"}),e(i,{prop:"firstPayTime",label:"期限"}),e(i,{prop:"finalPayPrice",label:"尾款"}),e(i,{prop:"finalPayTime",label:"期限"}),e(i,{prop:"receivedPrice",label:"已收款"}),e(i,{prop:"unknownPrice",label:"未收款"}),e(i,{prop:"contractStatus",label:"合同状态","min-width":"120"},{default:l(t=>[s(m({0:"撤销",1:"已完成"}[t.row.contractStatus]),1)]),_:1}),e(i,{label:"操作",width:"150",fixed:"right"},{default:l(t=>[e(p,{link:"",type:"primary"},{default:l(()=>[s("详情")]),_:1}),t.row.orderStatus===1?(u(),w(p,{key:0,link:"",type:"primary"},{default:l(()=>[s("撤销")]),_:1})):(u(),y(U,{key:1},[e(p,{link:"",type:"info",disabled:""},{default:l(()=>[s("已撤销")]),_:1}),e(p,{link:"",type:"primary"},{default:l(()=>[s("删除")]),_:1})],64))]),_:1})]),_:1},8,["data"])]),_:1})):R("",!0)]),_:1},8,["modelValue","onTabChange"])]),d("div",ul,[e(Ge,{ref_key:"followUp",ref:F,clueId:$(v)},null,8,["clueId"])])])]),e(fe,{title:o.isEdit?"编辑":"添加联系人",modelValue:o.show,"onUpdate:modelValue":n[14]||(n[14]=t=>o.show=t),width:"500px"},{footer:l(()=>[e(p,{type:"default",onClick:n[13]||(n[13]=t=>o.show=!1)},{default:l(()=>[s("取消")]),_:1}),o.isEdit?(u(),w(p,{key:0,type:"primary",onClick:o.edit},{default:l(()=>[s("修改")]),_:1},8,["onClick"])):(u(),w(p,{key:1,type:"primary",onClick:o.add},{default:l(()=>[s("添加")]),_:1},8,["onClick"]))]),default:l(()=>[e(K,{model:o.form,"label-width":"auto"},{default:l(()=>[e(f,{label:"姓名"},{default:l(()=>[e(P,{modelValue:o.form.name,"onUpdate:modelValue":n[4]||(n[4]=t=>o.form.name=t)},null,8,["modelValue"])]),_:1}),e(f,{label:"职务"},{default:l(()=>[e(P,{modelValue:o.form.duties,"onUpdate:modelValue":n[5]||(n[5]=t=>o.form.duties=t)},null,8,["modelValue"])]),_:1}),e(f,{label:"类别"},{default:l(()=>[e(Y,{modelValue:o.form.type,"onUpdate:modelValue":n[6]||(n[6]=t=>o.form.type=t)},{default:l(()=>[e(I,{label:"无",value:0}),e(I,{label:"展位",value:1}),e(I,{label:"财务",value:2}),e(I,{label:"市场",value:3}),e(I,{label:"现场",value:4})]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"手机号"},{default:l(()=>[e(P,{modelValue:o.form.mobile,"onUpdate:modelValue":n[7]||(n[7]=t=>o.form.mobile=t)},null,8,["modelValue"])]),_:1}),e(f,{label:"电话"},{default:l(()=>[e(P,{modelValue:o.form.tel,"onUpdate:modelValue":n[8]||(n[8]=t=>o.form.tel=t)},null,8,["modelValue"])]),_:1}),e(f,{label:"邮箱"},{default:l(()=>[e(P,{modelValue:o.form.email,"onUpdate:modelValue":n[9]||(n[9]=t=>o.form.email=t)},null,8,["modelValue"])]),_:1}),e(f,{label:"微信"},{default:l(()=>[e(P,{modelValue:o.form.wechat,"onUpdate:modelValue":n[10]||(n[10]=t=>o.form.wechat=t)},null,8,["modelValue"])]),_:1}),e(f,{label:"在职状态"},{default:l(()=>[e(Y,{modelValue:o.form.status,"onUpdate:modelValue":n[11]||(n[11]=t=>o.form.status=t)},{default:l(()=>[e(I,{label:"在职",value:1}),e(I,{label:"离职",value:2}),e(I,{label:"调岗",value:3})]),_:1},8,["modelValue"])]),_:1}),o.isEdit?(u(),w(f,{key:0,label:"展会联系人"},{default:l(()=>[e(h,{modelValue:o.form.isExhibitionContact,"onUpdate:modelValue":n[12]||(n[12]=t=>o.form.isExhibitionContact=t),class:"ml-4"},{default:l(()=>[e(k,{value:1},{default:l(()=>[s("是")]),_:1}),e(k,{value:0},{default:l(()=>[s("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})):R("",!0)]),_:1},8,["model"])]),_:1},8,["title","modelValue"]),e(Se,{ref_key:"moveRef",ref:V,onCallback:E},null,512),e(Fe,{ref_key:"detailRef",ref:N},null,512)],64)}}}),Yl=pe(pl,[["__scopeId","data-v-bdb85105"]]);export{Yl as default};
