import{d as ae,l as C,b as y,O as d,R as e,i as l,o as u,F as B,U as H,h as V,P as s,Q as m,X as ne,Y as se,c as ve,s as ee,e as I,a3 as D,W as be,a5 as ye}from"./index-CXHZvf4q.js";import{E as he}from"./el-dialog-Dgi6K1gn.js";/* empty css                   *//* empty css                 */import"./el-tag-BKHQJBMw.js";import{a as ie,E as de}from"./el-select-ClqRiZmz.js";import{E as ke}from"./el-scrollbar-4lg7kmpw.js";import"./el-popper-kvSAsfd_.js";import{E as we,a as ge}from"./el-tab-pane-B7Tm3tQV.js";import{a as Ce,E as Ve}from"./el-form-item-CjzOUbj7.js";import{a as xe,E as Ee}from"./el-table-column-f6oES8sW.js";import"./el-checkbox-CzfPimkh.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                  *//* empty css                       */import{a as Ie,E as Te}from"./el-radio-DN0A5DbK.js";import{b as le,d as M,g as $e,e as Ue,f as Be,h as Ne,i as Re}from"./index-BJAn5NQn.js";/* empty css                   */import{c as _}from"./request-D5zMqTLz.js";import{E as re}from"./index-DvbXMlUp.js";import{E as ue}from"./index-Ck_64Yyt.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as Fe}from"./Move.vue_vue_type_script_setup_true_lang-DxNi__BT.js";import{_ as Se}from"./GoodsOrderDetail.vue_vue_type_script_setup_true_lang-NMng0ZGq.js";import{b as te,c as oe}from"./index-CmcOOHEj.js";import{_ as Le}from"./rules-pzSmFXOw.js";/* empty css                       */import{E as z}from"./index-Fj0T5jED.js";import"./index-BQnLN9qq.js";import"./use-form-item-B8Qj3pZg.js";import"./scroll-C6Gh4qq8.js";import"./vnode-BO_ADvFr.js";import"./refs-Dw1jXJTj.js";import"./event-BB_Ol6Sd.js";import"./_initCloneObject-CSlZU8KL.js";import"./isEqual-C7ib5S45.js";import"./castArray-DgK_tM7v.js";import"./index-CIeiIoKG.js";import"./_baseClone-BFD8Zqn6.js";import"./isArrayLikeObject-CFhIJ_TT.js";import"./index-CaMrKJHj.js";import"./aria-KgdLjl5h.js";import"./validator-BtsKtbIQ.js";const me=x=>(ne("data-v-d448d0ad"),x=x(),se(),x),Pe={class:"follow-up"},qe=me(()=>d("div",{class:"title"},"跟进记录",-1)),De={class:"form"},ze={class:"item"},Me=me(()=>d("label",null,"跟进状态",-1)),je={class:"record"},Ae={class:"list"},Oe={class:"p1"},Ge={class:"p2"},Qe=ae({__name:"FollowUp",props:["clueId"],setup(x,{expose:j}){const N=x,E=C(""),b=C(0),r=C(0),F=C(""),A=()=>{le.add({clueId:N.clueId,text:E.value,status:b.value,contactId:r.value,contactName:F.value}).then(v=>{v.code===0?(_.success("跟进记录添加成功"),T()):_.error(v.msg)})},O=C([]),T=()=>{le.getList({clueId:N.clueId}).then(v=>{v.code===0&&(O.value=v.data)})};T();const P=C([]),G=()=>{M.getList({clueId:N.clueId}).then(v=>{v.code===0&&(P.value=v.data)})};return G(),j({getContactList:G}),(v,k)=>{const a=re,w=de,q=ie,X=ue,S=ke;return u(),y("div",Pe,[qe,d("div",De,[e(a,{type:"textarea",placeholder:"请输入跟进内容",modelValue:E.value,"onUpdate:modelValue":k[0]||(k[0]=c=>E.value=c)},null,8,["modelValue"]),d("div",ze,[Me,e(q,{modelValue:b.value,"onUpdate:modelValue":k[1]||(k[1]=c=>b.value=c),placeholder:"跟进状态"},{default:l(()=>[e(w,{label:"未跟进",value:0}),e(w,{label:"电话邀约",value:1}),e(w,{label:"客户拜访",value:2}),e(w,{label:"初步方案",value:3}),e(w,{label:"停滞",value:4})]),_:1},8,["modelValue"]),e(q,{modelValue:r.value,"onUpdate:modelValue":k[2]||(k[2]=c=>r.value=c),placeholder:"联系人",onChange:k[3]||(k[3]=c=>{if(c===0)F.value="";else{let R=P.value.find(Q=>Q.id===c);F.value=R?R.name:""}})},{default:l(()=>[e(w,{label:"联系人",value:0}),(u(!0),y(B,null,H(P.value,c=>(u(),V(w,{key:c.id,label:c.name,value:c.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e(X,{type:"primary",onClick:A},{default:l(()=>[s("提交")]),_:1})])]),d("div",je,[e(S,null,{default:l(()=>[d("ul",Ae,[(u(!0),y(B,null,H(O.value,(c,R)=>(u(),y("li",{key:R,class:"item"},[d("div",Oe,[s(m(c.time)+" ",1),d("span",null,m(c.authUser),1),s(),d("span",null,m({0:"无",1:"电话邀约",2:"客户拜访",3:"初步方案",4:"停滞"}[c.status]),1)]),d("div",Ge,"（联系人："+m(c.contact)+"）"+m(c.text),1)]))),128))])]),_:1})])])}}}),We=pe(Qe,[["__scopeId","data-v-d448d0ad"]]),J=x=>(ne("data-v-0d2ceebe"),x=x(),se(),x),Xe={class:"clues-info"},Ye={class:"clues-info-header"},He={class:"clues-info-header-left"},Je={class:"p1"},Ke={class:"p2"},Ze={key:0},el={key:1},ll={class:"clues-info-header-right"},tl={class:"clues-info-content"},ol={class:"clues-info-left"},al={style:{}},nl={class:"title-bar"},sl=J(()=>d("label",{for:""},"公司信息",-1)),il={key:0},dl={key:1},rl={key:2},ul=J(()=>d("p",{style:{padding:"10px 0"}},"展位订单",-1)),pl=J(()=>d("p",{style:{padding:"10px 0","margin-top":"10px"}},"物料订单",-1)),ml={class:"clues-info-right"},cl=ae({__name:"CluesInfo",setup(x){const j=be(),N=ye(),E=N.query.type,b=N.query.id;N.query.exhibitionId;const r=C({customField:[],orderPosition:[],orderMaterial:[],contract:[]}),F=C([]),A=()=>{$e().then(n=>{n.code===0&&(F.value=n.data)})},O=ve(()=>{let n=[];for(let o in r.value.customFieldTrans){let g=r.value.customFieldTrans[o],h=F.value.find(p=>p.key===o);n.push({key:o,value:g,type:h?h.type:1,name:h?h.name:""})}return n}),T=()=>{Ue({id:b}).then(n=>{n.code===0&&(r.value=n.data)})},P=()=>{z.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Re({id:[b]}).then(n=>{n.code===0?(_.success("删除成功"),setTimeout(()=>{j.go(-1)},1e3)):_.error(n.msg)})}).catch(()=>{console.log("cancel")})},G=()=>{console.log(r.value.isNew),Be({id:b,status:r.value.isNew}).then(n=>{n.code===0?_.success("修改成功"):_.error(n.msg)})},v=()=>{M.getList({clueId:b}).then(n=>{n.code===0&&(a.list=n.data)})},k=C(null),a=ee({show:!1,isEdit:!1,list:[],form:{clueId:b,name:"",duties:"",type:0,mobile:"",tel:"",email:"",wechat:"",status:1,isExhibitionContact:1},setAdd:()=>{a.show=!0,a.isEdit=!1,a.form={clueId:b,name:"",duties:"",type:0,mobile:"",tel:"",email:"",wechat:"",status:1,isExhibitionContact:1}},setEdit:n=>{a.show=!0,a.isEdit=!0,a.form=n,a.form.clueId=b},add:()=>{k.value.validate().then(n=>{if(!n)return!1;M.add(a.form).then(o=>{o.code===0?(_.success("添加成功"),a.show=!1,v(),w.value.getContactList()):_.error(o.msg)})}).catch(()=>{})},edit:()=>{k.value.validate().then(n=>{if(!n)return!1;M.edit(a.form).then(o=>{o.code===0?(_.success("修改成功"),a.show=!1,v(),w.value.getContactList()):(_.error(o.msg),v())})}).catch(()=>{})},del:n=>{z.confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{M.del({id:n}).then(o=>{o.code===0?(_.success("删除成功"),v(),w.value.getContactList()):_.error(o.msg)})})}}),w=C(null),q=C(null),X=()=>{z.confirm("确定退展？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Ne({id:b}).then(n=>{n.code===0?(_.success("退展成功"),setTimeout(()=>{j.go(-1)},1e3)):_.error(n.msg)})})},S=ee({activeName:1,change:n=>{S.activeName=n,n===1&&(A(),v()),T()}}),c=(n,o)=>{z.confirm("是否确认要撤销订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{let g=te.revoke;o===2&&(g=oe.revoke),g({id:n}).then(h=>{h.code===0?(_.success("撤销成功"),T()):_.error(h.msg)})}).catch(()=>{})},R=(n,o)=>{z.confirm("是否确认要删除订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{let g=te.del;o===2&&(g=oe.del),g({id:n}).then(h=>{h.code===0?(_.success("删除成功"),T()):_.error(h.msg)})}).catch(()=>{})},Q=C(null),ce=n=>{Q.value.getDetail(n)};return T(),A(),v(),(n,o)=>{const g=Te,h=Ie,p=ue,f=Ce,i=xe,W=Ee,K=Ve,Y=ge,fe=we,L=re,$=de,Z=ie,_e=he;return u(),y(B,null,[d("div",Xe,[d("div",Ye,[d("div",He,[d("div",Je,m(r.value.companyName),1),d("div",Ke,[I(E)==="2"?(u(),y("span",Ze,"所属展商："+m(r.value.companyName),1)):D("",!0),I(E)==="2"?(u(),y("span",el,[s("新展商： "),e(h,{"model-value":r.value.isNew,"onUpdate:modelValue":o[0]||(o[0]=t=>r.value.isNew=t),onChange:G},{default:l(()=>[e(g,{value:!0,style:{"margin-right":"10px"}},{default:l(()=>[s("是")]),_:1}),e(g,{value:!1},{default:l(()=>[s("否")]),_:1})]),_:1},8,["model-value"])])):D("",!0),d("span",null,"客户经理："+m(r.value.authUser),1)])]),d("div",ll,[I(E)==="2"?(u(),y(B,{key:0},[r.value.isExit?(u(),V(p,{key:0,type:"info",size:"small",plain:"",disabled:""},{default:l(()=>[s("已退展")]),_:1})):(u(),V(p,{key:1,type:"primary",size:"small",onClick:X},{default:l(()=>[s("退展")]),_:1}))],64)):D("",!0),e(p,{type:"primary",size:"small",onClick:o[1]||(o[1]=()=>{q.value.setMove([I(b)])})},{default:l(()=>[s("转他人")]),_:1})])]),d("div",tl,[d("div",ol,[e(fe,{modelValue:S.activeName,"onUpdate:modelValue":o[3]||(o[3]=t=>S.activeName=t),onTabChange:S.change,type:"border-card",class:"demo-tabs",style:{height:"100%"}},{default:l(()=>[e(Y,{label:"资料",name:1},{default:l(()=>[d("div",al,[e(K,{ref_key:"form",ref:r,"label-width":"auto"},{default:l(()=>[d("div",nl,[sl,e(p,{type:"default",onClick:o[2]||(o[2]=t=>n.$router.push({name:"CluesEdit",query:{id:I(b)}})),size:"small"},{default:l(()=>[s("编辑")]),_:1}),e(p,{type:"default",onClick:P,size:"small"},{default:l(()=>[s("删除")]),_:1})]),e(f,{label:"企业名称"},{default:l(()=>[d("span",null,m(r.value.companyName),1)]),_:1}),e(f,{label:"联系人"},{default:l(()=>[d("span",null,m(r.value.contactName),1)]),_:1}),e(f,{label:"国家"},{default:l(()=>[d("span",null,m(r.value.country),1)]),_:1}),e(f,{label:"省份"},{default:l(()=>[d("span",null,m(r.value.province),1)]),_:1}),e(f,{label:"城市"},{default:l(()=>[d("span",null,m(r.value.city),1)]),_:1}),e(f,{label:"详细地址",prop:"address"},{default:l(()=>[d("span",null,m(r.value.address),1)]),_:1}),e(f,{label:"企业品牌",prop:""},{default:l(()=>[d("span",null,m(r.value.companyBrand&&r.value.companyBrand.length>0?r.value.companyBrand.join(","):""),1)]),_:1}),(u(!0),y(B,null,H(O.value,(t,U)=>(u(),V(f,{key:t.key,label:t.name},{default:l(()=>[t.type===5?(u(),y("span",il,m(t.value.join("，")),1)):t.type===7?(u(),y("span",dl,m(t.value.join("，")),1)):(u(),y("span",rl,m(t.value),1))]),_:2},1032,["label"]))),128)),e(f,{label:"参展联系人",prop:""},{default:l(()=>[e(p,{size:"small",onClick:a.setAdd},{default:l(()=>[s("添加")]),_:1},8,["onClick"])]),_:1}),e(W,{border:"",data:a.list,"show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:l(()=>[e(i,{prop:"name",label:"姓名"}),e(i,{prop:"duties",label:"职务"}),e(i,{prop:"type",label:"类别"},{default:l(t=>[s(m(["无","展位","财务","市场","现场"][t.row.type]),1)]),_:1}),e(i,{prop:"mobile",label:"手机号"}),e(i,{prop:"tel",label:"电话"}),e(i,{prop:"email",label:"邮箱"}),e(i,{prop:"wechat",label:"微信"}),e(i,{prop:"status",label:"在职状态","min-width":"120"},{default:l(t=>[s(m(["","在职","离职","调岗"][t.row.status]),1)]),_:1}),e(i,{prop:"isExhibitionContact",label:"展会联系人"},{default:l(t=>[s(m(t.row.isExhibitionContact===1?"是":"否"),1)]),_:1}),e(i,{label:"操作",fixed:"right",width:"150"},{default:l(t=>[e(p,{link:"",type:"primary",onClick:U=>a.setEdit(t.row)},{default:l(()=>[s("编辑")]),_:2},1032,["onClick"]),e(p,{link:"",type:"danger",onClick:U=>a.del(t.row.id)},{default:l(()=>[s("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},512)])]),_:1}),I(E)==="2"?(u(),V(Y,{key:0,label:"订单",name:2},{default:l(()=>[ul,e(W,{data:r.value.orderPosition,border:"","show-overflow-tooltip":""},{default:l(()=>[e(i,{prop:"orderCode",label:"订单编号","min-width":"120"}),e(i,{prop:"brand",label:"品牌"}),e(i,{prop:"positionCode",label:"展位号"}),e(i,{prop:"price",label:"订单金额","min-width":"120"}),e(i,{label:"操作",width:"150",fixed:"right"},{default:l(t=>[e(p,{link:"",type:"primary",onClick:U=>n.$router.push({name:"OrderBoothDetail",query:{id:t.row.id}})},{default:l(()=>[s("详情")]),_:2},1032,["onClick"]),t.row.orderStatus===1?(u(),V(p,{key:0,link:"",type:"primary",onClick:U=>c(t.row.id,1)},{default:l(()=>[s("撤销")]),_:2},1032,["onClick"])):(u(),y(B,{key:1},[e(p,{link:"",type:"info",disabled:""},{default:l(()=>[s("已撤销")]),_:1}),e(p,{link:"",type:"danger",onClick:U=>R(t.row.id,1)},{default:l(()=>[s("删除")]),_:2},1032,["onClick"])],64))]),_:1})]),_:1},8,["data"]),pl,e(W,{data:r.value.orderMaterial,border:"","show-overflow-tooltip":""},{default:l(()=>[e(i,{prop:"orderCode",label:"订单编号","min-width":"120"}),e(i,{prop:"positionCode",label:"展位号"}),e(i,{prop:"price",label:"订单金额","min-width":"120"}),e(i,{label:"操作",width:"150",fixed:"right"},{default:l(t=>[e(p,{link:"",type:"primary",onClick:U=>ce(t.row.id)},{default:l(()=>[s("详情")]),_:2},1032,["onClick"]),t.row.orderStatus===1?(u(),V(p,{key:0,link:"",type:"primary",onClick:U=>c(t.row.id,2)},{default:l(()=>[s("撤销")]),_:2},1032,["onClick"])):(u(),y(B,{key:1},[e(p,{link:"",type:"info",disabled:""},{default:l(()=>[s("已撤销")]),_:1}),e(p,{link:"",type:"danger",onClick:U=>R(t.row.id,2)},{default:l(()=>[s("删除")]),_:2},1032,["onClick"])],64))]),_:1})]),_:1},8,["data"])]),_:1})):D("",!0),I(E)==="2"?(u(),V(Y,{key:1,label:"合同",name:3},{default:l(()=>[e(W,{data:r.value.contract,border:"","show-overflow-tooltip":""},{default:l(()=>[e(i,{prop:"contractCode",label:"合同编号","min-width":"120"}),e(i,{prop:"contractType",label:"合同类型","min-width":"120"},{default:l(t=>[s(m({1:"展位合同",2:"物料合同",3:"展位+物料"}[t.row.contractType]),1)]),_:1}),e(i,{prop:"",label:"付款方式","min-width":"120"},{default:l(t=>[s(m("银行转账"))]),_:1}),e(i,{prop:"contractAmount",label:"合同金额","min-width":"120"}),e(i,{prop:"deposit",label:"预定金"}),e(i,{prop:"",label:"抵扣"}),e(i,{prop:"firstPayPrice",label:"一期款"}),e(i,{prop:"firstPayTime",label:"期限"}),e(i,{prop:"finalPayPrice",label:"尾款"}),e(i,{prop:"finalPayTime",label:"期限"}),e(i,{prop:"receivedPrice",label:"已收款"}),e(i,{prop:"unknownPrice",label:"未收款"}),e(i,{prop:"contractStatus",label:"合同状态","min-width":"120"},{default:l(t=>[s(m({0:"撤销",1:"已完成"}[t.row.contractStatus]),1)]),_:1}),e(i,{label:"操作",width:"150",fixed:"right"},{default:l(t=>[e(p,{link:"",type:"primary"},{default:l(()=>[s("详情")]),_:1}),t.row.orderStatus===1?(u(),V(p,{key:0,link:"",type:"primary"},{default:l(()=>[s("撤销")]),_:1})):(u(),y(B,{key:1},[e(p,{link:"",type:"info",disabled:""},{default:l(()=>[s("已撤销")]),_:1}),e(p,{link:"",type:"danger"},{default:l(()=>[s("删除")]),_:1})],64))]),_:1})]),_:1},8,["data"])]),_:1})):D("",!0)]),_:1},8,["modelValue","onTabChange"])]),d("div",ml,[e(We,{ref_key:"followUp",ref:w,clueId:I(b)},null,8,["clueId"])])])]),e(_e,{title:a.isEdit?"编辑":"添加联系人",modelValue:a.show,"onUpdate:modelValue":o[16]||(o[16]=t=>a.show=t),width:"500px",draggable:""},{footer:l(()=>[e(p,{type:"default",onClick:o[13]||(o[13]=t=>a.show=!1)},{default:l(()=>[s("取消")]),_:1}),a.isEdit?(u(),V(p,{key:0,type:"primary",onClick:o[14]||(o[14]=()=>a.edit())},{default:l(()=>[s("修改")]),_:1})):(u(),V(p,{key:1,type:"primary",onClick:o[15]||(o[15]=()=>a.add())},{default:l(()=>[s("添加")]),_:1}))]),default:l(()=>[e(K,{ref_key:"lxrRef",ref:k,model:a.form,"label-width":"auto"},{default:l(()=>[e(f,{label:"姓名",prop:"name",rules:[{required:!0,message:"请输入姓名"}]},{default:l(()=>[e(L,{modelValue:a.form.name,"onUpdate:modelValue":o[4]||(o[4]=t=>a.form.name=t)},null,8,["modelValue"])]),_:1}),e(f,{label:"职务",prop:"duties",rules:[{required:!0,message:"请输入职务"}]},{default:l(()=>[e(L,{modelValue:a.form.duties,"onUpdate:modelValue":o[5]||(o[5]=t=>a.form.duties=t)},null,8,["modelValue"])]),_:1}),e(f,{label:"类别"},{default:l(()=>[e(Z,{modelValue:a.form.type,"onUpdate:modelValue":o[6]||(o[6]=t=>a.form.type=t)},{default:l(()=>[e($,{label:"无",value:0}),e($,{label:"展位",value:1}),e($,{label:"财务",value:2}),e($,{label:"市场",value:3}),e($,{label:"现场",value:4})]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"手机号",prop:"mobile",rules:I(Le).phone},{default:l(()=>[e(L,{modelValue:a.form.mobile,"onUpdate:modelValue":o[7]||(o[7]=t=>a.form.mobile=t)},null,8,["modelValue"])]),_:1},8,["rules"]),e(f,{label:"电话"},{default:l(()=>[e(L,{modelValue:a.form.tel,"onUpdate:modelValue":o[8]||(o[8]=t=>a.form.tel=t)},null,8,["modelValue"])]),_:1}),e(f,{label:"邮箱"},{default:l(()=>[e(L,{modelValue:a.form.email,"onUpdate:modelValue":o[9]||(o[9]=t=>a.form.email=t)},null,8,["modelValue"])]),_:1}),e(f,{label:"微信"},{default:l(()=>[e(L,{modelValue:a.form.wechat,"onUpdate:modelValue":o[10]||(o[10]=t=>a.form.wechat=t)},null,8,["modelValue"])]),_:1}),e(f,{label:"在职状态",prop:"status",rules:[{required:!0,message:"请选择在职状态"}]},{default:l(()=>[e(Z,{modelValue:a.form.status,"onUpdate:modelValue":o[11]||(o[11]=t=>a.form.status=t)},{default:l(()=>[e($,{label:"在职",value:1}),e($,{label:"离职",value:2}),e($,{label:"调岗",value:3})]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"展会联系人",prop:"isExhibitionContact",rules:[{required:!0,message:"请选择展会联系人"}]},{default:l(()=>[e(h,{modelValue:a.form.isExhibitionContact,"onUpdate:modelValue":o[12]||(o[12]=t=>a.form.isExhibitionContact=t),class:"ml-4"},{default:l(()=>[e(g,{value:1},{default:l(()=>[s("是")]),_:1}),e(g,{value:0},{default:l(()=>[s("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"]),e(Fe,{ref_key:"moveRef",ref:q,onCallback:T},null,512),e(Se,{ref_key:"detailRef",ref:Q},null,512)],64)}}}),ot=pe(cl,[["__scopeId","data-v-0d2ceebe"]]);export{ot as default};
