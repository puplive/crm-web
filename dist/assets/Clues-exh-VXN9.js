import{p as ve,ao as be,d as G,c as z,a as ge,t as s,e as V,ae as he,o as n,h as c,i as a,b as y,n as _e,Z as $,ak as f,r as Q,Y as i,m as we,_ as ye,az as ke,w as Ee,y as Ce,aA as Se,X as U,$ as r,J as P,a5 as Ve,am as Ue,a7 as u,W as Pe,a1 as x,G as Re}from"./index-ChdcIJrL.js";import{E as Fe}from"./dialog-DbJwOmyO.js";/* empty css                */import{a as ze,E as $e}from"./form-item-DdZ5Cx-f.js";/* empty css              */import"./tag-BLuwCtMj.js";import{E as Be,a as Ie}from"./select-CFojiF63.js";import"./scrollbar-KEfnzSDG.js";import{a as ee,u as k,E as Ne}from"./popper-0BQq9gc1.js";import{E as Te}from"./pagination-C5L1MYoa.js";import{E as xe,a as De}from"./table-column-KY_s9lSy.js";import{E as Ae,a as Le}from"./checkbox-DQyKG8mV.js";/* empty css                */import{E as Me}from"./link-B23Blbts.js";/* empty css                       */import{E as Oe}from"./button-CqepsSyL.js";import{T as qe}from"./index-5_YXUShe.js";import{a as E}from"./index--fXIdRTf.js";import{e as Ge}from"./index-BjPVDYx_.js";/* empty css                *//* empty css                    */import{E as He}from"./index-Cu7tb_uH.js";import{d as q}from"./index-CsUjZ6yA.js";import"./index-DLgTfHU5.js";import"./use-form-item-K53fh2bM.js";import"./scroll-BpaO2lbo.js";import"./vnode-DYyY2w3r.js";import"./focus-trap-BApGIl1H.js";import"./refs-FNJSTAou.js";import"./event-BB_Ol6Sd.js";import"./castArray-BZ19sOog.js";import"./_baseClone-D2r_-jPa.js";import"./_initCloneObject-BgECRVCw.js";import"./isEqual-QuvmzckA.js";import"./index-D1rTV26J.js";/* empty css                      *//* empty css                                                              */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./aria-KgdLjl5h.js";import"./validator-Dnag8Flt.js";const je=ve({trigger:ee.trigger,placement:q.placement,disabled:ee.disabled,visible:k.visible,transition:k.transition,popperOptions:q.popperOptions,tabindex:q.tabindex,content:k.content,popperStyle:k.popperStyle,popperClass:k.popperClass,enterable:{...k.enterable,default:!0},effect:{...k.effect,default:"light"},teleported:k.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),Je={"update:visible":b=>be(b),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},Ke="onUpdate:visible",We=G({name:"ElPopover"}),Xe=G({...We,props:je,emits:Je,setup(b,{expose:p,emit:v}){const d=b,B=z(()=>d[Ke]),g=ge("popover"),R=s(),I=z(()=>{var l;return(l=V(R))==null?void 0:l.popperRef}),D=z(()=>[{width:he(d.width)},d.popperStyle]),_=z(()=>[g.b(),d.popperClass,{[g.m("plain")]:!!d.content}]),C=z(()=>d.transition===`${g.namespace.value}-fade-in-linear`),S=()=>{var l;(l=R.value)==null||l.hide()},N=()=>{v("before-enter")},A=()=>{v("before-leave")},L=()=>{v("after-enter")},M=()=>{v("update:visible",!1),v("after-leave")};return p({popperRef:I,hide:S}),(l,F)=>(n(),c(V(Ne),we({ref_key:"tooltipRef",ref:R},l.$attrs,{trigger:l.trigger,placement:l.placement,disabled:l.disabled,visible:l.visible,transition:l.transition,"popper-options":l.popperOptions,tabindex:l.tabindex,content:l.content,offset:l.offset,"show-after":l.showAfter,"hide-after":l.hideAfter,"auto-close":l.autoClose,"show-arrow":l.showArrow,"aria-label":l.title,effect:l.effect,enterable:l.enterable,"popper-class":V(_),"popper-style":V(D),teleported:l.teleported,persistent:l.persistent,"gpu-acceleration":V(C),"onUpdate:visible":V(B),onBeforeShow:N,onBeforeHide:A,onShow:L,onHide:M}),{content:a(()=>[l.title?(n(),y("div",{key:0,class:_e(V(g).e("title")),role:"title"},$(l.title),3)):f("v-if",!0),Q(l.$slots,"default",{},()=>[i($(l.content),1)])]),default:a(()=>[l.$slots.reference?Q(l.$slots,"reference",{key:0}):f("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var Ye=ye(Xe,[["__file","popover.vue"]]);const te=(b,p)=>{const v=p.arg||p.value,d=v==null?void 0:v.popperRef;d&&(d.triggerRef=b)};var Ze={mounted(b,p){te(b,p)},updated(b,p){te(b,p)}};const Qe="popover",et=ke(Ze,Qe),tt=Ee(Ye,{directive:et}),ot={class:"s-flex-col",style:{height:"100%"}},lt={class:"s-table-operations"},at={class:"s-flex-auto",style:{"min-height":"0"}},rt={class:"s-table-pagination"},nt={class:"dialog-footer"},st={class:"dialog-footer"},Xt=G({__name:"Clues",setup(b){Ve(),Ue();const p=Ce({page:1,perPage:10}),v=s(0),d=s({}),B=s([]),g=s(null),R=s([]),I=s([]),D=e=>{d.value=e,p.page=1,_()},_=async()=>{E.getList({status:1,...p,...d.value}).then(e=>{e.code===0&&(B.value=e.data.data,v.value=e.data.total)})},C=s({}),S=s(!1),N=s(null),A=e=>{C.value.id=e.id,S.value=!0},L=()=>{N.value.validate(e=>{e&&E.changeIntention(C.value).then(o=>{o.code===0?(u.success("转为意向成功"),_(),S.value=!1):u.error(o.msg)})})},M=()=>{let e=g.value.getSelectionRows().map(o=>o.id);if(e.length===0){u.warning("请选择需要删除的线索");return}He.confirm("确定删除所选线索？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{E.del({id:e}).then(o=>{o.code===0?(u.success("删除成功"),_()):u.error(o.msg)})}).catch(()=>{})},l=s({}),F=s(!1),H=s(null),j=s([]),oe=()=>{let e=g.value.getSelectionRows().map(o=>o.id);if(e.length===0){u.warning("请选择需要转移的线索");return}l.value.id=e,F.value=!0},le=()=>{H.value.validate(e=>{e&&E.changeUser(l.value).then(o=>{o.code===0?(u.success("转移成功"),F.value=!1,_()):u.error(o.msg)})})},ae=()=>{let e=g.value.getSelectionRows().map(o=>o.id);if(e.length===0){u.warning("请选择需要移至公海的线索");return}E.changePublic({id:e}).then(o=>{o.code===0?(u.success("移至公海成功"),_()):u.error(o.msg)})},re=()=>{E.clueExport({status:1}).then(e=>{e.code===0?(u.success("导出成功"),window.open(e.data.url,"_self")):u.error(e.msg)})};E.getSearchField().then(e=>{e.code===0&&(R.value=e.data)}),Ge().then(e=>{e.code===0&&(I.value=e.data)}),Se().then(e=>{e.code===0&&(j.value=e.data)});const J=s([]);(()=>{E.getCustomField().then(e=>{e.code===0&&(J.value=e.data,ne())})})(),_();const T=s([]),K=s([]),ne=()=>{setTimeout(()=>{let e=[];g.value.columns.forEach(o=>{o.label&&e.push(o.label)}),K.value=e,T.value=e.join(",").split(",")},0)},w=e=>T.value.includes(e);return(e,o)=>{const m=Oe,se=Pe("Menu"),ie=Re,pe=Ae,ue=Le,de=tt,h=De,me=Me,ce=xe,fe=Te,W=Be,X=Ie,O=ze,Y=$e,Z=Fe;return n(),y(P,null,[U("div",ot,[r(qe,{data:R.value,onSearch:D},null,8,["data"]),U("div",lt,[r(m,{size:"small",onClick:o[0]||(o[0]=t=>e.$router.push("/market/clues/add"))},{default:a(()=>[i("新建线索")]),_:1}),r(m,{size:"small",onClick:o[1]||(o[1]=t=>e.$router.push("/market/clues/import"))},{default:a(()=>[i("导入")]),_:1}),r(m,{size:"small",onClick:re},{default:a(()=>[i("导出")]),_:1}),r(m,{size:"small",onClick:oe},{default:a(()=>[i("转移给他人")]),_:1}),r(m,{size:"small",onClick:ae},{default:a(()=>[i("移至公海")]),_:1}),r(m,{size:"small",onClick:M},{default:a(()=>[i("删除")]),_:1}),r(de,{placement:"bottom-end",trigger:"click"},{reference:a(()=>[r(m,{size:"",link:""},{default:a(()=>[r(ie,{style:{}},{default:a(()=>[r(se)]),_:1})]),_:1})]),default:a(()=>[r(ue,{modelValue:T.value,"onUpdate:modelValue":o[2]||(o[2]=t=>T.value=t)},{default:a(()=>[U("ul",null,[(n(!0),y(P,null,x(K.value,t=>(n(),y("li",{class:"s-checkbox_item",key:t},[r(pe,{label:t,value:t},{default:a(()=>[i($(t),1)]),_:2},1032,["label","value"])]))),128))])]),_:1},8,["modelValue"])]),_:1})]),U("div",at,[r(ce,{ref_key:"tableRef",ref:g,data:B.value,border:"","table-layout":"fixed",height:"100%","show-overflow-tooltip":"","header-row-class-name":"s-table-header"},{default:a(()=>[r(h,{type:"selection",width:"42"}),w("序号")?(n(),c(h,{key:0,type:"index",label:"序号",width:"60"})):f("",!0),w("企业名称")?(n(),c(h,{key:1,prop:"companyName",label:"企业名称",width:"180"},{default:a(t=>[r(me,{href:"/market/clues/info?type=1&id="+t.row.id+"&exhibitionId="+t.row.exhibitionId+"&authUser="+t.row.authUser,type:"primary"},{default:a(()=>[i($(t.row.companyName),1)]),_:2},1032,["href"])]),_:1})):f("",!0),w("展会联系人")?(n(),c(h,{key:2,prop:"exhibitionContact",label:"展会联系人","min-width":"120"})):f("",!0),w("职位")?(n(),c(h,{key:3,prop:"duties",label:"职位"})):f("",!0),w("手机号")?(n(),c(h,{key:4,prop:"phone",label:"手机号","min-width":"120"})):f("",!0),w("跟进状态")?(n(),c(h,{key:5,prop:"recordStatus",label:"跟进状态","min-width":"120"},{default:a(t=>[i($({0:"无",1:"电话邀约",2:"客户拜访",3:"初步方案",4:"停滞"}[t.row.recordStatus]),1)]),_:1})):f("",!0),w("持有人")?(n(),c(h,{key:6,prop:"authUser",label:"持有人"})):f("",!0),(n(!0),y(P,null,x(J.value,t=>(n(),y(P,{key:t.key},[w(t.name)?(n(),c(h,{key:0,prop:t.key,label:t.name,"min-width":"120"},null,8,["prop","label"])):f("",!0)],64))),128)),w("操作")?(n(),c(h,{key:7,fixed:"right",label:"操作",width:"120"},{default:a(t=>[r(m,{link:"",type:"primary",onClick:pt=>A(t.row)},{default:a(()=>[i(" 转为意向客户 ")]),_:2},1032,["onClick"])]),_:1})):f("",!0)]),_:1},8,["data"])]),U("div",rt,[r(fe,{layout:"total, sizes, prev, pager, next","page-sizes":[10,20,50],total:v.value,"current-page":p.page,"onUpdate:currentPage":o[3]||(o[3]=t=>p.page=t),"page-size":p.perPage,"onUpdate:pageSize":o[4]||(o[4]=t=>p.perPage=t),onChange:_},null,8,["total","current-page","page-size"])])]),r(Z,{modelValue:S.value,"onUpdate:modelValue":o[7]||(o[7]=t=>S.value=t),title:"转为意向客户",width:"500",draggable:""},{footer:a(()=>[U("div",nt,[r(m,{onClick:o[6]||(o[6]=t=>S.value=!1)},{default:a(()=>[i("取消")]),_:1}),r(m,{type:"primary",onClick:L},{default:a(()=>[i("确定")]),_:1})])]),default:a(()=>[r(Y,{ref_key:"willFormRef",ref:N,model:C.value,"label-width":"auto","label-position":"left"},{default:a(()=>[r(O,{label:"项目",prop:"exhibitionId",rules:[{required:!0,message:"请选择项目"}]},{default:a(()=>[r(X,{modelValue:C.value.exhibitionId,"onUpdate:modelValue":o[5]||(o[5]=t=>C.value.exhibitionId=t),placeholder:"",filterable:""},{default:a(()=>[(n(!0),y(P,null,x(I.value,t=>(n(),y(P,{key:t.id},[t.status===1?(n(),c(W,{key:0,label:t.exhibitionName,value:t.id},null,8,["label","value"])):f("",!0)],64))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),r(Z,{modelValue:F.value,"onUpdate:modelValue":o[10]||(o[10]=t=>F.value=t),title:"转移销售线索",width:"500",draggable:""},{footer:a(()=>[U("div",st,[r(m,{onClick:o[9]||(o[9]=t=>F.value=!1)},{default:a(()=>[i("取消")]),_:1}),r(m,{type:"primary",onClick:le},{default:a(()=>[i("确定")]),_:1})])]),default:a(()=>[r(Y,{ref_key:"moveFormRef",ref:H,model:l.value,"label-width":"auto","label-position":"left"},{default:a(()=>[r(O,{label:""},{default:a(()=>[i("是否将选中的销售线索转移？")]),_:1}),r(O,{label:"销售线索所有人",prop:"userId",rules:[{required:!0,message:"请选择销售线索所有人"}]},{default:a(()=>[r(X,{modelValue:l.value.userId,"onUpdate:modelValue":o[8]||(o[8]=t=>l.value.userId=t),placeholder:"",filterable:""},{default:a(()=>[(n(!0),y(P,null,x(j.value,t=>(n(),c(W,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});export{Xt as default};